// =============================================
// Postgraduate.js — Updated to match K12/Undergraduate design
// =============================================

import React, { useState, useEffect, useRef } from 'react';
import { coursesData } from '../courses';
import './postgraduate.css';

// ── Image loader from assets/buycourses ───────────────────
const pgImages = require.context('../../../assets/buycourses', false);
function getPGImage(imagePath) {
  if (!imagePath) return null;
  const filename = imagePath.split('/').pop();
  try { return pgImages(`./${filename}`); }
  catch { return null; }
}

// ── Constants ──────────────────────────────────────────────
const MENU_NAME = 'Postgraduate';
const MENU_ID   = '3';

const streams = ['M.Tech', 'M.A', 'MBA', 'PGDM', 'MCA'];

const popularCategories = [
  { name: 'K12',           count: 8 },
  { name: 'Undergraduate', count: 2 },
];

// ── Helpers ────────────────────────────────────────────────
function buildCardLink(course) {
  return `${course.link}${MENU_ID}/${MENU_NAME}/${course.id}/${encodeURIComponent(course.title)}`;
}



// ── Course Card ────────────────────────────────────────────
function CourseCard({ course }) {
  const link   = buildCardLink(course);
  const imgSrc = getPGImage(course.image) || course.image;

  return (
    <div className="pg-card" role="article">
      <img
        src={imgSrc}
        alt={course.title}
        className="pg-card-img"
        onError={e => { e.target.onerror = null; e.target.src = ''; }}
      />

      <div className="pg-card-body">
        <div className="pg-card-top">
          <span className="pg-badge">All level</span>
          <button className="pg-fav" aria-label="Add to favourites">&#9825;</button>
        </div>

        <a href={link} className="pg-card-title">{course.title}</a>
        <p className="pg-card-desc">{course.details || ''}</p>

        
      </div>

      <div className="pg-card-footer">
        {course.price && (
          <div className="pg-price-wrap">
            <div className="pg-price-line">
              <span className="pg-price-label">Starting</span>
              <span className="pg-price">&#8377; {course.price}</span>
              {course.discount && (
                <span className="pg-price-original">&#8377; {course.discount}</span>
              )}
            </div>
            {course.discount && (
              <span className="pg-discount-badge">20% off</span>
            )}
          </div>
        )}
        <a href={link} className="pg-arrow-btn" aria-label={`View ${course.title}`}>&#10140;</a>
      </div>
    </div>
  );
}

// ── Counselling Modal ──────────────────────────────────────
const INIT_FORM = {
  name: '', email: '', phone: '', city: '', grade: '',
  counselling: '', study: '',
};

function CounsellingModal({ isOpen, onClose }) {
  const [form, setForm]       = useState(INIT_FORM);
  const [errors, setErrors]   = useState({});
  const [success, setSuccess] = useState(false);
  const timerRef              = useRef(null);

  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [isOpen]);

  useEffect(() => () => clearTimeout(timerRef.current), []);

  function handleClose() {
    clearTimeout(timerRef.current);
    setForm(INIT_FORM);
    setErrors({});
    setSuccess(false);
    onClose();
  }

  function handleOverlayClick(e) {
    if (e.target === e.currentTarget) handleClose();
  }

  function validate() {
    const required = ['name', 'email', 'phone', 'city', 'grade'];
    const newErrors = {};
    required.forEach(field => {
      if (!form[field].trim()) newErrors[field] = true;
    });
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  }

  function handleChange(e) {
    const { name, value } = e.target;
    setForm(prev => ({ ...prev, [name]: value }));
    if (errors[name]) setErrors(prev => ({ ...prev, [name]: false }));
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
      className="pg-modal-overlay active"
      role="dialog"
      aria-modal="true"
      onClick={handleOverlayClick}
    >
      
    </div>
  );
}

// ── Main Postgraduate Component ────────────────────────────
export default function Postgraduate() {
  const courses = coursesData.postgraduate;

  const [search,    setSearch]    = useState('');
  const [modalOpen, setModalOpen] = useState(false);

  const filtered = search.trim()
    ? courses.filter(c =>
        c.title.toLowerCase().includes(search.toLowerCase()) ||
        (c.details && c.details.toLowerCase().includes(search.toLowerCase()))
      )
    : courses;

  function handleCategoryClick(e, name) {
    e.preventDefault();
    if (name === 'K12')           window.location.href = '#/course-grid/1/K12';
    else if (name === 'Undergraduate') window.location.href = '#/course-grid/2/Undergraduate';
  }

  return (
    <>
      {/* ===== PAGE BANNER ===== */}
      <section className="pg-banner">
        <div className="pg-container">
          <h1>Postgraduate Courses</h1>
          <ul className="pg-breadcrumb">
            <li><a href="/home">Home</a></li>
            <li className="active">Courses</li>
          </ul>
        </div>
      </section>

      {/* ===== MAIN CONTENT ===== */}
      <section className="pg-section">
        <div className="pg-container">
          <div className="pg-layout">

            {/* ---- Left: Grid ---- */}
            <div>
              <div className="pg-search-wrap">
                <div className="pg-search-box">
                  
                  <input
                    type="text"
                    placeholder="Find your course"
                    autoComplete="off"
                    value={search}
                    onChange={e => setSearch(e.target.value)}
                  />
                </div>
              </div>

              <div className="pg-grid">
                {filtered.length === 0 ? (
                  <div className="pg-no-results">
                    <p>No courses found matching "<strong>{search}</strong>".</p>
                  </div>
                ) : (
                  filtered.map(course => (
                    <CourseCard key={course.id} course={course} />
                  ))
                )}
              </div>
            </div>

            {/* ---- Right: Sidebar ---- */}
            <aside className="pg-sidebar">

              <div className="pg-sidebar-card">
                <h4>Popular Category</h4>
                <ul className="pg-category-list">
                  {popularCategories.map(cat => (
                    <li key={cat.name}>
                      <a
                        href="#"
                        className="pg-category-link"
                        onClick={e => handleCategoryClick(e, cat.name)}
                      >
                        {cat.name}
                      </a>
                      <span className="pg-category-count">({cat.count})</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="pg-sidebar-card">
                <h4>Stream</h4>
                <div className="pg-tag-list">
                  {streams.map(item => (
                    <span key={item} className="pg-tag">{item}</span>
                  ))}
                </div>
              </div>

              <div className="pg-counselling-cta">
                <h3>Schedule a Counselling Session!</h3>
                <p>
                  Reach out to our expert Counselors who can help you discover your potential,
                  navigate with selecting the right curriculum, stream, course, industry and job.
                </p>
                <button
                  className="pg-cta-btn"
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