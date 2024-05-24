import React from "react";
import "./Products.css";
import Header from "./Header";
import Footer from "./Footer";
import productswindow from "../src/image/products-window.jpg";
import productsdoor from "../src/image/products-door.jpg";
import productscurtain from "../src/image/products-curtains.jpg";
import productsblinds from "../src/image/products-blinds.jpg";
import productsvinylflooring from "../src/image/products-vinylflooring.jpg";
import productswallpapers from "../src/image/products-wallpapers.jpg";


function Products(props) {
  return (
    <>
      <div className="sticky-top">
        {window.location.pathname === "/" ? "" : <Header />}
      </div>
      <section id="product" className="product aos-init aos-animate">
        <div className="container" data-aos="fade-up">
          <div className="section-header">
            <h2>Our Products</h2>
            <p>
              We bring you a comprehensive range of high-quality solutions to
              enhance your living spaces and provide comfort and convenience.
              Whether you're looking to keep pesky mosquitoes at bay, upgrade
              your windows with elegant curtains, or control light and privacy
              with blinds, we have the perfect products for you.
            </p>
          </div>
        </div >
        <div className="container mt-4" data-aos="fade-up">
          <div className="row">
            <div
              className="col-lg-4 col-12 product-item filter-web mt-3"
              style={{ position: "relative" }}
            >
              <img src={productswindow} className="img-fluid" alt="Mosquito Net Windows" />
              <div className="product-info">
                <h4>Mosquito Net Windows</h4>
                <a
                  href="/product/mosquitonetwindows"
                  className="details-link"
                  title="More Details"
                >
                  <i className="bi bi-link-45deg"></i>
                </a>
              </div>
            </div>
            <div
              className="col-lg-4 col-12 product-item filter-web mt-3"
              style={{ position: "relative" }}
            >
              <img src={productsdoor} className="img-fluid" alt="Mosquito Net Doors" />
              <div className="product-info">
                <h4>Mosquito Net Doors</h4>
                <a
                  href="/product/mosquitonetdoors"
                  className="details-link"
                  title="More Details"
                >
                  <i className="bi bi-link-45deg"></i>
                </a>
              </div>
            </div>
            <div
              className="col-lg-4 col-12 product-item filter-web mt-3"
              style={{ position: "relative" }}
            >
              <img src={productscurtain} className="img-fluid" alt="Curtains" />
              <div className="product-info">
                <h4>Curtains</h4>
                <a
                  href="/product/curtains"
                  className="details-link"
                  title="More Details"
                >
                  <i className="bi bi-link-45deg"></i>
                </a>
              </div>
            </div>
          </div>
          <div className="row mt-3" data-aos="fade-up">
            <div
              className="col-lg-4 col-12 product-item filter-web mt-3"
              style={{ position: "relative" }}
            >
              <img src={productsblinds} className="img-fluid" alt="Blinds" />
              <div className="product-info">
                <h4>Blinds</h4>
                <a
                  href="/product/blinds"
                  className="details-link"
                  title="More Details"
                >
                  <i className="bi bi-link-45deg"></i>
                </a>
              </div>
            </div>
            <div
              className="col-lg-4 col-12 product-item filter-web mt-3"
              style={{ position: "relative" }}
            >
              <img src={productsvinylflooring} className="img-fluid" alt="Vinyl Flooring" />
              <div className="product-info">
                <h4>Flooring Mat</h4>
                <a
                  href="/product/vinylflooring"
                  className="details-link"
                  title="More Details"
                >
                  <i className="bi bi-link-45deg"></i>
                </a>
              </div>
            </div>

            <div className="col-lg-4 col-12 product-item filter-web mt-3"
              style={{ position: "relative" }}>
              <img src={productswallpapers} className="img-fluid" alt="Wall Papers" />
              <div className="product-info">
                <h4>Wallpapers for Walls</h4>
                <a
                  href="/product/wallpapers"
                  className="details-link"
                  title="More Details"
                >
                  <i className="bi bi-link-45deg"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {window.location.pathname === "/" ? "" : <Footer />}
    </>
  );
}

export default Products;
