import React from "react";
import "./information.css";
import itEdit from "../../../assets/it-edit.png";
import { Helmet } from "react-helmet-async";

const Information = () => {
return (
  <>
    <Helmet>
      <title>Information Technology Solutions | EduTechEx</title>
      <meta
        name="description"
        content="Discover EduTechEx IT solutions and deep-tech edtech products designed to transform learning experiences using advanced technologies."
      />
      <link
        rel="canonical"
        href="https://www.edutechex.com/consulting/information-technology"
      />
    </Helmet>

    <div className="info-container">

      {/* ── SECTION 1: HERO ── */}
      <section className="info-hero">
        <div className="info-hero-inner">
          <div className="info-hero-left">
            <div className="tagline-row">
              <div className="tagline-icon">
                <i className="bi bi-lightbulb"></i>
              </div>
              <span className="tagline-text">Navigate Your Future With Us</span>
            </div>
            <h1 className="info-hero-title">
              Deep Tech EDUTECH Products for Organizations and Industry
            </h1>
            <p className="info-hero-sub">
              Transforming the learning experience through cutting edge
              technologies in edtech
            </p>
          </div>
          <div className="info-hero-right">
            <img src={itEdit} alt="Deep Tech Edutech" />
          </div>
        </div>
      </section>

      {/* ── SECTION 2: OUR WORKS PROCESS ── */}
      <section className="works-section">
        <h2 className="works-title">Our Works Process</h2>
        <div className="works-grid">
          <div className="works-card">
            <span>Create A Plan</span>
          </div>
          <div className="works-card">
            <span>Start Working</span>
          </div>
          <div className="works-card">
            <span>Publish Business</span>
          </div>
        </div>
      </section>

      {/* ── SECTION 3: BRINGING NEW IT SOLUTIONS ── */}
      <section className="it-solutions-section">
        <div className="it-solutions-inner">
          <div className="it-solutions-left">
            <img
              src="https://quiety.themetags.com/assets/img/screen/widget-12.png"
              alt="IT Business Solutions"
            />
          </div>
          <div className="it-solutions-right">
            <h2>Bringing New IT Business Solutions And Ideas</h2>
          </div>
        </div>
      </section>

      {/* ── SECTION 4: WE CUSTOMIZE YOUR SOFTWARE ── */}
      <section className="customize-section">
        <h2 className="customize-title">
          We Customize Your Software to The Smart Ways
        </h2>
        <div className="customize-grid">

          {/* Row 1 */}
          <div className="customize-card">
            <div className="customize-icon-wrap">
              <img
                src="https://img.icons8.com/pastel-glyph/64/000000/verified-scroll--v1.png"
                alt="Well Organization"
              />
            </div>
            <span className="customize-label">Well Organization</span>
          </div>

          <div className="customize-card">
            <div className="customize-icon-wrap">
              <img
                src="https://img.icons8.com/external-xnimrodx-lineal-xnimrodx/74/000000/external-responsive-web-hosting-xnimrodx-lineal-xnimrodx.png"
                alt="Responsive Design"
              />
            </div>
            <span className="customize-label">Responsive Design</span>
          </div>

          <div className="customize-card">
            <div className="customize-icon-wrap">
              <img
                src="https://img.icons8.com/carbon-copy/100/000000/security-configuration.png"
                alt="High Security"
              />
            </div>
            <span className="customize-label">High Security</span>
          </div>

          {/* Row 2 */}
          <div className="customize-card">
            <div className="customize-icon-wrap">
              <img
                src="https://img.icons8.com/external-parzival-1997-detailed-outline-parzival-1997/64/000000/external-technology-artificial-intelligence-and-machine-learning-parzival-1997-detailed-outline-parzival-1997.png"
                alt="Creative Design"
              />
            </div>
            <span className="customize-label">Creative Design</span>
          </div>

          <div className="customize-card">
            <div className="customize-icon-wrap">
              <img
                src="https://img.icons8.com/external-vitaliy-gorbachev-lineal-vitaly-gorbachev/60/000000/external-badge-cyber-monday-vitaliy-gorbachev-lineal-vitaly-gorbachev.png"
                alt="Clean Development"
              />
            </div>
            <span className="customize-label">Clean Development</span>
          </div>

          <div className="customize-card">
            <div className="customize-icon-wrap">
              <img
                src="https://img.icons8.com/external-xnimrodx-lineal-xnimrodx/64/000000/external-analytics-infographic-and-chart-xnimrodx-lineal-xnimrodx.png"
                alt="Advanced Analytics"
              />
            </div>
            <span className="customize-label">Advanced Analytics</span>
          </div>

        </div>
      </section>

      {/* ── SECTION 5: ADVANCED ANALYTICS ── */}
      <section className="analytics-section">
        <div className="analytics-inner">
          <div className="analytics-left">
            <h2>Advanced Analytics,<br />Understand Business</h2>
          </div>
          <div className="analytics-right">
            <img
              src="https://quiety.themetags.com/assets/img/screen/widget-11.png"
              alt="Advanced Analytics"
            />
          </div>
        </div>
      </section>

    </div>
      </>
  );
};

export default Information;