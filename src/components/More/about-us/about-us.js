import React from "react";
import "./about-us.css";

import studentImg1 from "../../../assets/About_US_21.png";
import flagImg    from "../../../assets/falg-test.png";
import logo       from "../../../assets/Edutech-logo.svg";
import aboutImg   from "../../../assets/About_US_2_2.png";
import storyImg   from "../../../assets/About_US_story.png";

const CurlyArrow = () => (
  <svg
    className="curly-arrow"
    width="200px"
    height="80px"
    viewBox="0 0 200 80"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      fill="#1a9e8f"
      d="m181.6 6.7c-0.1 0-0.2-0.1-0.3 0-2.5-0.3-4.9-1-7.3-1.4-2.7-0.4-5.5-0.7-8.2-0.8-1.4-0.1-2.8-0.1-4.1-0.1-0.5 0-0.9-0.1-1.4-0.2-0.9-0.3-1.9-0.1-2.8-0.1-5.4 0.2-10.8 0.6-16.1 1.4-2.7 0.3-5.3 0.8-7.9 1.3-0.6 0.1-1.1 0.3-1.8 0.3-0.4 0-0.7-0.1-1.1-0.1-1.5 0-3 0.7-4.3 1.2-3 1-6 2.4-8.8 3.9-2.1 1.1-4 2.4-5.9 3.9-1 0.7-1.8 1.5-2.7 2.2-0.5 0.4-1.1 0.5-1.5 0.9s-0.7 0.8-1.1 1.2c-1 1-1.9 2-2.9 2.9-0.4 0.3-0.8 0.5-1.2 0.5-1.3-0.1-2.7-0.4-3.9-0.6-0.7-0.1-1.2 0-1.8 0-3.1 0-6.4-0.1-9.5 0.4-1.7 0.3-3.4 0.5-5.1 0.7-5.3 0.7-10.7 1.4-15.8 3.1-4.6 1.6-8.9 3.8-13.1 6.3-2.1 1.2-4.2 2.5-6.2 3.9-0.9 0.6-1.7 0.9-2.6 1.2s-1.7 1-2.5 1.6c-1.5 1.1-3 2.1-4.6 3.2-1.2 0.9-2.7 1.7-3.9 2.7-1 0.8-2.2 1.5-3.2 2.2-1.1 0.7-2.2 1.5-3.3 2.3-0.8 0.5-1.7 0.9-2.5 1.5-0.9 0.8-1.9 1.5-2.9 2.2 0.1-0.6 0.3-1.2 0.4-1.9 0.3-1.7 0.2-3.6 0-5.3-0.1-0.9-0.3-1.7-0.8-2.4s-1.5-1.1-2.3-0.8c-0.2 0-0.3 0.1-0.4 0.3s-0.1 0.4-0.1 0.6c0.3 3.6 0.2 7.2-0.7 10.7-0.5 2.2-1.5 4.5-2.7 6.4-0.6 0.9-1.4 1.7-2 2.6s-1.5 1.6-2.3 2.3c-0.2 0.2-0.5 0.4-0.6 0.7s0 0.7 0.1 1.1c0.2 0.8 0.6 1.6 1.3 1.8 0.5 0.1 0.9-0.1 1.3-0.3 0.9-0.4 1.8-0.8 2.7-1.2 0.4-0.2 0.7-0.3 1.1-0.6 1.8-1 3.8-1.7 5.8-2.3 4.3-1.1 9-1.1 13.3 0.1 0.2 0.1 0.4 0.1 0.6 0.1 0.7-0.1 0.9-1 0.6-1.6-0.4-0.6-1-0.9-1.7-1.2-2.5-1.1-4.9-2.1-7.5-2.7-0.6-0.2-1.3-0.3-2-0.4-0.3-0.1-0.5 0-0.8-0.1s-0.9 0-1.1-0.1-0.3 0-0.3-0.2c0-0.4 0.7-0.7 1-0.8 0.5-0.3 1-0.7 1.5-1l5.4-3.6c0.4-0.2 0.6-0.6 1-0.9 1.2-0.9 2.8-1.3 4-2.2 0.4-0.3 0.9-0.6 1.3-0.9l2.7-1.8c1-0.6 2.2-1.2 3.2-1.8 0.9-0.5 1.9-0.8 2.7-1.6 0.9-0.8 2.2-1.4 3.2-2 1.2-0.7 2.3-1.4 3.5-2.1 4.1-2.5 8.2-4.9 12.7-6.6 5.2-1.9 10.6-3.4 16.2-4 5.4-0.6 10.8-0.3 16.2-0.5h0.5c1.4-0.1 2.3-0.1 1.7 1.7-1.4 4.5 1.3 7.5 4.3 10 3.4 2.9 7 5.7 11.3 7.1 4.8 1.6 9.6 3.8 14.9 2.7 3-0.6 6.5-4 6.8-6.4 0.2-1.7 0.1-3.3-0.3-4.9-0.4-1.4-1-3-2.2-3.9-0.9-0.6-1.6-1.6-2.4-2.4-0.9-0.8-1.9-1.7-2.9-2.3-2.1-1.4-4.2-2.6-6.5-3.5-3.2-1.3-6.6-2.2-10-3-0.8-0.2-1.6-0.4-2.5-0.5-0.2 0-1.3-0.1-1.3-0.3-0.1-0.2 0.3-0.4 0.5-0.6 0.9-0.8 1.8-1.5 2.7-2.2 1.9-1.4 3.8-2.8 5.8-3.9 2.1-1.2 4.3-2.3 6.6-3.2 1.2-0.4 2.3-0.8 3.6-1 0.6-0.2 1.2-0.2 1.8-0.4 0.4-0.1 0.7-0.3 1.1-0.5 1.2-0.5 2.7-0.5 3.9-0.8 1.3-0.2 2.7-0.4 4.1-0.7 2.7-0.4 5.5-0.8 8.2-1.1 3.3-0.4 6.7-0.7 10-1 7.7-0.6 15.3-0.3 23 1.3 4.2 0.9 8.3 1.9 12.3 3.6 1.2 0.5 2.3 1.1 3.5 1.5 0.7 0.2 1.3 0.7 1.8 1.1 0.7 0.6 1.5 1.1 2.3 1.7 0.2 0.2 0.6 0.3 0.8 0.2 0.1-0.1 0.1-0.2 0.2-0.4 0.1-0.9-0.2-1.7-0.7-2.4-0.4-0.6-1-1.4-1.6-1.9-0.8-0.7-2-1.1-2.9-1.6-1-0.5-2-0.9-3.1-1.3-2.5-1.1-5.2-2-7.8-2.8-1-0.8-2.4-1.2-3.7-1.4zm-64.4 25.8c4.7 1.3 10.3 3.3 14.6 7.9 0.9 1 2.4 1.8 1.8 3.5-0.6 1.6-2.2 1.5-3.6 1.7-4.9 0.8-9.4-1.2-13.6-2.9-4.5-1.7-8.8-4.3-11.9-8.3-0.5-0.6-1-1.4-1.1-2.2 0-0.3 0-0.6-0.1-0.9s-0.2-0.6 0.1-0.9c0.2-0.2 0.5-0.2 0.8-0.2 2.3-0.1 4.7 0 7.1 0.4 0.9 0.1 1.6 0.6 2.5 0.8 1.1 0.4 2.3 0.8 3.4 1.1z"
    />
  </svg>
);

const CheckIcon = () => (
  <span className="check-icon">
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
      <path
        d="M12 2L14.5 4.5L18 3.5L19 7L22 8.5L21 12L22 15.5L19 17L18 20.5L14.5 19.5L12 22L9.5 19.5L6 20.5L5 17L2 15.5L3 12L2 8.5L5 7L6 3.5L9.5 4.5L12 2Z"
        fill="#10b981"
      />
      <path
        d="M8 12L10.5 14.5L16 9"
        stroke="white"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  </span>
);

const AboutUs = () => {
  return (
    <div className="about-container">

      {/* ════════════════════════════════════════
          SECTION 1 — QUOTES HERO
      ════════════════════════════════════════ */}
      <section className="quotes-section">
        <span className="deco deco-plus-top">+</span>
        <span className="deco deco-star-top">✸</span>
        <span className="deco deco-x-right">✕</span>

        <div className="top-quote-row">
          <p className="top-quote-text">
            "Passion when equipped with the right education and guidance leads
            to innovation creating wealth and prosperity"
          </p>
          <CurlyArrow />
        </div>

        <div className="image-center-row">
          <img
            src={studentImg1}
            alt="Students studying"
            className="student-img"
          />
          <div className="wave-bottom"></div>
        </div>
      </section>

      {/* ════ SECTION 2 — INTRODUCING EDUTECHEX ════ */}
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
                <span className="about-check-icon">✓</span>
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
          </div>

          <div className="intro-right">
            <img
              src={aboutImg}
              alt="EDUTECHEX Unlock Your Potential"
              className="intro-about-img"
            />
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
     <h2 className="what-title what-title--question">
  What is&nbsp;
  <img src={logo} alt="EDUTECHEX" className="inline-logo" />
  <img src={questionImg} alt="?" className="question-img" />
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
        <span className="deco deco-star-vision" aria-hidden="true">✸</span>

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
          SECTION 5 — MEET OUR TEAM + OUR STORY
      ════════════════════════════════════════ */}
      <section className="team-section">
        <div className="team-inner">

          <h2 className="team-title">Meet Our Team</h2>

          <div className="team-body">

            {/* LEFT — Our Story text */}
            <div className="team-story">
              <h3 className="story-title">Our Story</h3>
              <p className="story-para">
                Having gained global experience at top universities and
                companies across the globe, the EDUTECHEX founders discovered
                that the biggest challenge for India's multi-disciplinary
                talent pool was the mobilisation of people to explore their
                true passions and creating individual roadmaps with navigation
                for success.
              </p>
              <p className="story-para">
                The founders believe that timely intervention and curated
                guidance can help to create an infrastructure for innovation
                to thrive across domains and allow for the country and its
                industries of economy to grow together.
              </p>
              <p className="story-para">
                The end goal is to provide an ecosystem where passion is not
                just preserved, but discovered early and provided with the
                right{" "}
                <strong className="story-highlight">
                  education and navigation, leading to innovation and thereby
                  creating wealth.
                </strong>
              </p>
            </div>

            {/* RIGHT — single image (already contains 4-grid layout) */}
            <div className="team-grid">
              <img src={storyImg} alt="Our Team" className="team-story-img" />
            </div>

          </div>
        </div>
      </section>

    </div>
  );
};

export default AboutUs;