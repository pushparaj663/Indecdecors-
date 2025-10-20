import React, { useEffect } from 'react';
import './About.css';
import aboutimg from '../src/image/whoweare.jpg';
import Footer from './Footer';
import Header from './Header';
import 'aos/dist/aos.css';
import AOS from 'aos';

function About() {
    useEffect(() => {
        AOS.init({
            duration: 900,
            easing: 'ease-out-cubic',
            once: true,
        });
    }, []);

    const isHome = window.location.pathname === '/';

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
            <div className='container-fluid p-0'>
                {!isHome && <div className='sticky-top'><Header /></div>}

                <section id="about-card" data-aos="fade-up">
                    {/* Full width heading and paragraph */}
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

                    {/* Two-column layout below */}
                    <div className="row mt-4">
                        <div className="col-lg-6 content" data-aos="fade-right">
                            <ul>
                                {features.map((item, index) => (
                                    <li key={index} data-aos="fade-up" data-aos-delay={index * 150}>
                                        <i className="bi bi-check-circle"></i>
                                        {item}
                                    </li>
                                ))}
                            </ul>
                        </div>

                        <div className="col-lg-6 about-img-wrapper" data-aos="fade-left">
                            <div className="about-img-card">
                                <img src={aboutimg} alt="Who we are" />
                            </div>
                        </div>
                    </div>
                </section>

                {!isHome && <Footer />}
            </div>
        </>
    );
}

export default About;
