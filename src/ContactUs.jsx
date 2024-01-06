import React from 'react';
import './ContactUs.css'
import Footer from './Footer';
import Header from './Header';

function ContactUs(props) {
    return (
        <div>
            <div className='container-fluid p-0'>
                <div className='sticky-top'>
                    {window.location.pathname === '/' ? '' :
                        <Header />}
                </div>

                <section id="contact">
                    <div className="container aos-init aos-animate" data-aos="fade-up">
                        <div className="section-header">
                            <h2>Contact Us</h2>
                            <p>At indec, we understand that your living or working space is a reflection of your unique personality and style.
                                Whether you're looking to revamp your home, create an inviting office environment,
                                or embark on any interior design project,
                                indec is your trusted partner.</p>
                        </div>

                        <div className="row contact-info">

                            <div className="col-md-4">
                                <div className="contact-address">
                                    <i className="bi bi-geo-alt"></i>
                                    <h3>Address</h3>
                                    <address>AK Complex, Aarthi Theatre Rd, Dindigul, Tamil Nadu 624001</address>
                                </div>
                            </div>

                            <div className="col-md-4">
                                <div className="contact-phone">
                                    <i className="bi bi-phone"></i>
                                    <h3>Phone Number</h3>
                                    <p><a href="tel:+919600339397">+91 96003 39397</a> /
                                        <a href="tel:+919952880078">+91 99528 80078</a>
                                    </p>
                                </div>
                            </div>

                            <div className="col-md-4">
                                <div className="contact-email">
                                    <i className="bi bi-envelope" ></i>
                                    <h3>Email</h3>
                                    <p><a href="mailto: admin@indectech.in"> admin@indectech.in</a></p>
                                </div>
                            </div>

                        </div>
                    </div>

                    <div className="container mb-4">
                        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3924.6957363599936!2d77.97975367477234!3d10.366195089758687!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b00ab46dbcbdf3d%3A0xb6ec6e247740ce56!2sIndec%20Interior%20Decorer!5e0!3m2!1sen!2sin!4v1699100026949!5m2!1sen!2sin" width="100%" height="380" style={{ border: "0" }} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                    </div>
                </section>

                {window.location.pathname === '/' ? '' :
                    <Footer />}
            </div>
        </div>
    );
}

export default ContactUs;