import React from 'react';
import './actionBox.css';

const ActionBox = ({ onRegisterClick }) => {
  return (
    <section className="action-box-section">
      <div className="action-box">
        <span className="action-deco action-deco--tl" />
        <span className="action-deco action-deco--br" />
        <div className="action-box-inner">
          <div className="action-box-text">
            <h3>Schedule a Counselling Session!</h3>
            <p>Reach out to our expert Counselors who can help you discover your potential, navigate with selecting the right curriculum, stream, course, industry and job.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ActionBox;