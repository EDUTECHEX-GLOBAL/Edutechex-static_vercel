import React, { useState, useEffect } from 'react';
import './home.css';
import Header from './header';
import MostPopularCourses from './most';

// ── Assets ──
import heroVideo    from './assets/home-mobile.mp4';
import iconCareer   from './assets/Career Navigation.svg';
import iconAssess   from './assets/Assessments.svg';
import iconCourses  from './assets/Online Course.svg';
import iconCerts    from './assets/Industry Certifications.svg';
import banner1      from './assets/Banner 07.jpg';
import banner2      from './assets/Banner 05.jpg';

// ── University / Partner logos ──
import cambridge  from './assets/cambridge.png';
import oxford     from './assets/oxperd.png';
import wharton    from './assets/Wharton.png';
import ethz       from './assets/ETH-z.png';
import columbia   from './assets/Columbia.png';
import caltech    from './assets/caltech.png';
import princeton  from './assets/Princeton.png';
import harvard    from './assets/Harvard_1Resize.png';
import lse        from './assets/LSE.png';
import yale       from './assets/Yale.png';
import mit        from './assets/MIT.png';
import cornell    from './assets/Cornell University.png';

// ── Logo ──
import edutechLogo from './assets/Edutech-logo.svg';

// ── Powered By logos ──
import awsLogo    from './assets/Member AWS EdStart logo.png';
import nvidiaLogo from './assets/nvidia.jpeg';

// ── Testimonial / Mentor images ──
import manasaImg  from './assets/manasa-f.jpg';
import ritvikImg  from './assets/Ritvik Reddy Gangula.jpg';
import aryanImg   from './assets/Aryan Kumar.jpeg';
import krishImg   from './assets/Krish Mehta.png';
import purvikaImg from './assets/Purvika.jpg';
import chinmayImg from './assets/Chinmay Vasisht.jpeg';
import teacher1   from './assets/teacher1.jpg';
import teacher2   from './assets/teacher2.jpeg';
import teacher3   from './assets/teacher3.jpg';
import teacher4   from './assets/teacher4.jpg';

// ── University slider groups ──
const UNI_SLIDES = [
  [cambridge, oxford, wharton, ethz],
  [columbia,  caltech, princeton, harvard],
  [lse,       yale,    mit,      cornell],
];

// ── Footer nav items ──
const FOOTER_ITEMS = [
  {
    heading: 'Company',
    items: [
      { name: 'About Us',    link: '/about' },
      { name: 'Contact Us',  link: '/contact' },
    ],
  },
  {
    heading: 'Services',
    items: [
      { name: 'SAT',               link: '/sat' },
      { name: 'APs',               link: '/aps' },
      { name: 'Ivy League Program',link: '/ivy-league' },
      { name: 'Job Mapping',       link: '/job-mapping' },
    ],
  },
  {
    heading: 'Resources',
    items: [
      { name: 'Pariksha – Assessments', link: '/assessments' },
      { name: 'Career Navigation',      link: '/career-navigation' },
      { name: 'Internships',            link: '/internships' },
      { name: 'Testimonials',           link: '/testimonials' },
    ],
  },
];

const EMPTY_FORM = { name: '', email: '', phone: '', city: '' };

const CAROUSEL_REVIEWS = [
  {
    img: aryanImg,
    quote: "I studied my Grade 11th and Grade 12th from DPS Gachibowli, Hyderabad. My passion is in computer science and always wanted to do bachelor's at the top universities in the US. EDUTECHEX Ivy League Prep helped me a lot during the preparation for SAT, APs and university application procedure. I am grateful for the excellent support from EDUTECHEX!",
    name: 'Aryan Kumar', grade: 'Grade 12th', uni: 'Cornell & Case Western',
  },
  {
    img: krishImg,
    quote: "Studying bachelor's in electrical engineering at the top universities in the US is my dream. Through EDUTECHEX Ivy league program, I was able to successfully prepare for my abroad applications and got admissions in my dream colleges along with scholarships. Thanks for the excellent training and guidance received from EDUTECHEX counsellors.",
    name: 'Krish Mehta', grade: 'Grade 12th', uni: 'Stony Brook, Texas A&M',
  },
  {
    img: purvikaImg,
    quote: "EDUTECHEX Ivy League Program has helped me immensely through the entire US application process. I thank EDUTECHEX teachers and counsellors for the outstanding support for SAT, APs and University Placements Program. Thanks, EDUTECHEX for making my dream come true.",
    name: 'Purvika Reddy', grade: 'Grade 12th', uni: 'Dennison & ASU',
  },
  {
    img: chinmayImg,
    quote: "I studied my Grade 11th and 12th at Delhi Public School, Bangalore South. I came across EDUTECHEX through a counselling session and then later got enrolled into their Ivy League Program. The entire experience was excellent, I got training for SAT, APs and was able to do Internship from Columbia University. I highly recommend EDUTECHEX programs.",
    name: 'Chinmay Vasisht', grade: 'Grade 12th', uni: 'Stony Brook University',
  },
];

const FLIP_CARDS = [
  {
    img: manasaImg, name: 'Manasa V', grade: 'Grade 12th', uni: 'UC, Los Angeles',
    quote: 'Manasa got admitted into UCLA for doing a Medical degree. In her own words, "The training I received at EduTechEx for SAT General and assistance for University placements are excellent which helped me to get into UCLA. Thank you EduTechEx.',
  },
  {
    img: ritvikImg, name: 'Ritvik Reddy', grade: 'Grade 12th', uni: 'Arizona State University, Tempe',
    quote: 'Computer Science has always been my passion. Initially my plan was to study in India, later through EDUTECHEX Ivy league program I came to know about the excellent opportunities for doing bachelors in the US. Thanks, EDUTECHEX for helping me through the entire application process.',
  },
];

const MENTORS = [
  { img: teacher2, name: 'Vijay',    subject: 'IB & IGCSE Math' },
  { img: teacher4, name: 'Sanjay',   subject: 'SAT English & UCAT' },
  { img: teacher3, name: 'Malavika', subject: 'NEET Chemistry & AP Bio' },
  { img: teacher1, name: 'Aditya',   subject: 'JEE & AP Physics' },
];

const Home = () => {
  const [videoModal,   setVideoModal]   = useState(false);
  const [counselModal, setCounselModal] = useState(false);
  const [successModal, setSuccessModal] = useState(false);
  const [form,         setForm]         = useState(EMPTY_FORM);
  const [errors,       setErrors]       = useState({});
  const [submitted,    setSubmitted]    = useState(false);
  const [carouselIdx,  setCarouselIdx]  = useState(0);
  const [uniSlide,     setUniSlide]     = useState(0);

  useEffect(() => {
    const t = setInterval(() => setCarouselIdx(i => (i + 1) % CAROUSEL_REVIEWS.length), 4000);
    return () => clearInterval(t);
  }, []);

  useEffect(() => {
    const t = setInterval(() => setUniSlide(i => (i + 1) % UNI_SLIDES.length), 3000);
    return () => clearInterval(t);
  }, []);

  const validate = () => {
    const e = {};
    if (!form.name.trim())  e.name  = 'Name is required';
    if (!form.email.trim()) e.email = 'Email is required';
    if (!form.phone.trim()) e.phone = 'Phone is required';
    if (!form.city.trim())  e.city  = 'City is required';
    return e;
  };

  const handleSubmit = () => {
    setSubmitted(true);
    const e = validate();
    setErrors(e);
    if (Object.keys(e).length === 0) {
      setCounselModal(false);
      setSuccessModal(true);
      setForm(EMPTY_FORM);
      setSubmitted(false);
      setTimeout(() => setSuccessModal(false), 3500);
    }
  };

  const handleInput = field => e => {
    setForm(f => ({ ...f, [field]: e.target.value }));
    if (submitted) setErrors(err => ({ ...err, [field]: '' }));
  };

  const prevUni = () => setUniSlide(i => (i - 1 + UNI_SLIDES.length) % UNI_SLIDES.length);
  const nextUni = () => setUniSlide(i => (i + 1) % UNI_SLIDES.length);

  const current = CAROUSEL_REVIEWS[carouselIdx];

  return (
    <div className="home-wrapper">
      <Header />

      {/* ══ HERO ══ */}
      <section className="hero">
        <div className="hero-left">
          <h1 className="hero-title">
            {/*
              ════════════════════════════════════════════════
              FIX: SVG UNDERLINE ON "fingertips"
              ────────────────────────────────────────────────
              The Angular version uses:
                <span class="position-relative" style="color:#313D9C">fingertips
                  <span class="position-absolute top-50 start-50 translate-middle ms-3 z-index-n1">
                    <svg …/>
                  </span>
                </span>

              Key insight: The SVG wrapper has z-index: -1 (z-index-n1)
              which places the shape BEHIND the text node of the parent span.

              In React we replicate this exactly:
              1. .highlight has position:relative and isolation:isolate
                 so it forms its own stacking context.
              2. The text "fingertips" is wrapped in a <span class="highlight-text">
                 with position:relative; z-index:2 — always on top.
              3. The SVG sits in a sibling <span class="underline-svg-wrap">
                 with position:absolute; z-index:1 — always below the text.
              ════════════════════════════════════════════════
            */}
            Limitless navigated learning at your{' '}
            <span className="highlight">
              {/* TEXT layer — sits ABOVE the SVG via z-index */}
              <span className="highlight-text">fingertips</span>

              {/* SVG UNDERLINE layer — sits BEHIND the text via z-index */}
              <span className="underline-svg-wrap" aria-hidden="true">
                <svg
                  className="underline-svg"
                  viewBox="0 0 366 62.1"
                  xmlns="http://www.w3.org/2000/svg"
                  preserveAspectRatio="none"
                >
                  <path
                    fill="#f5a623"
                    d="m322.5 25.3c0 1.4 2.9 0.8 3.1 1.6 0.8 1.1-1.1 1.3-0.6 2.4 13.3 0.9 26.9 1.7 40.2 4-2.5 0.7-4.9 1.6-7.3 1.1-4-0.9-8.2-1-12.2-1.2-8.5-0.5-16.9-1.9-25.5-1.7h-3.1c2.6 0.6 4.8 0.4 5.7 2.2-7.3 0.4-14.1-0.8-21.2-1.1-0.2 0.6-0.5 1.2-0.8 1.8 21.3 0.7 42.5 1.6 64.3 4.6-4.2 1.6-7.7 1-10.8 0.8-6.8-0.5-13.5-1.3-20.3-1.9-0.9-0.1-2.3-0.1-2.9 0.2-2.2 1.6-4.3 0.6-7 0.4 1.4-1 2.5 0.5 3.9-0.8-5.6-1-10.7 0.6-15.9 0s-10.5-0.6-16.6-0.8c2 1.6 4.6 1.3 6.2 1.4 4.9 0 9.9 0.8 14.8 0.7 5.3-0.1 10.4 0.5 15.5 0.9 3.2 0.3 6.7-0.1 9.9-0.4 1.1-0.1 0.5 0.3 0.6 0.6 0.5 0.9 2.2 0.8 3.6 0.8 5.1-0.1 10.1 0.6 14.8 1.5 0.8 0.1 1.5 0 1.7 0.7 0 0.7-0.8 0.6-1.5 0.8-3.9 1.2-7.4-0.2-11.1-0.2-2 0-4.3-1.5-6 0.5-0.3 0.4-1.4 0.1-2.2-0.1-4.5-0.8-9.1-0.5-13.8-1.5-2.3-0.5-5.6 0.1-8.4 0.5-4 0.5-8-0.7-12.1-0.9-3.4-0.2-7.1-0.5-10.5-0.7-7.1-0.3-14.2-1.2-22.3-0.4 4.9 1.1 9.4 1.2 13.8 1.2 9.7 0 19.2 2.3 28.9 1.6 7.3 3.2 15.9 1.5 23.8 2.9 4.9 0.8 10.1 0.8 15.2 1.2 0.5 0 0.8 0.3 1.1 0.9-20-2.1-40.2-1.4-60.8-3 4.9 2.1 10.8-0.3 15.3 2.7-8 1.9-15.8-0.9-23.5-0.1 2.8 1.4 7.1 1.1 9.3 3.3 0.5 0.5 0.2 1.1-1.2 1.3 2.3 1 3.4-2.1 5.7-0.4 0.2-0.6 0.2-1 0.3-1.5 0.8-0.3 2 0.8 1.5 1.5-0.2 0.1 0 0.3 0 0.5 18.7 0.4 37.3 1.7 56.2 3.6-1.7 1.1-2.8 1.2-4.2 1.1-7.1-0.5-14.1-0.9-21.2-1.4-3.1-0.2-6.3-0.4-9.4-0.4-7.6-0.2-15-0.7-22.4-1-9-0.4-17.9-0.1-26.9-0.1-1.2 0-2.9-0.4-3.9 1 14.8 0.3 29.7 0.6 44.4 1.1 14.8 0.6 29.9 1.3 44.2 4.2-4.3 1-8.8 0.9-13 0.5-5.3-0.5-10.5-1.1-15.8-1.2-11.4-0.3-22.9-0.9-34.3-1.2-17.6-0.4-35.4-0.3-53.1-0.4-10.8-0.1-21.7-0.2-32.5 0-17.8 0.4-35.7 0.2-53.5 0.5-13.1 0.3-26.3 0.1-39.4 0.5-11.1 0.3-22.4 0.6-33.6 1-13.1 0.6-26.1 0.2-39.3 0.4-3.9 0.1-7.6 0.2-11.8-0.2 0.9-1.2 2.3-1.3 3.9-1.3 8.4 0.2 16.6-0.4 24.9-0.9 3.9-0.2 7.9-0.4 11.9 0.2 2.5 0.4 5.3-0.3 8-0.4 7.3-0.4 14.7-0.7 22-0.9 11.9-0.5 23.7-1.2 35.6-0.8 7.7 0.2 15.3-0.6 22.9-0.1 2.3 0.2 4.3-0.5 6.5-1h-17.6c-9.6 0-19-0.1-28.6 0-8 0.1-16.1 0.3-24 0.8-2.6 0.2-5.4 0.1-8.2 0.1-10.1 0.3-20.1 0.6-30.2 0.5-5.4 0-10.7-0.1-15.9 0.6-2.3 0.3-4-1.3-6.5-0.6 0.2 0.4 0.5 0.9 0.6 1.5-1.9 0-4 0.4-4.9-0.1-4.2-2.2-9.4-1.5-14.1-2.3-1.7-0.3-3.7-0.1-4.3-1.5-0.5-1.3 1.9-1.5 2.6-2.6-4.2-1.4-4.6-5-8.5-7.2-1.5 0.2-0.9 2.8-4.2 1.3 0.3 2.4 4.5 3.9 2.8 6.4-2.3 0.3-3.2-0.8-4.2-1.7-2.5-4-5.1-8.4-5.1-12.7 0.2-6.8 0.2-13.8 3.6-20.4 0.3-0.5 0.3-1 0.8-1.4 0.9-0.9 1.2-2.4 3.6-2.1 2.2 0.2 2.5 1.5 2.6 2.6 0.2 1.4 1.5 1.8 3.2 2.5 0.9-1.4 0.5-2.9 2.6-3.7 0.2-0.1 0.3-0.4 0.3-0.4-3.1-2.2 1.2-2.2 2.3-3.3-3.1-1.8-4-4.3-3.7-7-1.5-0.3-3.1-0.4-4.5 0-1.7 0.6-2.2-0.5-2.9-1 0.6-0.5 0.8-1.1 2.2-1.3 7.6-0.9 15.2-1.7 22.9-2 20-0.7 39.9-0.9 59.9-1 11.9-0.1 23.8 0.4 35.6 1.1 3.6 0.2 7.1-0.9 10.7-0.5 7.9 0.9 15.8 0.3 23.8 0.5 7.3 0.1 14.4-0.6 21.7-0.1 12.2 0.9 24.4 0.3 36.7 0.6 9.4 0.3 18.9 0.4 28.2 1 11.9 0.7 23.8 1.3 35.6 2 11.1 0.6 22.4 0.5 33.3 2 7.1 1 14.4 1.1 21.3 2.4 4 0.7 8.2 1.6 12.4 1.9 2.2 0.2 0.9 1 1.5 1.5-4-0.8-8-0.8-12.1-1.4-4.3-0.7-8.5-1-12.8 0.4-2.9 1-6.3 0.2-9.3-0.1-10.2-1.1-20.6-1.6-30.8-2.4-12.1-0.9-24.3-1.4-36.4-2.1-9.9-0.6-20-0.5-29.9-1-11.4-0.6-22.7 0-34.2-0.5-6.3-0.3-12.3-0.3-18.5-0.4-4.2-0.1-8.4 1.3-12.8 0.3 0.6 0.2 1.2 0.7 1.9 0.7 10.5 0 20.9 1.9 31.6 1.7 6.5-0.1 13.1 0.2 19.8 0.8 3.2 0.3 6.3-0.4 9.7-0.1 7.6 0.7 15.5 0.5 23 0.8 12.4 0.5 24.7 0.4 37.1 1.1 13.3 0.7 26.8 2.1 39.9 4.1 6.2 0.9 12.7 1.5 19.2 1.7 0.6 0 1.1 0.1 1.5 0.5-4.6 0.1-9.3 0-13.9-0.5-0.6 1.1 1.4 0.9 1.5 1.9-9.7 1.6-19.6-1.4-29.4-0.1 2.2 1.4 5.1 1 7.4 1 7.3 0.1 14.1 1.3 21.2 1.9 2.8 0.3 5.9 0 8.5 0.8 1.5 0.5 4.6-1.1 4.9 1.3 4-0.7 7.3 1.5 11.1 1.2 4-0.3 7.7 0.6 11.6 1.1 0.8 0.1 2.2 0.3 2.3 1.1 0.2 1-1.1 1.2-2 1.5-3.4 1-6.7-0.4-10.1-0.4-0.9 0-2-0.2-2.9-0.2-9.4 0.1-18.8-1.3-28.3-1.8-6-0.4-12.1-0.9-18.1-1.3 0 0.2 0 0.4-0.2 0.6 6.1 0.5 12.1 1.4 18.3 0.7z"
                  />
                </svg>
              </span>
            </span>
          </h1>

          <p className="hero-desc">
            Unlock your passion and get it mapped to 10K+ courses &amp; 5K+ global
            universities and companies through scientific methodologies.
          </p>

          <div className="hero-tags">
            {['Passion','Education','Careers','Innovation'].map(tag => (
              <span className="hero-tag" key={tag}>
                <svg className="check-icon" viewBox="0 0 24 24">
                  <circle cx="12" cy="12" r="12" fill="#2dd4bf"/>
                  <path d="M7 12l4 4 6-7" stroke="#fff" strokeWidth="2.2"
                    fill="none" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                {tag}
              </span>
            ))}
          </div>

          <div className="hero-actions">
            <button className="btn-get-started">Get Started</button>
            <button className="btn-play" onClick={() => setVideoModal(true)}>
              <div className="play-circle">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="white">
                  <polygon points="6,3 20,12 6,21"/>
                </svg>
              </div>
              <span>Career Navigation</span>
            </button>
          </div>
        </div>

        <div className="hero-right">
          <video className="hero-video" src={heroVideo} autoPlay muted loop playsInline/>
        </div>
      </section>

      {/* ══ STATS ══ */}
      <section className="stats-section">
        {[
          { cls:'blue',   icon: iconCareer, val:'10 K',  lbl:'Career Navigation' },
          { cls:'teal',   icon: iconAssess, val:'100 +', lbl:'Real Time Assessments' },
          { cls:'purple', icon: iconCourses,val:'60 K',  lbl:'Online Courses' },
          { cls:'cyan',   icon: iconCerts,  val:'60 K',  lbl:'Industry Certifications' },
        ].map(s => (
          <div className={`stat-card ${s.cls}`} key={s.lbl}>
            <div className="stat-icon"><img src={s.icon} alt={s.lbl} className="stat-img"/></div>
            <div className="stat-info"><h3>{s.val}</h3><p>{s.lbl}</p></div>
          </div>
        ))}
      </section>

      {/* ══ CAREER CARDS ══ */}
      <section className="career-cards-section">
        <div className="career-card">
          <img src={banner1} alt="Navigate Your Careers" className="career-card-img"/>
          <div className="career-card-content navigate-content">
            <h3>Navigate Your Careers with EDUTECHEX</h3>
            <p>Careers aligned with Passion</p>
            <button className="read-more-btn read-more-btn--dark">Read More</button>
          </div>
        </div>
        <div className="career-card">
          <img src={banner2} alt="Mapping in Core Emerging Sectors" className="career-card-img"/>
          <div className="career-card-content">
            <h3>Mapping in Core Emerging Sectors</h3>
            <p>The Innovative Global Opportunities</p>
            <button className="read-more-btn">Read More</button>
          </div>
        </div>
      </section>

      {/* ══ MOST POPULAR COURSES ══ */}
      <MostPopularCourses />

      {/* ══ COUNSELLING ACTION BOX ══ */}
      <section className="action-box-section">
        <div className="action-box">
          <span className="action-deco action-deco--tl"/>
          <span className="action-deco action-deco--br"/>
          <div className="action-box-inner">
            <div className="action-box-text">
              <h3>Schedule a Counselling Session!</h3>
              <p>
                Reach out to our expert Counselors who can help you discover your potential,
                navigate with selecting the right curriculum, stream, course, industry and job.
              </p>
            </div>
            
          </div>
        </div>
      </section>

      {/* ══ REVIEWS / TESTIMONIALS ══ */}
      <section className="reviews-section">
        <div className="reviews-container">

          <div className="reviews-left">

            {/* Circle SVG decoration */}
            <div className="circle-decoration-svg">
              <svg width="211" height="211" viewBox="0 0 211 211" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M210.030,105.011 C210.030,163.014 163.010,210.029 105.012,210.029
                     C47.013,210.029 -0.005,163.014 -0.005,105.011
                     C-0.005,47.015 47.013,-0.004 105.012,-0.004
                     C163.010,-0.004 210.030,47.015 210.030,105.011 Z"
                />
              </svg>
            </div>

            {/* ── 3D Flip Card ── */}
            <div className="custom-card-wrapper">
              <div className="custom-card">
                <div className="face front-face">
                  <div className="review-card">
                    <div className="avatar-wrap">
                      <img src={FLIP_CARDS[0].img} alt={FLIP_CARDS[0].name} className="avatar-img"/>
                    </div>
                    <blockquote className="review-quote">
                      <span className="q-icon">"</span>
                      {FLIP_CARDS[0].quote}
                      <span className="q-icon">"</span>
                    </blockquote>
                    <h6 className="review-name">{FLIP_CARDS[0].name}</h6>
                    <p className="review-grade">{FLIP_CARDS[0].grade}</p>
                    <span className="uni-badge">{FLIP_CARDS[0].uni}</span>
                  </div>
                </div>
                <div className="face back-face">
                  <div className="review-card">
                    <div className="avatar-wrap">
                      <img src={FLIP_CARDS[1].img} alt={FLIP_CARDS[1].name} className="avatar-img"/>
                    </div>
                    <blockquote className="review-quote">
                      <span className="q-icon">"</span>
                      {FLIP_CARDS[1].quote}
                      <span className="q-icon">"</span>
                    </blockquote>
                    <h6 className="review-name">{FLIP_CARDS[1].name}</h6>
                    <p className="review-grade">{FLIP_CARDS[1].grade}</p>
                    <span className="uni-badge">{FLIP_CARDS[1].uni}</span>
                  </div>
                </div>
              </div>
            </div>

            {/* ── Mentor Panel ── */}
            <div className="mentor-panel">
              <div className="mentor-badge">
                <svg viewBox="0 0 24 24" width="18" height="18" fill="#f59e0b">
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                </svg>
              </div>
              <h6 className="mentor-title">100+ Verified Mentors</h6>
              {MENTORS.map(m => (
                <div className="mentor-item" key={m.name}>
                  <img src={m.img} alt={m.name} className="mentor-avatar"/>
                  <div>
                    <p className="mentor-name">{m.name}</p>
                    <p className="mentor-subject">{m.subject}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* ── Dot pattern spacer ── */}
            <div className="dot-pattern-spacer">
              <div className="dots-pattern-svg">
                <svg enableBackground="new 0 0 160.7 159.8" viewBox="0 0 160.7 159.8"
                  xmlns="http://www.w3.org/2000/svg" width="160" height="180">
                  <path d="m153.2 114.5c1.2 0 2.1 1 2.1 2.2s-1 2.2-2.1 2.2c-1.2 0-2.1-1-2.1-2.2-0.1-1.2 0.9-2.2 2.1-2.2z"/>
                  <path d="m116.4 114.5c1.2 0 2.1 1 2.1 2.2s-1 2.2-2.1 2.2c-1.2 0-2.1-1-2.1-2.2s0.9-2.2 2.1-2.2z"/>
                  <path d="m134.8 114.5c1.2 0 2.1 1 2.1 2.2s-1 2.2-2.1 2.2c-1.2 0-2.1-1-2.1-2.2s0.9-2.2 2.1-2.2z"/>
                  <path d="m135.1 96.9c1.2 0 2.1 1 2.1 2.2s-1 2.2-2.1 2.2c-1.2 0-2.1-1-2.1-2.2s0.9-2.2 2.1-2.2z"/>
                  <path d="m153.5 96.9c1.2 0 2.1 1 2.1 2.2s-1 2.2-2.1 2.2c-1.2 0-2.1-1-2.1-2.2-0.1-1.2 0.9-2.2 2.1-2.2z"/>
                  <path d="m98.3 96.9c1.2 0 2.1 1 2.1 2.2s-1 2.2-2.1 2.2c-1.2 0-2.1-1-2.1-2.2s0.9-2.2 2.1-2.2z"/>
                  <ellipse cx="116.7" cy="99.1" rx="2.1" ry="2.2"/>
                  <path d="m153.2 149.8c1.2 0 2.1 1 2.1 2.2s-1 2.2-2.1 2.2c-1.2 0-2.1-1-2.1-2.2-0.1-1.3 0.9-2.2 2.1-2.2z"/>
                  <path d="m135.1 132.2c1.2 0 2.1 1 2.1 2.2s-1 2.2-2.1 2.2c-1.2 0-2.1-1-2.1-2.2 0-1.3 0.9-2.2 2.1-2.2z"/>
                  <path d="m153.5 132.2c1.2 0 2.1 1 2.1 2.2s-1 2.2-2.1 2.2c-1.2 0-2.1-1-2.1-2.2-0.1-1.3 0.9-2.2 2.1-2.2z"/>
                  <path d="m80.2 79.3c1.2 0 2.1 1 2.1 2.2s-1 2.2-2.1 2.2c-1.2 0-2.1-1-2.1-2.2s1-2.2 2.1-2.2z"/>
                  <path d="m117 79.3c1.2 0 2.1 1 2.1 2.2s-1 2.2-2.1 2.2c-1.2 0-2.1-1-2.1-2.2s0.9-2.2 2.1-2.2z"/>
                  <path d="m98.6 79.3c1.2 0 2.1 1 2.1 2.2s-1 2.2-2.1 2.2c-1.2 0-2.1-1-2.1-2.2s0.9-2.2 2.1-2.2z"/>
                  <path d="m135.4 79.3c1.2 0 2.1 1 2.1 2.2s-1 2.2-2.1 2.2c-1.2 0-2.1-1-2.1-2.2s0.9-2.2 2.1-2.2z"/>
                  <path d="m153.8 79.3c1.2 0 2.1 1 2.1 2.2s-1 2.2-2.1 2.2c-1.2 0-2.1-1-2.1-2.2s0.9-2.2 2.1-2.2z"/>
                  <path d="m80.6 61.7c1.2 0 2.1 1 2.1 2.2s-1 2.2-2.1 2.2c-1.2 0-2.1-1-2.1-2.2-0.1-1.2 0.9-2.2 2.1-2.2z"/>
                  <ellipse cx="98.9" cy="63.9" rx="2.1" ry="2.2"/>
                  <path d="m117.3 61.7c1.2 0 2.1 1 2.1 2.2s-1 2.2-2.1 2.2c-1.2 0-2.1-1-2.1-2.2s0.9-2.2 2.1-2.2z"/>
                  <ellipse cx="62.2" cy="63.9" rx="2.1" ry="2.2"/>
                  <ellipse cx="154.1" cy="63.9" rx="2.1" ry="2.2"/>
                  <path d="m135.7 61.7c1.2 0 2.1 1 2.1 2.2s-1 2.2-2.1 2.2c-1.2 0-2.1-1-2.1-2.2s0.9-2.2 2.1-2.2z"/>
                  <path d="m154.4 44.1c1.2 0 2.1 1 2.1 2.2s-1 2.2-2.1 2.2c-1.2 0-2.1-1-2.1-2.2s0.9-2.2 2.1-2.2z"/>
                  <path d="m80.9 44.1c1.2 0 2.1 1 2.1 2.2s-1 2.2-2.1 2.2c-1.2 0-2.1-1-2.1-2.2-0.1-1.2 0.9-2.2 2.1-2.2z"/>
                  <path d="m44.1 44.1c1.2 0 2.1 1 2.1 2.2s-1 2.2-2.1 2.2c-1.2 0-2.1-1-2.1-2.2-0.1-1.2 0.9-2.2 2.1-2.2z"/>
                  <path d="m99.2 44.1c1.2 0 2.1 1 2.1 2.2s-1 2.2-2.1 2.2c-1.2 0-2.1-1-2.1-2.2s1-2.2 2.1-2.2z"/>
                  <ellipse cx="117.6" cy="46.3" rx="2.1" ry="2.2"/>
                  <path d="m136 44.1c1.2 0 2.1 1 2.1 2.2s-1 2.2-2.1 2.2c-1.2 0-2.1-1-2.1-2.2s0.9-2.2 2.1-2.2z"/>
                  <path d="m62.5 44.1c1.2 0 2.1 1 2.1 2.2s-1 2.2-2.1 2.2c-1.2 0-2.1-1-2.1-2.2-0.1-1.2 0.9-2.2 2.1-2.2z"/>
                  <path d="m154.7 26.5c1.2 0 2.1 1 2.1 2.2s-1 2.2-2.1 2.2c-1.2 0-2.1-1-2.1-2.2s0.9-2.2 2.1-2.2z"/>
                  <path d="m62.8 26.5c1.2 0 2.1 1 2.1 2.2s-1 2.2-2.1 2.2c-1.2 0-2.1-1-2.1-2.2-0.1-1.2 0.9-2.2 2.1-2.2z"/>
                  <ellipse cx="136.3" cy="28.6" rx="2.1" ry="2.2"/>
                  <path d="m99.6 26.5c1.2 0 2.1 1 2.1 2.2s-1 2.2-2.1 2.2c-1.2 0-2.1-1-2.1-2.2-0.1-1.2 0.9-2.2 2.1-2.2z"/>
                  <path d="m117.9 26.5c1.2 0 2.1 1 2.1 2.2s-1 2.2-2.1 2.2c-1.2 0-2.1-1-2.1-2.2s1-2.2 2.1-2.2z"/>
                  <path d="m81.2 26.5c1.2 0 2.1 1 2.1 2.2s-1 2.2-2.1 2.2c-1.2 0-2.1-1-2.1-2.2-0.1-1.2 0.9-2.2 2.1-2.2z"/>
                  <path d="m26 26.5c1.2 0 2.1 1 2.1 2.2s-1 2.2-2.1 2.2c-1.2 0-2.1-1-2.1-2.2s0.9-2.2 2.1-2.2z"/>
                  <ellipse cx="44.4" cy="28.6" rx="2.1" ry="2.2"/>
                  <path d="m136.6 13.2c-1.2 0-2.1-1-2.1-2.2s1-2.2 2.1-2.2c1.2 0 2.1 1 2.1 2.2 0.1 1.2-0.9 2.2-2.1 2.2z"/>
                  <path d="m155 13.2c-1.2 0-2.1-1-2.1-2.2s1-2.2 2.1-2.2c1.2 0 2.1 1 2.1 2.2 0.1 1.2-0.9 2.2-2.1 2.2z"/>
                  <path d="m26.3 13.2c-1.2 0-2.1-1-2.1-2.2s1-2.2 2.1-2.2c1.2 0 2.1 1 2.1 2.2s-0.9 2.2-2.1 2.2z"/>
                  <path d="m81.5 13.2c-1.2 0-2.1-1-2.1-2.2s1-2.2 2.1-2.2c1.2 0 2.1 1 2.1 2.2s-0.9 2.2-2.1 2.2z"/>
                  <path d="m63.1 13.2c-1.2 0-2.1-1-2.1-2.2s1-2.2 2.1-2.2c1.2 0 2.1 1 2.1 2.2s-0.9 2.2-2.1 2.2z"/>
                  <path d="m44.7 13.2c-1.2 0-2.1-1-2.1-2.2s1-2.2 2.1-2.2c1.2 0 2.1 1 2.1 2.2s-0.9 2.2-2.1 2.2z"/>
                  <path d="m118.2 13.2c-1.2 0-2.1-1-2.1-2.2s1-2.2 2.1-2.2c1.2 0 2.1 1 2.1 2.2 0.1 1.2-0.9 2.2-2.1 2.2z"/>
                  <path d="m7.9 13.2c-1.2 0-2.1-1-2.1-2.2s1-2.2 2.1-2.2c1.2 0 2.1 1 2.1 2.2 0.1 1.2-0.9 2.2-2.1 2.2z"/>
                  <path d="m99.9 13.2c-1.2 0-2.1-1-2.1-2.2s1-2.2 2.1-2.2c1.2 0 2.1 1 2.1 2.2s-1 2.2-2.1 2.2z"/>
                </svg>
              </div>
            </div>

            {/* ── Carousel Review Card ── */}
            <div className="reviews-middle">
              <div className="review-card carousel-card">
                <div className="avatar-wrap">
                  <img src={current.img} alt={current.name} className="avatar-img"/>
                </div>
                <blockquote className="review-quote">
                  <span className="q-icon">"</span>{current.quote}<span className="q-icon">"</span>
                </blockquote>
                <h6 className="review-name">{current.name}</h6>
                <p className="review-grade">{current.grade}</p>
                <span className="uni-badge">{current.uni}</span>
                <div className="carousel-dots">
                  {CAROUSEL_REVIEWS.map((_, i) => (
                    <button
                      key={i}
                      className={`dot ${i === carouselIdx ? 'active' : ''}`}
                      onClick={() => setCarouselIdx(i)}
                    />
                  ))}
                </div>
                <button
                  className="carousel-next-btn"
                  onClick={() => setCarouselIdx(i => (i + 1) % CAROUSEL_REVIEWS.length)}
                >
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="white">
                    <path d="M9 18l6-6-6-6" stroke="white" strokeWidth="2.5" fill="none"/>
                  </svg>
                </button>
              </div>
            </div>

          </div>

          <div className="reviews-right">
            <h2 className="reviews-heading">Some valuable feedback from our students</h2>
            <p className="reviews-desc">
              We take pride in unlocking students potential and navigating their passion
              to careers globally. It give's us immense satisfaction when our students
              achieve their milestones through EDUTECHEX navigation program. Take a look
              at some of our students incredible success stories.
            </p>
            <button className="btn-testimonials">View All Testimonials</button>
          </div>

        </div>
      </section>

      {/* ══ STUDENT DESTINATIONS ══ */}
      <section className="destinations-section">
        <div className="destinations-container">
          <h2 className="destinations-heading">Our Student Destinations</h2>
          <div className="uni-slider-wrapper">
            <button className="uni-nav-btn" onClick={prevUni}>
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
                <path d="M15 18l-6-6 6-6" stroke="white" strokeWidth="2.5"/>
              </svg>
            </button>
            <div className="uni-slides-track">
              {UNI_SLIDES.map((group, slideIdx) => (
                <div key={slideIdx} className={`uni-slide ${slideIdx === uniSlide ? 'uni-slide--active' : ''}`}>
                  {group.map((logo, li) => (
                    <div className="uni-logo-cell" key={li}>
                      <img src={logo} alt={`University ${li + 1}`} className="uni-logo-img"/>
                    </div>
                  ))}
                </div>
              ))}
            </div>
            <button className="uni-nav-btn" onClick={nextUni}>
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
                <path d="M9 18l6-6-6-6" stroke="white" strokeWidth="2.5"/>
              </svg>
            </button>
          </div>
          <div className="uni-dots">
            {UNI_SLIDES.map((_, i) => (
              <button key={i} className={`dot ${i === uniSlide ? 'active' : ''}`}
                onClick={() => setUniSlide(i)}/>
            ))}
          </div>
        </div>
      </section>

      {/* ══ POWERED BY ══ */}
      <section className="powered-section">
        <div className="powered-container">
          <span className="powered-label">Powered By :</span>
          <a href="https://aws.amazon.com/education/edstart/" target="_blank" rel="noopener noreferrer" className="powered-logo-link">
            <img src={awsLogo} alt="AWS EdStart Member" className="powered-logo powered-logo--aws"/>
          </a>
          <a href="https://www.nvidia.com/en-in/startups/" target="_blank" rel="noopener noreferrer" className="powered-logo-link">
            <img src={nvidiaLogo} alt="NVIDIA Inception Program" className="powered-logo powered-logo--nvidia"/>
          </a>
        </div>
      </section>

      {/* ══ FOOTER ══ */}
      <footer className="site-footer">
        <div className="footer-bg-overlay" />
        <div className="footer-inner">
          <div className="footer-grid">
            <div className="footer-widget footer-widget--brand">
              <a href="/" className="footer-logo-link">
                <img src={edutechLogo} alt="EDUTECHEX" className="footer-logo" />
              </a>
              <p className="footer-brand-desc">
                We are a young team of diversified people who have education close to our hearts
                and are extremely passionate about global and domestic education.
              </p>
              <ul className="footer-socials">
                <li><a href="https://www.facebook.com/edutechexlearning/" target="_blank" rel="noopener noreferrer" className="footer-social-btn footer-social-btn--fb">fb</a></li>
                <li><a href="https://www.instagram.com/edutechexglobal/" target="_blank" rel="noopener noreferrer" className="footer-social-btn footer-social-btn--ig">ig</a></li>
                <li><a href="https://twitter.com/EduTechEx1" target="_blank" rel="noopener noreferrer" className="footer-social-btn footer-social-btn--tw">tw</a></li>
                <li><a href="https://www.linkedin.com/company/edutechex-global/mycompany/" target="_blank" rel="noopener noreferrer" className="footer-social-btn footer-social-btn--li">in</a></li>
                <li><a href="https://www.youtube.com/channel/UCoygtJAtV4Kk5ahlK9VZ_Sw" target="_blank" rel="noopener noreferrer" className="footer-social-btn footer-social-btn--yt">yt</a></li>
              </ul>
            </div>
            {FOOTER_ITEMS.map(section => (
              <div key={section.heading} className="footer-widget footer-widget--nav">
                <h5 className="footer-nav-heading">{section.heading}</h5>
                <ul className="footer-nav-list">
                  {section.items.map(item => (
                    <li key={item.name}>
                      <a href={item.link} className="footer-nav-link">{item.name}</a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
            <div className="footer-widget footer-widget--contact">
              <h5 className="footer-nav-heading">Contact</h5>
              <p className="footer-contact-row">Contact No: <a href="tel:7330611818" className="footer-contact-value">7330611818</a></p>
              <p className="footer-contact-row">Email: <a href="mailto:office@edutechex.com" className="footer-contact-value">office@edutechex.com</a></p>
            </div>
          </div>
          <hr className="footer-divider" />
          <div className="footer-bottom">
            <span className="footer-copyright"><a href="/" className="footer-copyright-link">©2023 EDUTECHEX</a>. All rights reserved.</span>
            <ul className="footer-legal-links">
              <li><a href="/cancellation-policy" className="footer-legal-link">Cancellation Policy</a></li>
              <li><a href="/privacy-policy" className="footer-legal-link">Privacy policy</a></li>
              <li><a href="/terms-and-conditions" className="footer-legal-link">Terms and Conditions</a></li>
            </ul>
          </div>
        </div>
      </footer>

      {/* ══ MODALS ══ */}
      {videoModal && (
        <div className="modal-overlay" onClick={() => setVideoModal(false)}>
          <div className="modal-box" onClick={e => e.stopPropagation()}>
            <button className="modal-close" onClick={() => setVideoModal(false)}>✕</button>
            <video src={heroVideo} controls autoPlay style={{width:'100%',borderRadius:'8px'}}/>
          </div>
        </div>
      )}

      {counselModal && (
        <div className="modal-overlay" onClick={() => setCounselModal(false)}>
          <div className="modal-box counsel-modal" onClick={e => e.stopPropagation()}>
            <div className="counsel-header">
              <h5>Registration Form</h5>
              <button className="modal-close" onClick={() => setCounselModal(false)}>✕</button>
            </div>
            <div className="counsel-body">
              {['name', 'email', 'phone', 'city'].map(field => (
                <div className="form-group" key={field}>
                  <input
                    type={field === 'email' ? 'email' : 'text'}
                    placeholder={field.charAt(0).toUpperCase() + field.slice(1)}
                    value={form[field]}
                    onChange={handleInput(field)}
                    className={`form-input ${submitted && errors[field] ? 'input-error' : ''}`}
                  />
                  {submitted && errors[field] && <span className="error-text">{errors[field]}</span>}
                </div>
              ))}
              <button className="btn-submit" onClick={handleSubmit}>Submit</button>
            </div>
          </div>
        </div>
      )}

      {successModal && (
        <div className="modal-overlay" onClick={() => setSuccessModal(false)}>
          <div className="modal-box success-modal" onClick={e => e.stopPropagation()}>
            <div className="success-icon">✓</div>
            <p className="success-msg">Your message has been successfully sent. We will contact you very soon!</p>
          </div>
        </div>
      )}

      {/* ══ WHATSAPP FLOAT ══ */}
      <a href="https://api.whatsapp.com/send?phone=917330611818" className="whatsapp-float" target="_blank" rel="noopener noreferrer">
        <svg viewBox="0 0 32 32" width="28" height="28" fill="white">
          <path d="M16 2C8.28 2 2 8.28 2 16c0 2.46.66 4.76 1.8 6.76L2 30l7.46-1.76A13.93 13.93 0 0016 30c7.72 0 14-6.28 14-14S23.72 2 16 2z"/>
        </svg>
      </a>
    </div>
  );
};

export default Home;