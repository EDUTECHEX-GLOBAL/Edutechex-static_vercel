import React, { useState } from 'react';
import './most.css';
import { coursesData } from '../../data/coursesData';

const StarRating = ({ rating }) => {
  const fullStars = Math.floor(rating);
  return (
    <div className="star-row">
      {[...Array(5)].map((_, i) => (
        <svg key={i} viewBox="0 0 24 24" width="16" height="16" style={{ display: 'block' }}>
          <polygon points="12,2 15.09,8.26 22,9.27 17,14.14 18.18,21.02 12,17.77 5.82,21.02 7,14.14 2,9.27 8.91,8.26" fill={i < fullStars ? '#f5a623' : '#e0e0e0'} stroke={i < fullStars ? '#f5a623' : '#e0e0e0'} strokeWidth="1" />
        </svg>
      ))}
      <span className="rating-text">{rating.toFixed(1)}/5.0</span>
    </div>
  );
};

const CourseCard = ({ course }) => {
  const [liked, setLiked] = useState(false);
  return (
    <div className="course-card" onClick={() => window.location.href = course.link}>
      <div className="course-thumb"><img src={course.image} alt={course.title} className="course-thumb-img" /></div>
      <div className="course-body">
        <div className="course-meta-row">
          <span className="course-level">{course.level}</span>
          <button className={`heart-btn ${liked ? 'liked' : ''}`} onClick={e => { e.stopPropagation(); setLiked(!liked); }}>
            <svg viewBox="0 0 24 24" width="18" height="18">
              <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" fill={liked ? '#e74c3c' : 'none'} stroke={liked ? '#e74c3c' : '#999'} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>
        </div>
        <h3 className="course-title">{course.title}</h3>
        <p className="course-desc">{course.details}</p>
        <StarRating rating={course.rating} />
        <div className="course-divider" />
        <div className="course-price-row">
          <div className="course-price-info"></div>
          <a href={course.link} className="course-arrow-btn" onClick={e => e.stopPropagation()}>
            <svg viewBox="0 0 24 24" width="18" height="18" fill="none"><path d="M5 12h14M13 6l6 6-6 6" stroke="#fff" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" /></svg>
          </a>
        </div>
      </div>
    </div>
  );
};

const MostPopularCourses = () => {
  const tabs = ['K12', 'Undergraduate', 'Postgraduate'];
  const [activeTab, setActiveTab] = useState('K12');
  const courses = coursesData[activeTab] || [];

  return (
    <section className="most-popular-section">
      <div className="most-popular-header">
        <h2 className="most-popular-title">Most Popular Courses</h2>
        <p className="most-popular-sub">Choose from hundreds of courses curated by our subject matter and industry experts</p>
      </div>
      <div className="tabs-bar">
        {tabs.map(tab => (<button key={tab} className={`tab-btn ${activeTab === tab ? 'tab-active' : ''}`} onClick={() => setActiveTab(tab)}>{tab}</button>))}
      </div>
      <div className="courses-grid">{courses.map(course => (<CourseCard key={course.id} course={course} />))}</div>
    </section>
  );
};

export default MostPopularCourses;