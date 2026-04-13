import React, { useState, useEffect } from "react";
import "./pariksha.css";

import mockTestSVG from "../../assets/Mock Test.svg";
import dashboardSVG from "../../assets/Dashboard.svg";
import assessmentSVG from "../../assets/Assessment.svg";
import counsellingSVG from "../../assets/Counselling.svg";
import growthSVG from "../../assets/Growth.svg";
import pariImg from "../../assets/pari.JPG";

const aboutItems = [
  "K12 Curriculum",
  "Indian & Global Tests",
  "Coding",
  "Recruitment Assistance",
  "Skill Development",
  "HR & Talent Acquisition",
];

const carouselImages = [
  mockTestSVG,
  dashboardSVG,
  assessmentSVG,
  counsellingSVG,
  growthSVG,
];

const AUTO_SLIDE_INTERVAL = 3000;

const Pariksha = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % carouselImages.length);
    }, AUTO_SLIDE_INTERVAL);
    return () => clearInterval(interval);
  }, []);

  const nextSlide = () =>
    setActiveIndex((prev) => (prev + 1) % carouselImages.length);

  const prevSlide = () =>
    setActiveIndex(
      (prev) => (prev - 1 + carouselImages.length) % carouselImages.length
    );

  const goToSlide = (index) => setActiveIndex(index);

  return (
    <div className="pariksha-page">

      {/* HERO SECTION */}
      <section className="pariksha-hero">
        <div className="pariksha-hero-left">
          <h1 className="pariksha-hero-title">
            Gamified Assessment<br />
            Experience with<br />
            <span className="accent">Counselling and Learning.</span>
          </h1>

          <p className="pariksha-hero-desc">
            The vision of the platform is to offer assessments to people from
            all walks of the life globally right from a precise psychometric
            test mapping one's personality to navigating people towards their
            true passionate academic and non-academic goals.
          </p>

          <button className="demo-btn">Get Demo</button>
        </div>

        <div className="pariksha-hero-right">
          <div className="carousel-wrapper">
            <button className="carousel-control-prev" onClick={prevSlide} aria-label="Previous">
              <span className="prev-icon">
                <i className="fas fa-chevron-left"></i>
              </span>
            </button>

            <img
              src={carouselImages[activeIndex]}
              alt="Slideshow"
              className="pariksha-hero-svg"
            />

            <div className="carousel-dots">
              {carouselImages.map((_, idx) => (
                <button
                  key={idx}
                  className={`carousel-dot ${idx === activeIndex ? "active" : ""}`}
                  onClick={() => goToSlide(idx)}
                  aria-label={`Slide ${idx + 1}`}
                />
              ))}
            </div>

            <button className="carousel-control-next" onClick={nextSlide} aria-label="Next">
              <span className="next-icon">
                <i className="fas fa-chevron-right"></i>
              </span>
            </button>
          </div>
        </div>
      </section>

      {/* ABOUT SECTION */}
      <section className="pariksha-about-section">
        <div className="pariksha-why-card-wrapper">
          <img
            src={pariImg}
            alt="Why Choose Pariksha"
            className="pariksha-pari-img"
          />
        </div>

        <div className="pariksha-about-content">
          <h2>
            About{" "}
            <span className="pariksha-blue-bold">EDUTECHEX</span>{" "}
            <span className="pariksha-green-text">Pariksha</span>
          </h2>

          <p>
            Pariksha is One Platform for assessments based learning for Talent
            Assessment Platform to businesses around the world. Help Students,
            Individuals and Professionals navigate and advance in their careers,
            Provides quality assessments, efficient testing procedures, Skill
            Assessment Platform mapping right candidate to right job.
          </p>

          <div className="pariksha-about-list">
            {aboutItems.map((label) => (
              <div className="pariksha-about-item" key={label}>
                <span className="pariksha-check-icon">
                  <i className="fas fa-check"></i>
                </span>
                <span>{label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
};

export default Pariksha;