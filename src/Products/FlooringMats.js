import React, { useState, useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Header from "../Header";
import Footer from "../Footer";
import Breadcrumbs from "./Breadcrumbs";
import "./theme.css";
import { Helmet } from "react-helmet-async";

import flooringResidential from "../../src/image/flooring-residential.jpg";
import flooringCommercial from "../../src/image/flooring-commercial.jpg";

function FlooringMats() {
  const [activeTab, setActiveTab] = useState("residential");

  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  const tabContent = {
    residential: [
      { icon: "bi-house-door", title: "Living Room", desc: "Add warmth and elegance with soft flooring mats." },
      { icon: "bi-bed", title: "Bedroom", desc: "Experience comfort with plush textures designed for relaxation." },
      { icon: "bi-door-closed", title: "Entryway", desc: "Durable mats to protect floors from dust and wear." },
    ],
    commercial: [
      { icon: "bi-building", title: "Office", desc: "Sleek, professional flooring for any workspace." },
      { icon: "bi-people", title: "Meeting Rooms", desc: "Sophistication and comfort for collaboration spaces." },
      { icon: "bi-person-badge", title: "Reception", desc: "Elegant durable flooring that makes a statement." },
    ],
  };

  return (
    <>
      {/* ✅ SEO */}
      <Helmet>
        <title>Vinyl Flooring | Indec Interiors</title>
        <meta
          name="description"
          content="Premium vinyl flooring options that offer elegance, durability, and easy maintenance for your space."
        />
        <meta
          name="keywords"
          content="vinyl flooring, wooden flooring, flooring mats, modern flooring"
        />

        {/* Canonical */}
        <link rel="canonical" href="https://indecdecors.com/products/vinylflooring" />

        {/* Open Graph */}
        <meta property="og:title" content="Premium Vinyl Flooring | Indec Interiors" />
        <meta property="og:description" content="Premium vinyl flooring mats blending style, strength, and comfort." />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="https://indecdecors.com/image/flooring-residential.jpg" />
      </Helmet>

      <div className="container-fluid p-0 theme-container">
        <div className="sticky-top">
          <Header />
        </div>

        <Breadcrumbs />

        <section className="theme-section">
          <div className="container" data-aos="fade-up">
            <div className="theme-section-title text-center">
              <h2>Vinyl Flooring</h2>
              <p>Premium vinyl flooring mats blending style, strength, and comfort.</p>
            </div>

            {/* Tabs */}
            <div className="theme-tabs" data-aos="fade-up" data-aos-delay="100">
              {["residential", "commercial"].map((tab) => (
                <div
                  key={tab}
                  className={`theme-tab-link ${activeTab === tab ? "active" : ""}`}
                  onClick={() => setActiveTab(tab)}
                >
                  {tab === "residential" ? (
                    <>
                      <i className="bi bi-house-door"></i> Residential Flooring
                    </>
                  ) : (
                    <>
                      <i className="bi bi-building"></i> Commercial Flooring
                    </>
                  )}
                </div>
              ))}
            </div>

            {/* Tab Content */}
            <div className="theme-row" data-aos="fade-up">
              <div className="col-lg-6 theme-col">
                <ul className="theme-features">
                  {tabContent[activeTab].map((item, idx) => (
                    <li key={idx}>
                      <i className={`bi ${item.icon}`}></i>
                      <span>{item.title}:</span> {item.desc}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="col-lg-6 theme-col theme-image-wrapper" data-aos="zoom-in">
                <img
                  src={activeTab === "residential" ? flooringResidential : flooringCommercial}
                  alt="Vinyl Flooring"
                  className="theme-image"
                  loading="lazy"
                />
              </div>
            </div>

            {/* Feature Boxes */}
            <div className="row theme-feature-section">
              {[
                { title: "Premium Materials", desc: "High-quality vinyl for strength and durability." },
                { title: "Elegant Finishes", desc: "Stylish designs for modern and classic interiors." },
                { title: "Customization", desc: "Tailor colors, patterns, and textures." },
                { title: "Professional Installation", desc: "Expert installation for a perfect finish." },
              ].map((feature, idx) => (
                <div key={idx} className="col-lg-6 mb-4" data-aos="zoom-in">
                  <div className="theme-feature-box">
                    <h4 className="theme-feature-title">{feature.title}</h4>
                    <p className="theme-feature-description">{feature.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <Footer />
      </div>
    </>
  );
}

export default FlooringMats;
