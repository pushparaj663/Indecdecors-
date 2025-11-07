import React, { useState, useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Header from '../Header';
import Footer from '../Footer';
import Breadcrumbs from './Breadcrumbs'; 
import windowScrew from '../image/window-screw.jpg';
import windowMagnetic from '../image/window-screw.jpg';
import { Helmet } from "react-helmet-async";
import './theme.css';

function MosquitoNetWindows() {
  const [activeTab, setActiveTab] = useState('screw');

  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  const tabContent = {
    screw: [
      { icon: 'bi-gear', title: 'Strong Frame', desc: 'Durable aluminum construction for long-term use.' },
      { icon: 'bi-shield-lock', title: 'Secure Installation', desc: 'Screw-based fitting ensures complete protection.' },
      { icon: 'bi-house-door', title: 'Permanent Solution', desc: 'Ideal for fixed window systems needing high security.' },
    ],
    magnetic: [
      { icon: 'bi-magnet', title: 'Magnetic Closure', desc: 'Quick attach and detach with flexible magnetic strips.' },
      { icon: 'bi-brush', title: 'Easy Maintenance', desc: 'Remove and clean with ease, perfect for daily use.' },
      { icon: 'bi-lightning-charge', title: 'Modern Look', desc: 'Sleek and minimal design for elegant interiors.' },
    ],
  };

  const features = [
    { title: 'Premium Quality', desc: 'Provides an effective barrier against insects while allowing airflow.' },
    { title: 'Customized Fit', desc: 'Tailored to any window size and color scheme.' },
    { title: 'Enhanced Ventilation', desc: 'Fresh air circulation without pests entering your home.' },
    { title: 'Long Durability', desc: 'Rust-proof aluminum ensures lasting protection.' },
  ];

  return (
    <>
        <Helmet>
        <title>Mosquito Net Windows | Indec Interiors</title>
        <meta
          name="description"
          content="Durable mosquito net windows with screw and magnetic options for complete insect protection while allowing natural airflow."
        />
        <meta
          name="keywords"
          content="mosquito net windows, magnetic window net, screw type mosquito net, insect protection windows"
        />

        {/* Canonical URL */}
        <link rel="canonical" href="https://indecdecors.com/products/mosquitonetwindows" />

        {/* OpenGraph */}
        <meta property="og:title" content="Mosquito Net Windows | Indec Interiors" />
        <meta
          property="og:description"
          content="Secure and stylish mosquito net windows that keep insects out while allowing airflow."
        />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="https://indecdecors.com/image/window-screw.jpg" />
      </Helmet>

    <div className="container-fluid p-0 theme-container">
      <div className="sticky-top"><Header /></div> 
      < Breadcrumbs />

      <section className="theme-section">
        
        <div className="container" data-aos="fade-up">
         
          <div className="theme-section-title text-center">
            <h2>Mosquito Net Windows</h2>
            <p>
              Keep your home insect-free with our range of mosquito net windows designed for both security and comfort.
            </p>
          </div>

          {/* === Tabs === */}
          <div className="theme-tabs" data-aos="fade-up" data-aos-delay="100">
            {['screw', 'magnetic'].map((tab) => (
              <div
                key={tab}
                className={`theme-tab-link ${activeTab === tab ? 'active' : ''}`}
                onClick={() => setActiveTab(tab)}
              >
                {tab === 'screw' ? 'Screw Type' : 'Magnetic Type'}
              </div>
            ))}
          </div>

          {/* === Tab Content === */}
          <div className="theme-row" data-aos="fade-up">
            <div className="col-lg-6 theme-col">
              <ul className="theme-features">
                {tabContent[activeTab].map((item, index) => (
                  <li key={index}>
                    <i className={`bi ${item.icon}`}></i>
                    <span>{item.title}:</span> {item.desc}
                  </li>
                ))}
              </ul>
            </div>

            <div className="col-lg-6 theme-col theme-image-wrapper" data-aos="zoom-in">
              <img
                src={activeTab === 'screw' ? windowScrew : windowMagnetic}
                alt="Mosquito Net Window"
                className="theme-image"
              />
            </div>
          </div>

          {/* === Feature Boxes === */}
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

export default MosquitoNetWindows;
