import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./medical.css";
import logo from "../../assets/Edutech-logo.svg";
import medicalHeroImage from "../../assets/buycourses/medical-hero.png";

const Medical = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const elements = document.querySelectorAll("[data-reveal]");

    if ("IntersectionObserver" in window) {
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.add("medical-in");
              observer.unobserve(entry.target);
            }
          });
        },
        {
          threshold: 0.12,
        }
      );

      elements.forEach((element) => observer.observe(element));

      return () => observer.disconnect();
    }

    elements.forEach((element) => {
      element.classList.add("medical-in");
    });
  }, []);

  const whatsappNumber = "917330611818";

  const openWhatsApp = () => {
    const message = encodeURIComponent(
      "Hi EduTechEX, I am interested in the Medical Admissions Program. I would like to book a counselling session."
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
        "Understand your academic profile, interests, career goals and medical education requirements.",
    },
    {
      number: "02",
      title: "University Selection",
      description:
        "Identify suitable medical universities and programs based on your academic profile and preferences.",
    },
    {
      number: "03",
      title: "Application Planning",
      description:
        "Create an application strategy covering universities, deadlines, examinations and required documents.",
    },
    {
      number: "04",
      title: "Document Preparation",
      description:
        "Prepare academic records, certificates, references, identification documents and other application requirements.",
    },
    {
      number: "05",
      title: "Entrance Tests",
      description:
        "Guidance for relevant medical entrance examinations and English-language requirements.",
    },
    {
      number: "06",
      title: "Application Submission",
      description:
        "Support throughout the application process, including review and submission of university applications.",
    },
    {
      number: "07",
      title: "Interview Preparation",
      description:
        "Prepare for medical school interviews with structured guidance and practice.",
    },
    {
      number: "08",
      title: "Offer & Visa",
      description:
        "Guidance after receiving offers, including decision-making, visa documentation and pre-departure preparation.",
    },
  ];

  const services = [
    {
      number: "01",
      title: "Medical University Selection",
      description:
        "Identify medical universities and programs aligned with your academic profile and long-term career goals.",
      items: [
        "Academic profile assessment",
        "Medical university research",
        "Course comparison",
        "University shortlisting",
        "Application strategy",
      ],
    },
    {
      number: "02",
      title: "Application Planning",
      description:
        "Build a structured application plan covering universities, deadlines, examinations and documents.",
      items: [
        "Application timeline",
        "University deadline planning",
        "Application checklist",
        "Document planning",
        "Submission strategy",
      ],
    },
    {
      number: "03",
      title: "Personal Statement & Essays",
      description:
        "Guidance to help students communicate their motivation, academic interests and suitability for medicine.",
      items: [
        "Personal statement guidance",
        "Essay structure",
        "Academic positioning",
        "Extracurricular activities",
        "Final review",
      ],
    },
    {
      number: "04",
      title: "Entrance Examination Support",
      description:
        "Guidance for medical entrance examinations and other assessments required by universities.",
      items: [
        "UCAT guidance",
        "Entrance examination planning",
        "Test preparation strategy",
        "English-language requirements",
        "Examination timeline",
      ],
    },
    {
      number: "05",
      title: "Interview Preparation",
      description:
        "Prepare students for medical school interviews through structured practice and counselling.",
      items: [
        "Interview format guidance",
        "Mock interview preparation",
        "Communication skills",
        "Motivation questions",
        "Scenario-based questions",
      ],
    },
    {
      number: "06",
      title: "Medical Application Support",
      description:
        "End-to-end assistance throughout the medical university application process.",
      items: [
        "Application review",
        "Document verification",
        "Application submission",
        "University communication",
        "Application status guidance",
      ],
    },
    {
      number: "07",
      title: "International Medical Admissions",
      description:
        "Support for students applying to medical programs across the UK, US and other international destinations.",
      items: [
        "UK medical applications",
        "US medical applications",
        "International university options",
        "Entry requirement guidance",
        "Country comparison",
      ],
    },
    {
      number: "08",
      title: "Offer & Decision Support",
      description:
        "Guidance after receiving university offers to help students understand their options and next steps.",
      items: [
        "Offer evaluation",
        "Conditional offers",
        "University decision guidance",
        "Fee guidance",
        "Next-step planning",
      ],
    },
    {
      number: "09",
      title: "Visa & Pre-Departure Support",
      description:
        "Support for students preparing to travel abroad after securing admission.",
      items: [
        "Visa documentation guidance",
        "CAS / admission documentation",
        "Financial-document guidance",
        "Travel preparation",
        "Pre-departure guidance",
      ],
    },
  ];

  const medicalPrograms = [
    "Medicine / MBBS",
    "Dentistry",
    "Veterinary Medicine",
    "Pharmacy",
    "Nursing",
    "Physiotherapy",
    "Biomedical Sciences",
    "Medical Sciences",
    "Public Health",
    "Healthcare Management",
    "Life Sciences",
    "Allied Health Sciences",
  ];

  const destinations = [
    {
      code: "UK",
      title: "United Kingdom",
      description:
        "Guidance for students exploring medical and healthcare education opportunities in the UK.",
      points: [
        "University selection",
        "UCAS guidance",
        "UCAT guidance",
        "Personal statement support",
        "Interview preparation",
      ],
    },
    {
      code: "US",
      title: "United States",
      description:
        "Support for students considering medical education pathways in the United States.",
      points: [
        "University pathway guidance",
        "Academic planning",
        "Application strategy",
        "Admission requirements",
        "Profile development",
      ],
    },
    {
      code: "INT",
      title: "Rest of the World",
      description:
        "Explore medical education opportunities across other international destinations.",
      points: [
        "University comparison",
        "Entry requirements",
        "Application planning",
        "Documentation support",
        "Visa guidance",
      ],
    },
  ];

  const studentSupport = [
    {
      title: "Academic Requirements",
      description:
        "Understand academic requirements and eligibility criteria for your selected medical programs.",
    },
    {
      title: "English Language",
      description:
        "Guidance regarding IELTS and other English-language requirements where applicable.",
    },
    {
      title: "Entrance Tests",
      description:
        "Plan relevant entrance examinations and understand how they fit into the application timeline.",
    },
    {
      title: "Application Documents",
      description:
        "Organise academic certificates, identification documents, references and other supporting materials.",
    },
    {
      title: "Visa Guidance",
      description:
        "Understand the documentation and next steps required after securing admission.",
    },
    {
      title: "Pre-Departure",
      description:
        "Prepare for your transition to studying medicine and healthcare abroad.",
    },
  ];

  return (
    <div className="medical-page">

      {/* ================= HEADER ================= */}

      <header className="medical-header">
        <div className="medical-container medical-nav">

          <button
            className="medical-logo"
            onClick={() => navigate("/")}
            aria-label="EduTechEX Home"
          >
            <img
              src={logo}
              alt="EduTechEX"
            />
          </button>

          <nav className="medical-nav-links">
            <a href="#journey">
              Application Journey
            </a>

            <a href="#services">
              Services
            </a>

            <a href="#programs">
              Medical Programs
            </a>

            <a href="#destinations">
              Destinations
            </a>

            <button
              className="medical-nav-cta"
              onClick={openWhatsApp}
            >
              Book a Counsellor
            </button>
          </nav>

          <button
            className="medical-menu-button"
            aria-label="Open menu"
            onClick={() => {
              const menu =
                document.querySelector(".medical-mobile-menu");

              menu.classList.toggle(
                "medical-mobile-open"
              );
            }}
          >
            <span></span>
            <span></span>
            <span></span>
          </button>

        </div>

        <div className="medical-mobile-menu">

          <a href="#journey">
            Application Journey
          </a>

          <a href="#services">
            Services
          </a>

          <a href="#programs">
            Medical Programs
          </a>

          <a href="#destinations">
            Destinations
          </a>

          <button onClick={openWhatsApp}>
            Book a Counsellor
          </button>

        </div>
      </header>


      {/* ================= HERO ================= */}

      <section className="medical-hero">

        <div className="medical-container medical-hero-grid">

          <div className="medical-hero-content">

            <span className="medical-eyebrow">
              Medical Admissions
            </span>

            <h1>
              Build your future
              <em> in medicine.</em>
            </h1>

            <p className="medical-hero-description">
              Comprehensive guidance for students applying
              to medical and healthcare programs in the UK,
              US and around the world — from university
              selection and application planning to
              interviews, offers and visa support.
            </p>

            <div className="medical-hero-actions">

              <a
                href="#services"
                className="medical-btn medical-btn-primary"
              >
                Explore Medical Admissions
                <span>→</span>
              </a>

              <button
                className="medical-btn medical-btn-outline"
                onClick={openWhatsApp}
              >
                Talk to a Counsellor
              </button>

            </div>

            <div className="medical-hero-stat">

              <strong>
                One application journey. Complete support.
              </strong>

              <span>
                From choosing the right medical program to
                preparing for admission, interviews and
                studying abroad.
              </span>

            </div>

          </div>


          <div className="medical-hero-side">
            <img src={medicalHeroImage} alt="Medical Admissions" className="medical-hero-image" loading="eager" fetchPriority="high" decoding="async" />

            <span className="medical-eyebrow">
              Medical Application Journey
            </span>

            <ul>

              {applicationJourney.map((stage) => (
                <li key={stage.number}>

                  <span>
                    {stage.title}
                  </span>

                  <span>
                    {stage.number}
                  </span>

                </li>
              ))}

            </ul>

          </div>

        </div>

      </section>


      {/* ================= JOURNEY ================= */}

      <section
        className="medical-journey"
        id="journey"
      >

        <div className="medical-container">

          <div
            className="medical-section-heading"
            data-reveal
          >

            <span className="medical-eyebrow">
              The Medical Application Journey
            </span>

            <h2>
              From your first consultation
              to your medical school offer.
            </h2>

            <p>
              A structured application journey designed
              around your academic profile, medical career
              goals and preferred study destination.
            </p>

          </div>


          <div
            className="medical-journey-grid"
            data-reveal
          >

            {applicationJourney.map((stage) => (

              <div
                className="medical-stage"
                key={stage.number}
              >

                <div className="medical-stage-number">
                  {stage.number}
                </div>

                <div className="medical-stage-line"></div>

                <h3>
                  {stage.title}
                </h3>

                <p>
                  {stage.description}
                </p>

              </div>

            ))}

          </div>

        </div>

      </section>


      {/* ================= SERVICES ================= */}

      <section
        className="medical-section"
        id="services"
      >

        <div className="medical-container">

          <div
            className="medical-section-heading"
            data-reveal
          >

            <span className="medical-eyebrow">
              What We Provide
            </span>

            <h2>
              Medical Admissions Services
            </h2>

            <p>
              End-to-end guidance covering university
              selection, applications, entrance examinations,
              interviews, offers and visa preparation.
            </p>

          </div>


          <div
            className="medical-services-grid"
            data-reveal
          >

            {services.map((service) => (

              <article
                className="medical-service-card"
                key={service.number}
              >

                <div className="medical-service-top">

                  <span className="medical-service-number">
                    {service.number}
                  </span>

                  <span className="medical-service-arrow">
                    →
                  </span>

                </div>

                <h3>
                  {service.title}
                </h3>

                <p>
                  {service.description}
                </p>

                <ul>

                  {service.items.map(
                    (item, index) => (
                      <li key={index}>
                        {item}
                      </li>
                    )
                  )}

                </ul>

              </article>

            ))}

          </div>

        </div>

      </section>


      {/* ================= PROGRAMS ================= */}

      <section
        className="medical-programs"
        id="programs"
      >

        <div className="medical-container">

          <div
            className="medical-section-heading medical-dark-heading"
            data-reveal
          >

            <span className="medical-eyebrow">
              Explore Medical Education
            </span>

            <h2>
              Medical & Healthcare Programs
            </h2>

            <p>
              Explore different medical and healthcare
              disciplines and receive guidance based on
              your interests and career goals.
            </p>

          </div>


          <div
            className="medical-program-grid"
            data-reveal
          >

            {medicalPrograms.map(
              (program, index) => (

                <div
                  className="medical-program-card"
                  key={program}
                >

                  <span>
                    {String(index + 1).padStart(
                      2,
                      "0"
                    )}
                  </span>

                  <h3>
                    {program}
                  </h3>

                  <strong>
                    →
                  </strong>

                </div>

              )
            )}

          </div>

        </div>

      </section>


      {/* ================= DESTINATIONS ================= */}

      <section
        className="medical-destinations"
        id="destinations"
      >

        <div className="medical-container">

          <div
            className="medical-section-heading"
            data-reveal
          >

            <span className="medical-eyebrow">
              Study Around the World
            </span>

            <h2>
              Medical Education Destinations
            </h2>

            <p>
              Explore medical education opportunities across
              the UK, US and other international destinations.
            </p>

          </div>


          <div
            className="medical-destination-grid"
            data-reveal
          >

            {destinations.map(
              (destination) => (

                <article
                  className="medical-destination-card"
                  key={destination.code}
                >

                  <div className="medical-destination-code">
                    {destination.code}
                  </div>

                  <h3>
                    {destination.title}
                  </h3>

                  <p>
                    {destination.description}
                  </p>

                  <ul>

                    {destination.points.map(
                      (point, index) => (
                        <li key={index}>
                          {point}
                        </li>
                      )
                    )}

                  </ul>

                </article>

              )
            )}

          </div>

        </div>

      </section>


      {/* ================= STUDENT SUPPORT ================= */}

      <section className="medical-support">

        <div className="medical-container medical-support-grid">

          <div
            className="medical-support-content"
            data-reveal
          >

            <span className="medical-eyebrow">
              International Students
            </span>

            <h2>
              Support beyond the application.
            </h2>

            <p>
              Applying to medical school abroad involves
              more than submitting an application. Our
              counselling support helps students understand
              requirements, documentation and the steps
              involved in preparing for their international
              education journey.
            </p>

            <button
              className="medical-btn medical-btn-dark"
              onClick={openWhatsApp}
            >
              Start Your Application
              <span>→</span>
            </button>

          </div>


          <div
            className="medical-support-list"
            data-reveal
          >

            {studentSupport.map(
              (item, index) => (

                <div
                  className="medical-support-item"
                  key={index}
                >

                  <span className="medical-check">
                    ✓
                  </span>

                  <div>

                    <h3>
                      {item.title}
                    </h3>

                    <p>
                      {item.description}
                    </p>

                  </div>

                </div>

              )
            )}

          </div>

        </div>

      </section>


      {/* ================= CTA ================= */}

      <section className="medical-cta">

        <div className="medical-container">

          <span className="medical-eyebrow">
            Begin Your Medical Journey
          </span>

          <h2>
            Your medical career starts
            with the right application.
          </h2>

          <p>
            Speak with the EduTechEX counselling team to
            understand your medical education options,
            application requirements and next steps.
          </p>

          <button
            className="medical-btn medical-btn-white"
            onClick={openWhatsApp}
          >
            Book a Counselling Call
            <span>→</span>
          </button>


          <div className="medical-contact-row">

            <a href="tel:+917330611818">
              +91 73306 11818
            </a>

            <a href="mailto:adityacv@edutechex.com">
              adityacv@edutechex.com
            </a>

            <span>
              www.edutechex.com
            </span>

          </div>

        </div>

      </section>


      

    </div>
  );
};

export default Medical;
