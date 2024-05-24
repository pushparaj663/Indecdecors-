import { React, useEffect } from 'react';
import Footer from '../Footer';
import Header from '../Header';
import AOS from 'aos';
import "../../node_modules/aos/dist/aos.css"
import '../Products/Products.css'
import '../Home.css'
import wallpaperresidential from '../../src/image/wallpaper-residential.jpg'
import wallpapercommercial from '../../src/image/wallpaper-commercial.jpg'


function WallPapers(props) {

    useEffect(() => {
        AOS.init();
    }, [])


    return (
        <>
            <div className='container-fluid p-0'>
                <div className='sticky-top'>
                    <Header />
                </div>

                <section id="wallpapers" className="product-items section-bg">
                    <div className="container aos-animate" data-aos="fade-up" data-aos-delay="100">
                        <div className="section-title">
                            <h2>Wall Papers for Walls</h2>
                            <p>
                                Welcome to Indec, your premier destination for high-quality wallpapers that transform both residential and commercial spaces. Whether you're looking to create a cozy home environment or a professional yet inviting atmosphere in your business, our extensive wallpaper collection offers something for every taste and need.
                            </p>
                            <p>
                                Wallpaper is a versatile and impactful way to enhance the aesthetics of any space. Here’s why wallpaper is an excellent choice for both residential and commercial settings:
                            </p>
                        </div>

                        <div className="row">
                            <ul className="nav nav-tabs row d-flex" role="tablist">
                                <li className="nav-item col" role="presentation">
                                    <a className="nav-link show active" data-bs-toggle="tab" href="#tab-1" aria-selected="true" role="tab">
                                        <i className="bi bi-house"></i>
                                        <h4 className="d-none d-lg-block">Residential Wallpapers</h4>
                                    </a>
                                </li>
                                <li className="nav-item col" role="presentation">
                                    <a className="nav-link" data-bs-toggle="tab" href="#tab-2" aria-selected="false" role="tab" tabindex="-1">
                                        <i className="bi bi-house"></i>
                                        <h4 className="d-none d-lg-block">Commercial WallPapers</h4>
                                    </a>
                                </li>
                            </ul>

                            <div className="tab-content">
                                <div className="tab-pane active show" id="tab-1" role="tabpanel">
                                    <div className='row'>
                                        <div className='col-lg'>
                                            <p style={{ height: '70px' }}>
                                                Create a haven of comfort and style with our home wallpaper decorations.
                                                Whether you're looking to add a pop of color to your living room or create a serene retreat in your bedroom, our wallpapers offer endless possibilities for transforming your space.
                                            </p>
                                        </div>
                                    </div>

                                    <div className="row">
                                        <div className="col-lg-6 order-2 order-lg-1 mt-3 mt-lg-0 aos-animate" data-aos="fade-up" data-aos-delay="100">
                                            <ul>
                                                <li><i className="bi bi-check-circle-fill"></i><span>Living Rooms: </span>Choose from elegant florals, geometric patterns, or textured designs to create a welcoming and stylish living space.</li>
                                                <li><i className="bi bi-check-circle-fill"></i><span>Bedrooms: </span>Opt for soothing colors and patterns that promote relaxation and restful sleep.
                                                    Reflect your personal style with a wide range of designs, from minimalist to extravagant.</li>
                                                <li><i className="bi bi-check-circle-fill"></i><span>Kitchens and Bathrooms: </span>Select moisture-resistant and easy-to-clean wallpapers for kitchens and bathrooms. Use light colors and patterns to create a fresh, clean look.</li>
                                                <li><i className="bi bi-check-circle-fill"></i><span>Kids' Rooms: </span>Bright, playful patterns and educational themes make kids' rooms both fun and functional.</li>
                                            </ul>
                                        </div>
                                        <div className="col-lg-6 order-1 order-lg-2 text-center aos-animate" data-aos="fade-up" data-aos-delay="200">
                                            <img src={wallpaperresidential} alt="Residential Wallpapers" className="img-fluid" />
                                        </div>
                                    </div>
                                </div>
                                <div className="tab-pane" id="tab-2" role="tabpanel">
                                    <div className='row'>
                                        <div className='col-lg'>
                                            <p style={{ height: '70px' }}>
                                                Inspire creativity and productivity in your workspace with our office wallpaper decorations.
                                                From sleek and modern designs to timeless classics, our wallpapers can help set the tone for a
                                                professional and inviting environment.
                                            </p>
                                        </div>
                                    </div>

                                    <div className="row">
                                        <div className="col-lg-6 order-2 order-lg-1 mt-3 mt-lg-0">
                                            <ul>
                                                <li><i className="bi bi-check-circle-fill"></i><span>Executive Offices: </span>Impress clients and colleagues alike with luxurious wallpapers that exude sophistication and refinement.</li>
                                                <li><i className="bi bi-check-circle-fill"></i><span>Meeting Rooms: </span>Foster collaboration and innovation with dynamic patterns and bold colors that stimulate creativity and engagement.</li>
                                                <li><i className="bi bi-check-circle-fill"></i><span>Reception Areas: </span>Create a welcoming first impression with stylish wallpapers that reflect your company's brand and values.</li>
                                                <li><i className="bi bi-check-circle-fill"></i><span>Retail Spaces:: </span>Use eye-catching wallpapers to enhance product displays and create an inviting shopping experience. Easily update the look of your store with seasonal or promotional themes.</li>
                                                <li><i className="bi bi-check-circle-fill"></i><span>Hospitality: </span> Enhance the guest experience in hotels, restaurants, and cafes with stylish and durable wallpapers. Use different patterns and textures to create unique atmospheres in various areas.</li>
                                                <li><i className="bi bi-check-circle-fill"></i><span>Healthcare and Education: </span>Select soothing colors and patterns to create calming environments in healthcare settings. Use vibrant and engaging designs in educational settings to stimulate learning and creativity.</li>
                                            </ul>
                                        </div>
                                        <div className="col-lg-6 order-1 order-lg-2 text-center">
                                            <img src={wallpapercommercial} alt="Commercial WallPapers" className="img-fluid" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <section id="Products" className="Products" style={{ paddingTop: '40px' }}>
                            <div className="row gy-4">
                                <div className="col-lg-6">
                                    <div className="box aos-animate" data-aos="zoom-in" data-aos-easing="ease-out-cubic" data-aos-duration="5000">
                                        <h4 className="title">Quality Materials</h4>
                                        <p className="description">
                                            Our wallpapers are crafted from high-quality materials that are durable, fade-resistant, and easy to maintain, ensuring long-lasting beauty and performance.
                                        </p>
                                    </div>
                                </div>
                                <div className="col-lg-6">
                                    <div className="box" data-aos="zoom-in" data-aos-duration="5000">
                                        <h4 className="title">Variety of Designs</h4>
                                        <p className="description">Whether you prefer modern minimalism, classic elegance, or eclectic patterns, our diverse selection of wallpapers offers something for every taste and style.
                                        </p>
                                    </div>
                                </div>
                                <div className="col-lg-6">
                                    <div className="box" data-aos="zoom-in" data-aos-duration="3000">
                                        <h4 className="title">Customization Options</h4>
                                        <p className="description">Personalize your space with custom-designed wallpapers that reflect your unique personality and vision, turning your walls into works of art.</p>
                                    </div>
                                </div>
                                <div className="col-lg-6">
                                    <div className="box" data-aos="zoom-in" data-aos-duration="3000">
                                        <h4 className="title">Professional Installation</h4>
                                        <p className="description">
                                            Our experienced team will handle the installation process with precision and care, ensuring a flawless finish that enhances the overall aesthetic of your space.
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

export default WallPapers;