import React, { useState, useEffect } from 'react';
import './whatsapp.css';

const WhatsAppIcon = () => (
  <svg viewBox="0 0 32 32" width="28" height="28" fill="white">
    <path d="M16 2C8.28 2 2 8.28 2 16c0 2.46.66 4.76 1.8 6.76L2 30l7.46-1.76A13.93 13.93 0 0016 30c7.72 0 14-6.28 14-14S23.72 2 16 2zm6.93 19.8c-.3.84-1.74 1.62-2.4 1.68-.62.06-1.2.28-4.06-.84-3.42-1.36-5.6-4.86-5.78-5.08-.16-.22-1.34-1.78-1.34-3.4 0-1.6.84-2.38 1.14-2.72.3-.32.66-.4.88-.4h.64c.2 0 .48-.08.74.56.3.7 1 2.44 1.08 2.62.08.18.14.4.02.64-.12.24-.18.38-.36.58-.18.2-.38.44-.54.6-.18.16-.36.34-.16.66.2.32.9 1.48 1.92 2.4 1.32 1.18 2.44 1.54 2.76 1.72.32.18.5.14.68-.08.2-.22.84-1 1.06-1.34.22-.34.44-.28.74-.16.3.1 1.9.9 2.22 1.06.32.18.54.26.62.4.08.16.08.9-.22 1.74z"/>
  </svg>
);

const WhatsApp = () => {
  const [bubbleVisible, setBubbleVisible] = useState(false);
  const [bubbleDismissed, setBubbleDismissed] = useState(false);

  useEffect(() => {
    if (bubbleDismissed) return;
    const timer = setTimeout(() => setBubbleVisible(true), 3000);
    return () => clearTimeout(timer);
  }, [bubbleDismissed]);

  const handleDismiss = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setBubbleVisible(false);
    setBubbleDismissed(true);
  };

  return (
    <div className="wa-wrapper">
      {/* Speech Bubble */}
      <div className={`wa-bubble ${bubbleVisible ? 'wa-bubble--visible' : ''}`}>
        <button className="wa-bubble__close" onClick={handleDismiss} aria-label="Close">✕</button>
        <p className="wa-bubble__text">
          Hi! Need help choosing the <strong>right course?</strong> Our advisor is ready!
        </p>
        <a
          href="https://api.whatsapp.com/send?phone=917330611818"
          className="wa-bubble__cta"
          target="_blank"
          rel="noopener noreferrer"
        >
          Chat on WhatsApp
        </a>
        <div className="wa-bubble__arrow" />
      </div>

      {/* WhatsApp button with continuous wave rings */}
      <div className="wa-btn-wrap">
        <div className="wa-wave-rings">
          <span className="wa-ring wa-ring--1"></span>
          <span className="wa-ring wa-ring--2"></span>
          <span className="wa-ring wa-ring--3"></span>
        </div>
        <a
          href="https://api.whatsapp.com/send?phone=917330611818"
          className="whatsapp-float"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Chat on WhatsApp"
        >
          <WhatsAppIcon />
        </a>
      </div>
    </div>
  );
};

export default WhatsApp;