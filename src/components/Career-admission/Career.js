import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Career.css";
import logo from "../../assets/Edutech-logo.svg";
import careerImg from "../../assets/buycourses/career.png";
import career1Img from "../../assets/buycourses/career1.png";

/* ---------- Small inline icon set (no external deps) ---------- */
const Icon = {
    User: (p) => (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...p}>
            <path d="M20 21a8 8 0 1 0-16 0" /><circle cx="12" cy="7" r="4" />
        </svg>
    ),
    Chart: (p) => (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...p}>
            <path d="M3 3v18h18" /><path d="M18 17V9M13 17V5M8 17v-4" />
        </svg>
    ),
    Target: (p) => (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...p}>
            <circle cx="12" cy="12" r="9" /><circle cx="12" cy="12" r="5" /><circle cx="12" cy="12" r="1" />
        </svg>
    ),
    Rocket: (p) => (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...p}>
            <path d="M4.5 16.5c-1.5 1.5-2 5-2 5s3.5-.5 5-2c.8-.8.8-2.2 0-3-.8-.8-2.2-.8-3 0Z" />
            <path d="M12 15l-3-3a22 22 0 0 1 8-9c2 0 4 2 4 4a22 22 0 0 1-9 8Z" />
            <path d="M9 12c-2 0-4.5.5-5 4 3.5-.5 4-3 4-4M15 9c0 2 .5 4.5 4 5-.5-3.5-3-4-4-5Z" />
        </svg>
    ),
    Clipboard: (p) => (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...p}>
            <rect x="6" y="4" width="12" height="16" rx="2" /><path d="M9 4V3a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v1" /><path d="M9 10h6M9 14h6M9 18h3" />
        </svg>
    ),
    Cap: (p) => (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...p}>
            <path d="M2 9l10-5 10 5-10 5-10-5Z" /><path d="M6 11v5c0 1.5 3 3 6 3s6-1.5 6-3v-5" />
        </svg>
    ),
    Globe: (p) => (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...p}>
            <circle cx="12" cy="12" r="10" /><path d="M2 12h20M12 2a15 15 0 0 1 0 20 15 15 0 0 1 0-20Z" />
        </svg>
    ),
    Check: (p) => (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" {...p}>
            <path d="M20 6 9 17l-5-5" />
        </svg>
    ),
    Calendar: (p) => (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...p}>
            <rect x="3" y="4" width="18" height="18" rx="2" /><path d="M16 2v4M8 2v4M3 10h18" />
        </svg>
    ),
    Arrow: (p) => (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...p}>
            <path d="M5 12h14M13 6l6 6-6 6" />
        </svg>
    ),
    Phone: (p) => (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...p}>
            <path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3 19.5 19.5 0 0 1-6-6 19.8 19.8 0 0 1-3-8.7A2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1 1 .3 2 .7 3a2 2 0 0 1-.5 2.1L8 10a16 16 0 0 0 6 6l1.2-1.3a2 2 0 0 1 2.1-.5c1 .4 2 .6 3 .7a2 2 0 0 1 1.7 2Z" />
        </svg>
    ),
    Mail: (p) => (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...p}>
            <rect x="2" y="4" width="20" height="16" rx="2" /><path d="m22 6-10 7L2 6" />
        </svg>
    ),
    Pin: (p) => (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...p}>
            <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" /><circle cx="12" cy="10" r="3" />
        </svg>
    ),
};

const JOURNEY_STEPS = [
    { n: "01", title: "Understand Yourself", desc: "Discover your interests, strengths, and personality.", Icon: Icon.User },
    { n: "02", title: "Explore Options", desc: "Explore the right career paths and academic opportunities.", Icon: Icon.Chart },
    { n: "03", title: "Get Expert Guidance", desc: "Receive personalized advice from experienced counselors.", Icon: Icon.Target },
    { n: "04", title: "Achieve Your Goals", desc: "Make informed choices and build a successful future.", Icon: Icon.Rocket },
];

const SERVICES = [
    { title: "Career Counseling", desc: "One-on-one sessions with certified counselors to help you choose the right path.", Icon: Icon.User },
    { title: "Psychometric Assessments", desc: "Scientific tests to evaluate your aptitude, personality, and interests.", Icon: Icon.Clipboard },
    { title: "Stream & Course Guidance", desc: "Get expert guidance on choosing the right stream and courses.", Icon: Icon.Cap },
    { title: "Study Abroad Guidance", desc: "End-to-end support for admissions, visas, and university selection.", Icon: Icon.Globe },
];

const RIASEC = [
    { letter: "R", title: "Realistic", sub: "Practical Doers" },
    { letter: "I", title: "Investigative", sub: "Curious Thinkers" },
    { letter: "A", title: "Artistic", sub: "Creative Innovators" },
    { letter: "S", title: "Social", sub: "Helpers & Mentors" },
    { letter: "E", title: "Enterprising", sub: "Leaders & Influencers" },
    { letter: "C", title: "Conventional", sub: "Organized Planners" },
];

const CAREER_PATHS = ["Engineering", "Design", "Management", "Science", "Arts & Humanities", "Healthcare"];

const FOOTER_LINKS = {
    "Quick Links": ["Home", "About Us", "Services", "Assessments", "Resources", "Contact Us"],
    "Our Services": ["Career Counseling", "Psychometric Assessments", "Stream & Course Guidance", "Study Abroad Guidance", "Career Mapping"],
    Resources: ["Blog", "Career Resources", "University Guide", "Scholarships", "FAQs"],
};

const Career = () => {
    const navigate = useNavigate();
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [servicesOpen, setServicesOpen] = useState(false);

    useEffect(() => {
        const els = document.querySelectorAll("[data-reveal]");
        if ("IntersectionObserver" in window) {
            const io = new IntersectionObserver(
                (entries) => {
                    entries.forEach((e) => {
                        if (e.isIntersecting) {
                            e.target.classList.add("in");
                            io.unobserve(e.target);
                        }
                    });
                },
                { threshold: 0.15 }
            );
            els.forEach((el) => io.observe(el));
            return () => io.disconnect();
        } else {
            els.forEach((el) => el.classList.add("in"));
        }
    }, []);

    const openWhatsApp = (e) => {
        if (e) e.preventDefault();
        const whatsappNumber = "917330611818";
        const message = encodeURIComponent(
            "Hi EduTechEX, I am interested in Career Counseling. I would like to book a counselling session."
        );
        window.open(
            `https://api.whatsapp.com/send?phone=${whatsappNumber}&text=${message}`,
            "_blank",
            "noopener,noreferrer"
        );
    };

    return (
        <div className="career-page">
            <main id="top">
                {/* HERO */}
                <section className="hero">
                    <div className="wrap hero-grid">
                        <div>
                            <span className="eyebrow">Career Counseling</span>
                            <h1>
                                Discover Your <em>Path.</em>
                                <br />
                                Design Your <em>Future.</em>
                            </h1>
                            <p className="lede">
                                Personalized career counseling and scientific assessments to help students
                                make the right academic and career choices with confidence.
                            </p>
                            <div className="hero-ctas">
                                <a href="#contact" className="btn btn-primary" onClick={openWhatsApp}>
                                    Book a Session <Icon.Arrow className="btn-icon" />
                                </a>
                                <a href="#services" className="btn btn-ghost">
                                    Explore Services <Icon.Arrow className="btn-icon" />
                                </a>
                            </div>
                            <div className="trust-row">
                                <span><Icon.User className="trust-icon" /> Expert Counselors</span>
                                <span><Icon.Clipboard className="trust-icon" /> Scientific Assessments</span>
                                <span><Icon.Cap className="trust-icon" /> Proven Results</span>
                            </div>
                        </div>

                        <div className="hero-photo">
                            <div className="hero-photo-frame">
                                <img src={careerImg} alt="Career Counseling" loading="eager" fetchPriority="high" decoding="async" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
                            </div>

                        </div>
                    </div>
                </section>

                {/* JOURNEY STRIP */}
                <section className="journey">
                    <div className="wrap">
                        <div className="head" data-reveal>
                            <span className="eyebrow">Your Journey</span>
                            <h2>From Confusion to Clarity</h2>
                        </div>
                        <div className="stamps" data-reveal>
                            {JOURNEY_STEPS.map((s) => (
                                <div className="stamp" key={s.n}>
                                    <div className="dot"><s.Icon className="stamp-icon" /></div>
                                    <div className="label">{s.n}</div>
                                    <div className="title">{s.title}</div>
                                    <div className="desc">{s.desc}</div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* SERVICES */}
                <section className="section" id="services">
                    <div className="wrap">
                        <div className="section-head" data-reveal>
                            <span className="eyebrow">Our Services</span>
                            <h2>How We Help You</h2>
                        </div>

                        <div className="services-grid cols-4" data-reveal>
                            {SERVICES.map((s) => (
                                <div className="service-card" key={s.title}>
                                    <div className="service-icon"><s.Icon /></div>
                                    <h3>{s.title}</h3>
                                    <p className="desc">{s.desc}</p>
                                    <a href="#contact" className="learn-more" onClick={openWhatsApp}>
                                        Learn More <Icon.Arrow className="btn-icon" />
                                    </a>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* RIASEC */}
                <section className="section riasec-section" id="riasec">
                    <div className="wrap">
                        <div className="section-head" data-reveal>
                            <span className="eyebrow">Scientific Assessments</span>
                            <h2>RIASEC Assessment</h2>
                        </div>
                        <div className="riasec-grid" data-reveal>
                            {RIASEC.map((r) => (
                                <div className="riasec-card" key={r.letter}>
                                    <div className="riasec-circle">{r.letter}</div>
                                    <h3>{r.title}</h3>
                                    <p>{r.sub}</p>
                                </div>
                            ))}
                        </div>
                        <p className="riasec-copy" data-reveal>
                            Discover your personality type and explore careers that truly match who you are.
                        </p>
                        <div className="riasec-cta" data-reveal>
                            <a href="#contact" className="btn btn-primary" onClick={openWhatsApp}>
                                Take Assessment <Icon.Arrow className="btn-icon" />
                            </a>
                        </div>
                    </div>
                </section>

                {/* CAREER MAPPING */}
                <section className="intl" id="mapping">
                    <div className="wrap intl-grid">
                        <div data-reveal>
                            <span className="eyebrow">Career Mapping</span>
                            <h2>Find Careers That Fit You Best</h2>
                            <p className="copy">
                                Our data-driven career mapping connects your skills, interests, and goals
                                to the most suitable career paths in today&apos;s world.
                            </p>
                            <ul className="mapping-checklist">
                                <li><Icon.Check className="check-icon" /> Personalized career recommendations</li>
                                <li><Icon.Check className="check-icon" /> Industry insights and future scope</li>
                                <li><Icon.Check className="check-icon" /> Detailed roadmap to achieve your goals</li>
                            </ul>
                            <a href="#contact" className="btn btn-primary" onClick={openWhatsApp}>
                                Explore Career Paths <Icon.Arrow className="btn-icon" />
                            </a>
                        </div>

                        <div className="mapping-art" data-reveal>
                            <img src={career1Img} alt="Career Mapping" className="mapping-svg" loading="lazy" decoding="async" style={{ borderRadius: '12px' }} />
                        </div>
                    </div>
                </section>

                {/* STICKY-STYLE CTA BAND */}
                <section className="cta-band" id="contact">
                    <div className="wrap cta-band-inner">
                        <div className="cta-band-left">
                            <div className="cta-band-icon"><Icon.Cap /></div>
                            <div>
                                <h3>Ready to take the next step?</h3>
                                <p>Book a session with our expert counselors today.</p>
                            </div>
                        </div>
                        <a href="#contact" onClick={openWhatsApp} className="btn btn-white">
                            Book a Session Now <Icon.Arrow className="btn-icon" />
                        </a>
                    </div>
                </section>
            </main>

            {/* FOOTER */}

        </div>
    );
};

export default Career;
