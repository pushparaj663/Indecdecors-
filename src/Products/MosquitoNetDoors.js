import { React, useEffect } from 'react';
import Header from '../Header';
import Footer from '../Footer';
import AOS from 'aos';
import "../../node_modules/aos/dist/aos.css"
import mn_main_door from '../../src/image/mn-main-door1.jpg'
import mn_main_door_pleated from '../../src/image/IMG_0831.jpg'
import { height } from '@fortawesome/free-regular-svg-icons/faAddressBook';

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
                            <ul className="nav nav-tabs row d-flex" role="tablist">
                                <li className="nav-item col" role="presentation">
                                    <a className="nav-link show active" data-bs-toggle="tab" href="#tab-1" aria-selected="true" role="tab">
                                        <i className="bi bi-house"></i>
                                        <h4 className="d-none d-lg-block">Sliding/Pleated Mosquito Net Doors</h4>
                                    </a>
                                </li>
                                <li className="nav-item col" role="presentation">
                                    <a className="nav-link" data-bs-toggle="tab" href="#tab-2" aria-selected="false" role="tab" tabindex="-1">
                                        <i className="bi bi-house"></i>
                                        <h4 className="d-none d-lg-block">Hinged Mosquito Net Doors</h4>
                                    </a>
                                </li>
                            </ul>

                            <div className="tab-content">
                                <div className="tab-pane active show" id="tab-1" role="tabpanel">
                                    <div className='row'>
                                        <div className='col-lg'>
                                            <p style={{ height: '100px' }}>
                                                Sliding/Pleated mosquito net doors are installed parallel to existing sliding doors or windows. They operate on a track system, allowing them to slide horizontally for easy opening and closing. Sliding mosquito net doors are convenient and space-saving, making them ideal for balconies, patios, and large doorways.
                                            </p>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-lg-6 order-2 order-lg-1 mt-3 mt-lg-0">
                                            <ul>
                                                <li><i className="bi bi-check-circle-fill"></i><span>Frame: </span>The door frame is usually made of lightweight and
                                                    durable materials of aluminum. The frame is designed to hold the mesh securely in
                                                    place and provide smooth sliding motion.</li>
                                                <li><i className="bi bi-check-circle-fill"></i><span>Mesh: </span>The mesh like fiberglass is used in sliding mosquito net doors is a fine,
                                                    tightly-woven material that effectively blocks mosquitoes and other insects from entering while still allowing
                                                    airflow and visibility.</li>
                                                <li><i className="bi bi-check-circle-fill"></i><span>Sliding Mechanism: </span>Sliding mosquito net doors
                                                    feature a mechanism that allows them to slide open and closed along a track.
                                                    Some doors may have a magnetic closure system to ensure that the door stays securely closed when not in use.</li>
                                                <li><i className="bi bi-check-circle-fill"></i><span>Installation: </span>Sliding mosquito net doors are typically installed on the
                                                    exterior or interior of existing doors or openings. They can be custom-made to fit
                                                    specific door sizes and configurations, and installation usually involves attaching the
                                                    frame to the door frame or mounting surface.</li>
                                            </ul>
                                        </div>
                                        <div className="col-lg-6 order-1 order-lg-2 text-center">
                                            <img src={mn_main_door_pleated} alt="" className="img-fluid" />
                                        </div>
                                    </div>
                                </div>
                                <div className="tab-pane" id="tab-2" role="tabpanel">
                                    <div className="row">
                                        <div className="col-lg">
                                            <p style={{ height: '100px' }}>
                                                Hinged mosquito net doors operate similar to traditional doors, swinging open and closed on hinges. They are typically installed in door frames and can be customized to open inward or outward, depending on your space requirements. Hinged mosquito net doors offer a wider opening than sliding doors, making them suitable for main entrances and high-traffic areas.
                                            </p>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-lg-6 order-2 order-lg-1 mt-3 mt-lg-0">
                                            <ul>
                                                <li><i className="bi bi-check-circle-fill"></i><span>Fine Mesh Construction: </span>The main door is typically crafted from a
                                                    stainless steel net. This mesh is tightly woven to create a barrier that effectively
                                                    blocks insects from entering your home.</li>
                                                <li><i className="bi bi-check-circle-fill"></i><span>Various Designs: </span>Mosquito net main doors come in various designs to suit different
                                                    architectural styles and preferences. They can be installed as standalone doors or integrated with existing entryways.</li>
                                                <li><i className="bi bi-check-circle-fill"></i><span>Installation: </span>Installation of a mosquito net main door
                                                    is typically straightforward and can be done by our professional or engineer.
                                                    The door frame is mounted onto the door frame or surrounding structure, and the stainless steel net
                                                    is securely attached to the frame.</li>
                                            </ul>
                                        </div>
                                        <div className="col-lg-6 order-1 order-lg-2 text-center">
                                            <img src={mn_main_door} alt="" className="img-fluid" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <section id="Products" className="Products" style={{ paddingTop: '40px' }}>
                            <div className="row gy-4">
                                <div className="col-lg-6">
                                    <div className="box" data-aos="zoom-in" data-aos-easing="ease-out-cubic" data-aos-duration="5000">
                                        <h4 className="title">Insect Protection</h4>
                                        <p className="description">
                                            The primary benefit of a mosquito net door is its ability to keep insects out,
                                            including disease-carrying mosquitoes. This helps create a more comfortable and
                                            healthier living environment for you and your family.</p>
                                    </div>
                                </div>

                                <div className="col-lg-6">
                                    <div className="box" data-aos="zoom-in" data-aos-duration="5000">
                                        <h4 className="title">Natural Ventilation</h4>
                                        <p className="description">Unlike solid doors, mosquito net doors allow fresh air to
                                            circulate freely throughout your home. This natural ventilation helps regulate indoor temperatures,
                                            reduce stuffiness, and improve indoor air quality.</p>
                                    </div>
                                </div>

                                <div className="col-lg-6">
                                    <div className="box" data-aos="zoom-in" data-aos-duration="3000">
                                        <h4 className="title">Energy Efficiency</h4>
                                        <p className="description">By allowing natural light and airflow into your home,
                                            mosquito net doors can help reduce the need for artificial lighting and air conditioning.
                                            This can lead to energy savings and lower utility bills over time.</p>
                                    </div>
                                </div>

                                <div className="col-lg-6">
                                    <div className="box" data-aos="zoom-in" data-aos-duration="3000">
                                        <h4 className="title">Privacy</h4>
                                        <p className="description">While providing ventilation and insect protection, mosquito net doors also offer a
                                            degree of privacy by obscuring the view into your home from the outside.
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

export default MosquitoNetDoors;