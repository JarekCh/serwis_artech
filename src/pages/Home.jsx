import React from 'react';
import Hero from '../components/Hero';
import ServiceScope from '../components/ServiceScope';
import SliderTypewriter from '../components/SliderTypewriter';
import Contact from '../components/Contact';
import GoogleMaps from '../components/GoogleMaps';
import Loading from '../components/Loading';
import { useSelector } from 'react-redux';
import ContactModal from '../components/ContactModal';

// TODO modal,animation, store for email js with logic
// secure button from multiclick

const Home = () => {
  const { isLoadingSite } = useSelector((store) => store.site);
  const { isTypewitersLoading } = useSelector((store) => store.site);
  const { isOpen } = useSelector((store) => store.email);
  if (isLoadingSite) return <Loading />;
  if (isTypewitersLoading) return <Loading />;

  return (
    <main>
      {isOpen && <ContactModal />}
      <Hero />
      <ServiceScope />
      <SliderTypewriter />
      <Contact />
      <GoogleMaps />
    </main>
  );
};

export default Home;
