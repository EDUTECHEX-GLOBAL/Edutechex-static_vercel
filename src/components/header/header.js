import React, { useState, useRef, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
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
  const location = useLocation();

  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 992);

  const headerRef = useRef(null);
  const closeTimer = useRef(null);

  // Detect mobile/desktop on resize
  useEffect(() => {
    const handleResize = () => {
      const mobile = window.innerWidth <= 992;
      setIsMobile(mobile);
      if (!mobile) {
        setIsMobileMenuOpen(false);
        setOpenDropdown(null);
      }
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Close everything on route change
  useEffect(() => {
    setIsMobileMenuOpen(false);
    setOpenDropdown(null);
  }, [location.pathname]);

  // Close on outside click
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (headerRef.current && !headerRef.current.contains(e.target)) {
        setOpenDropdown(null);
        setIsMobileMenuOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // ── Desktop hover handlers
  const handleMouseEnter = (key) => {
    if (isMobile) return;
    clearTimeout(closeTimer.current);
    setOpenDropdown(key);
  };

  const handleMouseLeave = () => {
    if (isMobile) return;
    closeTimer.current = setTimeout(() => setOpenDropdown(null), 150);
  };

  // ── Nav item click
  const handleNavClick = (index, menuItem) => {
    if (menuItem.link) {
      navigate(menuItem.link);
      setIsMobileMenuOpen(false);
      setOpenDropdown(null);
    } else if (menuItem.normalMenuItems) {
      if (isMobile) {
        setOpenDropdown((prev) => (prev === index ? null : index));
      }
    }
  };

  const handleCategoryClick = (link) => {
    navigate(link);
    setIsMobileMenuOpen(false);
    setOpenDropdown(null);
  };

  const handleSubItemClick = (link) => {
    navigate(link);
    setIsMobileMenuOpen(false);
    setOpenDropdown(null);
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen((prev) => !prev);
    setOpenDropdown(null);
  };

  return (
    <header className="header" ref={headerRef}>
      <div className="header-container">

        {/* LEFT */}
        <div className="left-section">
          <img
            src={logo}
            alt="EDUTECH"
            className="logo-img"
            onClick={() => {
              navigate("/");
              setIsMobileMenuOpen(false);
              setOpenDropdown(null);
            }}
            style={{ cursor: "pointer" }}
          />

          {/* Category button — desktop only */}
          {!isMobile && (
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
                      onClick={() => handleCategoryClick(item.link)}
                    >
                      {item.label}
                    </div>
                  ))}
                </div>
              )}
            </div>
          )}
        </div>

        {/* CENTER NAV */}
        <nav className={`nav ${isMobileMenuOpen ? "active" : ""}`}>

          {/* Category section — inside mobile menu only */}
          {isMobile && (
            <>
              <div className="nav-item-wrapper">
                <button
                  className="nav-link"
                  onClick={() =>
                    setOpenDropdown((prev) => (prev === "category" ? null : "category"))
                  }
                >
                  <span className="mobile-category-label">
                    <i className="bi bi-ui-radios-grid category-icon"></i>
                    &nbsp;Category
                  </span>
                  <span className={`chevron-wrap ${openDropdown === "category" ? "rotated" : ""}`}>
                    <ChevronIcon />
                  </span>
                </button>

                {openDropdown === "category" && (
                  <div className="nav-dropdown">
                    {categoryItems.map((item) => (
                      <div
                        key={item.label}
                        className="nav-dropdown-item"
                        onClick={() => handleCategoryClick(item.link)}
                      >
                        {item.label}
                      </div>
                    ))}
                  </div>
                )}
              </div>
              <div className="mobile-nav-divider" />
            </>
          )}

          {megaMenuItems.map((menuItem, index) => (
            <div
              className="nav-item-wrapper"
              key={index}
              onMouseEnter={() => menuItem.normalMenuItems && handleMouseEnter(index)}
              onMouseLeave={handleMouseLeave}
            >
              <button
                className={`nav-link ${menuItem.label === "Buy Courses" ? "buy" : ""} ${openDropdown === index ? "open" : ""}`}
                onClick={() => handleNavClick(index, menuItem)}
              >
                {menuItem.label}
                {menuItem.normalMenuItems && (
                  <span className={`chevron-wrap ${openDropdown === index ? "rotated" : ""}`}>
                    <ChevronIcon />
                  </span>
                )}
              </button>

              {menuItem.normalMenuItems && openDropdown === index && (
                <div className="nav-dropdown">
                  {menuItem.normalMenuItems.map((item) => (
                    <div
                      key={item.name}
                      className="nav-dropdown-item"
                      onClick={() => handleSubItemClick(item.link)}
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
            onClick={() => {
              navigate("/cart");
              setIsMobileMenuOpen(false);
              setOpenDropdown(null);
            }}
          >
            <img src={cartIcon} alt="Cart" className="cart-icon-img" />
          </button>

          <button className="mobile-menu" onClick={toggleMobileMenu}>
            {isMobileMenuOpen ? "✕" : "☰"}
          </button>
        </div>

      </div>
    </header>
  );
};

export default Header;