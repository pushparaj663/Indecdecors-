import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import AOS from "aos";
import "aos/dist/aos.css";
import "./Home.css";

function Home() {
  const [activeIndex, setActiveIndex] = useState(0);

const slides = [
  {
    id: 1,
    image: require("../src/image/banner-1.jpg"),
    title: "Your Vision, Our Expertise",
    subtitle: "Transforming dreams into reality with elegant interior design.",
    buttonText: "Start Your Project",
    buttonLink: "#contact",
  },
  {
    id: 2,
    image: require("../src/image/banner-2.jpg"),
    title: "Elevating Spaces, Elevating Lives",
    subtitle: "Creating environments that inspire and enhance your daily living.",
  },
  {
    id: 3,
    image: require("../src/image/banner-3.jpg"),
    title: "Designing Your Story, One Detail at a Time",
    subtitle: "Attention to every detail to craft spaces that tell your story.",
  },
  {
    id: 4,
    image: require("../src/image/banner-4.jpg"),
    title: "Crafting Beautiful Interiors, One Room at a Time",
    subtitle: "Personalized designs that reflect your unique style and personality.",
  },
];


  useEffect(() => {
    AOS.init({ duration: 300, once: true });
  }, []);

  const handleSlideChange = (index) => setActiveIndex(index);

  return (
    <section className="hero-section">
      <div
        id="heroCarousel"
        className="carousel slide carousel-fade"
        data-bs-ride="carousel"
      >
        {/* Indicators */}
        <div className="carousel-indicators">
          {slides.map((_, i) => (
            <button
              key={i}
              type="button"
              data-bs-target="#heroCarousel"
              data-bs-slide-to={i}
              className={i === activeIndex ? "active" : ""}
              onClick={() => handleSlideChange(i)}
              aria-label={`Slide ${i + 1}`}
            ></button>
          ))}
        </div>

        {/* Slides */}
        <div className="carousel-inner">
          {slides.map((slide, index) => (
            <div
              key={slide.id}
              className={`carousel-item ${index === activeIndex ? "active" : ""}`}
            >
              <div className="hero-image-wrapper">
                <img
                  src={slide.image}
                  className="d-block w-100 hero-image"
                  alt={slide.title}
                />
                <div className="hero-overlay"></div>
              </div>

              <div className="carousel-caption d-flex flex-column align-items-center justify-content-center text-center">
                <h1
                  className="hero-title"
                  data-aos="fade-up"
                  data-aos-delay="200"
                >
                  {slide.title}
                </h1>
                <p
                  className="hero-subtitle"
                  data-aos="fade-up"
                  data-aos-delay="400"
                >
                  {slide.subtitle}
                </p>

                {index === 0 && (
                  <a
                    href={slide.buttonLink}
                    className="btn btn-hero mt-3"
                    data-aos="zoom-in"
                    data-aos-delay="600"
                  >
                    {slide.buttonText}
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Controls */}
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#heroCarousel"
          data-bs-slide="prev"
        >
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#heroCarousel"
          data-bs-slide="next"
        >
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </section>
  );
}

export default Home;
