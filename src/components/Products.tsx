import React from 'react';
import { Home, Bot, Cpu, ArrowRight } from 'lucide-react';

const Products = () => {
  const products = [
    {
      icon: <img src="/logos/homemates-logo.jpg" alt="Homemates AI" className="w-10 h-10 object-contain" />,
      name: "Homemates AI",
      description: "AI native platform to match you with preferred flats and flatmates",
      features: ["Friends search", "Plug & Play rooms", "Quality leads", "Interactive mobile app"],
      color: "bg-blue-100 text-blue-600",
      gradient: "from-blue-400 to-blue-600",
      link: "https://homematesapp.in"
    },
    {
      icon: <Bot className="w-10 h-10" />,
      name: "Agentlybot",
      description: "Marketplace for AI agents and workflows to build your own AI agents",
      features: ["Voice Agents", "Workflows", "Agents Marketplace", "AI Agents"],
      color: "bg-purple-100 text-purple-600",
      gradient: "from-purple-400 to-purple-600",
      link: "https://agentlybot.com"
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

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:grid-cols-2 xl:grid-cols-2">
          {products.map((product, index) => (
            <div
              key={index}
              className="bg-gradient-to-br from-white/85 to-white/50 backdrop-blur-sm rounded-3xl px-10 py-6 shadow-lg hover:shadow-xl transition-all duration-500 transform hover:scale-[1.01] group border border-white/30 flex flex-col md:flex-row items-center min-h-[220px] md:min-h-[180px] xl:min-h-[160px] w-full"
              style={{
                boxShadow: 'inset 0 6px 12px rgba(255, 255, 255, 0.9), inset 0 -6px 12px rgba(0, 0, 0, 0.06), 0 12px 40px rgba(0, 0, 0, 0.15), 0 4px 12px rgba(0, 0, 0, 0.1)',
                maxWidth: '900px',
                margin: '0 auto',
              }}
            >
              <div className={`w-20 h-20 rounded-2xl ${product.color} flex items-center justify-center mb-0 md:mb-0 md:mr-8`}>
                {product.icon}
              </div>
              <div className="flex-1 flex flex-col justify-center">
                <h3 className="text-2xl font-bold text-gray-800 mb-2">
                  {product.name}
                </h3>
                <p className="text-gray-600 mb-2 leading-relaxed">
                  {product.description}
                </p>
                <div className="flex flex-wrap gap-4 mb-4">
                  {product.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center">
                      <div className="w-2 h-2 bg-purple-500 rounded-full mr-2"></div>
                      <span className="text-gray-700 text-sm">{feature}</span>
                    </div>
                  ))}
                </div>
                <div className="flex gap-3 mt-auto">
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
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Products;