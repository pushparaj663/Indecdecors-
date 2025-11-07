import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import AOS from "aos";
import "aos/dist/aos.css";
import Header from "./Header";
import Footer from "./Footer";
import "./Service.css";

const Service = () => {
  const location = useLocation();
  const isStandalonePage = location.pathname.toLowerCase() === "/service";

  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <div className="service-page-container">
      
    <div className="sticky-top">
          {window.location.pathname === "/" ? "" : <Header />}
        </div>

      {/* SEO */}
      {isStandalonePage && (
        <Helmet>
          <title>Services | Indec Interiors</title>
          <meta
            name="description"
            content="Explore Indec Interiors’ wide range of services including space planning, design consultation, home renovation, and more."
          />
          <meta
            name="keywords"
            content="Interior design services, space planning, home renovation, custom furniture"
          />
          <meta name="robots" content="index, follow" />

          <link rel="canonical" href="https://indecdecors.com/service" />

          {/* Open Graph */}
          <meta property="og:title" content="Services | Indec Interiors" />
          <meta
            property="og:description"
            content="Explore Indec Interiors’ wide range of services including space planning, design consultation, home renovation, and more."
          />
          <meta property="og:type" content="website" />
          <meta property="og:url" content="https://indecdecors.com/service" />
          <meta property="og:image" content="https://indecdecors.com/image/products-blinds.jpg" />
          <meta property="og:image:width" content="1200" />
          <meta property="og:image:height" content="630" />

        </Helmet>
      )}

      {/* Section */}
      <section id="service-section" className="service-section">
        <div className="service-main-container">
          <header className="service-section-header" data-aos="fade-up">
            <h2 className="service-main-heading">Our Services</h2>
            <p className="service-main-description">
              Whether you're envisioning a cozy home retreat or a vibrant office space, we invite you to join us in crafting a story through design. Explore our services and let’s transform your space into a work of art.
            </p>
          </header>

          <div className="service-wrapper" data-aos="fade-up">
            <div className="service-row">

              <div className="service-column" data-aos="zoom-in" data-aos-delay="100">
                <div className="service-card service-card-blue">
                  <div className="service-icon">
                    <i className="bi bi-house"></i>
                  </div>
                  <h3 className="service-title">Residential Interior Decorations</h3>
                  <p className="service-text">
                    Elevate your home with our residential decoration services. From single rooms to entire houses, we add warmth, creativity, and elegance to every space.
                  </p>
                </div>
              </div>

              <div className="service-column" data-aos="zoom-in" data-aos-delay="200">
                <div className="service-card service-card-orange">
                  <div className="service-icon">
                    <i className="bi bi-buildings"></i>
                  </div>
                  <h3 className="service-title">Commercial Interior Decorations</h3>
                  <p className="service-text">
                    Impress your clients and inspire your team. Our designs combine professionalism and creativity to reflect your brand’s identity.
                  </p>
                </div>
              </div>

              <div className="service-column" data-aos="zoom-in" data-aos-delay="300">
                <div className="service-card service-card-green">
                  <div className="service-icon">
                    <i className="bi bi-columns-gap"></i>
                  </div>
                  <h3 className="service-title">Space Planning</h3>
                  <p className="service-text">
                    Optimize every inch of your space with thoughtful layout planning focused on flow, function, and beauty.
                  </p>
                </div>
              </div>

              <div className="service-column" data-aos="zoom-in" data-aos-delay="400">
                <div className="service-card service-card-purple">
                  <div className="service-icon">
                    <i className="bi bi-building-gear"></i>
                  </div>
                  <h3 className="service-title">Styling</h3>
                  <p className="service-text">
                    Transform your dream space into reality with our expert styling that adds balance, character, and beauty.
                  </p>
                </div>
              </div>

            </div>
          </div>
        </div>
      </section>

     {/* ✅ Footer */}
        {window.location.pathname === "/" ? "" : <Footer />}
    </div>
  );
};

export default Service;
