import React from 'react';
import '../About.css'
import aboutimg from '../../src/image/about-img.jpg'
import Footer from '../Footer';
import Header from '../Header';
import '../Products.css'

function MosquitoNetDoors(props) {
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
                                <h2>Mosquito Net Doors</h2>
                                <p>Create a safer and more comfortable living space with our innovative mosquito net doors.
                                    We bring you a range of high-quality and stylish solutions to keep pesky insects
                                    at bay while enhancing the beauty of your home.</p>
                            </div>
                        </div>

                        <div className="row">
                            <div className="col-lg-6 about-img">
                                <img src={aboutimg} alt="" />
                            </div>

                            <div className="col-lg-6 content">
                                <h4>Aluminium Mosquito Net Doors</h4>
                                <ul>
                                    <li><i className="bi bi-check-circle"></i>Our pleated aluminum doors are designed with sleek profiles,
                                        offering a modern aesthetic that seamlessly integrates with contemporary architectural styles.</li>
                                    <li><i className="bi bi-check-circle"></i>Crafted from high-quality aluminum, our doors are built to last.</li>
                                    <li><i className="bi bi-check-circle"></i>The sturdy construction ensures durability, resistance to corrosion, and long-term performance.</li>
                                </ul>

                            </div>
                        </div>


                        <div className="row">

                            <div className="col-lg-6 content">
                                <h4>Aluminium Pleated Mosquito Net Doors</h4>
                                <ul>
                                    <li><i className="bi bi-check-circle"></i>Our doors boast a pleated design that not only adds a contemporary flair to your space but also allows for flexible usage.</li>
                                    <li><i className="bi bi-check-circle"></i>Enjoy the convenience of easy operation and adaptable openings.</li>
                                    <li><i className="bi bi-check-circle"></i>Bid farewell to buzzing mosquitoes with the built-in, fine-mesh mosquito netting</li>
                                    <li><i className="bi bi-check-circle"></i>Extend your living spaces outdoors with pleated doors that seamlessly connect indoor and outdoor living while keeping insects at bay.</li>
                                </ul>

                            </div>

                            <div className="col-lg-6 about-img">
                                <img src={aboutimg} alt="" />
                            </div>
                        </div>

                        <section id="Products" className="Products">
                            <div className="row gy-4">
                                <div className="col-lg-6 aos-init aos-animate" data-aos="fade-up" data-aos-delay="100">
                                    <div className="box">
                                        <h4 className="title">Premium Quality</h4>
                                        <p className="description">
                                            Our mosquito net doors are crafted with precision using premium materials that ensure durability and longevity. We prioritize quality to provide you with a reliable solution for insect protection.
                                            .</p>
                                    </div>
                                </div>

                                <div className="col-lg-6 aos-init aos-animate" data-aos="fade-up" data-aos-delay="200">
                                    <div className="box">
                                        <h4 className="title">Variety Of Styles</h4>
                                        <p className="description">Discover a variety of styles that seamlessly blend with your home's architecture and decor. From sleek modern designs to classic and rustic options, we offer mosquito net doors that cater to diverse aesthetic preferences.</p>
                                    </div>
                                </div>

                                <div className="col-lg-6 aos-init aos-animate" data-aos="fade-up" data-aos-delay="300">
                                    <div className="box">
                                        <h4 className="title">Effective Insect Protection</h4>
                                        <p className="description">Our mosquito net doors are designed not only for their visual appeal but also for their effectiveness in keeping mosquitoes and other insects out. Enjoy fresh air without compromising on safety and comfort.</p>
                                    </div>
                                </div>

                                <div className="col-lg-6 aos-init aos-animate" data-aos="fade-up" data-aos-delay="400">
                                    <div className="box">
                                        <h4 className="title">Customization Options</h4>
                                        <p className="description">
                                            Tailor your mosquito net doors to match your unique requirements. Choose from a range of colors, sizes, and mesh options to create a solution that perfectly fits your space.
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