import { React, useEffect } from 'react';
import Header from '../Header';
import Footer from '../Footer';
import AOS from 'aos';
import "../../node_modules/aos/dist/aos.css"
import windowscrew from '../../src/image/window-screw.jpg'
import windowmagnetic from '../../src/image/window-screw.jpg'

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
                            <p>Mosquito net windows are essential for keeping insects like mosquitoes, flies, and other pests out of your windows while allowing fresh air and natural light to flow in.
                                Create a bug-free haven in your home with our range of high-quality aluminum mosquito net windows.
                            </p>
                            <p>
                                At indec, we understand the importance of a comfortable and insect-free living space,
                                and our aluminum mosquito net windows are designed to offer just that.
                            </p>
                        </div>

                        <div className="row">

                            <ul className="nav nav-tabs row d-flex" role="tablist">
                                <li className="nav-item col" role="presentation">
                                    <a className="nav-link show active" data-bs-toggle="tab" href="#tab-1" aria-selected="true" role="tab">
                                        <i className="bi bi-house"></i>
                                        <h4 className="d-none d-lg-block">Aluminium Mosquito Net Windows</h4>
                                    </a>
                                </li>
                                <li className="nav-item col" role="presentation">
                                    <a className="nav-link" data-bs-toggle="tab" href="#tab-2" aria-selected="false" role="tab" tabindex="-1">
                                        <i className="bi bi-house"></i>
                                        <h4 className="d-none d-lg-block">Aluminium Magnetic Mosquito Net Windows</h4>
                                    </a>
                                </li>
                            </ul>

                            <div className="tab-content">
                                <div className="tab-pane active show" id="tab-1" role="tabpanel">
                                    <div className='row'>
                                        <div className='col-lg'>
                                            <p style={{ height: '100px' }}>
                                                Screw mosquito net windows might refer to a more permanent installation method. Instead of relying on magnets, these screens are secured to the window frame using screws or other fasteners.
                                            </p>
                                        </div>
                                    </div>

                                    <div className="row">
                                        <div className="col-lg-6 order-2 order-lg-1 mt-3 mt-lg-0">
                                            <ul>
                                                <li><i className="bi bi-check-circle-fill"></i><span>Strong Aluminum Construction: </span>Our frames are crafted from high-quality aluminum, ensuring exceptional strength and resistance to corrosion. They are built to withstand the test of time, providing you with reliable insect protection for years to come.</li>
                                                <li><i className="bi bi-check-circle-fill"></i><span>Secure Screw Installation: </span>For those seeking added security and stability, our mosquito net windows feature screw installation. This method ensures a secure fit to your window frame, preventing any gaps that insects could exploit.</li>
                                                <li><i className="bi bi-check-circle-fill"></i><span>Enhanced Security: </span>Screw installation provides added security, giving you peace of mind knowing that your windows are securely protected.</li>
                                            </ul>
                                        </div>
                                        <div className="col-lg-6 order-1 order-lg-2 text-center">
                                            <img src={windowscrew} alt="Aluminium Mosquito Net Windows" className="img-fluid" />
                                        </div>
                                    </div>
                                </div>
                                <div className="tab-pane" id="tab-2" role="tabpanel">

                                    <div className='row'>
                                        <div className='col-lg'>
                                            <p style={{ height: '100px' }}>
                                                A magnetic mosquito net likely refers to a type of window screen that uses magnetic strips to seal the edges firmly against the window frame. These screens are convenient because they can easily be removed for cleaning or storage and then reattached magnetically when needed.
                                            </p>
                                        </div>
                                    </div>

                                    <div className="row">
                                        <div className="col-lg-6 order-2 order-lg-1 mt-3 mt-lg-0">
                                            <ul>
                                                <li><i className="bi bi-check-circle-fill"></i><span>Durable Aluminum Frame: </span>Our windows are crafted with high-quality aluminum frames, ensuring longevity and sturdiness. The frames are resistant to rust and corrosion, making them ideal for long-term use.</li>
                                                <li><i className="bi bi-check-circle-fill"></i><span>Magnetic Closure: </span>Say goodbye to heavy installations! Our innovative magnetic closure system allows for easy installation and removal of the mosquito net screens. Simply attach the magnetic strips to your window frame, and the screen will securely snap into place.</li>
                                                <li><i className="bi bi-check-circle-fill"></i><span>Customizable Options: </span>We understand that every window is unique. That's why we offer customizable options to ensure a perfect fit for your windows. Whether you have standard-sized windows or custom shapes, we can tailor our magnetic mosquito net screens to meet your specific requirements.</li>
                                            </ul>
                                        </div>
                                        <div className="col-lg-6 order-1 order-lg-2 text-center">
                                            <img src={windowmagnetic} alt="Aluminium Magnetic Mosquito Net Windows" className="img-fluid" />
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
                                            With robust aluminum frames and secure screw or with magnet installation, our mosquito net windows are built to last, offering reliable insect protection for years to come.
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