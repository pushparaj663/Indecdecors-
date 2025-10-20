import React, { useState, useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Header from '../Header';
import Footer from '../Footer';
import blindsBlackout from '../../src/image/blinds-blackout.jpg';
import blindsZebra from '../../src/image/blinds-zebra.jpg';
import './theme.css';

function Blinds() {
  const [activeTab, setActiveTab] = useState('blackout');

  useEffect(() => { AOS.init({ duration: 1000, once: true }); }, []);

  const tabContent = {
    blackout: [
      { icon: 'bi-lightning-charge', title: 'Total Light Block', desc: 'Create a completely dark space ideal for bedrooms and home theaters.' },
      { icon: 'bi-sun', title: 'Energy Efficient', desc: 'Keeps interiors cool by blocking harsh sunlight.' },
      { icon: 'bi-palette', title: 'Elegant Appearance', desc: 'Sleek and modern finish enhances the look of any room.' }
    ],
    zebra: [
      { icon: 'bi-arrow-left-right', title: 'Dual Fabric Design', desc: 'Alternate between sheer and opaque layers for adjustable light control.' },
      { icon: 'bi-stars', title: 'Stylish & Functional', desc: 'Perfect blend of modern design and practicality.' },
      { icon: 'bi-tools', title: 'Easy Maintenance', desc: 'Simple to clean and built for long-lasting use.' }
    ]
  };

  return (
    <div className="container-fluid p-0 theme-container">
      <div className="sticky-top"><Header /></div>

      <section className="theme-section">
        <div className="container" data-aos="fade-up">
          <div className="theme-section-title text-center">
            <h2>Window Blinds</h2>
            <p>Elegant blinds designed for modern style, light control, and privacy.</p>
          </div>

          {/* Tabs */}
          <div className="theme-tabs" data-aos="fade-up" data-aos-delay="100">
            {['blackout','zebra'].map(tab => (
              <div
                key={tab}
                className={`theme-tab-link ${activeTab === tab ? 'active' : ''}`}
                onClick={() => setActiveTab(tab)}
              >
                {tab === 'blackout' ? 'Blackout Blinds' : 'Zebra Blinds'}
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
              <img src={activeTab==='blackout'?blindsBlackout:blindsZebra} alt="Blinds" className="theme-image"/>
            </div>
          </div>

          {/* Feature Boxes */}
          <div className="row theme-feature-section">
            {[
              { title:'Custom Sizing', desc:'Every blind is crafted to your exact window measurements for a flawless fit.' },
              { title:'Premium Fabric', desc:'Durable, fade-resistant fabrics that retain their charm for years.' },
              { title:'Smart Controls', desc:'Choose from manual, chain-driven, or smart motorized options.' },
              { title:'Expert Installation', desc:'Installed by professionals with precision for perfect alignment and function.' }
            ].map((feature,idx)=>(
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

export default Blinds;
