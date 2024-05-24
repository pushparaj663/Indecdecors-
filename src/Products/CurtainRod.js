import { React } from 'react';
import curtains_drape from '../../src/image/curtains-drapes.jpg'

function CurtainRod(props) {
    return (
        <div>
            <section id="RodsAndBrackets" className="product-items">
                <div className="container" data-aos="fade-up" data-aos-delay="200" data-aos-easing="ease-in-sine">
                    <div className="section-title">
                        <h2>Curtains Rods and Brackets</h2>
                        <p>Curtains are a vital part of home decor, offering both functionality and aesthetic appeal.
                            Choosing the right curtain rods and brackets is crucial to ensuring your curtains hang beautifully and operate smoothly.</p>
                        <p>
                            At indec, where we redefine the art of window dressing with our exquisite collection of curtain brackets.
                        </p>
                    </div>

                    <div className="tab-content">
                        <div className="tab-pane active" id="tab-1" role="tabpanel">
                            <div className="row">
                                <div className="col-lg-6 order-2 order-lg-1 mt-3 mt-lg-0" data-aos="fade-right">
                                    <ul>
                                        <li><i className="bi bi-check-circle-fill"></i>Immerse yourself in luxury with our opulent drape collection.</li>
                                        <li><i className="bi bi-check-circle-fill"></i>From flowing fabrics to intricate patterns, our drapes are designed to add a touch of opulence to your living spaces.</li>
                                        <li><i className="bi bi-check-circle-fill"></i>Choose from a variety of colors, patterns, and textures to create a bespoke look that complements your interior design.</li>
                                        <li><i className="bi bi-check-circle-fill"></i>Beyond mere support, our brackets are designed to be a visual delight, complementing your curtains and enhancing the overall aesthetics of your living spaces.</li>
                                        <li><i className="bi bi-check-circle-fill"></i>Our curtain brackets are more than just functional hardware; they are a statement piece for your windows.</li>
                                        <li><i className="bi bi-check-circle-fill"></i>Crafted with an eye for design, each bracket adds a touch of elegance and style to your curtains.</li>
                                    </ul>
                                </div>
                                <div className="col-lg-6 order-1 order-lg-2 text-center" data-aos="fade-left">
                                    <img src={curtains_drape} alt="Curtsain Rods And Brackets" className="img-fluid" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section >
        </div>
    );
}

export default CurtainRod;