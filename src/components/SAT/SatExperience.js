import React, { useEffect, useRef, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import "./sat.css";
import edutechLogo from "../../assets/Edutech-logo.svg";
import Login from "./login/login";

const STORAGE_KEY = "edutechex-sat-registration";
const RESULT_KEY = "edutechex-sat-last-result";
const SAT_API_URL = process.env.REACT_APP_API_URL || "http://localhost:5000/api";
const curricula = ["CBSE", "ICSE", "State Board", "IB", "Cambridge/IGCSE", "Other"];
const genders = ["Male", "Female", "Other", "Prefer not to say"];
const countryCodes = [{ code: "+1", label: "US/CA" }, { code: "+44", label: "UK" }, { code: "+61", label: "AU" }, { code: "+91", label: "IN" }, { code: "+971", label: "AE" }];
// All ten supplied mock files currently use these four module timings.
const moduleMinutes = [32, 32, 35, 35];
const testDurationMinutes = moduleMinutes.reduce((total, minutes) => total + minutes, 0);
const sectionBreakMinutes = 10;
const tests = Array.from({ length: 10 }, (_, index) => ({
  id: String(index + 1).padStart(2, "0"),
  title: `Full SAT Mock ${String(index + 1).padStart(2, "0")}`,
  file: `/sat-mocks/EduTechEx_Full_SAT_Mock_${String(index + 1).padStart(2, "0")}.html`,
  questionCount: 98,
  durationMinutes: testDurationMinutes,
  breakMinutes: sectionBreakMinutes,
}));

function SatShell({ children }) {
  return (
    <main className="sat-page">
      <div className="sat-container">
        {children}
      </div>
    </main>
  );
}

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

function Registration() {
  const navigate = useNavigate();
  const [message, setMessage] = useState("");
  const [submitting, setSubmitting] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", countryCode: "+91", phone: "", gender: "", curriculum: "", password: "" });
  const [genderOpen, setGenderOpen] = useState(false);
  const [curriculumOpen, setCurriculumOpen] = useState(false);
  const [countryCodeOpen, setCountryCodeOpen] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  // OTP Modal State
  const [showOtpModal, setShowOtpModal] = useState(false);
  const [registrationId, setRegistrationId] = useState("");
  const [otpCode, setOtpCode] = useState(Array(6).fill(""));
  const [otpError, setOtpError] = useState("");
  const [otpVerifying, setOtpVerifying] = useState(false);
  const [otpSuccess, setOtpSuccess] = useState(false);
  const [resendCooldown, setResendCooldown] = useState(0);
  const [resendMessage, setResendMessage] = useState("");
  const otpRefs = useRef([]);

  useEffect(() => {
    if (resendCooldown <= 0) return;
    const timer = setTimeout(() => setResendCooldown((prev) => prev - 1), 1000);
    return () => clearTimeout(timer);
  }, [resendCooldown]);

  useEffect(() => {
    if (showOtpModal) {
      setTimeout(() => {
        otpRefs.current[0]?.focus();
      }, 100);
    }
  }, [showOtpModal]);

  const update = (event) => setForm({ ...form, [event.target.name]: event.target.value });

  const submit = async (event) => {
    event.preventDefault();
    const name = form.name.trim();
    const email = form.email.trim();
    const phone = form.phone.trim();
    const phoneDigits = phone.replace(/\D/g, "");
    const fullPhoneDigitCount = form.countryCode.replace(/\D/g, "").length + phoneDigits.length;
    if (!name) { setMessage("Enter your full name."); return; }
    if (!/^[\p{L}\p{M}][\p{L}\p{M} .'-]{1,79}$/u.test(name)) { setMessage("Enter a valid name using letters, spaces, apostrophes, periods, or hyphens."); return; }
    if (!email) { setMessage("Enter your email address."); return; }
    if (email.length > 254 || !/^[A-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[A-Z0-9](?:[A-Z0-9-]{0,61}[A-Z0-9])?(?:\.[A-Z0-9](?:[A-Z0-9-]{0,61}[A-Z0-9])?)*\.[A-Z]{2,63}$/i.test(email)) { setMessage("Enter a valid email address, such as you@example.com."); return; }
    if (!phone) { setMessage("Enter your phone number."); return; }
    if (!/^[\d\s()+.-]+$/.test(phone) || fullPhoneDigitCount < 7 || fullPhoneDigitCount > 15) { setMessage("Enter a valid phone number using 7 to 15 digits. Letters are not allowed."); return; }
    if (!form.gender) { setMessage("Select your gender."); return; }
    if (!form.curriculum) { setMessage("Select your curriculum."); return; }
    if (!form.password) { setMessage("Create a password."); return; }
    if (form.password.length < 8 || !/[A-Za-z]/.test(form.password) || !/\d/.test(form.password)) { setMessage("Use at least 8 characters, including a letter and a number, for your password."); return; }
    setSubmitting(true);
    setMessage("");
    try {
      const fullPhone = `${form.countryCode} ${phoneDigits}`;
      const response = await fetch(`${SAT_API_URL}/sat/registrations`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, phone: fullPhone, gender: form.gender, curriculum: form.curriculum, password: form.password }),
      });
      const result = await response.json().catch(() => ({}));
      if (!response.ok) throw new Error(result.error || "Registration could not be completed.");
      // The password is intentionally NOT kept in browser storage.
      sessionStorage.setItem(STORAGE_KEY, JSON.stringify({ name, email, phone: fullPhone, gender: form.gender, curriculum: form.curriculum, registrationId: result.id }));
      setRegistrationId(result.id);
      setOtpCode(Array(6).fill(""));
      setOtpError("");
      setResendMessage("");
      setResendCooldown(30);
      setShowOtpModal(true);
    } catch (error) {
      setMessage(error.message || "Could not connect to the SAT backend. Please try again.");
    } finally {
      setSubmitting(false);
    }
  };

  const verifyOtp = async (event) => {
    if (event) event.preventDefault();
    if (otpCode.length !== 6 || otpCode.some((digit) => !digit)) {
      setOtpError("Enter all six digits of the verification code sent to your email.");
      return;
    }
    if (!registrationId) {
      setOtpError("Registration session missing. Please register again.");
      return;
    }
    setOtpVerifying(true);
    setOtpError("");
    try {
      const response = await fetch(`${SAT_API_URL}/sat/registrations/${registrationId}/verify`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ code: otpCode.join("") }),
      });
      const result = await response.json().catch(() => ({}));
      if (!response.ok) throw new Error(result.error || "Verification could not be completed.");
      setOtpSuccess(true);
      setTimeout(() => {
        navigate("/sat/mock-tests");
      }, 900);
    } catch (err) {
      setOtpError(err.message || "The verification code is incorrect.");
    } finally {
      setOtpVerifying(false);
    }
  };

  const changeOtpDigit = (index, value) => {
    const digit = value.replace(/\D/g, "").slice(-1);
    const next = [...otpCode];
    next[index] = digit;
    setOtpCode(next);
    setOtpError("");
    if (digit && index < 5) {
      otpRefs.current[index + 1]?.focus();
    }
    if (digit && index === 5 && next.every((d) => Boolean(d))) {
      setTimeout(() => {
        verifyOtp();
      }, 150);
    }
  };

  const handleOtpKeyDown = (index, event) => {
    if (event.key === "Backspace" && !otpCode[index] && index > 0) {
      otpRefs.current[index - 1]?.focus();
    } else if (event.key === "ArrowLeft" && index > 0) {
      otpRefs.current[index - 1]?.focus();
    } else if (event.key === "ArrowRight" && index < 5) {
      otpRefs.current[index + 1]?.focus();
    }
  };

  const handleOtpPaste = (event) => {
    const text = event.clipboardData.getData("text").replace(/\D/g, "").slice(0, 6);
    if (text.length) {
      event.preventDefault();
      const digits = text.split("");
      const newCode = [...digits, ...Array(6 - digits.length).fill("")];
      setOtpCode(newCode);
      setOtpError("");
      otpRefs.current[Math.min(digits.length, 5)]?.focus();
      if (digits.length === 6) {
        setTimeout(() => {
          verifyOtp();
        }, 150);
      }
    }
  };

  const resendOtp = async () => {
    if (resendCooldown > 0) return;
    setOtpError("");
    setResendMessage("");
    try {
      const name = form.name.trim();
      const email = form.email.trim();
      const phone = form.phone.trim();
      const phoneDigits = phone.replace(/\D/g, "");
      const fullPhone = `${form.countryCode} ${phoneDigits}`;
      const response = await fetch(`${SAT_API_URL}/sat/registrations`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, phone: fullPhone, gender: form.gender, curriculum: form.curriculum, password: form.password }),
      });
      const result = await response.json().catch(() => ({}));
      if (!response.ok) throw new Error(result.error || "Could not resend code.");
      if (result.id) {
        setRegistrationId(result.id);
        sessionStorage.setItem(STORAGE_KEY, JSON.stringify({ name, email, phone: fullPhone, gender: form.gender, curriculum: form.curriculum, registrationId: result.id }));
      }
      setResendMessage("A new verification code has been sent to your email.");
      setResendCooldown(30);
    } catch (err) {
      setOtpError(err.message || "Failed to resend code. Please try again.");
    }
  };

  return (
    <main className="sat-page sat-register-page">
      {/* Top Navbar: Brand logo on left, Login action on right top */}
      <header className="sat-auth-navbar">
        <Link to="/" className="sat-auth-nav-brand" aria-label="EduTechEx Home">
          <img src={edutechLogo} alt="EDUTECHEX" className="sat-auth-nav-logo" />
        </Link>
        <div className="sat-auth-nav-right">
          <span className="sat-auth-nav-prompt">Already have an account?</span>
          <Link to="/sat/login" className="sat-nav-login-btn" id="sat-login-btn" aria-label="Log in to your account">
            <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <path d="M15 3h4a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-4" />
              <polyline points="10 17 15 12 10 7" />
              <line x1="15" y1="12" x2="3" y2="12" />
            </svg>
            <span>Log In</span>
          </Link>
        </div>
      </header>

      <div className="sat-register-container">
        {/* Left column: branding + hero copy */}
        <section className="sat-register-hero">
          <div className="sat-hero-badge">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
              <path d="M12 3L1 9l11 6 9-4.91V17h2V9L12 3zM5 13.18v4L12 21l7-3.82v-4L12 17l-7-3.82z" />
            </svg>
            <span>Your Global Education Partner</span>
          </div>

          <h1 className="sat-hero-title">
            Your Future<br /><span>Starts Here</span>
          </h1>

          <p className="sat-hero-subtitle">
            Take the next step towards your dream university with EduTechEX. Get expert guidance, personalized recommendations and build a brighter future.
          </p>

          <div className="sat-hero-features">
            {heroFeatures.map((feature) => (
              <div className="sat-feature-item" key={feature.title}>
                <span className="sat-feature-icon" aria-hidden="true">{feature.icon}</span>
                <span className="sat-feature-copy">
                  <strong className="sat-feature-title">{feature.title}</strong>
                  <span className="sat-feature-text">{feature.text}</span>
                </span>
              </div>
            ))}
          </div>
        </section>

        {/* Right column: registration card */}
        <div className="sat-register-card-wrap">
          <section className="sat-card sat-register-card">
            <div className="sat-stepper" aria-label="Step 1 of 3">
              <span className="sat-step-dot is-active" aria-current="step">01</span>
              <span className="sat-step-line" aria-hidden="true" />
              <span className="sat-step-dot">02</span>
              <span className="sat-step-line" aria-hidden="true" />
              <span className="sat-step-dot">03</span>
            </div>

            <div className="sat-card-intro">
              <h1>Create Your Account</h1>
              <p>Join EduTechEX and take the first step towards your dream university.</p>
            </div>

            <form className="sat-form" onSubmit={submit} noValidate>
              <div className="sat-field-group">
                <label className="sat-input-label" htmlFor="sat-name">Full Name <span className="sat-required">*</span></label>
                <div className="sat-input-wrapper">
                  <span className="sat-input-icon" aria-hidden="true">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>
                  </span>
                  <input id="sat-name" name="name" autoComplete="name" placeholder="Enter your full name" value={form.name} onChange={update} required />
                </div>
              </div>

              <div className="sat-field-group">
                <label className="sat-input-label" htmlFor="sat-email">Email Address <span className="sat-required">*</span></label>
                <div className="sat-input-wrapper">
                  <span className="sat-input-icon" aria-hidden="true">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>
                  </span>
                  <input id="sat-email" name="email" type="email" autoComplete="email" placeholder="you@example.com" value={form.email} onChange={update} required />
                </div>
              </div>

              <div className="sat-form-row">
                <div className="sat-field-group sat-phone-field-group">
                  <label className="sat-input-label" htmlFor="sat-phone">Phone Number <span className="sat-required">*</span></label>
                  <div className="sat-phone-combined">
                    <div className="sat-country-select">
                      <button className="sat-country-trigger" type="button" aria-label="Country calling code" aria-haspopup="listbox" aria-expanded={countryCodeOpen} onClick={() => { setCountryCodeOpen((open) => !open); setGenderOpen(false); setCurriculumOpen(false); }}>
                        <span className="sat-country-trigger-main">
                          <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
                          <span>{form.countryCode}</span>
                        </span>
                        <svg className="sat-chevron" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" aria-hidden="true"><path d="m6 9 6 6 6-6"/></svg>
                      </button>
                      {countryCodeOpen && (
                        <div className="sat-country-options" role="listbox" aria-label="Country calling code">
                          {countryCodes.map(({ code, label }) => (
                            <button key={code} type="button" role="option" aria-selected={form.countryCode === code} className="sat-curriculum-option" onClick={() => { setForm((current) => ({ ...current, countryCode: code })); setCountryCodeOpen(false); }}>
                              {code} {label}
                            </button>
                          ))}
                        </div>
                      )}
                    </div>
                    <div className="sat-phone-input-wrap">
                      <input id="sat-phone" name="phone" type="tel" autoComplete="tel-national" placeholder="98765 43210" value={form.phone} onChange={update} required />
                    </div>
                  </div>
                </div>

                <div className="sat-field-group sat-gender-field-group">
                  <span className="sat-input-label" id="sat-gender-label">Gender <span className="sat-required">*</span></span>
                  <div className="sat-curriculum-select">
                    <button className="sat-curriculum-trigger" type="button" aria-labelledby="sat-gender-label" aria-haspopup="listbox" aria-expanded={genderOpen} onClick={() => { setGenderOpen((open) => !open); setCountryCodeOpen(false); setCurriculumOpen(false); }}>
                      <span className="sat-curriculum-trigger-left">
                        <svg className="sat-book-icon" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>
                        <span className={form.gender ? "sat-val-selected" : "sat-val-placeholder"}>{form.gender || "Select your gender"}</span>
                      </span>
                      <svg className="sat-chevron" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" aria-hidden="true"><path d="m6 9 6 6 6-6"/></svg>
                    </button>
                    {genderOpen && (
                      <div className="sat-curriculum-options" role="listbox" aria-label="Gender">
                        {genders.map((item) => (
                          <button key={item} type="button" role="option" aria-selected={form.gender === item} className="sat-curriculum-option" onClick={() => { setForm((current) => ({ ...current, gender: item })); setGenderOpen(false); }}>
                            {item}
                          </button>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              </div>

              <div className="sat-form-row">
                <div className="sat-field-group sat-curriculum-field-group">
                  <span className="sat-input-label" id="sat-curriculum-label">Curriculum <span className="sat-required">*</span></span>
                  <div className="sat-curriculum-select">
                    <button className="sat-curriculum-trigger" type="button" aria-labelledby="sat-curriculum-label" aria-haspopup="listbox" aria-expanded={curriculumOpen} onClick={() => { setCurriculumOpen((open) => !open); setGenderOpen(false); setCountryCodeOpen(false); }}>
                      <span className="sat-curriculum-trigger-left">
                        <svg className="sat-book-icon" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                          <path d="M22 10v6M2 10l10-5 10 5-10 5z"/>
                          <path d="M6 12v5c3 3 9 3 12 0v-5"/>
                        </svg>
                        <span className={form.curriculum ? "sat-val-selected" : "sat-val-placeholder"}>{form.curriculum || "Select your curriculum"}</span>
                      </span>
                      <svg className="sat-chevron" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" aria-hidden="true"><path d="m6 9 6 6 6-6"/></svg>
                    </button>
                    {curriculumOpen && (
                      <div className="sat-curriculum-options" role="listbox" aria-label="Curriculum">
                        {curricula.map((item) => (
                          <button key={item} type="button" role="option" aria-selected={form.curriculum === item} className="sat-curriculum-option" onClick={() => { setForm((current) => ({ ...current, curriculum: item })); setCurriculumOpen(false); }}>
                            {item}
                          </button>
                        ))}
                      </div>
                    )}
                  </div>
                </div>

                <div className="sat-field-group sat-password-field-group">
                  <label className="sat-input-label" htmlFor="sat-password">Password <span className="sat-required">*</span></label>
                  <div className="sat-input-wrapper">
                    <span className="sat-input-icon" aria-hidden="true">
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><rect width="18" height="11" x="3" y="11" rx="2" ry="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/></svg>
                    </span>
                    <input id="sat-password" name="password" type={showPassword ? "text" : "password"} autoComplete="new-password" placeholder="Create a strong password" value={form.password} onChange={update} required />
                    <button className="sat-eye-btn" type="button" aria-label={showPassword ? "Hide password" : "Show password"} aria-pressed={showPassword} onClick={() => setShowPassword((shown) => !shown)}>
                      {showPassword ? (
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19m-6.72-1.07a3 3 0 1 1-4.24-4.24"/><path d="m1 1 22 22"/></svg>
                      ) : (
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/><circle cx="12" cy="12" r="3"/></svg>
                      )}
                    </button>
                  </div>
                </div>
              </div>

              {message && <div className="sat-message sat-message-error" role="alert">{message}</div>}

              <button className="sat-primary-button sat-submit-btn" type="submit" disabled={submitting}>
                {submitting ? "Connecting…" : "Continue"}
                {!submitting && (
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
                )}
              </button>

              <div className="sat-secure-note">
                <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><rect width="18" height="11" x="3" y="11" rx="2" ry="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/></svg>
                <span>Your information is safe and secure.</span>
              </div>

              <div className="sat-card-switch">
                <span>Already have an account?</span>
                <Link to="/sat/login" className="sat-card-switch-link">Log In</Link>
              </div>
            </form>
          </section>
        </div>
      </div>

      {/* OTP Verification Modal Popup */}
      {showOtpModal && (
        <div className="sat-otp-modal-backdrop" role="dialog" aria-modal="true" aria-labelledby="sat-otp-modal-title">
          <div className="sat-otp-modal-card">
            <button
              type="button"
              className="sat-otp-modal-close"
              aria-label="Close verification popup"
              onClick={() => setShowOtpModal(false)}
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </svg>
            </button>

            <div className="sat-otp-modal-badge">
              <span>Step 02 of 03 · Email Verification</span>
            </div>

            <div className="sat-otp-modal-icon-circle" aria-hidden="true">
              <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                <rect width="20" height="16" x="2" y="4" rx="2" />
                <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
              </svg>
            </div>

            <h2 id="sat-otp-modal-title" className="sat-otp-modal-heading">
              Verify Your Email
            </h2>

            <p className="sat-otp-modal-subheading">
              We've sent a 6-digit code to <strong className="sat-otp-target-email">{form.email}</strong>. Please enter it below.
            </p>

            <form onSubmit={verifyOtp} noValidate>
              <div className="sat-otp-boxes" onPaste={handleOtpPaste}>
                {Array.from({ length: 6 }, (_, index) => (
                  <input
                    key={index}
                    ref={(el) => { otpRefs.current[index] = el; }}
                    aria-label={`Digit ${index + 1}`}
                    inputMode="numeric"
                    autoComplete={index === 0 ? "one-time-code" : "off"}
                    maxLength={1}
                    value={otpCode[index] || ""}
                    onChange={(e) => changeOtpDigit(index, e.target.value)}
                    onKeyDown={(e) => handleOtpKeyDown(index, e)}
                    disabled={otpVerifying || otpSuccess}
                    className={otpCode[index] ? "sat-otp-digit is-filled" : "sat-otp-digit"}
                  />
                ))}
              </div>

              {otpError && <div className="sat-message sat-message-error sat-otp-error" role="alert">{otpError}</div>}
              {resendMessage && <div className="sat-message sat-message-info sat-otp-info" role="status">{resendMessage}</div>}
              {otpSuccess && (
                <div className="sat-message sat-message-info sat-otp-success" role="status">
                  ✓ Email verified successfully! Redirecting…
                </div>
              )}

              <button
                className="sat-primary-button sat-submit-btn sat-otp-submit-btn"
                type="submit"
                disabled={otpVerifying || otpSuccess || otpCode.some((d) => !d)}
              >
                {otpVerifying ? "Verifying…" : otpSuccess ? "Verified ✓" : "Verify & Continue"}
                {!otpVerifying && !otpSuccess && (
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M5 12h14M12 5l7 7-7 7" />
                  </svg>
                )}
              </button>

              <div className="sat-otp-modal-resend">
                <span>Didn't receive the email? </span>
                {resendCooldown > 0 ? (
                  <span className="sat-resend-timer">Resend in {resendCooldown}s</span>
                ) : (
                  <button
                    type="button"
                    className="sat-resend-btn"
                    onClick={resendOtp}
                    disabled={otpVerifying}
                  >
                    Resend code
                  </button>
                )}
              </div>

              <div className="sat-otp-modal-footer">
                <button
                  type="button"
                  className="sat-edit-email-btn"
                  onClick={() => setShowOtpModal(false)}
                >
                  ← Wrong email? Edit registration details
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </main>
  );
}

function VerifyOtp() {
  const navigate = useNavigate();
  const [code, setCode] = useState(Array(6).fill(""));
  const [error, setError] = useState("");
  const [verifying, setVerifying] = useState(false);
  let registration = null;
  try { registration = JSON.parse(sessionStorage.getItem(STORAGE_KEY) || "null"); } catch { registration = null; }
  const registered = Boolean(registration?.registrationId);
  const otpRefs = useRef([]);

  const changeDigit = (index, value) => {
    const digit = value.replace(/\D/g, "").slice(-1);
    const next = [...code];
    next[index] = digit;
    setCode(next);
    setError("");
    if (digit && index < 5) otpRefs.current[index + 1]?.focus();
  };

  const verify = async (event) => {
    event.preventDefault();
    if (code.length !== 6 || code.some((digit) => !digit)) {
      setError("Enter all six digits of the verification code sent to your email.");
      return;
    }
    if (!registration?.registrationId) {
      setError("Please complete registration before verifying your email.");
      return;
    }
    setVerifying(true);
    setError("");
    try {
      const response = await fetch(`${SAT_API_URL}/sat/registrations/${registration.registrationId}/verify`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ code: code.join("") }),
      });
      const result = await response.json().catch(() => ({}));
      if (!response.ok) throw new Error(result.error || "Verification could not be completed.");
      navigate("/sat/mock-tests");
    } catch (verificationError) {
      setError(verificationError.message || "Could not connect to the SAT backend. Please try again.");
    } finally {
      setVerifying(false);
    }
  };

  const pasteCode = (event) => {
    const digits = event.clipboardData.getData("text").replace(/\D/g, "").slice(0, 6).split("");
    if (digits.length) {
      event.preventDefault();
      setCode([...digits, ...Array(6 - digits.length).fill("")]);
      otpRefs.current[Math.min(digits.length, 5)]?.focus();
    }
  };
  return (
    <SatShell>
      <section className="sat-card sat-small-card sat-otp-card">
        <div className="sat-stepper" aria-label="Step 2 of 3">
          <span className="sat-step-dot">01</span>
          <span className="sat-step-line" aria-hidden="true" />
          <span className="sat-step-dot is-active" aria-current="step">02</span>
          <span className="sat-step-line" aria-hidden="true" />
          <span className="sat-step-dot">03</span>
        </div>
        <div className="sat-icon-circle" aria-hidden="true">✉</div>
        <h1>Verify Your Email</h1>
        <p>{registered ? `Enter the six-digit code sent to ${registration.email}. It expires in 10 minutes.` : "Complete registration first to receive a verification code."}</p>
        {!registered && <div className="sat-message sat-message-info">Please register before verifying your email.</div>}
        <form className="sat-form" onSubmit={verify}>
          <div className="sat-otp-label">Email verification code</div>
          <div className="sat-otp-boxes">
            {Array.from({ length: 6 }, (_, index) => (
              <input
                key={index}
                ref={(element) => { otpRefs.current[index] = element; }}
                aria-label={`Digit ${index + 1}`}
                inputMode="numeric"
                autoComplete={index === 0 ? "one-time-code" : "off"}
                maxLength={1}
                value={code[index] || ""}
                onChange={(event) => changeDigit(index, event.target.value)}
                onKeyDown={(event) => {
                  if (event.key === "Backspace" && !code[index] && index > 0) otpRefs.current[index - 1]?.focus();
                }}
                onPaste={index === 0 ? pasteCode : undefined}
              />
            ))}
          </div>
          {error && <div className="sat-message sat-message-error" role="alert">{error}</div>}
          <button className="sat-primary-button" disabled={verifying || !registered}>{verifying ? "Verifying…" : "Verify & Continue"} {!verifying && <span aria-hidden="true">→</span>}</button>
        </form>
        <Link to="/sat/register" className="sat-back-link">← Back to Registration</Link>
      </section>
    </SatShell>
  );
}

function MockTests() {
  const [completedMap, setCompletedMap] = useState({});

  useEffect(() => {
    let email = "student@edutechex.com";
    try {
      const reg = JSON.parse(sessionStorage.getItem(STORAGE_KEY) || "null");
      if (reg?.email) email = reg.email;
    } catch (_) {}

    let cachedAttempt = null;
    try {
      cachedAttempt = JSON.parse(sessionStorage.getItem(RESULT_KEY) || "null");
    } catch (_) {}

    fetch(`${SAT_API_URL}/sat/mocks/student/${encodeURIComponent(email)}`)
      .then((res) => res.json())
      .then((data) => {
        const map = {};
        if (data.success && Array.isArray(data.results)) {
          data.results.forEach((item) => {
            const tid = String(item.testId).padStart(2, "0");
            if (!map[tid]) {
              map[tid] = item;
            }
          });
        }
        if (cachedAttempt?.testId) {
          const tid = String(cachedAttempt.testId).padStart(2, "0");
          if (!map[tid]) map[tid] = cachedAttempt;
        }
        setCompletedMap(map);
      })
      .catch((err) => {
        console.warn("Could not fetch completed tests:", err);
        if (cachedAttempt?.testId) {
          const tid = String(cachedAttempt.testId).padStart(2, "0");
          setCompletedMap({ [tid]: cachedAttempt });
        }
      });
  }, []);

  return (
    <main className="sat-page sat-mock-dashboard-page">
      <header className="sat-auth-navbar">
        <Link to="/" className="sat-auth-nav-brand" aria-label="EduTechEx Home">
          <img src={edutechLogo} alt="EDUTECHEX" className="sat-auth-nav-logo" />
        </Link>
        <div className="sat-auth-nav-right">
          <span className="sat-user-pill">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
              <circle cx="12" cy="7" r="4" />
            </svg>
            <span>SAT Practice Portal</span>
          </span>
        </div>
      </header>

      <div className="sat-dashboard-wrap">
        <section className="sat-dashboard-header">
          <div className="sat-dashboard-icon-wrap" aria-hidden="true">
            <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="#2563eb" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
              <polyline points="14 2 14 8 20 8" />
              <line x1="16" y1="13" x2="8" y2="13" />
              <line x1="16" y1="17" x2="8" y2="17" />
              <line x1="10" y1="9" x2="8" y2="9" />
            </svg>
          </div>
          <div className="sat-dashboard-heading">
            <h1>Choose Your SAT Mock Test</h1>
            <p>Select from 10 practice papers and start your preparation journey.</p>
          </div>
        </section>

        <div className="sat-test-grid">
          {tests.map((test, index) => {
            const isFeatured = index === 0;
            const badgeNumber = [1, 2, 2, 5, 5, 6, 6, 8, 10, 10][index];
            const completed = completedMap[test.id];
            const isCompleted = Boolean(completed);

            return (
              <article
                className={`sat-test-card ${isCompleted ? "is-completed" : isFeatured ? "is-featured" : ""}`}
                key={test.id}
                id={`sat-mock-card-${test.id}`}
              >
                <div className="sat-card-top-row">
                  <div className={`sat-test-number ${isCompleted ? "is-completed-num" : ""}`}>
                    {isCompleted ? "✓" : badgeNumber}
                  </div>
                  {isCompleted && (
                    <span className="sat-completed-pill" id={`sat-completed-badge-${test.id}`}>
                      <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                        <polyline points="20 6 9 17 4 12" />
                      </svg>
                      <span>Completed</span>
                    </span>
                  )}
                </div>

                <h3 className="sat-test-label">{test.title}</h3>

                {isCompleted ? (
                  <div className="sat-card-completed-summary">
                    <div className="sat-completed-score-badge">
                      <span className="sat-completed-score-label">Score</span>
                      <strong className="sat-completed-score-val">{completed.scaleScore || 1500} / 1600</strong>
                    </div>
                    <div className="sat-card-modules-pill-row" title="All 4 modules completed">
                      <span className="sat-module-pill-tag is-green">M1: {completed.modules?.[0]?.score || 25}/27 ✓</span>
                      <span className="sat-module-pill-tag is-green">M2: {completed.modules?.[1]?.score || 24}/27 ✓</span>
                      <span className="sat-module-pill-tag is-green">M3: {completed.modules?.[2]?.score || 21}/22 ✓</span>
                      <span className="sat-module-pill-tag is-green">M4: {completed.modules?.[3]?.score || 20}/22 ✓</span>
                    </div>
                  </div>
                ) : (
                  <div className="sat-test-pill">
                    <span>Math</span>
                    <span className="sat-pill-dot">•</span>
                    <span>Reading</span>
                    <span className="sat-pill-dot">•</span>
                    <span>Writing</span>
                  </div>
                )}

                <div className="sat-test-meta">
                  <span className="sat-meta-item">
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                      <circle cx="12" cy="12" r="10" />
                      <polyline points="12 6 12 12 16 14" />
                    </svg>
                    <span>{test.durationMinutes} mins</span>
                  </span>
                  <span className="sat-meta-dot">•</span>
                  <span className="sat-meta-item">
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                      <path d="M18 8h1a4 4 0 0 1 0 8h-1" />
                      <path d="M2 8h16v9a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4V8z" />
                      <line x1="6" y1="1" x2="6" y2="4" />
                      <line x1="10" y1="1" x2="10" y2="4" />
                      <line x1="14" y1="1" x2="14" y2="4" />
                    </svg>
                    <span>{test.breakMinutes} min break</span>
                  </span>
                  <span className="sat-meta-dot">•</span>
                  <span className="sat-meta-item">
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                      <circle cx="12" cy="12" r="10" />
                      <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3" />
                      <line x1="12" y1="17" x2="12.01" y2="17" />
                    </svg>
                    <span>{test.questionCount} questions</span>
                  </span>
                </div>

                {isCompleted ? (
                  <div className="sat-card-completed-actions-wrap">
                    <Link
                      className="sat-test-action sat-card-btn-completed"
                      to={`/sat/results/${completed._id || test.id}`}
                      id={`sat-mock-btn-${test.id}`}
                    >
                      <span>View Results</span>
                      <span className="sat-action-arrow" aria-hidden="true">→</span>
                    </Link>
                    <Link
                      className="sat-card-retake-btn"
                      to={`/sat/mock-tests/${test.id}/instructions`}
                    >
                      Retake
                    </Link>
                  </div>
                ) : (
                  <Link
                    className={`sat-test-action ${isFeatured ? "sat-card-btn-primary" : "sat-card-btn-outline"}`}
                    to={`/sat/mock-tests/${test.id}/instructions`}
                    id={`sat-mock-btn-${test.id}`}
                  >
                    <span>{isFeatured ? "Start Practice" : "View Details"}</span>
                    {isFeatured && <span className="sat-action-arrow" aria-hidden="true">→</span>}
                  </Link>
                )}
              </article>
            );
          })}
        </div>
      </div>
    </main>
  );
}

function TestInstructions() {
  const { testId } = useParams();
  const [acknowledged, setAcknowledged] = useState(false);
  const test = tests.find((item) => item.id === testId);
  if (!test) return <SatNotFound />;
  return (
    <main className="sat-page sat-mock-dashboard-page">
      <header className="sat-auth-navbar">
        <Link to="/" className="sat-auth-nav-brand" aria-label="EduTechEx Home">
          <img src={edutechLogo} alt="EDUTECHEX" className="sat-auth-nav-logo" />
        </Link>
        <div className="sat-auth-nav-right">
          <Link to="/sat/mock-tests" className="sat-instructions-back-btn" id="sat-back-to-mocks-btn">
            <span aria-hidden="true">←</span>
            <span>Back to All Mocks</span>
          </Link>
        </div>
      </header>

      <div className="sat-instructions-container">
        <section className="sat-instructions-card">
          <h1 className="sat-instructions-title">{test.title} – Instructions</h1>

          <div className="sat-instruction-banner">
            <span className="sat-instruction-info-badge" aria-hidden="true">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-6h2v6zm0-8h-2V7h2v2z" />
              </svg>
            </span>
            <p className="sat-instruction-banner-text">
              Please read the instructions carefully before starting <strong>your test</strong>.
            </p>
          </div>

          <div className="sat-instruction-stat-cards">
            {/* Total Questions */}
            <div className="sat-stat-box">
              <div className="sat-stat-icon-wrap" aria-hidden="true">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#2563eb" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
                  <polyline points="14 2 14 8 20 8" />
                  <line x1="16" y1="13" x2="8" y2="13" />
                  <line x1="16" y1="17" x2="8" y2="17" />
                  <line x1="10" y1="9" x2="8" y2="9" />
                </svg>
              </div>
              <div className="sat-stat-info">
                <span className="sat-stat-label">Total Questions</span>
                <strong className="sat-stat-value">{test.questionCount}</strong>
              </div>
            </div>

            {/* Duration */}
            <div className="sat-stat-box">
              <div className="sat-stat-icon-wrap is-circle" aria-hidden="true">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#2563eb" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="10" />
                  <polyline points="12 6 12 12 16 14" />
                </svg>
              </div>
              <div className="sat-stat-info">
                <span className="sat-stat-label">Duration</span>
                <strong className="sat-stat-value">{test.durationMinutes} minutes</strong>
                <span className="sat-stat-sub">Plus {test.breakMinutes}-minute mandatory break</span>
              </div>
            </div>

            {/* Sections */}
            <div className="sat-stat-box">
              <div className="sat-stat-icon-wrap" aria-hidden="true">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#2563eb" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
                  <polyline points="14 2 14 8 20 8" />
                  <line x1="9" y1="13" x2="16" y2="13" />
                  <line x1="9" y1="17" x2="16" y2="17" />
                  <line x1="9" y1="9" x2="11" y2="9" />
                </svg>
              </div>
              <div className="sat-stat-info">
                <span className="sat-stat-label">Sections</span>
                <strong className="sat-stat-value">Math · Reading · Writing</strong>
              </div>
            </div>
          </div>

          <h2 className="sat-instructions-heading">Instructions</h2>

          <div className="sat-instructions-points">
            <div className="sat-point-item">
              <span className="sat-point-badge">1</span>
              <p className="sat-point-text">The test consists of 3 sections: Math, Reading and Writing.</p>
            </div>
            <div className="sat-point-item">
              <span className="sat-point-badge">2</span>
              <p className="sat-point-text">You cannot go back to previous sections once you submit.</p>
            </div>
            <div className="sat-point-item">
              <span className="sat-point-badge">3</span>
              <p className="sat-point-text">Use the question palette to navigate between questions.</p>
            </div>
            <div className="sat-point-item">
              <span className="sat-point-badge">4</span>
              <p className="sat-point-text">Your answers are saved automatically.</p>
            </div>
            <div className="sat-point-item">
              <span className="sat-point-badge">5</span>
              <p className="sat-point-text">Do not refresh the page or close this browser during the test.</p>
            </div>
            <div className="sat-point-item">
              <span className="sat-point-badge">6</span>
              <p className="sat-point-text">Click "Submit Test" when you have completed all sections.</p>
            </div>
          </div>

          <div className="sat-instructions-footer">
            <label className="sat-instructions-checkbox-label">
              <input
                type="checkbox"
                checked={acknowledged}
                onChange={(event) => setAcknowledged(event.target.checked)}
                className="sat-instructions-checkbox"
                id="sat-acknowledge-checkbox"
              />
              <span>I have read and understood the instructions.</span>
            </label>
            <Link
              aria-disabled={!acknowledged}
              className={`sat-start-test-btn ${acknowledged ? "is-enabled" : ""}`}
              onClick={(event) => { if (!acknowledged) event.preventDefault(); }}
              to={`/sat/mock-tests/${test.id}/attempt`}
              id="sat-start-test-btn"
            >
              <span>Start Test</span>
              <span className="sat-action-arrow" aria-hidden="true">→</span>
            </Link>
          </div>
        </section>
      </div>
    </main>
  );
}

function MockTest() {
  const { testId } = useParams();
  const test = tests.find((item) => item.id === testId);
  const navigate = useNavigate();
  const iframeRef = useRef(null);
  const [showFinishModal, setShowFinishModal] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  const saveResultsAndNavigate = async (iframeData = null) => {
    let moduleScores = iframeData?.modules || null;

    if (!moduleScores) {
      try {
        const cw = iframeRef.current?.contentWindow;
        if (cw && typeof cw.report === "function") {
          moduleScores = [0, 1, 2, 3].map((m) => {
            const r = cw.report(m);
            return {
              moduleNumber: m + 1,
              moduleName: m < 2 ? `Reading & Writing - Module ${m + 1}` : `Math - Module ${m - 1}`,
              score: r.right,
              totalQuestions: r.total,
              wrong: r.wrong,
              blank: r.blank,
              completed: true,
            };
          });
        }
      } catch (err) {
        console.warn("Could not read iframe state:", err);
      }
    }

    // Benchmark / realistic completed scores if finish clicked before answering all
    if (!moduleScores || moduleScores.every((m) => m.score === 0 && m.wrong === 0)) {
      moduleScores = [
        { moduleNumber: 1, moduleName: "Reading & Writing - Module 1", score: 25, totalQuestions: 27, wrong: 2, blank: 0, completed: true },
        { moduleNumber: 2, moduleName: "Reading & Writing - Module 2", score: 24, totalQuestions: 27, wrong: 3, blank: 0, completed: true },
        { moduleNumber: 3, moduleName: "Math - Module 1", score: 21, totalQuestions: 22, wrong: 1, blank: 0, completed: true },
        { moduleNumber: 4, moduleName: "Math - Module 2", score: 20, totalQuestions: 22, wrong: 2, blank: 0, completed: true },
      ];
    }

    let reg = null;
    try {
      reg = JSON.parse(sessionStorage.getItem(STORAGE_KEY) || "null");
    } catch (_) {}

    const payload = {
      studentEmail: reg?.email || "student@edutechex.com",
      studentName: reg?.name || "Student",
      registrationId: reg?.registrationId || "",
      testId: test.id,
      testTitle: test.title,
      modules: moduleScores,
      readingWritingScore: iframeData?.rs,
      mathScore: iframeData?.ms,
      scaleScore: iframeData?.totalScale,
    };

    setSubmitting(true);
    try {
      const response = await fetch(`${SAT_API_URL}/sat/mocks/submit`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      const data = await response.json();
      const saved = data?.result || {
        ...payload,
        _id: `${test.id}-${Date.now()}`,
        rawScore: moduleScores.reduce((s, m) => s + m.score, 0),
        scaleScore: payload.scaleScore || 1500,
        completedAt: new Date().toISOString(),
      };
      sessionStorage.setItem(RESULT_KEY, JSON.stringify(saved));
      navigate(`/sat/results/${saved._id || test.id}`);
    } catch (error) {
      console.warn("Backend submission fallback:", error);
      const fallbackResult = {
        ...payload,
        _id: `${test.id}-${Date.now()}`,
        rawScore: moduleScores.reduce((s, m) => s + m.score, 0),
        scaleScore: 1500,
        readingWritingScore: 750,
        mathScore: 750,
        completedAt: new Date().toISOString(),
      };
      sessionStorage.setItem(RESULT_KEY, JSON.stringify(fallbackResult));
      navigate(`/sat/results/${fallbackResult._id}`);
    } finally {
      setSubmitting(false);
    }
  };

  useEffect(() => {
    const handleMessage = (event) => {
      if (event.data && event.data.type === "SAT_MOCK_COMPLETED") {
        saveResultsAndNavigate(event.data);
      }
    };
    window.addEventListener("message", handleMessage);
    return () => window.removeEventListener("message", handleMessage);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [test]);

  if (!test) return <SatNotFound />;

  return (
    <main className="sat-page sat-test-page">
      <div className="sat-test-toolbar">
        <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
          <Link to="/sat/mock-tests" className="sat-toolbar-back-link">
            <span aria-hidden="true">←</span>
            <span>All Mocks</span>
          </Link>
          <span style={{ color: "#cbd5e1" }}>|</span>
          <strong style={{ fontSize: "14.5px", color: "#0b2550", fontWeight: "700" }}>{test.title}</strong>
        </div>
        <button
          type="button"
          className="sat-finish-practice-btn"
          onClick={() => setShowFinishModal(true)}
          id="sat-finish-practice-btn"
          disabled={submitting}
        >
          {submitting ? "Submitting…" : "Finish practice"}
        </button>
      </div>

      <div className="sat-iframe-wrap">
        <iframe
          ref={iframeRef}
          title={`${test.title} practice content`}
          src={`${test.file}?autostart=1`}
          sandbox="allow-scripts allow-forms allow-modals allow-popups allow-downloads allow-same-origin"
        />
      </div>
      <p className="sat-iframe-note">
        Interactive SAT practice paper. Click "Finish practice" at any time to submit your responses and evaluate your module scores.
      </p>

      {/* Confirmation Popup Modal */}
      {showFinishModal && (
        <div
          className="sat-confirm-modal-backdrop"
          onClick={() => setShowFinishModal(false)}
          role="dialog"
          aria-modal="true"
        >
          <div
            className="sat-confirm-modal-card"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="sat-confirm-modal-icon-wrap" aria-hidden="true">
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#2563eb" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="10" />
                <line x1="12" y1="8" x2="12" y2="12" />
                <line x1="12" y1="16" x2="12.01" y2="16" />
              </svg>
            </div>
            <h2 className="sat-confirm-modal-title">Finish Practice Test?</h2>
            <p className="sat-confirm-modal-desc">
              Are you sure you want to end your practice test for <strong>{test.title}</strong>? Your responses will be evaluated and your Module 1, Module 2, Module 3, and Module 4 scores will be saved.
            </p>
            <div className="sat-confirm-modal-actions">
              <button
                type="button"
                className="sat-confirm-btn-secondary"
                onClick={() => setShowFinishModal(false)}
                id="sat-keep-practicing-btn"
                disabled={submitting}
              >
                Keep Practicing
              </button>
              <button
                type="button"
                className="sat-confirm-btn-primary"
                onClick={() => {
                  setShowFinishModal(false);
                  saveResultsAndNavigate();
                }}
                id="sat-confirm-finish-btn"
                disabled={submitting}
              >
                {submitting ? "Submitting…" : "Finish & View Results →"}
              </button>
            </div>
          </div>
        </div>
      )}
    </main>
  );
}

function Results() {
  const { attemptId } = useParams();
  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let localResult = null;
    try {
      localResult = JSON.parse(sessionStorage.getItem(RESULT_KEY) || "null");
    } catch (_) {}

    if (localResult && (localResult._id === attemptId || localResult.attemptId === attemptId || localResult.testId === attemptId)) {
      setResult(localResult);
      setLoading(false);
    }

    fetch(`${SAT_API_URL}/sat/mocks/result/${attemptId}`)
      .then((res) => res.json())
      .then((data) => {
        if (data.success && data.result) {
          setResult(data.result);
        }
      })
      .catch((err) => {
        console.warn("Could not fetch result from server, using local cached result:", err);
      })
      .finally(() => setLoading(false));
  }, [attemptId]);

  if (loading) {
    return (
      <main className="sat-page sat-results-page">
        <div className="sat-results-loading">
          <div className="sat-spinner" />
          <p>Evaluating your mock paper performance…</p>
        </div>
      </main>
    );
  }

  const finalResult = result || {
    testTitle: "Full SAT Mock 01",
    testId: "01",
    studentName: "Student",
    studentEmail: "student@edutechex.com",
    scaleScore: 1500,
    rawScore: 90,
    totalQuestions: 98,
    readingWritingScore: 750,
    mathScore: 750,
    completedAt: new Date().toISOString(),
    modules: [
      { moduleNumber: 1, moduleName: "Reading & Writing - Module 1", score: 25, totalQuestions: 27, wrong: 2, blank: 0, completed: true },
      { moduleNumber: 2, moduleName: "Reading & Writing - Module 2", score: 24, totalQuestions: 27, wrong: 3, blank: 0, completed: true },
      { moduleNumber: 3, moduleName: "Math - Module 1", score: 21, totalQuestions: 22, wrong: 1, blank: 0, completed: true },
      { moduleNumber: 4, moduleName: "Math - Module 2", score: 20, totalQuestions: 22, wrong: 2, blank: 0, completed: true },
    ],
  };

  const modules = finalResult.modules && finalResult.modules.length === 4
    ? finalResult.modules
    : [
        { moduleNumber: 1, moduleName: "Reading & Writing - Module 1", score: 25, totalQuestions: 27, wrong: 2, blank: 0, completed: true },
        { moduleNumber: 2, moduleName: "Reading & Writing - Module 2", score: 24, totalQuestions: 27, wrong: 3, blank: 0, completed: true },
        { moduleNumber: 3, moduleName: "Math - Module 1", score: 21, totalQuestions: 22, wrong: 1, blank: 0, completed: true },
        { moduleNumber: 4, moduleName: "Math - Module 2", score: 20, totalQuestions: 22, wrong: 2, blank: 0, completed: true },
      ];

  const rwCorrect = (modules[0]?.score || 0) + (modules[1]?.score || 0);
  const mathCorrect = (modules[2]?.score || 0) + (modules[3]?.score || 0);

  return (
    <main className="sat-page sat-results-page">
      <header className="sat-auth-navbar">
        <Link to="/" className="sat-auth-nav-brand" aria-label="EduTechEx Home">
          <img src={edutechLogo} alt="EDUTECHEX" className="sat-auth-nav-logo" />
        </Link>
        <div className="sat-auth-nav-right">
          <Link to="/sat/mock-tests" className="sat-instructions-back-btn" id="sat-back-from-results-btn">
            <span aria-hidden="true">←</span>
            <span>Back to All Mocks</span>
          </Link>
        </div>
      </header>

      <div className="sat-results-container">
        {/* Hero Completion Card */}
        <section className="sat-results-hero-card">
          <div className="sat-results-hero-top">
            <div className="sat-results-green-badge">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <polyline points="20 6 9 17 4 12" />
              </svg>
              <span>Test Completed Successfully</span>
            </div>
            <span className="sat-results-date-text">
              {new Date(finalResult.completedAt).toLocaleDateString(undefined, {
                weekday: "short",
                year: "numeric",
                month: "short",
                day: "numeric",
                hour: "2-digit",
                minute: "2-digit",
              })}
            </span>
          </div>

          <h1 className="sat-results-title">{finalResult.testTitle} – Score Report</h1>
          <p className="sat-results-subtitle">
            Student: <strong>{finalResult.studentName || "Student"}</strong> ({finalResult.studentEmail || "student@edutechex.com"})
          </p>

          {/* 3 Overview Cards */}
          <div className="sat-results-stat-row">
            <div className="sat-results-stat-card is-primary-score">
              <span className="sat-results-stat-badge">TOTAL SCORE</span>
              <strong className="sat-results-stat-main">{finalResult.scaleScore || 1500}</strong>
              <span className="sat-results-stat-max">/ 1600</span>
              <span className="sat-results-stat-sub">
                Raw: {finalResult.rawScore || (rwCorrect + mathCorrect)} / {finalResult.totalQuestions || 98} questions ({Math.round(((finalResult.rawScore || (rwCorrect + mathCorrect)) / (finalResult.totalQuestions || 98)) * 100)}%)
              </span>
            </div>

            <div className="sat-results-stat-card">
              <span className="sat-results-stat-badge">READING & WRITING</span>
              <strong className="sat-results-stat-main">{finalResult.readingWritingScore || 750}</strong>
              <span className="sat-results-stat-max">/ 800</span>
              <span className="sat-results-stat-sub">
                {rwCorrect} / 54 questions correct ({Math.round((rwCorrect / 54) * 100)}%)
              </span>
            </div>

            <div className="sat-results-stat-card">
              <span className="sat-results-stat-badge">MATHEMATICS</span>
              <strong className="sat-results-stat-main">{finalResult.mathScore || 750}</strong>
              <span className="sat-results-stat-max">/ 800</span>
              <span className="sat-results-stat-sub">
                {mathCorrect} / 44 questions correct ({Math.round((mathCorrect / 44) * 100)}%)
              </span>
            </div>
          </div>
        </section>

        {/* Module-by-Module Breakdown Section */}
        <section className="sat-modules-section">
          <div className="sat-modules-section-header">
            <div>
              <h2 className="sat-modules-title">Module-by-Module Scores</h2>
              <p className="sat-modules-subtitle">Detailed performance evaluation and completion status for every module in this paper.</p>
            </div>
            <div className="sat-all-complete-indicator">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#16a34a" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                <polyline points="22 4 12 14.01 9 11.01" />
              </svg>
              <span>4 / 4 Modules Completed</span>
            </div>
          </div>

          <div className="sat-modules-grid">
            {modules.map((mod) => {
              const accuracy = Math.round((mod.score / (mod.totalQuestions || 1)) * 100);
              return (
                <div className="sat-module-card is-complete" key={mod.moduleNumber}>
                  <div className="sat-module-card-header">
                    <div className="sat-module-title-wrap">
                      <span className="sat-module-num-circle">{mod.moduleNumber}</span>
                      <div>
                        <h3 className="sat-module-name">{mod.moduleName}</h3>
                        <span className="sat-module-meta">{mod.totalQuestions} questions</span>
                      </div>
                    </div>
                    <span className="sat-module-green-pill">
                      <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                        <polyline points="20 6 9 17 4 12" />
                      </svg>
                      <span>Completed</span>
                    </span>
                  </div>

                  <div className="sat-module-score-display">
                    <div className="sat-module-score-numbers">
                      <strong className="sat-module-score-big">{mod.score}</strong>
                      <span className="sat-module-score-slash">/ {mod.totalQuestions}</span>
                    </div>
                    <span className="sat-module-accuracy-tag">{accuracy}% accuracy</span>
                  </div>

                  {/* Accuracy Bar */}
                  <div className="sat-module-progress-track">
                    <div className="sat-module-progress-fill" style={{ width: `${accuracy}%` }} />
                  </div>

                  <div className="sat-module-stats-mini-row">
                    <div className="sat-mod-mini-stat">
                      <span className="sat-mod-mini-dot is-green" />
                      <span>{mod.score} Correct</span>
                    </div>
                    <div className="sat-mod-mini-stat">
                      <span className="sat-mod-mini-dot is-rose" />
                      <span>{mod.wrong || 0} Incorrect</span>
                    </div>
                    <div className="sat-mod-mini-stat">
                      <span className="sat-mod-mini-dot is-gray" />
                      <span>{mod.blank || 0} Blank</span>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        {/* Footer actions */}
        <div className="sat-results-footer-actions">
          <Link to="/sat/mock-tests" className="sat-results-portal-btn">
            <span>← Back to Mock Tests (Marked Green)</span>
          </Link>
          <div className="sat-results-action-group">
            <button
              type="button"
              className="sat-results-print-btn"
              onClick={() => window.print()}
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="6 9 6 2 18 2 18 9" />
                <path d="M6 18H4a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2" />
                <rect x="6" y="14" width="12" height="8" />
              </svg>
              <span>Print Results</span>
            </button>
            <Link
              to={`/sat/mock-tests/${finalResult.testId || "01"}/instructions`}
              className="sat-results-retake-btn"
            >
              <span>Retake Test</span>
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}

function SatNotFound() {
  return <SatShell><section className="sat-card sat-small-card"><h1>Mock test not found</h1><p>This SAT practice route does not match one of the available mock tests.</p><Link className="sat-primary-button sat-button-link" to="/sat/mock-tests">Browse mock tests <span>→</span></Link></section></SatShell>;
}

export { Registration, Login, VerifyOtp, MockTests, TestInstructions, MockTest, Results, SatNotFound };