import React, { useState, useEffect, useRef } from "react";
import "bootstrap-icons/font/bootstrap-icons.css";
import "./ContactPopup.css";

const ContactPopup = () => {
  const [isOpen, setIsOpen] = useState(false);
  const popupRef = useRef(null);

  const togglePopup = () => setIsOpen((prev) => !prev);

  // ✅ Close popup on outside click
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (popupRef.current && !popupRef.current.contains(e.target)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div
      className={`contact-popup ${isOpen ? "active" : ""}`}
      ref={popupRef}
      aria-expanded={isOpen}
      aria-label="Contact popup"
    >
      {/* Toggle Button */}
      <button
        className="contact-toggle"
        onClick={togglePopup}
        aria-label={isOpen ? "Close contact panel" : "Open contact panel"}
      >
        {isOpen ? (
          <i className="bi bi-x-lg"></i>
        ) : (
          <i className="bi bi-chat-dots-fill"></i>
        )}
      </button>

      {/* Popup Content */}
      {isOpen && (
        <div className="contact-content" role="dialog" aria-modal="true">
          <div className="contact-header">
            <i className="bi bi-headset"></i>
            <h4>We're here to help!</h4>
          </div>

          <p>
            <i className="bi bi-telephone"></i>
            <a href="tel:+919952880078">+91 99528 80078</a>
          </p>

          <p>
            <i className="bi bi-telephone"></i>
            <a href="tel:+919600339397">+91 96003 39397</a>
          </p>

          <hr />

          <p>
            <i className="bi bi-envelope"></i>
            <a href="mailto:admin@indectech.in">admin@indectech.in</a>
          </p>

          <div className="popup-footer">
            <a href="mailto:admin@indectech.in" className="popup-btn">
              <i className="bi bi-send"></i> Send Email
            </a>

            <a href="tel:+919600339397" className="popup-btn alt">
              <i className="bi bi-telephone-outbound"></i> Call Now
            </a>
          </div>
        </div>
      )}

      {/* WhatsApp Floating Button */}
      <a
        href="https://wa.me/919952880078"
        target="_blank"
        rel="noopener noreferrer"
        className="whatsapp-float"
        aria-label="Chat on WhatsApp"
      >
        <i className="bi bi-whatsapp"></i>
      </a>
    </div>
  );
};

export default ContactPopup;
