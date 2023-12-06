import React from 'react';
import '../Products/FlooringMats.css'
import Footer from '../Footer';
import Header from '../Header';
import '../Products/Products.css'
import wallpaper from '../image/2.jpg'


function InteriorWallPaper(props) {

    return (
        <>
            <div className='container-fluid p-0'>
                <div className='sticky-top'>
                    <Header />
                </div>
                <section id="flooringmats" className="flooringmats sections-bg">

                    <div className='itemBanner'>
                        <img src={wallpaper} alt='' />
                    </div>

                    <div className="container aos-init aos-animate" data-aos="fade-up">

                        <div className="section-header">
                            <h2>Wallpapers</h2>

                            <p>
                                <h4>Wallpapers for Office Walls</h4>
                                Create an inspiring and professional ambiance in your workspace. Our office wallpapers range from sophisticated designs for executive offices to vibrant patterns for creative spaces, fostering a positive and productive atmosphere.
                            </p>

                            <p>
                                <h4>Wallpapers for Home Walls</h4>
                                Make a statement in your living spaces with our home wallpapers. From accent walls in the living room to serene patterns in the bedroom, our wallpapers add character and charm to every corner of your home.</p>
                        </div>

                        <section id="Products" className="Products">
                            <div className="row gy-4">
                                <div className="col-lg-6 aos-init aos-animate" data-aos="fade-up" data-aos-delay="100">
                                    <div className="box">
                                        <h4 className="title">Nature-Inspired</h4>
                                        <p className="description">
                                            Bring the outdoors in with our nature-inspired wallpapers.
                                            From lush botanicals to calming landscapes, these designs
                                            create a soothing and refreshing atmosphere.</p>
                                    </div>
                                </div>

                                <div className="col-lg-6 aos-init aos-animate" data-aos="fade-up" data-aos-delay="200">
                                    <div className="box">
                                        <h4 className="title">Customized Solutions</h4>
                                        <p className="description">Infuse warmth and personality into your living spaces with our Home Harmony collection. From timeless patterns to vibrant prints, our wallpapers are designed to complement various interior styles, adding a touch of coziness and style.</p>
                                    </div>
                                </div>

                                <div className="col-lg-6 aos-init aos-animate" data-aos="fade-up" data-aos-delay="300">
                                    <div className="box">
                                        <h4 className="title">Enhanced Ventilation</h4>
                                        <p className="description">Tailor your walls to reflect your unique style with our customizable wallpaper options. Select from an array of colors, patterns, and textures to create a personalized look that seamlessly integrates with your decor.</p>
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

export default InteriorWallPaper;