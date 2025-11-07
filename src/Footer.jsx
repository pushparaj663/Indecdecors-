import React from 'react';
import '../src/Footer.css';

const Footer = () => {
    const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

    return (
        <footer id="footer">
            <div className="footer-bg">
                <div className="container footer-content">

                    {/* LOGO SECTION */}
                    <div className="footer-logo-section">
                        <div className="footer-logo-horizontal">
                            <h1 className="logo-main">Indec</h1>
                            <h2 className="logo-decor">Interiors</h2>
                        </div>
                        <p className="footer-tagline">Bringing elegance to every space</p>
                    </div>

                    {/* QUICK LINKS */}
                    <div className="footer-links">
                        <h3>Quick Links</h3>
                        <ul>
                            <li><a href="/">Home</a></li>
                            <li><a href="/who-we-are">About Us</a></li>
                            <li><a href="/service">Services</a></li>
                            <li><a href="/gallery">Gallery</a></li>
                            <li><a href="/contact">Contact</a></li>
                        </ul>
                    </div>

                    {/* CONTACT INFO */}
                    <div className="footer-contact">
                        <h3>Contact Us</h3>
                        <p>Email: admin@indectech.in</p>
                        <p>Phone: +91 96003 39397</p>
                        <p>Address: AK Complex, Aarthi Theatre Road,
Dindigul, Tamil Nadu 624001</p>
                    </div>

                    {/* SOCIAL ICONS */}
                    <div className="footer-social">
                        <h3>Follow Us</h3>
                        <div className="social-icons">
                            <a href="#" className="twitter"><i className="bi bi-twitter"></i></a>
                            <a href="#" className="facebook"><i className="bi bi-facebook"></i></a>
                            <a href="#" className="instagram"><i className="bi bi-instagram"></i></a>
                            <a href="#" className="linkedin"><i className="bi bi-linkedin"></i></a>
                        </div>
                    </div>
                </div>

                {/* COPYRIGHT */}
                <div className="footer-bottom">
                    ©{new Date().getFullYear()} indec. All Rights Reserved
                </div>

                {/* BACK TO TOP BUTTON */}
                <button className="back-to-top" onClick={scrollToTop} aria-label="Back to top">
                    <i className="bi bi-arrow-up-short"></i>
                </button>
            </div>
        </footer>
    );
};

export default Footer;
