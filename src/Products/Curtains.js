import { React, useEffect } from 'react';
import curtains_drape from '../../src/image/curtains-drapes.jpg'
import curtains_sheer from '../../src/image/curtains-sheer.jpg' //pi-sheers
import curtains_blockout from '../../src/image/curtains-blockout.jpg'
import curtains_rods from '../../src/image/curtains-rods.jpg'
import curtains_brackets from '../../src/image/curtains-brackets.jpg'
import features from '../../src/image/features-2.png'
import Footer from '../Footer';
import Header from '../Header';
import AOS from 'aos';
import "../../node_modules/aos/dist/aos.css"

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

                        <div className='row'>
                            <div className='col'>
                                <h4>Our Curtain Collections</h4>
                            </div>
                        </div>

                        <ul className="nav nav-tabs row d-flex" role="tablist">
                            <li className="nav-item col" role="presentation">
                                <a className="nav-link show active" data-bs-toggle="tab" href="#tab-1" aria-selected="true" role="tab">
                                    <i className="bi bi-house"></i>
                                    <h4 className="d-none d-lg-block">Luxurious Drape</h4>
                                </a>
                            </li>
                            <li className="nav-item col" role="presentation">
                                <a className="nav-link" data-bs-toggle="tab" href="#tab-2" aria-selected="false" role="tab" tabindex="-1">
                                    <i className="bi bi-house"></i>
                                    <h4 className="d-none d-lg-block">Versatile Sheers</h4>
                                </a>
                            </li>
                            <li className="nav-item col" role="presentation">
                                <a className="nav-link" data-bs-toggle="tab" href="#tab-3" aria-selected="false" role="tab" tabindex="-1">
                                    <i className="bi bi-house"></i>
                                    <h4 className="d-none d-lg-block">Blackout Curtains</h4>
                                </a>
                            </li>
                            <li className="nav-item col" role="presentation">
                                <a className="nav-link" data-bs-toggle="tab" href="#tab-4" aria-selected="false" role="tab" tabindex="-1">
                                    <i className="bi bi-house"></i>
                                    <h4 className="d-none d-lg-block">Curtain Rods</h4>
                                </a>
                            </li>
                            <li className="nav-item col" role="presentation">
                                <a className="nav-link" data-bs-toggle="tab" href="#tab-5" aria-selected="false" role="tab" tabindex="-1">
                                    <i className="bi bi-house"></i>
                                    <h4 className="d-none d-lg-block">Curtain Brackets</h4>
                                </a>
                            </li>
                        </ul>

                        <div className="tab-content">
                            <div className="tab-pane active show" id="tab-1" role="tabpanel">
                                <div className="row">
                                    <div className="col-lg-6 order-2 order-lg-1 mt-3 mt-lg-0">
                                        <ul>
                                            <li><i className="bi bi-check-circle-fill"></i>Immerse yourself in luxury with our opulent drape collection.</li>
                                            <li><i className="bi bi-check-circle-fill"></i>From flowing fabrics to intricate patterns, our drapes are designed to add a touch of opulence to your living spaces.</li>
                                            <li><i className="bi bi-check-circle-fill"></i>Choose from a variety of colors, patterns, and textures to create a bespoke look that complements your interior design.</li>
                                        </ul>
                                    </div>
                                    <div className="col-lg-6 order-1 order-lg-2 text-center">
                                        <img src={curtains_drape} alt="" className="img-fluid" />
                                    </div>
                                </div>
                            </div>
                            <div className="tab-pane" id="tab-2" role="tabpanel">
                                <div className="row">
                                    <div className="col-lg-6 order-2 order-lg-1 mt-3 mt-lg-0">

                                        <ul>
                                            <li><i className="bi bi-check-circle-fill"></i>Create an ethereal and light-filled ambiance with our versatile sheer curtains.</li>
                                            <li><i className="bi bi-check-circle-fill"></i>These delicate fabrics gently filter light, adding a soft, romantic ambiance to your living spaces and elegant touch to your windows.</li>
                                            <li><i className="bi bi-check-circle-fill"></i>Their lightweight and transparent nature allow them to blend seamlessly with your decor, making rooms appear larger and more inviting.</li>
                                            <li><i className="bi bi-check-circle-fill"></i>Achieve the perfect balance between privacy and natural light.</li>
                                            <li><i className="bi bi-check-circle-fill"></i>Our sheer curtains provide a level of privacy while still allowing ample sunlight to enter your space, maintaining a bright and welcoming environment.</li>
                                        </ul>
                                    </div>
                                    <div className="col-lg-6 order-1 order-lg-2 text-center">
                                        <img src={curtains_sheer} alt="" className="img-fluid" />
                                    </div>
                                </div>
                            </div>
                            <div className="tab-pane" id="tab-3" role="tabpanel">
                                <div className="row">
                                    <div className="col-lg-6 order-2 order-lg-1 mt-3 mt-lg-0">
                                        <ul>
                                            <li><i className="bi bi-check-circle-fill"></i>Experience the perfect blend of style and functionality with our blackout curtains.</li>
                                            <li><i className="bi bi-check-circle-fill"></i>These curtains not only block out unwanted light but also provide enhanced privacy and insulation for a comfortable and serene environment.</li>
                                            <li><i className="bi bi-check-circle-fill"></i>These curtains are designed to block out external light completely, providing you with a serene and darkened environment, perfect for quality sleep or home theater setups.</li>
                                            <li><i className="bi bi-check-circle-fill"></i>Whether it's in the bedroom, living room, or office, these curtains act as a reliable barrier, ensuring that your personal space remains private and shielded from prying eyes.</li>
                                            <li><i className="bi bi-check-circle-fill"></i>Enjoy a quieter and more peaceful environment with our blockout curtains.</li>
                                        </ul>
                                    </div>
                                    <div className="col-lg-6 order-1 order-lg-2 text-center">
                                        <img src={curtains_blockout} alt="" className="img-fluid" />
                                    </div>
                                </div>
                            </div>
                            <div className="tab-pane" id="tab-4" role="tabpanel">
                                <div className="row">
                                    <div className="col-lg-6 order-2 order-lg-1 mt-3 mt-lg-0">

                                        <ul>
                                            <li><i className="bi bi-check-circle-fill"></i>Our curtain rods are crafted with a meticulous
                                                attention to detail, featuring elegant designs and finishes that add a
                                                touch of sophistication to any room.</li>
                                            <li><i className="bi bi-check-circle-fill"></i>Our curtain rods come with a variety of customization options,
                                                allowing you to choose the perfect length, style, and finish for
                                                your curtains.</li>
                                            <li><i className="bi bi-check-circle-fill"></i>We prioritize quality in our materials, ensuring durability and longevity.</li>
                                            <li><i className="bi bi-check-circle-fill"></i>From sturdy metals to elegant wood finishes, our curtain rods are built to withstand the test of time.</li>
                                        </ul>
                                    </div>
                                    <div className="col-lg-6 order-1 order-lg-2 text-center">
                                        <img src={curtains_rods} alt="" className="img-fluid" />
                                    </div>
                                </div>
                            </div>

                            <div className="tab-pane" id="tab-5" role="tabpanel">
                                <div className="row">
                                    <div className="col-lg-6 order-2 order-lg-1 mt-3 mt-lg-0">

                                        <ul>
                                            <li><i className="bi bi-check-circle-fill"></i>At indec, where we redefine the art of window dressing with our exquisite collection of curtain brackets.</li>
                                            <li><i className="bi bi-check-circle-fill"></i>Beyond mere support, our brackets are designed to be a visual delight, complementing your curtains and enhancing the overall aesthetics of your living spaces.</li>
                                            <li><i className="bi bi-check-circle-fill"></i>Our curtain brackets are more than just functional hardware; they are a statement piece for your windows.</li>
                                            <li><i className="bi bi-check-circle-fill"></i>Crafted with an eye for design, each bracket adds a touch of elegance and style to your curtains.</li>
                                        </ul>
                                    </div>
                                    <div className="col-lg-6 order-1 order-lg-2 text-center">
                                        <img src={curtains_brackets} alt="" className="img-fluid" />
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </section >

                <Footer />
            </div >
        </>
    );
}

export default Curtains;