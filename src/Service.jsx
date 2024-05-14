import React from 'react';
import './Service.css';
import Footer from './Footer';
import Header from './Header';

function Service(props) {
    return (
        <>
            <div className='container-fluid p-0'>
                <div className='sticky-top'>
                    {window.location.pathname === '/' ? '' :
                        <Header />}
                </div>

                <section id="services" className="services aos-init aos-animate">

                    <div className="container" data-aos="fade-up">

                        <header className="section-header">
                            <h2>Services</h2>
                            <p>Whether you're envisioning a cozy home retreat or a vibrant office space, we invite you to join us in crafting a story through design. Explore our services, and let's embark on a journey to transform your space into a work of art.</p>
                        </header>

                        <div className="row gy-4">

                            <div className="col-md-6 aos-init aos-animate" data-aos="fade-up" data-aos-delay="200">
                                <div className="service-box blue">
                                    <div className="icon"><i className="bi bi-house"></i></div>
                                    <h3>Residential Interior Decorations</h3>
                                    <p>Elevate your home with our residential interior decoration services. Whether you're looking to revamp a single room or transform your entire living space, our decorators bring
                                        creativity and expertise to every corner of your home.
                                        We specialize in creating cohesive designs and decorations that harmonize with your lifestyle and preferences.</p>
                                </div>
                            </div>

                            <div className="col-md-6 aos-init aos-animate" data-aos="fade-up" data-aos-delay="300">
                                <div className="service-box orange">
                                    <div className="icon"><i className="bi bi-buildings"></i></div>
                                    <h3>Commercial Interior Decorations</h3>
                                    <p>Make a lasting impression with our commercial interior decoration solutions.
                                        Our team understands the importance of creating spaces that reflect your brand identity and enhance
                                        the overall experience for employees, clients, and visitors. From offices to retail spaces,
                                        we tailor our designs to meet your business objectives.</p>
                                </div>
                            </div>

                            <div className="col-md-6 aos-init aos-animate" data-aos="fade-up" data-aos-delay="400">
                                <div className="service-box green">
                                    <div className="icon"><i className="bi bi-columns-gap"></i></div>
                                    <h3>Space Planning</h3>
                                    <p>Efficient use of space is a cornerstone of good design. Our space planning services involve creating layouts that optimize flow, functionality, and aesthetics.</p>
                                </div>
                            </div>

                            <div className="col-md-6 aos-init aos-animate" data-aos="fade-up" data-aos-delay="600">
                                <div className="service-box purple">
                                    <div className="icon"><i className="bi bi-building-gear"></i></div>
                                    <h3>Styling</h3>
                                    <p>Whether you're looking to create a cozy haven at home or foster a productive and inspiring environment in the office, our experienced stylists are here to transform your space into a reflection of your unique style and personality.</p>
                                </div>
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

export default Service;