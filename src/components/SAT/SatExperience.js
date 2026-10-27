import React, { useRef, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import "./sat.css";

const STORAGE_KEY = "edutechex-sat-registration";
const RESULT_KEY = "edutechex-sat-last-result";
const SAT_API_URL = process.env.REACT_APP_API_URL || "http://localhost:5000/api";
const curricula = ["CBSE", "ICSE", "State Board", "IB", "Cambridge/IGCSE", "Other"];
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

function SatShell({ children, backTo = "/pariksha", backLabel = "Back to Home", showUser = false }) {
  return <main className="sat-page"><div className="sat-container"><div className="sat-app-header">{showUser ? <span className="sat-user-badge">♙ Student User <span aria-hidden="true">⌄</span></span> : <Link to={backTo} className="sat-back-link">← {backLabel}</Link>}</div>{children}<div className="sat-prototype-note">Registration details are stored in MongoDB.</div></div></main>;
}

function Registration() {
  const navigate = useNavigate();
  const [message, setMessage] = useState("");
  const [submitting, setSubmitting] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", countryCode: "+91", phone: "", curriculum: "" });
  const [curriculumOpen, setCurriculumOpen] = useState(false);
  const [countryCodeOpen, setCountryCodeOpen] = useState(false);
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
    if (!form.curriculum) { setMessage("Select your curriculum."); return; }
    setSubmitting(true);
    setMessage("");
    try {
      const response = await fetch(`${SAT_API_URL}/sat/registrations`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, phone: `${form.countryCode} ${phoneDigits}`, curriculum: form.curriculum }),
      });
      const result = await response.json().catch(() => ({}));
      if (!response.ok) throw new Error(result.error || "Registration could not be completed.");
      sessionStorage.setItem(STORAGE_KEY, JSON.stringify({ name, email, phone: `${form.countryCode} ${phoneDigits}`, curriculum: form.curriculum, registrationId: result.id }));
      navigate("/sat/verify-otp", { state: { registered: true } });
    } catch (error) {
      setMessage(error.message || "Could not connect to the SAT backend. Please try again.");
    } finally {
      setSubmitting(false);
    }
  };

  return <SatShell><section className="sat-card sat-register-card"><div className="sat-card-intro"><div className="sat-step">01 <span>—</span> 03</div><h1>Start Your SAT Journey</h1><p>Register to access SAT mock tests and track your practice performance.</p></div>
    <form className="sat-form" onSubmit={submit} noValidate>
      <label>Full Name<input name="name" autoComplete="name" placeholder="Enter your full name" value={form.name} onChange={update} required /></label>
      <label>Email Address<input name="email" type="email" autoComplete="email" placeholder="you@example.com" value={form.email} onChange={update} required /></label>
      <label>Phone Number<span className="sat-phone-field"><span className="sat-country-select">
        <button className="sat-country-trigger" type="button" aria-label="Country calling code" aria-haspopup="listbox" aria-expanded={countryCodeOpen} onClick={() => setCountryCodeOpen((open) => !open)}><span>{form.countryCode} {countryCodes.find(({ code }) => code === form.countryCode)?.label}</span><span aria-hidden="true">⌄</span></button>
        {countryCodeOpen && <span className="sat-country-options" role="listbox" aria-label="Country calling code">{countryCodes.map(({ code, label }) => <button key={code} type="button" role="option" aria-selected={form.countryCode === code} className="sat-curriculum-option" onClick={() => { setForm((current) => ({ ...current, countryCode: code })); setCountryCodeOpen(false); }}>{code} {label}</button>)}</span>}
      </span><input name="phone" type="tel" autoComplete="tel-national" placeholder="98765 43210" value={form.phone} onChange={update} required /></span></label>
      <label className="sat-curriculum-label">Curriculum
        <div className="sat-curriculum-select">
          <button className="sat-curriculum-trigger" type="button" aria-haspopup="listbox" aria-expanded={curriculumOpen} onClick={() => setCurriculumOpen((open) => !open)}>
            <span>{form.curriculum || "Select your curriculum"}</span><span className="sat-curriculum-chevron" aria-hidden="true">⌄</span>
          </button>
          {curriculumOpen && <div className="sat-curriculum-options" role="listbox" aria-label="Curriculum">
            {curricula.map((item) => <button key={item} type="button" role="option" aria-selected={form.curriculum === item} className="sat-curriculum-option" onClick={() => { setForm((current) => ({ ...current, curriculum: item })); setCurriculumOpen(false); }}>{item}</button>)}
          </div>}
        </div>
      </label>
      {message && <div className="sat-message sat-message-error" role="alert">{message}</div>}
      <button className="sat-primary-button" type="submit" disabled={submitting}>{submitting ? "Connecting…" : "Continue"} {!submitting && <span aria-hidden="true">→</span>}</button>
    </form>
  </section></SatShell>;
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
    <SatShell backTo="/sat/register" backLabel="Back to Registration">
      <section className="sat-card sat-small-card sat-otp-card">
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
  return (
    <SatShell showUser>
      <section className="sat-dashboard">
        <div className="sat-dashboard-heading">
          <h1>Choose Your SAT Mock Test</h1>
          <p>Select from 10 practice papers and start your preparation journey.</p>
        </div>
        <div className="sat-test-grid">
          {tests.map((test, index) => (
            <article className="sat-test-card" key={test.id}>
              <div className="sat-test-number">{[1, 2, 2, 5, 5, 6, 6, 8, 10, 10][index]}</div>
              <span className="sat-test-label">{test.title}</span>
              <p>Math · Reading · Writing</p>
              <p className="sat-test-meta">◷ {test.durationMinutes} mins + {test.breakMinutes} min break&nbsp;&nbsp; ◉ {test.questionCount} questions</p>
              <Link className={index === 0 ? "sat-primary-button sat-test-action" : "sat-outline-button sat-test-action"} to={`/sat/mock-tests/${test.id}/instructions`}>
                {index === 0 ? "Start Practice" : "View Details"}
                {index === 0 && <span>→</span>}
              </Link>
            </article>
          ))}
        </div>
      </section>
    </SatShell>
  );
}

function TestInstructions() {
  const { testId } = useParams();
  const [acknowledged, setAcknowledged] = useState(false);
  const test = tests.find((item) => item.id === testId);
  if (!test) return <SatNotFound />;
  return (
    <SatShell backTo="/sat/mock-tests" backLabel="Back to Mock Tests">
      <section className="sat-instructions-page">
        <h1>{test.title} – Instructions</h1>
        <div className="sat-instruction-notice"><span aria-hidden="true">i</span> Please read the instructions carefully before starting your test.</div>
        <div className="sat-instruction-stats">
          <div><span className="sat-stat-icon">▣</span><span><small>Total Questions</small><strong>{test.questionCount}</strong></span></div>
          <div><span className="sat-stat-icon">◷</span><span><small>Duration</small><strong>{test.durationMinutes} minutes</strong><small>Plus {test.breakMinutes}-minute mandatory break</small></span></div>
          <div><span className="sat-stat-icon">▤</span><span><small>Sections</small><strong>Math · Reading · Writing</strong></span></div>
        </div>
        <h2>Instructions</h2>
        <ol className="sat-instruction-list">
          <li>The test consists of 3 sections: Math, Reading and Writing.</li>
          <li>You cannot go back to previous sections once you submit.</li>
          <li>Use the question palette to navigate between questions.</li>
          <li>Your answers are saved automatically.</li>
          <li>Do not refresh the page or close this browser during the test.</li>
          <li>Click “Submit Test” when you have completed all sections.</li>
        </ol>
        <div className="sat-instructions-actions">
          <label className="sat-acknowledge"><input type="checkbox" checked={acknowledged} onChange={(event) => setAcknowledged(event.target.checked)} /> <span>I have read and understood the instructions.</span></label>
          <Link aria-disabled={!acknowledged} className={`sat-primary-button sat-start-button${acknowledged ? " is-enabled" : ""}`} onClick={(event) => { if (!acknowledged) event.preventDefault(); }} to={`/sat/mock-tests/${test.id}/attempt`}>Start Test <span aria-hidden="true">→</span></Link>
        </div>
      </section>
    </SatShell>
  );
}

function MockTest() {
  const { testId } = useParams();
  const test = tests.find((item) => item.id === testId);
  const navigate = useNavigate();
  if (!test) return <SatNotFound />;
  const finish = () => {
    const result = { attemptId: `${test.id}-${Date.now()}`, testTitle: test.title, completedAt: new Date().toISOString(), prototype: true };
    sessionStorage.setItem(RESULT_KEY, JSON.stringify(result));
    navigate(`/sat/results/${result.attemptId}`);
  };
  return <SatShell backTo="/sat/mock-tests" backLabel="Exit Practice"><main className="sat-test-page"><div className="sat-test-toolbar"><strong>{test.title}</strong><button className="sat-primary-button sat-finish-button" onClick={finish}>Finish practice</button></div><div className="sat-iframe-wrap"><iframe title={`${test.title} practice content`} src={`${test.file}?autostart=1`} sandbox="allow-scripts allow-forms allow-modals allow-popups allow-downloads" /></div><p className="sat-iframe-note">Standalone mock content from your supplied HTML file. Finish practice creates a demo result summary; answer scoring is handled in that mock file.</p></main></SatShell>;
}

function Results() {
  const { attemptId } = useParams();
  let result;
  try { result = JSON.parse(sessionStorage.getItem(RESULT_KEY) || "null"); } catch { result = null; }
  const matching = result && result.attemptId === attemptId;
  return (
    <SatShell>
      <section className="sat-card sat-small-card sat-result-card">
        <div className="sat-icon-circle sat-result-icon" aria-hidden="true">✓</div>
        <div className="sat-step">PRACTICE COMPLETE</div>
        <h1>Your practice session is complete</h1>
        {matching ? (
          <div className="sat-result-meta">
            <span>Completed test</span>
            <strong>{result.testTitle}</strong>
            <span className="sat-result-date">{new Date(result.completedAt).toLocaleString()}</span>
          </div>
        ) : (
          <p className="sat-result-unavailable">This is a prototype result screen. No score has been submitted or verified.</p>
        )}
        <div className="sat-message sat-message-info sat-result-notice">Prototype result · Scoring and result history are not connected yet.</div>
        <Link className="sat-primary-button sat-button-link" to="/sat/mock-tests">Back to mock tests <span>→</span></Link>
      </section>
    </SatShell>
  );
}

function SatNotFound() {
  return <SatShell><section className="sat-card sat-small-card"><h1>Mock test not found</h1><p>This SAT practice route does not match one of the available mock tests.</p><Link className="sat-primary-button sat-button-link" to="/sat/mock-tests">Browse mock tests <span>→</span></Link></section></SatShell>;
}

export { Registration, VerifyOtp, MockTests, TestInstructions, MockTest, Results, SatNotFound };
