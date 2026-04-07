import React from 'react';
import './contact-us.css';

const ContactUs = () => {
  return (
    <div className="contact-container">
      <div className="contact-wrapper">
        <h2 className="contact-title">Contact us</h2>
        <p className="contact-subtitle">We're here to help!</p>

        <div className="contact-grid">
          {/* Customer Support */}
          <div className="contact-card">
            <h3 className="card-title">Customer Support</h3>
            <p className="card-address">Hi-tech City, Hyderabad 500081</p>
            <div className="contact-info">
              <p className="contact-phone">📞 7330611818</p>
              <p className="contact-email">✉️ support@edutechex.com</p>
            </div>
          </div>

          {/* Contact Address */}
          <div className="contact-card">
            <h3 className="card-title">Contact Address</h3>
            <p className="card-address">Hi-tech City, Hyderabad 500081</p>
            <div className="contact-info">
              <p className="contact-phone">📞 7330611818</p>
              <p className="contact-email">✉️</p>
            </div>
          </div>

          {/* Office Address */}
          <div className="contact-card">
            <h3 className="card-title">Office Address</h3>
            <p className="company-name">EDUTECHEX GLOBAL</p>
            <p className="company-sub">AITECHEX Quantum Innovative Solutions Pvt. Ltd.</p>
            <p className="card-address">Hi-tech City, Hyderabad, Telangana 500081, India</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;