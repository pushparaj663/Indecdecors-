import React, { useState, useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Header from '../Header';
import Footer from '../Footer';
import Breadcrumbs from './Breadcrumbs'; 
import doorSliding from '../../src/image/door-sliding.jpg';
import doorHinged from '../../src/image/door-hinged.jpg';
import { Helmet } from "react-helmet-async";
import './theme.css';

function MosquitoNetDoors() {
  const [activeTab, setActiveTab] = useState('sliding');

  useEffect(() => { AOS.init({ duration: 1000, once: true }); }, []);

  const tabContent = {
    sliding: [
      { icon: 'bi-check-circle-fill', title: 'Smooth Operation', desc: 'Easy-glide tracks for effortless sliding.' },
      { icon: 'bi-check-circle-fill', title: 'Lightweight Frame', desc: 'Aluminum frames for durability and corrosion resistance.' },
      { icon: 'bi-check-circle-fill', title: 'Custom Fit', desc: 'Perfect for patios, balconies, and large openings.' }
    ],
    hinged: [
      { icon: 'bi-check-circle-fill', title: 'Traditional Swing', desc: 'Hinged doors open fully like normal doors.' },
      { icon: 'bi-check-circle-fill', title: 'Durable Mesh', desc: 'Fiberglass or stainless steel mesh for long-lasting protection.' },
      { icon: 'bi-check-circle-fill', title: 'Elegant Design', desc: 'Available in multiple frame colors to match décor.' }
    ]
  };

  const features = [
    { title: 'Insect Protection', desc: 'Keeps mosquitoes and bugs out while maintaining airflow.' },
    { title: 'Ease of Use', desc: 'Smooth sliding or hinge operation for convenience.' },
    { title: 'Energy Efficient', desc: 'Promotes natural ventilation reducing energy usage.' },
    { title: 'Custom Installation', desc: 'Professionally fitted to your opening dimensions.' }
  ];

  return (
    <>
   <Helmet>
  <title>Mosquito Net Doors | Indec Interiors</title>
  <meta name="description" content="Elegant mosquito net doors that combine functionality with modern design for homes and offices." />
  <meta name="keywords" content="mosquito net doors, sliding doors, insect protection" />
</Helmet>


    <div className="container-fluid p-0 theme-container">
      <div className="sticky-top"><Header /></div>
<Breadcrumbs />
      <section className="theme-section">
        <div className="container" data-aos="fade-up">
          
          <div className="theme-section-title text-center">
            <h2>Mosquito Net Doors</h2>
            <p>Safe, stylish, and functional mosquito net doors for your home.</p>
          </div>

          {/* Tabs */}
          <div className="theme-tabs" data-aos="fade-up" data-aos-delay="100">
            {['sliding', 'hinged'].map(tab => (
              <div
                key={tab}
                className={`theme-tab-link ${activeTab === tab ? 'active' : ''}`}
                onClick={() => setActiveTab(tab)}
              >
                {tab === 'sliding' ? 'Sliding / Pleated' : 'Hinged'}
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
                src={activeTab === 'sliding' ? doorSliding : doorHinged}
                alt="Mosquito Net Door"
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
        </div>
      </section>

      <Footer />
    </div></>
  );
}

export default MosquitoNetDoors;
