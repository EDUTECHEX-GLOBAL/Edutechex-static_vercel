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

          {/* Category Button - no icon, plain text only */}
          <button className="category-btn">
            <span>Category</span>
          </button>
        </div>

        {/* NAVIGATION */}
        <nav className={`nav ${isMobileMenuOpen ? 'active' : ''}`}>
          <button className="nav-link">Courses ▾</button>
          <button className="nav-link">Products ▾</button>
          <button className="nav-link">Consulting ▾</button>
          <button className="nav-link buy">Buy Courses</button>
          <button className="nav-link">More ▾</button>
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