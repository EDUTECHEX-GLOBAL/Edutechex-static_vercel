import React, { useState, useEffect } from "react";
import "./shop.css";
import { allCourseForBuy } from "./allCourseForBuy";
import courseSvg from "../../assets/buycourses/course.svg";

/* ================================================================
   IMAGE LOADER — reads from assets/buycourses/
   ================================================================ */
const imagesContext = require.context(
  "../../assets/buycourses",
  false
);

function getCourseImage(imagePath) {
  if (!imagePath) return null;
  const filename = imagePath.split("/").pop();
  try {
    return imagesContext(`./${filename}`);
  } catch {
    return null;
  }
}

/* ================================================================
   MAIN COMPONENT
   ================================================================ */
export default function Shop() {
  const [searchText, setSearchText]           = useState("");
  const [selectedSegment, setSelectedSegment] = useState("null");
  const [selectedProgram, setSelectedProgram] = useState("null");
  const [programList, setProgramList]         = useState([]);
  const [buyCoursesList, setBuyCoursesList]   = useState([]);

  const allSegmentList = allCourseForBuy;

  /* ── Segment change ── */
  function onSelect(segment) {
    setSelectedSegment(segment);
    setSelectedProgram("null");
    if (segment === "null") {
      setProgramList([]);
    } else {
      const found = allCourseForBuy.find((s) => s.segment === segment);
      setProgramList(found ? found.program : []);
    }
  }

  /* ── Program change ── */
  function onSelectSub(programTitle) {
    setSelectedProgram(programTitle);
  }

  /* ── Build visible course list ── */
  useEffect(() => {
    let courses = [];

    if (selectedSegment === "null") {
      allCourseForBuy.forEach((seg) =>
        seg.program.forEach((prog) =>
          prog.course.forEach((c) => courses.push(c))
        )
      );
    } else {
      const seg = allCourseForBuy.find((s) => s.segment === selectedSegment);
      if (seg) {
        if (selectedProgram === "null") {
          seg.program.forEach((prog) =>
            prog.course.forEach((c) => courses.push(c))
          );
        } else {
          const prog = seg.program.find(
            (p) => p.program_title === selectedProgram
          );
          if (prog) courses = prog.course;
        }
      }
    }

    if (searchText.trim()) {
      const q = searchText.toLowerCase();
      courses = courses.filter(
        (c) =>
          c.menuName?.toLowerCase().includes(q) ||
          c.details?.toLowerCase().includes(q)
      );
    }

    setBuyCoursesList(courses);
  }, [selectedSegment, selectedProgram, searchText]);

  /* ── Scroll to top on mount ── */
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  /* ================================================================
     RENDER
     ================================================================ */
  return (
    <div className="shop-section">

      {/* ══════════════════════════════════════
          BANNER
      ══════════════════════════════════════ */}
      <section className="shop-banner">

        <div className="shop-banner__content">

          {/* Left — text & search */}
          <div className="shop-banner__text">
            <h1 className="shop-banner__title">
              Welcome to our expert curated online course store!
            </h1>
            <p className="shop-banner__subtitle">
              Browse through the expert designed blended aptitude and curriculum
              courses connecting passion to global education.
            </p>

            <div className="shop-search-wrap">
              <input
                className="shop-search"
                type="text"
                placeholder="Find your course"
                value={searchText}
                onChange={(e) => setSearchText(e.target.value)}
                autoComplete="off"
                name="course-search"
              />
              <span className="shop-search-icon" aria-hidden="true">
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <circle cx="11" cy="11" r="8" />
                  <line x1="21" y1="21" x2="16.65" y2="16.65" />
                </svg>
              </span>
            </div>
          </div>

          {/* Right — illustration with decorative lines behind */}
          <div className="shop-banner__image">

            {/* Lines render first — behind the img */}
            <svg
              className="shop-banner__lines"
              viewBox="0 0 566.3 353.7"
              xmlns="http://www.w3.org/2000/svg"
              preserveAspectRatio="xMidYMid meet"
            >
              <path
                stroke="#17a2b8"
                fill="none"
                strokeWidth="2"
                d="M525.1,4c8.1,0.7,14.9,7.2,17.9,14.8c3,7.6,3,16,2.1,24.1
                   c-4.7,44.3-32.1,84.7-69.4,108.9c-37.4,24.2-83.7,32.8-127.9,27.6
                   c-32.3-3.8-63.5-14.5-95.9-16.6c-21.6-1.4-45.6,2.1-60.1,18.3
                   c-7.7,8.5-11.8,19.6-14.8,30.7c-7.9,29.5-9,60.8-19.7,89.5
                   c-5.5,14.8-14,29.1-27.1,38c-15.6,10.5-35.6,12-54.2,9.5
                   c-18.6-2.5-36.5-8.6-55-12.1"
              />
              <path
                stroke="#F99D2B"
                fill="none"
                strokeWidth="2"
                d="M560.7,0.2c10,18.3,3.7,41.1-5,60.1c-11.8,25.9-28,50.3-50.2,68.2
                   c-29,23.3-66.3,34-103.2,38.6c-36.9,4.6-74.3,3.8-111.3,7.2
                   c-22.3,2-45.3,5.9-63.5,19c-26.8,19.2-39,55.3-68.3,70.4
                   c-38.2,19.6-89.7-4.9-125.6,18.8c-22.6,15-30.7,44.2-33.3,71.2"
              />
            </svg>

            {/* Illustration on top of lines */}
            <img src={courseSvg} alt="Course store illustration" />

          </div>

        </div>
      </section>

      {/* ══════════════════════════════════════
          MAIN CONTENT
      ══════════════════════════════════════ */}
      <section className="shop-content">
        <div className="shop-container">

          {/* Filters row */}
          <div className="shop-filters-row">
            <h5 className="shop-filters-title">All Listed Courses</h5>

            <div className="shop-filters-selects">

              {/* Segment dropdown */}
              <div className="shop-select-wrap">
                <select
                  className="shop-select"
                  value={selectedSegment}
                  onChange={(e) => onSelect(e.target.value)}
                >
                  <option value="null">Select Segment</option>
                  {allSegmentList.map((seg, idx) => (
                    <option key={idx} value={seg.segment}>
                      {seg.segment}
                    </option>
                  ))}
                </select>
                <span className="shop-select-chevron" aria-hidden="true">
                  <svg width="11" height="11" viewBox="0 0 24 24" fill="none"
                    stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
                    <polyline points="6 9 12 15 18 9" />
                  </svg>
                </span>
              </div>

              {/* Program dropdown */}
              <div className="shop-select-wrap">
                <select
                  className="shop-select"
                  value={selectedProgram}
                  onChange={(e) => onSelectSub(e.target.value)}
                >
                  <option value="null">Select Program</option>
                  {programList.map((prog, idx) => (
                    <option key={idx} value={prog.program_title}>
                      {prog.program_title}
                    </option>
                  ))}
                </select>
                <span className="shop-select-chevron" aria-hidden="true">
                  <svg width="11" height="11" viewBox="0 0 24 24" fill="none"
                    stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
                    <polyline points="6 9 12 15 18 9" />
                  </svg>
                </span>
              </div>

            </div>
          </div>

          {/* Course Grid */}
          <div className="shop-grid">
            {buyCoursesList.length === 0 ? (
              <p className="shop-empty">No courses found.</p>
            ) : (
              buyCoursesList.map((course, idx) => (
                <CourseCard key={`${course.uniqueID}-${idx}`} course={course} />
              ))
            )}
          </div>

        </div>
      </section>
    </div>
  );
}

/* ================================================================
   COURSE CARD
   ================================================================ */
function CourseCard({ course }) {
  const imgSrc = getCourseImage(course.image || "");

  return (
    <div className="shop-card">
      <a href={course.link || "#"} className="shop-card__link">

        {/* Image */}
        <div className="shop-card__img-wrap">
          {imgSrc ? (
            <img
              src={imgSrc}
              alt={course.menuName}
              className="shop-card__img"
              onError={(e) => {
                e.currentTarget.style.display = "none";
                const fb = e.currentTarget.nextSibling;
                if (fb) fb.style.display = "flex";
              }}
            />
          ) : null}

          {/* Fallback — shows first letter when image missing */}
          <div
            className="shop-card__img-fallback"
            style={{ display: imgSrc ? "none" : "flex" }}
          >
            <span>{course.menuName?.charAt(0)}</span>
          </div>

          {/* Book icon overlay — top-left dark circle */}
          <div className="shop-card__overlay">
            <div className="shop-card__icon">
              <svg
                viewBox="0 0 16 16"
                fill="white"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M1 2.828c.885-.37 2.154-.769 3.388-.893 1.33-.134 2.458.063 3.112.752v9.746c-.935-.53-2.12-.603-3.213-.493-1.18.12-2.37.461-3.287.811V2.828zm7.5-.141c.654-.689 1.782-.886 3.112-.752 1.234.124 2.503.523 3.388.893v9.746c-.917-.35-2.107-.692-3.287-.81-1.094-.111-2.278-.039-3.213.492V2.687zM8 1.783C7.015.936 5.587.81 4.287.94c-1.514.153-3.042.672-3.994 1.105A.5.5 0 0 0 0 2.5v11a.5.5 0 0 0 .707.455c-.31.146 1.086.5 2.275.385 1.187-.116 2.37-.461 3.287-.811.74.483 1.563.794 2.731.794 1.167 0 1.99-.31 2.731-.794.917.35 2.1.695 3.287.81 1.189.116 2.585-.239 2.275-.384A.5.5 0 0 0 16 13.5v-11a.5.5 0 0 0-.293-.455c-.952-.433-2.48-.952-3.994-1.105C10.413.809 8.985.936 8 1.783z" />
              </svg>
            </div>
          </div>
        </div>

        {/* Body */}
        <div className="shop-card__body">
          <div className="shop-card__name-row">
            <h5 className="shop-card__name">{course.menuName}</h5>
          </div>

          {course.subTitle && (
            <p className="shop-card__subtitle">{course.subTitle}</p>
          )}

          <p className="shop-card__details">{course.details}</p>
        </div>

      </a>

      {/* Footer */}
      <div className="shop-card__footer">
        <button
          className="shop-card__btn"
          onClick={() => console.log("Add to cart:", course.menuName)}
        >
          Add to cart
        </button>
      </div>
    </div>
  );
}