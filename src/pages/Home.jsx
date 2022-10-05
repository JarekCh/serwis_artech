import React from 'react';
import Assortment from '../components/Assortment';
import Hero from '../components/Hero';
import ServiceScope from '../components/ServiceScope';
import SliderTypewriter from '../components/SliderTypewriter';
import Contact from '../components/Contact';
import GoogleMaps from '../components/GoogleMaps';
import Loading from '../components/Loading';
import { useSelector } from 'react-redux';

const Home = () => {
  const { isLoadingSite } = useSelector((store) => store.site);
  if (isLoadingSite) return <Loading />;

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
