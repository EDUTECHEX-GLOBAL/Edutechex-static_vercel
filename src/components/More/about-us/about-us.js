import React from "react";
import "./about-us.css";

import studentImg1 from "../../../assets/About_US_21.png";
import flagImg    from "../../../assets/falg-test.png";
import logo       from "../../../assets/Edutech-logo.svg";
import aboutImg   from "../../../assets/About_US_2_2.png";

const CurlyArrow = () => (
  <svg
    className="curly-arrow"
    viewBox="0 0 200 80"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M160 10 C140 10, 80 15, 60 40 C45 58, 55 70, 70 65 C85 60, 75 45, 65 55"
      stroke="#1ab5b8"
      strokeWidth="3"
      strokeLinecap="round"
      fill="none"
    />
    <path
      d="M65 55 L55 68 L75 62"
      stroke="#1ab5b8"
      strokeWidth="3"
      strokeLinecap="round"
      strokeLinejoin="round"
      fill="none"
    />
  </svg>
);

const AboutUs = () => {
  return (
    <div className="about-container">

      {/* ════════════════════════════════════════
          SECTION 1 — QUOTES HERO
      ════════════════════════════════════════ */}
      <section className="quotes-section">

        <span className="deco deco-plus-top">+</span>
        <span className="deco deco-star-top">✳</span>
        <span className="deco deco-x-right">✕</span>

        {/* Top full-width centered quote */}
        <div className="top-quote-row">
          <p className="top-quote-text">
            "Passion when equipped with the right education and guidance leads
            to innovation creating wealth and prosperity"
          </p>
          <CurlyArrow />
        </div>

        {/* Bottom: single student image only */}
        <div className="image-center-row">
          <img
            src={studentImg1}
            alt="Students studying"
            className="student-img"
          />
          <div className="wave-bottom"></div>
        </div>

      </section>

      {/* ════════════════════════════════════════
          SECTION 2 — INTRODUCING EDUTECHEX
      ════════════════════════════════════════ */}
      <section className="intro-section">
        <div className="intro-inner">

          <div className="intro-left">
            <h2 className="intro-title">
              Introducing&nbsp;
              <img src={logo} alt="EDUTECHEX" className="inline-logo" />
              &nbsp;?
            </h2>

            <div className="intro-box">
              <p>
                EDUTECHEX represents a critical catalyst in the
                decision-making process when students are at the crossroads
                between passion, education and career.
              </p>
            </div>

            <ul className="intro-list">
              <li>
                <span className="check-icon">✓</span>
                Students overcome challenges of ambiguity through data-driven
                and experiential guidance.
              </li>
              <li>
                <span className="check-icon">✓</span>
                Students gain knowledge and build confidence to successfully
                navigate various career pathways.
              </li>
              <li>
                <span className="check-icon">✓</span>
                Students identify their strengths and capabilities and build
                the right roadmap for their education and profession careers.
              </li>
            </ul>

            {/* aboutImg added here in Section 2 */}
            <div className="intro-image-wrapper">
              <img
                src={aboutImg}
                alt="About EDUTECHEX"
                className="intro-about-img"
              />
            </div>
          </div>

          

        </div>
      </section>

      {/* ════════════════════════════════════════
          SECTION 3 — WHAT IS EDUTECHEX
      ════════════════════════════════════════ */}
      <section className="what-section">
        <div className="what-inner">

          <div className="what-left">
            <img src={flagImg} alt="Growth arrows" className="flag-img" />
          </div>

          <div className="what-right">
            <h2 className="what-title">
              What is&nbsp;
              <img src={logo} alt="EDUTECHEX" className="inline-logo" />
              &nbsp;?
            </h2>
            <p className="what-para">
              EDUTECHEX represents a critical catalyst in the decision-making
              process when students are at the crossroads between passion,
              skills, education and career choices.
            </p>
            <hr className="what-divider" />
            <p className="what-para">
              Our carefully curated platform assesses, counsels and guides
              students on how to integrate their passion, skills, education
              and knowledge for the purpose of innovation and wealth creation.
            </p>
            <hr className="what-divider" />
            <p className="what-para">
              We enable students to join and further propel the leading
              industries that support our economy through holistic career
              counselling, knowledge dissemination and exposure to navigate
              various opportunities available to them. And as industries
              across the board grow, countries too develops holistically.
            </p>
            <p className="what-mission">
              This is EDUTECHEX. This is our passion and mission.
            </p>
          </div>

        </div>
      </section>

      {/* ════════════════════════════════════════
          SECTION 4 — VISION & MISSION
      ════════════════════════════════════════ */}
      <section className="vision-section">
        <span className="deco deco-plus-vision" aria-hidden="true">+</span>
        <span className="deco deco-star-vision" aria-hidden="true">✳</span>

        <div className="vision-inner">
          <h2 className="vision-title">
            <img src={logo} alt="EDUTECHEX" className="inline-logo" />
            &nbsp;Vision &amp; Mission
          </h2>

          <div className="vision-box vision-box--blue">
            <p>
              Empower the youth to identify their true passion through
              education, so that they can be pioneers of holistic progress and
              development, thereby creating personal and economic wealth.
            </p>
          </div>

          <div className="vision-box vision-box--teal">
            <p>
              Guiding students and individuals through the nuances of the
              highly dynamic and competitive world by providing the right
              tools for assessment, credible and pragmatic counselling; future
              forecasting and planning and nurturing a passion for innovation
              to help generate wealth and a roadmap for success.
            </p>
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════
          FOOTER SECTION
      ════════════════════════════════════════ */}
     

    </div>
  );
};

export default AboutUs;