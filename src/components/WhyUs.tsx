import React from 'react';
import { GraduationCap, Users, Globe, ShieldCheck, Zap, Award } from 'lucide-react';
import { motion } from 'framer-motion';

const WhyUs = () => {
  const reasons = [
    {
      image: "/media/choose/ai-research.png",
      icon: <GraduationCap className="w-8 h-8" />,
      title: "IITian Research & Rigor",
      tagline: "Theoretical Foundations",
      description: "Founded by engineers from IIT Kanpur—we architect multi-agent systems with formal state-machine proofs, closed-loop feedback, and deterministic reliability.",
      color: "bg-purple-100 text-purple-600"
    },
    {
      image: "/media/choose/dedicated-team.png",
      icon: <Users className="w-8 h-8" />,
      title: "Specialized Agentic Squads",
      tagline: "Full-Stack AI Specialists",
      description: "Dedicated squads across agent orchestration (TALF), reasoning loops (RALF), multimodal vision (Aura+), and enterprise DAM pipelines (IntelliAsset).",
      color: "bg-blue-100 text-blue-600"
    },
    {
      image: "/media/choose/ai-optimized.png",
      icon: <Zap className="w-8 h-8" />,
      title: "Production SLAs & Zero Drift",
      tagline: "Enterprise Guardrails",
      description: "We don't ship brittle prompt demos. We deliver containerized, auto-scaling microservices with structured output validation, RAG benchmarks, and latency guarantees.",
      color: "bg-emerald-100 text-emerald-600"
    },
    {
      image: "/media/choose/dedicated-team.png",
      icon: <Globe className="w-8 h-8" />,
      title: "Global Enterprise Trust",
      tagline: "Deployed Across Continents",
      description: "Trusted by fast-growing startups and enterprises across India, Australia, US, and Europe for mission-critical generative AI and automation workflows.",
      color: "bg-orange-100 text-orange-600"
    }
  ];

  const cardVariants = {
    offscreen: { opacity: 0, y: 30 },
    onscreen: { 
      opacity: 1, 
      y: 0, 
      transition: { type: 'spring' as const, bounce: 0.25, duration: 0.6 } 
    }
  };

  return (
    <section id="whyus" className="py-24 bg-gradient-to-br from-blue-50/50 via-purple-50/40 to-pink-50/40 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-blue-100 text-blue-800 text-xs font-semibold uppercase tracking-wider mb-3">
            <Award className="w-3.5 h-3.5" />
            <span>The Nhancio Advantage</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-gray-900 tracking-tight mb-4">
            Why Enterprise Leaders Choose Nhancio
          </h2>
          <p className="text-base sm:text-xl text-gray-600 leading-relaxed">
            Agentic-first engineering, academic rigor, and production-tested systems engineered for autonomous scale.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {reasons.map((reason, index) => (
            <motion.div
              key={index}
              className="bg-white/90 backdrop-blur-md rounded-3xl p-7 shadow-lg hover:shadow-2xl transition-all duration-300 border border-white/60 flex flex-col justify-between group h-full"
              style={{
                boxShadow: '0 10px 30px -5px rgba(0,0,0,0.05), inset 0 2px 4px rgba(255,255,255,0.9)',
              }}
              initial="offscreen"
              whileInView="onscreen"
              viewport={{ once: true, amount: 0.2 }}
              variants={cardVariants}
              whileHover={{ y: -6 }}
            >
              <div>
                <div className="flex items-center gap-3 mb-5">
                  <div className={`w-14 h-14 rounded-2xl ${reason.color} flex items-center justify-center shadow-xs shrink-0`}>
                    {reason.icon}
                  </div>
                  <div>
                    <span className="text-[10px] font-bold text-purple-700 uppercase tracking-wider block">
                      {reason.tagline}
                    </span>
                    <h3 className="text-lg font-bold text-gray-900 group-hover:text-purple-600 transition-colors">
                      {reason.title}
                    </h3>
                  </div>
                </div>

                <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
                  {reason.description}
                </p>
              </div>

              <div className="pt-4 mt-6 border-t border-gray-100 flex items-center gap-1.5 text-xs font-semibold text-purple-600">
                <ShieldCheck className="w-4 h-4" />
                <span>Verified Architecture</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyUs;
