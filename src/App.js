import React, { lazy, Suspense, useEffect } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
  useLocation,
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
const IvyLeague = lazy(() => import("./components/Ivy-League-admission/Ivy-League"));
const CanadaAdmission = lazy(() => import("./components/canada-admission/canada"));
const AustraliaNzAdmission = lazy(() => import("./components/australia-nz-admission/australia-nz"));
const MedicalAdmission = lazy(() => import("./components/Medical-admission/medical"));
const UKUndergraduate = lazy(() => import("./components/UK-Undergraduate/UK-Undergraduate"));
const USAAdmission = lazy(() => import("./components/USA-admission/usa"));
const Career = lazy(() => import("./components/Career-admission/Career"));

function ScrollToTop() {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "auto" });
  }, [location.pathname]);

  return null;
}
function App() {
  return (
    <Router>
      <ScrollToTop />
      <Header />

      <Suspense fallback={<main className="route-loading" aria-label="Loading page" />}>
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
      </Suspense>

      <Footer />
    </Router>
  );
}

export default App;
