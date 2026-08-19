import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";

import Header from "./components/header/header";
import Footer from "./components/footer/footer";
import Home from "./components/home/home";
import Pariksha from "./components/Products/pariksha";

import Internships from "./components/Consulting/internships/internships";
import StemLabs from "./components/Consulting/stem-labs/stem-labs";
import Information from "./components/Consulting/Information/information";

import AboutUs from "./components/More/about-us/about-us";
import ContactUs from "./components/More/Contact-us/contact-us";
import Testimonails from "./components/More/Testimonails/testimonails";

import Shop from "./components/buycourses/shop";

import K12 from "./components/courses/k12/k12";
import Undergraduate from "./components/courses/undergraduate/undergraduate";
import Postgraduate from "./components/courses/postgraduate/postgraduate";

// Ivy League
import IvyLeague from "./components/Ivy-League-admission/Ivy-League";

// Other Admissions
import CanadaAdmission from "./components/canada-admission/canada";
import AustraliaNzAdmission from "./components/australia-nz-admission/australia-nz";
import MedicalAdmission from "./components/Medical-admission/medical";
import UKUndergraduate from "./components/UK-Undergraduate/UK-Undergraduate";
import USAAdmission from "./components/USA-admission/usa";
import Career from "./components/Career-admission/Career";
function App() {
  return (
    <Router>
      <Header />

      <Routes>
        {/* ================= HOME ================= */}
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />

        {/* ================= PRODUCTS ================= */}
        <Route path="/pariksha" element={<Pariksha />} />

        {/* ================= CONSULTING ================= */}
        <Route
          path="/consulting/internships"
          element={<Internships />}
        />

        <Route
          path="/consulting/stem-labs"
          element={<StemLabs />}
        />

        <Route
          path="/consulting/information-technology"
          element={<Information />}
        />

        {/* ================= MORE ================= */}
        <Route path="/about" element={<AboutUs />} />

        <Route path="/contact" element={<ContactUs />} />

        <Route
          path="/testimonials"
          element={<Testimonails />}
        />

        {/* ================= BUY COURSES ================= */}
        <Route path="/buy-courses" element={<Shop />} />

        {/* ================= COURSES ================= */}
        <Route path="/courses/k12" element={<K12 />} />

        <Route
          path="/courses/undergraduate"
          element={<Undergraduate />}
        />

        <Route
          path="/courses/postgraduate"
          element={<Postgraduate />}
        />

        {/* ================= IVY LEAGUE ================= */}
        <Route
          path="/ivy-league"
          element={<IvyLeague />}
        />

        {/* ================= OTHER ADMISSIONS ================= */}
        <Route path="/canada-admission" element={<CanadaAdmission />} />
        <Route path="/australia-nz-admission" element={<AustraliaNzAdmission />} />
        <Route path="/medical-admission" element={<MedicalAdmission />} />
        <Route path="/uk-undergraduate" element={<UKUndergraduate />} />
        <Route path="/usa-admission" element={<USAAdmission />} />
        <Route path="/career-admission" element={<Career />} />

        {/* ================= UNKNOWN ROUTES ================= */}
        <Route
          path="*"
          element={<Navigate to="/" replace />}
        />
      </Routes>

      <Footer />
    </Router>
  );
}

export default App;