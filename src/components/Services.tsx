import React from 'react';
import { Code, Megaphone, UserCircle, Headphones, Bot, GraduationCap } from 'lucide-react';
import { motion } from 'framer-motion';

const Services = () => {
  const services = [
    {
      image: "/media/services/s1.png",
      icon: <Code className="h-8 w-8" />,
      title: "Web & App Development",
      description: "We design and build scalable web and mobile applications that integrate with your AI stack. APIs, backends, and UIs that let your agents and workflows operate at full capacity.",
      color: "bg-blue-100 text-blue-600"
    },
    {
      image: "/media/services/s2.png",
      icon: <Megaphone className="h-8 w-8" />,
      title: "Marketing Automation",
      description: "End-to-end marketing automation: campaigns, lead nurturing, and analytics powered by AI. From email and social to attribution—automate and scale your growth.",
      color: "bg-purple-100 text-purple-600"
    },
    {
      image: "/media/services/s3.png",
      icon: <UserCircle className="h-8 w-8" />,
      title: "SDR Agent for Sales",
      description: "AI-powered sales development reps that qualify leads, book meetings, and follow up at scale. Custom SDR agents that work your pipeline 24/7 with human-like outreach.",
      color: "bg-green-100 text-green-600"
    },
    {
      image: "/media/services/s4.png",
      icon: <Headphones className="h-8 w-8" />,
      title: "Customer Support AI",
      description: "Intelligent support agents that resolve tickets, answer FAQs, and escalate when needed. Reduce response time and cost while keeping customer satisfaction high.",
      color: "bg-amber-100 text-amber-600"
    },
    {
      image: "/media/services/s5.png",
      icon: <Bot className="h-8 w-8" />,
      title: "Custom AI Agents for Your Use Case",
      description: "Tailored AI agents for your workflows: RAG, tool-use, multi-step reasoning, and integrations. From internal ops to customer-facing automation—built for your domain.",
      color: "bg-indigo-100 text-indigo-600"
    },
    {
      image: "/media/services/s6.png",
      icon: <GraduationCap className="h-8 w-8" />,
      title: "AI Workshops",
      description: "Hands-on AI workshops for students and teams. Learn GenAI, LLMs, RAG, and real-world automation with practical projects and mentorship. Community, education, and AI—not just an agency.",
      color: "bg-teal-100 text-teal-600"
    }
  ];

  const cardVariants = {
    offscreen: { opacity: 0, y: 40 },
    onscreen: { opacity: 1, y: 0, transition: { type: 'spring', bounce: 0.3, duration: 0.7 } }
  };

  return (
    <section id="services" className="py-20 bg-gradient-to-br from-gray-50 to-purple-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            AI-Agentic Services
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            From autonomous agents and orchestration to apps and automation—built agentic-first
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              className="bg-gradient-to-br from-white/85 to-white/50 backdrop-blur-sm rounded-3xl p-8 shadow-lg hover:shadow-xl transition-all duration-500 transform hover:scale-105 hover:-translate-y-2 border border-white/30 flex flex-col h-full min-h-[320px]"
              style={{
                boxShadow: 'inset 0 6px 12px rgba(255, 255, 255, 0.9), inset 0 -6px 12px rgba(0, 0, 0, 0.06), 0 12px 40px rgba(0, 0, 0, 0.15), 0 4px 12px rgba(0, 0, 0, 0.1)',
              }}
              initial="offscreen"
              whileInView="onscreen"
              viewport={{ once: true, amount: 0.3 }}
              variants={cardVariants}
              whileHover={{ scale: 1.07, boxShadow: '0 0 24px 2px #a78bfa' }}
            >
              <div className="flex items-center gap-4 mb-6">
                <img src={service.image} alt="" className="w-14 h-14 object-contain rounded-xl" />
                <div className={`w-16 h-16 rounded-2xl ${service.color} flex items-center justify-center`}>
                  {service.icon}
                </div>
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-3">
                {service.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;