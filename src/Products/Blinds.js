import { React, useEffect } from 'react';
import '../About.css'
import blindsblackout from '../../src/image/blinds-blackout.jpg'
import blindszebra from '../../src/image/blinds-zebra.jpg'
import blindsvertical from '../../src/image/blinds-vertical.jpg'
import Footer from '../Footer';
import Header from '../Header';
import AOS from 'aos';
import "../../node_modules/aos/dist/aos.css"

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
                            <p>At indec, we specialize in providing high-quality blinds that enhance
                                the beauty and functionality of your living spaces. Whether you're looking for privacy,
                                light control, or an aesthetic upgrade, our extensive collection of blinds has something
                                to suit every taste and need. We are provided different kinds of blinds with many features.
                            </p>
                            <p>
                                At indec, we understand that every home and office is unique. That’s why we offer a variety of customization options such
                                that Custom Measurements, Fabric and Color Selection and Motorization
                            </p>
                        </div>

                        <div className="row">
                            <ul className="nav nav-tabs row d-flex" role="tablist">
                                <li className="nav-item col" role="presentation">
                                    <a className="nav-link show active" data-bs-toggle="tab" href="#tab-1" aria-selected="true" role="tab">
                                        <i className="bi bi-house d-none d-lg-block"></i>
                                        <h4>Roller/Blackout Blinds</h4>
                                    </a>
                                </li>
                                <li className="nav-item col" role="presentation">
                                    <a className="nav-link" data-bs-toggle="tab" href="#tab-2" aria-selected="false" role="tab" tabindex="-1">
                                        <i className="bi bi-house d-none d-lg-block"></i>
                                        <h4>Vertical Blinds</h4>
                                    </a>
                                </li>
                                <li className="nav-item col" role="presentation">
                                    <a className="nav-link" data-bs-toggle="tab" href="#tab-3" aria-selected="false" role="tab" tabindex="-1">
                                        <i className="bi bi-house d-none d-lg-block"></i>
                                        <h4>Zebra Blinds</h4>
                                    </a>
                                </li>
                            </ul>

                            <div className="tab-content">
                                <div className="tab-pane active show" id="tab-1" role="tabpanel">
                                    <div className="row">
                                        <div className="col-lg">
                                            <p style={{ height: 'auto', marginBottom: '14px' }}>
                                                Both roller and blackout blinds offer unique benefits,
                                                making them suitable for different needs and environments. Roller blinds are perfect for spaces where adjustable light
                                                control and aesthetic variety are important. Blackout blinds are essential for rooms that require complete darkness,
                                                enhanced privacy, and additional energy efficiency. Choosing the right
                                                type depends on your specific needs and the function of the room where
                                                the blinds will be installed.
                                            </p>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-lg-6 order-2 order-lg-1 mt-3 mt-lg-0">
                                            <h5 style={{ color: "#1977cc" }}>Roller Blinds</h5>
                                            <ul>
                                                <li><i className="bi bi-check-circle-fill"></i><span>Simplicity and Elegance: </span>Roller blinds provide a sleek, minimalist look that complements any room decor.</li>
                                                <li><i className="bi bi-check-circle-fill"></i><span>Light Control: </span>Can be adjusted to allow varying amounts of light to filter through.</li>
                                                <li><i className="bi bi-check-circle-fill"></i><span>Applications: </span>Suitable for living rooms, kitchens, home offices, and other areas where adjustable light control is desired without complete darkness.</li>
                                                <li><i className="bi bi-check-circle-fill"></i><span>Durability: </span>Made from durable fabrics that resist fading and wear, ensuring long-lasting use.</li>
                                            </ul>
                                        </div>
                                        <div className="col-lg-6 order-1 order-lg-2 text-center">
                                            <img src={blindsblackout} alt="Blackout Roller Blinds" className="img-fluid" />
                                        </div>
                                    </div>

                                    <div className="row">
                                        <h5 style={{ color: "#1977cc" }}>Blackout Blinds</h5>
                                        <ul>
                                            <li><i className="bi bi-check-circle-fill"></i><span>Complete Light Blocking: </span>The blackout fabric completely blocks out light, making them perfect for sleeping and ensuring privacy.</li>
                                            <li><i className="bi bi-check-circle-fill"></i><span>Energy Efficiency: </span>Blackout blinds help to insulate windows, keeping rooms cooler in the summer and warmer in the winter, reducing energy costs.</li>
                                            <li><i className="bi bi-check-circle-fill"></i><span>Noise Reduction: </span>The thick fabric can also help to reduce outside noise, creating a quieter, more peaceful environment.</li>
                                            <li><i className="bi bi-check-circle-fill"></i><span>Complete Privacy: </span>Provides total privacy when closed, making them ideal for bathrooms and street-facing windows.</li>
                                        </ul>
                                    </div>


                                </div>
                                <div className="tab-pane" id="tab-2" role="tabpanel">
                                    <div className="row">
                                        <div className="col-lg">
                                            <p style={{ height: 'auto', marginBottom: '14px' }}>
                                                Vertical blinds are a stylish and practical window treatment option,
                                                especially suited for large windows and sliding doors.
                                                At indec, we offer a diverse range of vertical blinds designed
                                                to enhance your living spaces with both functionality and aesthetic appeal.
                                            </p>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-lg-6 order-2 order-lg-1 mt-3 mt-lg-0">
                                            <ul>
                                                <li><i className="bi bi-check-circle-fill"></i><span>Living Rooms: </span> Ideal for large picture windows, allowing you to adjust natural light and maintain privacy.</li>
                                                <li><i className="bi bi-check-circle-fill"></i><span>Sliding Doors: </span> Perfect for patio or balcony doors, providing easy access while offering excellent light control.</li>
                                                <li><i className="bi bi-check-circle-fill"></i><span>Bedrooms: </span>Ensure privacy and block out light for a restful sleep environment.</li>
                                                <li><i className="bi bi-check-circle-fill"></i><span>Offices: </span>Create a professional look while controlling glare and light for a comfortable working environment.</li>
                                                <li><i className="bi bi-check-circle-fill"></i><span>Large Windows: </span>Suitable for various window sizes and shapes, including large windows and sliding glass doors.</li>
                                            </ul>
                                        </div>
                                        <div className="col-lg-6 order-1 order-lg-2 text-center">
                                            <img src={blindsvertical} alt="Vertical Roller Blinds" className="img-fluid" />
                                        </div>
                                    </div>

                                </div>
                                <div className="tab-pane" id="tab-3" role="tabpanel">
                                    <div className="row">
                                        <div className="col-lg">
                                            <p style={{ height: 'auto', marginBottom: '14px' }}>
                                                Zebra blinds, also known as dual shades or layered shades,
                                                are a modern window treatment option that combines the
                                                functionality of traditional blinds with the softness of fabric shades.
                                                These innovative blinds feature alternating sheer and solid fabric stripes,
                                                allowing you to control light and privacy with ease.
                                            </p>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-lg-6 order-2 order-lg-1 mt-3 mt-lg-0">
                                            <ul>
                                                <li><i className="bi bi-check-circle-fill"></i><span>Stylish Ambiance: </span>Enhance your living room with elegant zebra blinds that allow you to adjust the light for a cozy and inviting atmosphere.</li>
                                                <li><i className="bi bi-check-circle-fill"></i><span>Privacy and Comfort: </span>Ensure a good night’s sleep with the ability to block out light completely, while still enjoying natural light during the day.</li>
                                                <li><i className="bi bi-check-circle-fill"></i><span>Productivity and Focus: </span>Control glare on your computer screen and create a comfortable working environment with adjustable light filtering.</li>
                                                <li><i className="bi bi-check-circle-fill"></i><span>Modern Design: </span>Zebra blinds offer a sleek and contemporary look that complements any decor style, from modern to traditional.</li>
                                                <li><i className="bi bi-check-circle-fill"></i><span>Simple Operation: </span>Operate easily with a continuous cord loop, chain, or motorized options for added convenience.</li>
                                            </ul>
                                        </div>
                                        <div className="col-lg-6 order-1 order-lg-2 text-center">
                                            <img src={blindszebra} alt="Zebra Blinds" className="img-fluid" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <section id="Products" className="Products" style={{ paddingTop: '40px' }}>
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