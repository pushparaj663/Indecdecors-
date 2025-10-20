import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Home';
import About from './About';
import Service from './Service';
import ContactUs from './ContactUs';
import Products from './Products';
import '../src/App.css'
import MosquitoNetDoors from './Products/MosquitoNetDoors';
import MosquitoNetWindows from './Products/MosquitoNetWindows';
import Blinds from './Products/Blinds';
import Curtains from './Products/Curtains';
import FlooringMats from './Products/FlooringMats';
import WallPapers from './Products/WallPapers';
import Layout from './Layout';
import React from 'react';

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Layout />} />
        <Route path='whatwedo' element={<Home />} />
        <Route path='who-we-are' element={<About />} />
        <Route path='service' element={<Service />} />
        <Route path='products' element={<Products />} />
        <Route path='contact' element={<ContactUs />} />
        <Route path='/product/mosquitonetwindows' element={<MosquitoNetWindows />} />
        <Route path='/product/mosquitonetdoors' element={<MosquitoNetDoors />} />
        <Route path='/product/curtains' element={<Curtains />} />
        <Route path='/product/blinds' element={<Blinds />} />
        <Route path='/product/vinylflooring' element={<FlooringMats />} />
        <Route path='/product/wallpapers' element={<WallPapers />} />
      </Routes>
    </Router>
  );
}

export default App;