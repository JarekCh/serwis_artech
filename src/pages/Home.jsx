import React from 'react';
import Hero from '../components/Hero';
import ServiceScope from '../components/ServiceScope';
import SliderTypewriter from '../components/SliderTypewriter';
import Contact from '../components/Contact';
import GoogleMaps from '../components/GoogleMaps';
import Loading from '../components/Loading';
import { useSelector } from 'react-redux';

const Home = () => {
  const { isLoadingSite } = useSelector((store) => store.site);
  const { isTypewitersLoading } = useSelector((store) => store.site);
  if (isLoadingSite) return <Loading />;
  if (isTypewitersLoading) return <Loading />;

  console.log('test');

  return (
    <main>
      <Hero />
      <ServiceScope />
      <SliderTypewriter />
      <Contact />
      <GoogleMaps />
    </main>
  );
};

export default Home;
