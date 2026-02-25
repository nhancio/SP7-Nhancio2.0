import React from 'react';
import { GraduationCap, Users, Target, Globe } from 'lucide-react';
import { motion } from 'framer-motion';

const WhyUs = () => {
  const reasons = [
    {
      image: "/media/choose/ai-research.png",
      icon: <GraduationCap className="w-12 h-12" />,
      title: "AI-Driven Research & Rigor",
      description: "Founded by IITians—we combine research-grade rigor with agentic systems design. From LLMs to multi-agent orchestration, built on a deep AI foundation.",
      color: "bg-purple-100 text-purple-600"
    },
    {
      image: "/media/choose/dedicated-team.png",
      icon: <Users className="w-12 h-12" />,
      title: "Dedicated Agentic Teams",
      description: "Specialized squads for autonomous agents, RAG, tool-use, and workflows. We ship production-ready agentic systems, not just prototypes.",
      color: "bg-blue-100 text-blue-600"
    },
    {
      image: "/media/choose/ai-optimized.png",
      icon: <Target className="w-12 h-12" />,
      title: "AI-Optimized Delivery",
      description: "Agile, outcome-driven delivery focused on autonomy and scale. We measure success by how much your agents think, act, and orchestrate.",
      color: "bg-green-100 text-green-600"
    },
    {
      icon: <Globe className="w-12 h-12" />,
      title: "Trusted Globally",
      description: "Serving startups and enterprises worldwide with agentic-first solutions and proven success.",
      color: "bg-orange-100 text-orange-600"
    }
  ];

  const cardVariants = {
    offscreen: { opacity: 0, y: 40 },
    onscreen: { opacity: 1, y: 0, transition: { type: 'spring' as const, bounce: 0.3, duration: 0.7 } }
  };

  return (
    <section className="py-20 bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            Why Nhancio for AI Agents?
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Agentic-first teams, research rigor, and production-ready autonomous systems
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
              <div className="flex flex-col items-center mb-6">
                {'image' in reason && reason.image && (
                  <img src={reason.image} alt="" className="w-16 h-16 object-contain mb-3" />
                )}
                <div className={`w-20 h-20 rounded-2xl ${reason.color} flex items-center justify-center`}>
                  {reason.icon}
                </div>
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