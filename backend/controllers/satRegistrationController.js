const Registration = require("../models/Registration");
const { createHmac, randomInt, timingSafeEqual } = require("node:crypto");
const { sendVerificationCode } = require("../services/emailService");

const OTP_LIFETIME_MS = 10 * 60 * 1000;
const MAX_OTP_ATTEMPTS = 5;

function emailErrorResponse(error) {
  if (error.status) return { status: error.status, message: error.message };
  if (error.code === "EAUTH" || error.responseCode === 535) {
    return {
      status: 502,
      message: "The email provider rejected the SMTP login. Check EMAIL_USER and EMAIL_PASS; some providers require an app password.",
    };
  }
  if (["ETIMEDOUT", "ECONNECTION", "ECONNREFUSED", "ENOTFOUND", "ESOCKET"].includes(error.code)) {
    return {
      status: 502,
      message: "Could not reach the SMTP server. Check EMAIL_HOST, EMAIL_PORT, TLS settings, and network or firewall access.",
    };
  }
  return {
    status: 502,
    message: "The email provider rejected the message. Check the verified sender address and SMTP settings.",
  };
}

function hashCode(registrationId, code) {
  const secret = process.env.OTP_SECRET || process.env.JWT_SECRET;
  if (!secret) {
    const error = new Error("OTP_SECRET or JWT_SECRET must be configured in backend/.env.");
    error.status = 503;
    throw error;
  }
  return createHmac("sha256", secret).update(`${registrationId}:${code}`).digest("hex");
}

function requiredText(value) {
  return typeof value === "string" && value.trim().length > 0;
}

async function createRegistration(request, response, readJson, send) {
  let body;
  try {
    body = await readJson(request);
  } catch (error) {
    send(response, error.message === "Request body must be valid JSON." ? 400 : 413, { error: error.message });
    return;
  }

  const { name, email, phone, curriculum } = body;
  if (![name, email, phone, curriculum].every(requiredText)) {
    send(response, 400, { error: "Name, email, phone, and curriculum are required." });
    return;
  }

  const code = randomInt(0, 1_000_000).toString().padStart(6, "0");
  let registration;
  try {
    registration = new Registration({
      name,
      email,
      phone,
      curriculum,
      otpExpiresAt: new Date(Date.now() + OTP_LIFETIME_MS),
    });
    registration.otpHash = hashCode(registration.id, code);
    await registration.save();
    await sendVerificationCode(registration.email, code);
  } catch (error) {
    if (registration?._id) await Registration.deleteOne({ _id: registration._id });
    const emailError = emailErrorResponse(error);
    send(response, emailError.status, { error: emailError.message });
    return;
  }
  send(response, 201, { id: registration.id, status: "registered", message: "Verification code sent to your email." });
}

async function verifyRegistration(request, response, registrationId, readJson, send) {
  let body;
  try {
    body = await readJson(request);
  } catch (error) {
    send(response, error.message === "Request body must be valid JSON." ? 400 : 413, { error: error.message });
    return;
  }

  const registration = await Registration.findById(registrationId).select("+otpHash");
  if (!registration) {
    send(response, 404, { error: "Registration not found. Please register again." });
    return;
  }
  if (typeof body.code !== "string" || !/^\d{6}$/.test(body.code)) {
    send(response, 400, { error: "Enter the six-digit verification code sent to your email." });
    return;
  }

  if (registration.verified) {
    send(response, 200, { id: registrationId, status: "verified" });
    return;
  }
  if (registration.otpAttempts >= MAX_OTP_ATTEMPTS) {
    send(response, 429, { error: "Too many incorrect attempts. Please register again for a new code." });
    return;
  }
  if (!registration.otpExpiresAt || registration.otpExpiresAt.getTime() <= Date.now()) {
    send(response, 400, { error: "That verification code has expired. Please register again for a new code." });
    return;
  }

  const submittedHash = Buffer.from(hashCode(registration.id, body.code), "hex");
  const savedHash = Buffer.from(registration.otpHash || "", "hex");
  if (submittedHash.length !== savedHash.length || !timingSafeEqual(submittedHash, savedHash)) {
    registration.otpAttempts += 1;
    await registration.save();
    send(response, registration.otpAttempts >= MAX_OTP_ATTEMPTS ? 429 : 400, {
      error: registration.otpAttempts >= MAX_OTP_ATTEMPTS
        ? "Too many incorrect attempts. Please register again for a new code."
        : "The verification code is incorrect.",
    });
    return;
  }

  registration.verified = true;
  registration.otpHash = undefined;
  registration.otpExpiresAt = undefined;
  await registration.save();
  send(response, 200, { id: registrationId, status: "verified" });
}

module.exports = { createRegistration, verifyRegistration };
