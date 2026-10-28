const mongoose = require("mongoose");

const registrationSchema = new mongoose.Schema({
  name: { type: String, required: true, trim: true },
  email: { type: String, required: true, trim: true, lowercase: true },
  phone: { type: String, required: true, trim: true },
  curriculum: { type: String, required: false, trim: true, default: "General" },
  gender: { type: String, required: false, trim: true },
  passwordHash: { type: String, select: false },
  verified: { type: Boolean, default: false },
  otpHash: { type: String, select: false },
  otpExpiresAt: { type: Date },
  otpAttempts: { type: Number, default: 0 },
}, { timestamps: true });

module.exports = mongoose.models.Registration
  || mongoose.model("Registration", registrationSchema);
