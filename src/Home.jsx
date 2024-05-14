import { React, useEffect } from 'react';
import '../src/Home.css'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import AOS from 'aos';
import 'aos/dist/aos.css';

function Home(props) {

    useEffect(() => {
        AOS.init();
    }, [])

    return (
        <>
            <section id="whatwedo">
                <div id="carousel" className="carousel carousel-fade slide carousel-div" data-bs-ride="carousel">
                    <div className="carousel-inner">
                        <div className="carousel-item active" >
                            <img src={require('../src/image/banner-1.jpg')} className="d-block w-100" alt='' />
                            <div className="carousel-caption d-none d-md-block overlay">
                                <h1>Your Vision, Our Expertise</h1>
                                {/* <p>Some representative placeholder content for the first slide.</p> */}
                            </div>
                        </div>
                        <div className="carousel-item" >
                            <img src={require('../src/image/banner-2.jpg')} alt='' className="d-block w-100" />
                            <div className="carousel-caption d-none d-md-block overlay">
                                <h1>Crafting Beautiful Interiors, One Room at a Time</h1>
                            </div>
                        </div>
                        <div className="carousel-item" >
                            <img src={require('../src/image/banner-3.jpg')} alt='' className="d-block w-100" />
                            <div className="carousel-caption d-none d-md-block overlay">
                                <h1>Elevating Spaces, Elevating Lives</h1>
                            </div>
                        </div>
                        <div className="carousel-item">
                            <img src={require('../src/image/banner-4.jpg')} alt='' className="d-block w-100" />
                            <div className="carousel-caption d-none d-md-block overlay">
                                <h1>Designing Your Story, One Detail at a Time</h1>
                            </div>
                        </div>
                    </div>
                    <button className="carousel-control-prev" type="button" data-bs-target="#carousel" data-bs-slide="prev">
                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Previous</span>
                    </button>
                    <button className="carousel-control-next" type="button" data-bs-target="#carousel" data-bs-slide="next">
                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Next</span>
                    </button>
                </div>
            </section>
        </>
    );
}

export default Home;