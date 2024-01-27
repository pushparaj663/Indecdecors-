import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import '../src/Header.css'

function Header(props) {

    const location = useLocation();
    const [isMobileNavOpen, setMobileNavOpen] = useState(false);
    const [isProductsDropdownOpen, setProductsDropdownOpen] = useState(false);

    useEffect(() => {
        const mobileNavToggle = document.querySelector('.mobile-nav-toggle');
        const navbar = document.getElementById('navbar');

        mobileNavToggle.addEventListener('click', () => {
            setMobileNavOpen(!isMobileNavOpen);
        });
    }, [isMobileNavOpen]);

    const handleProductsDropdownToggle = () => {
        // Check if screen size is less than 768 pixels (adjust as needed)
        if (window.innerWidth <= 768) {
            setProductsDropdownOpen(!isProductsDropdownOpen);
        }
    };

    return (
        <>
            <header id="header" className="d-flex align-items-center">
                <div className="container d-flex justify-content-between">

                    <div id="logo">
                        <h1><a href="/">indec</a></h1>
                    </div>

                    <nav id="navbar" className={`navbar ${isMobileNavOpen ? 'navbar-mobile' : ''}`}>
                        <ul>
                            <li><a className={`nav-link nav_home ${window.location.pathname === "/" ? 'active' : ''}`} href="/">What we do</a></li>
                            <li><a className={`nav-link nav_home ${window.location.pathname === "/" ? 'active' : ''}`} href="/">Who we are</a></li>
                            <li><a className={`nav-link nav_home ${window.location.pathname === "/" ? 'active' : ''}`} href="/">Services</a></li>
                            <li className={`dropdown ${isProductsDropdownOpen ? 'active' : ''}`}>
                                <a className={`nav-link nav_home ${window.location.pathname.includes("/product") ? 'active' : ''}`} >
                                    <span>Products</span>
                                    {/* <i className="bi bi-chevron-down" onClick={handleProductsDropdownToggle}></i> */}
                                    {isMobileNavOpen ?
                                        <i className={`bi ${isProductsDropdownOpen ? 'bi-chevron-up' : 'bi-chevron-down'}`} onClick={handleProductsDropdownToggle}></i> :
                                        <i className="bi bi-chevron-down"></i>
                                    }
                                </a>
                                {isProductsDropdownOpen && isMobileNavOpen ?
                                    <ul>
                                        <li><a className={`nav-link nav_home ${window.location.pathname === "/product/netwindow" ? 'active' : ''}`} href="/product/netwindow">Mosquito Net Windows</a></li>
                                        <li><a className={`nav-link nav_home ${window.location.pathname === "/product/netdoors" ? 'active' : ''}`} href="/product/netdoors">Mosquito Net Doors</a></li>
                                        <li><a className={`nav-link nav_home ${window.location.pathname === "/product/curtain" ? 'active' : ''}`} href="/product/curtain">Curtains</a></li>
                                        <li><a className={`nav-link nav_home ${window.location.pathname === "/product/blinds" ? 'active' : ''}`} href="/product/blinds">Blinds</a></li>
                                        <li><a className={`nav-link nav_home ${window.location.pathname === "/product/flooringmats" ? 'active' : ''}`} href="/product/flooringmats">Flooring Mat</a></li>
                                        <li><a className={`nav-link nav_home ${window.location.pathname === "/product/wallpaper" ? 'active' : ''}`} href="/product/wallpaper">WallPapers for Walls</a></li>
                                    </ul>
                                    : ''}
                                {!isProductsDropdownOpen && !isMobileNavOpen ?
                                    <ul>
                                        <li><a className={`nav-link nav_home ${window.location.pathname === "/product/netwindow" ? 'active' : ''}`} href="/product/netwindow">Mosquito Net Windows</a></li>
                                        <li><a className={`nav-link nav_home ${window.location.pathname === "/product/netdoors" ? 'active' : ''}`} href="/product/netdoors">Mosquito Net Doors</a></li>
                                        <li><a className={`nav-link nav_home ${window.location.pathname === "/product/curtain" ? 'active' : ''}`} href="/product/curtain">Curtains</a></li>
                                        <li><a className={`nav-link nav_home ${window.location.pathname === "/product/blinds" ? 'active' : ''}`} href="/product/blinds">Blinds</a></li>
                                        <li><a className={`nav-link nav_home ${window.location.pathname === "/product/flooringmats" ? 'active' : ''}`} href="/product/flooringmats">Flooring Mat</a></li>
                                        <li><a className={`nav-link nav_home ${window.location.pathname === "/product/wallpaper" ? 'active' : ''}`} href="/product/wallpaper">WallPapers for Walls</a></li>
                                    </ul>
                                    : ''}
                            </li>
                            <li><a className={`nav-link nav_home ${window.location.pathname === "/" ? 'active' : ''}`} href="/">Contact</a></li>
                        </ul>
                        {/* <i className="bi bi-list mobile-nav-toggle"></i> */}
                        <i className={`bi ${isMobileNavOpen ? 'bi-x' : 'bi-list'} mobile-nav-toggle`} style={{ color: isMobileNavOpen ? 'white' : '' }}></i>
                    </nav>

                </div>
            </header>
        </>
    )
}

export default Header;