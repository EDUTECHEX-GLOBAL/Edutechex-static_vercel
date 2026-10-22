import React, { Component, lazy, Suspense, useEffect } from "react";
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

function lazyWithChunkRecovery(importer) {
  return lazy(async () => {
    const recoveryKey = `chunk-reload:${window.location.pathname}`;

    try {
      const module = await importer();
      window.sessionStorage.removeItem(recoveryKey);
      return module;
    } catch (error) {
      try {
        if (!window.sessionStorage.getItem(recoveryKey)) {
          window.sessionStorage.setItem(recoveryKey, "1");
          window.location.reload();
        }
      } catch {
        // Storage can be unavailable in privacy-restricted browsing modes.
      }

      throw error;
    }
  });
}

class RouteErrorBoundary extends Component {
  state = { hasError: false };

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  render() {
    if (this.state.hasError) {
      return (
        <main className="route-error" role="alert">
          <h1>This page couldn’t load</h1>
          <p>Please check your connection and try again.</p>
          <button type="button" onClick={() => window.location.reload()}>
            Reload page
          </button>
        </main>
      );
    }

    return this.props.children;
  }
}

// Keep admission routes split into small, on-demand bundles.
const IvyLeague = lazyWithChunkRecovery(() => import("./components/Ivy-League-admission/Ivy-League"));
const CanadaAdmission = lazyWithChunkRecovery(() => import("./components/canada-admission/canada"));
const AustraliaNzAdmission = lazyWithChunkRecovery(() => import("./components/australia-nz-admission/australia-nz"));
const MedicalAdmission = lazyWithChunkRecovery(() => import("./components/Medical-admission/medical"));
const UKUndergraduate = lazyWithChunkRecovery(() => import("./components/UK-Undergraduate/UK-Undergraduate"));
const USAAdmission = lazyWithChunkRecovery(() => import("./components/USA-admission/usa"));
const Career = lazyWithChunkRecovery(() => import("./components/Career-admission/Career"));

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

      <RouteErrorBoundary>
      <Suspense fallback={<main className="route-loading" role="status">Loading page…</main>}>
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
      </RouteErrorBoundary>

      <Footer />
    </Router>
  );
}

export default App;
