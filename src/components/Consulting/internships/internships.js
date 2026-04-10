import React, { useState } from "react";
import "./internships.css";
import { FaSearch, FaArrowRight } from "react-icons/fa";
import { FiHeart } from "react-icons/fi";
import { BsLightbulb } from "react-icons/bs";
import bannerImg from "../../../assets/banner-03-edit.png";
import k12Img from "../../../assets/K12.jpg";
import ugImg from "../../../assets/Undergraduate.jpg";

const Internships = () => {
  const [activeTab, setActiveTab] = useState("k12");

  const data = {
    k12: {
      title: "K12",
      menuId: 1,
      items: [
        {
          id: 1,
          image: k12Img,
          title: "Internships for School Students",
          desc: "EduTechEx SAT Program is designed by subject matter experts and senior counselors having more than a decade experience in teaching SAT programs worldwide and counselling thousands of students to get admitted into their dream universities worldwide.",
          rating: "5.0/5.0",
        },
      ],
    },
    undergraduate: {
      title: "Undergraduate",
      menuId: 2,
      items: [
        {
          id: 1,
          image: ugImg,
          title: "Internships for Undergraduates",
          desc: "Our curated internships for undergraduate students aligned with their passion and skills in core emerging areas.",
          rating: "5.0/5.0",
        },
      ],
    },
  };

  const currentData = data[activeTab];

  return (
    <div className="internships-container">

      {/* ── HERO SECTION ── */}
      <section className="internships-hero-section">
        <div className="internships-hero-inner">

          <div className="internships-hero-left">
            {/* Tagline */}
            <div className="tagline-row">
              <div className="tagline-icon">
                <BsLightbulb />
              </div>
              <span className="tagline-text">Navigate Your Future With Us</span>
            </div>

            {/* Title */}
            <h1 className="internships-hero-title">
              Get Mapped to Internships in Core Emerging Areas!
            </h1>

            {/* Subtext */}
            <p className="internships-hero-subtext">
              Find Internships aligned with Industry Requirement
            </p>

            {/* Search */}
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

          {/* Hero Image */}
          <div className="internships-hero-right">
            <img src={bannerImg} alt="Internship Banner" />
          </div>
        </div>
      </section>

      {/* ── SKILLS SECTION ── */}
      <section className="skills-section">
        <div className="section-header">
          <h2>Enhance Your Skills Through Internships</h2>
          <p>
            Curated Internship Programs for students and individuals aligned
            with their passion and skills
          </p>
        </div>

        {/* Tabs */}
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

        {/* Cards */}
        <div className="cards-area">
          {currentData.items.map((item) => (
            <div className="card" key={item.id}>
              {/* Image */}
              <div className="card-top">
                <img src={item.image} alt={item.title} />
              </div>

              {/* Body */}
              <div className="card-body">
                <div className="card-meta">
                  <span className="badge">All level</span>
                  <FiHeart className="heart-icon" />
                </div>

                <h5 className="card-title">{item.title}</h5>

                <p className="card-desc">{item.desc}</p>

                <div className="rating-row">
                  <span className="stars">★★★★★</span>
                  <span className="rating-score">{item.rating}</span>
                </div>
              </div>

              {/* Footer */}
              <div className="card-footer">
                <hr className="card-divider" />
                <div className="card-footer-row">
                  <button className="arrow-btn">
                    <FaArrowRight />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Internships;