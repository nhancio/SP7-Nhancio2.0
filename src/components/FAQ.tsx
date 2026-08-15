import React, { useState } from 'react';
import { ChevronDown, HelpCircle, Sparkles } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

interface FAQItem {
  question: string;
  answer: string;
  category: string;
}

const faqs: FAQItem[] = [
  {
    category: "Architecture & Frameworks",
    question: "What makes Nhancio's autonomous agent frameworks (RalphAI & NFLA App) unique?",
    answer: "Unlike simple prompt wrapper scripts, Nhancio architectures are built on deterministic state machines, closed-loop feedback loops, and resilient tool-calling pipelines. RalphAI delivers multi-tenant restaurant marketing orchestration with headless browser automation (Playwright), while the NFLA App / Event Automation Engine provides event operations, dynamic QR verification, and serverless blob synchronization with sub-second response times."
  },
  {
    category: "Engineering & Team",
    question: "Who designs and builds Nhancio's AI systems?",
    answer: "Nhancio was founded by IITians with deep backgrounds in computer science, machine learning, and systems engineering. Our squads combine academic research rigor with full-stack production best practices across Python, FastAPI, React Native / Expo, Node.js, and cloud containerization."
  },
  {
    category: "Security & Production SLAs",
    question: "How does Nhancio ensure enterprise data security and zero hallucination?",
    answer: "We implement strict schema validation (Pydantic / TypeScript), deterministic guardrails, zero-trust container sandboxes, and private VPC deployments. For RAG and LLM applications, we benchmark against ground-truth evaluation sets and incorporate human-in-the-loop escalation paths for sensitive workflows."
  },
  {
    category: "Services & Engagement",
    question: "What types of AI projects does Nhancio take on?",
    answer: "We specialize in autonomous multi-agent systems, cross-platform mobile apps (like Aura+ on Expo 56), educational and enterprise platforms (like IntelliAssets.AI), generative marketing suites (like MagicBox AI UGC Factory), and automated growth engines (like ResGro-AI and BiteBoost). We offer end-to-end development, architecture advisory, and specialized engineering sprints."
  },
  {
    category: "Timeline & Delivery",
    question: "How fast can an autonomous agent or custom AI solution be deployed?",
    answer: "Depending on scope, proof-of-concept prototypes and specialized agents can be delivered in 2 to 3 weeks, while comprehensive enterprise multi-agent platforms with full security compliance, CI/CD, and custom integrations typically launch in 6 to 10 weeks."
  },
  {
    category: "Recognition & Incubation",
    question: "What industry milestones has Nhancio achieved?",
    answer: "Nhancio is incubated at T-Hub Hyderabad (the world's largest innovation campus) and won 1st Place at Mathhack 2.0 organized by the Government of Telangana for our autonomous matching algorithms in Homemates AI, with coverage in leading national media like The Times of India."
  }
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-24 bg-gradient-to-b from-purple-50/40 via-white to-gray-50 relative overflow-hidden">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-purple-100 text-purple-700 text-xs font-semibold uppercase tracking-wider mb-3">
            <HelpCircle className="w-3.5 h-3.5" />
            <span>Frequently Asked Questions</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-gray-900 tracking-tight mb-4">
            Answers on AI Agents & Engineering
          </h2>
          <p className="text-base sm:text-xl text-gray-600 leading-relaxed">
            Everything you need to know about our autonomous agent frameworks, technology stacks, security guarantees, and engagement model.
          </p>
        </div>

        {/* FAQ Accordion List */}
        <div className="space-y-4">
          {faqs.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={idx}
                className="bg-white/90 backdrop-blur-md rounded-2xl border border-gray-200/80 shadow-sm overflow-hidden transition-all duration-200"
              >
                <button
                  onClick={() => toggle(idx)}
                  className="w-full px-6 py-5 text-left flex items-center justify-between gap-4 focus:outline-none focus:bg-purple-50/30 cursor-pointer"
                  aria-expanded={isOpen}
                >
                  <div className="flex items-center gap-3">
                    <span className="w-2 h-2 rounded-full bg-purple-600 shrink-0" />
                    <span className="text-base sm:text-lg font-bold text-gray-900">
                      {faq.question}
                    </span>
                  </div>
                  <ChevronDown
                    className={`w-5 h-5 text-gray-500 transition-transform duration-300 shrink-0 ${
                      isOpen ? 'rotate-180 text-purple-600' : ''
                    }`}
                  />
                </button>

                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.25 }}
                    >
                      <div className="px-6 pb-6 pt-2 text-sm sm:text-base text-gray-600 leading-relaxed border-t border-gray-100 bg-gray-50/40">
                        <span className="inline-block text-[11px] font-semibold text-purple-700 uppercase tracking-wider mb-2">
                          {faq.category}
                        </span>
                        <p>{faq.answer}</p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>

        {/* Callout box */}
        <div className="mt-12 text-center p-8 bg-gradient-to-r from-purple-500/10 via-indigo-500/10 to-blue-500/10 rounded-3xl border border-purple-200/60 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="text-left">
            <h3 className="text-lg font-bold text-gray-900 mb-1">
              Have a specific technical or custom AI inquiry?
            </h3>
            <p className="text-xs sm:text-sm text-gray-600">
              Speak directly with our IITian engineering leadership and solutions architects.
            </p>
          </div>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-purple-600 hover:bg-purple-700 text-white text-xs sm:text-sm font-bold transition-all shadow-md shadow-purple-500/20 shrink-0"
          >
            <Sparkles className="w-4 h-4" />
            <span>Consult Our Engineers</span>
          </a>
        </div>
      </div>
    </section>
  );
}
