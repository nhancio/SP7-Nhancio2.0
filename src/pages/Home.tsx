import React, { Suspense, lazy } from 'react';
import SEO from '../components/SEO';
import Hero from '../components/Hero';
import Services from '../components/Services';
import Products from '../components/Products';

// Lazy-load below-the-fold sections to reduce initial main-thread JavaScript execution
const Achievements = lazy(() => import('../components/Achievements'));
const WhyUs = lazy(() => import('../components/WhyUs'));
const Clients = lazy(() => import('../components/Clients'));
const FAQ = lazy(() => import('../components/FAQ'));
const About = lazy(() => import('../components/About'));
const Contact = lazy(() => import('../components/Contact'));

const SectionPlaceholder = ({ id, minH = 'min-h-[250px]' }: { id: string; minH?: string }) => (
  <section id={id} className={`w-full ${minH} opacity-0 pointer-events-none`} aria-hidden="true" />
);

const Home = () => {
  return (
    <>
      <SEO
        title="Nhancio - Autonomous AI Agents, Multi-Agent Systems & Scalable AI Engineering"
        description="Founded by IITians, Nhancio builds production-ready autonomous agent frameworks (TALF, RALF), multimodal apps (Aura++, MagicBox), and enterprise AI platforms (IntelliAssets.AI, ResGro-AI)."
        path="/"
      />
      <Hero />
      <Services />
      <Products />
      <Suspense fallback={<SectionPlaceholder id="achievements" minH="min-h-[400px]" />}>
        <Achievements />
      </Suspense>
      <Suspense fallback={<SectionPlaceholder id="whyus" minH="min-h-[400px]" />}>
        <WhyUs />
      </Suspense>
      <Suspense fallback={<SectionPlaceholder id="clients" minH="min-h-[300px]" />}>
        <Clients />
      </Suspense>
      <Suspense fallback={<SectionPlaceholder id="faq" minH="min-h-[500px]" />}>
        <FAQ />
      </Suspense>
      <Suspense fallback={<SectionPlaceholder id="about" minH="min-h-[400px]" />}>
        <About />
      </Suspense>
      <Suspense fallback={<SectionPlaceholder id="contact" minH="min-h-[400px]" />}>
        <Contact />
      </Suspense>
    </>
  );
};

export default Home;
