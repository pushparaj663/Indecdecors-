import { React, useEffect } from 'react';
import Footer from '../Footer';
import Header from '../Header';
import AOS from 'aos';
import "../../node_modules/aos/dist/aos.css"
import '../Products/Products.css'
import '../Home.css'
import features from '../../src/image/fm-home.jpg'
import fmoff from '../../src/image/fm-off.jpg'


function WallPapers(props) {

    useEffect(() => {
        AOS.init();
    }, [])


    return (
        <>
            <div className='container-fluid p-0'>
                <div className='sticky-top'>
                    <Header />
                </div>

                <section id="wallpapers" className="product-items section-bg">
                    <div className="container aos-animate" data-aos="fade-up" data-aos-delay="100">
                        <div className="section-title">
                            <h2>Wall Papers for Walls</h2>
                            <p>Elevate the ambiance of your home or office with our exquisite selection of wallpaper decorations.
                                From captivating patterns to sophisticated textures, our wallpapers are designed to add a touch of elegance and personality to any room.
                            </p>
                        </div>

                        <div className="row">
                            <ul className="nav nav-tabs row d-flex" role="tablist">
                                <li className="nav-item col" role="presentation">
                                    <a className="nav-link show active" data-bs-toggle="tab" href="#tab-1" aria-selected="true" role="tab">
                                        <i className="bi bi-house"></i>
                                        <h4 className="d-none d-lg-block">Home</h4>
                                    </a>
                                </li>
                                <li className="nav-item col" role="presentation">
                                    <a className="nav-link" data-bs-toggle="tab" href="#tab-2" aria-selected="false" role="tab" tabindex="-1">
                                        <i className="bi bi-house"></i>
                                        <h4 className="d-none d-lg-block">Office</h4>
                                    </a>
                                </li>
                            </ul>

                            <div className="tab-content">
                                <div className="tab-pane active show" id="tab-1" role="tabpanel">
                                    <div className="row">
                                        <div className="col-lg-6 order-2 order-lg-1 mt-3 mt-lg-0 aos-animate" data-aos="fade-up" data-aos-delay="100">
                                            <p className="fst-italic">
                                                Create a haven of comfort and style with our home wallpaper decorations.
                                                Whether you're looking to add a pop of color to your living room or create a serene retreat in your bedroom, our wallpapers offer endless possibilities for transforming your space.
                                            </p>
                                            <ul>
                                                <li><i className="bi bi-check-circle-fill"></i><span>Living Room:</span> Make a bold statement with vibrant patterns or opt for subtle textures to create a cozy atmosphere.</li>
                                                <li><i className="bi bi-check-circle-fill"></i><span>Bedroom:</span> Set a tranquil mood with calming hues and delicate designs that promote relaxation and restful sleep.</li>
                                                <li><i className="bi bi-check-circle-fill"></i><span>Dining Area:</span> Add an element of sophistication to your dining space with elegant wallpapers that enhance the dining experience.</li>
                                            </ul>
                                        </div>
                                        <div className="col-lg-6 order-1 order-lg-2 text-center aos-animate" data-aos="fade-up" data-aos-delay="200">
                                            <img src={features} alt="" className="img-fluid" />
                                        </div>
                                    </div>
                                </div>
                                <div className="tab-pane" id="tab-2" role="tabpanel">
                                    <div className="row">
                                        <div className="col-lg-6 order-2 order-lg-1 mt-3 mt-lg-0">
                                            <p className="fst-italic">
                                                Inspire creativity and productivity in your workspace with our office wallpaper decorations.
                                                From sleek and modern designs to timeless classics, our wallpapers can help set the tone for a
                                                professional and inviting environment.
                                            </p>
                                            <ul>
                                                <li><i className="bi bi-check-circle-fill"></i><span>Executive Offices:</span> Impress clients and colleagues alike with luxurious wallpapers that exude sophistication and refinement.</li>
                                                <li><i className="bi bi-check-circle-fill"></i><span>Meeting Rooms:</span> Foster collaboration and innovation with dynamic patterns and bold colors that stimulate creativity and engagement.</li>
                                                <li><i className="bi bi-check-circle-fill"></i><span>Reception Areas:</span> Create a welcoming first impression with stylish wallpapers that reflect your company's brand and values.</li>
                                            </ul>
                                        </div>
                                        <div className="col-lg-6 order-1 order-lg-2 text-center">
                                            <img src={fmoff} alt="" className="img-fluid" />
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
            </div >

        </>
    );
}

export default WallPapers;