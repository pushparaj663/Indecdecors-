import React, { useState } from "react";
import "../src/Header.css";
import indecbrouchure from "../src/Brochure/indec_brouchure.pdf";

const Header = ({ activeSection }) => {
  const [isMobileNavOpen, setMobileNavOpen] = useState(false);
  const [isProductsDropdownOpen, setProductsDropdownOpen] = useState(false);

  const toggleMobileNav = () => setMobileNavOpen((prev) => !prev);
  const toggleProductsDropdown = () => setProductsDropdownOpen((prev) => !prev);

  const products = [
    { label: "Mosquito Net Windows", path: "/products/mosquitonetwindows" },
    { label: "Mosquito Net Doors", path: "/products/mosquitonetdoors" },
    { label: "Curtains", path: "/products/curtains" },
    { label: "Blinds", path: "/products/blinds" },
    { label: "Vinyl Flooring", path: "/products/vinylflooring" },
    { label: "Wall Papers", path: "/products/wallpapers" },
  ];

  return (
    <header id="header" className="d-flex align-items-center">
      <div className="container d-flex justify-content-between align-items-center">
        <div id="logo">
          <h1>
            <a href="/" className="logo-text">
              Indec
            </a>
          </h1>
          <h4>Interiors</h4>
        </div>

        <nav className={`navbar ${isMobileNavOpen ? "navbar-mobile" : ""}`}>
          <ul>
            <li>
              <a
                href="/#home"
                className={activeSection === "home" ? "active" : ""}
              >
                What we do
              </a>
            </li>
            <li>
              <a
                href="/#who-we-are"
                className={activeSection === "who-we-are" ? "active" : ""}
              >
                Who we are
              </a>
            </li>
            <li>
              <a
                href="/#service"
                className={activeSection === "service" ? "active" : ""}
              >
                Services
              </a>
            </li>
            <li className={`dropdown ${isProductsDropdownOpen ? "active" : ""}`}>
              <div
                className="nav-link dropdown-toggle-btn"
                onClick={toggleProductsDropdown}
              >
                Products{" "}
                <i
                  className={`bi ${
                    isProductsDropdownOpen ? "bi-chevron-up" : "bi-chevron-down"
                  }`}
                ></i>
              </div>
              {(isProductsDropdownOpen || !isMobileNavOpen) && (
                <ul className="dropdown-menu">
                  {products.map((prod, index) => (
                    <li key={index}>
                      <a href={prod.path}>{prod.label}</a>
                    </li>
                  ))}
                </ul>
              )}
            </li>
            <li>
              <a
                href="/#contact"
                className={activeSection === "contact" ? "active" : ""}
              >
                Contact
              </a>
            </li>
            <li>
              <a href={indecbrouchure} download>
                Brochure
              </a>
            </li>
            <li>
              <a href="/gallery">Gallery</a>
            </li>
          </ul>

          <i
            className={`bi ${isMobileNavOpen ? "bi-x" : "bi-list"} mobile-nav-toggle`}
            onClick={toggleMobileNav}
          ></i>
        </nav>
      </div>
    </header>
  );
};

export default Header;
