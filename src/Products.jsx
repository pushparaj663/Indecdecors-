import React from 'react';
import './Products.css';
import Header from './Header';
import Footer from './Footer';
import product1 from '../src/image/portfolio-1.jpg'

function Products(props) {

    return (
        <>
            <div className='sticky-top'>
                {window.location.pathname === '/' ? '' :
                    <Header />}
            </div>
            <section id="product" className="product">
                <div className="container aos-init aos-animate" data-aos="fade-up">
                    <div className="section-header">
                        <h2>Our Products</h2>
                        <p>We bring you a comprehensive range of high-quality solutions to enhance your living spaces and provide comfort and convenience.
                            Whether you're looking to keep pesky mosquitoes at bay, upgrade your windows with elegant curtains, or
                            control light and privacy with blinds, we have the perfect products for you.</p>
                    </div>

                    <div className="row product-container aos-init aos-animate" data-aos="fade-up" data-aos-delay="200" style={{ position: 'relative', height: '550px' }}>

                        <div className="col-lg-4 col-md-6 product-item filter-app" style={{ position: 'absolute', left: '0px', top: '0px' }}>
                            <img src={product1} className="img-fluid" alt="" />
                            <div className="product-info">
                                <h4>Mosquito Net Windows</h4>
                                <a href="/product/netwindow" className="details-link" title="More Details"><i className="bi bi-link-45deg"></i></a>
                            </div>
                        </div>

                        <div className="col-lg-4 col-md-6 product-item filter-web" style={{ position: 'absolute', left: '380px', top: '0px' }}>
                            <img src={product1} className="img-fluid" alt="" />
                            <div className="product-info">
                                <h4>Mosquito Net Doors</h4>
                                <a href="/product/netdoors" className="details-link" title="More Details"><i className="bi bi-link-45deg"></i></a>
                            </div>
                        </div>

                        <div className="col-lg-4 col-md-6 product-item filter-app" style={{ position: 'absolute', left: '760px', top: '0px' }}>
                            <img src={product1} className="img-fluid" alt="" />
                            <div className="product-info">
                                <h4>Curtains</h4>
                                <a href="/product/curtain" className="details-link" title="More Details"><i className="bi bi-link-45deg"></i></a>
                            </div>
                        </div>

                        <div className="col-lg-4 col-md-6 product-item filter-card" style={{ position: 'absolute', left: '0px', top: '297px' }}>
                            <img src={product1} className="img-fluid" alt="" />
                            <div className="product-info">
                                <h4>Blinds</h4>
                                <a href="/product/blinds" className="details-link" title="More Details"><i className="bi bi-link-45deg"></i></a>
                            </div>
                        </div>

                        <div className="col-lg-4 col-md-6 product-item filter-web" style={{ position: 'absolute', left: '380px', top: '297px' }}>
                            <img src={product1} className="img-fluid" alt="" />
                            <div className="product-info">
                                <h4>Flooring Mats</h4>
                                <a href="/product/flooringmats" className="details-link" title="More Details"><i className="bi bi-link-45deg"></i></a>
                            </div>
                        </div>

                        <div className="col-lg-4 col-md-6 product-item filter-app" style={{ position: 'absolute', left: '760px', top: '297px' }}>
                            <img src={product1} className="img-fluid" alt="" />
                            <div className="product-info">
                                <h4>Wallpapers for Walls</h4>
                                <a href="/product/wallpaper" className="details-link" title="More Details"><i className="bi bi-link-45deg"></i></a>
                            </div>
                        </div>

                        {/* <div className="col-lg-4 col-md-6 product-item filter-card" style={{ position: 'absolute', left: '0px', top: '594px' }}>
                            <img src={product1} className="img-fluid" alt="" />
                            <div className="product-info">
                                <h4>Card 1</h4>
                                <p>Card</p>
                                <a href="assets/img/product/product-7.jpg" data-gallery="productGallery" className="product-lightbox preview-link" title="Card 1"><i className="bx bx-plus"></i></a>
                                <a href="product-details.html" className="details-link" title="More Details"><i className="bi bi-link-45deg"></i></a>
                            </div>
                        </div>

                        <div className="col-lg-4 col-md-6 product-item filter-card" style={{ position: 'absolute', left: '380px', top: '594px' }}>
                            <img src={product1} className="img-fluid" alt="" />
                            <div className="product-info">
                                <h4>Card 3</h4>
                                <p>Card</p>
                                <a href="assets/img/product/product-8.jpg" data-gallery="productGallery" className="product-lightbox preview-link" title="Card 3"><i className="bx bx-plus"></i></a>
                                <a href="product-details.html" className="details-link" title="More Details"><i className="bi bi-link-45deg"></i></a>
                            </div>
                        </div>

                        <div className="col-lg-4 col-md-6 product-item filter-web" style={{ position: 'absolute', left: '760px', top: '594px' }}>
                            <img src={product1} className="img-fluid" alt="" />
                            <div className="product-info">
                                <h4>Web 3</h4>
                                <p>Web</p>
                                <a href="assets/img/product/product-9.jpg" data-gallery="productGallery" className="product-lightbox preview-link" title="Web 3"><i className="bx bx-plus"></i></a>
                                <a href="product-details.html" className="details-link" title="More Details"><i className="bi bi-link-45deg"></i></a>
                            </div>
                        </div> */}

                    </div>

                </div>
            </section >

            {
                window.location.pathname === '/' ? '' :
                    <Footer />
            }
        </>
    );
}

export default Products;