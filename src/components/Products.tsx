import React from 'react';
import { Home, Bot, Cpu, ArrowRight } from 'lucide-react';

const Products = () => {
  const products = [
    {
      icon: <img src="/logos/homemates-logo.jpg" alt="Homemates AI" className="w-10 h-10 object-contain" />,
      name: "Homemates AI",
      description: "Smart home automation platform that learns your preferences and optimizes energy consumption",
      features: ["Voice Control", "Energy Optimization", "Predictive Maintenance", "Mobile App"],
      color: "bg-blue-100 text-blue-600",
      gradient: "from-blue-400 to-blue-600",
      link: "https://homematesapp.in"
    },
    {
      icon: <Bot className="w-10 h-10" />,
      name: "Agentlybot",
      description: "Complete workflow automation platform for businesses to streamline operations",
      features: ["No-Code Builder", "API Integrations", "Real-time Analytics", "Team Collaboration"],
      color: "bg-purple-100 text-purple-600",
      gradient: "from-purple-400 to-purple-600",
      link: "https://agentlybot.com"
    },
    {
      icon: <Cpu className="w-10 h-10" />,
      name: "Nhancio GPT Toolkit",
      description: "Custom AI models and tools for businesses to integrate intelligent features",
      features: ["Custom Training", "API Access", "Multi-language Support", "Fine-tuning"],
      color: "bg-green-100 text-green-600",
      gradient: "from-green-400 to-green-600",
      link: "#"
    }
  ];

  return (
    <section id="products" className="py-20 bg-gradient-to-br from-cyan-50 via-blue-50 to-indigo-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            Flagship Products
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Innovative solutions that showcase our AI capabilities and help businesses transform
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {products.map((product, index) => (
            <div
              key={index}
              className="bg-gradient-to-br from-white/85 to-white/50 backdrop-blur-sm rounded-3xl p-8 shadow-lg hover:shadow-xl transition-all duration-500 transform hover:scale-105 group border border-white/30"
              style={{
                boxShadow: 'inset 0 6px 12px rgba(255, 255, 255, 0.9), inset 0 -6px 12px rgba(0, 0, 0, 0.06), 0 12px 40px rgba(0, 0, 0, 0.15), 0 4px 12px rgba(0, 0, 0, 0.1)',
              }}
            >
              <div className={`w-16 h-16 rounded-2xl ${product.color} flex items-center justify-center mb-6`}>
                {product.icon}
              </div>
              
              <h3 className="text-2xl font-bold text-gray-800 mb-4">
                {product.name}
              </h3>
              
              <p className="text-gray-600 mb-6 leading-relaxed">
                {product.description}
              </p>

              <div className="space-y-2 mb-8">
                {product.features.map((feature, featureIndex) => (
                  <div key={featureIndex} className="flex items-center">
                    <div className="w-2 h-2 bg-purple-500 rounded-full mr-3"></div>
                    <span className="text-gray-700 text-sm">{feature}</span>
                  </div>
                ))}
              </div>

              <div className="flex gap-3">
                <a
                  href={product.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`flex-1 bg-gradient-to-r ${product.gradient} text-white py-3 px-6 rounded-2xl font-semibold hover:shadow-lg transition-all duration-300 transform hover:scale-105 text-center`}
                >
                  Try Demo
                </a>
                <a
                  href={product.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center w-12 h-12 bg-gray-100 text-gray-600 rounded-2xl hover:bg-gray-200 transition-all duration-300 group-hover:bg-gray-200"
                >
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Products;