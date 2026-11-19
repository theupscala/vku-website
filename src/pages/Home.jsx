import React from 'react';
import Hero from '../components/home/Hero';
import Journey from '../components/home/Journey';
import ServicesSection from '../components/home/ServicesSection';
import AboutPreview from '../components/home/AboutPreview';

const Home = () => {
  return (
    <div>
      <Hero />
      <Journey />
      <ServicesSection />
      <AboutPreview />
    </div>
  );
};

export default Home;
