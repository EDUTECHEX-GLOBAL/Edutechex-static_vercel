const {
  submitMockResult,
  getStudentMockResults,
  getMockResultById,
} = require("../controllers/mockcontroller");

async function handleMockRequest(request, response, url, readJson, send) {
  // POST /api/sat/mocks/submit
  if (request.method === "POST" && url.pathname === "/api/sat/mocks/submit") {
    await submitMockResult(request, response, readJson, send);
    return true;
  }

  // GET /api/sat/mocks/student/:studentEmail
  const studentMatch = url.pathname.match(/^\/api\/sat\/mocks\/student\/([^/]+)$/);
  if (request.method === "GET" && studentMatch) {
    const studentEmail = decodeURIComponent(studentMatch[1]);
    await getStudentMockResults(request, response, studentEmail, send);
    return true;
  }

  // GET /api/sat/mocks/result/:attemptId
  const resultMatch = url.pathname.match(/^\/api\/sat\/mocks\/result\/([\w-]+)$/);
  if (request.method === "GET" && resultMatch) {
    await getMockResultById(request, response, resultMatch[1], send);
    return true;
  }

  return false;
}

module.exports = { handleMockRequest };
