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

// ── University slider groups (4 logos per slide) ──
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

// ────────────────────────────────────────────────
const Home = () => {
  const [videoModal,   setVideoModal]   = useState(false);
  const [counselModal, setCounselModal] = useState(false);
  const [successModal, setSuccessModal] = useState(false);
  const [form,         setForm]         = useState(EMPTY_FORM);
  const [errors,       setErrors]       = useState({});
  const [submitted,    setSubmitted]    = useState(false);
  const [carouselIdx,  setCarouselIdx]  = useState(0);
  const [flipIdx,      setFlipIdx]      = useState(0);
  const [uniSlide,     setUniSlide]     = useState(0);

  useEffect(() => {
    const t = setInterval(() => setCarouselIdx(i => (i + 1) % CAROUSEL_REVIEWS.length), 4000);
    return () => clearInterval(t);
  }, []);

  useEffect(() => {
    const t = setInterval(() => setFlipIdx(i => (i + 1) % FLIP_CARDS.length), 3500);
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
            Limitless navigated learning<br />
            at your{' '}
            <span className="highlight">
              fingertips
              <svg className="underline-svg" viewBox="0 0 220 10"
                preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M0,6 Q30,1 60,6 Q90,11 120,6 Q150,1 180,6 Q200,9 220,6"
                  stroke="#f5a623" strokeWidth="3" fill="none" strokeLinecap="round"/>
              </svg>
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
          <div className="career-card-content">
            <h3>Navigate Your Careers with EDUTECHEX</h3>
            <p>Careers aligned with Passion</p>
            <button className="read-more-btn">Read More</button>
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
            <div className="action-box-cta">
              <button className="btn-register" onClick={() => setCounselModal(true)}>
                Register for Counselling
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* ══ REVIEWS / TESTIMONIALS ══ */}
      <section className="reviews-section">
        <div className="reviews-container">
          <div className="reviews-left">
            <div className="flip-card-wrapper">
              {FLIP_CARDS.map((fc, i) => (
                <div key={fc.name} className={`review-card flip-card ${i === flipIdx ? 'active' : ''}`}>
                  <div className="avatar-wrap">
                    <img src={fc.img} alt={fc.name} className="avatar-img"/>
                  </div>
                  <blockquote className="review-quote">
                    <span className="q-icon">&#8220;</span>{fc.quote}<span className="q-icon">&#8221;</span>
                  </blockquote>
                  <h6 className="review-name">{fc.name}</h6>
                  <p className="review-grade">{fc.grade}</p>
                  <span className="uni-badge">{fc.uni}</span>
                </div>
              ))}
            </div>
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
          </div>

          <div className="reviews-middle">
            <div className="review-card carousel-card">
              <div className="avatar-wrap">
                <img src={current.img} alt={current.name} className="avatar-img"/>
              </div>
              <blockquote className="review-quote">
                <span className="q-icon">&#8220;</span>{current.quote}<span className="q-icon">&#8221;</span>
              </blockquote>
              <h6 className="review-name">{current.name}</h6>
              <p className="review-grade">{current.grade}</p>
              <span className="uni-badge">{current.uni}</span>
              <div className="carousel-dots">
                {CAROUSEL_REVIEWS.map((_, i) => (
                  <button key={i} className={`dot ${i === carouselIdx ? 'dot--active' : ''}`}
                    onClick={() => setCarouselIdx(i)} aria-label={`Review ${i + 1}`}/>
                ))}
              </div>
              <button className="carousel-next-btn"
                onClick={() => setCarouselIdx(i => (i + 1) % CAROUSEL_REVIEWS.length)}
                aria-label="Next review">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="white">
                  <path d="M9 18l6-6-6-6" stroke="white" strokeWidth="2.5"
                    fill="none" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </button>
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
            <button className="uni-nav-btn" onClick={prevUni} aria-label="Previous slide">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
                <path d="M15 18l-6-6 6-6" stroke="white" strokeWidth="2.5"
                  strokeLinecap="round" strokeLinejoin="round"/>
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
            <button className="uni-nav-btn" onClick={nextUni} aria-label="Next slide">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
                <path d="M9 18l6-6-6-6" stroke="white" strokeWidth="2.5"
                  strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
          </div>
          <div className="uni-dots">
            {UNI_SLIDES.map((_, i) => (
              <button key={i} className={`dot ${i === uniSlide ? 'dot--active' : ''}`}
                onClick={() => setUniSlide(i)} aria-label={`Slide ${i + 1}`}/>
            ))}
          </div>
        </div>
      </section>

      {/* ══ POWERED BY ══ */}
      <section className="powered-section">
        <div className="powered-container">
          <span className="powered-label">Powered By :</span>
          <a href="https://aws.amazon.com/education/edstart/" target="_blank" rel="noopener noreferrer"
            className="powered-logo-link">
            <img src={awsLogo} alt="AWS EdStart Member" className="powered-logo powered-logo--aws"/>
          </a>
          <a href="https://www.nvidia.com/en-in/startups/" target="_blank" rel="noopener noreferrer"
            className="powered-logo-link">
            <img src={nvidiaLogo} alt="NVIDIA Inception Program" className="powered-logo powered-logo--nvidia"/>
          </a>
        </div>
      </section>

      {/* ══ FOOTER ══ */}
      <footer className="site-footer">
        <div className="footer-bg-overlay" />
        <div className="footer-inner">
          <div className="footer-grid">

            {/* Widget 1 — Logo + Description + Socials */}
            <div className="footer-widget footer-widget--brand">
              <a href="/" className="footer-logo-link">
                <img src={edutechLogo} alt="EDUTECHEX" className="footer-logo" />
              </a>
              <p className="footer-brand-desc">
                We are a young team of diversified people who have education close to our hearts
                and are extremely passionate about global and domestic education.
              </p>
              <ul className="footer-socials">
                <li>
                  <a href="https://www.facebook.com/edutechexlearning/" target="_blank" rel="noopener noreferrer"
                    className="footer-social-btn footer-social-btn--fb" aria-label="Facebook">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"/>
                    </svg>
                  </a>
                </li>
                <li>
                  <a href="https://www.instagram.com/edutechexglobal/" target="_blank" rel="noopener noreferrer"
                    className="footer-social-btn footer-social-btn--ig" aria-label="Instagram">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
                      <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37z"/>
                      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>
                    </svg>
                  </a>
                </li>
                <li>
                  <a href="https://twitter.com/EduTechEx1" target="_blank" rel="noopener noreferrer"
                    className="footer-social-btn footer-social-btn--tw" aria-label="Twitter">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"/>
                    </svg>
                  </a>
                </li>
                <li>
                  <a href="https://www.linkedin.com/company/edutechex-global/mycompany/" target="_blank" rel="noopener noreferrer"
                    className="footer-social-btn footer-social-btn--li" aria-label="LinkedIn">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"/>
                      <circle cx="4" cy="4" r="2"/>
                    </svg>
                  </a>
                </li>
                <li>
                  <a href="https://www.youtube.com/channel/UCoygtJAtV4Kk5ahlK9VZ_Sw" target="_blank" rel="noopener noreferrer"
                    className="footer-social-btn footer-social-btn--yt" aria-label="YouTube">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M22.54 6.42a2.78 2.78 0 00-1.95-1.96C18.88 4 12 4 12 4s-6.88 0-8.59.46a2.78 2.78 0 00-1.95 1.96A29 29 0 001 12a29 29 0 00.46 5.58A2.78 2.78 0 003.41 19.6C5.12 20 12 20 12 20s6.88 0 8.59-.4a2.78 2.78 0 001.95-1.97A29 29 0 0023 12a29 29 0 00-.46-5.58z"/>
                      <polygon points="9.75 15.02 15.5 12 9.75 8.98 9.75 15.02" fill="white"/>
                    </svg>
                  </a>
                </li>
              </ul>
            </div>

            {/* Widget 2 — Nav columns */}
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

            {/* Widget 3 — Contact */}
            <div className="footer-widget footer-widget--contact">
              <h5 className="footer-nav-heading">Contact</h5>
              <p className="footer-contact-row">
                Contact No:
                <a href="tel:7330611818" className="footer-contact-value">7330611818</a>
              </p>
              <p className="footer-contact-row">
                Email:
                <a href="mailto:office@edutechex.com" className="footer-contact-value">
                  office@edutechex.com
                </a>
              </p>
            </div>

          </div>{/* /footer-grid */}

          <hr className="footer-divider" />

          {/* Bottom bar */}
          <div className="footer-bottom">
            <span className="footer-copyright">
              <a href="/" className="footer-copyright-link">©2023 EDUTECHEX</a>. All rights reserved.
            </span>
            <ul className="footer-legal-links">
              <li><a href="/cancellation-policy" className="footer-legal-link">Cancellation Policy</a></li>
              <li><a href="/privacy-policy"       className="footer-legal-link">Privacy policy</a></li>
              <li><a href="/terms-and-conditions" className="footer-legal-link">Terms and Conditions</a></li>
            </ul>
          </div>

        </div>{/* /footer-inner */}
      </footer>

      {/* ══ VIDEO MODAL ══ */}
      {videoModal && (
        <div className="modal-overlay" onClick={() => setVideoModal(false)}>
          <div className="modal-box" onClick={e => e.stopPropagation()}>
            <button className="modal-close" onClick={() => setVideoModal(false)}>✕</button>
            <video src={heroVideo} controls autoPlay style={{width:'100%',borderRadius:'8px'}}/>
          </div>
        </div>
      )}

      {/* ══ COUNSELLING MODAL ══ */}
      {counselModal && (
        <div className="modal-overlay" onClick={() => setCounselModal(false)}>
          <div className="modal-box counsel-modal" onClick={e => e.stopPropagation()}>
            <div className="counsel-header">
              <h5>Registration Form</h5>
              <button className="modal-close" onClick={() => setCounselModal(false)}>✕</button>
            </div>
            <div className="counsel-body">
              {[
                { field:'name',  type:'text',  placeholder:'Name' },
                { field:'email', type:'email', placeholder:'Email address' },
                { field:'phone', type:'text',  placeholder:'Phone' },
                { field:'city',  type:'text',  placeholder:'City' },
              ].map(({ field, type, placeholder }) => (
                <div className="form-group" key={field}>
                  <input type={type} placeholder={placeholder} value={form[field]}
                    onChange={handleInput(field)}
                    className={`form-input ${submitted && errors[field] ? 'input-error' : ''}`}/>
                  {submitted && errors[field] && <span className="error-text">{errors[field]}</span>}
                </div>
              ))}
              <button className="btn-submit" onClick={handleSubmit}>Submit</button>
            </div>
          </div>
        </div>
      )}

      {/* ══ SUCCESS MODAL ══ */}
      {successModal && (
        <div className="modal-overlay" onClick={() => setSuccessModal(false)}>
          <div className="modal-box success-modal" onClick={e => e.stopPropagation()}>
            <div className="success-icon">✓</div>
            <p className="success-msg">Your message has been successfully sent. We will contact you very soon!</p>
          </div>
        </div>
      )}

      {/* ══ WHATSAPP FLOAT ══ */}
      <a href="https://api.whatsapp.com/send?phone=917330611818" className="whatsapp-float"
        target="_blank" rel="noopener noreferrer" aria-label="WhatsApp">
        <svg viewBox="0 0 32 32" width="28" height="28" fill="white">
          <path d="M16 2C8.28 2 2 8.28 2 16c0 2.46.66 4.76 1.8 6.76L2 30l7.46-1.76A13.93
            13.93 0 0016 30c7.72 0 14-6.28 14-14S23.72 2 16 2zm0 25.4a11.38 11.38 0
            01-5.8-1.58l-.42-.24-4.42 1.04 1.06-4.3-.28-.44A11.4 11.4 0 1116
            27.4zm6.28-8.54c-.34-.17-2.02-1-2.34-1.1-.32-.12-.56-.18-.8.18-.24.34-.9
            1.1-1.1 1.34-.2.22-.4.24-.74.08-.34-.18-1.44-.54-2.74-1.7-1.02-.9-1.7-2-1.9-2.34-.2-.34-.02-.52.14-.68.16-.14.34-.38.52-.56.18-.18.22-.32.34-.54.12-.22.06-.42-.02-.58-.08-.18-.8-1.94-1.1-2.64-.28-.7-.58-.6-.8-.6h-.68c-.22
            0-.58.08-.88.42-.3.34-1.14 1.1-1.14 2.68s1.16 3.1 1.32 3.32c.18.22 2.28 3.5
            5.54 4.9.78.34 1.38.54 1.86.68.78.24 1.48.2 2.04.12.62-.1 1.92-.78
            2.18-1.54.28-.76.28-1.4.2-1.54-.08-.14-.3-.22-.64-.38z"/>
        </svg>
      </a>
    </div>
  );
};

export default Home;