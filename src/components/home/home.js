import React, { useState } from 'react';
import './home.css';
import { Helmet } from "react-helmet-async";

// Import all section components
import Hero from '../hero/hero';
import Stats from '../stats/stats';
import CareerCards from '../careerCards/careerCards';
import MostPopularCourses from '../most/most';
import ActionBox from '../actionBox/actionBox';
import Reviews from '../reviews/reviews';
import Destinations from '../destinations/destinations';
import PoweredBy from '../poweredBy/poweredBy';
import Modals from '../modals/modals';
import WhatsApp from '../whatsapp/whatsapp';

const Home = () => {
  const [videoModal, setVideoModal] = useState(false);
  const [counselModal, setCounselModal] = useState(false);
  const [successModal, setSuccessModal] = useState(false);

  return (
    <div className="home-wrapper">

      <Helmet>
        <title>EDUTECHEX - Unlock Your Potential</title>
        <meta
          name="description"
          content="Unlock your passion and get it mapped to 10K+ courses & 5K+ global universities and companies through scientific methodologies."
        />
        <link rel="canonical" href="https://www.edutechex.com/" />
      </Helmet>
      <Hero onVideoModalOpen={() => setVideoModal(true)} />
      <Stats />
      <CareerCards />
      <MostPopularCourses />
      <ActionBox onRegisterClick={() => setCounselModal(true)} />
      <Reviews />
      <Destinations />
      <PoweredBy />
      
      <Modals 
        videoModal={videoModal}
        setVideoModal={setVideoModal}
        counselModal={counselModal}
        setCounselModal={setCounselModal}
        successModal={successModal}
        setSuccessModal={setSuccessModal}
      />
      <WhatsApp />
    </div>
  );
};

export default Home;