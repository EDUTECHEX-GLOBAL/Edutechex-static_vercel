import React, { useState } from 'react';
import './header.css';
import logo from './assets/Edutech-logo.svg';
import cartIcon from './assets/cart.png';

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header className="header">
      <div className="header-container">

        {/* LEFT SECTION */}
        <div className="left-section">
          {/* Logo */}
          <img src={logo} alt="EDUTECH" className="logo-img" />

          {/* Category Button - with grid icon like Angular */}
          <button className="category-btn">
            <i className="bi bi-ui-radios-grid category-icon"></i>
            <span>Category</span>
          </button>
        </div>

        {/* NAVIGATION */}
        <nav className={`nav ${isMobileMenuOpen ? 'active' : ''}`}>
          <button className="nav-link">
            Courses
            <svg className="chevron-icon" viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
              <path fillRule="evenodd" d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z"/>
            </svg>
          </button>
          <button className="nav-link">
            Products
            <svg className="chevron-icon" viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
              <path fillRule="evenodd" d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z"/>
            </svg>
          </button>
          <button className="nav-link">
            Consulting
            <svg className="chevron-icon" viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
              <path fillRule="evenodd" d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z"/>
            </svg>
          </button>
          <button className="nav-link buy">Buy Courses</button>
          <button className="nav-link">
            More
            <svg className="chevron-icon" viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
              <path fillRule="evenodd" d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z"/>
            </svg>
          </button>
        </nav>

        {/* RIGHT SECTION */}
        <div className="right-section">
          {/* Cart Button */}
          <button className="cart-btn">
            <img src={cartIcon} alt="Cart" className="cart-icon-img" />
          </button>

          {/* Mobile Menu Toggle */}
          <button
            className="mobile-menu"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            ☰
          </button>
        </div>

      </div>
    </header>
  );
};

export default Header;