import './App.css';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Footer from './Footer';
import Home from './Home';
import About from './About';
import Service from './Service';
import ContactUs from './ContactUs';
import Products from './Products';
import Header from './Header';
import '../src/App.css'
import MosquitoNetDoors from './Products/MosquitoNetDoors';
import MosquitoNetWindows from './Products/MosquitoNetWindows';
import Blinds from './Products/Blinds';
import Curtains from './Products/Curtains';
import FlooringMats from './Products/FlooringMats';
import InteriorWallPaper from './Products/InteriorWallPaper';
import Layout from './Layout';


function App() {
  return (


    <Router>
      <Routes>
        <Route path='/' element={<Layout />} />
        <Route path='/what-we-do' element={<Home />} />
        <Route path='/who-we-are' element={<About />} />
        <Route path='/service' element={<Service />} />
        <Route path='/products' element={<Products />} />
        <Route path='/contact' element={<ContactUs />} />
        <Route path='/product/netwindow' element={<MosquitoNetWindows />} />
        <Route path='/product/netdoors' element={<MosquitoNetDoors />} />
        <Route path='/product/curtain' element={<Curtains />} />
        <Route path='/product/blinds' element={<Blinds />} />
        <Route path='/product/flooringmats' element={<FlooringMats />} />
        <Route path='/product/wallpaper' element={<InteriorWallPaper />} />
      </Routes>
    </Router>

  );
}

export default App;
