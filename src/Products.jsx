import React from "react";
import "./Products.css";
import Header from "./Header";
import Footer from "./Footer";
import pcurtain from "../src/image/p-curtains.jpg";
import pblinds from "../src/image/p-blinds.jpg";
import pwallpapers from "../src/image/p-wallpapers.jpg";
import pflooringmat from "../src/image/p-flooringmat.jpg";
import pmwindow from "../src/image/p-m-window.jpg";
import pmdoor from "../src/image/p-m-door.jpg";

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
              <img src={pmwindow} className="img-fluid" alt="" />
              <div className="product-info">
                <h4>Mosquito Net Windows</h4>
                <a
                  href="/product/netwindow"
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
              <img src={pmdoor} className="img-fluid" alt="" />
              <div className="product-info">
                <h4>Mosquito Net Doors</h4>
                <a
                  href="/product/netdoors"
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
              <img src={pcurtain} className="img-fluid" alt="" />
              <div className="product-info">
                <h4>Curtains</h4>
                <a
                  href="/product/curtain"
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
              <img src={pblinds} className="img-fluid" alt="" />
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
              <img src={pflooringmat} className="img-fluid" alt="" />
              <div className="product-info">
                <h4>Flooring Mat</h4>
                <a
                  href="/product/flooringmats"
                  className="details-link"
                  title="More Details"
                >
                  <i className="bi bi-link-45deg"></i>
                </a>
              </div>
            </div>

            <div className="col-lg-4 col-12 product-item filter-web mt-3"
              style={{ position: "relative" }}>
              <img src={pwallpapers} className="img-fluid" alt="" />
              <div className="product-info">
                <h4>Wallpapers for Walls</h4>
                <a
                  href="/product/wallpaper"
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
