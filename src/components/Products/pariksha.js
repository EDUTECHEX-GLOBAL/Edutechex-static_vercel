import React from "react";
import "./pariksha.css";

import mockTestSVG from "../../assets/Mock Test.svg";
import pariImg from "../../assets/pari.JPG";

const aboutItems = [
  "K12 Curriculum",
  "Indian & Global Tests",
  "Coding",
  "Recruitment Assistance",
  "Skill Development",
  "HR & Talent Acquisition",
];

const Pariksha = () => {
  return (
    <div className="pariksha-page">

      {/* HERO SECTION */}
      <section className="pariksha-hero">
        <div className="pariksha-hero-left">
          <h1 className="pariksha-hero-title">
            Gamified Assessment Experience with{" "}
            <span className="accent">Counselling</span>{" "}
            and Learning.
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
          <img
            src={mockTestSVG}
            alt="Mock Test Illustration"
            className="pariksha-hero-svg"
          />
        </div>
      </section>

      {/* ABOUT SECTION */}
      <section className="about-section">
        <div className="why-card-wrapper">
          <img
            src={pariImg}
            alt="Why Choose Pariksha"
            className="pari-img"
          />
        </div>

        <div className="about-content">
          <h2>
            About{" "}
            <span className="blue-bold">EDUTECHEX</span>{" "}
            <span className="green-text">Pariksha</span>
          </h2>

          <p>
            Pariksha is One Platform for assessments based learning for Talent
            Assessment Platform to businesses around the world. Help Students,
            Individuals and Professionals navigate and advance in their careers,
            Provides quality assessments, efficient testing procedures, Skill
            Assessment Platform mapping right candidate to right job.
          </p>

          <div className="about-list">
            {aboutItems.map((label) => (
              <div className="about-item" key={label}>
                <span className="check-icon">✔</span>
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