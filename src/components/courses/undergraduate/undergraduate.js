// =============================================
// Undergraduate.js — Fully Updated to match K12 design
// =============================================

import React, { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";

import { coursesData } from "../courses";
import "./undergraduate.css";
import { Helmet } from "react-helmet-async";

// ── Image loader from assets/buycourses ───────────────────
const ugImages = require.context('../../../assets/buycourses', false);
function getUGImage(imagePath) {
  if (!imagePath) return null;
  const filename = imagePath.split('/').pop();
  try { return ugImages(`./${filename}`); }
  catch { return null; }
}

// ── Constants ──────────────────────────────────────────────
const MENU_NAME = "Undergraduate";
const MENU_ID = "2";

const streams = ["B.Tech", "B.A", "B.Sc", "B.Com", "B.Arch"];

const popularCategories = [
  { name: "K12", count: 8 },
  { name: "Postgraduate", count: 1 },
];

// ── Helpers ────────────────────────────────────────────────
function buildCardLink(course) {
  return `${course.link}${MENU_ID}/${MENU_NAME}/${course.id}/${encodeURIComponent(course.title)}`;
}



// ── Course Card ────────────────────────────────────────────
function CourseCard({ course, navigate }) {
  const link = buildCardLink(course);
  const imgSrc = getUGImage(course.image) || course.image;

  return (
    <div className="ug-card" role="article">
      <img
        src={imgSrc}
        alt={course.title}
        className="ug-card-img"
        onError={e => { e.target.onerror = null; e.target.src = ''; }}
      />

      <div className="ug-card-body">
        <div className="ug-card-top">
          <span className="ug-badge">All level</span>
          <button className="ug-fav" aria-label="Add to favourites">&#9825;</button>
        </div>

        <span
          className="ug-card-title"
          onClick={() => navigate(link)}
          style={{ cursor: "pointer" }}
        >
          {course.title}
        </span>

        <p className="ug-card-desc">{course.details || ""}</p>


      </div>

      <div className="ug-card-footer">
        {course.price && (
          <div className="ug-price-wrap">
            <div className="ug-price-line">
              <span className="ug-price-label">Starting</span>
              <span className="ug-price">&#8377; {course.price}</span>
              {course.discount && (
                <span className="ug-price-original">&#8377; {course.discount}</span>
              )}
            </div>
            {course.discount && (
              <span className="ug-discount-badge">20% off</span>
            )}
          </div>
        )}
        <span className="ug-arrow-btn" aria-label={`View ${course.title}`}>
          &#10140;
        </span>
      </div>
    </div>
  );
}

// ── Counselling Modal ──────────────────────────────────────
const INIT_FORM = {
  name: "", email: "", phone: "", city: "", grade: "",
  counselling: "", study: "",
};

function CounsellingModal({ isOpen, onClose }) {
  const [form, setForm] = useState(INIT_FORM);
  const [, setErrors] = useState({});
  const [errors, setErrState] = useState({});
  const [success, setSuccess] = useState(false);
  const timerRef = useRef(null);

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [isOpen]);

  useEffect(() => () => clearTimeout(timerRef.current), []);

  function handleClose() {
    clearTimeout(timerRef.current);
    setForm(INIT_FORM);
    setErrState({});
    setErrors({});
    setSuccess(false);
    onClose();
  }

  function handleOverlayClick(e) {
    if (e.target === e.currentTarget) handleClose();
  }

  function validate() {
    const required = ["name", "email", "phone", "city", "grade"];
    const newErrors = {};
    required.forEach(field => {
      if (!form[field].trim()) newErrors[field] = true;
    });
    setErrState(newErrors);
    return Object.keys(newErrors).length === 0;
  }

  function handleChange(e) {
    const { name, value } = e.target;
    setForm(prev => ({ ...prev, [name]: value }));
    if (errors[name]) setErrState(prev => ({ ...prev, [name]: false }));
  }

  function handleSubmit(e) {
    e.preventDefault();
    if (!validate()) return;
    setSuccess(true);
    timerRef.current = setTimeout(() => handleClose(), 2800);
  }

  if (!isOpen) return null;

  return (
    <div
      className="ug-modal-overlay active"
      role="dialog"
      aria-modal="true"
      onClick={handleOverlayClick}
    >

    </div>
  );
}

// ── Main Undergraduate Component ───────────────────────────
export default function Undergraduate() {
  const navigate = useNavigate();
  const courses = coursesData.undergraduate;

  const [search, setSearch] = useState("");
  const [modalOpen, setModalOpen] = useState(false);

  const filtered = search.trim()
    ? courses.filter(c =>
      c.title.toLowerCase().includes(search.toLowerCase()) ||
      (c.details && c.details.toLowerCase().includes(search.toLowerCase()))
    )
    : courses;

  function handleCategoryClick(e, name) {
    e.preventDefault();
    if (name === "K12") navigate("/courses/k12");
    else if (name === "Postgraduate") navigate("/courses/postgraduate");
  }

  return (
    <>
      <Helmet>
        <title>Undergraduate Courses for Students | EduTechEx</title>
        <meta
          name="description"
          content="Explore undergraduate programs including B.Tech, B.Sc, B.Com and more. Discover the right academic path with EduTechEx."
        />
        <link rel="canonical" href="https://www.edutechex.com/courses/undergraduate" />
      </Helmet>
      {/* ===== PAGE BANNER ===== */}
      <section className="ug-banner">
        <div className="ug-container">
          <h1>Undergraduate Courses</h1>
          <ul className="ug-breadcrumb">
            <li>
              <span onClick={() => navigate("/")} style={{ cursor: "pointer" }}>
                Home
              </span>
            </li>
            <li className="active">Courses</li>
          </ul>
        </div>
      </section>

      {/* ===== MAIN CONTENT ===== */}
      <section className="ug-section">
        <div className="ug-container">
          <div className="ug-layout">

            {/* ---- Left: Grid ---- */}
            <div>
              <div className="ug-search-wrap">
                <div className="ug-search-box">

                  <input
                    type="text"
                    placeholder="Find your course"
                    autoComplete="off"
                    value={search}
                    onChange={e => setSearch(e.target.value)}
                  />
                </div>
              </div>

              <div className="ug-grid">
                {filtered.length === 0 ? (
                  <div className="ug-no-results">
                    <p>No courses found matching "<strong>{search}</strong>".</p>
                  </div>
                ) : (
                  filtered.map(course => (
                    <CourseCard key={course.id} course={course} navigate={navigate} />
                  ))
                )}
              </div>
            </div>

            {/* ---- Right: Sidebar ---- */}
            <aside className="ug-sidebar">

              <div className="ug-sidebar-card">
                <h4>Popular Category</h4>
                <ul className="ug-category-list">
                  {popularCategories.map(cat => (
                    <li key={cat.name}>
                      <a
                        href="#"
                        className="ug-category-link"
                        onClick={e => handleCategoryClick(e, cat.name)}
                      >
                        {cat.name}
                      </a>
                      <span className="ug-category-count">({cat.count})</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="ug-sidebar-card">
                <h4>Stream</h4>
                <div className="ug-tag-list">
                  {streams.map(item => (
                    <span key={item} className="ug-tag">{item}</span>
                  ))}
                </div>
              </div>

              <div className="ug-counselling-cta">
                <h3>Schedule a Counselling Session!</h3>
                <p>
                  Reach out to our expert Counselors who can help you discover your potential,
                  navigate with selecting the right curriculum, stream, course, industry and job.
                </p>
                <button
                  className="ug-cta-btn"
                  onClick={() => setModalOpen(true)}
                >
                  Register for Counselling
                </button>
              </div>

            </aside>
          </div>
        </div>
      </section>

      {/* ===== MODAL ===== */}
      <CounsellingModal isOpen={modalOpen} onClose={() => setModalOpen(false)} />

    </>
  );
}
