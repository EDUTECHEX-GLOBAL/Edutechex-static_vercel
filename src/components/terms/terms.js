import React, { useState, useEffect } from "react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import "./terms.css";

const navSections = [
  { id: "section-1", label: "1. Acceptance" },
  { id: "section-2", label: "2. Eligibility" },
  { id: "section-3", label: "3. User Accounts" },
  { id: "section-4", label: "4. Content & License" },
  { id: "section-5", label: "5. Prohibited Conduct" },
  { id: "section-6", label: "6. Intellectual Property" },
  { id: "section-7", label: "7. Payments & Refunds" },
  { id: "section-8", label: "8. Privacy & Data" },
  { id: "section-9", label: "9. Disclaimers" },
  { id: "section-10", label: "10. Liability" },
  { id: "section-11", label: "11. Indemnification" },
  { id: "section-12", label: "12. Termination" },
  { id: "section-13", label: "13. Third Parties" },
  { id: "section-14", label: "14. Governing Law" },
  { id: "section-15", label: "15. Modifications" },
  { id: "section-16", label: "16. Miscellaneous" },
];

const Terms = () => {
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
        <title>Terms and Conditions | EduTechEx Global</title>
        <meta
          name="description"
          content="Terms and Conditions governing access to and use of EduTechEx Global courses, assessments, and platforms under the IT Act, 2000 and Indian Contract Act, 1872."
        />
        <link rel="canonical" href="https://www.edutechex.com/terms-and-conditions" />
      </Helmet>

      <div className="terms-page">
        {/* Hero Section */}
        <section className="terms-hero">
          <div className="terms-hero-inner">
            <h1 className="terms-hero-title">Terms and Conditions</h1>
            <p className="terms-hero-subtitle">
              Welcome to EduTechEx Global. These Terms and Conditions govern your
              access to and use of our website, learning portal, assessments,
              courses, and digital services.
            </p>
            <div className="terms-effective-pill">
              Effective date: November 2, 2026 • Last Updated: November 2, 2026
            </div>
          </div>
        </section>

        {/* Full-Screen Main Content Container */}
        <div className="terms-container">
          {/* Horizontal "On this page" Pill Box */}
          <nav className="terms-toc-card" aria-label="On this page navigation">
            <div className="terms-toc-title">On this page</div>
            <div className="terms-toc-pills">
              {navSections.map((item) => (
                <button
                  key={item.id}
                  type="button"
                  onClick={(e) => scrollToSection(e, item.id)}
                  className={`terms-toc-pill ${
                    activeSection === item.id ? "active" : ""
                  }`}
                  aria-current={activeSection === item.id ? "true" : undefined}
                >
                  {item.label}
                </button>
              ))}
            </div>
          </nav>

          {/* Terms Main Content */}
          <main className="terms-content">
            <p className="terms-intro">
              Please read these Terms and Conditions (&ldquo;Terms&rdquo;) carefully before
              accessing or using the EduTechEx Global platform. By using any of our
              services, you acknowledge that you have read, understood, and agreed to be
              legally bound by these Terms, along with our{" "}
              <Link to="/privacy-policy" style={{ color: "#1d4ed8", fontWeight: 600 }}>
                Privacy Policy
              </Link>{" "}
              and{" "}
              <Link to="/cancellation-policy" style={{ color: "#1d4ed8", fontWeight: 600 }}>
                Refund Policy
              </Link>
              .
            </p>

            {/* 1. Introduction and Acceptance */}
            <section id="section-1" className="terms-section">
              <h2 className="terms-section-heading">1. Introduction and Acceptance</h2>
              <p className="terms-text">
                Welcome to EduTechEx Global (&ldquo;we&rdquo;, &ldquo;us&rdquo;, &ldquo;our&rdquo;, or the &ldquo;Company&rdquo;).
                These Terms and Conditions (&ldquo;Terms&rdquo;) govern your access to and use of the website located at{" "}
                <a href="https://www.edutechex.com" target="_blank" rel="noreferrer" style={{ color: "#1d4ed8", fontWeight: 600 }}>
                  https://www.edutechex.com
                </a>
                , including any sub-domains, mobile applications, content, features, and services offered therein (collectively, the &ldquo;Platform&rdquo;).
              </p>
              <p className="terms-text">
                By accessing, browsing, registering on, or using the Platform, you confirm that you have read, understood, and agree to be bound by these Terms and our Privacy Policy and Refund Policy. If you do not agree, please discontinue use of the Platform immediately.
              </p>
              <div className="terms-callout">
                <p>
                  These Terms constitute an electronic record under the Information Technology Act, 2000, and rules made thereunder, and do not require any physical or digital signature.
                </p>
              </div>
            </section>

            {/* 2. Eligibility */}
            <section id="section-2" className="terms-section">
              <h2 className="terms-section-heading">2. Eligibility</h2>
              <p className="terms-text">
                You must be at least 18 years of age and legally competent to form a binding contract under the Indian Contract Act, 1872, to use the Platform independently.
              </p>
              <div className="terms-callout">
                <p>
                  <strong>Minors (Users under 18):</strong> If you are under 18, you may use the Platform only with the verifiable consent and active supervision of a parent or legal guardian, who agrees to be bound by these Terms on your behalf. By using the Platform, you represent and warrant that you meet these eligibility requirements.
                </p>
              </div>
            </section>

            {/* 3. User Accounts */}
            <section id="section-3" className="terms-section">
              <h2 className="terms-section-heading">3. User Accounts</h2>
              <p className="terms-text">
                To access certain features, mock examinations, courses, and certifications, you may be required to create an account. You agree to:
              </p>
              <ul className="terms-bullets">
                <li>
                  <span className="terms-bullet-dot dot-blue" />
                  <span>Provide accurate, current, and complete information during registration.</span>
                </li>
                <li>
                  <span className="terms-bullet-dot dot-blue" />
                  <span>Maintain the security and confidentiality of your account credentials and one-time passwords (OTPs).</span>
                </li>
                <li>
                  <span className="terms-bullet-dot dot-blue" />
                  <span>Accept responsibility for all activities that occur under your registered account.</span>
                </li>
                <li>
                  <span className="terms-bullet-dot dot-blue" />
                  <span>Notify us immediately of any unauthorized account use or suspected security breach.</span>
                </li>
              </ul>
              <p className="terms-text">
                We reserve the right to refuse, suspend, or terminate accounts that violate these Terms, breach security protocols, or violate applicable law.
              </p>
            </section>

            {/* 4. Educational Content and License */}
            <section id="section-4" className="terms-section">
              <h2 className="terms-section-heading">4. Educational Content and License</h2>
              <p className="terms-text">
                All educational materials made available on the Platform—including course content, curriculum roadmaps, videos, lecture texts, diagnostic mock assessments, and downloadable resources—are provided for <strong>personal, non-commercial, and non-transferable use only</strong>.
              </p>
              <p className="terms-text">You explicitly agree that you shall not:</p>
              <ul className="terms-bullets">
                <li>
                  <span className="terms-bullet-dot dot-alert" />
                  <span>Reproduce, distribute, resell, sublicense, share, record, scrape, or create derivative works from any course materials without our prior express written permission.</span>
                </li>
                <li>
                  <span className="terms-bullet-dot dot-alert" />
                  <span>Use any platform content for any commercial purpose, institutional resale, or for the benefit of any unauthorized third party.</span>
                </li>
              </ul>
              <div className="terms-callout alert-callout">
                <p>
                  Unauthorized duplication, commercial redistribution, or piracy of proprietary platform materials may lead to immediate account termination and strict legal prosecution under the Indian Copyright Act, 1957.
                </p>
              </div>
            </section>

            {/* 5. User Conduct and Prohibited Activities */}
            <section id="section-5" className="terms-section">
              <h2 className="terms-section-heading">5. User Conduct and Prohibited Activities</h2>
              <p className="terms-text">
                You agree to use the Platform responsibly, lawfully, and ethically. You shall not:
              </p>
              <ul className="terms-bullets">
                <li>
                  <span className="terms-bullet-dot dot-alert" />
                  <span>Violate any applicable Indian law or regulation, including the Information Technology Act, 2000.</span>
                </li>
                <li>
                  <span className="terms-bullet-dot dot-alert" />
                  <span>Publish, upload, or transmit any content that is defamatory, obscene, pornographic, harmful, invasive of privacy, infringing on intellectual property, or otherwise unlawful.</span>
                </li>
                <li>
                  <span className="terms-bullet-dot dot-alert" />
                  <span>Attempt to gain unauthorized access to any portion of the Platform, other users&rsquo; accounts, computer systems, or our underlying cloud infrastructure.</span>
                </li>
                <li>
                  <span className="terms-bullet-dot dot-alert" />
                  <span>Engage in cheating, plagiarism, proxy test-taking, or any activity that disrupts or compromises the academic integrity and learning experience of others.</span>
                </li>
                <li>
                  <span className="terms-bullet-dot dot-alert" />
                  <span>Use the Platform to transmit spam, chain letters, harassment, malware, or impersonate any person, employee, or corporate entity.</span>
                </li>
              </ul>
            </section>

            {/* 6. Intellectual Property Rights */}
            <section id="section-6" className="terms-section">
              <h2 className="terms-section-heading">6. Intellectual Property Rights</h2>
              <p className="terms-text">
                All content and assets on the Platform—including design graphics, brand logos, course structures, video materials, examination software, questions, analytics algorithms, and source code—are the exclusive intellectual property of EduTechEx Global or its licensors and are protected under Indian intellectual property statutes.
              </p>
              <p className="terms-text">
                No rights, titles, or interests in any materials are transferred or granted to you, except for the limited personal license expressly stipulated under these Terms.
              </p>
              <div className="terms-callout">
                <p>
                  <strong>User Submissions:</strong> By posting any content (such as questions, discussion comments, assignments, or platform reviews), you grant EduTechEx Global a non-exclusive, worldwide, royalty-free, perpetual license to host, display, and reproduce such content solely for operating, evaluating, and improving our educational platform. You retain full ownership of your content.
                </p>
              </div>
            </section>

            {/* 7. Payments, Fees, and Refunds */}
            <section id="section-7" className="terms-section">
              <h2 className="terms-section-heading">7. Payments, Fees, and Refunds</h2>
              <p className="terms-text">
                Certain courses, programs, diagnostic mock tests, test-series subscriptions, and counseling packages on the Platform (&ldquo;Paid Services&rdquo;) require payment of specified fees.
              </p>

              {/* 4 Highlights Grid */}
              <div className="terms-cards-grid">
                <div className="terms-card card-fees">
                  <div className="terms-card-title">7.1 Fees &amp; Taxes</div>
                  <div className="terms-card-desc">
                    All prices are displayed at checkout inclusive of applicable GST and taxes.
                  </div>
                </div>

                <div className="terms-card card-start">
                  <div className="terms-card-title">7.2 Service Start</div>
                  <div className="terms-card-desc">
                    Deemed started on course date or first access to paid tests &amp; lessons.
                  </div>
                </div>

                <div className="terms-card card-norefund">
                  <div className="terms-card-title">7.3 No Refund After Start</div>
                  <div className="terms-card-desc">
                    All fees become non-refundable once Service Start has occurred.
                  </div>
                </div>

                <div className="terms-card card-cancel">
                  <div className="terms-card-title">7.4 Prior Cancellation</div>
                  <div className="terms-card-desc">
                    Refunds 48 hrs before start are processed to original method in 7–14 days.
                  </div>
                </div>
              </div>

              <div className="terms-subgroup">
                <h3 className="terms-subheading">7.1 Fees and Taxes</h3>
                <p className="terms-text">
                  By purchasing any Paid Service, you agree to pay all applicable fees, taxes (including Goods and Services Tax &ldquo;GST&rdquo;, where applicable), and payment gateway processing charges clearly displayed prior to completing checkout.
                </p>
              </div>

              <div className="terms-subgroup">
                <h3 className="terms-subheading">7.2 Service Commencement</h3>
                <p className="terms-text">
                  For the purposes of this Section, a Paid Service is deemed to have commenced on the earlier of:
                </p>
                <ul className="terms-bullets">
                  <li>
                    <span className="terms-bullet-dot dot-blue" />
                    <span>The scheduled start date or launch date of the course or academic program;</span>
                  </li>
                  <li>
                    <span className="terms-bullet-dot dot-blue" />
                    <span>Your initial access to any paid course materials, video recordings, live classroom sessions, mock assessments, question banks, or curriculum content; or</span>
                  </li>
                  <li>
                    <span className="terms-bullet-dot dot-blue" />
                    <span>Any other commencement date expressly communicated to you in writing at the time of purchase (&ldquo;Service Start&rdquo;).</span>
                  </li>
                </ul>
              </div>

              <div className="terms-subgroup">
                <h3 className="terms-subheading">7.3 No Refund After Service Start</h3>
                <p className="terms-text">
                  <strong>All fees paid for a Paid Service are non-refundable once the Service Start has occurred.</strong> If you choose to discontinue, withdraw from, or stop participating in the Paid Service after it has commenced—for any reason, including change of mind, scheduling conflicts, lack of time, relocation, non-attendance, or personal technical limitations—you will not be entitled to any refund, whether full or partial, except as expressly required by applicable law or as provided under Section 7.5.
                </p>
              </div>

              <div className="terms-subgroup">
                <h3 className="terms-subheading">7.4 Cancellation Before Service Start</h3>
                <p className="terms-text">
                  If you cancel your purchase before the Service Start, you may request a refund in accordance with the cancellation window published in our Refund Policy. Requests must be submitted in writing to{" "}
                  <a href="mailto:office@edutechex.com" style={{ color: "#1d4ed8", fontWeight: 600 }}>
                    office@edutechex.com
                  </a>{" "}
                  <strong>at least 48 hours prior to the scheduled start date</strong>. Approved refunds will be credited to the original payment method within 7–14 business days, subject to payment gateway clearance timelines and statutory deductions permitted by law.
                </p>
              </div>

              <div className="terms-subgroup">
                <h3 className="terms-subheading">7.5 Statutory Exceptions</h3>
                <p className="terms-text">
                  Nothing in this Section limits any mandatory rights you possess under applicable Indian laws, including the Consumer Protection Act, 2019, or the Consumer Protection (E-Commerce) Rules, 2020. The Company may, at its sole discretion or as mandated by law, provide a refund or remedial credit where:
                </p>
                <ul className="terms-bullets">
                  <li>
                    <span className="terms-bullet-dot dot-blue" />
                    <span>The Company cancels the Paid Service and does not provide a reasonable alternative;</span>
                  </li>
                  <li>
                    <span className="terms-bullet-dot dot-blue" />
                    <span>The Paid Service was not delivered due solely to verified technical faults on the Company&rsquo;s platform;</span>
                  </li>
                  <li>
                    <span className="terms-bullet-dot dot-blue" />
                    <span>A duplicate, unauthorized, or erroneous transaction is conclusively verified; or</span>
                  </li>
                  <li>
                    <span className="terms-bullet-dot dot-blue" />
                    <span>A refund is explicitly mandated by a binding order of a competent regulatory or judicial authority.</span>
                  </li>
                </ul>
              </div>

              <div className="terms-subgroup">
                <h3 className="terms-subheading">7.6 Chargebacks</h3>
                <p className="terms-text">
                  Initiating an unverified chargeback or payment reversal with your bank without first contacting our support team may result in immediate suspension of platform access and comprehensive account review. You agree to cooperate with our grievance officers in good faith to resolve payment disputes.
                </p>
              </div>

              <div className="terms-subgroup">
                <h3 className="terms-subheading">7.7 Policy Display</h3>
                <p className="terms-text">
                  Our comprehensive{" "}
                  <Link to="/cancellation-policy" style={{ color: "#1d4ed8", fontWeight: 600 }}>
                    Refund Policy
                  </Link>{" "}
                  forms an integral part of these Terms. By completing any payment on the Platform, you acknowledge that you have reviewed and unconditionally accepted the Refund Policy.
                </p>
              </div>
            </section>

            {/* 8. Privacy and Data Protection */}
            <section id="section-8" className="terms-section">
              <h2 className="terms-section-heading">8. Privacy and Data Protection</h2>
              <p className="terms-text">
                Your privacy is paramount. Your use of the Platform is also governed by our{" "}
                <Link to="/privacy-policy" style={{ color: "#1d4ed8", fontWeight: 600 }}>
                  Privacy Policy
                </Link>
                , which is incorporated into these Terms by reference.
              </p>
              <p className="terms-text">
                We process all personal data strictly in accordance with the Digital Personal Data Protection Act, 2023 (DPDP Act) and the Information Technology Act, 2000. Our Privacy Policy explains the specific types of data collected, how we safeguard your information, and how Data Principals may exercise statutory rights of access, correction, and deletion.
              </p>
            </section>

            {/* 9. Disclaimers */}
            <section id="section-9" className="terms-section">
              <h2 className="terms-section-heading">9. Disclaimers</h2>
              <p className="terms-text">
                The Platform and all educational content, mock tests, and diagnostic analytics are provided on an <strong>&ldquo;as is&rdquo; and &ldquo;as available&rdquo;</strong> basis without warranties of any kind. We do not warrant that:
              </p>
              <ul className="terms-bullets">
                <li>
                  <span className="terms-bullet-dot dot-alert" />
                  <span>The Platform will operate uninterrupted, error-free, completely bug-free, or secure from cyber threats.</span>
                </li>
                <li>
                  <span className="terms-bullet-dot dot-alert" />
                  <span>Any educational materials, score estimators, or university guidelines are exhaustive or reflect real-time external admission criteria.</span>
                </li>
                <li>
                  <span className="terms-bullet-dot dot-alert" />
                  <span>The results obtained from using our preparatory materials will guarantee specific examination scores or university admissions.</span>
                </li>
              </ul>
              <p className="terms-text">
                No advice, score analysis, or information obtained through the Platform shall create any warranty not expressly stated in these Terms.
              </p>
            </section>

            {/* 10. Limitation of Liability */}
            <section id="section-10" className="terms-section">
              <h2 className="terms-section-heading">10. Limitation of Liability</h2>
              <p className="terms-text">
                To the maximum extent permitted by applicable Indian law, EduTechEx Global, its founders, directors, employees, and academic advisors shall not be liable for any indirect, incidental, special, consequential, or punitive damages arising out of or related to your use of or inability to access the Platform.
              </p>
              <div className="terms-callout">
                <p>
                  <strong>Liability Cap:</strong> Our total aggregate liability for any and all claims arising out of these Terms or use of the Platform shall in no event exceed the total fees paid by you to EduTechEx Global in the six (6) months immediately preceding the event giving rise to the claim.
                </p>
              </div>
            </section>

            {/* 11. Indemnification */}
            <section id="section-11" className="terms-section">
              <h2 className="terms-section-heading">11. Indemnification</h2>
              <p className="terms-text">
                You agree to indemnify, defend, and hold harmless EduTechEx Global, its officers, directors, employees, instructors, and affiliates from and against any claims, liabilities, damages, losses, costs, or expenses (including reasonable legal and attorneys&rsquo; fees) arising out of or connected with:
              </p>
              <ul className="terms-bullets">
                <li>
                  <span className="terms-bullet-dot dot-blue" />
                  <span>Your breach or violation of any provision of these Terms or applicable policies;</span>
                </li>
                <li>
                  <span className="terms-bullet-dot dot-blue" />
                  <span>Your misuse or unauthorized commercial exploitation of the Platform; or</span>
                </li>
                <li>
                  <span className="terms-bullet-dot dot-blue" />
                  <span>Your infringement or violation of any intellectual property rights, privacy rights, or statutory rights of any third party.</span>
                </li>
              </ul>
            </section>

            {/* 12. Termination and Suspension */}
            <section id="section-12" className="terms-section">
              <h2 className="terms-section-heading">12. Termination and Suspension</h2>
              <p className="terms-text">
                We reserve the right to immediately suspend or terminate your account and access to the Platform, at our sole discretion, without prior notice, for conduct that we reasonably believe violates these Terms, breaches academic honor codes, violates applicable Indian laws, or is harmful to our platform, other students, or the Company.
              </p>
              <p className="terms-text">
                Upon termination, your right to use the Platform ceases immediately, and any active session tokens or course access will be revoked.
              </p>
            </section>

            {/* 13. Third-Party Links and Services */}
            <section id="section-13" className="terms-section">
              <h2 className="terms-section-heading">13. Third-Party Links and Services</h2>
              <p className="terms-text">
                The Platform may contain links or integrations with third-party websites, universities, test portals, and payment gateways (such as Razorpay or Stripe). We do not control and are not responsible for the content, security, terms, or privacy policies of any third-party service provider. Your interactions with third-party platforms are solely between you and the respective third party.
              </p>
            </section>

            {/* 14. Governing Law and Dispute Resolution */}
            <section id="section-14" className="terms-section">
              <h2 className="terms-section-heading">
                14. Governing Law and Dispute Resolution
              </h2>
              <p className="terms-text">
                These Terms, their interpretation, and any non-contractual obligations arising out of them shall be governed by and construed in accordance with the substantive laws of India.
              </p>

              <div className="terms-table-card">
                <div className="terms-table-row">
                  <span className="terms-table-label">Entity</span>
                  <span className="terms-table-value">EduTechEx Global</span>
                </div>
                <div className="terms-table-row">
                  <span className="terms-table-label">Governing law</span>
                  <span className="terms-table-value">Laws of the Republic of India</span>
                </div>
                <div className="terms-table-row">
                  <span className="terms-table-label">Exclusive jurisdiction</span>
                  <span className="terms-table-value">
                    Competent courts situated in Hyderabad, Telangana, India
                  </span>
                </div>
                <div className="terms-table-row">
                  <span className="terms-table-label">Amicable resolution</span>
                  <span className="terms-table-value">
                    The parties agree to attempt in good faith to resolve any dispute through mutual negotiation before commencing formal court proceedings.
                  </span>
                </div>
              </div>
            </section>

            {/* 15. Modifications to These Terms */}
            <section id="section-15" className="terms-section">
              <h2 className="terms-section-heading">15. Modifications to These Terms</h2>
              <p className="terms-text">
                We reserve the right to update, revise, or modify these Terms at any time to reflect updates in our course offerings, legal obligations, or industry practices. Any modifications will be effective immediately upon publication on the Platform with an updated &ldquo;Last Updated&rdquo; date.
              </p>
              <p className="terms-text">
                Your continued use of the Platform after any revisions constitutes your binding acceptance of the updated Terms. We encourage you to review this page periodically.
              </p>
            </section>

            {/* 16. Miscellaneous */}
            <section id="section-16" className="terms-section">
              <h2 className="terms-section-heading">16. Miscellaneous</h2>

              <div className="terms-misc-grid">
                <div className="terms-misc-card">
                  <div className="terms-misc-card-title">Severability</div>
                  <p className="terms-misc-card-text">
                    If any provision of these Terms is determined to be invalid, illegal, or unenforceable, the remaining provisions shall continue in full force and effect.
                  </p>
                </div>

                <div className="terms-misc-card">
                  <div className="terms-misc-card-title">No Waiver</div>
                  <p className="terms-misc-card-text">
                    Our delay or failure to enforce any right, power, or provision under these Terms shall not be construed as a waiver of that or any subsequent right.
                  </p>
                </div>

                <div className="terms-misc-card">
                  <div className="terms-misc-card-title">Entire Agreement</div>
                  <p className="terms-misc-card-text">
                    These Terms, together with our Privacy Policy and Refund Policy, constitute the entire legal agreement between you and EduTechEx Global regarding your use of the Platform.
                  </p>
                </div>
              </div>

              <div className="terms-btn-wrap">
                <a
                  href="mailto:office@edutechex.com"
                  className="terms-primary-btn"
                >
                  Contact Legal &amp; Compliance Team
                </a>
              </div>
            </section>
          </main>
        </div>
      </div>
    </>
  );
};

export default Terms;

