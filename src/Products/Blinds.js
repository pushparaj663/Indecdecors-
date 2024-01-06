import React from 'react';
import '../About.css'
import zebra_blinds from '../../src/image/bl-zebra.jpg'
import blackout_blinds from '../../src/image/bl-blackout.jpg'
import vertical_blinds from '../../src/image/bl-vertical.jpg'
import Footer from '../Footer';
import Header from '../Header';

function Blinds(props) {
    return (
        <>
            <div className='container-fluid p-0'>
                <div className='sticky-top'>
                    <Header />
                </div>
                <section id="about">
                    <div className="container aos-init aos-animate" data-aos="fade-up">
                        <div className='row'>
                            <div className="col">
                                <h2>Blinds</h2>
                                <p>Blinds are window coverings that can be adjusted to control the amount of light,
                                    privacy, and visibility in a room.  At  indec, we are provided three types of blinds such that RollerBlinds, Vertical Blinds and Zebra Blinds.
                                    Overall blinds provide a combination of functionality, style, and practicality, allowing you to control
                                    your environment while enhancing the aesthetics of your space and practicality, making them a popular
                                    choice for window coverings in many homes and offices.
                                </p>
                            </div>
                        </div>

                        <div className="row">
                            <div className="col-lg-6 about-img">
                                <img src={blackout_blinds} alt="" />
                            </div>

                            <div className="col-lg-6 content">
                                <h4>Blockout Roller Blinds</h4>
                                <ul>
                                    <li><i className="bi bi-check-circle"></i>Our blockout roller blinds are designed to block out light effectively, providing you with the perfect environment for relaxation, sleep, or entertainment.</li>
                                    <li><i className="bi bi-check-circle"></i>Create a private sanctuary with our blockout roller blinds.</li>
                                    <li><i className="bi bi-check-circle"></i>Whether in bedrooms, media rooms, or offices, these blinds offer a high level of privacy, making them an ideal choice for spaces where seclusion is essential.</li>
                                    <li><i className="bi bi-check-circle"></i>These blinds help regulate indoor temperatures, keeping your space cooler in the summer and warmer in the winter, contributing to energy efficiency.</li>
                                    <li><i className="bi bi-check-circle"></i>The thick, blockout materials of our roller blinds help absorb sound, reducing external noise and creating a tranquil atmosphere.</li>
                                </ul>

                            </div>
                        </div>

                        <div className="row">

                            <div className="col-lg-6 content">
                                <h4>Vertical Blinds</h4>
                                <ul>
                                    <li><i className="bi bi-check-circle"></i>Explore the versatility of vertical blinds, a timeless choice that
                                        provides excellent light control and privacy. </li>
                                    <li><i className="bi bi-check-circle"></i>Our collection offers a variety of colors and textures to complement any interior style.</li>
                                    <li><i className="bi bi-check-circle"></i>Our vertical blinds are designed for convenience.</li>
                                </ul>

                            </div>

                            <div className="col-lg-6 about-img">
                                <img src={vertical_blinds} alt="" />
                            </div>
                        </div>

                        <div className="row">
                            <div className="col-lg-6 about-img">
                                <img src={zebra_blinds} alt="" />
                            </div>

                            <div className="col-lg-6 content">
                                <h4>Zebra Blinds</h4>
                                <ul>
                                    <li><i className="bi bi-check-circle"></i>Zebra blinds feature a dual-layered fabric design that combines alternating sheer and solid bands</li>
                                    <li><i className="bi bi-check-circle"></i>This innovative construction allows you to seamlessly transition between privacy and light control with a simple adjustment.</li>
                                    <li><i className="bi bi-check-circle"></i>Zebra blinds enable you to create the perfect ambiance by adjusting the sheer and solid bands, providing you with a range of lighting options throughout the day.</li>
                                    <li><i className="bi bi-check-circle"></i>Zebra blinds offer a harmonious balance of privacy and style. When closed, the solid bands ensure complete privacy, while the sheer bands allow soft, diffused light to filter into your space.</li>
                                    <li><i className="bi bi-check-circle"></i>Elevate your interior design with our extensive range of colors and patterns. From neutral tones to bold designs, our zebra blinds are available in options that cater to various aesthetic preferences.</li>
                                </ul>

                            </div>
                        </div>

                        <section id="Products" className="Products">
                            <div className="row gy-4">
                                <div className="col-lg-6 aos-init aos-animate" data-aos="fade-up" data-aos-delay="100">
                                    <div className="box">
                                        <h4 className="title">Quality Craftsmanship</h4>
                                        <p className="description">
                                            Our blinds are crafted with precision and attention to detail. We source materials from trusted suppliers to ensure the durability and longevity of our products.</p>
                                    </div>
                                </div>

                                <div className="col-lg-6 aos-init aos-animate" data-aos="fade-up" data-aos-delay="200">
                                    <div className="box">
                                        <h4 className="title">Variety of Styles</h4>
                                        <p className="description">Whether your style is contemporary, traditional, or eclectic, our diverse range of blinds allows you to find the perfect match for your aesthetic preferences.</p>
                                    </div>
                                </div>

                                <div className="col-lg-6 aos-init aos-animate" data-aos="fade-up" data-aos-delay="300">
                                    <div className="box">
                                        <h4 className="title">Customization Options</h4>
                                        <p className="description">Tailor your blinds to suit your unique taste. Choose from a wide selection of colors, materials, and patterns to create a customized look that complements your interior design.</p>
                                    </div>
                                </div>

                                <div className="col-lg-6 aos-init aos-animate" data-aos="fade-up" data-aos-delay="400">
                                    <div className="box">
                                        <h4 className="title">Expert Guidance</h4>
                                        <p className="description">
                                            Not sure which blinds are right for your space? Our experienced team is here to provide expert advice and assist you in making informed decisions based on your needs and style.</p>
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