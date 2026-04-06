import React from 'react';
import './careerCards.css';
import banner1 from '../../assets/Banner 07.jpg';
import banner2 from '../../assets/Banner 05.jpg';

const CareerCards = () => {
  return (
    <section className="career-cards-section">
      <div className="career-card">
        <img src={banner1} alt="Navigate Your Careers" className="career-card-img" />
        <div className="career-card-content navigate-content">
          <h3>Navigate Your Careers with EDUTECHEX</h3>
          <p>Careers aligned with Passion</p>
          <button className="read-more-btn read-more-btn--dark">Read More</button>
        </div>
      </div>
      <div className="career-card">
        <img src={banner2} alt="Mapping in Core Emerging Sectors" className="career-card-img" />
        <div className="career-card-content">
          <h3>Mapping in Core Emerging Sectors</h3>
          <p>The Innovative Global Opportunities</p>
          <button className="read-more-btn">Read More</button>
        </div>
      </div>
    </section>
  );
};

export default CareerCards;