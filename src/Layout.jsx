import React, { useState, useRef, useEffect } from "react";
import Footer from "./Footer";
import Home from "./Home";
import About from "./About";
import Service from "./Service";
import Products from "./Products";
import ContactUs from "./ContactUs";
import indecbrouchure from "../src/Brochure/indec_brouchure.pdf";
import Gallery from "./gallery";

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
    { label: "Mosquito Net Windows", path: "/products/mosquitonetwindows" },
    { label: "Mosquito Net Doors", path: "/products/mosquitonetdoors" },
    { label: "Curtains", path: "/products/curtains" },
    { label: "Blinds", path: "/products/blinds" },
    { label: "Vinyl Flooring", path: "/products/vinylflooring" },
    { label: "Wall Papers", path: "/products/wallpapers" },
  ];

  const scrollTo = (ref, sectionName) => {
    if (ref) {
      ref.current.scrollIntoView({ behavior: "smooth" });
      setActiveSection(sectionName);
    } else {
      window.scrollTo({ top: 0, behavior: "smooth" });
      setActiveSection("/");
    }
    setMobileNavOpen(false);
    setProductsDropdownOpen(false);
  };

  // ✅ Scroll tracking + Dynamic title update
  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const offset = 100;

      if (scrollY < aboutRef.current.offsetTop - offset) {
        setActiveSection("/");
        document.title = "Indec Interiors | Home";
      } else if (scrollY < serviceRef.current.offsetTop - offset) {
        setActiveSection("who-we-are");
        document.title = "Indec Interiors | About Us";
      } else if (scrollY < productRef.current.offsetTop - offset) {
        setActiveSection("service");
        document.title = "Indec Interiors | Services";
      } else if (scrollY < contactRef.current.offsetTop - offset) {
        setActiveSection("ourProducts");
        document.title = "Indec Interiors | Products";
      } else {
        setActiveSection("contact");
        document.title = "Indec Interiors | Contact Us";
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleProductsDropdown = () => {
    if (window.innerWidth <= 768) setProductsDropdownOpen(prev => !prev);
  };

  return (
    <div className="container-fluid p-0">
      {/* HEADER */}
      <div className="sticky-top">
        <header id="header" className="d-flex align-items-center">
          <div className="container d-flex justify-content-between align-items-center">
            {/* LOGO */}
            <div id="logo">
              <h1>
                <a href="#" className="logo-text">Indec</a>
              </h1>
              <h4>Interiors</h4>
            </div>

            {/* NAVBAR */}
            <nav className={`navbar ${isMobileNavOpen ? "navbar-mobile active" : ""}`}>
              <ul>
                <li>
                  <a
                    className={`nav-link ${activeSection === "/" ? "active" : ""}`}
                    onClick={() => scrollTo(homeRef, "/")}
                  >What we do</a>
                </li>
                <li>
                  <a
                    className={`nav-link ${activeSection === "who-we-are" ? "active" : ""}`}
                    onClick={() => scrollTo(aboutRef, "who-we-are")}
                  >Who we are</a>
                </li>
                <li>
                  <a
                    className={`nav-link ${activeSection === "service" ? "active" : ""}`}
                    onClick={() => scrollTo(serviceRef, "service")}
                  >Services</a>
                </li>


                <li className={`dropdown ${isProductsDropdownOpen ? "active" : ""}`}>
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

                <li>
                  <a
                    className={`nav-link ${activeSection === "contact" ? "active" : ""}`}
                    onClick={() => scrollTo(contactRef, "contact")}
                  >Contact</a>
                </li>

                <li>
                  <a className="nav-link" href={indecbrouchure} download="indec_brouchure.pdf">Brochure</a>
                </li>
                <a href="/gallery">Gallery</a>
              </ul>

              {/* MOBILE NAV TOGGLE */}
              <i
                className={`bi ${isMobileNavOpen ? "bi-x" : "bi-list"} mobile-nav-toggle`}
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
