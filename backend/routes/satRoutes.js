const { createRegistration, verifyRegistration, loginRegistration } = require("../controllers/satRegistrationController");

async function handleSatRequest(request, response, url, readJson, send) {
  if (request.method === "POST" && url.pathname === "/api/sat/registrations") {
    await createRegistration(request, response, readJson, send);
    return true;
  }

  const verificationMatch = url.pathname.match(/^\/api\/sat\/registrations\/([\w-]+)\/verify$/);
  if (request.method === "POST" && verificationMatch) {
    await verifyRegistration(request, response, verificationMatch[1], readJson, send);
    return true;
  }

  if (request.method === "POST" && url.pathname === "/api/sat/login") {
    await loginRegistration(request, response, readJson, send);
    return true;
  }

  return false;
}

module.exports = { handleSatRequest };
