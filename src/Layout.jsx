import React, { useState, useRef, useEffect } from "react";
import Header from "./Header";
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
    const [activeSection, setActiveSection] = useState("/");


    useEffect(() => {
        const mobileNavToggle = document.querySelector('.mobile-nav-toggle');
        const navbar = document.getElementById('navbar');

        mobileNavToggle.addEventListener('click', () => {
            setMobileNavOpen(!isMobileNavOpen);
        });


    }, [isMobileNavOpen]);

    const scrollToAbout = () => {
        aboutRef.current.scrollIntoView({
            behavior: "smooth",
            top: 1000
        });
        setActiveSection("about");
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

    const handleProductsDropdownToggle = () => {
        setProductsDropdownOpen(!isProductsDropdownOpen);
    };

    return (
        <div className="container-fluid p-0">
            <div className="sticky-top">
                <Header />
            </div>
            <Home />
            <About />
            <Service />
            <Products />
            <ContactUs />
            <div className="foot">
                <Footer />
            </div>
        </div>
    )
}
export default Layout;