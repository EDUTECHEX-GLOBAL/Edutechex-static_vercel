const nodemailer = require("nodemailer");

let transporter;

function getTransporter() {
  const { EMAIL_HOST, EMAIL_PORT, EMAIL_USER, EMAIL_PASS } = process.env;
  const emailFrom = process.env.EMAIL_FROM?.trim() || EMAIL_USER?.trim();
  const missing = [
    ["EMAIL_HOST", EMAIL_HOST],
    ["EMAIL_PORT", EMAIL_PORT],
    ["EMAIL_USER", EMAIL_USER],
    ["EMAIL_PASS", EMAIL_PASS],
  ].filter(([, value]) => !value?.trim()).map(([name]) => name);
  if (missing.length) {
    const error = new Error(`Email OTP is not configured. Add ${missing.join(", ")} to backend/.env.`);
    error.status = 503;
    throw error;
  }

  const port = Number(EMAIL_PORT);
  if (!Number.isInteger(port) || port < 1 || port > 65535) {
    const error = new Error("EMAIL_PORT must be a valid SMTP port number.");
    error.status = 503;
    throw error;
  }

  if (!transporter) {
    transporter = nodemailer.createTransport({
      host: EMAIL_HOST,
      port,
      secure: process.env.EMAIL_SECURE === "true" || port === 465,
      auth: { user: EMAIL_USER, pass: EMAIL_PASS },
    });
  }
  return { transporter, emailFrom };
}

async function sendVerificationCode(email, code) {
  const { transporter: mailer, emailFrom } = getTransporter();
  await mailer.sendMail({
    from: emailFrom,
    to: email,
    subject: "Your EduTechEx verification code",
    text: `Your EduTechEx verification code is ${code}. It expires in 10 minutes. If you did not request this, you can ignore this email.`,
    html: `<p>Your EduTechEx verification code is:</p><p style="font-size:24px;font-weight:bold;letter-spacing:6px">${code}</p><p>This code expires in 10 minutes. If you did not request this, you can ignore this email.</p>`,
  });
}

module.exports = { sendVerificationCode };
