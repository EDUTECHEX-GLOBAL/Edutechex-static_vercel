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

          {/* Category Button - Properly sized */}
          <button className="category-btn">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
              <rect x="3" y="3" width="7" height="7" rx="1.5" />
              <rect x="14" y="3" width="7" height="7" rx="1.5" />
              <rect x="3" y="14" width="7" height="7" rx="1.5" />
              <rect x="14" y="14" width="7" height="7" rx="1.5" />
            </svg>
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
          {/* Cart Button with Proper Size */}
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