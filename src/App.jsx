import React from 'react';
import { Routes, Route } from 'react-router-dom';

import NavBar from './components/NavBar';
import Footer from './components/Footer';
import Home from './pages/Home';
import ContactUs from './pages/ContactUs';
import AboutUs from './pages/AboutUs';
import Domestic from './pages/Domestic';
import International from './pages/International';
import Blogs from './pages/Blogs';

const App = () => {
  return (
    <div>
      <NavBar />
      
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path='/aboutUs' element={<AboutUs />}/>
        <Route path='/domestic' element={<Domestic />} />
        <Route path='/international' element={<International />} />
        <Route path='/blogs' element={<Blogs />} />
        <Route path='/contactUs' element={<ContactUs />} />
       
        

        {/* Add more routes here as needed */}
      </Routes>
      
      <Footer />
    </div>
  );
}

export default App;