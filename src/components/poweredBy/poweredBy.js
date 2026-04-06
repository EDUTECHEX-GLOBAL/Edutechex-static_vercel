import React from 'react';
import './poweredBy.css';
import awsLogo from '../../assets/Member AWS EdStart logo.png';
import nvidiaLogo from '../../assets/nvidia.jpeg';

const PoweredBy = () => {
  return (
    <section className="powered-section">
      <div className="powered-container">
        <span className="powered-label">Powered By :</span>
        <a href="https://aws.amazon.com/education/edstart/" target="_blank" rel="noopener noreferrer" className="powered-logo-link">
          <img src={awsLogo} alt="AWS EdStart Member" className="powered-logo powered-logo--aws" />
        </a>
        <a href="https://www.nvidia.com/en-in/startups/" target="_blank" rel="noopener noreferrer" className="powered-logo-link">
          <img src={nvidiaLogo} alt="NVIDIA Inception Program" className="powered-logo powered-logo--nvidia" />
        </a>
      </div>
    </section>
  );
};

export default PoweredBy;