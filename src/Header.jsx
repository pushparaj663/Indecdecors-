import React, { useState } from "react";
import { useLocation } from "react-router-dom";
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
    { label: "Brochure", path: indecbrouchure, download: true }
  ];

  const products = [
    { label: "Mosquito Net Windows", path: "/product/mosquitonetwindows" },
    { label: "Mosquito Net Doors", path: "/product/mosquitonetdoors" },
    { label: "Curtains", path: "/product/curtains" },
    { label: "Blinds", path: "/product/blinds" },
    { label: "Vinyl Flooring", path: "/product/vinylflooring" },
    { label: "WallPapers", path: "/product/wallpapers" }
  ];

  const toggleMobileNav = () => setMobileNavOpen(prev => !prev);
  const toggleProductsDropdown = () => setProductsDropdownOpen(prev => !prev);

  const isActive = (path) =>
    path === "/" ? location.pathname === "/" : location.pathname.startsWith(path);

  return (
    <header id="header" className="d-flex align-items-center">
      <div className="container d-flex justify-content-between align-items-center">
        {/* Logo */}
        <div id="logo">
          <h1>
            <a href="/" className="logo-text">
              Indec
            </a>
          </h1><h4>Interiors</h4>
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
                          isProductsDropdownOpen ? "bi-chevron-up" : "bi-chevron-down"
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
                  <a href={item.path} className={isActive(item.path) ? "active" : ""}>
                    {item.label}
                  </a>
                )}
              </li>
            ))}
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
