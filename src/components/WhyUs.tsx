import React from 'react';
import { GraduationCap, Users, Target, Globe } from 'lucide-react';
import { motion } from 'framer-motion';

const WhyUs = () => {
  const reasons = [
    {
      icon: <GraduationCap className="w-12 h-12" />,
      title: "Built by IITians",
      description: "Founded and led by graduates from India's premier technical institutes",
      color: "bg-purple-100 text-purple-600"
    },
    {
      icon: <Users className="w-12 h-12" />,
      title: "Deep AI/Tech Expertise",
      description: "Specialized knowledge in artificial intelligence and cutting-edge technologies",
      color: "bg-blue-100 text-blue-600"
    },
    {
      icon: <Target className="w-12 h-12" />,
      title: "Agile, Outcome-Driven Team",
      description: "Fast, flexible, and focused on delivering measurable results",
      color: "bg-green-100 text-green-600"
    },
    {
      icon: <Globe className="w-12 h-12" />,
      title: "Trusted Globally",
      description: "Serving early-stage startups and global clients with excellence",
      color: "bg-orange-100 text-orange-600"
    }
  ];

  const cardVariants = {
    offscreen: { opacity: 0, y: 40 },
    onscreen: { opacity: 1, y: 0, transition: { type: 'spring', bounce: 0.3, duration: 0.7 } }
  };

  return (
    <section className="py-20 bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            Why Choose Nhancio?
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We combine academic excellence with practical expertise to deliver exceptional results
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {reasons.map((reason, index) => (
            <motion.div
              key={index}
              className="bg-gradient-to-br from-white/85 to-white/50 backdrop-blur-sm rounded-3xl p-8 text-center shadow-lg hover:shadow-xl transition-all duration-500 transform hover:scale-105 border border-white/30"
              style={{
                boxShadow: 'inset 0 6px 12px rgba(255, 255, 255, 0.9), inset 0 -6px 12px rgba(0, 0, 0, 0.06), 0 12px 40px rgba(0, 0, 0, 0.15), 0 4px 12px rgba(0, 0, 0, 0.1)',
              }}
              initial="offscreen"
              whileInView="onscreen"
              viewport={{ once: true, amount: 0.3 }}
              variants={cardVariants}
              whileHover={{ scale: 1.07, boxShadow: '0 0 24px 2px #a78bfa' }}
            >
              <div className={`w-20 h-20 rounded-2xl ${reason.color} flex items-center justify-center mx-auto mb-6`}>
                {reason.icon}
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-3">
                {reason.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {reason.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyUs;