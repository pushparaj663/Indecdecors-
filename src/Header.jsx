import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import "../src/Header.css";
import indecbrouchure from "../src/Brochure/indec_brouchure.pdf";

const Header = () => {
  const location = useLocation();
  const [isMobileNavOpen, setMobileNavOpen] = useState(false);
  const [isProductsDropdownOpen, setProductsDropdownOpen] = useState(false);

  const menuItems = [
    { label: "What we do", path: "/" },
    { label: "Who we are", path: "/who-we-are" },
    { label: "Services", path: "/service" },
    { label: "Products", dropdown: true },
    { label: "Contact", path: "/contact" },
    { label: "Brochure", path: indecbrouchure, download: true },
    { label: "Gallery", path: "/gallery" },

  ];

  const products = [
    { label: "Mosquito Net Windows", path: "/products/mosquitonetwindows" },
    { label: "Mosquito Net Doors", path: "/products/mosquitonetdoors" },
    { label: "Curtains", path: "/products/curtains" },
    { label: "Blinds", path: "/products/blinds" },
    { label: "Vinyl Flooring", path: "/products/vinylflooring" },
    { label: "WallPapers", path: "/products/wallpapers" },
  ];

  const toggleMobileNav = () => setMobileNavOpen(prev => !prev);
  const toggleProductsDropdown = () => setProductsDropdownOpen(prev => !prev);

  const isActive = (path) =>
    path === "/" ? location.pathname === "/" : location.pathname.startsWith(path);

  // ✅ Dynamic Page Title Only
  const [pageTitle, setPageTitle] = useState("Indec Interiors | Home");

  useEffect(() => {
  switch (location.pathname) {
    case "/":
      setPageTitle("Indec Interiors | Home");
      break;
    case "/who-we-are":
      setPageTitle("Indec Interiors | Who We Are");
      break;
    case "/service":
      setPageTitle("Indec Interiors | Services");
      break;
    case "/products":
    case "/products/mosquitonetwindows":
    case "/products/mosquitonetdoors":
    case "/products/curtains":
    case "/products/blinds":
    case "/products/vinylflooring":
    case "/products/wallpapers":
      setPageTitle("Indec Interiors | Products");
      break;
    case "/gallery":                // ✅ Added gallery route correctly
      setPageTitle("Indec Interiors | Gallery");
      break;
    case "/contact":
      setPageTitle("Indec Interiors | Contact Us");
      break;
    default:
      setPageTitle("Indec Interiors");
  }
}, [location.pathname]);

 
  return (
    <>
      {/* ✅ Page title only */}
      <Helmet>
        <title>{pageTitle}</title>
      </Helmet>

      <header id="header" className="d-flex align-items-center">
        <div className="container d-flex justify-content-between align-items-center">
          {/* Logo */}
          <div id="logo">
            <h1>
              <a href="/" className="logo-text">
                Indec
              </a>
            </h1>
            <h4>Interiors</h4>
          </div>

          {/* Navbar */}
          <nav className={`navbar ${isMobileNavOpen ? "navbar-mobile" : ""}`}>
            <ul>
              {menuItems.map((item, idx) => (
                <li key={idx} className={item.dropdown ? "dropdown" : ""}>
                  {item.dropdown ? (
                    <>
                      <button
                        className="nav-link dropdown-toggle-btn"
                        onClick={toggleProductsDropdown}
                      >
                        {item.label}{" "}
                        <i
                          className={`bi ${
                            isProductsDropdownOpen
                              ? "bi-chevron-up"
                              : "bi-chevron-down"
                          }`}
                        ></i>
                      </button>
                      {(isProductsDropdownOpen || !isMobileNavOpen) && (
                        <ul className="dropdown-menu">
                          {products.map((prod, index) => (
                            <li key={index}>
                              <a
                                href={prod.path}
                                className={isActive(prod.path) ? "active" : ""}
                              >
                                {prod.label}
                              </a>
                            </li>
                          ))}
                        </ul>
                      )}
                    </>
                  ) : item.download ? (
                    <a href={item.path} download>
                      {item.label}
                    </a>
                  ) : (
                    <a
                      href={item.path}
                      className={isActive(item.path) ? "active" : ""}
                    >
                      {item.label}
                    </a>
                  )}
                </li>
              ))}
            </ul>

            <i
              className={`bi ${
                isMobileNavOpen ? "bi-x" : "bi-list"
              } mobile-nav-toggle`}
              onClick={toggleMobileNav}
            ></i>
          </nav>
        </div>
      </header>
    </>
  );
};

export default Header;
