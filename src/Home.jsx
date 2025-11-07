import React, { useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation, Parallax } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "bootstrap/dist/css/bootstrap.min.css";
import AOS from "aos";
import "aos/dist/aos.css";
import "./Home.css";
import { Helmet } from "react-helmet-async";

function Home() {
  useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);

  const slides = [
    {
      id: 1,
      image: require("../src/image/banner-1.jpg"),
      title: "Your Vision, Our Expertise",
      subtitle: "Transforming dreams into reality with elegant interior design.",
      buttonText: "Start Your Project",
      buttonLink: "/contact",
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

  return (
    <>
      {/* SEO */}
      <Helmet>
        <title>Indec Interiors | Home</title>
        <meta
          name="description"
          content="Indec Interiors transforms your spaces with modern and elegant interior designs. Explore custom solutions for homes and offices."
        />
        <meta
          name="keywords"
          content="Indec Interiors, home interiors, luxury design, modern home decor, interior designers India"
        />
        <link rel="canonical" href="https://indecdecors.com/whatwedo" />

        {/* Open Graph */}
        <meta property="og:title" content="Indec Interiors | Home" />
        <meta
          property="og:description"
          content="Indec Interiors transforms your spaces with modern and elegant interior designs. Explore custom solutions for homes and offices."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://indecdecors.com/" />
        <meta property="og:image" content="https://indecdecors.com/image/banner-3.jpg" />
        


      </Helmet>

      {/* Hero Section */}
      <section className="hero-section">
        <Swiper
          speed={1400}
          parallax={true}
          centeredSlides={true}
          autoplay={{
            delay: 5500,
            disableOnInteraction: false,
          }}
          pagination={{ clickable: true }}
          navigation={true}
          loop={true}
          modules={[Autoplay, Pagination, Navigation, Parallax]}
          className="heroSwiper"
        >
          {slides.map((slide, index) => (
            <SwiperSlide key={slide.id}>
              <div
                className="slide-bg kenburns"
                style={{ backgroundImage: `url(${slide.image})` }}
                data-swiper-parallax="-20%"
              ></div>

              <div className="hero-overlay"></div>

              <div className="hero-content">
                <h1
                  className="hero-title"
                  data-swiper-parallax="-300"
                  data-aos="fade-up"
                >
                  {slide.title}
                </h1>
                <p
                  className="hero-subtitle"
                  data-swiper-parallax="-100"
                  data-aos="fade-up"
                  data-aos-delay="200"
                >
                  {slide.subtitle}
                </p>

                {index === 0 && slide.buttonText && (
                  <a
                    href={slide.buttonLink}
                    className="btn btn-hero mt-3"
                    data-swiper-parallax="-150"
                    data-aos="fade-up"
                    data-aos-delay="400"
                  >
                    {slide.buttonText}
                  </a>
                )}
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </section>
    </>
  );
}

export default Home;
