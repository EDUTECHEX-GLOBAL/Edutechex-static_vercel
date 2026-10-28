const mongoose = require("mongoose");

const moduleScoreSchema = new mongoose.Schema({
  moduleNumber: { type: Number, required: true }, // 1, 2, 3, 4
  moduleName: { type: String, required: true },   // "Reading & Writing - Module 1", etc.
  score: { type: Number, required: true, default: 0 }, // correct answers
  totalQuestions: { type: Number, required: true, default: 27 },
  wrong: { type: Number, default: 0 },
  blank: { type: Number, default: 0 },
  completed: { type: Boolean, default: true },
}, { _id: false });

const mockResultSchema = new mongoose.Schema({
  studentEmail: { type: String, required: true, lowercase: true, trim: true, index: true },
  studentName: { type: String, trim: true, default: "Student" },
  registrationId: { type: String, trim: true },
  testId: { type: String, required: true, index: true }, // e.g. "01", "02"
  testTitle: { type: String, required: true },          // e.g. "Full SAT Mock 01"
  modules: {
    type: [moduleScoreSchema],
    default: [],
  },
  rawScore: { type: Number, required: true, default: 0 }, // out of 98
  totalQuestions: { type: Number, default: 98 },
  scaleScore: { type: Number, required: true, default: 400 }, // out of 1600
  readingWritingScore: { type: Number, default: 200 },       // out of 800
  mathScore: { type: Number, default: 200 },                 // out of 800
  status: { type: String, default: "completed", enum: ["completed", "in-progress"] },
  completedAt: { type: Date, default: Date.now },
}, { timestamps: true });

const MockResult = mongoose.models.MockResult || mongoose.model("MockResult", mockResultSchema);

module.exports = MockResult;
