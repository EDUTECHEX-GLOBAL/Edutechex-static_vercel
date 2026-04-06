import React, { useState, useEffect } from 'react';
import './reviews.css';
import { CAROUSEL_REVIEWS } from '../../data/reviews';
import { FLIP_CARDS } from '../../data/flipCards';
import { MENTORS } from '../../data/mentors';

const Reviews = () => {
  const [carouselIdx, setCarouselIdx] = useState(0);
  const current = CAROUSEL_REVIEWS[carouselIdx];

  useEffect(() => {
    const t = setInterval(() => setCarouselIdx(i => (i + 1) % CAROUSEL_REVIEWS.length), 4000);
    return () => clearInterval(t);
  }, []);

  return (
    <section className="reviews-section">
      <div className="reviews-container">
        <div className="reviews-left">
          <div className="circle-decoration-svg">
            <svg width="211" height="211" viewBox="0 0 211 211"><path d="M210.030,105.011 C210.030,163.014 163.010,210.029 105.012,210.029 C47.013,210.029 -0.005,163.014 -0.005,105.011 C-0.005,47.015 47.013,-0.004 105.012,-0.004 C163.010,-0.004 210.030,47.015 210.030,105.011 Z" /></svg>
          </div>
          <div className="custom-card-wrapper">
            <div className="custom-card">
              <div className="face front-face">
                <div className="review-card">
                  <div className="avatar-wrap"><img src={FLIP_CARDS[0].img} alt={FLIP_CARDS[0].name} className="avatar-img" /></div>
                  <blockquote className="review-quote"><span className="q-icon">"</span>{FLIP_CARDS[0].quote}<span className="q-icon">"</span></blockquote>
                  <h6 className="review-name">{FLIP_CARDS[0].name}</h6>
                  <p className="review-grade">{FLIP_CARDS[0].grade}</p>
                  <span className="uni-badge">{FLIP_CARDS[0].uni}</span>
                </div>
              </div>
              <div className="face back-face">
                <div className="review-card">
                  <div className="avatar-wrap"><img src={FLIP_CARDS[1].img} alt={FLIP_CARDS[1].name} className="avatar-img" /></div>
                  <blockquote className="review-quote"><span className="q-icon">"</span>{FLIP_CARDS[1].quote}<span className="q-icon">"</span></blockquote>
                  <h6 className="review-name">{FLIP_CARDS[1].name}</h6>
                  <p className="review-grade">{FLIP_CARDS[1].grade}</p>
                  <span className="uni-badge">{FLIP_CARDS[1].uni}</span>
                </div>
              </div>
            </div>
          </div>
          <div className="mentor-panel">
            <div className="mentor-badge"><svg viewBox="0 0 24 24" width="18" height="18" fill="#f59e0b"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" /></svg></div>
            <h6 className="mentor-title">100+ Verified Mentors</h6>
            {MENTORS.map(m => (<div className="mentor-item" key={m.name}><img src={m.img} alt={m.name} className="mentor-avatar" /><div><p className="mentor-name">{m.name}</p><p className="mentor-subject">{m.subject}</p></div></div>))}
          </div>
          <div className="dot-pattern-spacer">
            <div className="dots-pattern-svg">
              <svg viewBox="0 0 160.7 159.8" width="160" height="180"><path d="m153.2 114.5c1.2 0 2.1 1 2.1 2.2s-1 2.2-2.1 2.2c-1.2 0-2.1-1-2.1-2.2-0.1-1.2 0.9-2.2 2.1-2.2z"/><path d="m116.4 114.5c1.2 0 2.1 1 2.1 2.2s-1 2.2-2.1 2.2c-1.2 0-2.1-1-2.1-2.2s0.9-2.2 2.1-2.2z"/><path d="m134.8 114.5c1.2 0 2.1 1 2.1 2.2s-1 2.2-2.1 2.2c-1.2 0-2.1-1-2.1-2.2s0.9-2.2 2.1-2.2z"/><path d="m135.1 96.9c1.2 0 2.1 1 2.1 2.2s-1 2.2-2.1 2.2c-1.2 0-2.1-1-2.1-2.2s0.9-2.2 2.1-2.2z"/><path d="m153.5 96.9c1.2 0 2.1 1 2.1 2.2s-1 2.2-2.1 2.2c-1.2 0-2.1-1-2.1-2.2-0.1-1.2 0.9-2.2 2.1-2.2z"/><path d="m98.3 96.9c1.2 0 2.1 1 2.1 2.2s-1 2.2-2.1 2.2c-1.2 0-2.1-1-2.1-2.2s0.9-2.2 2.1-2.2z"/><ellipse cx="116.7" cy="99.1" rx="2.1" ry="2.2"/><path d="m153.2 149.8c1.2 0 2.1 1 2.1 2.2s-1 2.2-2.1 2.2c-1.2 0-2.1-1-2.1-2.2-0.1-1.3 0.9-2.2 2.1-2.2z"/><path d="m135.1 132.2c1.2 0 2.1 1 2.1 2.2s-1 2.2-2.1 2.2c-1.2 0-2.1-1-2.1-2.2 0-1.3 0.9-2.2 2.1-2.2z"/><path d="m153.5 132.2c1.2 0 2.1 1 2.1 2.2s-1 2.2-2.1 2.2c-1.2 0-2.1-1-2.1-2.2-0.1-1.3 0.9-2.2 2.1-2.2z"/><path d="m80.2 79.3c1.2 0 2.1 1 2.1 2.2s-1 2.2-2.1 2.2c-1.2 0-2.1-1-2.1-2.2s1-2.2 2.1-2.2z"/><path d="m117 79.3c1.2 0 2.1 1 2.1 2.2s-1 2.2-2.1 2.2c-1.2 0-2.1-1-2.1-2.2s0.9-2.2 2.1-2.2z"/><path d="m98.6 79.3c1.2 0 2.1 1 2.1 2.2s-1 2.2-2.1 2.2c-1.2 0-2.1-1-2.1-2.2s0.9-2.2 2.1-2.2z"/><path d="m135.4 79.3c1.2 0 2.1 1 2.1 2.2s-1 2.2-2.1 2.2c-1.2 0-2.1-1-2.1-2.2s0.9-2.2 2.1-2.2z"/><path d="m153.8 79.3c1.2 0 2.1 1 2.1 2.2s-1 2.2-2.1 2.2c-1.2 0-2.1-1-2.1-2.2s0.9-2.2 2.1-2.2z"/><path d="m80.6 61.7c1.2 0 2.1 1 2.1 2.2s-1 2.2-2.1 2.2c-1.2 0-2.1-1-2.1-2.2-0.1-1.2 0.9-2.2 2.1-2.2z"/><ellipse cx="98.9" cy="63.9" rx="2.1" ry="2.2"/><path d="m117.3 61.7c1.2 0 2.1 1 2.1 2.2s-1 2.2-2.1 2.2c-1.2 0-2.1-1-2.1-2.2s0.9-2.2 2.1-2.2z"/><ellipse cx="62.2" cy="63.9" rx="2.1" ry="2.2"/><ellipse cx="154.1" cy="63.9" rx="2.1" ry="2.2"/><path d="m135.7 61.7c1.2 0 2.1 1 2.1 2.2s-1 2.2-2.1 2.2c-1.2 0-2.1-1-2.1-2.2s0.9-2.2 2.1-2.2z"/><path d="m154.4 44.1c1.2 0 2.1 1 2.1 2.2s-1 2.2-2.1 2.2c-1.2 0-2.1-1-2.1-2.2s0.9-2.2 2.1-2.2z"/><path d="m80.9 44.1c1.2 0 2.1 1 2.1 2.2s-1 2.2-2.1 2.2c-1.2 0-2.1-1-2.1-2.2-0.1-1.2 0.9-2.2 2.1-2.2z"/><path d="m44.1 44.1c1.2 0 2.1 1 2.1 2.2s-1 2.2-2.1 2.2c-1.2 0-2.1-1-2.1-2.2-0.1-1.2 0.9-2.2 2.1-2.2z"/><path d="m99.2 44.1c1.2 0 2.1 1 2.1 2.2s-1 2.2-2.1 2.2c-1.2 0-2.1-1-2.1-2.2s1-2.2 2.1-2.2z"/><ellipse cx="117.6" cy="46.3" rx="2.1" ry="2.2"/><path d="m136 44.1c1.2 0 2.1 1 2.1 2.2s-1 2.2-2.1 2.2c-1.2 0-2.1-1-2.1-2.2s0.9-2.2 2.1-2.2z"/><path d="m62.5 44.1c1.2 0 2.1 1 2.1 2.2s-1 2.2-2.1 2.2c-1.2 0-2.1-1-2.1-2.2-0.1-1.2 0.9-2.2 2.1-2.2z"/><path d="m154.7 26.5c1.2 0 2.1 1 2.1 2.2s-1 2.2-2.1 2.2c-1.2 0-2.1-1-2.1-2.2s0.9-2.2 2.1-2.2z"/><path d="m62.8 26.5c1.2 0 2.1 1 2.1 2.2s-1 2.2-2.1 2.2c-1.2 0-2.1-1-2.1-2.2-0.1-1.2 0.9-2.2 2.1-2.2z"/><ellipse cx="136.3" cy="28.6" rx="2.1" ry="2.2"/><path d="m99.6 26.5c1.2 0 2.1 1 2.1 2.2s-1 2.2-2.1 2.2c-1.2 0-2.1-1-2.1-2.2-0.1-1.2 0.9-2.2 2.1-2.2z"/><path d="m117.9 26.5c1.2 0 2.1 1 2.1 2.2s-1 2.2-2.1 2.2c-1.2 0-2.1-1-2.1-2.2s1-2.2 2.1-2.2z"/><path d="m81.2 26.5c1.2 0 2.1 1 2.1 2.2s-1 2.2-2.1 2.2c-1.2 0-2.1-1-2.1-2.2-0.1-1.2 0.9-2.2 2.1-2.2z"/><path d="m26 26.5c1.2 0 2.1 1 2.1 2.2s-1 2.2-2.1 2.2c-1.2 0-2.1-1-2.1-2.2s0.9-2.2 2.1-2.2z"/><ellipse cx="44.4" cy="28.6" rx="2.1" ry="2.2"/><path d="m136.6 13.2c-1.2 0-2.1-1-2.1-2.2s1-2.2 2.1-2.2c1.2 0 2.1 1 2.1 2.2 0.1 1.2-0.9 2.2-2.1 2.2z"/><path d="m155 13.2c-1.2 0-2.1-1-2.1-2.2s1-2.2 2.1-2.2c1.2 0 2.1 1 2.1 2.2 0.1 1.2-0.9 2.2-2.1 2.2z"/><path d="m26.3 13.2c-1.2 0-2.1-1-2.1-2.2s1-2.2 2.1-2.2c1.2 0 2.1 1 2.1 2.2s-0.9 2.2-2.1 2.2z"/><path d="m81.5 13.2c-1.2 0-2.1-1-2.1-2.2s1-2.2 2.1-2.2c1.2 0 2.1 1 2.1 2.2s-0.9 2.2-2.1 2.2z"/><path d="m63.1 13.2c-1.2 0-2.1-1-2.1-2.2s1-2.2 2.1-2.2c1.2 0 2.1 1 2.1 2.2s-0.9 2.2-2.1 2.2z"/><path d="m44.7 13.2c-1.2 0-2.1-1-2.1-2.2s1-2.2 2.1-2.2c1.2 0 2.1 1 2.1 2.2s-0.9 2.2-2.1 2.2z"/><path d="m118.2 13.2c-1.2 0-2.1-1-2.1-2.2s1-2.2 2.1-2.2c1.2 0 2.1 1 2.1 2.2 0.1 1.2-0.9 2.2-2.1 2.2z"/><path d="m7.9 13.2c-1.2 0-2.1-1-2.1-2.2s1-2.2 2.1-2.2c1.2 0 2.1 1 2.1 2.2 0.1 1.2-0.9 2.2-2.1 2.2z"/><path d="m99.9 13.2c-1.2 0-2.1-1-2.1-2.2s1-2.2 2.1-2.2c1.2 0 2.1 1 2.1 2.2s-1 2.2-2.1 2.2z"/></svg>
            </div>
          </div>
          <div className="reviews-middle">
            <div className="review-card carousel-card">
              <div className="avatar-wrap"><img src={current.img} alt={current.name} className="avatar-img" /></div>
              <blockquote className="review-quote"><span className="q-icon">"</span>{current.quote}<span className="q-icon">"</span></blockquote>
              <h6 className="review-name">{current.name}</h6>
              <p className="review-grade">{current.grade}</p>
              <span className="uni-badge">{current.uni}</span>
              <div className="carousel-dots">{CAROUSEL_REVIEWS.map((_, i) => (<button key={i} className={`dot ${i === carouselIdx ? 'active' : ''}`} onClick={() => setCarouselIdx(i)} />))}</div>
              <button className="carousel-next-btn" onClick={() => setCarouselIdx(i => (i + 1) % CAROUSEL_REVIEWS.length)}><svg width="14" height="14" viewBox="0 0 24 24" fill="white"><path d="M9 18l6-6-6-6" stroke="white" strokeWidth="2.5" fill="none" /></svg></button>
            </div>
          </div>
        </div>
        <div className="reviews-right">
          <h2 className="reviews-heading">Some valuable feedback from our students</h2>
          <p className="reviews-desc">We take pride in unlocking students potential and navigating their passion to careers globally. It give's us immense satisfaction when our students achieve their milestones through EDUTECHEX navigation program. Take a look at some of our students incredible success stories.</p>
          <button className="btn-testimonials">View All Testimonials</button>
        </div>
      </div>
    </section>
  );
};

export default Reviews;