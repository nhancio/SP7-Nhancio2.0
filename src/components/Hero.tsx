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

const heroHeadlines = [
  "AI Agents That Think, Act & Orchestrate — Autonomy-First",
  "Multi-Agent Systems & LLMs — From Data to Decisions, Automatically",
  "Build Agentic Workflows. Deploy Intelligent Automation. Scale with AI.",
];

const Hero = () => {
  const [slide, setSlide] = React.useState(0);
  const touchStartX = React.useRef<number | null>(null);
  const touchEndX = React.useRef<number | null>(null);
  const autoSlideTimeout = React.useRef<number | null>(null);

  // Auto-advance headline every 4 seconds
  React.useEffect(() => {
    if (autoSlideTimeout.current) clearTimeout(autoSlideTimeout.current);
    autoSlideTimeout.current = window.setTimeout(() => {
      setSlide((prev) => (prev + 1) % heroHeadlines.length);
    }, 4000);
    return () => {
      if (autoSlideTimeout.current) clearTimeout(autoSlideTimeout.current);
    };
  }, [slide]);

  // Touch handlers for swipe (headline rotation)
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
          setSlide((prev) => (prev + 1) % heroHeadlines.length);
        } else {
          setSlide((prev) => (prev - 1 + heroHeadlines.length) % heroHeadlines.length);
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
        <h1>Nhancio - AI-Agentic First Agency | Autonomous Agents, Multi-Agent Systems & Intelligent Automation</h1>
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
      
      {/* Hero with video background */}
      <div className="relative w-full md:w-screen md:left-1/2 md:right-1/2 md:-ml-[50vw] md:-mr-[50vw] max-w-none px-0 py-0 overflow-x-hidden">
        <div
          className="relative rounded-xxl overflow-hidden soft-shadow mb-12 h-screen min-h-[32rem] flex items-center justify-center"
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
          role="region"
          aria-label="AI Agentic Hero"
        >
          {/* Video background – use BASE_URL so it works on Netlify/production */}
          <video
            autoPlay
            muted
            loop
            playsInline
            className="absolute inset-0 w-full h-full object-cover"
            style={{ zIndex: 0 }}
          >
            <source src={`${import.meta.env.BASE_URL}media/hero-back.mp4`} type="video/mp4" />
          </video>
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-black/50 z-10" aria-hidden="true" />
          {/* Rotating headlines */}
          <div className="absolute inset-0 flex items-center justify-center z-20 text-center">
            {heroHeadlines.map((headline, idx) => (
              <div
                key={idx}
                className={`transition-all duration-1000 ease-in-out absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 ${
                  slide === idx
                    ? 'opacity-100 scale-100'
                    : 'opacity-0 scale-105 pointer-events-none'
                } w-full max-w-4xl px-4`}
              >
                <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 drop-shadow-lg">
                  <span className="inline-block animate-fadeInUp w-full" style={{ animationDelay: '0.2s' }}>
                    {headline}
                  </span>
                </h2>
              </div>
            ))}
          </div>
          <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-3 z-30" aria-label="Headline navigation">
            {heroHeadlines.map((_, idx) => (
              <button
                key={idx}
                className={`w-4 h-4 rounded-full transition-all duration-500 transform hover:scale-125 ${
                  slide === idx ? 'bg-amber-400 scale-125 shadow-lg' : 'bg-white/60 hover:bg-white/80'
                } border-2 border-white/80 backdrop-blur-sm`}
                onClick={() => setSlide(idx)}
                aria-label={`Headline ${idx + 1}`}
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
              AI-Agentic First — Autonomous Agents, Orchestration & Intelligent Automation
            </h2>
            <p className="text-lg text-gray-600 max-w-4xl mx-auto leading-relaxed">
              Nhancio is a premier AI-agentic agency founded by IITians. We build autonomous AI agents, 
              multi-agent systems, and agentic workflows powered by LLMs and tool-use. From RAG and 
              reasoning to n8n automation and data science, we deliver autonomy-first solutions that 
              think, act, and orchestrate—so your business scales with intelligent automation.
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