import React, { useState, useEffect, useRef } from "react";
import "bootstrap-icons/font/bootstrap-icons.css";
import "./ContactPopup.css";

const ContactPopup = () => {
  const [isOpen, setIsOpen] = useState(false);
  const popupRef = useRef();

  const togglePopup = () => setIsOpen(!isOpen);

  // Close popup when clicking outside
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
    <div className={`contact-popup ${isOpen ? "active" : ""}`} ref={popupRef}>
      <div className="contact-toggle" onClick={togglePopup}>
        {isOpen ? (
          <i className="bi bi-x-lg"></i>
        ) : (
          <i className="bi bi-chat-dots-fill"></i>
        )}
      </div>

      {isOpen && (
        <div className="contact-content">
          <div className="contact-header">
            <i className="bi bi-headset"></i>
            <h4>We're here to help!</h4>
          </div>

          <p>
            <i className="bi bi-telephone"></i>
            <span>+91 99528 80078</span>
          </p>
          <p>
            <i className="bi bi-telephone"></i>
            <span>+91 96003 39397</span>
          </p>

          <hr />

          <p>
            <i className="bi bi-envelope"></i>
            <span>admin@indectech.in</span>
          </p>

          <div className="popup-footer">
            <a href="mailto:admin@indectech.in" className="popup-btn">
              <i className="bi bi-send"></i> Send Email
            </a>
            <a href="tel:+91 96003 39397" className="popup-btn alt">
              <i className="bi bi-telephone-outbound"></i> Call Now
            </a>
          </div>
        </div>
      )}
          <a
        href="https://wa.me/919952880078"
        target="_blank"
        rel="noopener noreferrer"
        className="whatsapp-float"
      >
        <i className="bi bi-whatsapp"></i>
      </a>
    </div>
  );
};

export default ContactPopup;
