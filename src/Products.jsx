import React, { useEffect, useState, useRef } from "react";
import { useLocation } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import Header from "./Header";
import Footer from "./Footer";
import Breadcrumbs from "./Products/Breadcrumbs";
import "./Productscard.css";

import productswindow from "../src/image/products-window.jpg";
import productsdoor from "../src/image/products-door.jpg";
import productscurtain from "../src/image/products-curtains.jpg";
import productsblinds from "../src/image/products-blinds.jpg";
import productsvinylflooring from "../src/image/products-vinylflooring.jpg";
import productswallpapers from "../src/image/products-wallpapers.jpg";

const Products = () => {
  const [products, setProducts] = useState([]);
  const trackRef = useRef(null);
  const location = useLocation();
  const isStandalonePage = location.pathname === "/products";

  useEffect(() => {
    const list = [
      { img: productswindow, title: "Mosquito Net Windows", link: "/products/mosquitonetwindows" },
      { img: productsdoor, title: "Mosquito Net Doors", link: "/products/mosquitonetdoors" },
      { img: productscurtain, title: "Curtains", link: "/products/curtains" },
      { img: productsblinds, title: "Blinds", link: "/products/blinds" },
      { img: productsvinylflooring, title: "Flooring Mat", link: "/products/vinylflooring" },
      { img: productswallpapers, title: "Wallpapers for Walls", link: "/products/wallpapers" },
    ];
    setProducts([...list, ...list]); // Duplicate for smooth scrolling
  }, []);

  return (
    <>
      {/* Helmet only on standalone Products page */}
      {isStandalonePage && (
        <Helmet>
          <title>Products | Indec Interiors</title>
          <meta
            name="description"
            content="Discover premium home décor products from Indec Interiors including blinds, curtains, wallpapers, flooring, and mosquito nets."
          />
          <meta
            name="keywords"
            content="curtains, blinds, wallpapers, flooring, mosquito nets, home décor"
          />
          <link rel="canonical" href="https://indecdecors.com/products" />

          {/* Open Graph */}
          <meta property="og:title" content="Products | Indec Interiors" />
          <meta
            property="og:description"
            content="Discover premium home décor products from Indec Interiors including blinds, curtains, wallpapers, flooring, and mosquito nets."
          />
          <meta property="og:type" content="website" />
          <meta property="og:url" content="https://www.indecdecors.com/products" />
          <meta property="og:image" content="https://www.indecdecors.com/image/products-door.jpg" />

              </Helmet>
      )}

      {/* Header and Breadcrumbs */}
      {isStandalonePage && <Header />}
      {isStandalonePage && <Breadcrumbs />}

      {/* Products Section */}
      <section className="products-section-wrapper">
        <div className="products-title-section">
          <h2 className="products-main-heading">Our Products</h2>
          <p className="products-description">
            We bring you a comprehensive range of high-quality solutions to enhance your living spaces.
          </p>
        </div>

        <div className="products-carousel-container">
          <div className="products-carousel-track" ref={trackRef}>
            <div className="products-carousel-track-inner">
              {products.map((p, i) => (
                <div className="products-card" key={i}>
                  <img className="products-card-image" src={p.img} alt={p.title} />
                  <div className="products-card-info">
                    <h4 className="products-card-title">{p.title}</h4>
                    <a href={p.link} className="products-card-link">
                      <i className="bi bi-link-45deg" />
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="swipe-hint">
            <i className="bi bi-arrow-left-right"></i> Swipe to Explore
          </div>
        </div>
      </section>

      {/* Footer */}
      {isStandalonePage && <Footer />}
    </>
  );
};

export default Products;
