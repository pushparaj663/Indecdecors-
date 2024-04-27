import { React, useEffect } from 'react';
import Header from '../Header';
import Footer from '../Footer';
import '../Products/MosquitoNetWindows.css'
import AOS from 'aos';
import "../../node_modules/aos/dist/aos.css"
import mn_main_door1 from '../../src/image/p-alm-plt-window.jpg'

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
                            <div className="col-lg-4 mb-5 mb-lg-0">
                                <ul className="nav nav-tabs flex-column" role="tablist">
                                    <li className="nav-item" role="presentation">
                                        <a className="nav-link show active" data-bs-toggle="tab" data-bs-target="#tab-1" aria-selected="true" role="tab">
                                            <h4>Aluminium Mosquito Net Doors</h4>
                                            {/* <p>Quis excepturi porro totam sint earum quo nulla perspiciatis eius.</p> */}
                                        </a>
                                    </li>
                                    <li className="nav-item mt-2" role="presentation">
                                        <a className="nav-link" data-bs-toggle="tab" data-bs-target="#tab-2" aria-selected="false" role="tab" tabindex="-1">
                                            <h4>Aluminium Pleated Mosquito Net Doors</h4>
                                            {/* <p>Voluptas vel esse repudiandae quo excepturi.</p> */}
                                        </a>
                                    </li>
                                </ul>
                            </div>
                            <div className="col-lg-8">
                                <div className="tab-content">
                                    <div className="tab-pane active show" id="tab-1" role="tabpanel">
                                        <h3>Aluminium Mosquito Net Doors</h3>
                                        {/* <p className="fst-italic">Qui laudantium consequatur laborum sit qui ad sapiente dila parde sonata raqer a videna mareta paulona marka</p> */}
                                        <img src={mn_main_door1} alt="" className="img-fluid" data-aos="zoom-in" data-aos-duration="2000" />
                                        <p data-aos="zoom-in" data-aos-duration="2000"><ul>
                                            <li><i className="bi bi-check-circle-fill"></i>Our pleated aluminum doors are designed with sleek profiles, offering a modern aesthetic that seamlessly integrates with contemporary architectural styles.</li>
                                            <li><i className="bi bi-check-circle-fill"></i>Crafted from high-quality aluminum, our doors are built to last.</li>
                                            <li><i className="bi bi-check-circle-fill"></i>The sturdy construction ensures durability, resistance to corrosion, and long-term performance.</li>
                                        </ul></p>
                                    </div>
                                    <div className="tab-pane" id="tab-2" role="tabpanel">
                                        <h3>Aluminium Pleated Mosquito Net Doors</h3>
                                        {/* <p className="fst-italic">Qui laudantium consequatur laborum sit qui ad sapiente dila parde sonata raqer a videna mareta paulona marka</p> */}
                                        <img src={mn_main_door1} alt="" className="img-fluid" data-aos="zoom-in" data-aos-duration="3000" />
                                        <p data-aos="zoom-in" data-aos-duration="3000"><ul>
                                            <li><i className="bi bi-check-circle-fill"></i>Our doors boast a pleated design that not only adds a contemporary flair to your space but also allows for flexible usage.</li>
                                            <li><i className="bi bi-check-circle-fill"></i>Enjoy the convenience of easy operation and adaptable openings.</li>
                                            <li><i className="bi bi-check-circle-fill"></i>Bid farewell to buzzing mosquitoes with the built-in, fine-mesh mosquito netting.</li>
                                            <li><i className="bi bi-check-circle-fill"></i>Extend your living spaces outdoors with pleated doors that seamlessly connect indoor and outdoor living while keeping insects at bay.</li>
                                        </ul></p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <section id="Products" className="Products">
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