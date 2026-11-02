import React, { useState, useEffect } from "react";
import { Helmet } from "react-helmet-async";
import "./policy.css";

const navSections = [
  { id: "section-1", label: "Information we collect" },
  { id: "section-2", label: "How we use it" },
  { id: "section-3", label: "Users under 18" },
  { id: "section-4", label: "Data sharing" },
  { id: "section-5", label: "Your rights" },
  { id: "section-6", label: "Security and retention" },
  { id: "section-7", label: "Grievance Officer" },
];

const Policy = () => {
  const [activeSection, setActiveSection] = useState("section-1");

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 160;
      for (let i = navSections.length - 1; i >= 0; i--) {
        const el = document.getElementById(navSections[i].id);
        if (el && el.offsetTop <= scrollPosition) {
          setActiveSection(navSections[i].id);
          break;
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (e, id) => {
    e.preventDefault();
    setActiveSection(id);
    const element = document.getElementById(id);
    if (element) {
      const offset = 30;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  return (
    <>
      <Helmet>
        <title>Privacy Policy | EduTechEx Global</title>
        <meta
          name="description"
          content="How EduTechEx Global collects, uses and protects your personal information, in line with the Digital Personal Data Protection Act, 2023 and the IT Act, 2000."
        />
        <link rel="canonical" href="https://www.edutechex.com/privacy-policy" />
      </Helmet>

      <div className="policy-page">
        {/* Hero Section */}
        <section className="policy-hero">
          <div className="policy-hero-inner">
            <h1 className="policy-hero-title">Privacy Policy</h1>
            <p className="policy-hero-subtitle">
              How EduTechEx Global collects, uses and protects your personal
              information, in line with the Digital Personal Data Protection Act, 2023
              and the IT Act, 2000.
            </p>
            <div className="policy-effective-pill">
              Effective date: November 2, 2026
            </div>
          </div>
        </section>

        {/* Full-Screen Main Content Container */}
        <div className="policy-container">
          {/* Horizontal "On this page" Pill Box */}
          <nav className="policy-toc-card" aria-label="On this page navigation">
            <div className="policy-toc-title">On this page</div>
            <div className="policy-toc-pills">
              {navSections.map((item) => (
                <button
                  key={item.id}
                  type="button"
                  onClick={(e) => scrollToSection(e, item.id)}
                  className={`policy-toc-pill ${
                    activeSection === item.id ? "active" : ""
                  }`}
                  aria-current={activeSection === item.id ? "true" : undefined}
                >
                  {item.label}
                </button>
              ))}
            </div>
          </nav>

          {/* Policy Main Content */}
          <main className="policy-content">
            <p className="policy-intro">
              EduTechEx Global (&ldquo;we&rdquo;, &ldquo;our&rdquo; or &ldquo;us&rdquo;) respects your privacy.
              This policy explains how we collect, use and protect your personal
              information on our website and platform, in accordance with Indian
              data protection laws, including the Digital Personal Data Protection
              (DPDP) Act, 2023 and the Information Technology Act, 2000.
            </p>

            {/* 1. Information we collect */}
            <section id="section-1" className="policy-section">
              <h2 className="policy-section-heading">1. Information we collect</h2>

              <div className="policy-subgroup">
                <h3 className="policy-subheading">Personal and contact details</h3>
                <p className="policy-text">
                  Your name, email address, phone number and user profile information.
                </p>
              </div>

              <div className="policy-subgroup">
                <h3 className="policy-subheading">Academic details</h3>
                <p className="policy-text">
                  Your course enrollments, learning history and certificates earned.
                </p>
              </div>

              <div className="policy-subgroup">
                <h3 className="policy-subheading">Payment details</h3>
                <p className="policy-text">
                  Billing information, processed securely through payment gateways such as Razorpay and Stripe.
                </p>
              </div>

              <div className="policy-subgroup">
                <h3 className="policy-subheading">Technical data</h3>
                <p className="policy-text">
                  Your IP address, browser type and basic website usage statistics.
                </p>
              </div>
            </section>

            {/* 2. How we use your information */}
            <section id="section-2" className="policy-section">
              <h2 className="policy-section-heading">2. How we use your information</h2>
              <ul className="policy-bullets">
                <li>
                  <span className="policy-bullet-dot" />
                  <span>To set up your account and deliver educational courses.</span>
                </li>
                <li>
                  <span className="policy-bullet-dot" />
                  <span>To process payments and issue course certificates.</span>
                </li>
                <li>
                  <span className="policy-bullet-dot" />
                  <span>To send essential updates, receipts and platform notifications.</span>
                </li>
                <li>
                  <span className="policy-bullet-dot" />
                  <span>To keep our platform secure and comply with legal obligations.</span>
                </li>
              </ul>
            </section>

            {/* 3. Minors (users under 18) */}
            <section id="section-3" className="policy-section">
              <h2 className="policy-section-heading">3. Minors (users under 18)</h2>
              <div className="policy-callout">
                <p>
                  Students under 18 years of age must obtain verifiable consent from a
                  parent or legal guardian before creating an account or providing personal details.
                </p>
              </div>
            </section>

            {/* 4. Data sharing */}
            <section id="section-4" className="policy-section">
              <h2 className="policy-section-heading">4. Data sharing</h2>
              <p className="policy-text">
                <strong>We do not sell your personal data.</strong> We share information
                only with trusted third parties that are necessary to run our services:
              </p>
              <ul className="policy-bullets">
                <li>
                  <span className="policy-bullet-dot" />
                  <span>Secure cloud hosts and payment processors.</span>
                </li>
                <li>
                  <span className="policy-bullet-dot" />
                  <span>Academic partners or instructors tied to your enrolled courses.</span>
                </li>
                <li>
                  <span className="policy-bullet-dot" />
                  <span>Law enforcement or government bodies, if required by law.</span>
                </li>
              </ul>
            </section>

            {/* 5. Your rights */}
            <section id="section-5" className="policy-section">
              <h2 className="policy-section-heading">5. Your rights</h2>
              <p className="policy-text">
                Under the DPDP Act, 2023, you have the right to:
              </p>

              <div className="policy-rights-grid">
                <div className="policy-rights-card card-access">
                  <div className="policy-rights-card-title">Access</div>
                  <div className="policy-rights-card-desc">
                    Get a summary of your personal data.
                  </div>
                </div>

                <div className="policy-rights-card card-correct">
                  <div className="policy-rights-card-title">Correct</div>
                  <div className="policy-rights-card-desc">
                    Update inaccurate details.
                  </div>
                </div>

                <div className="policy-rights-card card-delete">
                  <div className="policy-rights-card-title">Delete</div>
                  <div className="policy-rights-card-desc">
                    Request deletion of your personal data.
                  </div>
                </div>

                <div className="policy-rights-card card-withdraw">
                  <div className="policy-rights-card-title">Withdraw consent</div>
                  <div className="policy-rights-card-desc">
                    Withdraw your consent at any time.
                  </div>
                </div>
              </div>

              <p className="policy-rights-contact">
                To exercise any of these rights, email us at{" "}
                <a href="mailto:office@edutechex.com">office@edutechex.com</a>.
              </p>
            </section>

            {/* 6. Security and retention */}
            <section id="section-6" className="policy-section">
              <h2 className="policy-section-heading">6. Security and retention</h2>
              <p className="policy-text">
                We use SSL encryption and secure servers to protect your data from
                unauthorized access. We keep your information only for as long as
                needed to provide our services or to meet legal requirements.
              </p>
            </section>

            {/* 7. Grievance Officer and contact */}
            <section id="section-7" className="policy-section">
              <h2 className="policy-section-heading">
                7. Grievance Officer and contact
              </h2>
              <p className="policy-text">
                If you have questions, concerns or privacy grievances, contact our
                designated Grievance Officer:
              </p>

              <div className="policy-table-card">
                <div className="policy-table-row">
                  <span className="policy-table-label">Entity</span>
                  <span className="policy-table-value">EduTechEx Global</span>
                </div>
                <div className="policy-table-row">
                  <span className="policy-table-label">Grievance contact</span>
                  <span className="policy-table-value">Grievance Officer</span>
                </div>
                <div className="policy-table-row">
                  <span className="policy-table-label">Email</span>
                  <span className="policy-table-value">
                    <a href="mailto:office@edutechex.com">office@edutechex.com</a>
                  </span>
                </div>
                <div className="policy-table-row">
                  <span className="policy-table-label">Response time</span>
                  <span className="policy-table-value">
                    We acknowledge complaints within 48 hours and resolve issues within 30 days.
                  </span>
                </div>
              </div>

            
            </section>
          </main>
        </div>
      </div>
    </>
  );
};

export default Policy;
