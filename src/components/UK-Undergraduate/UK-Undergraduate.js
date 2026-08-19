import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./UK-Undergraduate.css";
import logo from "../../assets/Edutech-logo.svg";

const UKUndergraduate = () => {
  const navigate = useNavigate();

  useEffect(() => {
    // scroll reveal
    const els = document.querySelectorAll('[data-reveal]');
    if ('IntersectionObserver' in window) {
      const io = new IntersectionObserver((entries) => {
        entries.forEach(e => { 
          if (e.isIntersecting) { 
            e.target.classList.add('in'); 
            io.unobserve(e.target); 
          } 
        });
      }, { threshold: 0.15 });
      els.forEach(el => io.observe(el));
      
      return () => io.disconnect();
    } else {
      els.forEach(el => el.classList.add('in'));
    }
  }, []);

  const openWhatsApp = () => {
    const whatsappNumber = "917330611818";
    const message = encodeURIComponent(
      "Hi EduTechEX, I am interested in UK Undergraduate Admissions. I would like to book a counselling session."
    );
    window.open(`https://api.whatsapp.com/send?phone=${whatsappNumber}&text=${message}`, "_blank", "noopener,noreferrer");
  };

  const toggleMenu = () => {
    const links = document.querySelector('nav.links');
    if (links) {
      const open = links.style.display === 'flex';
      links.style.display = open ? 'none' : 'flex';
      links.style.cssText = open ? '' : 'display:flex; flex-direction:column; position:absolute; top:68px; left:0; right:0; background:#FFFFFF; padding:20px 28px; gap:16px; border-bottom:1px solid #E8F0FE;';
    }
  };

  return (
    <div className="uk-undergraduate-page">
      <header className="site">
        <div className="wrap nav">
          <a href="#top" className="logo" onClick={(e) => { e.preventDefault(); navigate("/"); }} aria-label="EduTechEX Home">
            <img src={logo} alt="EduTechEX" style={{ height: "32px", width: "auto" }} />
          </a>
          <nav className="links">
           
            <a href="#services" className="active">UK Undergraduate</a>
            <a href="#subjects">Study Areas</a>
            <a href="#international">International Students</a>
            <button onClick={openWhatsApp} className="nav-cta">Book a Counselling Call</button>
          </nav>
          <button className="burger" aria-label="Menu" onClick={toggleMenu}><span></span><span></span><span></span></button>
        </div>
      </header>

      <main id="top">
        {/* HERO */}
        <section className="hero">
          <div className="wrap hero-grid">
            <div>
              <span className="eyebrow">UK Undergraduate Admissions</span>
              <h1>Study in the UK. <em>We'll get you there.</em></h1>
              <p className="lede">
                Comprehensive guidance and application support for students seeking undergraduate places at UK universities —
                from choosing a course to submitting your UCAS application, right through to your visa.
              </p>
              <div className="hero-ctas">
                <a href="#services" className="btn btn-primary">Explore UK Admissions Services</a>
                <button onClick={openWhatsApp} className="btn btn-ghost">Talk to a Counsellor</button>
              </div>
              <div className="hero-stat">
                <strong>One plan, start to finish</strong>
                Built to support Indian students through every stage of the UCAS cycle — university selection, application, and beyond.
              </div>
            </div>
            <div className="hero-side">
              <span className="eyebrow">On this page</span>
              
            </div>
          </div>
        </section>

        {/* JOURNEY STRIP */}
        <section className="journey">
          <div className="wrap">
            <div className="head" data-reveal="true">
              <span className="eyebrow">The Application Journey</span>
              <h2>Seven stages. One counsellor with you at each one.</h2>
              <p>This is the actual sequence a UCAS application moves through — we stay with you from the first shortlist to the day your visa is approved.</p>
            </div>
            <div className="stamps" data-reveal="true">
              <div className="stamp">
                <div className="dot"></div>
                <div className="label">Stage 1</div>
                <div className="title">Selection</div>
                <div className="desc">Profile assessment, course &amp; university shortlisting</div>
              </div>
              <div className="stamp">
                <div className="dot"></div>
                <div className="label">Stage 2</div>
                <div className="title">UCAS Application</div>
                <div className="desc">Account setup, form guidance, deadline planning</div>
              </div>
              <div className="stamp">
                <div className="dot"></div>
                <div className="label">Stage 3</div>
                <div className="title">Personal Statement</div>
                <div className="desc">Structure, subject framing, review</div>
              </div>
              <div className="stamp">
                <div className="dot"></div>
                <div className="label">Stage 4</div>
                <div className="title">References</div>
                <div className="desc">Guidance on requirements &amp; documentation</div>
              </div>
              <div className="stamp">
                <div className="dot"></div>
                <div className="label">Stage 5</div>
                <div className="title">Admissions Tests</div>
                <div className="desc">UCAT, IELTS &amp; course-specific tests</div>
              </div>
              <div className="stamp">
                <div className="dot"></div>
                <div className="label">Stage 6</div>
                <div className="title">Offers</div>
                <div className="desc">Firm/insurance choices, decision guidance</div>
              </div>
              <div className="stamp">
                <div className="dot"></div>
                <div className="label">Stage 7</div>
                <div className="title">Visa &amp; Departure</div>
                <div className="desc">CAS process, documents, pre-departure</div>
              </div>
            </div>
          </div>
        </section>

        {/* SERVICES */}
        <section className="section" id="services">
          <div className="wrap">
            <div className="section-head" data-reveal="true">
              <span className="eyebrow">What We Provide</span>
              <h2>UK Undergraduate Admissions Services</h2>
              <p>A full service line, not a single add-on — built around what a UCAS application actually requires at every step.</p>
            </div>

            <div className="services-grid" data-reveal="true">
              <div className="service-card">
                <h3>University &amp; Course Selection</h3>
                <ul>
                  <li>Academic profile assessment</li>
                  <li>Course &amp; subject selection</li>
                  <li>University comparison &amp; shortlisting</li>
                  <li>Ambitious, target &amp; safe choices</li>
                </ul>
              </div>
              <div className="service-card">
                <h3>UCAS Application Support</h3>
                <ul>
                  <li>Online UCAS application service</li>
                  <li>General advice about UCAS</li>
                  <li>Application strategy &amp; deadlines</li>
                  <li>Submission guidance</li>
                </ul>
              </div>
              <div className="service-card">
                <h3>Personal Statement Support</h3>
                <ul>
                  <li>Structure &amp; review</li>
                  <li>Subject-specific guidance</li>
                  <li>Academic &amp; extracurricular framing</li>
                  <li>Final review before submission</li>
                </ul>
              </div>
              <div className="service-card">
                <h3>Academic Reference Guidance</h3>
                <ul>
                  <li>Reference requirement guidance</li>
                  <li>Support coordinating with your school</li>
                  <li>Application document checklist</li>
                  <li>Transcript &amp; predicted-grade guidance</li>
                </ul>
              </div>
              <div className="service-card">
                <h3>UK Admissions Counselling</h3>
                <ul>
                  <li>One-to-one counselling</li>
                  <li>Career &amp; subject guidance</li>
                  <li>UK pathway planning</li>
                  <li>Application strategy</li>
                </ul>
              </div>
              <div className="service-card">
                <h3>Entrance Examination Support</h3>
                <ul>
                  <li>UCAT preparation</li>
                  <li>IELTS preparation</li>
                  <li>English-language guidance</li>
                  <li>Course-specific admissions tests</li>
                </ul>
              </div>
              <div className="service-card">
                <h3>Medical &amp; Healthcare Admissions</h3>
                <ul>
                  <li>Medicine, Dentistry, Veterinary, Pharmacy</li>
                  <li>Nursing &amp; Physiotherapy</li>
                  <li>UCAT guidance &amp; interview prep</li>
                  <li>Medical school selection strategy</li>
                </ul>
              </div>
              <div className="service-card">
                <h3>Support for International Students</h3>
                <ul>
                  <li>Guidance for Indian applicants</li>
                  <li>Entry requirement &amp; equivalency guidance</li>
                  <li>Tuition &amp; scholarship guidance</li>
                  <li>Visa advisory services</li>
                </ul>
              </div>
              <div className="service-card">
                <h3>Offer &amp; Post-Application Support</h3>
                <ul>
                  <li>Offer evaluation</li>
                  <li>Conditional / unconditional guidance</li>
                  <li>Firm &amp; insurance choice guidance</li>
                  <li>UCAS decision guidance</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* SUBJECTS */}
        <section className="subjects" id="subjects">
          <div className="wrap">
            <div className="section-head" data-reveal="true">
              <span className="eyebrow">Explore by Subject</span>
              <h2>Popular UK Undergraduate Study Areas</h2>
              <p>Course selection support is built around your subject interest and academic profile — here's where most of our students start.</p>
            </div>
            <div className="chip-row" data-reveal="true">
              <span className="chip">Business &amp; Management</span>
              <span className="chip">Computer Science</span>
              <span className="chip">Engineering</span>
              <span className="chip">Medicine &amp; Healthcare</span>
              <span className="chip">Economics</span>
              <span className="chip">Law</span>
              <span className="chip">Psychology</span>
              <span className="chip">Biological Sciences</span>
              <span className="chip">Architecture &amp; Design</span>
              <span className="chip">Social Sciences</span>
              <span className="chip">Mathematics &amp; Statistics</span>
              <span className="chip">Arts &amp; Humanities</span>
            </div>
          </div>
        </section>

        {/* INTERNATIONAL */}
        <section className="intl" id="international">
          <div className="wrap intl-grid">
            <div data-reveal="true">
              <span className="eyebrow">For Indian Students</span>
              <h2>Applying to the UK from India</h2>
              <p className="copy">
                Built for students at government and public schools who don't have easy access to UK admissions guidance —
                every part of this service is designed to work on a slow connection and explain things in plain terms.
              </p>
              <button onClick={openWhatsApp} className="btn" style={{background: 'var(--ink)', color: 'var(--white)'}}>Start Your Application</button>
            </div>
            <ul className="checklist" data-reveal="true">
              <li>
                <span className="num">→</span>
                <div><strong>Entry requirements</strong><span>International entry requirements and academic equivalency guidance, mapped to Indian curricula.</span></div>
              </li>
              <li>
                <span className="num">→</span>
                <div><strong>English language</strong><span>IELTS preparation and English-language requirement guidance for your target universities.</span></div>
              </li>
              <li>
                <span className="num">→</span>
                <div><strong>Fees &amp; scholarships</strong><span>Tuition-fee guidance and scholarship guidance for eligible applicants.</span></div>
              </li>
              <li>
                <span className="num">→</span>
                <div><strong>Student visa</strong><span>UK Student Visa guidance, the CAS process, and financial-document guidance.</span></div>
              </li>
              <li>
                <span className="num">→</span>
                <div><strong>Pre-departure</strong><span>Practical guidance for the move — before you leave and after you land.</span></div>
              </li>
            </ul>
          </div>
        </section>

        {/* CTA */}
        <section className="cta-band" id="contact">
          <div className="wrap">
            <span className="eyebrow">Ready When You Are</span>
            <h2>Start with a free profile assessment</h2>
            <p>Tell us your subject interest and academic record — we'll shortlist universities and map out your UCAS timeline.</p>
            <button onClick={openWhatsApp} className="btn btn-primary">Book a Counselling Call</button>
          </div>
        </section>

      </main>

      
    </div>
  );
};

export default UKUndergraduate;