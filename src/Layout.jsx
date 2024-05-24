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

    useEffect(() => {
        const handleScroll = () => {
            const aboutOffset = aboutRef.current.offsetTop;
            const serviceOffset = serviceRef.current.offsetTop;
            const productOffset = productRef.current.offsetTop;
            const contactOffset = contactRef.current.offsetTop;
            const scrollPosition = window.scrollY;
            const exactSectionPosition = 100;


            if (scrollPosition < aboutOffset - exactSectionPosition) {
                setActiveSection("/");
            } else if (scrollPosition < serviceOffset - exactSectionPosition) {
                setActiveSection("who-we-are");
            } else if (scrollPosition < productOffset - exactSectionPosition) {
                setActiveSection("service");
            } else if (scrollPosition < contactOffset - exactSectionPosition) {
                setActiveSection("ourProducts");
            } else {
                setActiveSection("contact");
            }
        };

        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

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
        // Check if screen size is less than 768 pixels (adjust as needed)
        console.log('open mobile');
        if (window.innerWidth <= 768) {
            setProductsDropdownOpen(!isProductsDropdownOpen);
        }
    };

    const downloadTxtFile = () => {
        // text content
        const texts = ["line 1", "line 2", "line 3"]

        // file object
        const file = new Blob(texts, { type: 'text/plain' });

        // anchor link
        const element = document.createElement("a");
        element.href = URL.createObjectURL(file);
        element.download = "http://localhost:3000/Brochure/indec_brouchure.pdf";

        // simulate link click
        document.body.appendChild(element); // Required for this to work in FireFox
        element.click();
    }

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
                                    <a className={`nav-link nav_home ${window.location.pathname.includes("/product") ? 'active' : ''}`} >
                                        <span onClick={scrollToProducts}>Products</span>
                                        {isMobileNavOpen ?
                                            <i className={`bi ${isProductsDropdownOpen ? 'bi-chevron-up' : 'bi-chevron-down'}`} onClick={handleProductsDropdownToggle}></i> :
                                            <i className="bi bi-chevron-down"></i>
                                        }
                                    </a>
                                    {isProductsDropdownOpen && isMobileNavOpen ?
                                        <ul>
                                            <li><a className={`nav-link nav_home ${window.location.pathname === "/product/mosquitonetwindows" ? 'active' : ''}`} href="/product/mosquitonetwindows">Mosquito Net Windows</a></li>
                                            <li><a className={`nav-link nav_home ${window.location.pathname === "/product/mosquitonetdoors" ? 'active' : ''}`} href="/product/mosquitonetdoors">Mosquito Net Doors</a></li>
                                            <li><a className={`nav-link nav_home ${window.location.pathname === "/product/curtains" ? 'active' : ''}`} href="/product/curtains">Curtains</a></li>
                                            <li><a className={`nav-link nav_home ${window.location.pathname === "/product/blinds" ? 'active' : ''}`} href="/product/blinds">Blinds</a></li>
                                            <li><a className={`nav-link nav_home ${window.location.pathname === "/product/vinylflooring" ? 'active' : ''}`} href="/product/vinylflooring">Vinyl Flooring</a></li>
                                            <li><a className={`nav-link nav_home ${window.location.pathname === "/product/wallpapers" ? 'active' : ''}`} href="/product/wallpapers">Wall Papers for Walls</a></li>
                                        </ul>
                                        :
                                        ''
                                    }
                                    {!isProductsDropdownOpen && !isMobileNavOpen ?
                                        <ul>
                                            <li><a className={`nav-link nav_home ${window.location.pathname === "/product/mosquitonetwindows" ? 'active' : ''}`} href="/product/mosquitonetwindows">Mosquito Net Windows</a></li>
                                            <li><a className={`nav-link nav_home ${window.location.pathname === "/product/mosquitonetdoors" ? 'active' : ''}`} href="/product/mosquitonetdoors">Mosquito Net Doors</a></li>
                                            <li><a className={`nav-link nav_home ${window.location.pathname === "/product/curtains" ? 'active' : ''}`} href="/product/curtains">Curtains</a></li>
                                            <li><a className={`nav-link nav_home ${window.location.pathname === "/product/blinds" ? 'active' : ''}`} href="/product/blinds">Blinds</a></li>
                                            <li><a className={`nav-link nav_home ${window.location.pathname === "/product/floor" ? 'active' : ''}`} href="/product/vinylflooring">Vinyl Flooring</a></li>
                                            <li><a className={`nav-link nav_home ${window.location.pathname === "/product/wallpaper" ? 'active' : ''}`} href="/product/wallpapers">Wall Papers for Walls</a></li>
                                        </ul> : ''
                                    }
                                </li>
                                <li><a className={`nav-link nav_home ${activeSection === "contact" ? 'active' : ''}`} onClick={scrollToContact}>Contact</a></li>
                                <li><a className={`nav-link nav_home ${activeSection === "contact" ? 'active' : ''}`} onClick={downloadTxtFile}>Brochure</a></li>
                            </ul>
                            {/* <i className="bi bi-list mobile-nav-toggle"></i> */}
                            <i className={`bi ${isMobileNavOpen ? 'bi-x' : 'bi-list'} mobile-nav-toggle`} style={{ color: isMobileNavOpen ? 'white' : '' }}></i>
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