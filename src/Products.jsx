import React, { useEffect, useState, useRef } from "react";
import "./Productscard.css";
import Header from "./Header";
import Footer from "./Footer";

import productswindow from "../src/image/products-window.jpg";
import productsdoor from "../src/image/products-door.jpg";
import productscurtain from "../src/image/products-curtains.jpg";
import productsblinds from "../src/image/products-blinds.jpg";
import productsvinylflooring from "../src/image/products-vinylflooring.jpg";
import productswallpapers from "../src/image/products-wallpapers.jpg";

function Products() {
  const [products, setProducts] = useState([]);
  const trackRef = useRef(null);

  useEffect(() => {
    const list = [
      { img: productswindow, title: "Mosquito Net Windows", link: "/product/mosquitonetwindows" },
      { img: productsdoor, title: "Mosquito Net Doors", link: "/product/mosquitonetdoors" },
      { img: productscurtain, title: "Curtains", link: "/product/curtains" },
      { img: productsblinds, title: "Blinds", link: "/products/blinds" },
      { img: productsvinylflooring, title: "Flooring Mat", link: "/product/vinylflooring" },
      { img: productswallpapers, title: "Wallpapers for Walls", link: "/product/wallpapers" },
    ];
    setProducts([...list, ...list]); // duplicate for infinite scroll
  }, []);

  return (
    <>
      {window.location.pathname !== "/" && <Header />}
      <section className="products-section-wrapper">
        <div className="products-title-section">
          <h2 className="products-main-heading">Our Products</h2>
          <p className="products-description">
            We bring you a comprehensive range of high-quality solutions to enhance your living spaces.
          </p>
          
        </div>

        <div className="products-carousel-container">
          <div
            className="products-carousel-track"
            ref={trackRef}
          >
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
            <i className="bi bi-arrow-left-right"></i> Swipe or Slide to Explore
          </div>
        </div>
      </section>
      {window.location.pathname !== "/" && <Footer />}
    </>
  );
}

export default Products;
