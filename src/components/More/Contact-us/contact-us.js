import React from 'react';
import './contact-us.css';
import { Helmet } from "react-helmet-async";

const LocationIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" fill="#555"/>
  </svg>
);

const PhoneIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z" fill="#555"/>
  </svg>
);

const EmailIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" fill="#555"/>
  </svg>
);

const WhiteLocationIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" fill="#ffffff"/>
  </svg>
);

const WhitePhoneIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z" fill="#ffffff"/>
  </svg>
);

const WhiteEmailIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" fill="#ffffff"/>
  </svg>
);

const ContactUs = () => {
 return (
  <>
    <Helmet>
      <title>Contact EduTechEx | Support & Office Details</title>
      <meta
        name="description"
        content="Contact EduTechEx for support, inquiries, and guidance. Reach us via phone, email, or visit our office in Hyderabad."
      />
      <link rel="canonical" href="https://www.edutechex.com/contact" />
    </Helmet>

    <div className="contact-container">
      <div className="contact-wrapper">

        <p className="contact-label">Contact us</p>
        <h2 className="contact-subtitle">We're here to help!</h2>

        {/* INFO CARDS */}
        <div className="contact-grid">

          {/* Customer Support — Blue Card */}
          <div className="contact-card contact-card--blue">
            <h3 className="card-title card-title--white">Customer Support</h3>
            <div className="card-row">
              <WhiteLocationIcon />
              <span className="card-text--white">Hi-tech City, Hyderabad 500081</span>
            </div>
            <div className="card-row">
              <WhitePhoneIcon />
              <span className="card-text--white">7330611818</span>
            </div>
            <div className="card-row">
              <WhiteEmailIcon />
              <span className="card-text--white">support@edutechex.com</span>
            </div>
          </div>

          {/* Contact Address */}
          <div className="contact-card">
            <h3 className="card-title">Contact Address</h3>
            <div className="card-row">
              <LocationIcon />
              <span className="card-text">Hi-tech City, Hyderabad 500081</span>
            </div>
            <div className="card-row">
              <PhoneIcon />
              <span className="card-text">7330611818</span>
            </div>
            <div className="card-row">
              <EmailIcon />
              <span className="card-text">office@edutechex.com</span>
            </div>
            <div className="card-row card-row--email-second">
             
            </div>
          </div>

          {/* Office Address */}
          <div className="contact-card">
            <h3 className="card-title">Office Address</h3>
            <div className="card-row">
              <LocationIcon />
            </div>
            <p className="company-name">EDUTECHEX GLOBAL</p>
            <p className="company-sub">
              AITECHEX Quantum Innovative Solutions Pvt. Ltd.<br />
              Hi-tech City, Hyderabad, Telangana 500081, India
            </p>
          </div>

        </div>

        {/* IMAGE LEFT, MAP RIGHT — side by side */}
        <div className="contact-bottom">

          {/* Image on the left */}
          <div className="contact-img-wrap">
            <img
              src="https://eduport.webestica.com/assets/images/element/contact.svg"
              className="contact-img"
              alt="Contact illustration"
            />
          </div>

          {/* Map on the right */}
          <div className="contact-map-wrap">
            <iframe
              className="contact-map"
              src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15225.207053081025!2d78.3835095!3d17.4452651!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x2fa1a45a1ad651dd!2sEduTechEx%20Global!5e0!3m2!1sen!2sin!4v1659180639197!5m2!1sen!2sin"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="EduTechEx Location"
            />
          </div>

        </div>

      </div>
    </div>
    </>
  );
};

export default ContactUs;