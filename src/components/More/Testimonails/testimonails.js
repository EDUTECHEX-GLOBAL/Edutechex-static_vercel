import React, { useState, useEffect } from "react";
import "./testimonails.css";
import { testimonials } from "./Testimonials";

/* ================================================================
   IMAGE LOADER
   ================================================================ */
const imagesContext = require.context(
  "../../../assets/edutechex-testimonails",
  false
);

function getImage(name) {
  try {
    return imagesContext(`./${name}`);
  } catch {
    return null;
  }
}

/* ================================================================
   COMPONENT
   ================================================================ */

export default function Testimonials() {
  const [selectedSegment, setSelectedSegment] = useState("null");
  const [selectedCourse, setSelectedCourse] = useState("null");
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 6;

  /* ================= DATA ================= */

  const allSubjects = testimonials.flatMap((course) => course.subject);

  const activeSegment =
    selectedSegment === "null"
      ? null
      : testimonials.find((c) => c.courseId === selectedSegment);

  const displayedCourses = activeSegment
    ? activeSegment.subject
    : allSubjects;

  const getAllReviews = () => {
    if (selectedCourse !== "null") {
      const subject = displayedCourses.find(
        (s) => s.subJectName === selectedCourse
      );
      return subject?.review ?? [];
    }

    if (activeSegment) {
      return activeSegment.subject.flatMap((s) => s.review);
    }

    return allSubjects.flatMap((s) => s.review);
  };

  const allReviews = getAllReviews();
  const totalPages = Math.ceil(allReviews.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const displayedReviews = allReviews.slice(startIndex, startIndex + itemsPerPage);

  /* ================= EFFECTS ================= */

  useEffect(() => {
    setSelectedCourse("null");
    setCurrentPage(1);
  }, [selectedSegment]);

  useEffect(() => {
    setCurrentPage(1);
  }, [selectedCourse]);

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, [currentPage]);

  /* ================= HELPERS ================= */

  function getInitials(name = "") {
    return name
      .split(" ")
      .slice(0, 2)
      .map((w) => w[0])
      .join("")
      .toUpperCase();
  }

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  const getPageNumbers = () => {
    const pages = [];
    const maxVisible = 5;
    
    if (totalPages <= maxVisible) {
      for (let i = 1; i <= totalPages; i++) {
        pages.push(i);
      }
    } else {
      if (currentPage <= 3) {
        for (let i = 1; i <= 4; i++) {
          pages.push(i);
        }
        pages.push('...');
        pages.push(totalPages);
      } else if (currentPage >= totalPages - 2) {
        pages.push(1);
        pages.push('...');
        for (let i = totalPages - 3; i <= totalPages; i++) {
          pages.push(i);
        }
      } else {
        pages.push(1);
        pages.push('...');
        for (let i = currentPage - 1; i <= currentPage + 1; i++) {
          pages.push(i);
        }
        pages.push('...');
        pages.push(totalPages);
      }
    }
    return pages;
  };

  /* ================= RENDER ================= */

  return (
    <section className="testi-section">
      {/* Banner */}
      <div className="testi-banner">
        <div className="testi-banner__content">
          <h1 className="testi-banner__title">Testimonials</h1>
          <nav aria-label="breadcrumb">
            <ol className="testi-breadcrumb">
              <li><a href="/">Home</a></li>
              <li className="sep">•</li>
              <li className="active">Testimonials</li>
            </ol>
          </nav>
        </div>
      </div>

      {/* Filters - Professional Design */}
      <div className="testi-filters-wrapper">
        <div className="testi-container">
          <div className="testi-filters">
            {/* Segment Filter */}
            <div className="testi-filter-group">
              <div className="testi-filter-header">
                <svg className="testi-filter-icon" width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M19 3H5C3.9 3 3 3.9 3 5V19C3 20.1 3.9 21 5 21H19C20.1 21 21 20.1 21 19V5C21 3.9 20.1 3 19 3Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M7 7H17M7 12H17M7 17H13" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
                </svg>
                <span className="testi-filter-label">Select Segment</span>
              </div>
              <div className="testi-select-wrapper">
                <select
                  className="testi-select"
                  value={selectedSegment}
                  onChange={(e) => setSelectedSegment(e.target.value)}
                >
                  <option value="null">All Segments</option>
                  {testimonials.map((course, idx) => (
                    <option key={`${course.courseId}-${idx}`} value={course.courseId}>
                      {course.label}
                    </option>
                  ))}
                </select>
                <svg className="testi-select-arrow" width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M6 9L12 15L18 9" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
            </div>

            {/* Course Filter */}
            <div className="testi-filter-group">
              <div className="testi-filter-header">
                <svg className="testi-filter-icon" width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 6V12L15 15M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
                  <path d="M12 8V12L14 14" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
                </svg>
                <span className="testi-filter-label">Select Course</span>
              </div>
              <div className="testi-select-wrapper">
                <select
                  className="testi-select"
                  value={selectedCourse}
                  onChange={(e) => setSelectedCourse(e.target.value)}
                >
                  <option value="null">All Courses</option>
                  {displayedCourses.map((subject, idx) => (
                    <option key={`${subject.subjectId}-${idx}`} value={subject.subJectName}>
                      {subject.subJectName}
                    </option>
                  ))}
                </select>
                <svg className="testi-select-arrow" width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M6 9L12 15L18 9" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
            </div>
          </div>

          {/* Active Filters Display */}
          {(selectedSegment !== "null" || selectedCourse !== "null") && (
            <div className="testi-active-filters">
              <span className="testi-active-label">Active Filters:</span>
              {selectedSegment !== "null" && (
                <button 
                  className="testi-filter-tag"
                  onClick={() => setSelectedSegment("null")}
                >
                  {testimonials.find(c => c.courseId === selectedSegment)?.label}
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none">
                    <path d="M18 6L6 18M6 6L18 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                  </svg>
                </button>
              )}
              {selectedCourse !== "null" && (
                <button 
                  className="testi-filter-tag"
                  onClick={() => setSelectedCourse("null")}
                >
                  {selectedCourse}
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none">
                    <path d="M18 6L6 18M6 6L18 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                  </svg>
                </button>
              )}
            </div>
          )}
        </div>
      </div>

      {/* Results count */}
      <div className="testi-container">
        <div className="testi-results">
          <div className="testi-results__info">
            <span className="testi-results__count">
              Showing {allReviews.length === 0 ? 0 : startIndex + 1} - {Math.min(startIndex + itemsPerPage, allReviews.length)} of {allReviews.length} testimonials
            </span>
          </div>
        </div>

        {/* Cards Grid */}
        {displayedReviews.length === 0 ? (
          <div className="testi-empty-state">
            <div className="testi-empty-state__icon">📝</div>
            <p className="testi-empty-state__text">
              No testimonials available for this selection.
            </p>
            <button
              className="testi-reset-btn"
              onClick={() => {
                setSelectedSegment("null");
                setSelectedCourse("null");
              }}
            >
              Reset Filters
            </button>
          </div>
        ) : (
          <>
            <div className="testi-grid">
              {displayedReviews.map((review, idx) => (
                <div className="testi-card" key={`${review.name}-${idx}-${startIndex + idx}`}>
                  {/* Quote Icon */}
                  <div className="testi-card__quote-icon">
                    <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M10 11H6C6 8.79 7.79 7 10 7V5C6.13 5 3 8.13 3 12V17H10V11ZM18 11H14C14 8.79 15.79 7 18 7V5C14.13 5 11 8.13 11 12V17H18V11Z" fill="currentColor"/>
                    </svg>
                  </div>

                  {/* Avatar */}
                  <div className="testi-card__avatar-wrap">
                    {getImage(review.images) ? (
                      <img
                        src={getImage(review.images)}
                        alt={review.name}
                        className="testi-card__avatar"
                        onError={(e) => {
                          e.currentTarget.style.display = "none";
                          if (e.currentTarget.nextSibling) {
                            e.currentTarget.nextSibling.style.display = "flex";
                          }
                        }}
                      />
                    ) : null}
                    <div
                      className="testi-card__avatar-fallback"
                      style={{ display: getImage(review.images) ? "none" : "flex" }}
                    >
                      {getInitials(review.name)}
                    </div>
                  </div>

                  {/* Name */}
                  <h3 className="testi-card__name">{review.name}</h3>

                  {/* Class/Grade */}
                  {review.class && (
                    <span className="testi-card__class">{review.class}</span>
                  )}

                  {/* Comment */}
                  <p className="testi-card__comment">{review.comments}</p>

                  {/* Score Badge */}
                  {review.score && (
                    <div className="testi-card__score-badge">
                      <span className="testi-card__score-icon">⭐</span>
                      <span>{review.score}</span>
                    </div>
                  )}

                  {/* University Badge */}
                  {review.universities && (
                    <div className="testi-card__university-badge">
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M12 3L1 9L12 15L21 10.09V17H23V9L12 3ZM5 13.18V16.18L12 20L19 16.18V13.18L12 17L5 13.18Z" fill="currentColor"/>
                      </svg>
                      <span>{review.universities}</span>
                    </div>
                  )}
                </div>
              ))}
            </div>

            {/* Pagination */}
            {totalPages > 1 && (
              <div className="testi-pagination">
                <button
                  className="testi-pagination__btn testi-pagination__prev"
                  onClick={() => handlePageChange(currentPage - 1)}
                  disabled={currentPage === 1}
                >
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                    <path d="M15 18L9 12L15 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                  Previous
                </button>

                <div className="testi-pagination__numbers">
                  {getPageNumbers().map((page, index) => (
                    page === '...' ? (
                      <span key={`dots-${index}`} className="testi-pagination__dots">...</span>
                    ) : (
                      <button
                        key={page}
                        className={`testi-pagination__number ${currentPage === page ? 'active' : ''}`}
                        onClick={() => handlePageChange(page)}
                      >
                        {page}
                      </button>
                    )
                  ))}
                </div>

                <button
                  className="testi-pagination__btn testi-pagination__next"
                  onClick={() => handlePageChange(currentPage + 1)}
                  disabled={currentPage === totalPages}
                >
                  Next
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                    <path d="M9 18L15 12L9 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </button>
              </div>
            )}
          </>
        )}
      </div>
    </section>
  );
}