import React from "react";
import '../src/Header.css'

function Header(props) {

    return (
        <>
            <header id="header" className="d-flex align-items-center">
                <div className="container d-flex justify-content-between">

                    <div id="logo">
                        <h1><a href="#">indec</a></h1>
                    </div>

                    <nav id="navbar" className="navbar">
                        <ul>
                            <li><a className={`nav-link nav_home ${window.location.pathname === "/" ? 'active' : ''}`} href="/">What we do</a></li>
                            <li><a className={`nav-link nav_home ${window.location.pathname === "/about" ? 'active' : ''}`} href="/who-we-are">Who we are</a></li>
                            <li><a className={`nav-link nav_home ${window.location.pathname === "/service" ? 'active' : ''}`} href="/service">Services</a></li>
                            <li className="dropdown"><a className={`nav-link nav_home ${window.location.pathname.includes("/product") ? 'active' : ''}`} href="/products" ><span>Products</span> <i className="bi bi-chevron-down"></i></a>
                                <ul>
                                    <li><a className={`nav-link nav_home ${window.location.pathname === "/product/netwindow" ? 'active' : ''}`} href="/product/netwindow">Mosquito Net Windows</a></li>
                                    <li><a className={`nav-link nav_home ${window.location.pathname === "/product/netdoors" ? 'active' : ''}`} href="/product/netdoors">Mosquito Net Doors</a></li>
                                    <li><a className={`nav-link nav_home ${window.location.pathname === "/product/curtain" ? 'active' : ''}`} href="/product/curtain">Curtains</a></li>
                                    <li><a className={`nav-link nav_home ${window.location.pathname === "/product/blinds" ? 'active' : ''}`} href="/product/blinds">Blinds</a></li>
                                    <li><a className={`nav-link nav_home ${window.location.pathname === "/product/flooringmats" ? 'active' : ''}`} href="/product/flooringmats">Flooring Mat</a></li>
                                    <li><a className={`nav-link nav_home ${window.location.pathname === "/product/wallpaper" ? 'active' : ''}`} href="/product/wallpaper">WallPapers for Walls</a></li>
                                </ul>
                            </li>
                            <li><a className={`nav-link nav_home ${window.location.pathname === "/contact" ? 'active' : ''}`} href="/contact">Contact</a></li>
                        </ul>
                        <i className="bi bi-list mobile-nav-toggle"></i>
                    </nav>

                </div>
            </header>
        </>
    )
}

export default Header;