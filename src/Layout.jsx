import React, { useState, useRef, useEffect } from "react";
import Footer from "./Footer";
import Home from "./Home";
import About from "./About";
import Service from "./Service";
import Products from "./Products";
import ContactUs from "./ContactUs";
import indecbrouchure from '../src/Brochure/indec_brouchure.pdf';

const Layout = () => {
  const [isMobileNavOpen, setMobileNavOpen] = useState(false);
  const [isProductsDropdownOpen, setProductsDropdownOpen] = useState(false);

  const homeRef = useRef(null);
  const aboutRef = useRef(null);
  const serviceRef = useRef(null);
  const productRef = useRef(null);
  const contactRef = useRef(null);

  const [activeSection, setActiveSection] = useState("/");

  const products = [
    { label: "Mosquito Net Windows", path: "/product/mosquitonetwindows" },
    { label: "Mosquito Net Doors", path: "/product/mosquitonetdoors" },
    { label: "Curtains", path: "/product/curtains" },
    { label: "Blinds", path: "/product/blinds" },
    { label: "Vinyl Flooring", path: "/product/vinylflooring" },
    { label: "Wall Papers", path: "/product/wallpapers" }
  ];

  const scrollTo = (ref, sectionName) => {
    if(ref) {
      ref.current.scrollIntoView({ behavior: "smooth" });
      setActiveSection(sectionName);
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      setActiveSection("/");
    }
    if (isMobileNavOpen) setMobileNavOpen(false);
    if (isProductsDropdownOpen) setProductsDropdownOpen(false);
  };

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const offset = 100;

      if (scrollY < aboutRef.current.offsetTop - offset) setActiveSection("/");
      else if (scrollY < serviceRef.current.offsetTop - offset) setActiveSection("who-we-are");
      else if (scrollY < productRef.current.offsetTop - offset) setActiveSection("ourProducts");
      else if (scrollY < contactRef.current.offsetTop - offset) setActiveSection("contact");
      else setActiveSection("contact");
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleProductsDropdown = () => {
    if(window.innerWidth <= 768) setProductsDropdownOpen(prev => !prev);
  }

  return (
    <div className="container-fluid p-0">
      <div className="sticky-top">
        <header id="header" className="d-flex align-items-center">
          <div className="container d-flex justify-content-between">
            {/* LOGO */}
            <div id="logo">
              <h1>
                <a href="#" className="logo-text">
                  Indec
                </a>
              </h1><h4>Interiors</h4>
            </div>

            {/* NAVBAR */}
            <nav id="navbar" className={`navbar ${isMobileNavOpen ? 'navbar-mobile' : ''}`}>
              <ul>
                <li><a className={`nav-link ${activeSection === "/" ? "active" : ""}`} onClick={() => scrollTo(homeRef, "/")}>What we do</a></li>
                <li><a className={`nav-link ${activeSection === "who-we-are" ? "active" : ""}`} onClick={() => scrollTo(aboutRef, "who-we-are")}>Who we are</a></li>
                <li><a className={`nav-link ${activeSection === "service" ? "active" : ""}`} onClick={() => scrollTo(serviceRef, "service")}>Services</a></li>

                <li className={`dropdown ${isProductsDropdownOpen ? 'active' : ''}`}>
                  <button className="nav-link dropdown-toggle-btn" onClick={toggleProductsDropdown}>
                    Products <i className={`bi ${isProductsDropdownOpen ? "bi-chevron-up" : "bi-chevron-down"}`}></i>
                  </button>
                  {(isProductsDropdownOpen || !isMobileNavOpen) && (
                    <ul>
                      {products.map((prod, idx) => (
                        <li key={idx}><a href={prod.path}>{prod.label}</a></li>
                      ))}
                    </ul>
                  )}
                </li>

                <li><a className={`nav-link ${activeSection === "contact" ? "active" : ""}`} onClick={() => scrollTo(contactRef, "contact")}>Contact</a></li>
                <li><a className="nav-link" href={indecbrouchure} download="indec_brouchure.pdf">Brochure</a></li>
              </ul>

              <i
                className={`bi ${isMobileNavOpen ? 'bi-x' : 'bi-list'} mobile-nav-toggle`}
                onClick={() => setMobileNavOpen(!isMobileNavOpen)}
              ></i>
            </nav>
          </div>
        </header>
      </div>

      {/* SECTIONS */}
      <div ref={homeRef}><Home /></div>
      <div ref={aboutRef}><About /></div>
      <div ref={serviceRef}><Service /></div>
      <div ref={productRef}><Products /></div>
      <div ref={contactRef}><ContactUs /></div>

      <Footer />
    </div>
  );
};

export default Layout;
