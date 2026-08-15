import React, { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Menu, X, Sparkles } from 'lucide-react';
import BrandLogo from './BrandLogo';

interface LocationState {
  scrollTo?: string;
}

const navItems = [
  { id: 'home', label: 'Home' },
  { id: 'services', label: 'Services' },
  { id: 'products', label: 'Showcases' },
  { id: 'achievements', label: 'Achievements' },
  { id: 'about', label: 'About Us' },
  { id: 'faq', label: 'FAQ' },
  { id: 'careers', label: 'Careers', isPage: true },
  { id: 'blogs', label: 'Blog', isPage: true },
  { id: 'contact', label: 'Contact' }
];

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const location = useLocation();
  const navigate = useNavigate();

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
    // If not on home, navigate to home and scroll after navigation
    if (location.pathname !== '/') {
      navigate('/', { state: { scrollTo: sectionId } });
      setIsMenuOpen(false);
      return;
    }
    // Handle section scrolling on home page
    setTimeout(() => {
      const section = document.getElementById(sectionId);
      if (section) {
        section.scrollIntoView({ behavior: 'smooth' });
      }
    }, 100);
    setIsMenuOpen(false);
  };

  useEffect(() => {
    const state = location.state as LocationState | null;
    if (location.pathname === '/' && state?.scrollTo) {
      const sectionId = state.scrollTo;
      setTimeout(() => {
        const section = document.getElementById(sectionId);
        if (section) {
          section.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    }
  }, [location]);

  return (
    <nav className="fixed top-0 w-full z-50 bg-white/85 backdrop-blur-md shadow-sm border-b border-gray-100 transition-all duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <Link to="/" aria-label="Nhancio Home" className="flex items-center gap-2 focus:outline-none">
                <BrandLogo />
              </Link>
            </div>
          </div>
          
          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center space-x-1 xl:space-x-2">
            {navItems.map((item) => (
              item.isPage ? (
                <Link
                  key={item.id}
                  to={`/${item.id}`}
                  className={`px-3 py-1.5 rounded-xl text-xs xl:text-sm font-medium transition-all duration-200 ${
                    activeSection === item.id
                      ? 'bg-purple-50 text-purple-700 font-semibold shadow-xs' 
                      : 'text-gray-600 hover:text-purple-600 hover:bg-gray-50'
                  }`}
                >
                  {item.label}
                </Link>
              ) : (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`px-3 py-1.5 rounded-xl text-xs xl:text-sm font-medium transition-all duration-200 cursor-pointer ${
                    activeSection === item.id
                      ? 'bg-purple-50 text-purple-700 font-semibold shadow-xs' 
                      : 'text-gray-600 hover:text-purple-600 hover:bg-gray-50'
                  }`}
                >
                  {item.label}
                </button>
              )
            ))}

            <button
              onClick={() => scrollToSection('contact')}
              className="ml-2 inline-flex items-center gap-1.5 px-4 py-1.5 rounded-xl text-xs xl:text-sm font-semibold bg-gradient-to-r from-purple-600 to-indigo-600 text-white shadow-md hover:shadow-lg hover:from-purple-700 hover:to-indigo-700 transition-all duration-200 transform hover:scale-[1.02] cursor-pointer"
            >
              <Sparkles className="w-3.5 h-3.5" />
              <span>Get in Touch</span>
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden flex items-center gap-2">
            <button
              onClick={() => scrollToSection('contact')}
              className="px-3 py-1.5 rounded-xl text-xs font-semibold bg-purple-600 text-white shadow-sm hover:bg-purple-700"
            >
              Contact
            </button>
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
              aria-expanded={isMenuOpen}
              className="inline-flex items-center justify-center p-2 rounded-xl text-gray-700 hover:text-purple-600 hover:bg-purple-50 transition-all duration-200"
            >
              {isMenuOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="lg:hidden bg-white/95 backdrop-blur-lg border-t border-gray-100 shadow-xl max-h-[85vh] overflow-y-auto">
          <div className="px-4 pt-3 pb-5 space-y-1.5">
            {navItems.map((item) => (
              item.isPage ? (
                <Link
                  key={item.id}
                  to={`/${item.id}`}
                  onClick={() => setIsMenuOpen(false)}
                  className={`block w-full text-left px-4 py-2.5 rounded-xl text-sm font-medium transition-all duration-200 ${
                    activeSection === item.id
                      ? 'bg-purple-50 text-purple-700 font-semibold' 
                      : 'text-gray-700 hover:bg-gray-50'
                  }`}
                >
                  {item.label}
                </Link>
              ) : (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`block w-full text-left px-4 py-2.5 rounded-xl text-sm font-medium transition-all duration-200 ${
                    activeSection === item.id
                      ? 'bg-purple-50 text-purple-700 font-semibold' 
                      : 'text-gray-700 hover:bg-gray-50'
                  }`}
                >
                  {item.label}
                </button>
              )
            ))}
            <div className="pt-2">
              <button
                onClick={() => scrollToSection('contact')}
                className="w-full flex items-center justify-center gap-2 px-4 py-3 rounded-xl text-sm font-semibold bg-gradient-to-r from-purple-600 to-indigo-600 text-white shadow-md"
              >
                <Sparkles className="w-4 h-4" />
                <span>Start Your AI Project</span>
              </button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navigation;
