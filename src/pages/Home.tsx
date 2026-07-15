import React from 'react';
import SEO from '../components/SEO';
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
      <SEO
        title="Nhancio - Leading AI Agency | Data Science, AI Agents & Marketing Solutions"
        description="Leading AI agency in Hyderabad, India specializing in AI agents, data science, LLMs, and AI marketing. Founded by IITians, we deliver cutting-edge AI solutions, automation, and digital marketing for businesses seeking intelligent growth."
        path="/"
      />
      <Hero />
      <Services />
      <Products />
      <Achievements />
      <WhyUs />
      <Clients />
      <About />
      <Contact />
    </>
  );
};

export default Home;