import React from 'react';
import { Code, Brain, Rocket, ArrowRight } from 'lucide-react';

const Hero = () => {
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

  return (
    <section id="home" className="min-h-screen bg-gradient-to-br from-purple-50 via-blue-50 to-green-50 pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-gray-800 mb-6">
            Engineering Innovation.
            <br />
            <span className="text-purple-600">Empowering with AI.</span>
          </h1>
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