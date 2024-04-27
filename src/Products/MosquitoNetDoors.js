import { React, useEffect } from 'react';
import Header from '../Header';
import Footer from '../Footer';
import AOS from 'aos';
import "../../node_modules/aos/dist/aos.css"
import mn_main_door from '../../src/image/IMG_0831.jpg'
import mn_main_door_pleated from '../../src/image/IMG_0831.jpg'

function MosquitoNetDoors(props) {
    useEffect(() => {
        AOS.init();
    }, [])

    return (
        <>
            <div className='container-fluid p-0'>
                <div className='sticky-top'>
                    <Header />
                </div>
                <section id="mosquitoNetDoors" className="product-items section-bg">
                    <div className="container">
                        <div className="section-title" data-aos="fade-up" data-aos-delay="200">
                            <h2>Mosquito Net Doors</h2>
                            <p>Create a safer and more comfortable living space with our innovative mosquito net doors.
                                We bring you a range of high-quality and stylish solutions to keep pesky insects at bay while enhancing the beauty of your home.
                            </p>
                        </div>

                        <div className="row">
                            <ul class="nav nav-tabs row d-flex" role="tablist">
                                <li class="nav-item col" role="presentation">
                                    <a class="nav-link show active" data-bs-toggle="tab" href="#tab-1" aria-selected="true" role="tab">
                                        <i class="bi bi-house"></i>
                                        <h4 class="d-none d-lg-block">Aluminium Pleated Mosquito Net Doors</h4>
                                    </a>
                                </li>
                                <li class="nav-item col" role="presentation">
                                    <a class="nav-link" data-bs-toggle="tab" href="#tab-2" aria-selected="false" role="tab" tabindex="-1">
                                        <i class="bi bi-house"></i>
                                        <h4 class="d-none d-lg-block">Aluminium Mosquito Net Doors</h4>
                                    </a>
                                </li>
                            </ul>

                            <div class="tab-content">
                                <div class="tab-pane active show" id="tab-1" role="tabpanel">
                                    <div class="row">
                                        <div class="col-lg-6 order-2 order-lg-1 mt-3 mt-lg-0">
                                            <ul>
                                                <li><i className="bi bi-check-circle-fill"></i>Our pleated aluminum doors are designed with sleek profiles, offering a modern aesthetic that seamlessly integrates with contemporary architectural styles.</li>
                                                <li><i className="bi bi-check-circle-fill"></i>Crafted from high-quality aluminum, our doors are built to last.</li>
                                                <li><i className="bi bi-check-circle-fill"></i>The sturdy construction ensures durability, resistance to corrosion, and long-term performance.</li>
                                            </ul>
                                        </div>
                                        <div class="col-lg-6 order-1 order-lg-2 text-center">
                                            <img src={mn_main_door} alt="" class="img-fluid" />
                                        </div>
                                    </div>
                                </div>
                                <div class="tab-pane" id="tab-2" role="tabpanel">
                                    <div class="row">
                                        <div class="col-lg-6 order-2 order-lg-1 mt-3 mt-lg-0">
                                            <ul>
                                                <li><i className="bi bi-check-circle-fill"></i>Our doors boast a pleated design that not only adds a contemporary flair to your space but also allows for flexible usage.</li>
                                                <li><i className="bi bi-check-circle-fill"></i>Enjoy the convenience of easy operation and adaptable openings.</li>
                                                <li><i className="bi bi-check-circle-fill"></i>Bid farewell to buzzing mosquitoes with the built-in, fine-mesh mosquito netting.</li>
                                                <li><i className="bi bi-check-circle-fill"></i>Extend your living spaces outdoors with pleated doors that seamlessly connect indoor and outdoor living while keeping insects at bay.</li>
                                            </ul>
                                        </div>
                                        <div class="col-lg-6 order-1 order-lg-2 text-center">
                                            <img src={mn_main_door_pleated} alt="" class="img-fluid" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <section id="Products" className="Products" style={{ paddingTop: '40px' }}>
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
            </div>
        </>
    );
}

export default MosquitoNetDoors;