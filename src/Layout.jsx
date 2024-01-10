import React, { useState, useRef, useEffect } from "react";
import Footer from "./Footer";
import Home from "./Home";
import About from "./About";
import Service from "./Service";
import Products from "./Products";
import ContactUs from "./ContactUs";

const Layout = () => {

    const [isMobileNavOpen, setMobileNavOpen] = useState(false);
    const [isProductsDropdownOpen, setProductsDropdownOpen] = useState(false);
    const aboutRef = useRef(null);
    const serviceRef = useRef(null);
    const contactRef = useRef(null);
    const productRef = useRef(null);


    const [activeSection, setActiveSection] = useState("/");


    useEffect(() => {
        const mobileNavToggle = document.querySelector('.mobile-nav-toggle');
        const navbar = document.getElementById('navbar');

        mobileNavToggle.addEventListener('click', () => {
            setMobileNavOpen(!isMobileNavOpen);
        });


    }, [isMobileNavOpen]);

    const scrollToProducts = () => {
        productRef.current.scrollIntoView({
            behavior: "smooth",
            top: 1000
        });
        setActiveSection("ourProducts");
        if (isMobileNavOpen) {
            setMobileNavOpen(!isMobileNavOpen);
        }

    };

    const scrollToAbout = () => {
        aboutRef.current.scrollIntoView({
            behavior: "smooth",
            top: 1000
        });
        setActiveSection("who-we-are");
        if (isMobileNavOpen) {
            setMobileNavOpen(!isMobileNavOpen);
        }

    };

    const scrollToService = () => {
        serviceRef.current.scrollIntoView({
            behavior: "smooth",
            top: 1000
        });
        setActiveSection("service");
        if (isMobileNavOpen) {
            setMobileNavOpen(!isMobileNavOpen);
        }
    };

    const scrollToContact = () => {
        contactRef.current.scrollIntoView({
            behavior: "smooth",
            top: 2000
        });
        setActiveSection("contact");
        if (isMobileNavOpen) {
            setMobileNavOpen(!isMobileNavOpen);
        }
    };

    const handleProductsDropdownToggle = () => {
        setProductsDropdownOpen(!isProductsDropdownOpen);
    };

    return (
        <div className="container-fluid p-0">
            <div className="sticky-top">
                <header id="header" className="d-flex align-items-center">
                    <div className="container d-flex justify-content-between">

                        <div id="logo">
                            <h1><a href="#">indec</a></h1>
                        </div>

                        <nav id="navbar" className={`navbar ${isMobileNavOpen ? 'navbar-mobile' : ''}`}>
                            <ul>
                                <li><a className={`nav-link nav_home ${activeSection === "/" ? 'active' : ''}`} href="/" >What we do</a></li>

                                <li><a className={`nav-link nav_home ${activeSection === "who-we-are" ? 'active' : ''}`} onClick={scrollToAbout} >Who we are</a></li>

                                <li><a className={`nav-link nav_home ${activeSection === "service" ? 'active' : ''}`} onClick={scrollToService}>Services</a></li>
                                <li className={`dropdown ${isProductsDropdownOpen ? 'active' : ''}`}>
                                    <a className={`nav-link nav_home ${window.location.pathname.includes("/product") ? 'active' : ''}`} onClick={scrollToProducts}>
                                        <span>Products</span> <i className="bi bi-chevron-down"></i></a>
                                    <ul>
                                        <li><a className={`nav-link nav_home ${window.location.pathname === "/product/netwindow" ? 'active' : ''}`} href="/product/netwindow">Mosquito Net Windows</a></li>
                                        <li><a className={`nav-link nav_home ${window.location.pathname === "/product/netdoors" ? 'active' : ''}`} href="/product/netdoors">Mosquito Net Doors</a></li>
                                        <li><a className={`nav-link nav_home ${window.location.pathname === "/product/curtain" ? 'active' : ''}`} href="/product/curtain">Curtains</a></li>
                                        <li><a className={`nav-link nav_home ${window.location.pathname === "/product/blind" ? 'active' : ''}`} href="/product/blind">Blinds</a></li>
                                        <li><a className={`nav-link nav_home ${window.location.pathname === "/product/floor" ? 'active' : ''}`} href="/product/flooringmats">Flooring Mats</a></li>
                                        <li><a className={`nav-link nav_home ${window.location.pathname === "/product/wallpaper" ? 'active' : ''}`} href="/product/wallpaper">Wall Papers</a></li>
                                    </ul>
                                </li>
                                <li><a className={`nav-link nav_home ${activeSection === "contact" ? 'active' : ''}`} onClick={scrollToContact}>Contact</a></li>

                            </ul>
                            <i className="bi bi-list mobile-nav-toggle"></i>
                        </nav>

                    </div>
                </header>
            </div>



            <Home />

            <div ref={aboutRef}>
                <About />
            </div>
            <div ref={serviceRef}>
                <Service />
            </div>
            <div ref={productRef}>
            <Products />
            </div>
            <div ref={contactRef}>
            <ContactUs />
            </div>
            <div className="foot">
                <Footer />
            </div>
        </div>
    )
}
export default Layout;