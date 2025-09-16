import React from 'react';
import { Home, Bot, Scale, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

const Products = () => {
  const products = [
    {
      icon: <img src="/logos/homemates-logo.jpg" alt="Homemates AI - Roommate Matching Platform Logo" className="w-10 h-10 object-contain" />,
      name: "Homemates AI",
      description: "AI-native platform that intelligently matches you with your ideal flats and flatmates. Our advanced matching algorithm connects you with compatible roommates and properties that perfectly align with your lifestyle and preferences.",
      features: ["Friends search", "Plug & Play rooms", "Quality leads", "Interactive mobile app"],
      color: "bg-blue-100 text-blue-600",
      link: "https://homematesapp.in"
    },
    {
      icon: <Bot className="w-10 h-10" />,
      name: "Agentlybot",
      description: "Comprehensive marketplace for AI agents and workflows that empowers you to build custom AI agents. Create, customize, and deploy intelligent automation solutions tailored to your specific business requirements.",
      features: ["Voice Agents", "Workflows", "Agents Marketplace", "AI Agents"],
      color: "bg-purple-100 text-purple-600",
      link: "https://agentlybot.com"
    },
    {
      icon: <Scale className="w-10 h-10" />,
      name: "Evidence AI",
      description: "Advanced sentiment analysis application designed specifically for legal professionals. Analyze legal documents, contracts, and communications with AI-powered insights to strengthen your cases and improve legal outcomes.",
      features: ["Sentiment Analysis", "Legal Document Review", "Case Insights", "AI-Powered Reports"],
      color: "bg-green-100 text-green-600",
      link: "#"
    }
  ];

  const cardVariants = {
    offscreen: { opacity: 0, y: 40 },
    onscreen: { opacity: 1, y: 0, transition: { type: 'spring', bounce: 0.3, duration: 0.7 } }
  };

  return (
    <section id="products" className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            Our AI Products
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Innovative AI solutions that showcase our capabilities and help businesses transform
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product, index) => (
            <motion.div
              key={index}
              className="bg-gradient-to-br from-white/85 to-white/50 backdrop-blur-sm rounded-3xl p-8 shadow-lg hover:shadow-xl transition-all duration-500 transform hover:scale-105 hover:-translate-y-2 border border-white/30 flex flex-col h-full min-h-[400px]"
              style={{
                boxShadow: 'inset 0 6px 12px rgba(255, 255, 255, 0.9), inset 0 -6px 12px rgba(0, 0, 0, 0.06), 0 12px 40px rgba(0, 0, 0, 0.15), 0 4px 12px rgba(0, 0, 0, 0.1)',
              }}
              initial="offscreen"
              whileInView="onscreen"
              viewport={{ once: true, amount: 0.3 }}
              variants={cardVariants}
              whileHover={{ scale: 1.07, boxShadow: '0 0 24px 2px #6366f1' }}
            >
              <div className={`w-16 h-16 rounded-2xl ${product.color} flex items-center justify-center mb-6`}>
                {product.icon}
              </div>
              
              <h3 className="text-xl font-semibold text-gray-800 mb-3">
                {product.name}
              </h3>
              
              <p className="text-gray-600 leading-relaxed mb-6 flex-grow">
                {product.description}
              </p>

              <div className="flex flex-wrap gap-2 mb-6">
                {product.features.map((feature, featureIndex) => (
                  <span
                    key={featureIndex}
                    className="bg-gray-100 text-gray-600 px-3 py-1 rounded-full text-xs font-medium border border-gray-200 shadow-sm"
                  >
                    {feature}
                  </span>
                ))}
              </div>

              <div className="mt-auto">
                <motion.a
                  href={product.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center w-full bg-gradient-to-r from-blue-500 to-purple-600 text-white py-3 px-6 rounded-2xl font-semibold hover:shadow-lg transition-all duration-300 transform hover:scale-105"
                  whileHover={{ scale: 1.05, boxShadow: '0 0 16px 2px #6366f1' }}
                >
                  Try Demo
                  <ArrowRight className="w-4 h-4 ml-2" />
                </motion.a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Products;