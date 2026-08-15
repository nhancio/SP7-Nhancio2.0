import React from 'react';
import { ArrowRight, Bot, Sparkles } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const heroHeadlines = [
  "RalphAI & NFLA App: Autonomous Multi-Agent Frameworks Engineered by IITians",
  "From Reasoning to Execution — Enterprise Multi-Agent Systems & Tool-Use",
  "Aura+, MagicBox AI UGC Factory & IntelliAsset: Scalable AI Products Built for Real-World Impact",
];

const keyStats = [
  { value: "8+", label: "Flagship AI Systems", sub: "RalphAI, NFLA App, Aura+, MagicBox..." },
  { value: "500k+", label: "Automated Actions", sub: "Closed-loop execution" },
  { value: "99.4%", label: "Task Convergence", sub: "Resilient state machines" },
  { value: "Govt & T-Hub", label: "Recognized & Incubated", sub: "Mathhack 2.0 Winners" },
];

const Hero = () => {
  const [slide, setSlide] = React.useState(0);
  const touchStartX = React.useRef<number | null>(null);
  const touchEndX = React.useRef<number | null>(null);
  const autoSlideTimeout = React.useRef<number | null>(null);

  // Auto-advance headline every 4.5 seconds
  React.useEffect(() => {
    if (autoSlideTimeout.current) clearTimeout(autoSlideTimeout.current);
    autoSlideTimeout.current = window.setTimeout(() => {
      setSlide((prev) => (prev + 1) % heroHeadlines.length);
    }, 4500);
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
    <section id="home" className="relative bg-gradient-to-br from-babyblue via-blush to-mint pt-16 overflow-hidden">
      {/* SEO-optimized heading structure */}
      <header className="sr-only">
        <h1>Nhancio - Elite AI Agency | Autonomous Agents (RalphAI, NFLA App), Multi-Agent Systems & AI Products</h1>
      </header>
      
      {/* Hero with video background */}
      <div className="relative w-full md:w-screen md:left-1/2 md:right-1/2 md:-ml-[50vw] md:-mr-[50vw] max-w-none px-0 py-0 overflow-x-hidden">
        <div
          className="relative rounded-b-3xl md:rounded-b-[40px] overflow-hidden soft-shadow h-[72vh] min-h-[32rem] max-h-[46rem] flex items-center justify-center"
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
          role="region"
          aria-label="AI Agentic Hero"
        >
          {/* Video background with valid poster thumbnail for Video SEO */}
          <video
            autoPlay
            muted
            loop
            playsInline
            preload="metadata"
            poster="/media/hero-poster.jpg"
            title="Nhancio Autonomous AI Agents & Multi-Agent Systems Showreel"
            aria-label="Nhancio Autonomous AI Agents & Multi-Agent Systems Showreel"
            className="absolute inset-0 w-full h-full object-cover"
            style={{ zIndex: 0 }}
          >
            <source src={`${import.meta.env.BASE_URL}media/hero-back.mp4`} type="video/mp4" />
          </video>
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-black/60 z-10" aria-hidden="true" />
          
          {/* Badge & Rotating headlines */}
          <div className="absolute inset-0 flex flex-col items-center justify-center z-20 text-center px-4">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/20 backdrop-blur-md border border-white/30 text-white text-xs sm:text-sm font-medium mb-6 animate-fadeInUp">
              <Sparkles className="w-4 h-4 text-amber-300" />
              <span>Founded by IITians • Leading AI Agency & Venture Lab</span>
            </div>

            {/* Non-overlapping Rotating Headline via AnimatePresence mode="wait" */}
            <div className="relative w-full max-w-5xl min-h-[7rem] sm:min-h-[6.5rem] md:min-h-[8rem] flex items-center justify-center">
              <AnimatePresence mode="wait">
                <motion.div
                  key={slide}
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -15 }}
                  transition={{ duration: 0.4, ease: "easeInOut" }}
                  className="w-full px-4 text-center"
                >
                  <h2 className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-white drop-shadow-xl tracking-tight leading-tight">
                    {heroHeadlines[slide]}
                  </h2>
                </motion.div>
              </AnimatePresence>
            </div>

            <p className="text-gray-200 text-sm sm:text-lg max-w-3xl mx-auto mt-4 line-clamp-2 sm:line-clamp-none drop-shadow-md">
              We design, build, and deploy production-grade autonomous agent frameworks, multi-agent reasoning loops, and scalable multimodal AI applications.
            </p>

            <div className="flex flex-wrap gap-4 justify-center mt-8">
              <button
                className="bg-purple-600 hover:bg-purple-700 text-white px-7 py-3.5 rounded-2xl font-semibold transition-all duration-300 shadow-lg hover:shadow-purple-500/30 transform hover:scale-105 flex items-center gap-2 cursor-pointer"
                onClick={() => handleHeroButtonClick('products')}
                aria-label="Explore AI Project Showcases"
              >
                <span>Explore Showcase Projects</span>
                <ArrowRight className="w-4 h-4" />
              </button>
              <button
                className="bg-white/20 hover:bg-white/30 text-white px-7 py-3.5 rounded-2xl font-semibold border border-white/40 backdrop-blur-md transition-all duration-300 shadow-md transform hover:scale-105 cursor-pointer"
                onClick={() => handleHeroButtonClick('contact')}
                aria-label="Start Your AI Project"
              >
                <span>Schedule Consultation</span>
              </button>
            </div>
          </div>

          {/* Slider dots */}
          <div className="absolute bottom-5 left-1/2 -translate-x-1/2 flex gap-2.5 z-30" aria-label="Headline navigation">
            {heroHeadlines.map((_, idx) => (
              <button
                key={idx}
                className={`w-3.5 h-3.5 rounded-full transition-all duration-300 transform hover:scale-125 cursor-pointer ${
                  slide === idx ? 'bg-amber-400 scale-110 shadow-lg' : 'bg-white/50 hover:bg-white/80'
                } border border-white/80 backdrop-blur-sm`}
                onClick={() => setSlide(idx)}
                aria-label={`Headline ${idx + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
      
      {/* Live Stats Strip */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-6 sm:-mt-8 z-30">
        <div 
          className="bg-white/90 backdrop-blur-xl rounded-3xl p-6 sm:p-8 shadow-xl border border-white/60 grid grid-cols-2 md:grid-cols-4 gap-6 text-center"
          style={{
            boxShadow: '0 20px 40px -15px rgba(0,0,0,0.1), inset 0 2px 4px rgba(255,255,255,0.8)',
          }}
        >
          {keyStats.map((stat, idx) => (
            <div key={idx} className="flex flex-col items-center justify-center p-2 border-r last:border-r-0 border-gray-100">
              <span className="text-2xl sm:text-4xl font-extrabold bg-gradient-to-r from-purple-700 to-indigo-600 bg-clip-text text-transparent mb-1">
                {stat.value}
              </span>
              <span className="text-xs sm:text-sm font-bold text-gray-800 tracking-tight">
                {stat.label}
              </span>
              <span className="text-[11px] sm:text-xs text-gray-500 mt-0.5">
                {stat.sub}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Main positioning content */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 sm:py-28">
        <div className="text-center max-w-4xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-purple-100 text-purple-700 text-xs font-semibold uppercase tracking-wider mb-4">
            <Bot className="w-3.5 h-3.5" />
            <span>Autonomous Intelligence & Multi-Agent Engineering</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-gray-900 mb-6 tracking-tight">
            Autonomy-First Architecture for High-Growth Startups & Enterprises
          </h2>
          <p className="text-base sm:text-lg text-gray-600 leading-relaxed">
            Nhancio is an elite AI-agentic engineering firm founded by IITians. We specialize in building resilient multi-agent systems, deterministic state machines, LLM reasoning pipelines, and end-to-end multimodal platforms. From our event automation engine <strong>NFLA App</strong> and restaurant marketing system <strong>RalphAI</strong> to consumer ecosystems like <strong>Aura+</strong> and our <strong>MagicBox AI UGC Factory</strong>, we turn research-grade AI into defensible business value.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Hero;