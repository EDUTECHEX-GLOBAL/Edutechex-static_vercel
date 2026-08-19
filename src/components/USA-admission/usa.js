import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./usa.css";
import logo from "../../assets/Edutech-logo.svg";
import usStudentImg from "../../assets/buycourses/usa-admission.png";

/* =========================================================
   ICONS — small inline SVG set, no external icon library
   ========================================================= */

const ICON_PATHS = {
    list: (
        <>
            <line x1="8" y1="6" x2="21" y2="6" />
            <line x1="8" y1="12" x2="21" y2="12" />
            <line x1="8" y1="18" x2="21" y2="18" />
            <line x1="3" y1="6" x2="3.01" y2="6" />
            <line x1="3" y1="12" x2="3.01" y2="12" />
            <line x1="3" y1="18" x2="3.01" y2="18" />
        </>
    ),
    clipboard: (
        <>
            <rect x="6" y="4" width="12" height="17" rx="2" />
            <rect x="9" y="2" width="6" height="4" rx="1" />
            <line x1="9" y1="11" x2="15" y2="11" />
            <line x1="9" y1="15" x2="15" y2="15" />
        </>
    ),
    edit: (
        <>
            <path d="M12 20h9" />
            <path d="M16.5 3.5a2.12 2.12 0 0 1 3 3L7 19l-4 1 1-4Z" />
        </>
    ),
    users: (
        <>
            <circle cx="9" cy="8" r="3.2" />
            <path d="M3.5 20c0-3.3 2.5-5.5 5.5-5.5s5.5 2.2 5.5 5.5" />
            <circle cx="17" cy="9" r="2.6" />
            <path d="M15.5 14.2c2.2.3 3.9 2.1 3.9 4.8" />
        </>
    ),
    userCheck: (
        <>
            <circle cx="9" cy="8" r="3.5" />
            <path d="M3 20c0-3.3 2.7-6 6-6s6 2.7 6 6" />
            <path d="M16 11l1.6 1.6L21 9" />
        </>
    ),
    calendar: (
        <>
            <rect x="3.5" y="5" width="17" height="15" rx="2" />
            <line x1="3.5" y1="10" x2="20.5" y2="10" />
            <line x1="8" y1="3" x2="8" y2="7" />
            <line x1="16" y1="3" x2="16" y2="7" />
        </>
    ),
    fileCheck: (
        <>
            <path d="M14 3H7a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V8Z" />
            <path d="M14 3v5h5" />
            <path d="M9 15l2 2 4-4" />
        </>
    ),
    home: (
        <>
            <path d="M3.5 11 12 4l8.5 7" />
            <path d="M6 10v9.5a1 1 0 0 0 1 1h10a1 1 0 0 0 1-1V10" />
        </>
    ),
    plane: (
        <>
            <path d="M3 12 21 4l-6 17-3-8-8-3Z" />
            <line x1="21" y1="4" x2="9" y2="13" />
        </>
    ),
    graduationCap: (
        <>
            <path d="M2 9l10-5 10 5-10 5-10-5Z" />
            <path d="M6 11v5c0 1.5 2.7 3 6 3s6-1.5 6-3v-5" />
            <path d="M22 9v6" />
        </>
    ),
    bookOpen: (
        <>
            <path d="M12 6.5C10.3 5.2 7.8 4.5 4.5 4.5v13c3.3 0 5.8.7 7.5 2 1.7-1.3 4.2-2 7.5-2v-13c-3.3 0-5.8.7-7.5 2Z" />
            <line x1="12" y1="6.5" x2="12" y2="19.5" />
        </>
    ),
    globe: (
        <>
            <circle cx="12" cy="12" r="9" />
            <line x1="3" y1="12" x2="21" y2="12" />
            <path d="M12 3c2.5 2.5 3.8 5.8 3.8 9s-1.3 6.5-3.8 9c-2.5-2.5-3.8-5.8-3.8-9s1.3-6.5 3.8-9Z" />
        </>
    ),
    gift: (
        <>
            <rect x="3.5" y="9" width="17" height="11" rx="1" />
            <path d="M3.5 13h17" />
            <path d="M12 9v11" />
            <path d="M8 9c-1.7 0-3-1.1-3-2.5S6.3 4 8 4c1.9 0 4 2.3 4 5 0-2.7 2.1-5 4-5 1.7 0 3 1.1 3 2.5S17.7 9 16 9" />
        </>
    ),
    monitor: (
        <>
            <rect x="3" y="4" width="18" height="12" rx="1.5" />
            <line x1="8" y1="20" x2="16" y2="20" />
            <line x1="12" y1="16" x2="12" y2="20" />
        </>
    ),
    barChart: (
        <>
            <line x1="5" y1="20" x2="5" y2="10" />
            <line x1="12" y1="20" x2="12" y2="4" />
            <line x1="19" y1="20" x2="19" y2="14" />
        </>
    ),
    wrench: (
        <path d="M14.7 6.3a4 4 0 0 0-5.4 5.4L3 18l3 3 6.3-6.3a4 4 0 0 0 5.4-5.4l-2.8 2.8-2-2 2.8-2.8Z" />
    ),
    pulse: (
        <>
            <circle cx="12" cy="12" r="9" />
            <path d="M7 12h2l1.5 4L13 8l1.5 4H17" />
        </>
    ),
    lightbulb: (
        <>
            <path d="M9 18h6" />
            <path d="M10 21h4" />
            <path d="M12 3a6 6 0 0 0-3.6 10.8c.6.5 1.1 1.2 1.1 2.2h5c0-1 .5-1.7 1.1-2.2A6 6 0 0 0 12 3Z" />
        </>
    ),
    database: (
        <>
            <ellipse cx="12" cy="5" rx="8" ry="3" />
            <path d="M4 5v14c0 1.7 3.6 3 8 3s8-1.3 8-3V5" />
            <path d="M4 12c0 1.7 3.6 3 8 3s8-1.3 8-3" />
        </>
    ),
    book: (
        <>
            <path d="M4 4.5A2.5 2.5 0 0 1 6.5 2H20v17H6.5A2.5 2.5 0 0 0 4 21.5v-17Z" />
            <path d="M4 19a2.5 2.5 0 0 1 2.5-2.5H20" />
        </>
    ),
    landmark: (
        <>
            <line x1="4" y1="21" x2="20" y2="21" />
            <line x1="5" y1="9" x2="19" y2="9" />
            <path d="M4.5 9 12 4l7.5 5" />
            <line x1="6" y1="9" x2="6" y2="19" />
            <line x1="10" y1="9" x2="10" y2="19" />
            <line x1="14" y1="9" x2="14" y2="19" />
            <line x1="18" y1="9" x2="18" y2="19" />
        </>
    ),
    calculator: (
        <>
            <rect x="5" y="2.5" width="14" height="19" rx="2" />
            <line x1="8" y1="6.5" x2="16" y2="6.5" />
            <line x1="8" y1="11" x2="8.01" y2="11" />
            <line x1="12" y1="11" x2="12.01" y2="11" />
            <line x1="16" y1="11" x2="16.01" y2="11" />
            <line x1="8" y1="14.5" x2="8.01" y2="14.5" />
            <line x1="12" y1="14.5" x2="12.01" y2="14.5" />
            <line x1="16" y1="14.5" x2="16.01" y2="14.5" />
            <line x1="8" y1="18" x2="16" y2="18" />
        </>
    ),
    compass: (
        <>
            <circle cx="12" cy="12" r="9" />
            <path d="M15.5 8.5 13 13l-4.5 2.5L11 11l4.5-2.5Z" />
        </>
    ),
    megaphone: (
        <>
            <path d="M3 10v4a1 1 0 0 0 1 1h2l7 4V5L6 9H4a1 1 0 0 0-1 1Z" />
            <path d="M18 9a4 4 0 0 1 0 6" />
        </>
    ),
    leaf: (
        <>
            <path d="M20 4C10 4 4 10 4 20c10 0 16-6 16-16Z" />
            <path d="M4 20c4-4 8-8 16-16" />
        </>
    ),
    dollar: (
        <>
            <circle cx="12" cy="12" r="9" />
            <path d="M12 6v12M15 9.5c0-1.4-1.3-2.5-3-2.5s-3 1-3 2.3c0 3 6 1.5 6 4.5 0 1.4-1.3 2.5-3 2.5s-3-1-3-2.3" />
        </>
    ),
    map: (
        <>
            <path d="M3 6l6-2 6 2 6-2v14l-6 2-6-2-6 2Z" />
            <line x1="9" y1="4" x2="9" y2="18" />
            <line x1="15" y1="6" x2="15" y2="20" />
        </>
    ),
};

const Icon = ({ name }) => (
    <svg
        className="usa-icon"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinecap="round"
        strokeLinejoin="round"
    >
        {ICON_PATHS[name]}
    </svg>
);

/* =========================================================
   PAGE COMPONENT
   ========================================================= */

const USUndergraduate = () => {
    const navigate = useNavigate();
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    useEffect(() => {
        const elements = document.querySelectorAll("[data-reveal]");

        if ("IntersectionObserver" in window) {
            const observer = new IntersectionObserver(
                (entries) => {
                    entries.forEach((entry) => {
                        if (entry.isIntersecting) {
                            entry.target.classList.add("usa-in");
                            observer.unobserve(entry.target);
                        }
                    });
                },
                { threshold: 0.12 }
            );

            elements.forEach((element) => observer.observe(element));

            return () => observer.disconnect();
        }

        elements.forEach((element) => element.classList.add("usa-in"));
    }, []);

    const whatsappNumber = "917330611818";

    const openWhatsApp = () => {
        const message = encodeURIComponent(
            "Hi EduTechEX, I am interested in US Undergraduate Admissions. I would like to book a counselling session."
        );

        window.open(
            `https://api.whatsapp.com/send?phone=${whatsappNumber}&text=${message}`,
            "_blank",
            "noopener,noreferrer"
        );
    };

    const journey = [
        {
            number: "01",
            icon: "list",
            title: "College List",
            description: "Profile assessment, reach/target/safety balance.",
        },
        {
            number: "02",
            icon: "clipboard",
            title: "Common App Setup",
            description: "Account, activities list, application strategy.",
        },
        {
            number: "03",
            icon: "edit",
            title: "Essays",
            description: "Personal essay + school-specific supplements.",
        },
        {
            number: "04",
            icon: "users",
            title: "Recommendations",
            description: "Guidance on requirements & timing.",
        },
        {
            number: "05",
            icon: "userCheck",
            title: "Testing",
            description: "SAT/ACT strategy, TOEFL/IELTS.",
        },
        {
            number: "06",
            icon: "fileCheck",
            title: "ED / EA / RD",
            description: "Early vs regular decision strategy.",
        },
        {
            number: "07",
            icon: "home",
            title: "Decisions",
            description: "Comparing offers & financial aid.",
        },
        {
            number: "08",
            icon: "plane",
            title: "Visa & Departure",
            description: "F-1 visa, I-20, pre-departure.",
        },
    ];

    const services = [
        {
            number: "01",
            icon: "list",
            title: "College List Building",
            description:
                "Identify the right mix of reach, target and safety schools based on academic profile and goals.",
            items: [
                "Academic & extracurricular profile assessment",
                "Reach, target & safety balancing",
                "Fit assessment beyond rankings",
                "Major & program comparison",
            ],
        },
        {
            number: "02",
            icon: "clipboard",
            title: "Common App Support",
            description:
                "Structured, step-by-step support through the entire Common App process.",
            items: [
                "Common App account setup",
                "Activities list & honors section",
                "Application strategy across schools",
                "Submission & deadline tracking",
            ],
        },
        {
            number: "03",
            icon: "edit",
            title: "Essays & Supplements",
            description:
                "Help students find and structure an authentic voice across every required essay.",
            items: [
                "Common App personal essay guidance",
                "School-specific supplemental essays",
                "Structure & voice review",
                "Final proofread before submission",
            ],
        },
        {
            number: "04",
            icon: "users",
            title: "Recommendation Guidance",
            description:
                "Guidance for students and schools on academic references and supporting documents.",
            items: [
                "Requirement guidance per school",
                "Support coordinating with teachers/counselors",
                "Timing & submission tracking",
                "Application document checklist",
            ],
        },
        {
            number: "05",
            icon: "graduationCap",
            title: "US Admissions Counselling",
            description:
                "One-to-one counselling designed around the student's academic and career goals.",
            items: [
                "One-to-one counselling",
                "Extracurricular narrative building",
                "Major & career pathway guidance",
                "Application strategy",
            ],
        },
        {
            number: "06",
            icon: "bookOpen",
            title: "Standardized Testing",
            description:
                "Preparation guidance for admissions tests and English-language requirements.",
            items: [
                "SAT / ACT strategy",
                "Test-optional decision guidance",
                "TOEFL / IELTS preparation",
                "Score reporting guidance",
            ],
        },
        {
            number: "07",
            icon: "calendar",
            title: "ED / EA Strategy",
            description:
                "Guidance on early application routes and how they affect a student's overall strategy.",
            items: [
                "Early Decision vs Early Action guidance",
                "Binding vs non-binding trade-offs",
                "Application timeline planning",
                "Restrictive Early Action guidance",
            ],
        },
        {
            number: "08",
            icon: "globe",
            title: "Support for Indian Students",
            description:
                "Dedicated guidance for students applying to US universities from India.",
            items: [
                "Guidance for Indian applicants specifically",
                "Credential & grade equivalency guidance",
                "English-proficiency requirement guidance",
                "F-1 visa advisory services",
            ],
        },
        {
            number: "09",
            icon: "gift",
            title: "Financial Aid & Scholarships",
            description:
                "Guidance on funding options and how to compare offers across schools.",
            items: [
                "CSS Profile guidance",
                "Need-aware vs need-blind guidance",
                "Merit scholarship guidance",
                "Cost comparison across offers",
            ],
        },
    ];

    const subjects = [
        { title: "Computer Science", icon: "monitor" },
        { title: "Business & Economics", icon: "barChart" },
        { title: "Engineering", icon: "wrench" },
        { title: "Pre-Med & Biological Sciences", icon: "pulse" },
        { title: "Psychology", icon: "lightbulb" },
        { title: "Data Science", icon: "database" },
        { title: "Liberal Arts", icon: "book" },
        { title: "Political Science & IR", icon: "landmark" },
        { title: "Mathematics", icon: "calculator" },
        { title: "Design & Architecture", icon: "compass" },
        { title: "Communications & Media", icon: "megaphone" },
        { title: "Environmental Science", icon: "leaf" },
    ];

    const checklist = [
        {
            icon: "fileCheck",
            title: "Credential equivalency",
            description:
                "Grade & curriculum equivalency guidance mapped to US admissions expectations.",
        },
        {
            icon: "globe",
            title: "English proficiency",
            description:
                "TOEFL / IELTS preparation and requirement guidance for your target schools.",
        },
        {
            icon: "dollar",
            title: "Cost & financial aid",
            description:
                "Tuition guidance, CSS Profile support, and merit scholarship guidance.",
        },
        {
            icon: "plane",
            title: "F-1 student visa",
            description:
                "F-1 visa guidance, I-20 documentation, and financial-document guidance.",
        },
        {
            icon: "map",
            title: "Pre-departure",
            description:
                "Practical guidance for the move — before you leave and after you land.",
        },
    ];

    return (
        <div className="usa-undergraduate-page">
            {/* ================= HEADER ================= */}

            <header className="usa-header">
                <div className="usa-container usa-nav">
                    <button
                        className="usa-logo"
                        onClick={() => navigate("/")}
                        aria-label="EduTechEX Home"
                    >
                        <img src={logo} alt="EduTechEX" style={{ height: "32px", width: "auto" }} />
                    </button>

                    <nav className="usa-nav-links">
                        <a href="#journey" className="usa-nav-active">
                            US Undergraduate
                        </a>
                        <a href="#subjects">Study Areas</a>
                        <a href="#international">International Students</a>

                        <button className="usa-nav-cta" onClick={openWhatsApp}>
                            Book a Counselling Call
                        </button>
                    </nav>

                    <button
                        className="usa-menu-button"
                        aria-label="Open menu"
                        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                    >
                        <span></span>
                        <span></span>
                        <span></span>
                    </button>
                </div>

                {mobileMenuOpen && (
                    <div className="usa-mobile-menu usa-mobile-open">
                        <a href="#journey" onClick={() => setMobileMenuOpen(false)}>US Undergraduate</a>
                        <a href="#subjects" onClick={() => setMobileMenuOpen(false)}>Study Areas</a>
                        <a href="#international" onClick={() => setMobileMenuOpen(false)}>International Students</a>
                        <button onClick={() => { openWhatsApp(); setMobileMenuOpen(false); }}>Book a Counselling Call</button>
                    </div>
                )}
            </header>

            {/* ================= HERO ================= */}

            <section className="usa-hero">
                <div className="usa-container usa-hero-grid">
                    <div className="usa-hero-content">
                        <span className="usa-eyebrow">
                            US Undergraduate Admissions · Common App
                        </span>

                        <h1>
                            Apply to the US.
                            <em> One application, done right.</em>
                        </h1>

                        <p className="usa-hero-description">
                            Guidance and application support for students applying to US
                            universities through the Common App — from building your
                            college list to submitting essays, tests, and recommendations
                            before every deadline.
                        </p>

                        <div className="usa-hero-actions">
                            <a href="#services" className="usa-btn usa-btn-primary">
                                Explore US Admissions Services
                                <span>→</span>
                            </a>

                            <button className="usa-btn usa-btn-outline" onClick={openWhatsApp}>
                                Talk to a Counsellor
                            </button>
                        </div>

                        <div className="usa-hero-stat">
                            <strong>Built around the Common App</strong>
                            <span>
                                One coordinated plan for every school on your list — this
                                page covers Common App applications to US universities only.
                            </span>
                        </div>
                    </div>

                    <div className="usa-hero-side">
                        <img
                            src={usStudentImg}
                            alt="US undergraduate student"
                            className="usa-hero-image"
                        />

                        <div className="usa-hero-floating-card">
                            <div className="usa-floating-icon">
                                <Icon name="graduationCap" />
                            </div>
                            <div className="usa-floating-text">
                                <strong>US Undergraduate</strong>
                                <span>Common App • US Universities</span>
                            </div>
                        </div>

                        <span className="usa-eyebrow usa-visually-hidden">
                            On this page
                        </span>

                        <ul className="usa-visually-hidden">
                            {journey.map((stage) => (
                                <li key={stage.number}>
                                    <span>{stage.title}</span>
                                    <span>{stage.number}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </section>

            {/* ================= JOURNEY ================= */}

            <section className="usa-journey" id="journey">
                <div className="usa-container">
                    <div className="usa-section-heading" data-reveal>
                        <span className="usa-eyebrow">The Application Journey</span>

                        <h2>Eight deadlines. One counsellor tracking every one.</h2>

                        <p>
                            This is the real sequence a Common App cycle moves through — we
                            stay with you from the first college list to your F-1 visa
                            interview.
                        </p>
                    </div>

                    <div className="usa-journey-track" data-reveal>
                        <div className="usa-journey-line"></div>

                        {journey.map((stage) => (
                            <div className="usa-stage" key={stage.number}>
                                

                                <div className="usa-stage-icon">
                                    <Icon name={stage.icon} />
                                </div>

                                <h3>{stage.title}</h3>

                                <p>{stage.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ================= SERVICES ================= */}

            <section className="usa-section" id="services">
                <div className="usa-container">
                    <div className="usa-section-heading" data-reveal>
                        <span className="usa-eyebrow">What We Provide</span>

                        <h2>US Undergraduate Admissions Services</h2>

                        <p>
                            Built entirely around the Common App cycle for US-bound
                            applicants — from your first shortlist to your visa interview.
                        </p>
                    </div>

                    <div className="usa-services-grid" data-reveal>
                        {services.map((service) => (
                            <article className="usa-service-card" key={service.number}>
                                <div className="usa-service-icon">
                                    <Icon name={service.icon} />
                                </div>

                                <h3>{service.title}</h3>

                                <p>{service.description}</p>

                                <ul>
                                    {service.items.map((item, index) => (
                                        <li key={index}>{item}</li>
                                    ))}
                                </ul>
                            </article>
                        ))}
                    </div>
                </div>
            </section>

            {/* ================= STUDY AREAS + CHECKLIST ================= */}

            <section className="usa-subjects" id="subjects">
                <div className="usa-container">
                    <div className="usa-section-heading" data-reveal>
                        <span className="usa-eyebrow">Explore by Major</span>

                        <h2>Popular US Undergraduate Study Areas</h2>

                        <p>
                            Major and program guidance is built around your interests and
                            academic profile — here's where most of our students start.
                        </p>
                    </div>

                    <div className="usa-subjects-grid" data-reveal>
                        <div className="usa-subject-cards">
                            {subjects.map((subject) => (
                                <div className="usa-subject-card" key={subject.title}>
                                    <div className="usa-subject-icon">
                                        <Icon name={subject.icon} />
                                    </div>
                                    <h3>{subject.title}</h3>
                                </div>
                            ))}
                        </div>

                        <div className="usa-checklist-card">
                            {checklist.map((item) => (
                                <div className="usa-checklist-item" key={item.title}>
                                    <div className="usa-checklist-icon">
                                        <Icon name={item.icon} />
                                    </div>

                                    <div>
                                        <h4>{item.title}</h4>
                                        <p>{item.description}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* ================= INTERNATIONAL (INDIA) ================= */}

            <section className="usa-international" id="international">
                <div className="usa-international-skyline" aria-hidden="true">
                    <svg viewBox="0 0 400 160" preserveAspectRatio="none">
                        <rect x="10" y="70" width="26" height="90" />
                        <rect x="42" y="40" width="20" height="120" />
                        <rect x="68" y="90" width="30" height="70" />
                        <rect x="104" y="20" width="18" height="140" />
                        <rect x="128" y="60" width="24" height="100" />
                        <rect x="158" y="100" width="34" height="60" />
                        <rect x="198" y="10" width="16" height="150" />
                        <rect x="220" y="55" width="22" height="105" />
                        <rect x="248" y="85" width="28" height="75" />
                        <rect x="282" y="30" width="20" height="130" />
                        <rect x="308" y="70" width="24" height="90" />
                        <rect x="338" y="45" width="18" height="115" />
                        <rect x="362" y="95" width="28" height="65" />
                    </svg>
                </div>

                
            </section>

            {/* ================= CTA ================= */}

            <section className="usa-cta">
                <div className="usa-container">
                    <span className="usa-eyebrow">Ready When You Are</span>

                    <h2>Start with a free profile assessment</h2>

                    <p>
                        Tell us your intended major and academic record — we'll build
                        your college list and map out your Common App timeline.
                    </p>

                    <button className="usa-btn usa-btn-white" onClick={openWhatsApp}>
                        Book a Counselling Call
                        <span>→</span>
                    </button>
                </div>
            </section>

            {/* ================= FOOTER ================= */}


        </div>
    );
};

export default USUndergraduate;