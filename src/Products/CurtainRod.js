import React, { useState, useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import curtain_rods_finials from "../../src/image/curtain_rods_finials.jpg";
import "./theme.css";
import { Helmet } from "react-helmet-async";

function CurtainRod() {
  const [activeTab, setActiveTab] = useState("designer");

  useEffect(() => {
    AOS.init({ duration: 1000, once: true, easing: "ease-in-out" });
  }, []);

  const tabContent = {
    designer: [
      { icon: "bi-brush", title: "Luxury Finish", desc: "Premium rods crafted for elegance." },
      { icon: "bi-grid", title: "Design Variety", desc: "Choose from modern, classic, and ornate styles." },
      { icon: "bi-gem", title: "Elegant Materials", desc: "Metallic finishes that match your interior." },
      { icon: "bi-tools", title: "Built to Last", desc: "Durable rods with smooth operation." },
      { icon: "bi-stars", title: "Finishing Touch", desc: "Decorative finials complete the look." }
    ],
    custom: [
      { icon: "bi-arrows-fullscreen", title: "Custom Sizes", desc: "Rods tailored to any window perfectly." },
      { icon: "bi-palette", title: "Premium Finishes", desc: "Stylish metallic and matte coatings." },
      { icon: "bi-gear", title: "Precision Crafting", desc: "Every piece crafted to last." }
    ]
  };

  const features = [
    { title: "Modern Designs", desc: "Sleek rods that enhance contemporary spaces." },
    { title: "Durable Finishes", desc: "Long-lasting rods that resist rust and wear." },
    { title: "Custom Sizes", desc: "Fits any window perfectly with tailored lengths." }
  ];

  return (
    
    <section className="theme-section" id="curtain-rods">
       <Helmet>
        <title>Curtain Rods & Brackets | Indec Interiors</title>
        <meta
          name="description"
          content="Premium curtain rods and brackets from Indec Interiors, featuring designer and custom styles with durable finishes to enhance your living space."
        />
        <meta
          name="keywords"
          content="curtain rods, curtain brackets, interior rods, designer curtain rods, premium curtain hardware"
        />

        <link rel="canonical" href="https://indecdecors.com/products/curtainrod" />

        {/* OpenGraph */}
        <meta property="og:title" content="Curtain Rods & Brackets | Indec Interiors" />
        <meta
          property="og:description"
          content="Premium designer curtain rods and brackets available in modern, classic, and custom styles."
        />
        <meta property="og:type" content="website" />
      </Helmet>
      <div className="container theme-container" data-aos="fade-up">
        
        {/* Section Title */}
        <div className="theme-section-title text-center">
          <h2>Curtain Rods & Brackets</h2>
          <p>
            Curtains are an essential part of home decor, blending function and elegance. 
            Premium designer curtain rods and brackets elevate the look of any interior.
          </p>
        </div>

        {/* Tabs */}
        <div className="theme-tabs" data-aos="fade-up" data-aos-delay="100">
          {["designer", "custom"].map((tab) => (
            <div
              key={tab}
              className={`theme-tab-link ${activeTab === tab ? "active" : ""}`}
              onClick={() => setActiveTab(tab)}
            >
              {tab === "designer" ? "Designer Rods" : "Custom Rods"}
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
              src={curtain_rods_finials}
              alt="Curtain Rods and Brackets"
              className="theme-image"
            />
          </div>
        </div>

        {/* Feature Boxes */}
        <div className="row theme-feature-section">
          {features.map((feature, idx) => (
            <div key={idx} className="col-lg-4 mb-4" data-aos="zoom-in">
              <div className="theme-feature-box">
                <h4 className="theme-feature-title">{feature.title}</h4>
                <p className="theme-feature-description">{feature.desc}</p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

export default CurtainRod;
