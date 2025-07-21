import React from 'react';
import { Home, Bot, Cpu, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

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

  // Animation variants
  const cardVariants = {
    offscreen: { opacity: 0, y: 60 },
    onscreen: { opacity: 1, y: 0, transition: { type: 'spring', bounce: 0.3, duration: 0.8 } }
  };
  const featureVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: (i) => ({ opacity: 1, x: 0, transition: { delay: i * 0.12 } })
  };

  return (
    <section id="products" className="relative py-20 overflow-hidden">
      {/* Animated Gradient Background */}
      <div className="absolute inset-0 -z-10 animate-gradient-move bg-gradient-to-br from-cyan-500/20 via-blue-400/10 to-indigo-500/20 blur-2xl opacity-80" />
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
            <motion.div
              key={index}
              className="relative bg-gradient-to-br from-white/85 to-white/50 backdrop-blur-sm rounded-3xl px-10 py-6 shadow-lg border border-white/30 flex flex-col md:flex-row items-center min-h-[220px] md:min-h-[180px] xl:min-h-[160px] w-full group overflow-hidden"
              style={{
                boxShadow: 'inset 0 6px 12px rgba(255, 255, 255, 0.9), inset 0 -6px 12px rgba(0, 0, 0, 0.06), 0 12px 40px rgba(0, 0, 0, 0.15), 0 4px 12px rgba(0, 0, 0, 0.1)',
                maxWidth: '900px',
                margin: '0 auto',
              }}
              initial="offscreen"
              whileInView="onscreen"
              viewport={{ once: true, amount: 0.3 }}
              variants={cardVariants}
              whileHover={{ scale: 1.03, boxShadow: '0 0 32px 4px #6366f1, 0 8px 40px rgba(0,0,0,0.18)' }}
            >
              {/* Glowing border on hover */}
              <div className="absolute inset-0 pointer-events-none rounded-3xl group-hover:shadow-[0_0_32px_4px_#6366f1] transition-all duration-500" />
              <div className={`w-20 h-20 rounded-2xl ${product.color} flex items-center justify-center mb-0 md:mb-0 md:mr-8 shadow-lg group-hover:shadow-xl transition-all duration-500`}>{product.icon}</div>
              <div className="flex-1 flex flex-col justify-center">
                <h3 className="text-2xl font-bold text-gray-800 mb-2 tracking-tight">
                  {product.name}
                </h3>
                <p className="text-gray-600 mb-2 leading-relaxed">
                  {product.description}
                </p>
                <div className="flex flex-wrap gap-4 mb-4">
                  {product.features.map((feature, featureIndex) => (
                    <motion.div
                      key={featureIndex}
                      className="flex items-center"
                      custom={featureIndex}
                      initial="hidden"
                      whileInView="visible"
                      viewport={{ once: true, amount: 0.7 }}
                      variants={featureVariants}
                    >
                      <div className="w-2 h-2 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full mr-2 animate-pulse" />
                      <span className="text-gray-700 text-sm font-mono tracking-wide">
                        {feature}
                      </span>
                    </motion.div>
                  ))}
                </div>
                <div className="flex gap-3 mt-auto">
                  <motion.a
                    href={product.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`flex-1 bg-gradient-to-r ${product.gradient} text-white py-3 px-6 rounded-2xl font-semibold hover:shadow-lg transition-all duration-300 transform hover:scale-105 text-center animate-pulse-slow`}
                    whileHover={{ scale: 1.08, boxShadow: '0 0 16px 2px #6366f1' }}
                  >
                    Try Demo
                  </motion.a>
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
            </motion.div>
          ))}
        </div>
      </div>
      {/* Keyframes for animated gradient background */}
      <style>{`
        @keyframes gradient-move {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
        .animate-gradient-move {
          background-size: 200% 200%;
          animation: gradient-move 8s ease-in-out infinite;
        }
        .animate-pulse-slow {
          animation: pulse 2.5s cubic-bezier(0.4, 0, 0.6, 1) infinite;
        }
      `}</style>
    </section>
  );
};

export default Products;