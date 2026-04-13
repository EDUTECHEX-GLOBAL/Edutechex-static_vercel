// =============================================
// K12.js — K12 Courses Page Logic (React)
// =============================================

import React, { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { coursesData } from '../courses';
import './k12.css';

// ── Image loader from assets/buycourses ───────────────────
const k12Images = require.context('../../../assets/buycourses', false);
function getK12Image(imagePath) {
  if (!imagePath) return null;
  const filename = imagePath.split('/').pop(); // extracts "SAT.jpg" from full path
  try { return k12Images(`./${filename}`); }
  catch { return null; }
}
// ── Constants ──────────────────────────────────────────────
const MENU_NAME = 'K12';
const MENU_ID   = '1';

const curriculum = ['CBSE', 'IGCSE', 'STATE', 'IB', 'ICSE'];

const popularCategories = [
  { name: 'Undergraduate', count: 2 },
  { name: 'Postgraduate',  count: 1 },
];

// ── Helpers ────────────────────────────────────────────────
function buildCardLink(course) {
  return `${course.link}${MENU_ID}/${MENU_NAME}/${course.id}/${encodeURIComponent(course.title)}`;
}



// ── Course Card ────────────────────────────────────────────
function CourseCard({ course }) {
  const link   = buildCardLink(course);
  const imgSrc = getK12Image(course.image) || course.image;

  return (
    <div className="k12-card" role="article">
      <img
        src={imgSrc}
        alt={course.title}
        className="k12-card-img"
        onError={e => { e.target.onerror = null; e.target.src = ''; }}
      />
      <div className="k12-card-body">
        <div className="k12-card-top">
          <span className="k12-badge">All level</span>
          <button className="k12-fav" aria-label="Add to favourites">&#9825;</button>
        </div>
        <a href={link} className="k12-card-title">{course.title}</a>
        <p className="k12-card-desc">{course.details || ''}</p>
        
      </div>
      <div className="k12-card-footer">
        {course.price && (
          <div className="k12-price-wrap">
            <div className="k12-price-line">
              <span className="k12-price-label">Starting</span>
              <span className="k12-price">&#8377; {course.price}</span>
              {course.discount && (
                <span className="k12-price-original">&#8377; {course.discount}</span>
              )}
            </div>
            {course.discount && (
              <span className="k12-discount-badge">20% off</span>
            )}
          </div>
        )}
      <span className="k12-arrow-btn" aria-label={`View ${course.title}`}>&#10140;</span>
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
    timerRef.current = setTimeout(() => {
      handleClose();
    }, 2800);
  }

  if (!isOpen) return null;

  const Field = ({ id, type, placeholder, errorMsg }) => (
    <div className={`k12-form-group${errors[id] ? ' has-error' : ''}`}>
      <input
        id={`k12-form-${id}`}
        name={id}
        type={type}
        placeholder={placeholder}
        value={form[id]}
        onChange={handleChange}
        autoComplete="off"
      />
      <span className="k12-form-error" id={`k12-err-${id}`}>{errorMsg}</span>
    </div>
  );

  return (
    <div
      id="k12-modal-overlay"
      className="k12-modal-overlay active"
      role="dialog"
      aria-modal="true"
      onClick={handleOverlayClick}
    >
      
    </div>
  );
}

// ── Main K12 Component ─────────────────────────────────────
export default function K12() {
  const navigate = useNavigate();
  const courses = coursesData.k12;

  const [search, setSearch]       = useState('');
  const [modalOpen, setModalOpen] = useState(false);

  const filtered = search.trim()
    ? courses.filter(c =>
        c.title.toLowerCase().includes(search.toLowerCase()) ||
        (c.details && c.details.toLowerCase().includes(search.toLowerCase()))
      )
    : courses;

  function handleCategoryClick(e, name) {
    e.preventDefault();
    if (name === 'Undergraduate')     navigate('/courses/undergraduate');
    else if (name === 'Postgraduate') navigate('/courses/postgraduate');
  }

  return (
    <>
      {/* ===== PAGE BANNER ===== */}
      <section className="k12-banner">
        <div className="k12-container">
          <h1>K12 Courses</h1>
          <ul className="k12-breadcrumb">
            <li>
              <span onClick={() => navigate('/')} style={{ cursor: 'pointer' }}>
                Home
              </span>
            </li>
            <li className="active">Courses</li>
          </ul>
        </div>
      </section>

      {/* ===== MAIN CONTENT ===== */}
      <section className="k12-section">
        <div className="k12-container">
          <div className="k12-layout">

            {/* ---- Left: Grid ---- */}
            <div>
              <div className="k12-search-wrap">
                <div className="k12-search-box">
                  
                  <input
                    id="k12-search"
                    type="text"
                    placeholder="Find your course"
                    autoComplete="off"
                    value={search}
                    onChange={e => setSearch(e.target.value)}
                  />
                </div>
              </div>

              <div id="k12-course-grid" className="k12-grid">
                {filtered.length === 0 ? (
                  <div className="k12-no-results">
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
            <aside className="k12-sidebar">

              <div className="k12-sidebar-card">
                <h4>Popular Category</h4>
                <ul id="k12-category-list" className="k12-category-list">
                  {popularCategories.map(cat => (
                    <li key={cat.name}>
                      <a
                        href="#"
                        className="k12-category-link"
                        onClick={e => handleCategoryClick(e, cat.name)}
                      >
                        {cat.name}
                      </a>
                      <span className="k12-category-count">({cat.count})</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="k12-sidebar-card">
                <h4>Curriculum</h4>
                <div id="k12-curriculum-tags" className="k12-tag-list">
                  {curriculum.map(item => (
                    <span key={item} className="k12-tag">{item}</span>
                  ))}
                </div>
              </div>

              <div className="k12-counselling-cta">
                <h3>Schedule a Counselling Session!</h3>
                <p>
                  Reach out to our expert Counselors who can help you discover your potential,
                  navigate with selecting the right curriculum, stream, course, industry and job.
                </p>
                <button
                  id="k12-open-modal"
                  className="k12-cta-btn"
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
