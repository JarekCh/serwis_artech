import React from 'react';
import Hero from '../components/Hero';
import ServiceScope from '../components/ServiceScope';
import SliderTypewriter from '../components/SliderTypewriter';
import Contact from '../components/Contact';
import GoogleMaps from '../components/GoogleMaps';
import Loading from '../components/Loading';
import { useSelector } from 'react-redux';

// TODO modal,animation, stroe for mail with logic

const Home = () => {
  const { isLoadingSite } = useSelector((store) => store.site);
  const { isTypewitersLoading } = useSelector((store) => store.site);
  if (isLoadingSite) return <Loading />;
  if (isTypewitersLoading) return <Loading />;

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
