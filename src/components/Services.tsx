import React from 'react';
import { Code, Megaphone, UserCircle, Headphones, Bot, GraduationCap, CheckCircle } from 'lucide-react';
import { motion } from 'framer-motion';

const Services = () => {
  const services = [
    {
      image: "/media/services/s5.png",
      icon: <Bot className="h-8 w-8" />,
      title: "Autonomous Multi-Agent Systems",
      tagline: "RalphAI & Agent Architecture",
      description: "Production multi-agent workflows with state machines, tool calling, and 24/7 autonomous execution.",
      deliverables: ["State Machine Workflows", "Tool-Calling APIs", "Human-in-the-Loop", "Self-Healing Execution"],
      color: "bg-purple-100 text-purple-600"
    },
    {
      image: "/media/services/s1.png",
      icon: <Code className="h-8 w-8" />,
      title: "Full-Stack AI Web & Mobile Apps",
      tagline: "React Native, Expo & Next.js",
      description: "High-performance web and mobile apps with native AI and fluid 60fps user experiences.",
      deliverables: ["Cross-Platform Mobile", "Modern Web Frontends", "Scalable APIs", "Offline-First Sync"],
      color: "bg-blue-100 text-blue-600"
    },
    {
      image: "/media/services/s2.png",
      icon: <Megaphone className="h-8 w-8" />,
      title: "AI Growth & Marketing Automation",
      tagline: "Closed-Loop Acquisition",
      description: "Autonomous growth engines with multimodal content generation and automated outreach.",
      deliverables: ["AI Ad Generation", "Multi-Channel Publishing", "Campaign Optimization", "Lead Qualification"],
      color: "bg-pink-100 text-pink-600"
    },
    {
      image: "/media/services/s3.png",
      icon: <UserCircle className="h-8 w-8" />,
      title: "Autonomous SDR & Sales Bots",
      tagline: "24/7 Pipeline Acceleration",
      description: "AI sales agents that research accounts, qualify leads, and book qualified meetings 24/7.",
      deliverables: ["Account Research", "Personalized Outreach", "CRM Auto-Sync", "Calendar Booking"],
      color: "bg-green-100 text-green-600"
    },
    {
      image: "/media/services/s4.png",
      icon: <Headphones className="h-8 w-8" />,
      title: "Enterprise Knowledge & Support AI",
      tagline: "RAG & Document Intelligence",
      description: "Domain-specific RAG agents that query private data and resolve tickets with zero drift.",
      deliverables: ["Vector RAG Search", "Document Intelligence", "Ticket Resolution", "Zero-Drift Guardrails"],
      color: "bg-amber-100 text-amber-600"
    },
    {
      image: "/media/services/s6.png",
      icon: <GraduationCap className="h-8 w-8" />,
      title: "Enterprise AI Consulting & Workshops",
      tagline: "IITian Research & Training",
      description: "Strategic roadmaps, architecture audits, and engineering sprints for production AI.",
      deliverables: ["Architecture Audits", "Team Upskilling", "Security Guardrails", "Production Roadmaps"],
      color: "bg-teal-100 text-teal-600"
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
    <section id="services" className="py-24 bg-gradient-to-br from-gray-50 via-purple-50/50 to-blue-50/50 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-purple-100 text-purple-700 text-xs font-semibold uppercase tracking-wider mb-3">
            <span>Specialized Capabilities</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-gray-900 tracking-tight mb-4">
            AI-Agentic Engineering Services
          </h2>
          <p className="text-base sm:text-xl text-gray-600 leading-relaxed max-w-2xl mx-auto">
            Production-grade autonomous agents, mobile apps, and custom LLM systems engineered by IITians.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              className="bg-white/90 backdrop-blur-md rounded-3xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-white/60 flex flex-col justify-between group h-full"
              style={{
                boxShadow: '0 10px 30px -5px rgba(0,0,0,0.05), inset 0 2px 4px rgba(255,255,255,0.9)',
              }}
              initial="offscreen"
              whileInView="onscreen"
              viewport={{ once: true, amount: 0.2 }}
              variants={cardVariants}
              whileHover={{ y: -5 }}
            >
              <div>
                <div className="flex items-center gap-4 mb-6">
                  {service.image ? (
                    <img 
                      src={service.image} 
                      alt={service.title}
                      width="56"
                      height="56"
                      loading="lazy"
                      decoding="async"
                      className="w-14 h-14 object-contain rounded-2xl bg-gray-50 p-1 border border-gray-100 shadow-2xs" 
                    />
                  ) : null}
                  <div className={`w-14 h-14 rounded-2xl ${service.color} flex items-center justify-center shadow-xs`}>
                    {service.icon}
                  </div>
                </div>
                
                <div className="mb-2">
                  <span className="text-[11px] font-bold text-purple-700 uppercase tracking-wider block">
                    {service.tagline}
                  </span>
                  <h3 className="text-xl font-bold text-gray-900 group-hover:text-purple-600 transition-colors">
                    {service.title}
                  </h3>
                </div>

                <p className="text-sm text-gray-600 leading-relaxed mb-6">
                  {service.description}
                </p>
              </div>

              <div className="pt-4 border-t border-gray-100">
                <h4 className="text-[11px] font-bold text-gray-500 uppercase tracking-wider mb-2.5">
                  Core Deliverables
                </h4>
                <div className="grid grid-cols-2 gap-2">
                  {service.deliverables.map((item, idx) => (
                    <div key={idx} className="flex items-center gap-1.5 text-xs text-gray-700">
                      <CheckCircle className="w-3.5 h-3.5 text-purple-600 shrink-0" />
                      <span className="truncate">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
