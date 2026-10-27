require("dotenv").config({
  path: require("node:path").join(__dirname, ".env"),
  quiet: true,
});

const http = require("node:http");
const mongoose = require("mongoose");
const { handleSatRequest } = require("./routes/satRoutes");

const PORT = Number(process.env.PORT || 5000);
const allowedOrigins = new Set((process.env.ALLOWED_ORIGINS || "http://localhost:3000,http://localhost:3001")
  .split(",")
  .map((origin) => origin.trim())
  .filter(Boolean));

function send(response, status, payload) {
  response.writeHead(status, { "Content-Type": "application/json; charset=utf-8" });
  response.end(JSON.stringify(payload));
}

function readJson(request) {
  return new Promise((resolve, reject) => {
    let body = "";
    request.on("data", (chunk) => {
      body += chunk;
      if (body.length > 16_384) {
        reject(new Error("Request body is too large."));
        request.destroy();
      }
    });
    request.on("end", () => {
      try {
        resolve(JSON.parse(body || "{}"));
      } catch {
        reject(new Error("Request body must be valid JSON."));
      }
    });
    request.on("error", reject);
  });
}

const server = http.createServer(async (request, response) => {
  const origin = request.headers.origin;
  if (allowedOrigins.has(origin)) {
    response.setHeader("Access-Control-Allow-Origin", origin);
    response.setHeader("Vary", "Origin");
    response.setHeader("Access-Control-Allow-Methods", "GET, POST, OPTIONS");
    response.setHeader("Access-Control-Allow-Headers", "Content-Type");
  }

  if (request.method === "OPTIONS") {
    response.writeHead(204);
    response.end();
    return;
  }

  const url = new URL(request.url, `http://${request.headers.host}`);
  if (request.method === "GET" && url.pathname === "/api/health") {
    send(response, 200, { status: "ok", service: "edutechex-backend" });
    return;
  }

  try {
    const handled = await handleSatRequest(request, response, url, readJson, send);
    if (!handled) send(response, 404, { error: "Route not found." });
  } catch (error) {
    send(response, error.status || 500, { error: error.message || "Unexpected server error." });
  }
});

async function start() {
  const mongoUri = process.env.MONGO_URI;
  if (!mongoUri) {
    throw new Error("MONGO_URI is missing. Add it to backend/.env.");
  }

  await mongoose.connect(mongoUri, { serverSelectionTimeoutMS: 10000 });
  server.listen(PORT, "0.0.0.0", () => {
    console.log(`EduTechEx backend listening on http://localhost:${PORT}`);
  });
}

start().catch((error) => {
  console.error("Could not connect to MongoDB. Check MONGO_URI, Atlas network access, and database-user credentials.");
  process.exit(1);
});
