import React, { useState, useRef, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./header.css";

import logo from "../../assets/Edutech-logo.svg";
import cartIcon from "../../assets/cart.png";

// ── Category dropdown items ─────────────────────────────────────────
const categoryItems = [
  { label: "K12", link: "/k12" },
  { label: "UG", link: "/ug" },
  { label: "PG", link: "/pg" },
];

// ── Main nav items ──────────────────────────────────────────────────
const megaMenuItems = [
  {
    label: "Courses",
    normalMenuItems: [
      { name: "K12", link: "/courses/k12" },
    { name: "Undergraduate", link: "/courses/undergraduate" },
    { name: "Postgraduate", link: "/courses/postgraduate" },
    ],
  },
  {
    label: "Products",
    normalMenuItems: [
      { name: "Assessments - Pariksha", link: "/pariksha" },
    ],
  },
  {
    label: "Consulting",
    normalMenuItems: [
      { name: "Internships", link: "/consulting/internships" },
      { name: "Information Technology", link: "/consulting/information-technology" },
      { name: "STEM Labs", link: "/consulting/stem-labs" },
    ],
  },
  {
    label: "Buy Courses",
    link: "/buy-courses",
  },
  {
    label: "More",
    normalMenuItems: [
      { name: "About Us", link: "/about" },
      { name: "Contact Us", link: "/contact" },
      { name: "Testimonials", link: "/testimonials" },
    ],
  },
];

// ── Chevron Icon ────────────────────────────────────────────────────
const ChevronIcon = () => (
  <svg className="chevron-icon" viewBox="0 0 16 16" fill="currentColor">
    <path d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z" />
  </svg>
);

// ── Header Component ────────────────────────────────────────────────
const Header = () => {
  const navigate = useNavigate();

  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null);

  const headerRef = useRef(null);
  const closeTimer = useRef(null);

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (headerRef.current && !headerRef.current.contains(e.target)) {
        setOpenDropdown(null);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleMouseEnter = (key) => {
    clearTimeout(closeTimer.current);
    setOpenDropdown(key);
  };

  const handleMouseLeave = () => {
    closeTimer.current = setTimeout(() => setOpenDropdown(null), 150);
  };

  const closeAll = () => setOpenDropdown(null);

  return (
    <header className="header" ref={headerRef}>
      <div className="header-container">

        {/* LEFT */}
        <div className="left-section">
          <img
            src={logo}
            alt="EDUTECH"
            className="logo-img"
            onClick={() => navigate("/")}
            style={{ cursor: "pointer" }}
          />

          <div
            className="dropdown-wrapper"
            onMouseEnter={() => handleMouseEnter("category")}
            onMouseLeave={handleMouseLeave}
          >
            <button className="category-btn">
              <i className="bi bi-ui-radios-grid category-icon"></i>
              <span>Category</span>
            </button>

            {openDropdown === "category" && (
              <div className="category-dropdown">
                {categoryItems.map((item) => (
                  <div
                    key={item.label}
                    className="category-dropdown-item"
                    onClick={() => {
                      navigate(item.link);
                      closeAll();
                    }}
                  >
                    {item.label}
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>

        {/* CENTER NAV */}
        <nav className={`nav ${isMobileMenuOpen ? "active" : ""}`}>
          {megaMenuItems.map((menuItem, index) => (
            <div
              className="nav-item-wrapper"
              key={index}
              onMouseEnter={() =>
                menuItem.normalMenuItems && handleMouseEnter(index)
              }
              onMouseLeave={handleMouseLeave}
            >
              <button
                className={`nav-link ${
                  menuItem.label === "Buy Courses" ? "buy" : ""
                }`}
                onClick={() => menuItem.link && navigate(menuItem.link)}
              >
                {menuItem.label}
                {menuItem.normalMenuItems && <ChevronIcon />}
              </button>

              {menuItem.normalMenuItems && openDropdown === index && (
                <div className="nav-dropdown">
                  {menuItem.normalMenuItems.map((item) => (
                    <div
                      key={item.name}
                      className="nav-dropdown-item"
                      onClick={() => {
                        navigate(item.link);
                        closeAll();
                      }}
                    >
                      {item.name}
                    </div>
                  ))}
                </div>
              )}
            </div>
          ))}
        </nav>

        {/* RIGHT */}
        <div className="right-section">
          <button
            className="cart-btn"
            onClick={() => navigate("/cart")}
          >
            <img src={cartIcon} alt="Cart" className="cart-icon-img" />
          </button>

          <button
            className="mobile-menu"
            onClick={() => {
              setIsMobileMenuOpen((prev) => !prev);
              closeAll();
            }}
          >
            {isMobileMenuOpen ? "✕" : "☰"}
          </button>
        </div>

      </div>
    </header>
  );
};

export default Header;
