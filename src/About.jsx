import React, { useEffect } from 'react';
import { useLocation } from "react-router-dom";
import './About.css';
import aboutimg from '../src/image/whoweare.jpg';
import Header from './Header';
import Footer from './Footer';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { Helmet } from "react-helmet-async";

const About = () => {
    const location = useLocation();
    const isHome = location.pathname === '/';
    const isStandalonePage = location.pathname.toLowerCase() === "/about";

    useEffect(() => {
        AOS.init({
            duration: 900,
            easing: 'ease-out-cubic',
            once: true,
        });
    }, []);

    const features = [
        "We approach each project holistically, considering both aesthetics and functionality.",
        "Your dreams and preferences guide our design process.",
        "We collaborate closely with clients to bring their vision to life.",
        "Attention to detail ensures every design is exceptional.",
        "We embrace innovation and modern trends.",
        "Our team creates spaces that are timeless yet contemporary."
    ];

    return (
        <>
   <div className="sticky-top">
          {window.location.pathname === "/" ? "" : <Header />}
        </div>

            {/* SEO Helmet */}

                <Helmet>
                    <title>About Us | Indec Interiors</title>
                    <meta
                        name="description"
                        content="Learn about Indec Interiors — a leading interior design firm offering innovative design solutions for homes and offices."
                    />
                    <meta
                        name="keywords"
                        content="About Indec Interiors, interior design company, home design experts"
                    />
                    <link rel="canonical" href="https://indecdecors.com/who-we-are" />

                    {/* Open Graph */}
                    <meta property="og:title" content="About Us | Indec Interiors" />
                    <meta
                        property="og:description"
                        content="Learn about Indec Interiors — a leading interior design firm offering innovative design solutions for homes and offices."
                    />
                    <meta property="og:type" content="website" />
                    <meta property="og:url" content="https://indecdecors.com/who-we-are" />
                    <meta property="og:image" content="https://indecdecors.com/image/whoweare.jpg" />

        
                </Helmet>
          

            {/* About Section */}
            <section id="about-card" data-aos="fade-up">
                <div className="full-width-text" data-aos="fade-down">
                    <h2>Who We Are</h2>
                    <div className="heading-line"></div>
                    <p>
                        Welcome to Indec, where creativity meets functionality,
                        and every space tells a unique story. We are not just interior decorators;
                        we are storytellers, transforming environments into captivating narratives
                        that reflect the essence of those who inhabit them.
                    </p>
                </div>

                <div className="row mt-4">
                    <div className="col-lg-6 content" data-aos="fade-right">
                        <ul>
                            {features.map((item, index) => (
                                <li key={index} data-aos="fade-up" data-aos-delay={index * 150}>
                                    <i className="bi bi-check-circle"></i> {item}
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div className="col-lg-6 about-img-wrapper" data-aos="fade-left">
                        <div className="about-img-card">
                            <img src={aboutimg} alt="Who We Are" />
                        </div>
                    </div>
                </div>
            </section>

            {/* Footer */}
              {window.location.pathname === "/" ? "" : <Footer />}
        </>
    );
};

export default About;
