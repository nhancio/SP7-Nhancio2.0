import React from 'react';
import { Code, Brain, Rocket, ArrowRight, ChevronLeft, ChevronRight } from 'lucide-react';

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

  React.useEffect(() => {
    const interval = setInterval(() => {
      setSlide((prev) => (prev + 1) % carouselSlides.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="home" className="min-h-screen bg-gradient-to-br from-purple-50 via-blue-50 to-green-50 pt-20">
      {/* Full-width Carousel */}
      <div className="relative w-screen left-1/2 right-1/2 -ml-[50vw] -mr-[50vw] max-w-none px-0 py-0">
        <div className="relative rounded-none overflow-hidden shadow-xl mb-12 h-[28rem] md:h-[38rem] flex items-center justify-center">
          <img
            src={carouselSlides[slide].image}
            alt={carouselSlides[slide].headline}
            className="absolute inset-0 w-full h-full object-cover transition-all duration-700"
            style={{ zIndex: 1 }}
          />
          <div className="absolute inset-0 bg-gradient-to-br from-black/60 via-black/30 to-transparent z-10"></div>
          <div className="relative z-20 text-center w-full">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-4 drop-shadow-lg">
              {carouselSlides[slide].headline}
              <br />
              <span className="text-amber-400">{carouselSlides[slide].subheadline}</span>
            </h1>
          </div>
          {/* Carousel Controls */}
          <button
            className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/70 hover:bg-white text-purple-600 rounded-full p-2 shadow transition"
            onClick={() => setSlide((slide - 1 + carouselSlides.length) % carouselSlides.length)}
            aria-label="Previous"
            style={{ zIndex: 30 }}
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
          <button
            className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/70 hover:bg-white text-purple-600 rounded-full p-2 shadow transition"
            onClick={() => setSlide((slide + 1) % carouselSlides.length)}
            aria-label="Next"
            style={{ zIndex: 30 }}
          >
            <ChevronRight className="w-6 h-6" />
          </button>
          {/* Dots */}
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 z-30">
            {carouselSlides.map((_, idx) => (
              <button
                key={idx}
                className={`w-3 h-3 rounded-full ${slide === idx ? 'bg-amber-400' : 'bg-white/60'} border border-white`}
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
          <p className="text-xl text-gray-600 mb-12 max-w-3xl mx-auto">
            A dream by IITians to build the future with AI. We transform ideas into 
            intelligent solutions that drive business growth and innovation.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <button className="bg-purple-600 text-white px-8 py-4 rounded-2xl font-semibold hover:bg-purple-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105">
              Start Your Project
            </button>
            <button className="bg-white text-purple-600 px-8 py-4 rounded-2xl font-semibold border-2 border-purple-600 hover:bg-purple-50 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105">
              Explore Our Work
            </button>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mt-20">
            {offerings.map((offering, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-white/80 to-white/40 backdrop-blur-sm rounded-3xl p-8 shadow-lg hover:shadow-xl transition-all duration-500 transform hover:scale-105 hover:shadow-2xl border border-white/20"
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
                <button className="text-purple-600 font-medium flex items-center justify-center gap-2 group">
                  Learn More
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;