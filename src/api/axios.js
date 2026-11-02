import axios from "axios";

// Read API base URL from root .env (REACT_APP_API_URL)
// Defaults to local backend if not specified
const API_BASE_URL = process.env.REACT_APP_API_URL || "http://localhost:5000/api";

const api = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    "Content-Type": "application/json",
  },
  timeout: 15000,
});

// Request interceptor: attach auth tokens or headers if needed
api.interceptors.request.use(
  (config) => {
    // Example: attach JWT token if present in localStorage
    const token = localStorage.getItem("auth_token");
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// Response interceptor: handle errors centrally
api.interceptors.response.use(
  (response) => response,
  (error) => {
    // Log errors for debugging during development
    console.error("API Error:", error.response?.data || error.message);
    return Promise.reject(error);
  }
);

export default api;

