import React from 'react';
import '../src/Footer.css';

const Footer = () => {
    return (
        <>
            <section id="footerbar" classNames="d-flex align-items-center">
                <div className="container d-flex justify-content-center justify-content-md-between" style={{ paddingTop: "30px" }}>
                    <div className="contact-info d-flex align-items-center">
                        <a href="#"><h1>indec</h1></a>
                    </div>
                    <div className='d-flex align-items-center'>
                        ©{new Date().getFullYear()} indec. All Rights Reserved
                    </div>
                    <div className="social-links d-none d-md-flex align-items-center">
                        {/* <a href="#" class="twitter"><i className="bi bi-twitter"></i></a>
                        <a href="#" class="facebook"><i className="bi bi-facebook"></i></a>
                        <a href="#" class="instagram"><i className="bi bi-instagram"></i></a>
                        <a href="#" class="linkedin"><i className="bi bi-linkedin"></i></a> */}
                    </div>
                </div>
            </section >
            <a href="#" className="back-to-top d-flex align-items-center justify-content-center active">
                <i className="bi bi-arrow-up-short"></i></a>

        </>
    )
}
export default Footer