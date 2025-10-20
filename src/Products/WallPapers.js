import React, { useState, useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Header from '../Header';
import Footer from '../Footer';

import wallpaperResidential from '../../src/image/wallpaper-residential.jpg';
import wallpaperCommercial from '../../src/image/wallpaper-commercial.jpg';

import './theme.css';

function WallPapers() {
  const [activeTab, setActiveTab] = useState('residential');

  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  // === Tab-Specific Content ===
  const tabContent = {
    residential: [
      { icon: 'bi-house', title: 'Living Rooms', desc: 'Elegant florals, geometric patterns, or textured designs for cozy spaces.' },
      { icon: 'bi-bed', title: 'Bedrooms', desc: 'Soothing colors and patterns to create a relaxing ambiance.' },
      { icon: 'bi-brush', title: 'Kids Rooms', desc: 'Bright, playful, and creative themes for children’s spaces.' },
      { icon: 'bi-droplet', title: 'Kitchens & Bathrooms', desc: 'Moisture-resistant wallpapers that are easy to clean.' }
    ],
    commercial: [
      { icon: 'bi-building', title: 'Executive Offices', desc: 'Luxurious textures and designs for a professional appearance.' },
      { icon: 'bi-people', title: 'Meeting Rooms', desc: 'Bold, inspiring designs that foster creativity and collaboration.' },
      { icon: 'bi-shop', title: 'Retail & Hospitality', desc: 'Eye-catching wallpapers for cafes, hotels, and retail outlets.' },
      { icon: 'bi-heart-pulse', title: 'Healthcare & Education', desc: 'Calming designs for hospitals, schools, and learning centers.' }
    ]
  };

  // === Shared Features Section ===
  const features = [
    { title: 'Quality Materials', desc: 'Durable, fade-resistant, and easy to maintain wallpapers for long-lasting beauty.' },
    { title: 'Variety of Designs', desc: 'From minimalistic patterns to luxurious textures matching every interior style.' },
    { title: 'Customization Options', desc: 'Personalized designs and textures tailored to your preferences.' },
    { title: 'Professional Installation', desc: 'Expert installation ensuring a seamless and elegant finish.' }
  ];

  return (
    <div className="container-fluid p-0 theme-container">
      <div className="sticky-top"><Header /></div>

      <section className="theme-section">
        <div className="container" data-aos="fade-up">
          {/* Section Title */}
          <div className="theme-section-title text-center">
            <h2>Wallpapers for Walls</h2>
            <p>
              Transform your interiors with premium wallpaper solutions for both residential and commercial spaces.
            </p>
          </div>

          {/* Tabs */}
          <div className="theme-tabs" data-aos="fade-up" data-aos-delay="100">
            {['residential', 'commercial'].map(tab => (
              <div
                key={tab}
                className={`theme-tab-link ${activeTab === tab ? 'active' : ''}`}
                onClick={() => setActiveTab(tab)}
              >
                {tab === 'residential' ? 'Residential Wallpapers' : 'Commercial Wallpapers'}
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
                src={activeTab === 'residential' ? wallpaperResidential : wallpaperCommercial}
                alt="Wallpapers"
                className="theme-image"
              />
            </div>
          </div>

          {/* Features Section */}
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
    </div>
  );
}

export default WallPapers;
