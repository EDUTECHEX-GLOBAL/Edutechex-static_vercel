import React, { useState } from "react";
import "./internships.css";
import { FaSearch, FaArrowRight, FaHeart } from "react-icons/fa";
import bannerImg from "../../../assets/banner-03-edit.png";
import k12Img from "../../../assets/K12.jpg";
import ugImg from "../../../assets/Undergraduate.jpg";

const Internships = () => {
  const [activeTab, setActiveTab] = useState("k12");

  const data = {
    k12: {
      title: "K12",
      description:
        "EduTechEx SAT Program is designed by subject matter experts and senior counselors having more than a decade experience in teaching SAT programs worldwide and counselling thousands of students to get admitted into their dream universities worldwide.",
      image: k12Img,
    },
    undergraduate: {
      title: "UNDERGRADUATE",
      description: "Our curated internships for undergraduate students",
      image: ugImg,
    },
  };

  return (
    <div className="internships-container">

      {/* HERO SECTION */}
      <section className="internships-hero-section">
        <div className="internships-hero-inner">
          <div className="internships-hero-left">

            <div className="tagline-row">
              <div className="tagline-icon">💡</div>
              <span className="tagline-text">
                Navigate Your Future With Us
              </span>
            </div>

            <h1 className="internships-hero-title">
              Get Mapped to Internships in Core Emerging Areas!
            </h1>

            <p className="hero-subtext">
              Find Internships aligned with Industry Requirement
            </p>

            <div className="search-card">
              <div className="search-box">
                <input
                  type="search"
                  placeholder="Job title, keywords, or company"
                />
                <button className="search-btn">
                  <FaSearch />
                </button>
              </div>
            </div>

          </div>

          <div className="internships-hero-right">
            <img src={bannerImg} alt="Internship Banner" />
          </div>
        </div>
      </section>

      {/* SKILLS SECTION */}
      <section className="skills-section">
        <div className="section-header">
          <h2>Enhance Your Skills Through Internships</h2>
          <p>
            Curated Internship Programs for students and individuals aligned
            with their passion and skills
          </p>
        </div>

        <div className="tabs-wrapper">
          <div className="tabs">
            <button
              className={
                activeTab === "k12"
                  ? "internships-tab-btn active"
                  : "internships-tab-btn"
              }
              onClick={() => setActiveTab("k12")}
            >
              K12
            </button>
            <button
              className={
                activeTab === "undergraduate"
                  ? "internships-tab-btn active"
                  : "internships-tab-btn"
              }
              onClick={() => setActiveTab("undergraduate")}
            >
              Undergraduate
            </button>
          </div>
        </div>

        <div className="cards-area">
          <div className="card">
            <div className="card-top">
              <img
                src={data[activeTab].image}
                alt={data[activeTab].title}
              />
            </div>

            <div className="card-body">
              <div className="card-meta">
                <span className="badge">All level</span>
                <FaHeart className="heart-icon" />
              </div>

              <h4 className="card-title">
                Internships for {data[activeTab].title}
              </h4>

              <p className="card-desc">
                {data[activeTab].description}
              </p>

              <div className="card-footer-row">
                <button className="arrow-btn">
                  <FaArrowRight />
                </button>
              </div>
            </div>
          </div>
        </div>

      </section>
    </div>
  );
};

export default Internships;