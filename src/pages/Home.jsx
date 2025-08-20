import React, { useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';

import DestinationCard from '../components/DestinationCard';
import TrendingPlaces from './Trendingplaces';
import BestResortforHoneymoon from './BestResortforHoneymoon'



const Home = () => {
  return (
    <div className="font-sans text-gray-800 overflow-hidden">

    <DestinationCard />
    <TrendingPlaces />

    <BestResortforHoneymoon />
    
      

    
    </div>
  );
};
export default Home;