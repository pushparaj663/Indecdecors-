import React, { useState, useRef, useEffect } from "react";
import Footer from "./Footer";
import Home from "./Home";
import About from "./About";
import Service from "./Service";
import Products from "./Products";
import ContactUs from "./ContactUs";
import indecbrouchure from "../src/Brochure/indec_brouchure.pdf";

const Layout = () => {
  const [isMobileNavOpen, setMobileNavOpen] = useState(false);
  const [isProductsDropdownOpen, setProductsDropdownOpen] = useState(false);

  const homeRef = useRef(null);
  const aboutRef = useRef(null);
  const serviceRef = useRef(null);
  const productRef = useRef(null);
  const contactRef = useRef(null);

  const [activeSection, setActiveSection] = useState("home");

  const products = [
    { label: "Mosquito Net Windows", path: "/products/mosquitonetwindows" },
    { label: "Mosquito Net Doors", path: "/products/mosquitonetdoors" },
    { label: "Curtains", path: "/products/curtains" },
    { label: "Blinds", path: "/products/blinds" },
    { label: "Vinyl Flooring", path: "/products/vinylflooring" },
    { label: "Wall Papers", path: "/products/wallpapers" },
  ];

  // Helper: smooth scroll with header offset
  const scrollIntoViewWithOffset = (element, offset = 80) => {
    if (!element) return;
    const top = element.getBoundingClientRect().top + window.pageYOffset - offset;
    window.scrollTo({ top, behavior: "smooth" });
  };

  // Scroll to specific section (used by nav clicks)
  const scrollTo = (ref, sectionName, title) => {
    if (ref && ref.current) {
      scrollIntoViewWithOffset(ref.current, 80);
      setActiveSection(sectionName || "home");
      if (title) document.title = `Indec Interiors | ${title}`;
    } else {
      window.scrollTo({ top: 0, behavior: "smooth" });
      setActiveSection("home");
      document.title = "Indec Interiors | Home";
    }
    setMobileNavOpen(false);
    setProductsDropdownOpen(false);
  };

  // Explicit helper called by logo click
  const scrollToHome = () => {
    if (homeRef.current) {
      scrollIntoViewWithOffset(homeRef.current, 80);
    } else {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
    setActiveSection("home");
    document.title = "Indec Interiors | Home";
  };

  // ON MOUNT: ONLY if the navigation was a REFRESH, force to home.
  useEffect(() => {
    let navType;
    try {
      const navEntries = performance.getEntriesByType && performance.getEntriesByType("navigation");
      if (navEntries && navEntries.length) {
        navType = navEntries[0].type;
      } else if (performance.navigation) {
        navType = performance.navigation.type === 1 ? "reload" : "navigate";
      }
    } catch (e) {
      navType = undefined;
    }

    if (navType === "reload") {
      window.history.replaceState(null, "", "/");
      window.scrollTo({ top: 0, behavior: "instant" });
      setActiveSection("home");
      document.title = "Indec Interiors | Home";
      return;
    }

    const initialHash = window.location.hash;
    if (initialHash) {
      setTimeout(() => {
        if (initialHash === "#who-we-are" && aboutRef.current) scrollIntoViewWithOffset(aboutRef.current, 80);
        else if (initialHash === "#service" && serviceRef.current) scrollIntoViewWithOffset(serviceRef.current, 80);
        else if (initialHash === "#ourProducts" && productRef.current) scrollIntoViewWithOffset(productRef.current, 80);
        else if (initialHash === "#contact" && contactRef.current) scrollIntoViewWithOffset(contactRef.current, 80);
        else if (initialHash === "#home" && homeRef.current) scrollIntoViewWithOffset(homeRef.current, 80);
      }, 250);
    }
  }, []);

  // Track scroll and set activeSection / title
  useEffect(() => {
    const handleScroll = () => {
      const offset = 140;
      const y = window.scrollY;

      const sections = [
        { name: "home", ref: homeRef },
        { name: "who-we-are", ref: aboutRef },
        { name: "service", ref: serviceRef },
        { name: "ourProducts", ref: productRef },
        { name: "contact", ref: contactRef },
      ];

      for (let i = 0; i < sections.length; i++) {
        const cur = sections[i].ref.current;
        const next = sections[i + 1]?.ref?.current;
        if (cur) {
          const curTop = cur.offsetTop - offset;
          const nextTop = next ? next.offsetTop - offset : Infinity;
          if (y >= curTop && y < nextTop) {
            if (activeSection !== sections[i].name) {
              setActiveSection(sections[i].name);
              const mapping = {
                home: "Home",
                "who-we-are": "About Us",
                service: "Services",
                ourProducts: "Products",
                contact: "Contact Us",
              };
              document.title = `Indec Interiors | ${mapping[sections[i].name]}`;
            }
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    setTimeout(handleScroll, 300);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [activeSection]);

  const toggleProducts = () => {
    if (window.innerWidth <= 768) setProductsDropdownOpen(prev => !prev);
  };

  return (
    <div className="container-fluid p-0">
      <div className="sticky-top">
        <header id="header" className="d-flex align-items-center">
          <div className="container d-flex justify-content-between align-items-center">
            {/* LOGO */}
            <div id="logo" style={{ cursor: "pointer" }} onClick={scrollToHome}>
              <h1><span className="logo-text">Indec</span></h1>
              <h4>Interiors</h4>
            </div>

            {/* NAV */}
            <nav className={`navbar ${isMobileNavOpen ? "navbar-mobile active" : ""}`}>
              <ul>
                <li>
                  <a className={`nav-link ${activeSection === "home" ? "active" : ""}`} onClick={() => scrollTo(homeRef, "home", "Home")}>What we do</a>
                </li>
                <li>
                  <a className={`nav-link ${activeSection === "who-we-are" ? "active" : ""}`} onClick={() => scrollTo(aboutRef, "who-we-are", "About Us")}>Who we are</a>
                </li>
                <li>
                  <a className={`nav-link ${activeSection === "service" ? "active" : ""}`} onClick={() => scrollTo(serviceRef, "service", "Services")}>Services</a>
                </li>

                <li className={`dropdown ${isProductsDropdownOpen ? "active" : ""}`}>
                  <button className="nav-link dropdown-toggle-btn" onClick={toggleProducts}>Products <i className={`bi ${isProductsDropdownOpen ? "bi-chevron-up" : "bi-chevron-down"}`}></i></button>
                  {(isProductsDropdownOpen || !isMobileNavOpen) && (
                    <ul>
                      {products.map((p, i) => <li key={i}><a href={p.path}>{p.label}</a></li>)}
                    </ul>
                  )}
                </li>

                <li>
                  <a className={`nav-link ${activeSection === "contact" ? "active" : ""}`} onClick={() => scrollTo(contactRef, "contact", "Contact Us")}>Contact</a>
                </li>

                <li><a className="nav-link" href={indecbrouchure} download="indec_brouchure.pdf">Brochure</a></li>
                <li><a className="nav-link" href="/gallery">Gallery</a></li>
              </ul>

              <i className={`bi ${isMobileNavOpen ? "bi-x" : "bi-list"} mobile-nav-toggle`} onClick={() => setMobileNavOpen(prev => !prev)} />
            </nav>
          </div>
        </header>
      </div>

      {/* Sections */}
      <div ref={homeRef} id="home"><Home /></div>
      <div ref={aboutRef} id="who-we-are"><About /></div>
      <div ref={serviceRef} id="service"><Service /></div>
      <div ref={productRef} id="ourProducts"><Products /></div>
      <div ref={contactRef} id="contact"><ContactUs /></div>

      <Footer />
    </div>
  );
};

export default Layout;
