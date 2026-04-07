import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Header from "./components/header/header";
import Footer from "./components/footer/footer";
import Home from "./components/home/home";
import Pariksha from "./components/Products/pariksha";

import Internships from "./components/Consulting/internships/internships";
import StemLabs from "./components/Consulting/stem-labs/stem-labs";
import Information from "./components/Consulting/Information/information"; // ✅ FIXED
import AboutUs from "./components/More/about-us/about-us";
import ContactUs from "./components/More/Contact-us/contact-us";
function App() {
  return (
    <Router>
      <Header />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/pariksha" element={<Pariksha />} />
<Route path="/about" element={<AboutUs />} />
<Route path="/contact" element={<ContactUs />} />
        <Route path="/consulting/internships" element={<Internships />} />
        <Route path="/consulting/stem-labs" element={<StemLabs />} />
        <Route path="/consulting/information-technology" element={<Information />} />
      </Routes>

      <Footer />
    </Router>
  );
}

export default App;