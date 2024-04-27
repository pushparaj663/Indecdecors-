import { React, useEffect } from 'react';
import Header from '../Header';
import Footer from '../Footer';
import AOS from 'aos';
import "../../node_modules/aos/dist/aos.css"
import pvelcro from '../../src/image/mn-velcro-window.jpg'
import palmwindow from '../../src/image/mn-alm-window.jpg'
import palmwindow1 from '../../src/image/mn-alm-window.jpg'

function MosquitoNetWindows(props) {
    useEffect(() => {
        AOS.init();
    }, [])

    return (
        <>
            <div className='container-fluid p-0'>
                <div className='sticky-top'>
                    <Header />
                </div>

                <section id="mosquitonet" className="product-items section-bg">
                    <div className="container">
                        <div className="section-title" data-aos="fade-up" data-aos-delay="200">
                            <h2>Mosquito Net Windows</h2>
                            <p>Mosquito nets are essential for keeping insects like mosquitoes, flies, and other pests out of your living spaces while allowing fresh air and natural light to flow in.
                                Create a bug-free haven in your home with our range of high-quality mosquito net windows.
                            </p>
                            <p>
                                At indec, we understand the importance of a comfortable and insect-free living space,
                                and our mosquito net windows are designed to offer just that.
                            </p>
                        </div>

                        <div className="row">

                            <ul class="nav nav-tabs row d-flex" role="tablist">
                                <li class="nav-item col" role="presentation">
                                    <a class="nav-link show active" data-bs-toggle="tab" href="#tab-1" aria-selected="true" role="tab">
                                        <i class="bi bi-house"></i>
                                        <h4 class="d-none d-lg-block">Velcro Mosquito Net</h4>
                                    </a>
                                </li>
                                <li class="nav-item col" role="presentation">
                                    <a class="nav-link" data-bs-toggle="tab" href="#tab-2" aria-selected="false" role="tab" tabindex="-1">
                                        <i class="bi bi-house"></i>
                                        <h4 class="d-none d-lg-block">Aluminium Mosquito Net Windows</h4>
                                    </a>
                                </li>
                                <li class="nav-item col" role="presentation">
                                    <a class="nav-link" data-bs-toggle="tab" href="#tab-3" aria-selected="false" role="tab" tabindex="-1">
                                        <i class="bi bi-house"></i>
                                        <h4 class="d-none d-lg-block">Aluminium Pleated Mosquito Net Windows</h4>
                                    </a>
                                </li>
                            </ul>

                            <div class="tab-content">
                                <div class="tab-pane active show" id="tab-1" role="tabpanel">
                                    <div class="row">
                                        <div class="col-lg-6 order-2 order-lg-1 mt-3 mt-lg-0">
                                            <ul>
                                                <li><i className="bi bi-check-circle-fill"></i>Our Velcro Mosquito Net comes with an easy-to-apply Velcro strip, making installation a breeze.
                                                </li>
                                                <li><i className="bi bi-check-circle-fill"></i>No tools, no fuss – just a simple and secure attachment to your window frame.</li>
                                                <li><i className="bi bi-check-circle-fill"></i>The fine mesh construction of our net allows for optimal airflow, letting you enjoy the refreshing breeze while keeping mosquitoes and insects at bay.</li>
                                                <li><i className="bi bi-check-circle-fill"></i>The net is simple to clean, and the Velcro attachment allows for easy removal whenever needed. </li>
                                            </ul>
                                        </div>
                                        <div class="col-lg-6 order-1 order-lg-2 text-center">
                                            <img src={pvelcro} alt="Velcro Mosquito Net" class="img-fluid" />
                                        </div>
                                    </div>
                                </div>
                                <div class="tab-pane" id="tab-2" role="tabpanel">
                                    <div class="row">
                                        <div class="col-lg-6 order-2 order-lg-1 mt-3 mt-lg-0">
                                            <ul>
                                                <li><i className="bi bi-check-circle-fill"></i>Our mosquito net windows are crafted from premium-grade aluminum, ensuring durability and resistance to corrosion.</li>
                                                <li><i className="bi bi-check-circle-fill"></i>Experience the ease of operation with our thoughtfully designed windows.</li>
                                                <li><i className="bi bi-check-circle-fill"></i>Our aluminum mosquito net windows are designed for minimal maintenance.</li>
                                                <li><i className="bi bi-check-circle-fill"></i>The high-quality materials are resistant to wear and tear, making them an ideal, hassle-free solution for insect protection</li>
                                            </ul>
                                        </div>
                                        <div class="col-lg-6 order-1 order-lg-2 text-center">
                                            <img src={palmwindow} alt="" class="img-fluid" />
                                        </div>
                                    </div>
                                </div>
                                <div class="tab-pane" id="tab-3" role="tabpanel">
                                    <div class="row">
                                        <div class="col-lg-6 order-2 order-lg-1 mt-3 mt-lg-0">
                                            <ul>
                                                <li><i className="bi bi-check-circle-fill"></i>The smooth sliding or hinge mechanisms ensure effortless opening and closing, allowing for quick and convenient access.</li>
                                                <li><i className="bi bi-check-circle-fill"></i>Maintain a hygienic kitchen and enjoy meals in a pest-free dining space with the protection of our aluminum mosquito net windows.</li>
                                                <li><i className="bi bi-check-circle-fill"></i>Upgrade your windows to a new level of elegance and protection with our Aluminum Mosquito Net Windows.</li>
                                            </ul>
                                        </div>
                                        <div class="col-lg-6 order-1 order-lg-2 text-center">
                                            <img src={palmwindow1} alt="" class="img-fluid" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <section id="Products" className="Products" style={{ paddingTop: "40px" }}>
                            <div className="row gy-4">
                                <div className="col-lg-6">
                                    <div className="box" data-aos="zoom-in" data-aos-easing="ease-out-cubic" data-aos-duration="5000">
                                        <h4 className="title">Premium Quality</h4>
                                        <p className="description">
                                            Our mosquito net windows provide an effective barrier against mosquitoes and other insects, allowing you to enjoy fresh air without the nuisance of bites. Crafted from premium materials, our windows offer reliable protection for your home.</p>
                                    </div>
                                </div>

                                <div className="col-lg-6">
                                    <div className="box" data-aos="zoom-in" data-aos-duration="5000">
                                        <h4 className="title">Customized Solutions</h4>
                                        <p className="description">We believe in providing solutions that cater to your unique needs. Choose from a variety of window sizes, mesh options, and frame colors to customize your mosquito net windows and seamlessly integrate them into your home's design.</p>
                                    </div>
                                </div>

                                <div className="col-lg-6">
                                    <div className="box" data-aos="zoom-in" data-aos-duration="3000">
                                        <h4 className="title">Enhanced Ventilation</h4>
                                        <p className="description">Experience improved airflow and ventilation with our mosquito net windows. Say goodbye to stuffy rooms while keeping unwanted insects outside. Our windows are designed to enhance the comfort of your living spaces.</p>
                                    </div>
                                </div>

                                <div className="col-lg-6">
                                    <div className="box" data-aos="zoom-in" data-aos-duration="3000">
                                        <h4 className="title">Durability and Longevity</h4>
                                        <p className="description">
                                            We prioritize durability to ensure that your mosquito net windows stand the test of time. Built with quality craftsmanship and sturdy materials, our windows provide long-lasting insect protection for your home.
                                        </p>
                                    </div>
                                </div>

                            </div>
                        </section>

                    </div>
                </section>

                <Footer />
            </div >
        </>
    );
}

export default MosquitoNetWindows;