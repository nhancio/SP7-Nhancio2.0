import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from './contexts/ThemeContext';
import { LanguageProvider } from './contexts/LanguageContext';
import Layout from './components/Layout/Layout';
import Home from './pages/Home';
import Services from './pages/Services';
import AutomationSetup from './pages/AutomationSetup';
import Pricing from './pages/Pricing';
import Achievements from './pages/Achievements';
import Blog from './pages/Blog';
import Contact from './pages/Contact';
import SEOHead from './components/SEO/SEOHead';

function App() {
  return (
    <ThemeProvider>
      <LanguageProvider>
        <Router>
          <SEOHead />
          <Layout>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/services" element={<Services />} />
              <Route path="/automation-setup" element={<AutomationSetup />} />
              <Route path="/pricing" element={<Pricing />} />
              <Route path="/achievements" element={<Achievements />} />
              <Route path="/blog" element={<Blog />} />
              <Route path="/contact" element={<Contact />} />
            </Routes>
          </Layout>
        </Router>
      </LanguageProvider>
    </ThemeProvider>
  );
}

export default App;