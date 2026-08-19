import React, { useEffect } from "react";
import "./Ivy-League.css";
import logo from "../../assets/Edutech-logo.svg";

const IvyLeague = () => {
  useEffect(() => {
    const elements = document.querySelectorAll("[data-reveal]");

    if ("IntersectionObserver" in window) {
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.add("in");
              observer.unobserve(entry.target);
            }
          });
        },
        { threshold: 0.15 }
      );

      elements.forEach((element) => observer.observe(element));

      return () => observer.disconnect();
    } else {
      elements.forEach((element) => element.classList.add("in"));
    }
  }, []);

  const whatsappNumber = "917330611818";

  const bookCounsellor = () => {
    const message = encodeURIComponent(
      "Hi EduTechEX, I am interested in the Ivy League Admissions Program. I would like to book a counselling session."
    );

    window.open(
      `https://api.whatsapp.com/send?phone=${whatsappNumber}&text=${message}`,
      "_blank",
      "noopener,noreferrer"
    );
  };

  const universities = [
    "Harvard University",
    "Yale University",
    "Princeton University",
    "Columbia University",
    "University of Pennsylvania",
    "Brown University",
    "Dartmouth College",
    "Cornell University",
    "+ Other Highly Selective Global Universities",
  ];

  const programComponents = [
    {
      number: "01",
      title: "Academic Mentorship & Subject Guidance",
      description:
        "One-on-one mentorship to strengthen academic performance across school curricula — IB, IGCSE, CBSE, ISC, AP and A Levels.",
      items: [
        "Subject planning and academic strategy",
        "Advanced learning support",
        "Competitive exam planning — SAT, ACT, AP, IELTS, TOEFL",
        "Analytical and research-based thinking skills",
      ],
    },
    {
      number: "02",
      title: "Research Internships & Research Exposure",
      description:
        "Research experience is increasingly central to top-university admissions. We help students build real depth through meaningful research exposure.",
      items: [
        "Identifying research areas based on interest",
        "Connecting with professors, researchers & mentors",
        "Research internships and guided projects",
        "Research papers, presentations & portfolios",
      ],
    },
    {
      number: "03",
      title: "Summer Programs & Global Enrichment",
      description:
        "Guidance toward prestigious summer schools and enrichment opportunities that add meaningful global exposure to a student's profile.",
      items: [
        "University-based summer programs",
        "Research camps & innovation challenges",
        "Leadership & entrepreneurship programs",
        "International competitions & academic forums",
      ],
    },
    {
      number: "04",
      title: "University Admissions Guidance",
      description:
        "Complete support through the application journey once the academic and research foundation is in place.",
      items: [
        "University shortlist strategy",
        "Profile positioning & application planning",
        "SOP & personal essay guidance",
        "Resume & extracurricular portfolio development",
        "Letter of recommendation guidance",
        "Scholarship & financial aid assistance",
        "Interview preparation & application review",
      ],
    },
  ];

  return (
    <div className="ivy-page">
      {/* HEADER */}
      <header className="ivy-header">
        <div className="ivy-container ivy-nav">
          <a href="#top" className="ivy-logo">
            <img src={logo} alt="EduTechEX" />
          </a>

          <nav className="ivy-nav-links">
            <a href="#why">Why EduTechEX</a>
            <a href="#program">Program</a>
            <a href="#enrolment">Enrolment</a>
            <button onClick={bookCounsellor} className="ivy-nav-cta">
              Book a Counsellor
            </button>
          </nav>

          <button
            className="ivy-mobile-menu"
            aria-label="Open navigation"
            onClick={() => {
              const menu = document.querySelector(".ivy-mobile-links");
              menu.classList.toggle("show");
            }}
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>

        <div className="ivy-mobile-links">
          <a href="#why">Why EduTechEX</a>
          <a href="#program">Program</a>
          <a href="#enrolment">Enrolment</a>
          <button onClick={bookCounsellor}>Book a Counsellor</button>
        </div>
      </header>

      <main id="top">
        {/* HERO */}
        <section className="ivy-hero">
          <div className="ivy-container ivy-hero-grid">
            <div className="ivy-hero-content">
              <span className="ivy-eyebrow">
                Elite Mentorship Program · Grade 11
              </span>

              <h1>
                Ivy League Admissions.<br />
                <span className="highlight" style={{ display: 'inline-block', position: 'relative' }}>
                  <span className="highlight-text" style={{ color: 'var(--ivy-teal)', position: 'relative', zIndex: 2, fontStyle: 'italic' }}>Built from Grade 11.</span>
                  <span className="underline-svg-wrap" aria-hidden="true" style={{ position: 'absolute', bottom: '2px', left: '48%', transform: 'translateX(-44%)', width: '115%', height: '40px', zIndex: 1 }}>
                    <svg className="underline-svg" viewBox="0 0 366 62.1" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none" style={{ width: '100%', height: '100%', display: 'block' }}>
                      <path fill="#f5a623" d="m322.5 25.3c0 1.4 2.9 0.8 3.1 1.6 0.8 1.1-1.1 1.3-0.6 2.4 13.3 0.9 26.9 1.7 40.2 4-2.5 0.7-4.9 1.6-7.3 1.1-4-0.9-8.2-1-12.2-1.2-8.5-0.5-16.9-1.9-25.5-1.7h-3.1c2.6 0.6 4.8 0.4 5.7 2.2-7.3 0.4-14.1-0.8-21.2-1.1-0.2 0.6-0.5 1.2-0.8 1.8 21.3 0.7 42.5 1.6 64.3 4.6-4.2 1.6-7.7 1-10.8 0.8-6.8-0.5-13.5-1.3-20.3-1.9-0.9-0.1-2.3-0.1-2.9 0.2-2.2 1.6-4.3 0.6-7 0.4 1.4-1 2.5 0.5 3.9-0.8-5.6-1-10.7 0.6-15.9 0s-10.5-0.6-16.6-0.8c2 1.6 4.6 1.3 6.2 1.4 4.9 0 9.9 0.8 14.8 0.7 5.3-0.1 10.4 0.5 15.5 0.9 3.2 0.3 6.7-0.1 9.9-0.4 1.1-0.1 0.5 0.3 0.6 0.6 0.5 0.9 2.2 0.8 3.6 0.8 5.1-0.1 10.1 0.6 14.8 1.5 0.8 0.1 1.5 0 1.7 0.7 0 0.7-0.8 0.6-1.5 0.8-3.9 1.2-7.4-0.2-11.1-0.2-2 0-4.3-1.5-6 0.5-0.3 0.4-1.4 0.1-2.2-0.1-4.5-0.8-9.1-0.5-13.8-1.5-2.3-0.5-5.6 0.1-8.4 0.5-4 0.5-8-0.7-12.1-0.9-3.4-0.2-7.1-0.5-10.5-0.7-7.1-0.3-14.2-1.2-22.3-0.4 4.9 1.1 9.4 1.2 13.8 1.2 9.7 0 19.2 2.3 28.9 1.6 7.3 3.2 15.9 1.5 23.8 2.9 4.9 0.8 10.1 0.8 15.2 1.2 0.5 0 0.8 0.3 1.1 0.9-20-2.1-40.2-1.4-60.8-3 4.9 2.1 10.8-0.3 15.3 2.7-8 1.9-15.8-0.9-23.5-0.1 2.8 1.4 7.1 1.1 9.3 3.3 0.5 0.5 0.2 1.1-1.2 1.3 2.3 1 3.4-2.1 5.7-0.4 0.2-0.6 0.2-1 0.3-1.5 0.8-0.3 2 0.8 1.5 1.5-0.2 0.1 0 0.3 0 0.5 18.7 0.4 37.3 1.7 56.2 3.6-1.7 1.1-2.8 1.2-4.2 1.1-7.1-0.5-14.1-0.9-21.2-1.4-3.1-0.2-6.3-0.4-9.4-0.4-7.6-0.2-15-0.7-22.4-1-9-0.4-17.9-0.1-26.9-0.1-1.2 0-2.9-0.4-3.9 1 14.8 0.3 29.7 0.6 44.4 1.1 14.8 0.6 29.9 1.3 44.2 4.2-4.3 1-8.8 0.9-13 0.5-5.3-0.5-10.5-1.1-15.8-1.2-11.4-0.3-22.9-0.9-34.3-1.2-17.6-0.4-35.4-0.3-53.1-0.4-10.8-0.1-21.7-0.2-32.5 0-17.8 0.4-35.7 0.2-53.5 0.5-13.1 0.3-26.3 0.1-39.4 0.5-11.1 0.3-22.4 0.6-33.6 1-13.1 0.6-26.1 0.2-39.3 0.4-3.9 0.1-7.6 0.2-11.8-0.2 0.9-1.2 2.3-1.3 3.9-1.3 8.4 0.2 16.6-0.4 24.9-0.9 3.9-0.2 7.9-0.4 11.9 0.2 2.5 0.4 5.3-0.3 8-0.4 7.3-0.4 14.7-0.7 22-0.9 11.9-0.5 23.7-1.2 35.6-0.8 7.7 0.2 15.3-0.6 22.9-0.1 2.3 0.2 4.3-0.5 6.5-1h-17.6c-9.6 0-19-0.1-28.6 0-8 0.1-16.1 0.3-24 0.8-2.6 0.2-5.4 0.1-8.2 0.1-10.1 0.3-20.1 0.6-30.2 0.5-5.4 0-10.7-0.1-15.9 0.6-2.3 0.3-4-1.3-6.5-0.6 0.2 0.4 0.5 0.9 0.6 1.5-1.9 0-4 0.4-4.9-0.1-4.2-2.2-9.4-1.5-14.1-2.3-1.7-0.3-3.7-0.1-4.3-1.5-0.5-1.3 1.9-1.5 2.6-2.6-4.2-1.4-4.6-5-8.5-7.2-1.5 0.2-0.9 2.8-4.2 1.3 0.3 2.4 4.5 3.9 2.8 6.4-2.3 0.3-3.2-0.8-4.2-1.7-2.5-4-5.1-8.4-5.1-12.7 0.2-6.8 0.2-13.8 3.6-20.4 0.3-0.5 0.3-1 0.8-1.4 0.9-0.9 1.2-2.4 3.6-2.1 2.2 0.2 2.5 1.5 2.6 2.6 0.2 1.4 1.5 1.8 3.2 2.5 0.9-1.4 0.5-2.9 2.6-3.7 0.2-0.1 0.3-0.4 0.3-0.4-3.1-2.2 1.2-2.2 2.3-3.3-3.1-1.8-4-4.3-3.7-7-1.5-0.3-3.1-0.4-4.5 0-1.7 0.6-2.2-0.5-2.9-1 0.6-0.5 0.8-1.1 2.2-1.3 7.6-0.9 15.2-1.7 22.9-2 20-0.7 39.9-0.9 59.9-1 11.9-0.1 23.8 0.4 35.6 1.1 3.6 0.2 7.1-0.9 10.7-0.5 7.9 0.9 15.8 0.3 23.8 0.5 7.3 0.1 14.4-0.6 21.7-0.1 12.2 0.9 24.4 0.3 36.7 0.6 9.4 0.3 18.9 0.4 28.2 1 11.9 0.7 23.8 1.3 35.6 2 11.1 0.6 22.4 0.5 33.3 2 7.1 1 14.4 1.1 21.3 2.4 4 0.7 8.2 1.6 12.4 1.9 2.2 0.2 0.9 1 1.5 1.5-4-0.8-8-0.8-12.1-1.4-4.3-0.7-8.5-1-12.8 0.4-2.9 1-6.3 0.2-9.3-0.1-10.2-1.1-20.6-1.6-30.8-2.4-12.1-0.9-24.3-1.4-36.4-2.1-9.9-0.6-20-0.5-29.9-1-11.4-0.6-22.7 0-34.2-0.5-6.3-0.3-12.3-0.3-18.5-0.4-4.2-0.1-8.4 1.3-12.8 0.3 0.6 0.2 1.2 0.7 1.9 0.7 10.5 0 20.9 1.9 31.6 1.7 6.5-0.1 13.1 0.2 19.8 0.8 3.2 0.3 6.3-0.4 9.7-0.1 7.6 0.7 15.5 0.5 23 0.8 12.4 0.5 24.7 0.4 37.1 1.1 13.3 0.7 26.8 2.1 39.9 4.1 6.2 0.9 12.7 1.5 19.2 1.7 0.6 0 1.1 0.1 1.5 0.5-4.6 0.1-9.3 0-13.9-0.5-0.6 1.1 1.4 0.9 1.5 1.9-9.7 1.6-19.6-1.4-29.4-0.1 2.2 1.4 5.1 1 7.4 1 7.3 0.1 14.1 1.3 21.2 1.9 2.8 0.3 5.9 0 8.5 0.8 1.5 0.5 4.6-1.1 4.9 1.3 4-0.7 7.3 1.5 11.1 1.2 4-0.3 7.7 0.6 11.6 1.1 0.8 0.1 2.2 0.3 2.3 1.1 0.2 1-1.1 1.2-2 1.5-3.4 1-6.7-0.4-10.1-0.4-0.9 0-2-0.2-2.9-0.2-9.4 0.1-18.8-1.3-28.3-1.8-6-0.4-12.1-0.9-18.1-1.3 0 0.2 0 0.4-0.2 0.6 6.1 0.5 12.1 1.4 18.3 0.7z"/>
                    </svg>
                  </span>
                </span>
              </h1>

              <p className="ivy-hero-description">
                A structured, research-driven, mentorship-oriented program
                that helps ambitious Grade 11 students build the academic
                depth, research exposure and application profile that Ivy
                League and other highly selective universities look for.
              </p>

              <div className="ivy-hero-actions">
                <a href="#program" className="ivy-btn ivy-btn-primary">
                  Explore the Program
                  <span>→</span>
                </a>

                <button
                  onClick={bookCounsellor}
                  className="ivy-btn ivy-btn-outline"
                >
                  Book a Counsellor
                </button>
              </div>

              <div className="ivy-hero-stat">
                <strong>Grade 11</strong>
                Early preparation for globally competitive university
                admissions.
              </div>
            </div>

            <div className="ivy-hero-card">
              

             
            </div>
          </div>
        </section>

        {/* WHY EDUTECHEX */}
        <section className="ivy-why" id="why">
          <div className="ivy-container">
            <div className="ivy-section-heading ivy-light-heading" data-reveal>
              <span className="ivy-eyebrow">Why EduTechEX</span>

              <h2>
                Personalised mentorship for the world's most selective
                universities
              </h2>

              <p>
                Our mentorship model provides personalised support tailored to
                each student's academic interests, career aspirations and
                university goals — building a foundation that aligns with what
                highly selective institutions expect.
              </p>
            </div>

            <div className="ivy-university-grid" data-reveal>
              {universities.map((university, index) => (
                <div className="ivy-university-chip" key={index}>
                  {university}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* PROGRAM */}
        <section className="ivy-section" id="program">
          <div className="ivy-container">
            <div className="ivy-section-heading" data-reveal>
              <span className="ivy-eyebrow">Key Components</span>

              <h2>What the program covers</h2>

              <p>
                Four pillars, run together over the course of Grade 11 — each
                one building toward a genuinely competitive Ivy League
                application.
              </p>
            </div>

            <div className="ivy-components" data-reveal>
              {programComponents.map((component) => (
                <div className="ivy-component" key={component.number}>
                  <div className="ivy-component-number">
                    {component.number}
                  </div>

                  <div className="ivy-component-content">
                    <h3>{component.title}</h3>

                    <p>{component.description}</p>

                    <ul>
                      {component.items.map((item, index) => (
                        <li key={index}>{item}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* OBJECTIVE */}
        <section className="ivy-objective">
          <div className="ivy-container ivy-objective-container" data-reveal>
            <blockquote>
              "Early preparation, research-oriented learning, and personalised
              mentorship are the key pillars for successful admission into top
              global institutions."
            </blockquote>

            <p>
              Our objective is to help students transform academic potential
              into a globally competitive university profile through
              long-term mentorship, strategic planning and international
              exposure.
            </p>
          </div>
        </section>

        {/* ENROLMENT */}
        <section className="ivy-enrolment" id="enrolment">
          <div className="ivy-container">
            <div className="ivy-section-heading" data-reveal>
              <span className="ivy-eyebrow">Enrolment</span>

              <h2>Ready to start your Ivy League journey?</h2>

              <p>
                Speak with our counsellors to understand the program,
                eligibility, mentorship structure and enrolment process.
              </p>
            </div>

            <div className="ivy-enrolment-box" data-reveal>
              <div>
                <span className="ivy-enrolment-label">
                  Ivy League Admissions Program
                </span>

                <h3>Build your profile early.</h3>

                <p>
                  Get personalised guidance from Grade 11 through your
                  university application journey.
                </p>
              </div>

              <button
                onClick={bookCounsellor}
                className="ivy-btn ivy-btn-primary"
              >
                Book a Counsellor
                <span>→</span>
              </button>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="ivy-cta">
          <div className="ivy-container">
            <span className="ivy-eyebrow">Ready to Begin</span>

            <h2>Start building an Ivy League–ready profile from Grade 11</h2>

            <p>
              Connect with the EduTechEX counselling team to learn more about
              the program and the next steps.
            </p>

            <button onClick={bookCounsellor} className="ivy-btn ivy-btn-white">
              Book a Counsellor on WhatsApp
              <span>→</span>
            </button>

            <div className="ivy-contact">
              <span>+91 73306 11818</span>
              <span>adityacv@edutechex.com</span>
              <span>www.edutechex.com</span>
            </div>
          </div>
        </section>
      </main>

      {/* FOOTER */}
     
    </div>
  );
};

export default IvyLeague;