import React from 'react';
import mn_velcro_window from '../../src/image/mn-velcro-window.jpg'
import aboutimg from '../../src/image/mn-velcro-window.jpg'
import Header from '../Header';
import Footer from '../Footer';
import '../Products/MosquitoNetWindows.css'

function MosquitoNetWindows(props) {
    return (
        <>
            <div className='container-fluid p-0'>
                <div className='sticky-top'>
                    <Header />
                </div>
                <section id="mosquitoNetWindows">
                    <div className="container aos-init aos-animate" data-aos="fade-up">
                        <div className='row'>
                            <div className="col">
                                <h2>Mosquito Net Windows</h2>
                                <p>Mosquito nets are essential for keeping insects like mosquitoes,
                                    flies, and other pests out of your living spaces while allowing fresh air and natural light to flow in.
                                    Create a bug-free haven in your home with our range of high-quality mosquito net windows.
                                    At indec, we understand the importance of a comfortable and insect-free living space,
                                    and our mosquito net windows are designed to offer just that.</p>
                            </div>
                        </div>

                        <div className="row">
                            <div className="col-lg-6 mosquitoNetWindows-img">
                                <img src={mn_velcro_window} alt="" style={{ height: '70%', width: '80%' }} />
                            </div>

                            <div className="col-lg-6 content">
                                <h4>Velcro Mosquito Net</h4>
                                <ul>
                                    <li><i className="bi bi-check-circle"></i>Our Velcro Mosquito Net comes with an easy-to-apply Velcro strip, making installation a breeze.
                                    </li>
                                    <li><i className="bi bi-check-circle"></i>No tools, no fuss – just a simple and secure attachment to your window frame.</li>
                                    <li><i className="bi bi-check-circle"></i>The fine mesh construction of our net allows for optimal airflow, letting you enjoy the refreshing breeze while keeping mosquitoes and insects at bay.</li>
                                    <li><i className="bi bi-check-circle"></i>The net is simple to clean, and the Velcro attachment allows for easy removal whenever needed. </li>
                                </ul>

                            </div>
                        </div>

                        <div className="row">

                            <div className="col-lg-6 content">
                                <h4>Aluminium Mosquito Net Windows</h4>
                                <ul>
                                    <li><i className="bi bi-check-circle"></i>Our mosquito net windows are crafted from premium-grade aluminum, ensuring durability and resistance to corrosion.</li>
                                    <li><i className="bi bi-check-circle"></i>Experience the ease of operation with our thoughtfully designed windows.</li>
                                    <li><i className="bi bi-check-circle"></i>Our aluminum mosquito net windows are designed for minimal maintenance.</li>
                                    <li><i className="bi bi-check-circle"></i>The high-quality materials are resistant to wear and tear, making them an ideal, hassle-free solution for insect protection</li>
                                </ul>
                            </div>

                            <div className="col-lg-6 mosquitoNetWindows-img">
                                <img src={aboutimg} alt="" style={{ height: '70%', width: '80%' }} />
                            </div>
                        </div>

                        <div className="row">
                            <div className="col-lg-6 mosquitoNetWindows-img">
                                <img src={aboutimg} alt="" style={{ height: '70%', width: '80%' }} />
                            </div>

                            <div className="col-lg-6 content">
                                <h4>Aluminium Pleated Mosquito Net Windows</h4>
                                <ul>
                                    <li><i className="bi bi-check-circle"></i>The smooth sliding or hinge mechanisms ensure effortless opening and closing, allowing for quick and convenient access.</li>
                                    <li><i className="bi bi-check-circle"></i>Maintain a hygienic kitchen and enjoy meals in a pest-free dining space with the protection of our aluminum mosquito net windows.</li>
                                    <li><i className="bi bi-check-circle"></i>Upgrade your windows to a new level of elegance and protection with our Aluminum Mosquito Net Windows.</li>
                                </ul>

                            </div>
                        </div>

                        <section id="Products" className="Products">
                            <div className="row gy-4">
                                <div className="col-lg-6 aos-init aos-animate" data-aos="fade-up" data-aos-delay="100">
                                    <div className="box">
                                        <h4 className="title">Premium Quality</h4>
                                        <p className="description">
                                            Our mosquito net windows provide an effective barrier against mosquitoes and other insects, allowing you to enjoy fresh air without the nuisance of bites. Crafted from premium materials, our windows offer reliable protection for your home.
                                            .</p>
                                    </div>
                                </div>

                                <div className="col-lg-6 aos-init aos-animate" data-aos="fade-up" data-aos-delay="200">
                                    <div className="box">
                                        <h4 className="title">Customized Solutions</h4>
                                        <p className="description">We believe in providing solutions that cater to your unique needs. Choose from a variety of window sizes, mesh options, and frame colors to customize your mosquito net windows and seamlessly integrate them into your home's design.</p>
                                    </div>
                                </div>

                                <div className="col-lg-6 aos-init aos-animate" data-aos="fade-up" data-aos-delay="300">
                                    <div className="box">
                                        <h4 className="title">Enhanced Ventilation</h4>
                                        <p className="description">Experience improved airflow and ventilation with our mosquito net windows. Say goodbye to stuffy rooms while keeping unwanted insects outside. Our windows are designed to enhance the comfort of your living spaces.</p>
                                    </div>
                                </div>

                                <div className="col-lg-6 aos-init aos-animate" data-aos="fade-up" data-aos-delay="400">
                                    <div className="box">
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

export default MosquitoNetWindows;