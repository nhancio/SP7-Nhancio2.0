import React from 'react';
import { ArrowRight, Cloud, BarChart, Settings, Wifi, Instagram, Linkedin, Github } from 'lucide-react';

const pastelIcons = [
  { icon: <Cloud size={80} />, style: { top: '18%', right: '8%', color: '#CFFFE5' } },
  { icon: <BarChart size={72} />, style: { bottom: '12%', left: '10%', color: '#D9ECFF' } },
  { icon: <Settings size={80} />, style: { bottom: '18%', right: '12%', color: '#FFE5B4' } },
  { icon: <Wifi size={64} />, style: { bottom: '8%', left: '40%', color: '#E3D7FF' } },
  { icon: <Instagram size={64} />, style: { top: '10%', right: '30%', color: '#FADADD' } },
  { icon: <Linkedin size={64} />, style: { bottom: '10%', right: '30%', color: '#CFFFE5' } },
  { icon: <Github size={64} />, style: { top: '60%', right: '8%', color: '#D9ECFF' } },
];

const carouselSlides = [
  {
    image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=1200&q=80",
    headline: "AI, Data Science & Marketing — Powering Smarter Business Growth Worldwide",
    // subheadline: "Leading AI Agency in India"
  },
  {
    image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=1200&q=80",
    headline: "Transforming Insights into Impact with AI-Driven Strategies",
    // subheadline: "Top AI Consulting Agency"
  },
  {
    image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1200&q=80",
    headline: "Data to Decisions, AI to Growth, Marketing to Revenue",
    // subheadline: "Best AI Development Company"
  }
];

const Hero = () => {
  const [slide, setSlide] = React.useState(0);
  const [isTransitioning, setIsTransitioning] = React.useState(false);
  const touchStartX = React.useRef<number | null>(null);
  const touchEndX = React.useRef<number | null>(null);
  const autoSlideTimeout = React.useRef<number | null>(null);

  // Auto-advance every 3 seconds if no user action
  React.useEffect(() => {
    if (autoSlideTimeout.current) clearTimeout(autoSlideTimeout.current);
    autoSlideTimeout.current = window.setTimeout(() => {
      setSlide((prev) => (prev + 1) % carouselSlides.length);
    }, 3000);
    return () => {
      if (autoSlideTimeout.current) clearTimeout(autoSlideTimeout.current);
    };
  }, [slide]);

  // Touch handlers for swipe
  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
  };
  const handleTouchMove = (e: React.TouchEvent) => {
    touchEndX.current = e.touches[0].clientX;
  };
  const handleTouchEnd = () => {
    if (touchStartX.current !== null && touchEndX.current !== null) {
      const diff = touchStartX.current - touchEndX.current;
      if (Math.abs(diff) > 50) {
        if (diff > 0) {
          // Swipe left
          setSlide((prev) => (prev + 1) % carouselSlides.length);
        } else {
          // Swipe right
          setSlide((prev) => (prev - 1 + carouselSlides.length) % carouselSlides.length);
        }
      }
    }
    touchStartX.current = null;
    touchEndX.current = null;
  };

  const handleHeroButtonClick = (sectionId: string) => {
    if (window.location.pathname !== '/') {
      window.location.href = '/#' + sectionId;
      return;
    }
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="min-h-screen relative bg-gradient-to-br from-babyblue via-blush to-mint">
      {/* SEO-optimized heading structure */}
      <header className="sr-only">
        <h1>Nhancio - Leading AI Agency in India | Data Science, AI Agents & Marketing Solutions</h1>
      </header>
      
      {/* Floating pastel tech icons */}
      {pastelIcons.map((item, idx) => (
        <div
          key={idx}
          className="bg-icon-pastel"
          style={{ ...item.style, position: 'absolute' }}
          aria-hidden="true"
        >
          {React.cloneElement(item.icon, { style: { width: 96, height: 96, color: item.style.color } })}
        </div>
      ))}
      
      {/* Full-width Carousel */}
      <div className="relative w-full md:w-screen md:left-1/2 md:right-1/2 md:-ml-[50vw] md:-mr-[50vw] max-w-none px-0 py-0 overflow-x-hidden">
        <div
          className="relative rounded-xxl overflow-hidden soft-shadow mb-12 h-screen min-h-[32rem] flex items-center justify-center"
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
          role="region"
          aria-label="AI Services Carousel"
        >
          {/* Background Images with Smooth Transitions */}
          {carouselSlides.map((slideData, idx) => (
            <img
              key={idx}
              src={slideData.image}
              alt={`AI and Data Science Solutions - ${slideData.headline}`}
              className={`absolute inset-0 w-full h-full object-cover transition-all duration-1000 ease-in-out ${
                slide === idx 
                  ? 'opacity-100 scale-100' 
                  : 'opacity-0 scale-105'
              }`}
              style={{ zIndex: 1 }}
            />
          ))}
          {/* Removed gradient overlay to show original images without blur */}
          {/* Dynamic Flowing Text */}
          <div className="absolute inset-0 flex items-center justify-center z-20 text-center">
            {carouselSlides.map((slideData, idx) => (
              <div
                key={idx}
                className={`transition-all duration-1000 ease-in-out absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 ${
                  slide === idx 
                    ? 'opacity-100 scale-100' 
                    : 'opacity-0 scale-105 pointer-events-none'
                } w-full max-w-4xl px-4`}
              >
                <h2 className="text-4xl md:text-6xl font-bold text-white mb-4 drop-shadow-lg">
                  <span className="inline-block animate-fadeInUp w-full" style={{ animationDelay: '0.2s' }}>
                    {slideData.headline}
                  </span>
                </h2>
              </div>
            ))}
          </div>
          {/* Dots with Smooth Transitions */}
                    <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-3 z-30" aria-label="Carousel navigation">
            {carouselSlides.map((_, idx) => (
              <button
                key={idx}
                className={`w-4 h-4 rounded-full transition-all duration-500 transform hover:scale-125 ${
                  slide === idx 
                    ? 'bg-amber-400 scale-125 shadow-lg' 
                    : 'bg-white/60 hover:bg-white/80'
                } border-2 border-white/80 backdrop-blur-sm`}
                onClick={() => setSlide(idx)}
                aria-label={`Go to slide ${idx + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
      
      {/* Main content container */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center">
          {/* SEO-optimized content section */}
          <div className="mb-8">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4">
              Leading AI Agency in India - Data Science & AI Marketing Experts
            </h2>
            <p className="text-lg text-gray-600 max-w-4xl mx-auto leading-relaxed">
              Nhancio is a premier AI agency and data science consulting company founded by IITians. 
              We specialize in artificial intelligence, machine learning, AI agents, 
              LLMs, and AI marketing solutions. Our expertise in automation, 
              n8n workflows, and digital transformation helps businesses achieve 
              intelligent growth through innovative AI solutions and marketing automation.
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <button
              className="bg-mint text-gray-800 px-8 py-4 rounded-xxl font-semibold hover:bg-peach transition-all duration-300 soft-shadow hover:shadow-xl transform hover:scale-105"
              onClick={() => handleHeroButtonClick('contact')}
              aria-label="Start Your AI Project"
            >
              Start Your AI Project
            </button>
            <button
              className="bg-blush text-purple-700 px-8 py-4 rounded-xxl font-semibold border-2 border-purple-200 hover:bg-lavender transition-all duration-300 soft-shadow hover:shadow-xl transform hover:scale-105"
              onClick={() => handleHeroButtonClick('clients')}
              aria-label="Explore Our AI Solutions"
            >
              Explore Our AI Solutions
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;