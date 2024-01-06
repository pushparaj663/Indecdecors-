import React from 'react';
import '../Products/FlooringMats.css'
import Footer from '../Footer';
import Header from '../Header';
import '../Home.css'

function FlooringMats(props) {

    return (
        <>
            <div className='container-fluid p-0'>
                <div className='sticky-top'>
                    <Header />
                </div>

                <section id="flooringmats" className="flooringmats sections-bg">

                    <div id="carouselExampleDark" className="carousel carousel-fade slide carouselExampleDark-div" data-bs-ride="carousel">
                        <div className="carousel-inner">
                            <div className="carousel-item active" >
                                <img src={require('../image/fm-off-1.jpg')} className="d-block w-100" alt='' />
                            </div>
                            <div className="carousel-item" >
                                <img src={require('../image/fm-off-2.jpg')} alt='' className="d-block w-100" />
                            </div>
                            <div className="carousel-item" >
                                <img src={require('../image/fm-home-1.jpg')} alt='' className="d-block w-100" />
                            </div>
                            <div className="carousel-item" >
                                <img src={require('../image/fm-home-2.jpg')} alt='' className="d-block w-100" />
                            </div>
                        </div>
                        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="prev">
                            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                            <span className="visually-hidden">Previous</span>
                        </button>
                        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="next">
                            <span className="carousel-control-next-icon" aria-hidden="true"></span>
                            <span className="visually-hidden">Next</span>
                        </button>
                    </div>

                    <div className="container aos-init aos-animate" data-aos="fade-up">

                        <div className="section-header">
                            <h2>Flooring Mats</h2>
                            <p>
                                <h4>Flooring Mat for Office</h4>
                                Make your workspace more inviting and ergonomic with our office flooring mats. Reduce fatigue, enhance concentration, and add a touch of professionalism to your office environment with our thoughtfully designed mats.
                            </p>

                            <p>
                                <h4>Flooring Mat for Home</h4>
                                Transform your living spaces into cozy retreats with our home flooring mats. Whether placed in the bedroom, living room, or dining area, our mats add an extra layer of comfort while elevating the overall aesthetic.</p>
                        </div>

                        <section id="Products" className="Products">
                            <div className="row gy-4">
                                <div className="col-lg-6 aos-init aos-animate" data-aos="fade-up" data-aos-delay="100">
                                    <div className="box">
                                        <h4 className="title">Premium Materials</h4>
                                        <p className="description">
                                            Our flooring mats are crafted from high-quality, resilient materials that provide both comfort and durability. Experience the luxurious feel underfoot, creating a welcoming atmosphere in any room.
                                        </p>
                                    </div>
                                </div>

                                <div className="col-lg-6 aos-init aos-animate" data-aos="fade-up" data-aos-delay="200">
                                    <div className="box">
                                        <h4 className="title">Anti-Fatigue Technology</h4>
                                        <p className="description">Ideal for office settings, our mats incorporate anti-fatigue technology to provide ergonomic support during long hours of work.
                                            Say goodbye to discomfort and hello to a more energized and productive environment.</p>
                                    </div>
                                </div>

                                <div className="col-lg-6 aos-init aos-animate" data-aos="fade-up" data-aos-delay="300">
                                    <div className="box">
                                        <h4 className="title">Easy Maintenance</h4>
                                        <p className="description">Designed for convenience, our flooring mats are easy to clean and maintain.</p>
                                    </div>
                                </div>

                                <div className="col-lg-6 aos-init aos-animate" data-aos="fade-up" data-aos-delay="400">
                                    <div className="box">
                                        <h4 className="title">Customization Options</h4>
                                        <p className="description">
                                            We Personalize your space with our customization options. Choose the size, shape, and design that best suits your preferences, ensuring that your flooring mat seamlessly integrates with your interior decor.
                                        </p>
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

export default FlooringMats;