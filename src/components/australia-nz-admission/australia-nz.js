import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./australia-nz.css";

import logo from "../../assets/Edutech-logo.svg";
import heroImg from "../../assets/buycourses/australia-nz.png";

const AustraliaNZ = () => {
  const navigate = useNavigate();
  const [menuOpen, setMenuOpen] = useState(false);

  const whatsappNumber = "917330611818";

  const openWhatsApp = () => {
    const message = encodeURIComponent(
      "Hi EduTechEX, I would like to know more about Australia & New Zealand undergraduate admissions and book a counselling call."
    );

    window.open(
      `https://api.whatsapp.com/send?phone=${whatsappNumber}&text=${message}`,
      "_blank",
      "noopener,noreferrer"
    );
  };

  useEffect(() => {
    const elements = document.querySelectorAll(
      ".aunz-page [data-reveal]"
    );

    if (!("IntersectionObserver" in window)) {
      elements.forEach((element) => {
        element.classList.add("in");
      });

      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("in");
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.15,
      }
    );

    elements.forEach((element) => {
      observer.observe(element);
    });

    return () => observer.disconnect();
  }, []);

  const journeyStages = [
    {
      number: "01",
      title: "Selection",
      description: "Profile assessment, university & course shortlisting",
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="url(#icon-gradient)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
          <circle cx="12" cy="7" r="4"></circle>
        </svg>
      ),
    },
    {
      number: "02",
      title: "Application",
      description: "State portals (Australia) / direct application (NZ)",
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="url(#icon-gradient)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"></path>
          <rect x="8" y="2" width="8" height="4" rx="1" ry="1"></rect>
          <path d="M9 14h6M9 10h6"></path>
        </svg>
      ),
    },
    {
      number: "03",
      title: "Statement of Purpose",
      description: "Personal statement where required",
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="url(#icon-gradient)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path>
        </svg>
      ),
    },
    {
      number: "04",
      title: "References",
      description: "Guidance on requirements & documentation",
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="url(#icon-gradient)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
          <circle cx="9" cy="7" r="4"></circle>
          <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
          <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
        </svg>
      ),
    },
    {
      number: "05",
      title: "English Proficiency",
      description: "IELTS, PTE Academic or TOEFL",
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="url(#icon-gradient)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"></path>
          <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"></path>
        </svg>
      ),
    },
    {
      number: "06",
      title: "Offers",
      description: "Comparing offers, deposit deadlines",
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="url(#icon-gradient)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M22 10v6M2 10l10-5 10 5-10 5z"></path>
          <path d="M6 12v5c3 3 9 3 12 0v-5"></path>
        </svg>
      ),
    },
    {
      number: "07",
      title: "Student Visa",
      description: "Visa application, GTE statement, pre-departure",
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="url(#icon-gradient)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
          <polyline points="22,6 12,13 2,6"></polyline>
        </svg>
      ),
    },
  ];

  const services = [
    {
      title: "University & Course Selection",
      items: [
        "Academic profile assessment",
        "University & course comparison across AU & NZ",
        "Entry requirement assessment",
        "Ambitious, target & safe choices",
      ],
    },
    {
      title: "Application Support",
      items: [
        "State portal guidance for Australian universities",
        "Direct application guidance for New Zealand universities",
        "Application strategy & deadlines",
        "Submission guidance",
      ],
    },
    {
      title: "Statement of Purpose",
      items: [
        "Structure & review",
        "Course-specific guidance",
        "Academic & extracurricular framing",
        "Final review before submission",
      ],
    },
    {
      title: "Academic Reference Guidance",
      items: [
        "Reference requirement guidance",
        "Support coordinating with your school",
        "Application document checklist",
        "Transcript & grade guidance",
      ],
    },
    {
      title: "Admissions Counselling",
      items: [
        "One-to-one counselling",
        "Career & course guidance",
        "Pathway planning across AU & NZ",
        "Application strategy",
      ],
    },
    {
      title: "English Proficiency Support",
      items: [
        "IELTS preparation",
        "PTE Academic guidance",
        "TOEFL guidance",
        "Requirement guidance by university",
      ],
    },
    {
      title: "Pathway & Foundation Programmes",
      items: [
        "Foundation year guidance",
        "Diploma-to-degree pathway guidance",
        "Credit transfer guidance",
        "Programme-specific admission requirements",
      ],
    },
    {
      title: "Support for Indian Students",
      items: [
        "Guidance for Indian applicants",
        "Entry requirement & equivalency guidance",
        "Tuition & scholarship guidance",
        "Student visa advisory services",
      ],
    },
    {
      title: "Student Visa & Pre-Departure",
      items: [
        "Student visa application guidance",
        "GTE statement guidance (Australia)",
        "Financial-document guidance",
        "Pre-departure guidance",
      ],
    },
  ];

  const studyAreas = [
    "Business & Management",
    "Engineering",
    "Computer Science & IT",
    "Health Sciences & Nursing",
    "Hospitality & Tourism",
    "Environmental & Marine Science",
    "Agriculture & Food Sciences",
    "Data Science & Analytics",
    "Psychology",
    "Design & Architecture",
    "Education",
    "Mathematics & Statistics",
  ];

  const internationalSupport = [
    {
      title: "Entry requirements",
      text:
        "International entry requirements and academic equivalency guidance, mapped to Indian curricula.",
    },
    {
      title: "English language",
      text:
        "IELTS / PTE Academic preparation and English-language requirement guidance for your target universities.",
    },
    {
      title: "Fees & scholarships",
      text:
        "Tuition-fee guidance and scholarship guidance for eligible applicants.",
    },
    {
      title: "Student visa",
      text:
        "Student visa guidance, GTE statement guidance, and financial-document guidance.",
    },
    {
      title: "Pre-departure",
      text:
        "Practical guidance for the move — before you leave and after you land.",
    },
  ];

  const closeMobileMenu = () => {
    setMenuOpen(false);
  };

  return (
    <div className="aunz-page">

      {/* =====================================================
          HEADER
          ===================================================== */}

      <header className="aunz-site-header">

        <div className="aunz-wrap aunz-nav">

          <button
            className="aunz-logo"
            onClick={() => navigate("/")}
            aria-label="EduTechEX Home"
          >
            <img
              src={logo}
              alt="EduTechEX"
            />
          </button>

          <nav
            className={`aunz-nav-links ${
              menuOpen ? "mobile-open" : ""
            }`}
          >

            

            <a
              href="#services"
              className="active"
              onClick={closeMobileMenu}
            >
              Australia &amp; NZ Undergraduate
            </a>

            <a
              href="#subjects"
              onClick={closeMobileMenu}
            >
              Study Areas
            </a>

            <a
              href="#international"
              onClick={closeMobileMenu}
            >
              International Students
            </a>

            <button
              className="aunz-nav-cta"
              onClick={() => {
                openWhatsApp();
                closeMobileMenu();
              }}
            >
              Book a Counselling Call
            </button>

          </nav>

          <button
            className="aunz-burger"
            aria-label="Open menu"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <span></span>
            <span></span>
            <span></span>
          </button>

        </div>

      </header>


      <main id="top">

        {/* =====================================================
            HERO
            ===================================================== */}

        <section className="aunz-hero">

          <div className="aunz-wrap aunz-hero-grid">

            <div>

              <span className="aunz-eyebrow">
                Australia &amp; New Zealand Undergraduate Admissions
              </span>

              <h1>
                Study Down Under.{" "}
                <em>Guided, not guessed at.</em>
              </h1>

              <p className="aunz-lede">
                Guidance and application support for students
                applying to undergraduate programmes in Australia
                and New Zealand — from choosing a university and
                pathway to submitting applications and preparing
                your visa.
              </p>

              <div className="aunz-hero-ctas">

                <a
                  href="#services"
                  className="aunz-btn aunz-btn-primary"
                >
                  Explore AU &amp; NZ Admissions Services
                </a>

                <button
                  className="aunz-btn aunz-btn-ghost"
                  onClick={openWhatsApp}
                >
                  Talk to a Counsellor
                </button>

              </div>

              <div className="aunz-hero-stat">

                <strong>
                  Two countries, one plan
                </strong>

                Applications across Australia's state portals
                and New Zealand's direct university applications,
                tracked together.

              </div>

            </div>


            <div className="aunz-hero-image">
              <img src={heroImg} alt="Study in Australia and New Zealand" />
            </div>

          </div>

        </section>


        {/* =====================================================
            APPLICATION JOURNEY
            ===================================================== */}

        <section className="aunz-journey-new" id="journey">
          {/* SVG Definition for Icon Gradients */}
          <svg width="0" height="0" style={{ position: "absolute", visibility: "hidden" }}>
            <linearGradient id="icon-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#1443fe" />
              <stop offset="100%" stopColor="#42b9aa" />
            </linearGradient>
          </svg>

          <div className="aunz-wrap">
            <div className="aunz-journey-header" data-reveal>
              <div className="ajh-logo">EDUTECHEX</div>
              <h2>Your Journey to Study in AU &amp; NZ</h2>
              <div className="ajh-divider">
                <span className="ajh-dot ink"></span>
                <div className="ajh-line"></div>
                <svg viewBox="0 0 24 24" fill="none" stroke="url(#icon-gradient)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22 10v6M2 10l10-5 10 5-10 5z"></path>
                  <path d="M6 12v5c3 3 9 3 12 0v-5"></path>
                </svg>
                <div className="ajh-line"></div>
                <span className="ajh-dot accent"></span>
              </div>
              <p>Seven stages. One counsellor with you at each one. This is the real sequence an Australian or New Zealand undergraduate application moves through.</p>
            </div>

            <div className="aunz-journey-cards" data-reveal>
              {journeyStages.map((stage) => (
                <div className="aunz-jcard" key={stage.number}>
                  
                  <div className="aj-corner-graphic">
                    <svg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg">
                      <path d="M 0 50 A 50 50 0 0 0 50 0" fill="none" stroke="#1443fe" strokeWidth="1.5" />
                      <circle cx="25" cy="25" r="14" fill="#1443fe" />
                      <text x="25" y="29" fill="white" fontSize="12" fontWeight="bold" textAnchor="middle" fontFamily="sans-serif">{stage.number}</text>
                    </svg>
                  </div>

                  <div className="aj-icon">
                    {stage.icon}
                  </div>

                  <h3>{stage.title}</h3>
                  <p>{stage.description}</p>
                  
                  <div className="aj-bottom-line"></div>
                </div>
              ))}
            </div>
          </div>
        </section>


        {/* =====================================================
            SERVICES
            ===================================================== */}

        <section
          className="aunz-section"
          id="services"
        >

          <div className="aunz-wrap">

            <div
              className="aunz-section-head"
              data-reveal
            >

              <span className="aunz-eyebrow">
                What We Provide
              </span>

              <h2>
                Australia &amp; New Zealand Undergraduate
                Admissions Services
              </h2>

              <p>
                A full service line covering both countries —
                built around how admissions actually work in
                each one.
              </p>

            </div>


            <div
              className="aunz-services-grid"
              data-reveal
            >

              {services.map((service, index) => (
                <div
                  className="aunz-service-card"
                  key={index}
                >

                  <h3>
                    {service.title}
                  </h3>

                  <ul>

                    {service.items.map(
                      (item, itemIndex) => (
                        <li key={itemIndex}>
                          {item}
                        </li>
                      )
                    )}

                  </ul>

                </div>
              ))}

            </div>

          </div>

        </section>


        {/* =====================================================
            STUDY AREAS
            ===================================================== */}

        <section
          className="aunz-subjects"
          id="subjects"
        >

          <div className="aunz-wrap">

            <div
              className="aunz-section-head"
              data-reveal
            >

              <span className="aunz-eyebrow">
                Explore by Course
              </span>

              <h2>
                Popular Australian &amp; New Zealand Study Areas
              </h2>

              <p>
                Course selection support is built around your
                subject interest and academic profile — here's
                where most of our students start.
              </p>

            </div>


            <div
              className="aunz-chip-row"
              data-reveal
            >

              {studyAreas.map((area, index) => (
                <span
                  className="aunz-chip"
                  key={index}
                >
                  {area}
                </span>
              ))}

            </div>

          </div>

        </section>


        {/* =====================================================
            INTERNATIONAL STUDENTS
            ===================================================== */}

        <section
          className="aunz-international"
          id="international"
        >

          <div className="aunz-wrap aunz-intl-grid">

            <div data-reveal>

              <span className="aunz-eyebrow">
                For Indian Students
              </span>

              <h2>
                Applying to Australia &amp; NZ from India
              </h2>

              <p className="aunz-intl-copy">
                Built for students at government and public
                schools who don't have easy access to admissions
                guidance for Australia or New Zealand — every
                part of this service is designed to work on a
                slow connection and explain things in plain terms.
              </p>

              <button
                className="aunz-start-btn"
                onClick={openWhatsApp}
              >
                Start Your Application
              </button>

            </div>


            <ul
              className="aunz-checklist"
              data-reveal
            >

              {internationalSupport.map(
                (item, index) => (
                  <li key={index}>

                    <span className="aunz-check-num">
                      →
                    </span>

                    <div>

                      <strong>
                        {item.title}
                      </strong>

                      <span>
                        {item.text}
                      </span>

                    </div>

                  </li>
                )
              )}

            </ul>

          </div>

        </section>


        {/* =====================================================
            CTA
            ===================================================== */}

        <section
          className="aunz-cta-band"
          id="contact"
        >

          <div className="aunz-wrap">

            <span className="aunz-eyebrow">
              Ready When You Are
            </span>

            <h2>
              Start with a free profile assessment
            </h2>

            <p>
              Tell us your subject interest and academic record
              — we'll shortlist universities across Australia
              and New Zealand and map out your timeline.
            </p>

            <button
              className="aunz-btn aunz-btn-primary"
              onClick={openWhatsApp}
            >
              Book a Counselling Call
            </button>

          </div>

        </section>

      </main>


      

    </div>
  );
};

export default AustraliaNZ;