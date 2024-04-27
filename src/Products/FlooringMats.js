import { React, useEffect } from 'react';
import Footer from '../Footer';
import Header from '../Header';
import AOS from 'aos';
import "../../node_modules/aos/dist/aos.css"
import mn_main_door1 from '../../src/image/p-alm-plt-window.jpg'
import aboutimg from '../../src/image/about-img.jpg'
import features from '../../src/image/fm-home.jpg'
import fmoff from '../../src/image/fm-off.jpg'


function FlooringMats(props) {

    useEffect(() => {
        AOS.init();
    }, [])


    return (
        <>
            <div className='container-fluid p-0'>
                <div className='sticky-top'>
                    <Header />
                </div>

                <section id="flooringmat" className="product-items section-bg">
                    <div className="container aos-animate" data-aos="fade-up" data-aos-delay="100">
                        <div className="section-title">
                            <h2>Flooring Mat</h2>
                            <p>Elevate your home and office environments with our exquisite flooring mat decorations.
                                Designed to marry functionality with aesthetics, our flooring mats offer comfort, style, and durability for every space.
                            </p>
                        </div>

                        <div className="row">
                            <ul class="nav nav-tabs row d-flex" role="tablist">
                                <li class="nav-item col" role="presentation">
                                    <a class="nav-link show active" data-bs-toggle="tab" href="#tab-1" aria-selected="true" role="tab">
                                        <i class="bi bi-house"></i>
                                        <h4 class="d-none d-lg-block">Home</h4>
                                    </a>
                                </li>
                                <li class="nav-item col" role="presentation">
                                    <a class="nav-link" data-bs-toggle="tab" href="#tab-2" aria-selected="false" role="tab" tabindex="-1">
                                        <i class="bi bi-house"></i>
                                        <h4 class="d-none d-lg-block">Office</h4>
                                    </a>
                                </li>
                            </ul>

                            <div class="tab-content">
                                <div class="tab-pane active show" id="tab-1" role="tabpanel">
                                    <div class="row">
                                        <div class="col-lg-6 order-2 order-lg-1 mt-3 mt-lg-0 aos-animate" data-aos="fade-up" data-aos-delay="100">
                                            <p class="fst-italic">
                                                Transform your living spaces into cozy retreats with our home flooring mat decorations.
                                                Whether you're looking to add warmth to your bedroom or create a welcoming entryway, our mats provide the perfect blend of comfort and style.
                                            </p>
                                            <ul>
                                                <li><i className="bi bi-check-circle-fill"></i><span>Living Room:</span>Enhance the comfort of your living room with plush and inviting flooring mats that complement your decor and add a touch of luxury.</li>
                                                <li><i className="bi bi-check-circle-fill"></i><span>Bedroom:</span> Create a serene oasis with soft and cozy mats that greet you with warmth and comfort every morning.</li>
                                                <li><i className="bi bi-check-circle-fill"></i><span>Entryway:</span> Make a stylish first impression with durable and functional mats that welcome guests into your home while protecting your floors from dirt and debris.</li>
                                            </ul>
                                        </div>
                                        <div class="col-lg-6 order-1 order-lg-2 text-center aos-animate" data-aos="fade-up" data-aos-delay="200">
                                            <img src={features} alt="" class="img-fluid" />
                                        </div>
                                    </div>
                                </div>
                                <div class="tab-pane" id="tab-2" role="tabpanel">
                                    <div class="row">
                                        <div class="col-lg-6 order-2 order-lg-1 mt-3 mt-lg-0">
                                            <p class="fst-italic">
                                                Set the stage for productivity and professionalism in your workplace with our office flooring mat decorations.
                                                From ergonomic support to sleek aesthetics, our mats are designed to enhance the functionality and style of any office space.
                                            </p>
                                            <ul>
                                                <li><i className="bi bi-check-circle-fill"></i><span>Workstations:</span>Provide ergonomic support for your employees with anti-fatigue mats that reduce discomfort and fatigue during long hours of work.</li>
                                                <li><i className="bi bi-check-circle-fill"></i><span>Meeting Rooms:</span>Add a touch of sophistication to your meeting rooms with sleek and stylish mats that complement your office decor and create a professional atmosphere.</li>
                                                <li><i className="bi bi-check-circle-fill"></i><span>Reception Areas:</span>Impress clients and visitors with elegant mats that make a bold statement while protecting your floors from wear and tear.</li>
                                            </ul>
                                        </div>
                                        <div class="col-lg-6 order-1 order-lg-2 text-center">
                                            <img src={fmoff} alt="" class="img-fluid" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <section id="Products" className="Products">
                            <div className="row gy-4">
                                <div className="col-lg-6">
                                    <div className="box aos-animate" data-aos="zoom-in" data-aos-easing="ease-out-cubic" data-aos-duration="5000">
                                        <h4 className="title">Quality Materials</h4>
                                        <p className="description">
                                            Our wallpapers are crafted from high-quality materials that are durable, fade-resistant, and easy to maintain, ensuring long-lasting beauty and performance.
                                        </p>
                                    </div>
                                </div>
                                <div className="col-lg-6">
                                    <div className="box" data-aos="zoom-in" data-aos-duration="5000">
                                        <h4 className="title">Variety of Designs</h4>
                                        <p className="description">Whether you prefer modern minimalism, classic elegance, or eclectic patterns, our diverse selection of wallpapers offers something for every taste and style.
                                        </p>
                                    </div>
                                </div>
                                <div className="col-lg-6">
                                    <div className="box" data-aos="zoom-in" data-aos-duration="3000">
                                        <h4 className="title">Customization Options</h4>
                                        <p className="description">Personalize your space with custom-designed wallpapers that reflect your unique personality and vision, turning your walls into works of art.</p>
                                    </div>
                                </div>
                                <div className="col-lg-6">
                                    <div className="box" data-aos="zoom-in" data-aos-duration="3000">
                                        <h4 className="title">Professional Installation</h4>
                                        <p className="description">
                                            Our experienced team will handle the installation process with precision and care, ensuring a flawless finish that enhances the overall aesthetic of your space.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </section>
                    </div>
                </section >

                <Footer />
            </div>

        </>
    );
}

export default FlooringMats;