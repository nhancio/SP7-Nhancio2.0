import React from 'react';
import { Code, Brain, Rocket, ArrowRight, Cloud, BarChart, Settings, Wifi, Instagram, Linkedin, Github } from 'lucide-react';

const pastelIcons = [
  { icon: <Brain size={96} />, style: { top: '8%', left: '6%', color: '#E3D7FF' } },
  { icon: <Cloud size={80} />, style: { top: '18%', right: '8%', color: '#CFFFE5' } },
  { icon: <BarChart size={72} />, style: { bottom: '12%', left: '10%', color: '#D9ECFF' } },
  { icon: <Settings size={80} />, style: { bottom: '18%', right: '12%', color: '#FFE5B4' } },
  { icon: <Code size={72} />, style: { top: '50%', left: '2%', color: '#FADADD' } },
  { icon: <Wifi size={64} />, style: { bottom: '8%', left: '40%', color: '#E3D7FF' } },
  { icon: <Instagram size={64} />, style: { top: '10%', right: '30%', color: '#FADADD' } },
  { icon: <Linkedin size={64} />, style: { bottom: '10%', right: '30%', color: '#CFFFE5' } },
  { icon: <Github size={64} />, style: { top: '60%', right: '8%', color: '#D9ECFF' } },
];

const carouselSlides = [
  {
    image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=1200&q=80",
    headline: "Engineering Innovation.",
    subheadline: "Empowering with AI."
  },
  {
    image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=1200&q=80",
    headline: "AI for Business Growth.",
    subheadline: "Transforming Ideas into Reality."
  },
  {
    image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1200&q=80",
    headline: "Intelligent Automation.",
    subheadline: "Future-Ready Solutions."
  }
];

const offerings = [
  {
    icon: <Code className="w-8 h-8" />,
    title: "Web, App & Software Development",
    description: "Custom solutions built with cutting-edge technology"
  },
  {
    icon: <Brain className="w-8 h-8" />,
    title: "AI, n8n Automation & Data Science",
    description: "Intelligent automation and data-driven insights"
  },
  {
    icon: <Rocket className="w-8 h-8" />,
    title: "Marketing, Design & Product Development",
    description: "End-to-end product lifecycle management"
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
      {/* Floating pastel tech icons */}
      {pastelIcons.map((item, idx) => (
        <div
          key={idx}
          className="bg-icon-pastel"
          style={{ ...item.style, position: 'absolute' }}
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
        >
          {/* Background Images with Smooth Transitions */}
          {carouselSlides.map((slideData, idx) => (
            <img
              key={idx}
              src={slideData.image}
              alt={slideData.headline}
              className={`absolute inset-0 w-full h-full object-cover transition-all duration-1000 ease-in-out ${
                slide === idx 
                  ? 'opacity-100 scale-100' 
                  : 'opacity-0 scale-105'
              }`}
              style={{ zIndex: 1 }}
            />
          ))}
          {/* Enhanced Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-br from-babyblue/80 via-blush/60 to-mint/80 z-10" style={{mixBlendMode:'lighten'}}></div>
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
                <h1 className="text-4xl md:text-6xl font-bold text-gray-800 mb-4 drop-shadow-lg">
                  <span className="inline-block animate-fadeInUp w-full" style={{ animationDelay: '0.2s' }}>
                    {slideData.headline}
                  </span>
                  <br />
                  <span className="text-amber-400 inline-block animate-fadeInUp w-full" style={{ animationDelay: '0.4s' }}>
                    {slideData.subheadline}
                  </span>
                </h1>
              </div>
            ))}
          </div>
          {/* Dots with Smooth Transitions */}
          <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-3 z-30">
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
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <button
              className="bg-mint text-gray-800 px-8 py-4 rounded-xxl font-semibold hover:bg-peach transition-all duration-300 soft-shadow hover:shadow-xl transform hover:scale-105"
              onClick={() => handleHeroButtonClick('contact')}
            >
              Start Your Project
            </button>
            <button
              className="bg-blush text-purple-700 px-8 py-4 rounded-xxl font-semibold border-2 border-purple-200 hover:bg-lavender transition-all duration-300 soft-shadow hover:shadow-xl transform hover:scale-105"
              onClick={() => handleHeroButtonClick('clients')}
            >
              Explore Our Work
            </button>
          </div>
          <div className="grid md:grid-cols-3 gap-8 mt-20">
            {offerings.map((offering, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-white/80 to-babyblue/40 backdrop-blur-sm rounded-xxl p-8 soft-shadow hover:shadow-xl transition-all duration-500 transform hover:scale-105 hover:shadow-2xl border border-white/20"
                style={{
                  boxShadow: 'inset 0 4px 8px rgba(255, 255, 255, 0.8), inset 0 -4px 8px rgba(0, 0, 0, 0.05), 0 8px 32px rgba(0, 0, 0, 0.12), 0 2px 8px rgba(0, 0, 0, 0.08)',
                }}
              >
                <div className="text-purple-600 mb-4 flex justify-center">
                  {offering.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-800 mb-3">
                  {offering.title}
                </h3>
                <p className="text-gray-600 mb-4">
                  {offering.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;