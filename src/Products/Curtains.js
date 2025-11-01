import React, { useState, useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Header from '../Header';
import Footer from '../Footer';
import Breadcrumbs from './Breadcrumbs'; 
import curtainsSheer from '../../src/image/curtains-sheer.jpg';
import curtainsBlackout from '../../src/image/curtains-blockout.jpg';
import { Helmet } from "react-helmet-async";
import './theme.css';
import './CurtainRod';
import CurtainRod from './CurtainRod';

function Curtains() {
  const [activeTab, setActiveTab] = useState('blackout');

  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  const tabContent = {
    blackout: [
      { icon:'bi-lightning-charge', title:'Complete Darkness', desc:'Blocks sunlight completely for bedrooms and home theaters.' },
      { icon:'bi-snow', title:'Thermal Protection', desc:'Keeps interiors cool in summer and warm in winter.' },
      { icon:'bi-palette', title:'Elegant Style', desc:'Sleek and modern finish enhances any room décor.' }
    ],
    sheer: [
      { icon:'bi-sun', title:'Soft Light', desc:'Allows natural light while maintaining privacy.' },
      { icon:'bi-droplet', title:'Breathable Fabric', desc:'Lightweight fabric ensures airflow and comfort.' },
      { icon:'bi-stars', title:'Decorative Design', desc:'Adds style and elegance to your interiors.' }
    ]
  };

  const features = [
    { title:'Custom Sizes', desc:'Tailored to fit your window dimensions perfectly.' },
    { title:'Premium Fabrics', desc:'Durable, fade-resistant fabrics with luxurious feel.' },
    { title:'Light Control', desc:'Adjust lighting according to your preference.' },
    { title:'Professional Installation', desc:'Installed with precision for a perfect finish.' }
  ];

  return (
    <><Helmet>
  <title>Curtains | Indec Interiors</title>
  <meta name="description" content="Beautiful curtains that elevate your space with premium fabric, design, and customization options." />
  <meta name="keywords" content="curtains, window curtains, home curtains, designer drapes" />
</Helmet>

    <div className="container-fluid p-0 theme-container">
      <div className="sticky-top"><Header /></div>
<Breadcrumbs />
      <section className="theme-section">
        <div className="container" data-aos="fade-up">
         
          <div className="theme-section-title text-center">
            <h2>Curtains</h2>
            <p>Premium curtains combining style, functionality, and comfort for your interiors.</p>
          </div>

          {/* Tabs */}
          <div className="theme-tabs" data-aos="fade-up" data-aos-delay="100">
            {['blackout','sheer'].map(tab => (
              <div
                key={tab}
                className={`theme-tab-link ${activeTab===tab?'active':''}`}
                onClick={()=>setActiveTab(tab)}
              >
                {tab==='blackout' ? 'Blackout Curtains' : 'Sheer Curtains'}
              </div>
            ))}
          </div>

          {/* Tab Content */}
          <div className="theme-row" data-aos="fade-up">
            <div className="col-lg-6 theme-col">
              <ul className="theme-features">
                {tabContent[activeTab].map((item, idx) => (
                  <li key={idx}>
                    <i className={`bi ${item.icon}`}></i>
                    <span>{item.title}:</span> {item.desc}
                  </li>
                ))}
              </ul>
            </div>
            <div className="col-lg-6 theme-col theme-image-wrapper" data-aos="zoom-in">
              <img
                src={activeTab==='blackout' ? curtainsBlackout : curtainsSheer}
                alt="Curtains"
                className="theme-image"
              />
            </div>
          </div>

          {/* Feature Boxes */}
          <div className="row theme-feature-section">
            {features.map((feature, idx) => (
              <div key={idx} className="col-lg-6 mb-4" data-aos="zoom-in">
                <div className="theme-feature-box">
                  <h4 className="theme-feature-title">{feature.title}</h4>
                  <p className="theme-feature-description">{feature.desc}</p>
                </div>
              </div>
            ))}
          </div>
          <CurtainRod/>
        </div>
      </section>

      <Footer />
    </div></>
  );
}

export default Curtains;
