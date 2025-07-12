import React from 'react';
import Hero from '../components/Hero';
import Services from '../components/Services';
import WhyUs from '../components/WhyUs';
import Team from '../components/Team';
import About from '../components/About';
import Clients from '../components/Clients';
import Achievements from '../components/Achievements';
import Products from '../components/Products';
import Contact from '../components/Contact';

const Home = () => {
  return (
    <>
      <Hero />
      <Products />
      <Achievements />
      <Services />
      <WhyUs />
      <Team />
      <Clients />
      <About />
      <Contact />
    </>
  );
};

export default Home;