import React from 'react';
import { Target, Eye, Heart, GraduationCap, Users, Zap, Globe, ShieldCheck, Award, Building2 } from 'lucide-react';
import { motion } from 'framer-motion';

const About = () => {
  const cardVariants = {
    offscreen: { opacity: 0, y: 30 },
    onscreen: { 
      opacity: 1, 
      y: 0, 
      transition: { type: 'spring' as const, bounce: 0.25, duration: 0.6 } 
    }
  };

  const advantages = [
    {
      icon: <GraduationCap className="w-7 h-7" />,
      title: "IITian Research & Rigor",
      tagline: "Academic Foundations",
      description: "Founded by IIT Kanpur engineers, building deterministic multi-agent systems with formal state-machine reliability.",
      color: "bg-purple-100 text-purple-600 border-purple-200"
    },
    {
      icon: <Users className="w-7 h-7" />,
      title: "Specialized Agentic Squads",
      tagline: "Full-Stack AI Specialists",
      description: "Dedicated engineering squads across agent orchestration (RalphAI), mobile AI (Aura+), and video generation (MagicBox).",
      color: "bg-blue-100 text-blue-600 border-blue-200"
    },
    {
      icon: <Zap className="w-7 h-7" />,
      title: "Production SLAs & Zero Drift",
      tagline: "Enterprise Guardrails",
      description: "Containerized microservices with strict schema validation, automated evals, and enterprise SLAs.",
      color: "bg-emerald-100 text-emerald-600 border-emerald-200"
    },
    {
      icon: <Globe className="w-7 h-7" />,
      title: "Global Enterprise Trust",
      tagline: "Deployed Worldwide",
      description: "Incubated at T-Hub Hyderabad and trusted by clients across the US, Europe, Australia, and India.",
      color: "bg-orange-100 text-orange-600 border-orange-200"
    }
  ];

  return (
    <section id="about" className="py-24 md:py-28 bg-gradient-to-br from-purple-50/60 via-blue-50/40 to-pink-50/50 relative overflow-hidden">
      {/* Subtle background glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-purple-200/30 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-purple-100 text-purple-800 text-xs font-semibold uppercase tracking-wider mb-4 border border-purple-200/60 shadow-xs">
            <Award className="w-3.5 h-3.5 text-purple-600" />
            <span>IITian Founded • T-Hub Incubated</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-gray-900 tracking-tight mb-4">
            About Nhancio
          </h2>
          <p className="text-base sm:text-xl text-gray-600 leading-relaxed max-w-2xl mx-auto">
            From IIT Kanpur research to production autonomous AI systems powering global enterprises.
          </p>
        </div>

        {/* 4 Pillars / The Nhancio Advantage */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {advantages.map((adv, index) => (
            <motion.div
              key={index}
              className="bg-white/90 backdrop-blur-md rounded-3xl p-7 shadow-lg hover:shadow-2xl transition-all duration-300 border border-white/80 flex flex-col justify-between group h-full"
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
                <div className="flex items-center gap-3.5 mb-5">
                  <div className={`w-13 h-13 rounded-2xl ${adv.color} border flex items-center justify-center shadow-xs shrink-0`}>
                    {adv.icon}
                  </div>
                  <div>
                    <span className="text-[10px] font-bold text-purple-700 uppercase tracking-wider block">
                      {adv.tagline}
                    </span>
                    <h3 className="text-base font-bold text-gray-900 group-hover:text-purple-600 transition-colors">
                      {adv.title}
                    </h3>
                  </div>
                </div>

                <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
                  {adv.description}
                </p>
              </div>

              <div className="pt-4 mt-6 border-t border-gray-100 flex items-center gap-1.5 text-xs font-semibold text-purple-600">
                <ShieldCheck className="w-4 h-4" />
                <span>Verified Standard</span>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Story, Mission & Vision Grid */}
        <div className="grid lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Mission / Vision / Values Cards */}
          <div className="lg:col-span-5 space-y-5 flex flex-col justify-between">
            <motion.div
              className="bg-white/85 backdrop-blur-md rounded-3xl p-6 shadow-md border border-white/70 hover:shadow-lg transition-all duration-300"
              initial="offscreen"
              whileInView="onscreen"
              viewport={{ once: true, amount: 0.2 }}
              variants={cardVariants}
              whileHover={{ scale: 1.02 }}
            >
              <div className="flex items-center gap-3 mb-2.5">
                <div className="w-10 h-10 bg-purple-100 text-purple-600 rounded-xl flex items-center justify-center">
                  <Target className="w-5 h-5" />
                </div>
                <h3 className="text-lg font-bold text-gray-800">Our Mission</h3>
              </div>
              <p className="text-sm text-gray-600 leading-relaxed">
                To engineer deterministic autonomous agent systems that automate complex workflows and accelerate enterprise velocity.
              </p>
            </motion.div>

            <motion.div
              className="bg-white/85 backdrop-blur-md rounded-3xl p-6 shadow-md border border-white/70 hover:shadow-lg transition-all duration-300"
              initial="offscreen"
              whileInView="onscreen"
              viewport={{ once: true, amount: 0.2 }}
              variants={cardVariants}
              whileHover={{ scale: 1.02 }}
            >
              <div className="flex items-center gap-3 mb-2.5">
                <div className="w-10 h-10 bg-blue-100 text-blue-600 rounded-xl flex items-center justify-center">
                  <Eye className="w-5 h-5" />
                </div>
                <h3 className="text-lg font-bold text-gray-800">Our Vision</h3>
              </div>
              <p className="text-sm text-gray-600 leading-relaxed">
                To be the global benchmark for agentic AI engineering, powering organizations with self-orchestrating intelligence.
              </p>
            </motion.div>

            <motion.div
              className="bg-white/85 backdrop-blur-md rounded-3xl p-6 shadow-md border border-white/70 hover:shadow-lg transition-all duration-300"
              initial="offscreen"
              whileInView="onscreen"
              viewport={{ once: true, amount: 0.2 }}
              variants={cardVariants}
              whileHover={{ scale: 1.02 }}
            >
              <div className="flex items-center gap-3 mb-2.5">
                <div className="w-10 h-10 bg-pink-100 text-pink-600 rounded-xl flex items-center justify-center">
                  <Heart className="w-5 h-5" />
                </div>
                <h3 className="text-lg font-bold text-gray-800">Our Core Values</h3>
              </div>
              <p className="text-sm text-gray-600 leading-relaxed">
                Research rigor, zero-drift reliability, and measurable business ROI on every deployed system.
              </p>
            </motion.div>
          </div>

          {/* Our Story & Incubation Narrative */}
          <div className="lg:col-span-7">
            <motion.div
              className="bg-white/90 backdrop-blur-md rounded-3xl p-8 sm:p-10 shadow-xl border border-white/80 h-full flex flex-col justify-between"
              style={{
                boxShadow: '0 20px 40px -15px rgba(0,0,0,0.07), inset 0 2px 4px rgba(255,255,255,0.95)',
              }}
              initial="offscreen"
              whileInView="onscreen"
              viewport={{ once: true, amount: 0.2 }}
              variants={cardVariants}
            >
              <div>
                <div className="grid grid-cols-2 gap-4 mb-6">
                  <div className="relative rounded-2xl overflow-hidden shadow-xs h-36 sm:h-44 group">
                    <img 
                      src="/media/about/about-1.jpg" 
                      alt="Nhancio engineering team and research culture" 
                      width="350" 
                      height="180" 
                      loading="lazy" 
                      decoding="async" 
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" 
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
                    <span className="absolute bottom-2.5 left-3 text-[11px] font-semibold text-white/90 drop-shadow">IIT Kanpur Foundations</span>
                  </div>
                  <div className="relative rounded-2xl overflow-hidden shadow-xs h-36 sm:h-44 group">
                    <img 
                      src="/media/about/about-2.jpg" 
                      alt="Nhancio team at work in T-Hub Hyderabad" 
                      width="350" 
                      height="180" 
                      loading="lazy" 
                      decoding="async" 
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" 
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
                    <span className="absolute bottom-2.5 left-3 text-[11px] font-semibold text-white/90 drop-shadow">T-Hub Hyderabad Innovation Hub</span>
                  </div>
                </div>

                <div className="flex items-center gap-2 mb-3 text-xs font-bold text-purple-700 uppercase tracking-wider">
                  <Building2 className="w-4 h-4" />
                  <span>Research to Production</span>
                </div>

                <h3 className="text-2xl sm:text-3xl font-extrabold text-gray-900 mb-4">
                  Built on Academic Rigor, Scaled for Global Enterprises
                </h3>

                <div className="space-y-3.5 text-sm sm:text-base text-gray-600 leading-relaxed">
                  <p>
                    Founded in 2024 by IIT Kanpur alumni and incubated at <strong className="text-gray-900 font-semibold">T-Hub Hyderabad</strong>, Nhancio bridges academic AI research with enterprise software engineering.
                  </p>
                  <p>
                    Today, flagship platforms like <strong className="text-purple-700 font-semibold">RalphAI</strong>, <strong className="text-purple-700 font-semibold">Aura+</strong>, <strong className="text-purple-700 font-semibold">MagicBox</strong>, and <strong className="text-purple-700 font-semibold">IntelliAssets</strong> power operations across North America, Europe, Australia, and India.
                  </p>
                </div>
              </div>

              <div className="mt-8 pt-6 border-t border-gray-100 flex flex-wrap items-center justify-between gap-4 text-xs font-semibold text-gray-700">
                <div className="flex items-center gap-2">
                  <div className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse" />
                  <span>Actively Partnering with Global Enterprise Clients</span>
                </div>
                <a 
                  href="#contact" 
                  className="text-purple-600 hover:text-purple-700 underline font-bold"
                >
                  Schedule Consultation &rarr;
                </a>
              </div>
            </motion.div>
          </div>

        </div>

      </div>
    </section>
  );
};

export default About;
