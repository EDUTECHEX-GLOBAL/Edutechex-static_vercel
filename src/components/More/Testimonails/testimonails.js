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

  /* ================= DATA ================= */

  const allSubjects = testimonials.flatMap((course) => course.subject);

  const activeSegment =
    selectedSegment === "null"
      ? null
      : testimonials.find((c) => c.courseId === selectedSegment);

  const displayedCourses = activeSegment
    ? activeSegment.subject
    : allSubjects;

  const getVisibleReviews = () => {
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

  const allReviews = getVisibleReviews(); // ✅ show ALL (no slice)

  /* ================= EFFECTS ================= */

  // ✅ RESET COURSE WHEN SEGMENT CHANGES
  useEffect(() => {
    setSelectedCourse("null");
  }, [selectedSegment]);

  // ✅ SCROLL TO TOP ON PAGE LOAD / REFRESH
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth", // remove 'smooth' if you want instant
    });
  }, []);

  /* ================= HELPERS ================= */

  function getInitials(name = "") {
    return name
      .split(" ")
      .slice(0, 2)
      .map((w) => w[0])
      .join("")
      .toUpperCase();
  }

  /* ================= RENDER ================= */

  return (
    <section className="testi-section">

      {/* Banner */}
      <div className="testi-banner">
        <h1 className="testi-banner__title">Testimonials</h1>
        <nav aria-label="breadcrumb">
          <ol className="testi-breadcrumb">
            <li><a href="/">Home</a></li>
            <li className="sep">•</li>
            <li className="active">Testimonials</li>
          </ol>
        </nav>
      </div>

      <div className="testi-container">

        {/* Filters */}
        <div className="testi-filters">
          <div className="testi-filter-wrapper">

            <select
              className="testi-select"
              value={selectedSegment}
              onChange={(e) => setSelectedSegment(e.target.value)}
            >
              <option value="null">Select Segment</option>
              {testimonials.map((course, idx) => (
                <option key={`${course.courseId}-${idx}`} value={course.courseId}>
                  {course.label}
                </option>
              ))}
            </select>

            <select
              className="testi-select"
              value={selectedCourse}
              onChange={(e) => setSelectedCourse(e.target.value)}
            >
              <option value="null">Select Course</option>
              {displayedCourses.map((subject, idx) => (
                <option key={`${subject.subjectId}-${idx}`} value={subject.subJectName}>
                  {subject.subJectName}
                </option>
              ))}
            </select>

          </div>
        </div>

        {/* Cards */}
        <div className="testi-grid">
          {allReviews.length === 0 ? (
            <p className="testi-empty">
              No testimonials available for this section.
            </p>
          ) : (
            allReviews.map((review, idx) => (
              <div
                className="testi-card"
                key={`${review.name}-${idx}`}
              >
                <span className="testi-card__quote">"</span>

                {/* Avatar */}
              {/* Avatar */}
<div className="testi-card__avatar-wrap">
  {getImage(review.images) ? (
    <>
      <img
        src={getImage(review.images)}
        alt={review.name}
        className="testi-card__avatar"
        onError={(e) => {
          e.currentTarget.style.display = "none";
          e.currentTarget.nextSibling.style.display = "flex";
        }}
      />
      <div
        className="testi-card__avatar-fallback"
        style={{ display: "none" }}
      >
        {getInitials(review.name)}
      </div>
    </>
  ) : (
    <div className="testi-card__avatar-fallback">
      {getInitials(review.name)}
    </div>
  )}
</div>

                {/* Name */}
                <h6 className="testi-card__name">{review.name}</h6>

                {/* Class */}
                {review.class && (
                  <span className="testi-card__class">
                    {review.class}
                  </span>
                )}

                {/* Comment */}
                <blockquote className="testi-card__comment">
                  {review.comments}
                </blockquote>

                {/* Score */}
                {review.score && (
                  <div className="testi-card__score">
                    {review.score}
                  </div>
                )}

                {/* University */}
                {review.universities && (
                  <div className="testi-card__badge">
                    
                    <span>{review.universities}</span>
                  </div>
                )}

              </div>
            ))
          )}
        </div>

      </div>
    </section>
  );
}