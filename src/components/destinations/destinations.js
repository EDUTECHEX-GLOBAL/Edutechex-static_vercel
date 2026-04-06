import React, { useState, useEffect } from 'react';
import './destinations.css';
import { UNI_SLIDES } from '../../data/universities';

const Destinations = () => {
  const [uniSlide, setUniSlide] = useState(0);

  useEffect(() => {
    const t = setInterval(() => setUniSlide(i => (i + 1) % UNI_SLIDES.length), 3000);
    return () => clearInterval(t);
  }, []);

  const prevUni = () => setUniSlide(i => (i - 1 + UNI_SLIDES.length) % UNI_SLIDES.length);
  const nextUni = () => setUniSlide(i => (i + 1) % UNI_SLIDES.length);

  return (
    <section className="destinations-section">
      <div className="destinations-container">
        <h2 className="destinations-heading">Our Student Destinations</h2>
        <div className="uni-slider-wrapper">
          <button className="uni-nav-btn" onClick={prevUni}>
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none"><path d="M15 18l-6-6 6-6" stroke="white" strokeWidth="2.5" /></svg>
          </button>
          <div className="uni-slides-track">
            {UNI_SLIDES.map((slide, idx) => (
              <div key={idx} className={`uni-slide ${uniSlide === idx ? 'uni-slide--active' : ''}`}>
                <div className="uni-slide-row">
                  {slide.map((logo, logoIdx) => (<div key={logoIdx} className="uni-logo-cell"><img src={logo} alt={`University ${logoIdx + 1}`} className="uni-logo-img" /></div>))}
                </div>
              </div>
            ))}
          </div>
          <button className="uni-nav-btn" onClick={nextUni}>
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none"><path d="M9 18l6-6-6-6" stroke="white" strokeWidth="2.5" /></svg>
          </button>
        </div>
        <div className="uni-dots">
          {UNI_SLIDES.map((_, i) => (<button key={i} className={`dot ${i === uniSlide ? 'active' : ''}`} onClick={() => setUniSlide(i)} />))}
        </div>
      </div>
    </section>
  );
};

export default Destinations;