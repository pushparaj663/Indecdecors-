import { React, useEffect } from 'react';
import './About.css';
import aboutimg from '../src/image/whoweare.jpg'
import Footer from './Footer';
import Header from './Header';
import "../node_modules/aos/dist/aos.css"
import AOS from 'aos'

function About(props) {
    useEffect(() => {
        AOS.init(
            {
                duration: 700,
                easing: "ease-out-cubic",
            }
        );
    }, [])


    return (
        <>
            <div className='container-fluid p-0'>
                <div className='sticky-top'>
                    {window.location.pathname === '/' ? '' :
                        <Header />}
                </div>

                <section id="about" className="aos-animate" data-aos-easing="ease-in-sine">
                    <div className="container" data-aos="fade-up">
                        <div className='row'>
                            <div className="col">
                                <h2>Who we are</h2>
                                <p>Welcome to indec, where creativity meets functionality,
                                    and every space tells a unique story. We are not just interior decorators;
                                    we are storytellers, transforming environments into captivating narratives
                                    that reflect the essence of those who inhabit them.</p>

                            </div>
                        </div>
                        <div className="row" data-aos-easing="ease-in-sine">
                            <div className="col-lg-6 about-img" data-aos="fade-right">
                                <img src={aboutimg} alt="Who we are" />
                            </div>

                            <div className="col-lg-6 content" data-aos="fade-left">
                                <ul>
                                    <li><i className="bi bi-check-circle"></i>
                                        We approach each project with a holistic perspective,
                                        considering not only the visual elements but also the functionality and overall experience of the space.</li>
                                    <li><i className="bi bi-check-circle"></i> Your dreams and preferences are at the center of our design process.</li>
                                    <li><i className="bi bi-check-circle"></i> We work closely with our clients to understand their vision and bring it to fruition.</li>
                                    <li><i className="bi bi-check-circle"></i> It's the small details that make a design truly exceptional.</li>
                                    <li><i className="bi bi-check-circle"></i> In the ever-evolving world of design, we embrace innovation.</li>
                                    <li><i className="bi bi-check-circle"></i> Our team stays abreast of the latest trends and incorporates fresh ideas to create spaces that are both timeless and contemporary.</li>

                                </ul>

                            </div>
                        </div>

                    </div>
                </section>
                {window.location.pathname === '/' ? '' :
                    <Footer />}
            </div>
        </>
    );
}

export default About;