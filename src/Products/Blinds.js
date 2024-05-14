import { React, useEffect } from 'react';
import '../About.css'
import blzebra from '../../src/image/bl-zebra.jpg'
import blblackout from '../../src/image/pi-blinds.jpg'
import blvertical from '../../src/image/bl-vertical.jpg'
import Footer from '../Footer';
import Header from '../Header';
import AOS from 'aos';
import "../../node_modules/aos/dist/aos.css"
import features from '../../src/image/features-2.png'

function Blinds(props) {
    useEffect(() => {
        AOS.init();
    }, [])
    return (
        <>
            <div className='container-fluid p-0'>
                <div className='sticky-top'>
                    <Header />
                </div>
                <section id="blinds" className="product-items section-bg">
                    <div className="container">
                        <div className="section-title" data-aos="fade-up" data-aos-delay="200">
                            <h2>Blinds</h2>
                            <p>Blinds are window coverings that can be adjusted to control the amount of light,
                                privacy, and visibility in a room.  At  indec, we are provided three types of blinds such that RollerBlinds, Vertical Blinds and Zebra Blinds.
                                Overall blinds provide a combination of functionality, style, and practicality, allowing you to control
                                your environment while enhancing the aesthetics of your space and practicality, making them a popular
                                choice for window coverings in many homes and offices.
                            </p>
                        </div>

                        <div className="row">
                            <ul className="nav nav-tabs row d-flex" role="tablist">
                                <li className="nav-item col" role="presentation">
                                    <a className="nav-link show active" data-bs-toggle="tab" href="#tab-1" aria-selected="true" role="tab">
                                        <i className="bi bi-house"></i>
                                        <h4 className="d-none d-lg-block">Roller Blinds</h4>
                                    </a>
                                </li>
                                <li className="nav-item col" role="presentation">
                                    <a className="nav-link" data-bs-toggle="tab" href="#tab-2" aria-selected="false" role="tab" tabindex="-1">
                                        <i className="bi bi-house"></i>
                                        <h4 className="d-none d-lg-block">Vertical Blinds</h4>
                                    </a>
                                </li>
                                <li className="nav-item col" role="presentation">
                                    <a className="nav-link" data-bs-toggle="tab" href="#tab-3" aria-selected="false" role="tab" tabindex="-1">
                                        <i className="bi bi-house"></i>
                                        <h4 className="d-none d-lg-block">Zebra Blinds</h4>
                                    </a>
                                </li>
                            </ul>

                            <div className="tab-content">
                                <div className="tab-pane active show" id="tab-1" role="tabpanel">
                                    <div className="row">
                                        <div className="col-lg-6 order-2 order-lg-1 mt-3 mt-lg-0">
                                            <ul>
                                                <li><i className="bi bi-check-circle-fill"></i>Our blockout roller blinds are designed to block out light effectively, providing you with the perfect environment for relaxation, sleep, or entertainment.</li>
                                                <li><i className="bi bi-check-circle-fill"></i>Create a private sanctuary with our blockout roller blinds.</li>
                                                <li><i className="bi bi-check-circle-fill"></i>Whether in bedrooms, media rooms, or offices, these blinds offer a high level of privacy, making them an ideal choice for spaces where seclusion is essential.</li>
                                                <li><i className="bi bi-check-circle-fill"></i>These blinds help regulate indoor temperatures, keeping your space cooler in the summer and warmer in the winter, contributing to energy efficiency.</li>
                                                <li><i className="bi bi-check-circle-fill"></i>The thick, blockout materials of our roller blinds help absorb sound, reducing external noise and creating a tranquil atmosphere.</li>
                                            </ul>
                                        </div>
                                        <div className="col-lg-6 order-1 order-lg-2 text-center">
                                            <img src={features} alt="" className="img-fluid" />
                                        </div>
                                    </div>
                                </div>
                                <div className="tab-pane" id="tab-2" role="tabpanel">
                                    <div className="row">
                                        <div className="col-lg-6 order-2 order-lg-1 mt-3 mt-lg-0">

                                            <ul>
                                                <li><i className="bi bi-check-circle-fill"></i>Explore the versatility of vertical blinds, a timeless choice that provides excellent light control and privacy.</li>
                                                <li><i className="bi bi-check-circle-fill"></i>Our collection offers a variety of colors and textures to complement any interior style.</li>
                                                <li><i className="bi bi-check-circle-fill"></i>Our vertical blinds are designed for convenience.</li>
                                            </ul>
                                        </div>
                                        <div className="col-lg-6 order-1 order-lg-2 text-center">
                                            <img src={features} alt="" className="img-fluid" />
                                        </div>
                                    </div>
                                </div>
                                <div className="tab-pane" id="tab-3" role="tabpanel">
                                    <div className="row">
                                        <div className="col-lg-6 order-2 order-lg-1 mt-3 mt-lg-0">
                                            <ul>
                                                <li><i className="bi bi-check-circle-fill"></i>Zebra blinds feature a dual-layered fabric design that combines alternating sheer and solid bands.</li>
                                                <li><i className="bi bi-check-circle-fill"></i>This innovative construction allows you to seamlessly transition between privacy and light control with a simple adjustment.</li>
                                                <li><i className="bi bi-check-circle-fill"></i>Zebra blinds enable you to create the perfect ambiance by adjusting the sheer and solid bands, providing you with a range of lighting options throughout the day.</li>
                                                <li><i className="bi bi-check-circle-fill"></i>Zebra blinds offer a harmonious balance of privacy and style. When closed, the solid bands ensure complete privacy, while the sheer bands allow soft, diffused light to filter into your space.</li>
                                                <li><i className="bi bi-check-circle-fill"></i>Elevate your interior design with our extensive range of colors and patterns. From neutral tones to bold designs, our zebra blinds are available in options that cater to various aesthetic preferences.</li>
                                            </ul>
                                        </div>
                                        <div className="col-lg-6 order-1 order-lg-2 text-center">
                                            <img src={features} alt="" className="img-fluid" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <section id="Products" className="Products">
                            <div className="row gy-4">
                                <div className="col-lg-6">
                                    <div className="box" data-aos="zoom-in" data-aos-easing="ease-out-cubic" data-aos-duration="5000">
                                        <h4 className="title">Quality Craftsmanship</h4>
                                        <p className="description">
                                            Our blinds are crafted with precision and attention to detail. We source materials from trusted suppliers to ensure the durability and longevity of our products.</p>
                                    </div>
                                </div>

                                <div className="col-lg-6">
                                    <div className="box" data-aos="zoom-in" data-aos-duration="5000">
                                        <h4 className="title">Variety of Styles</h4>
                                        <p className="description">Whether your style is contemporary, traditional, or eclectic, our diverse range of blinds allows you to find the perfect match for your aesthetic preferences.</p>
                                    </div>
                                </div>

                                <div className="col-lg-6">
                                    <div className="box" data-aos="zoom-in" data-aos-duration="3000">
                                        <h4 className="title">Customization Options</h4>
                                        <p className="description">Tailor your blinds to suit your unique taste. Choose from a wide selection of colors, materials, and patterns to create a customized look that complements your interior design.</p>
                                    </div>
                                </div>

                                <div className="col-lg-6">
                                    <div className="box" data-aos="zoom-in" data-aos-duration="3000">
                                        <h4 className="title">Expert Guidance</h4>
                                        <p className="description">Not sure which blinds are right for your space? Our experienced team is here to provide expert advice and assist you in making informed decisions based on your needs and style.</p>
                                    </div>
                                </div>

                            </div>
                        </section>

                    </div>
                </section>
                <Footer />
            </div>
        </>
    );
}

export default Blinds;