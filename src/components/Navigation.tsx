import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const location = useLocation();

  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'services', label: 'Services' },
    { id: 'about', label: 'About Us' },
    { id: 'achievements', label: 'Achievements' },
    { id: 'products', label: 'Flagship Products' },
    { id: 'careers', label: 'Careers', isPage: true },
    { id: 'blogs', label: 'Blogs', isPage: true },
    { id: 'contact', label: 'Contact Us' }
  ];

  useEffect(() => {
    // Set active section based on current route
    if (location.pathname === '/blogs') {
      setActiveSection('blogs');
      return;
    }
    if (location.pathname === '/careers') {
      setActiveSection('careers');
      return;
    }
    
    // Only handle scroll-based active section on home page
    if (location.pathname !== '/') return;

    const handleScroll = () => {
      const sections = navItems.map(item => document.getElementById(item.id));
      const scrollPos = window.scrollY + 100;

      sections.forEach((section, index) => {
        if (section) {
          const top = section.offsetTop;
          const bottom = top + section.offsetHeight;
          
          if (scrollPos >= top && scrollPos < bottom) {
            setActiveSection(navItems[index].id);
          }
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [location.pathname]);

  const scrollToSection = (sectionId: string) => {
    // Handle page navigation
    if (sectionId === 'blogs' || sectionId === 'careers') {
      setIsMenuOpen(false);
      return; // Let the Link component handle navigation
    }
    
    // Handle section scrolling on home page
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  return (
    <nav className="fixed top-0 w-full z-50 bg-white/80 backdrop-blur-md shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <Link to="/" className="text-2xl font-bold text-purple-600">
                Nhancio
              </Link>
            </div>
          </div>
          
          {/* Desktop Menu */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              {navItems.map((item) => (
                item.isPage ? (
                  <Link
                    key={item.id}
                    to={`/${item.id}`}
                    className={`px-3 py-2 rounded-2xl text-sm font-medium transition-all duration-300 ${
                      activeSection === item.id
                        ? 'bg-purple-100 text-purple-700 shadow-inner'
                        : 'text-gray-700 hover:bg-purple-50 hover:text-purple-600'
                    }`}
                  >
                    {item.label}
                  </Link>
                ) : (
                  <button
                    key={item.id}
                    onClick={() => scrollToSection(item.id)}
                    className={`px-3 py-2 rounded-2xl text-sm font-medium transition-all duration-300 ${
                      activeSection === item.id
                        ? 'bg-purple-100 text-purple-700 shadow-inner'
                        : 'text-gray-700 hover:bg-purple-50 hover:text-purple-600'
                    }`}
                  >
                    {item.label}
                  </button>
                )
              ))}
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="inline-flex items-center justify-center p-2 rounded-2xl text-gray-700 hover:text-purple-600 hover:bg-purple-50 transition-all duration-300"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white/95 backdrop-blur-md border-t">
          <div className="px-2 pt-2 pb-3 space-y-1">
            {navItems.map((item) => (
              item.isPage ? (
                <Link
                  key={item.id}
                  to={`/${item.id}`}
                  onClick={() => setIsMenuOpen(false)}
                  className={`px-3 py-2 rounded-2xl text-sm font-medium transition-all duration-300 ${
                    activeSection === item.id
                      ? 'bg-purple-100 text-purple-700 shadow-inner'
                      : 'text-gray-700 hover:bg-purple-50 hover:text-purple-600'
                  }`}
                >
                  {item.label}
                </Link>
              ) : (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`block w-full text-left px-3 py-2 rounded-2xl text-base font-medium transition-all duration-300 ${
                    activeSection === item.id
                      ? 'bg-purple-100 text-purple-700 shadow-inner'
                      : 'text-gray-700 hover:bg-purple-50 hover:text-purple-600'
                  }`}
                >
                  {item.label}
                </button>
              )
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navigation;