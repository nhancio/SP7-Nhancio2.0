import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navigation from './components/Navigation';
import Home from './pages/Home';
import Blogs from './pages/Blogs';
import Careers from './pages/Careers';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen">
      <Navigation />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/blogs" element={<Blogs />} />
        <Route path="/careers" element={<Careers />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;