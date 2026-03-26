import React, { useState } from 'react';
import './home.css';
import Header from './header';
import MostPopularCourses from './most';

// ── Assets (home.js lives in src/, assets live in src/assets/) ──
import heroVideo from './assets/home-mobile.mp4';
import iconCareer from './assets/Career Navigation.svg';
import iconAssessments from './assets/Assessments.svg';
import iconCourses from './assets/Online Course.svg';
import iconCerts from './assets/Industry Certifications.svg';
import banner1 from './assets/Banner 07.jpg';
import banner2 from './assets/Banner 05.jpg';

const Home = () => {
  const [showModal, setShowModal] = useState(false);

  return (
    <div className="home-wrapper">

      {/* Header Component */}
      <Header />

      {/* ══════════════ HERO ══════════════ */}
      <section className="hero">

        {/* Left content */}
        <div className="hero-left">
          <h1 className="hero-title">
            Limitless navigated learning<br />
            at your{' '}
            <span className="highlight">
              fingertips
              <svg className="underline-svg" viewBox="0 0 220 10"
                preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M0,6 Q30,1 60,6 Q90,11 120,6 Q150,1 180,6 Q200,9 220,6"
                  stroke="#f5a623" strokeWidth="3" fill="none" strokeLinecap="round"
                />
              </svg>
            </span>
          </h1>

          <p className="hero-desc">
            Unlock your passion and get it mapped to 10K+ courses &amp; 5K+ global
            universities and companies through scientific methodologies.
          </p>

          <div className="hero-tags">
            {['Passion', 'Education', 'Careers', 'Innovation'].map(tag => (
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
            <button className="btn-play" onClick={() => setShowModal(true)}>
              <div className="play-circle">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="white">
                  <polygon points="6,3 20,12 6,21"/>
                </svg>
              </div>
              <span>Career Navigation</span>
            </button>
          </div>
        </div>

        {/* Right video */}
        <div className="hero-right">
          <video
            className="hero-video"
            src={heroVideo}
            autoPlay muted loop playsInline
          />
        </div>
      </section>

      {/* ══════════════ STATS ══════════════ */}
      <section className="stats-section">

        <div className="stat-card blue">
          <div className="stat-icon">
            <img src={iconCareer} alt="Career Navigation" className="stat-img" />
          </div>
          <div className="stat-info">
            <h3>10 K</h3>
            <p>Career Navigation</p>
          </div>
        </div>

        <div className="stat-card teal">
          <div className="stat-icon">
            <img src={iconAssessments} alt="Real Time Assessments" className="stat-img" />
          </div>
          <div className="stat-info">
            <h3>100 +</h3>
            <p>Real Time Assessments</p>
          </div>
        </div>

        <div className="stat-card purple">
          <div className="stat-icon">
            <img src={iconCourses} alt="Online Courses" className="stat-img" />
          </div>
          <div className="stat-info">
            <h3>60 K</h3>
            <p>Online Courses</p>
          </div>
        </div>

        <div className="stat-card cyan">
          <div className="stat-icon">
            <img src={iconCerts} alt="Industry Certifications" className="stat-img" />
          </div>
          <div className="stat-info">
            <h3>60 K</h3>
            <p>Industry Certifications</p>
          </div>
        </div>

      </section>

      {/* ══════════════ CAREER CARDS SECTION ══════════════ */}
      <section className="career-cards-section">
        <div className="career-card">
          <img src={banner1} alt="Navigate Your Careers" className="career-card-img" />
          <div className="career-card-content">
            <div className="career-tags-row">
              <span className="career-tag-item">EDUCATION</span>
              <span className="career-tag-item">PASSION</span>
              <span className="career-tag-item">CAREER</span>
              <span className="career-tag-item">WEALTH</span>
            </div>
            <h3>Navigate Your Careers with EDUTECHEX</h3>
            <p>Careers aligned with Passion</p>
            <button className="read-more-btn">Read More</button>
          </div>
        </div>

        <div className="career-card">
          <img src={banner2} alt="Mapping in Core Emerging Sectors" className="career-card-img" />
          <div className="career-card-content">
            <div className="career-tags-row">
              <span className="career-tag-item">EDUCATION</span>
              <span className="career-tag-item">PASSION</span>
              <span className="career-tag-item">CAREER</span>
              <span className="career-tag-item">WEALTH</span>
            </div>
            <h3>Mapping in Core Emerging Sectors</h3>
            <p>The Innovative Global Opportunities</p>
            <button className="read-more-btn">Read More</button>
          </div>
        </div>
      </section>

      {/* ══════════════ MOST POPULAR COURSES ══════════════ */}
      <MostPopularCourses />

      {/* ══════════════ VIDEO MODAL ══════════════ */}
      {showModal && (
        <div className="modal-overlay" onClick={() => setShowModal(false)}>
          <div className="modal-box" onClick={e => e.stopPropagation()}>
            <button className="modal-close" onClick={() => setShowModal(false)}>✕</button>
            <video
              src={heroVideo} controls autoPlay
              style={{ width: '100%', borderRadius: '8px' }}
            />
          </div>
        </div>
      )}

      {/* ══════════════ WHATSAPP FLOAT ══════════════ */}
      <a
        href="https://wa.me/yourphonenumber"
        className="whatsapp-float"
        target="_blank"
        rel="noopener noreferrer"
      >
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