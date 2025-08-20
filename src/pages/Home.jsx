import React, { useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import Hero from '../components/homeComponent/Hero';
import Banner from '../components/Banner';
import ServicesWeOffer from '../components/ServicesWeOffer';

const Home = () => {
  return (
    <div className="font-sans text-gray-800 overflow-hidden">
    <Hero />
    <Banner />
    <ServicesWeOffer />  
    
    </div>
  );
};
export default Home;