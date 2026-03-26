import React, { useState } from 'react';
import './most.css';

// ── Import all course images properly via React ──
import imgSAT          from './assets/SAT.jpg';
import imgAP           from './assets/Ap.jpg';
import imgIvy          from './assets/Ivy.jpg';
import imgMedical      from './assets/Medical.jpg';
import imgAbroad       from './assets/Abroad Masters Placement.jpg';
import imgPhd          from './assets/Abroad Ph.D. Program.jpg';

const coursesData = {
  K12: [
    {
      id: '100',
      title: 'Digital SAT',
      image: imgSAT,
      price: '65000',
      discount: '77,700',
      details: 'EduTechEx Digital SAT is designed by subject matter experts and senior counselors having more than a decade experience in teaching SAT programs worldwide and senior...',
      rating: 5.0,
      level: 'All level',
      perDiscount: '20%',
      link: '/course-details/1/K12/1/SAT%20General',
    },
    {
      id: '2',
      title: 'Advanced Placement Tests',
      image: imgAP,
      price: '75000',
      discount: '94,000',
      details: 'Advanced Placement tests are college level exams for high school students...',
      rating: 5.0,
      level: 'All level',
      perDiscount: '20%',
      link: '/apCourses',
    },
    {
      id: '301',
      title: 'Ivy League Bachelors Pro...',
      image: imgIvy,
      price: '80000',
      discount: '1,00,000',
      details: 'A foundation course is a programme that will prepare you for an...',
      rating: 5.0,
      level: 'All level',
      perDiscount: '20%',
      link: '/Ivy-League-course-details/1/K12/3/%20Ivy%20League%20Bachelors%20Program/',
    },
    {
      id: '4',
      title: 'Medical Program',
      image: imgMedical,
      price: '80000',
      discount: '1,00,000',
      details: 'For a Successful Medical School Application in the US, UK and Rest of...',
      rating: 5.0,
      level: 'All level',
      perDiscount: '20%',
      link: '/medical-program',
    },
  ],
  Undergraduate: [
    {
      id: '01',
      title: 'Abroad Masters Placement',
      image: imgAbroad,
      price: '80000',
      discount: '1,00,000',
      details: 'Abroad Masters program enables students who are about to and have completed UG degrees to get admitted into the top universities around the world aligned with their passion.',
      rating: 5.0,
      level: 'All level',
      perDiscount: '20%',
      link: '/abroad-masters-placement/2/Undergraduate/1/Abroad%20Masters%20Placement/',
    },
    {
      id: '02',
      title: 'Abroad Transfers Program',
      image: imgAbroad,
      price: '160000',
      discount: '2,00,000',
      details: 'Abroad Exchange program enables students who are in the first year of their undergraduate courses to get admitted into the top universities around the world.',
      rating: 5.0,
      level: 'All level',
      perDiscount: '20%',
      link: '/abroad-transfer-program/2/Undergraduate/2/Abroad%20Transfers%20Program/',
    },
  ],
  Postgraduate: [
    {
      id: '03',
      title: 'Abroad Ph.D. Program',
      image: imgPhd,
      price: '80000',
      discount: '1,00,000',
      details: 'Abroad Ph.D. program enables students and working professionals who have completed their UG and PG and motivated to pursue doctoral research in some of the cutting edge technological, innovative and creative areas.',
      rating: 5.0,
      level: 'All level',
      perDiscount: '20%',
      link: '/abroad-p.hd-program/3/Postgraduate/1/Abroad%20Ph.D.%20Program/',
    },
  ],
};

/* ── Star Rating Component ── */
const StarRating = ({ rating }) => {
  const fullStars = Math.floor(rating);
  return (
    <div className="star-row">
      {[...Array(5)].map((_, i) => (
        <svg
          key={i}
          viewBox="0 0 24 24"
          width="16"
          height="16"
          style={{ display: 'block' }}
        >
          <polygon
            points="12,2 15.09,8.26 22,9.27 17,14.14 18.18,21.02 12,17.77 5.82,21.02 7,14.14 2,9.27 8.91,8.26"
            fill={i < fullStars ? '#f5a623' : '#e0e0e0'}
            stroke={i < fullStars ? '#f5a623' : '#e0e0e0'}
            strokeWidth="1"
          />
        </svg>
      ))}
      <span className="rating-text">{rating.toFixed(1)}/{(5).toFixed(1)}</span>
    </div>
  );
};

/* ── Course Card Component ── */
const CourseCard = ({ course }) => {
  const [liked, setLiked] = useState(false);

  const formatPrice = (price) =>
    Number(price).toLocaleString('en-IN');

  return (
    <div className="course-card" onClick={() => window.location.href = course.link}>

      {/* Thumbnail */}
      <div className="course-thumb">
        <img
          src={course.image}
          alt={course.title}
          className="course-thumb-img"
        />
      </div>

      {/* Card Body */}
      <div className="course-body">

        {/* Level + Heart */}
        <div className="course-meta-row">
          <span className="course-level">{course.level}</span>
          <button
            className={`heart-btn ${liked ? 'liked' : ''}`}
            onClick={e => { e.stopPropagation(); setLiked(!liked); }}
          >
            <svg viewBox="0 0 24 24" width="18" height="18">
              <path
                d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"
                fill={liked ? '#e74c3c' : 'none'}
                stroke={liked ? '#e74c3c' : '#999'}
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
        </div>

        {/* Title */}
        <h3 className="course-title">{course.title}</h3>

        {/* Description */}
        <p className="course-desc">{course.details}</p>

        {/* Stars */}
        <StarRating rating={course.rating} />

        {/* Divider */}
        <div className="course-divider" />

        {/* Price row */}
        <div className="course-price-row">
          <div className="course-price-info">
            <span className="course-price">Starting ₹ {formatPrice(course.price)}</span>
            <span className="course-original">{course.discount}</span>
            <span className="course-badge">{course.perDiscount} off</span>
          </div>
          <a
            href={course.link}
            className="course-arrow-btn"
            onClick={e => e.stopPropagation()}
          >
            <svg viewBox="0 0 24 24" width="18" height="18" fill="none">
              <path
                d="M5 12h14M13 6l6 6-6 6"
                stroke="#fff"
                strokeWidth="2.2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </a>
        </div>

      </div>
    </div>
  );
};

/* ── Main Section Component ── */
const MostPopularCourses = () => {
  const tabs = ['K12', 'Undergraduate', 'Postgraduate'];
  const [activeTab, setActiveTab] = useState('K12');

  const courses = coursesData[activeTab] || [];

  return (
    <section className="most-popular-section">

      {/* Heading */}
      <div className="most-popular-header">
        <h2 className="most-popular-title">Most Popular Courses</h2>
        <p className="most-popular-sub">
          Choose from hundreds of courses curated by our subject matter and industry experts
        </p>
      </div>

      {/* Tab Bar */}
      <div className="tabs-bar">
        {tabs.map(tab => (
          <button
            key={tab}
            className={`tab-btn ${activeTab === tab ? 'tab-active' : ''}`}
            onClick={() => setActiveTab(tab)}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* Course Grid */}
      <div className="courses-grid">
        {courses.map(course => (
          <CourseCard key={course.id} course={course} />
        ))}
      </div>

    </section>
  );
};

export default MostPopularCourses;