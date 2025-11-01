import React, { useState, useEffect } from "react";
import { Helmet } from "react-helmet-async";
import Header from "./Header";
import Footer from "./Footer";
import AOS from "aos";
import "aos/dist/aos.css";
import "./gallerycard.css";

// ✅ Import images
import img1 from "./image/banner-1.jpg";
import img2 from "./image/banner-2.jpg";
import img3 from "./image/banner-3.jpg";
import img4 from "./image/banner-4.jpg";


const Gallery = () => {
  const images = [
    { src: img1, alt: "Living Room Design" },
    { src: img2, alt: "Curtain Collection" },
    { src: img3, alt: "Office Interior" },
    { src: img4, alt: "Wall Decor Setup" },

  ];

  const [selectedImage, setSelectedImage] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  const openLightbox = (index) => {
    setSelectedImage(images[index]);
    setCurrentIndex(index);
  };

  const closeLightbox = () => {
    setSelectedImage(null);
  };

  const nextImage = () => {
    const newIndex = (currentIndex + 1) % images.length;
    setSelectedImage(images[newIndex]);
    setCurrentIndex(newIndex);
  };

  const prevImage = () => {
    const newIndex = (currentIndex - 1 + images.length) % images.length;
    setSelectedImage(images[newIndex]);
    setCurrentIndex(newIndex);
  };

  return (
    <>
      {/* ✅ SEO Meta */}
      <Helmet>
        <title>Gallery | Indec Interiors</title>
        <meta
          name="description"
          content="Explore the gallery of Indec Interiors showcasing our elegant designs, premium products, and completed interior transformations."
        />
        <meta
          name="keywords"
          content="Indec Interiors gallery, interior design, home decor, blinds, curtains, wallpapers"
        />
      </Helmet>

      <div className="galleryPage-container">
        {/* ✅ Header */}
        <div className="sticky-top">
          {window.location.pathname === "/" ? "" : <Header />}
        </div>

        {/* ✅ Gallery Section */}
        <section className="galleryPage-section">
          <div className="galleryPage-wrapper" data-aos="fade-up">
            <div className="galleryPage-header" data-aos="fade-down">
              <h2>Our Gallery</h2>
              <p>
                Discover the beautiful interiors and design concepts by{" "}
                <strong>Indec Interiors</strong>. Each project reflects quality,
                creativity, and perfection.
              </p>
            </div>

            <div className="galleryPage-grid">
              {images.map((img, index) => (
                <div
                  className="galleryPage-item"
                  key={index}
                  data-alt={img.alt}
                  onClick={() => openLightbox(index)}
                  data-aos="zoom-in"
                  data-aos-delay={index * 150}
                >
                  <img src={img.src} alt={img.alt} />
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ✅ Lightbox */}
        {selectedImage && (
          <div
            className="galleryPage-lightboxOverlay"
            onClick={closeLightbox}
          >
            <div
              className="galleryPage-lightboxContent"
              onClick={(e) => e.stopPropagation()}
            >
              <span className="galleryPage-closeBtn" onClick={closeLightbox}>
                &times;
              </span>
              <img
                src={selectedImage.src}
                alt={selectedImage.alt}
                className="galleryPage-lightboxImg"
              />
              <button className="galleryPage-prevBtn" onClick={prevImage}>
                &#10094;
              </button>
              <button className="galleryPage-nextBtn" onClick={nextImage}>
                &#10095;
              </button>
              <p className="galleryPage-caption">{selectedImage.alt}</p>
            </div>
          </div>
        )}

        {/* ✅ Footer */}
        {window.location.pathname === "/" ? "" : <Footer />}
      </div>
    </>
  );
};

export default Gallery;
