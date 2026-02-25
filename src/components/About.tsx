import React from 'react';
import { Target, Eye, Heart } from 'lucide-react';
import { motion } from 'framer-motion';

const About = () => {
  const cardVariants = {
    offscreen: { opacity: 0, y: 40 },
    onscreen: { opacity: 1, y: 0, transition: { type: 'spring', bounce: 0.3, duration: 0.7 } }
  };
  return (
    <section id="about" className="py-20 bg-gradient-to-br from-purple-50 via-pink-50 to-orange-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            AI-Agentic First: A Dream by IITians to Build the Future
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            From research to production—autonomous agents and intelligent systems that scale.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <motion.div
              className="bg-gradient-to-br from-white/85 to-white/50 backdrop-blur-sm rounded-3xl p-8 shadow-lg border border-white/30"
              style={{
                boxShadow: 'inset 0 6px 12px rgba(255, 255, 255, 0.9), inset 0 -6px 12px rgba(0, 0, 0, 0.06), 0 12px 40px rgba(0, 0, 0, 0.15), 0 4px 12px rgba(0, 0, 0, 0.1)',
              }}
              initial="offscreen"
              whileInView="onscreen"
              viewport={{ once: true, amount: 0.3 }}
              variants={cardVariants}
              whileHover={{ scale: 1.07, boxShadow: '0 0 24px 2px #a78bfa' }}
            >
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-purple-100 text-purple-600 rounded-2xl flex items-center justify-center mr-4">
                  <Target className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-semibold text-gray-800">Our Mission</h3>
              </div>
              <p className="text-gray-600 leading-relaxed">
                To democratize AI and make cutting-edge technology accessible to businesses of all sizes, 
                empowering them to innovate and grow in the digital age.
              </p>
            </motion.div>

            <motion.div
              className="bg-gradient-to-br from-white/85 to-white/50 backdrop-blur-sm rounded-3xl p-8 shadow-lg border border-white/30"
              style={{
                boxShadow: 'inset 0 6px 12px rgba(255, 255, 255, 0.9), inset 0 -6px 12px rgba(0, 0, 0, 0.06), 0 12px 40px rgba(0, 0, 0, 0.15), 0 4px 12px rgba(0, 0, 0, 0.1)',
              }}
              initial="offscreen"
              whileInView="onscreen"
              viewport={{ once: true, amount: 0.3 }}
              variants={cardVariants}
              whileHover={{ scale: 1.07, boxShadow: '0 0 24px 2px #60a5fa' }}
            >
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-blue-100 text-blue-600 rounded-2xl flex items-center justify-center mr-4">
                  <Eye className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-semibold text-gray-800">Our Vision</h3>
              </div>
              <p className="text-gray-600 leading-relaxed">
                To be the leading AI services company that transforms how businesses operate, 
                making intelligent automation and data-driven insights the new normal.
              </p>
            </motion.div>

            <motion.div
              className="bg-gradient-to-br from-white/85 to-white/50 backdrop-blur-sm rounded-3xl p-8 shadow-lg border border-white/30"
              style={{
                boxShadow: 'inset 0 6px 12px rgba(255, 255, 255, 0.9), inset 0 -6px 12px rgba(0, 0, 0, 0.06), 0 12px 40px rgba(0, 0, 0, 0.15), 0 4px 12px rgba(0, 0, 0, 0.1)',
              }}
              initial="offscreen"
              whileInView="onscreen"
              viewport={{ once: true, amount: 0.3 }}
              variants={cardVariants}
              whileHover={{ scale: 1.07, boxShadow: '0 0 24px 2px #fb7185' }}
            >
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-pink-100 text-pink-600 rounded-2xl flex items-center justify-center mr-4">
                  <Heart className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-semibold text-gray-800">Our Values</h3>
              </div>
              <p className="text-gray-600 leading-relaxed">
                Innovation, integrity, and impact drive everything we do. We believe in building 
                long-term partnerships and delivering solutions that create lasting value.
              </p>
            </motion.div>
          </div>

          <div className="bg-gradient-to-br from-white/85 to-white/50 backdrop-blur-sm rounded-3xl p-8 shadow-lg border border-white/30 h-full min-h-[620px] flex flex-col justify-center overflow-hidden"
               style={{
                 boxShadow: 'inset 0 6px 12px rgba(255, 255, 255, 0.9), inset 0 -6px 12px rgba(0, 0, 0, 0.06), 0 12px 40px rgba(0, 0, 0, 0.15), 0 4px 12px rgba(0, 0, 0, 0.1)',
               }}>
            <div className="grid grid-cols-2 gap-3 mb-6">
              <img src="/media/about/about-1.jpg" alt="Nhancio team and culture" className="w-full h-36 object-cover rounded-2xl" />
              <img src="/media/about/about-2.jpg" alt="Nhancio at work" className="w-full h-36 object-cover rounded-2xl" />
            </div>
            <h3 className="text-2xl font-bold text-gray-800 mb-6">Our Story</h3>
            <div className="space-y-4 text-gray-600 leading-relaxed">
              <p>
                Founded in 2024 by a group of passionate IITians, Nhancio emerged from a shared vision 
                to bridge the gap between cutting-edge AI research and practical business applications.
              </p>
              <p>
                What started as late-night discussions in our hostel rooms about the potential of AI 
                has evolved into a thriving company that serves clients across the globe.
              </p>
              <p>
                Today we lead with agentic-first systems: autonomous AI agents, multi-agent orchestration, 
                and intelligent automation that transform how businesses operate.
              </p>
              <p>
                We keep pushing what’s possible with AI agents—thinking, acting, and orchestrating at scale— 
                while staying true to research excellence and production impact.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;