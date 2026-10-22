import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./canada.css";
import logo from "../../assets/Edutech-logo.svg";
import heroImg from "../../assets/buycourses/canada.png";

const Canada = () => {
  const navigate = useNavigate();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const elements = document.querySelectorAll("[data-reveal]");

    if ("IntersectionObserver" in window) {
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.add("canada-in");
              observer.unobserve(entry.target);
            }
          });
        },
        { threshold: 0.12 }
      );

      elements.forEach((element) => observer.observe(element));

      return () => observer.disconnect();
    }

    elements.forEach((element) => {
      element.classList.add("canada-in");
    });
  }, []);

  const whatsappNumber = "917330611818";

  const openWhatsApp = () => {
    const message = encodeURIComponent(
      "Hi EduTechEX, I am interested in studying in Canada. I would like to book a counselling session."
    );

    window.open(
      `https://api.whatsapp.com/send?phone=${whatsappNumber}&text=${message}`,
      "_blank",
      "noopener,noreferrer"
    );
  };

  const applicationJourney = [
    {
      number: "01",
      title: "Profile Assessment",
      description:
        "Understand your academic background, interests, career goals and preferred study options in Canada.",
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
          <circle cx="12" cy="7" r="4"></circle>
        </svg>
      ),
    },
    {
      number: "02",
      title: "Course Selection",
      description:
        "Identify suitable undergraduate, postgraduate and professional programs based on your profile.",
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M22 10v6M2 10l10-5 10 5-10 5z"></path>
          <path d="M6 12v5c3 3 9 3 12 0v-5"></path>
        </svg>
      ),
    },
    {
      number: "03",
      title: "University Shortlisting",
      description:
        "Compare Canadian universities and institutions based on programs, requirements, location and career goals.",
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M3 21h18M3 10h18M5 6l7-3 7 3M4 10v11M20 10v11M8 14v3M12 14v3M16 14v3"></path>
        </svg>
      ),
    },
    {
      number: "04",
      title: "Application Planning",
      description:
        "Create a structured application plan covering requirements, deadlines and supporting documents.",
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"></path>
          <rect x="8" y="2" width="8" height="4" rx="1" ry="1"></rect>
          <path d="M9 14h6M9 10h6"></path>
        </svg>
      ),
    },
    {
      number: "05",
      title: "Document Preparation",
      description:
        "Organise academic records, identification documents, statements, references and other required documents.",
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path>
        </svg>
      ),
    },
    {
      number: "06",
      title: "Application Submission",
      description:
        "Review and submit applications to selected Canadian universities and institutions.",
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <line x1="22" y1="2" x2="11" y2="13"></line>
          <polygon points="22 2 15 22 11 13 2 9 22 2"></polygon>
        </svg>
      ),
    },
    {
      number: "07",
      title: "Offer Management",
      description:
        "Understand admission offers and make informed decisions about your study options.",
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
          <polyline points="22,6 12,13 2,6"></polyline>
        </svg>
      ),
    },
    {
      number: "08",
      title: "Visa & Pre-Departure",
      description:
        "Receive guidance for study permit documentation, travel preparation and your transition to Canada.",
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="12" r="10"></circle>
          <line x1="2" y1="12" x2="22" y2="12"></line>
          <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path>
        </svg>
      ),
    },
  ];

  const services = [
    {
      number: "01",
      title: "University & College Selection",
      description:
        "Find institutions and programs that match your academic profile and career aspirations.",
      items: [
        "University research",
        "College research",
        "Course comparison",
        "University shortlisting",
        "Location guidance",
      ],
    },
    {
      number: "02",
      title: "Course Selection",
      description:
        "Choose the right program based on your previous education, interests and future career plans.",
      items: [
        "Undergraduate programs",
        "Postgraduate programs",
        "Diploma programs",
        "Certificate programs",
        "Professional programs",
      ],
    },
    {
      number: "03",
      title: "Application Planning",
      description:
        "Build an organised application strategy with deadlines and requirements clearly mapped out.",
      items: [
        "Application timeline",
        "Deadline planning",
        "Eligibility review",
        "Application checklist",
        "Submission planning",
      ],
    },
    {
      number: "04",
      title: "Statement & Application Support",
      description:
        "Guidance for preparing strong and well-structured application materials.",
      items: [
        "Statement guidance",
        "Essay support",
        "SOP guidance",
        "Reference guidance",
        "Application review",
      ],
    },
    {
      number: "05",
      title: "English Language Guidance",
      description:
        "Understand English-language requirements and plan the required tests for your chosen institution.",
      items: [
        "IELTS guidance",
        "TOEFL guidance",
        "English requirements",
        "Score planning",
        "Test timeline",
      ],
    },
    {
      number: "06",
      title: "Application Submission",
      description:
        "Support throughout the university application process from document checking to submission.",
      items: [
        "Document review",
        "Application review",
        "Form completion",
        "Submission support",
        "Application tracking",
      ],
    },
    {
      number: "07",
      title: "Offer & Admission Support",
      description:
        "Guidance after receiving offers so students can understand their options and next steps.",
      items: [
        "Offer review",
        "Admission guidance",
        "Decision support",
        "Fee planning",
        "Next-step planning",
      ],
    },
    {
      number: "08",
      title: "Study Permit Guidance",
      description:
        "Understand the documentation and preparation required for your Canadian study permit process.",
      items: [
        "Study permit guidance",
        "Document preparation",
        "Financial documentation",
        "Admission documentation",
        "Application planning",
      ],
    },
    {
      number: "09",
      title: "Pre-Departure Support",
      description:
        "Prepare for your transition to Canada with practical guidance before you travel.",
      items: [
        "Travel preparation",
        "Accommodation guidance",
        "Arrival planning",
        "Student preparation",
        "Pre-departure checklist",
      ],
    },
  ];

  const programs = [
    "Business & Management",
    "Computer Science & IT",
    "Engineering",
    "Health & Medical Sciences",
    "Data Science & Analytics",
    "Artificial Intelligence",
    "Finance & Accounting",
    "Arts & Humanities",
    "Science",
    "Law",
    "Hospitality & Tourism",
    "Environmental Sciences",
  ];

  const studyLevels = [
    {
      code: "UG",
      title: "Undergraduate",
      description:
        "Explore bachelor's degrees and undergraduate pathways at Canadian universities and institutions.",
      points: [
        "Bachelor's programs",
        "University selection",
        "Entry requirements",
        "Application planning",
        "Career-focused programs",
      ],
    },
    {
      code: "PG",
      title: "Postgraduate",
      description:
        "Discover master's and postgraduate opportunities aligned with your academic and professional goals.",
      points: [
        "Master's programs",
        "Graduate certificates",
        "Specialised programs",
        "University selection",
        "Career planning",
      ],
    },
    {
      code: "DIP",
      title: "Diploma & Certificate",
      description:
        "Explore career-focused diploma and certificate programs across a wide range of disciplines.",
      points: [
        "College programs",
        "Diploma programs",
        "Certificate programs",
        "Career pathways",
        "Program comparison",
      ],
    },
  ];

  const studentSupport = [
    {
      title: "Academic Requirements",
      description:
        "Understand academic eligibility and admission requirements for your selected Canadian program.",
    },
    {
      title: "English Language",
      description:
        "Get guidance on English-language requirements and test preparation planning.",
    },
    {
      title: "Financial Planning",
      description:
        "Understand tuition, living costs and the financial documentation required for your study journey.",
    },
    {
      title: "Application Documents",
      description:
        "Organise academic certificates, statements, references and other supporting documents.",
    },
    {
      title: "Study Permit",
      description:
        "Receive guidance on the Canadian study permit process and required documentation.",
    },
    {
      title: "Pre-Departure",
      description:
        "Prepare for travel, accommodation and your transition to student life in Canada.",
    },
  ];

  return (
    <div className="canada-page">
      {/* HEADER */}
      <header className="canada-header">
        <div className="canada-container canada-nav">
          <button
            className="canada-logo"
            onClick={() => navigate("/")}
            aria-label="EduTechEX Home"
          >
            <img src={logo} alt="EduTechEX" />
          </button>

          <nav className="canada-nav-links">
            <a href="#journey">Application Journey</a>
            <a href="#services">Services</a>
            <a href="#programs">Programs</a>
            <a href="#levels">Study Levels</a>
            
            <button className="canada-nav-cta" onClick={openWhatsApp}>
              Book a Counsellor
            </button>
          </nav>

          <button
            className="canada-menu-button"
            aria-label="Open menu"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>

        {mobileMenuOpen && (
          <div className="canada-mobile-menu">
            <a href="#journey">Application Journey</a>
            <a href="#services">Services</a>
            <a href="#programs">Programs</a>
            <a href="#levels">Study Levels</a>
            <button className="canada-mobile-cta" onClick={openWhatsApp}>
              Book a Counsellor
            </button>
          </div>
        )}
      </header>

      {/* HERO */}
      <section className="canada-hero">
        <div className="canada-hero-bg-decoration"></div>
        <div className="canada-hero-dotted-pattern"></div>
        <div className="canada-container canada-hero-grid">
          <div className="canada-hero-content" data-reveal>
            <span className="canada-eyebrow">Canada Admissions</span>
            <h1>
              Your journey to <br />
              <span>Canada starts here.</span>
            </h1>
            <p className="canada-hero-description">
              Explore world-class education opportunities across Canada with personalised guidance for university selection, course selection, applications, admission offers and study permit preparation.
            </p>
            <div className="canada-hero-actions">
              <a href="#services" className="canada-btn canada-btn-primary">
                Explore Canada Admissions
              </a>
              <button className="canada-btn canada-btn-secondary" onClick={openWhatsApp}>
                Talk to a Counsellor
              </button>
            </div>
          </div>
          <div className="canada-hero-image-wrapper" data-reveal>
            <img src={heroImg} alt="Study in Canada" className="canada-hero-img" loading="eager" fetchPriority="high" decoding="async" />
          </div>
        </div>
      </section>

      {/* APPLICATION JOURNEY */}
      <section className="canada-journey" id="journey">
        <div className="canada-container">
          <div className="canada-section-heading" data-reveal>
            <span className="canada-eyebrow">Step by Step</span>
            <h2>Your Journey to Study in Canada</h2>
            <p>Follow these simple steps from planning to your arrival in Canada.</p>
          </div>

          <div className="canada-journey-grid" data-reveal>
            {applicationJourney.map((stage, index) => (
              <div className="canada-journey-card" key={index}>
                
                <div className="cj-icon-container">{stage.icon}</div>
                <h3>{stage.title}</h3>
                <p>{stage.description}</p>
                <div className="cj-accent-line"></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section className="canada-services" id="services">
        <div className="canada-container">
          <div className="canada-section-heading" data-reveal>
            <span className="canada-eyebrow">What We Provide</span>
            <h2>Canada Admissions Services</h2>
            <p>End-to-end support for students planning to study in Canada, from university selection and applications to study permit and pre-departure guidance.</p>
          </div>

          <div className="canada-services-grid" data-reveal>
            {services.map((service, index) => (
              <article className="canada-service-card" key={index}>
                <div className="cs-header">
                  <div className="cs-icon-area">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                      <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
                    </svg>
                  </div>
                  <span className="cs-number">{service.number}</span>
                </div>
                <h3>{service.title}</h3>
                <p>{service.description}</p>
                <span className="cs-arrow">→</span>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* PROGRAMS */}
      <section className="canada-programs" id="programs">
        <div className="canada-container">
          <div className="canada-section-heading canada-dark-heading" data-reveal>
            <span className="canada-eyebrow">Explore Your Options</span>
            <h2>Popular Study Areas in Canada</h2>
            <p>Explore programs across leading academic and professional fields and find the right pathway for your future.</p>
          </div>

          <div className="canada-programs-grid" data-reveal>
            {programs.map((program, index) => (
              <div className="canada-program-card" key={program}>
                <span className="cp-number">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <h3 className="cp-title">{program}</h3>
                <span className="cp-arrow">→</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* STUDY LEVELS */}
      <section className="canada-levels" id="levels">
        <div className="canada-container">
          <div className="canada-section-heading" data-reveal>
            <span className="canada-eyebrow">Choose Your Pathway</span>
            <h2>Study Levels in Canada</h2>
            <p>Whether you are completing school, finishing your undergraduate degree or looking for a career-focused program, explore the pathway that fits your goals.</p>
          </div>

          <div className="canada-levels-grid" data-reveal>
            {studyLevels.map((level, index) => (
              <article className="canada-level-card" key={index}>
                <div className="cl-header">
                  <div className="cl-icon">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                      <path d="M22 10v6M2 10l10-5 10 5-10 5z" />
                      <path d="M6 12v5c3 3 9 3 12 0v-5" />
                    </svg>
                  </div>
                  <span className="cl-code">{level.code}</span>
                </div>
                <h3>{level.title}</h3>
                <p className="cl-desc">{level.description}</p>
                <ul className="cl-points">
                  {level.points.map((point, i) => (
                    <li key={i}>
                      <span className="cl-check">✓</span>
                      {point}
                    </li>
                  ))}
                </ul>
                <div className="cl-accent-line"></div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* STUDENT SUPPORT */}
      <section className="canada-support">
        <div className="canada-container canada-support-layout">
          <div className="canada-support-left" data-reveal>
            <span className="canada-eyebrow">International Students</span>
            <h2>Support beyond your application.</h2>
            <p>
              Studying in Canada involves more than selecting a university. Our counselling team helps students understand academic requirements, application documentation, admission processes, study permit preparation and the next steps towards studying abroad.
            </p>
            <button className="canada-btn canada-btn-primary" onClick={openWhatsApp}>
              Start Your Canada Journey
            </button>
          </div>

          <div className="canada-support-right" data-reveal>
            <div className="canada-support-grid">
              {studentSupport.map((item, index) => (
                <div className="canada-support-item" key={index}>
                  <div className="cs-check-icon">✓</div>
                  <div className="cs-content">
                    <h3>{item.title}</h3>
                    <p>{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="canada-cta">
        <div className="canada-container canada-cta-content" data-reveal>
          <h2>Find the right course. Choose the right institution. Build your future.</h2>
          <p>
            Speak with the EduTechEX counselling team to understand your Canadian study options, application requirements and next steps.
          </p>
          <div className="canada-cta-actions">
            <button className="canada-btn canada-btn-outline-white" onClick={openWhatsApp}>
              Book a Counselling Call
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Canada;
