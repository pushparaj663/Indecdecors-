import React, { useEffect } from "react";
import curtain_rods_finials from "../../src/image/curtain_rods_finials.jpg";
import "./CurtainRod.css";
import AOS from "aos";
import "aos/dist/aos.css";

function CurtainRod() {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true, easing: "ease-in-out" });
  }, []);

  return (
    <section id="rods-and-brackets" className="curtainrod-section">
      <div className="container" data-aos="fade-up" data-aos-delay="200">
        <div className="curtainrod-title text-center">
          <h2>Curtain Rods & Brackets</h2>
          <p>
            Curtains are an essential part of home decor, blending function and
            beauty. The right curtain rods and brackets make them hang
            gracefully while adding a touch of sophistication to your interiors.
          </p>
          <p>
            At <strong>INDEC</strong>, we redefine the art of window dressing
            with our exquisite range of designer curtain brackets and rods.
          </p>
        </div>

        <div className="curtainrod-row row align-items-center">
          <div
            className="col-lg-6 curtainrod-content"
            data-aos="fade-right"
            data-aos-delay="300"
          >
            <ul className="curtainrod-list">
              <li>
                <i className="bi bi-check-circle-fill"></i> Immerse yourself in
                luxury with our premium curtain hardware.
              </li>
              <li>
                <i className="bi bi-check-circle-fill"></i> Choose from modern,
                classic, or ornate bracket styles.
              </li>
              <li>
                <i className="bi bi-check-circle-fill"></i> Available in rich
                metallic finishes that complement every interior theme.
              </li>
              <li>
                <i className="bi bi-check-circle-fill"></i> Each rod is crafted
                for strength and beauty, ensuring your curtains glide smoothly.
              </li>
              <li>
                <i className="bi bi-check-circle-fill"></i> Decorative finials
                add a finishing touch to complete your curtain setup.
              </li>
              <li>
                <i className="bi bi-check-circle-fill"></i> Designed with
                precision and crafted with care to last for years.
              </li>
            </ul>
          </div>

          <div
            className="col-lg-6 text-center curtainrod-image"
            data-aos="fade-left"
            data-aos-delay="400"
          >
            <img
              src={curtain_rods_finials}
              alt="Curtain Rods and Brackets"
              className="img-fluid shadow-lg rounded-3"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default CurtainRod;
