import React from 'react';
import Assortment from '../components/Assortment';
import Hero from '../components/Hero';
import ServiceScope from '../components/ServiceScope';
import SliderTypewriter from '../components/SliderTypewriter';
import Contact from '../components/Contact';
import GoogleMaps from '../components/GoogleMaps';

const Home = () => {
  return (
    <main>
      <Hero />
      <ServiceScope />
      <SliderTypewriter />
      <Assortment />
      <Contact />
      <GoogleMaps />
    </main>
  );
};

export default Home;
