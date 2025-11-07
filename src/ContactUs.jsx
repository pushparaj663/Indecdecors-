import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import AOS from "aos";
import "aos/dist/aos.css";
import Header from "./Header";
import Footer from "./Footer";
import "./ContactUs.css";

const ContactUs = () => {
  const location = useLocation();
  const isStandalonePage = location.pathname === "/contact";

  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <div className="container-fluid p-0">
      {/* Header */}
      <div className="sticky-top">
          {window.location.pathname === "/" ? "" : <Header />}
        </div>

   
   
        <Helmet>
          <title>Contact Us | Indec Interiors</title>
          <meta
            name="description"
            content="Get in touch with Indec Interiors for design consultations, product inquiries, and custom interior design services."
          />
          <meta
            name="keywords"
            content="contact Indec Interiors, interior designers contact, design consultation"
          />
          <link rel="canonical" href="https://indecdecors.com/contact" />

          {/* Open Graph */}
          <meta property="og:title" content="Contact Us | Indec Interiors" />
          <meta
            property="og:description"
            content="Get in touch with Indec Interiors for design consultations and custom interior design services."
          />
          <meta property="og:type" content="website" />
          <meta property="og:url" content="https://indecdecors.com/contact" />
          <meta property="og:image" content="https://indecdecors.com/image/banner-2.jpg" />

        </Helmet>
      

      {/* Contact Section */}
      <section id="contact">
        <div className="contact-wrapper" data-aos="fade-up">
          <div className="section-header" data-aos="fade-down">
            <h2>Contact Us</h2>
            <p>
              We’d love to hear from you. Whether you’re planning your dream home,
              redesigning your workspace, or need expert guidance,{" "}
              <strong>Indec</strong> is here to turn your vision into reality.
            </p>
          </div>

          <div className="contact-grid">
            <div className="contact-card" data-aos="fade-up" data-aos-delay="100">
              <div className="icon-circle">
                <i className="bi bi-geo-alt"></i>
              </div>
              <h3>Visit Us</h3>
              <p>
                AK Complex, Aarthi Theatre Road, <br />
                Dindigul, Tamil Nadu 624001
              </p>
            </div>

            <div className="contact-card" data-aos="fade-up" data-aos-delay="250">
              <div className="icon-circle">
                <i className="bi bi-telephone"></i>
              </div>
              <h3>Call Us</h3>
              <p>
                <a href="tel:+919600339397">+91 96003 39397</a> <br />
                <a href="tel:+919952880078">+91 99528 80078</a>
              </p>
            </div>

            <div className="contact-card" data-aos="fade-up" data-aos-delay="400">
              <div className="icon-circle">
                <i className="bi bi-envelope"></i>
              </div>
              <h3>Email Us</h3>
              <p>
                <a href="mailto:admin@indectech.in">admin@indectech.in</a>
              </p>
            </div>
          </div>

          <div className="map-wrapper" data-aos="fade-up" data-aos-delay="600">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3924.6957363599936!2d77.97975367477234!3d10.366195089758687!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b00ab46dbcbdf3d%3A0xb6ec6e247740ce56!2sIndec%20Interior%20Decorer!5e0!3m2!1sen!2sin!4v1699100026949!5m2!1sen!2sin"
              title="Indec Location"
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </section>

 {/* ✅ Footer */}
        {window.location.pathname === "/" ? "" : <Footer />}
    </div>
  );
};

export default ContactUs;
