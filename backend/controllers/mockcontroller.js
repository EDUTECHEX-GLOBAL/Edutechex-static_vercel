const MockResult = require("../models/mockmodel");
const mongoose = require("mongoose");

function calculateSatScale(correct, total) {
  if (!total || total <= 0) return 200;
  const ratio = Math.max(0, Math.min(1, correct / total));
  return 200 + 10 * Math.round(60 * ratio);
}

function normalizeModules(modules = []) {
  const defaultMeta = [
    { moduleNumber: 1, moduleName: "Reading & Writing - Module 1", totalQuestions: 27 },
    { moduleNumber: 2, moduleName: "Reading & Writing - Module 2", totalQuestions: 27 },
    { moduleNumber: 3, moduleName: "Math - Module 1", totalQuestions: 22 },
    { moduleNumber: 4, moduleName: "Math - Module 2", totalQuestions: 22 },
  ];

  return defaultMeta.map((meta, index) => {
    const userMod = modules.find((m) => Number(m.moduleNumber) === meta.moduleNumber) || modules[index] || {};
    const total = Number(userMod.totalQuestions) || meta.totalQuestions;
    const score = Math.max(0, Math.min(total, Number(userMod.score) || 0));
    const wrong = typeof userMod.wrong === "number" ? userMod.wrong : Math.max(0, total - score);
    const blank = typeof userMod.blank === "number" ? userMod.blank : 0;

    return {
      moduleNumber: meta.moduleNumber,
      moduleName: userMod.moduleName || meta.moduleName,
      score,
      totalQuestions: total,
      wrong,
      blank,
      completed: userMod.completed !== false,
    };
  });
}

async function submitMockResult(request, response, readJson, send) {
  let body;
  try {
    body = await readJson(request);
  } catch (error) {
    send(response, error.message === "Request body must be valid JSON." ? 400 : 413, {
      error: error.message,
    });
    return;
  }

  const {
    studentEmail = "student@edutechex.com",
    studentName = "Student",
    registrationId = "",
    testId,
    testTitle,
    modules: inputModules = [],
  } = body;

  if (!testId) {
    send(response, 400, { error: "testId is required to submit mock results." });
    return;
  }

  const normalizedModules = normalizeModules(inputModules);
  const rawScore = normalizedModules.reduce((sum, m) => sum + m.score, 0);
  const totalQuestions = normalizedModules.reduce((sum, m) => sum + m.totalQuestions, 0);

  const rwCorrect = (normalizedModules[0]?.score || 0) + (normalizedModules[1]?.score || 0);
  const rwTotal = (normalizedModules[0]?.totalQuestions || 27) + (normalizedModules[1]?.totalQuestions || 27);
  const mathCorrect = (normalizedModules[2]?.score || 0) + (normalizedModules[3]?.score || 0);
  const mathTotal = (normalizedModules[2]?.totalQuestions || 22) + (normalizedModules[3]?.totalQuestions || 22);

  const readingWritingScore = Number(body.readingWritingScore) || calculateSatScale(rwCorrect, rwTotal);
  const mathScore = Number(body.mathScore) || calculateSatScale(mathCorrect, mathTotal);
  const scaleScore = Number(body.scaleScore) || (readingWritingScore + mathScore);

  try {
    const mockResult = await MockResult.create({
      studentEmail: String(studentEmail).toLowerCase().trim(),
      studentName: String(studentName).trim() || "Student",
      registrationId: String(registrationId || "").trim(),
      testId: String(testId).padStart(2, "0"),
      testTitle: testTitle || `Full SAT Mock ${String(testId).padStart(2, "0")}`,
      modules: normalizedModules,
      rawScore,
      totalQuestions,
      scaleScore,
      readingWritingScore,
      mathScore,
      status: "completed",
      completedAt: new Date(),
    });

    send(response, 201, {
      success: true,
      message: "Mock test completed and results saved successfully.",
      result: mockResult,
    });
  } catch (error) {
    console.error("Error saving mock test result:", error);
    send(response, 500, {
      error: "Could not save mock test result.",
      details: error.message,
    });
  }
}

async function getStudentMockResults(request, response, studentEmail, send) {
  try {
    const email = String(studentEmail || "").toLowerCase().trim();
    if (!email) {
      send(response, 400, { error: "studentEmail is required." });
      return;
    }

    const results = await MockResult.find({ studentEmail: email })
      .sort({ completedAt: -1 })
      .lean();

    send(response, 200, {
      success: true,
      count: results.length,
      results,
    });
  } catch (error) {
    console.error("Error fetching student mock results:", error);
    send(response, 500, {
      error: "Could not fetch student mock results.",
      details: error.message,
    });
  }
}

async function getMockResultById(request, response, attemptId, send) {
  try {
    let result = null;
    if (mongoose.Types.ObjectId.isValid(attemptId)) {
      result = await MockResult.findById(attemptId).lean();
    }

    if (!result) {
      // Allow lookup by testId for latest student attempt
      result = await MockResult.findOne({ testId: String(attemptId).padStart(2, "0") })
        .sort({ completedAt: -1 })
        .lean();
    }

    if (!result) {
      send(response, 404, { error: "Mock test result not found." });
      return;
    }

    send(response, 200, {
      success: true,
      result,
    });
  } catch (error) {
    console.error("Error fetching mock result by ID:", error);
    send(response, 500, {
      error: "Could not fetch mock result.",
      details: error.message,
    });
  }
}

module.exports = {
  submitMockResult,
  getStudentMockResults,
  getMockResultById,
  calculateSatScale,
};
