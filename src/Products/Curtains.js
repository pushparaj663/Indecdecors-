import { React, useEffect } from 'react';
import curtainsdrape from '../../src/image/curtains-drapes.jpg'
import curtainssheer from '../../src/image/curtains-sheer.jpg'
import curtainsblockout from '../../src/image/curtains-blockout.jpg'
import Footer from '../Footer';
import Header from '../Header';
import AOS from 'aos';
import "../../node_modules/aos/dist/aos.css"
import CurtainRod from './CurtainRod';

function Curtains(props) {
    useEffect(() => {
        AOS.init();
    }, [])

    return (
        <>
            <div className='container-fluid p-0'>
                <div className='sticky-top'>
                    <Header />
                </div>
                <section id="curtains" className="product-items">
                    <div className="container" data-aos="fade-up" data-aos-delay="200">
                        <div className="section-title">
                            <h2>Curtains</h2>
                            <p>Curtains are more than just window coverings; they are a statement of style, adding warmth, texture, and personality to any room. Explore our curated selection to find the perfect curtains for your home or office.
                                Discover curtains that strike the perfect balance between style and practicality.
                                Whether you prefer sheer elegance, bold prints, or classic solids, our curtains are crafted to elevate the ambiance of your space.</p>
                        </div>

                        <ul className="nav nav-tabs row d-flex" role="tablist">
                            <li className="nav-item col" role="presentation">
                                <a className="nav-link show active" data-bs-toggle="tab" href="#tab-1" aria-selected="true" role="tab">
                                    <i className="bi bi-house d-none d-lg-block"></i>
                                    <h4>Luxurious Drape</h4>
                                </a>
                            </li>
                            <li className="nav-item col" role="presentation">
                                <a className="nav-link" data-bs-toggle="tab" href="#tab-2" aria-selected="false" role="tab" tabindex="-1">
                                    <i className="bi bi-house d-none d-lg-block"></i>
                                    <h4>Versatile Sheers</h4>
                                </a>
                            </li>
                            <li className="nav-item col" role="presentation">
                                <a className="nav-link" data-bs-toggle="tab" href="#tab-3" aria-selected="false" role="tab" tabindex="-1">
                                    <i className="bi bi-house d-none d-lg-block"></i>
                                    <h4>Blackout Curtains</h4>
                                </a>
                            </li>
                        </ul>

                        <div className="tab-content">
                            <div className="tab-pane active show" id="tab-1" role="tabpanel">
                                <div className='row'>
                                    <div className='col-lg'>
                                        <p style={{ height: 'auto', marginBottom: '14px' }}>
                                            Our luxurious drape curtains are designed to add a touch of elegance and sophistication to any room. Made from the finest materials, these curtains offer rich textures and vibrant colors that enhance the aesthetic appeal of your interiors. Whether you’re looking to create a classic, modern, or eclectic look, our collection has something to suit every taste.
                                        </p>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-lg-6 order-2 order-lg-1 mt-3 mt-lg-0">
                                        <ul>
                                            <li><i className="bi bi-check-circle-fill"></i><span>Living Rooms: </span>Create a focal point with rich, opulent drapes that complement your furniture and decor.</li>
                                            <li><i className="bi bi-check-circle-fill"></i><span>Bedrooms: </span>Add a touch of romance and luxury, ensuring a restful and serene environment.</li>
                                            <li><i className="bi bi-check-circle-fill"></i><span>Dining Rooms: </span>Impress your guests with elegant drapes that set the tone for formal dinners and gatherings.</li>
                                        </ul>
                                    </div>
                                    <div className="col-lg-6 order-1 order-lg-2 text-center">
                                        <img src={curtainsdrape} alt="Luxurious Drape" className="img-fluid" />
                                    </div>
                                </div>
                            </div>
                            <div className="tab-pane" id="tab-2" role="tabpanel">
                                <div className='row'>
                                    <div className='col-lg'>
                                        <p style={{ height: 'auto', marginBottom: '14px' }}>
                                            Our versatile sheer curtains are perfect for creating a light and airy ambiance in any space. These curtains allow natural light to filter through while maintaining privacy, making them ideal for layering with other types of window treatments. The soft, flowing fabrics add a touch of grace and elegance to your windows.
                                        </p>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-lg-6 order-2 order-lg-1 mt-3 mt-lg-0">

                                        <ul>
                                            <li><i className="bi bi-check-circle-fill"></i><span>Living Rooms: </span>Soften the natural light entering the room, creating a warm and inviting atmosphere.</li>
                                            <li><i className="bi bi-check-circle-fill"></i><span>Bedrooms: </span>Maintain privacy while allowing morning light to gently wake you up.</li>
                                            <li><i className="bi bi-check-circle-fill"></i><span>Kitchens: </span>Enhance the brightness of your kitchen while ensuring privacy from the outside.</li>
                                        </ul>
                                    </div>
                                    <div className="col-lg-6 order-1 order-lg-2 text-center">
                                        <img src={curtainssheer} alt="Versatile Sheers" className="img-fluid" />
                                    </div>
                                </div>
                            </div>
                            <div className="tab-pane" id="tab-3" role="tabpanel">
                                <div className='row'>
                                    <div className='col-lg'>
                                        <p style={{ height: 'auto', marginBottom: '14px' }}>
                                            Our blockout curtains are the ultimate solution for those who require complete privacy and control over the amount of light entering a room. These curtains are perfect for creating a dark, peaceful environment, ideal for bedrooms, home theaters, and any space where light control is crucial.
                                        </p>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-lg-6 order-2 order-lg-1 mt-3 mt-lg-0">
                                        <ul>
                                            <li><i className="bi bi-check-circle-fill"></i><span>Bedrooms: </span>Ensure a good night's sleep by blocking out all external light sources.</li>
                                            <li><i className="bi bi-check-circle-fill"></i><span>Home Theaters: </span>Create the perfect movie-watching environment with complete darkness.</li>
                                            <li><i className="bi bi-check-circle-fill"></i><span>Home Offices: </span>Reduce glare on screens and create a distraction-free workspace.</li>
                                        </ul>
                                    </div>
                                    <div className="col-lg-6 order-1 order-lg-2 text-center">
                                        <img src={curtainsblockout} alt="Blackout Curtains" className="img-fluid" />
                                    </div>
                                </div>
                            </div>
                        </div>

                        <section id="Products" className="Products" style={{ paddingTop: "40px" }}>
                            <div className="row gy-4">
                                <div className="col-lg-6">
                                    <div className="box" data-aos="zoom-in" data-aos-easing="ease-out-cubic" data-aos-duration="5000">
                                        <h4 className="title">Privacy</h4>
                                        <p className="description">
                                            Curtains offer a sense of privacy by concealing the interiors of a room from outside view. They're essential for bedrooms, bathrooms, and any area where you want to limit visibility.</p>
                                    </div>
                                </div>

                                <div className="col-lg-6">
                                    <div className="box" data-aos="zoom-in" data-aos-duration="5000">
                                        <h4 className="title">Light Control</h4>
                                        <p className="description">Depending on the fabric and opacity, curtains can filter or block out sunlight, allowing you to control the amount of natural light entering a room. This is especially useful for rooms with TV screens or where glare can be a nuisance.</p>
                                    </div>
                                </div>

                                <div className="col-lg-6">
                                    <div className="box" data-aos="zoom-in" data-aos-duration="3000">
                                        <h4 className="title">Decoration</h4>
                                        <p className="description">Curtains are a versatile decorative element that can add color, texture, and pattern to any space. They can tie together the design scheme of a room or serve as a focal point.</p>
                                    </div>
                                </div>

                                <div className="col-lg-6">
                                    <div className="box" data-aos="zoom-in" data-aos-duration="3000">
                                        <h4 className="title">Sound Absorption</h4>
                                        <p className="description">Thick, heavy curtains can help reduce noise levels by absorbing sound waves, making them ideal for homes located in busy urban areas or near noisy streets.</p>
                                    </div>
                                </div>

                            </div>

                        </section>

                        <div className="Curtain">
                            <CurtainRod />
                        </div>

                    </div >
                </section >
                <Footer />
            </div >
        </>
    );
}

export default Curtains;