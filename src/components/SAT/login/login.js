import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./login.css";
import edutechLogo from "../../../assets/Edutech-logo.svg";

const STORAGE_KEY = "edutechex-sat-registration";
const SAT_API_URL = process.env.REACT_APP_API_URL || "http://localhost:5000/api";

const heroFeatures = [
  {
    title: "Global Opportunities",
    text: "Explore top universities worldwide",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="9.5" />
        <path d="M2.5 12h19" />
        <path d="M12 2.5c2.6 2.7 4 6 4 9.5s-1.4 6.8-4 9.5c-2.6-2.7-4-6-4-9.5s1.4-6.8 4-9.5z" />
      </svg>
    ),
  },
  {
    title: "Top Rankings",
    text: "Find the best programs for your goals",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
        <path d="M4 10h4v10H4zM10 4h4v16h-4zM16 13h4v7h-4z" />
      </svg>
    ),
  },
  {
    title: "Brighter Future",
    text: "Get the right guidance, every step",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
        <path d="M16 11c1.66 0 2.99-1.34 2.99-3S17.66 5 16 5s-3 1.34-3 3 1.34 3 3 3zm-8 0c1.66 0 2.99-1.34 2.99-3S9.66 5 8 5 5 6.34 5 8s1.34 3 3 3zm0 2c-2.33 0-7 1.17-7 3.5V19h14v-2.5c0-2.33-4.67-3.5-7-3.5zm8 0c-.29 0-.62.02-.97.05 1.16.84 1.97 1.97 1.97 3.45V19h6v-2.5c0-2.33-4.67-3.5-7-3.5z" />
      </svg>
    ),
  },
];

function Login() {
  const navigate = useNavigate();
  const [message, setMessage] = useState("");
  const [submitting, setSubmitting] = useState(false);
  const [form, setForm] = useState({ email: "", password: "", rememberMe: true });
  const [showPassword, setShowPassword] = useState(false);
  const update = (event) => setForm({ ...form, [event.target.name]: event.target.value });

  const submit = async (event) => {
    event.preventDefault();
    const email = form.email.trim();
    if (!email) { setMessage("Enter your email address."); return; }
    if (!form.password) { setMessage("Enter your password."); return; }
    setSubmitting(true);
    setMessage("");
    try {
      const response = await fetch(`${SAT_API_URL}/sat/login`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password: form.password }),
      });
      const result = await response.json().catch(() => ({}));
      if (!response.ok) throw new Error(result.error || "Login could not be completed.");
      sessionStorage.setItem(STORAGE_KEY, JSON.stringify({
        registrationId: result.id,
        name: result.name,
        email: result.email,
        phone: result.phone,
        gender: result.gender,
        curriculum: result.curriculum,
      }));
      navigate("/sat/mock-tests");
    } catch (error) {
      setMessage(error.message || "Could not log in. Please check your credentials.");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <main className="sat-page sat-login-page">
      {/* Top Navbar: Brand logo on left, Register action on right top */}
      <header className="sat-login-navbar">
        <Link to="/" className="sat-login-nav-brand" aria-label="EduTechEx Home">
          <img src={edutechLogo} alt="EDUTECHEX" className="sat-login-nav-logo" />
        </Link>
        <div className="sat-login-nav-right">
          <span className="sat-login-nav-prompt">Don't have an account?</span>
          <Link to="/sat/register" className="sat-login-nav-btn" id="sat-top-register-btn" aria-label="Create a new account">
            <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
              <circle cx="9" cy="7" r="4" />
              <line x1="19" y1="8" x2="19" y2="14" />
              <line x1="22" y1="11" x2="16" y2="11" />
            </svg>
            <span>Register</span>
          </Link>
        </div>
      </header>

      <div className="sat-login-container">
        {/* Left column: hero copy */}
        <section className="sat-login-hero">
          <div className="sat-login-badge">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
              <path d="M12 3L1 9l11 6 9-4.91V17h2V9L12 3zM5 13.18v4L12 21l7-3.82v-4L12 17l-7-3.82z" />
            </svg>
            <span>Your Global Education Partner</span>
          </div>

          <h1 className="sat-login-title">
            Welcome Back<br /><span>Continue Practice</span>
          </h1>

          <p className="sat-login-subtitle">
            Log in to access your SAT mock test papers, track your scores, and continue your journey towards top universities.
          </p>

          <div className="sat-login-features">
            {heroFeatures.map((feature) => (
              <div className="sat-login-feature-item" key={feature.title}>
                <span className="sat-login-feature-icon" aria-hidden="true">{feature.icon}</span>
                <span className="sat-login-feature-copy">
                  <strong className="sat-login-feature-title">{feature.title}</strong>
                  <span className="sat-login-feature-text">{feature.text}</span>
                </span>
              </div>
            ))}
          </div>
        </section>

        {/* Right column: login card */}
        <div className="sat-login-card-wrap">
          <section className="sat-login-card">
            <div className="sat-login-card-intro">
              <h1>Log In to Your Account</h1>
              <p>Enter your registered email and password to access your SAT mock tests.</p>
            </div>

            <form className="sat-login-form" onSubmit={submit} noValidate>
              <div className="sat-login-field-group">
                <label className="sat-login-label" htmlFor="sat-login-email">
                  Email Address <span className="sat-login-required">*</span>
                </label>
                <div className="sat-login-input-wrap">
                  <span className="sat-login-icon" aria-hidden="true">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                      <rect width="20" height="16" x="2" y="4" rx="2" />
                      <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                    </svg>
                  </span>
                  <input
                    id="sat-login-email"
                    name="email"
                    type="email"
                    autoComplete="email"
                    placeholder="you@example.com"
                    value={form.email}
                    onChange={update}
                    required
                  />
                </div>
              </div>

              <div className="sat-login-field-group">
                <label className="sat-login-label" htmlFor="sat-login-password">
                  Password <span className="sat-login-required">*</span>
                </label>
                <div className="sat-login-input-wrap">
                  <span className="sat-login-icon" aria-hidden="true">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                      <rect width="18" height="11" x="3" y="11" rx="2" ry="2" />
                      <path d="M7 11V7a5 5 0 0 1 10 0v4" />
                    </svg>
                  </span>
                  <input
                    id="sat-login-password"
                    name="password"
                    type={showPassword ? "text" : "password"}
                    autoComplete="current-password"
                    placeholder="Enter your password"
                    value={form.password}
                    onChange={update}
                    required
                  />
                  <button
                    className="sat-login-eye-btn"
                    type="button"
                    aria-label={showPassword ? "Hide password" : "Show password"}
                    aria-pressed={showPassword}
                    onClick={() => setShowPassword((shown) => !shown)}
                  >
                    {showPassword ? (
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19m-6.72-1.07a3 3 0 1 1-4.24-4.24" />
                        <path d="m1 1 22 22" />
                      </svg>
                    ) : (
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
                        <circle cx="12" cy="12" r="3" />
                      </svg>
                    )}
                  </button>
                </div>
              </div>

              <div className="sat-login-extra-row">
                <label className="sat-login-remember">
                  <input
                    type="checkbox"
                    name="rememberMe"
                    checked={form.rememberMe}
                    onChange={(event) => setForm({ ...form, rememberMe: event.target.checked })}
                  />
                  <span>Remember me</span>
                </label>
                <button
                  type="button"
                  className="sat-login-forgot-btn"
                  onClick={() => setMessage("Need password assistance? Please email support@edutechex.com or create a new registration.")}
                >
                  Forgot password?
                </button>
              </div>

              {message && <div className="sat-login-message sat-login-error" role="alert">{message}</div>}

              <button className="sat-login-submit-btn" type="submit" disabled={submitting}>
                {submitting ? "Logging In…" : "Log In"}
                {!submitting && (
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M5 12h14M12 5l7 7-7 7" />
                  </svg>
                )}
              </button>

              <div className="sat-login-secure-note">
                <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <rect width="18" height="11" x="3" y="11" rx="2" ry="2" />
                  <path d="M7 11V7a5 5 0 0 1 10 0v4" />
                </svg>
                <span>Your information is safe and secure.</span>
              </div>

              <div className="sat-login-switch">
                <span>Don't have an account?</span>
                <Link to="/sat/register" className="sat-login-switch-link">Register for free</Link>
              </div>
            </form>
          </section>
        </div>
      </div>
    </main>
  );
}

export default Login;
export { Login };
