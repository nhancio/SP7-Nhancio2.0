import React from 'react';
import { Trophy, TrendingUp, ExternalLink, Sparkles, ShieldCheck, Server, Cpu, Award, ArrowUpRight } from 'lucide-react';
import { motion } from 'framer-motion';

interface GrantCard {
  id: string;
  name: string;
  partnerType: string;
  grantAmount: string;
  grantTitle: string;
  grantGradient: string;
  badge: string;
  badgeColor: string;
  logoSrc: string;
  description: string;
  benefits: string[];
  techStack: string[];
  link?: string;
}

interface RecognitionCard {
  icon: React.ReactNode;
  badge: string;
  title: string;
  description: string;
  color: string;
  link?: string;
  linkText?: string;
}

const grants: GrantCard[] = [
  {
    id: 'gcp',
    name: 'Google Cloud (GCP)',
    partnerType: 'Cloud & AI Infrastructure Partner',
    grantAmount: '₹25 Lakhs',
    grantTitle: 'Gemini AI & Cloud Credits',
    grantGradient: 'from-blue-600 to-emerald-600',
    badge: 'Google for Startups Cloud Program',
    badgeColor: 'bg-blue-100 text-blue-800 border-blue-200',
    logoSrc: '/logos/gcp-logo.svg',
    description: '₹25 Lakhs in Google Cloud credits and Gemini AI access for multimodal inference and video pipelines.',
    benefits: [
      'Gemini 1.5 Pro API credits',
      'Cloud Run autoscaling microservices',
      'Vertex AI vector search',
      'Multimodal video processing pipeline'
    ],
    techStack: ['Gemini 1.5 Pro', 'Vertex AI', 'Google Cloud Run', 'Firebase'],
    link: 'https://cloud.google.com/startup'
  },
  {
    id: 'aws',
    name: 'Amazon Web Services (AWS)',
    partnerType: 'Cloud Computing Partner',
    grantAmount: '₹5 Lakhs',
    grantTitle: 'AWS Activate Cloud Credits',
    grantGradient: 'from-amber-600 to-orange-600',
    badge: 'AWS Activate Program',
    badgeColor: 'bg-amber-100 text-amber-800 border-amber-200',
    logoSrc: '/logos/aws-logo.svg',
    description: '₹5 Lakhs in AWS Activate credits powering containerized agent engines and browser automation.',
    benefits: [
      'AWS Activate cloud credits',
      'High-concurrency EC2 compute',
      'Production RDS PostgreSQL & S3',
      'Isolated sandboxes for bots'
    ],
    techStack: ['AWS EC2', 'RDS PostgreSQL', 'Amazon S3', 'AWS Lambda'],
    link: 'https://aws.amazon.com/activate/'
  },
  {
    id: 'thub',
    name: 'T-Hub Hyderabad',
    partnerType: 'Incubation & Ecosystem Partner',
    grantAmount: '₹5 Lakhs',
    grantTitle: 'Seed Funds & Incubation Support',
    grantGradient: 'from-purple-600 to-indigo-600',
    badge: "World's Largest Innovation Campus",
    badgeColor: 'bg-purple-100 text-purple-800 border-purple-200',
    logoSrc: '/logos/thub-logo.png',
    description: "₹5 Lakhs seed grant and incubation at T-Hub, with enterprise pilot access and government backing.",
    benefits: [
      'Institutional seed funding grant',
      'Tier-1 enterprise pilot access',
      'Telangana government innovation network',
      'Strategic industry mentorship'
    ],
    techStack: ['Seed Fund', 'Startup Incubation', 'Enterprise Pilots', 'Govt Ecosystem'],
    link: 'https://thub.co.in/'
  }
];

const recognitions: RecognitionCard[] = [
  {
    icon: (
      <img
        src="/logos/Telangana-LOGO.png"
        alt="Government of Telangana"
        width="48"
        height="48"
        loading="lazy"
        decoding="async"
        className="w-12 h-12 object-contain"
      />
    ),
    badge: "Govt of Telangana",
    title: "Won Mathhack 2.0 AI Hackathon",
    description: "1st Place in Telangana AI Hackathon for Homemates AI matching algorithms, featured in TOI.",
    color: "bg-yellow-100 text-yellow-800 border-yellow-200",
    link: "https://timesofindia.indiatimes.com/city/hyderabad/ai-hackathon-flatmate-finder-to-hair-care-help/articleshow/113139008.cms",
    linkText: "Read Press Coverage"
  },
  {
    icon: (
      <img
        src="/logos/thub-logo.png"
        alt="T-Hub Incubator"
        width="48"
        height="48"
        loading="lazy"
        decoding="async"
        className="w-12 h-12 object-contain"
      />
    ),
    badge: "Premier Incubator",
    title: "Incubated at T-Hub Hyderabad",
    description: "Incubated at T-Hub, supporting our enterprise multi-agent systems and AI products.",
    color: "bg-purple-100 text-purple-700 border-purple-200",
    link: "https://thub.co.in/",
    linkText: "View T-Hub Profile"
  },
  {
    icon: <TrendingUp className="w-8 h-8 text-emerald-600" />,
    badge: "500k+ Automated Actions",
    title: "IITian Founded AI Agency",
    description: "Founded by IIT Kanpur alumni, shipping 8+ production AI systems worldwide.",
    color: "bg-emerald-100 text-emerald-700 border-emerald-200"
  }
];

const Achievements = () => {
  const cardVariants = {
    offscreen: { opacity: 0, y: 30 },
    onscreen: { 
      opacity: 1, 
      y: 0, 
      transition: { type: 'spring' as const, bounce: 0.25, duration: 0.6 } 
    }
  };

  return (
    <section id="achievements" className="py-24 bg-gradient-to-b from-purple-50/40 via-white to-amber-50/30 relative overflow-hidden">
      {/* Background ambient accents */}
      <div className="absolute top-1/4 left-10 w-96 h-96 bg-purple-200/20 rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="absolute bottom-1/3 right-10 w-96 h-96 bg-blue-200/20 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-purple-100 text-purple-800 text-xs font-semibold uppercase tracking-wider mb-3 border border-purple-200/60 shadow-xs">
            <Sparkles className="w-3.5 h-3.5 text-purple-600" />
            <span>Milestones • Collaborations • Grants • Recognition</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-gray-900 tracking-tight mb-4">
            Backed by Tech Giants, Incubated at T-Hub
          </h2>
          <p className="text-base sm:text-xl text-gray-600 leading-relaxed">
            Backed by <span className="font-bold text-purple-700">₹35 Lakhs+</span> in compute credits, seed funding, and government awards.
          </p>
        </div>

        {/* Section Part 1: Grants & Cloud Infrastructure (3 Major Cards) */}
        <div className="mb-16">
          <div className="flex items-center justify-between gap-4 mb-8">
            <div>
              <span className="text-xs font-bold text-purple-600 uppercase tracking-wider block">
                Ecosystem Grants & Cloud Partnerships
              </span>
              <h3 className="text-2xl font-extrabold text-gray-900">
                Major Grants & Compute Infrastructure
              </h3>
            </div>
            <div className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1 rounded-xl bg-purple-50 text-purple-700 text-xs font-bold border border-purple-200/60">
              <ShieldCheck className="w-4 h-4 text-purple-600" />
              <span>₹35L+ Total Value</span>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {grants.map((grant) => (
              <motion.div
                key={grant.id}
                className="bg-white/95 backdrop-blur-md rounded-3xl p-8 border border-white/80 shadow-lg hover:shadow-2xl transition-all duration-300 flex flex-col justify-between group h-full relative"
                style={{
                  boxShadow: '0 10px 30px -5px rgba(0,0,0,0.05), inset 0 2px 4px rgba(255,255,255,0.95)',
                }}
                initial="offscreen"
                whileInView="onscreen"
                viewport={{ once: true, amount: 0.2 }}
                variants={cardVariants}
                whileHover={{ y: -6 }}
              >
                <div>
                  {/* Top Header: Logo + Badge */}
                  <div className="flex items-start justify-between gap-4 mb-6">
                    <div className="h-14 w-28 rounded-2xl bg-gray-50 border border-gray-100 p-2 flex items-center justify-center shadow-2xs">
                      <img
                        src={grant.logoSrc}
                        alt={`${grant.name} logo`}
                        width="112"
                        height="56"
                        loading="lazy"
                        decoding="async"
                        className="max-h-full max-w-full object-contain"
                      />
                    </div>
                    <span className={`px-2.5 py-1 rounded-full text-[10px] sm:text-[11px] font-bold border text-right ${grant.badgeColor}`}>
                      {grant.badge}
                    </span>
                  </div>

                  {/* Partner Name & Type */}
                  <h4 className="text-xl font-bold text-gray-900 group-hover:text-purple-600 transition-colors mb-0.5">
                    {grant.name}
                  </h4>
                  <p className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-5">
                    {grant.partnerType}
                  </p>

                  {/* Grant Metric Banner */}
                  <div className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-950 text-white rounded-2xl p-4 mb-5 shadow-md border border-gray-800 relative overflow-hidden">
                    <div className="relative z-10">
                      <div className="text-[11px] font-semibold text-purple-300 uppercase tracking-wider mb-0.5">
                        {grant.grantTitle}
                      </div>
                      <div className={`text-2xl sm:text-3xl font-extrabold bg-gradient-to-r ${grant.grantGradient} bg-clip-text text-transparent`}>
                        {grant.grantAmount}
                      </div>
                    </div>
                    <div className="absolute -right-4 -bottom-4 w-20 h-20 bg-white/5 rounded-full blur-xl" />
                  </div>

                  {/* Description */}
                  <p className="text-xs sm:text-sm text-gray-600 leading-relaxed mb-5">
                    {grant.description}
                  </p>

                  {/* Benefits List */}
                  <div className="space-y-2 mb-6">
                    {grant.benefits.map((benefit, bIdx) => (
                      <div key={bIdx} className="flex items-start gap-2 text-xs text-gray-700">
                        <ShieldCheck className="w-3.5 h-3.5 text-purple-600 shrink-0 mt-0.5" />
                        <span>{benefit}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Tech Stack & Link */}
                <div>
                  <div className="flex flex-wrap gap-1.5 pt-4 border-t border-gray-100 mb-4">
                    {grant.techStack.map((tech, tIdx) => (
                      <span
                        key={tIdx}
                        className="px-2 py-0.5 rounded-md bg-gray-100 text-gray-700 text-[10px] font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {grant.link && (
                    <a
                      href={grant.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-xs font-bold text-purple-600 hover:text-purple-700 transition-colors group/link"
                    >
                      <span>Explore program details</span>
                      <ArrowUpRight className="w-3.5 h-3.5 group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5 transition-transform" />
                    </a>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Section Part 2: State Recognitions & Hackathon Honors (3 Cards) */}
        <div className="mb-16">
          <div className="mb-8">
            <span className="text-xs font-bold text-amber-600 uppercase tracking-wider block">
              Honors & Milestones
            </span>
            <h3 className="text-2xl font-extrabold text-gray-900">
              State Government & Incubator Recognition
            </h3>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {recognitions.map((item, index) => {
              const cardContent = (
                <motion.div
                  key={index}
                  className="bg-white/90 backdrop-blur-md rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-white/80 flex flex-col justify-between h-full group"
                  style={{
                    boxShadow: '0 10px 30px -5px rgba(0,0,0,0.05), inset 0 2px 4px rgba(255,255,255,0.95)',
                  }}
                  initial="offscreen"
                  whileInView="onscreen"
                  viewport={{ once: true, amount: 0.2 }}
                  variants={cardVariants}
                  whileHover={{ y: -6 }}
                >
                  <div>
                    <div className="flex items-center justify-between gap-2 mb-6">
                      <div className="w-16 h-16 rounded-2xl bg-gray-50 border border-gray-100 p-2 flex items-center justify-center shadow-xs">
                        {item.icon}
                      </div>
                      <span className={`px-3 py-1 rounded-full text-xs font-bold border ${item.color}`}>
                        {item.badge}
                      </span>
                    </div>

                    <h4 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-purple-600 transition-colors flex items-center gap-1.5">
                      <span>{item.title}</span>
                      {item.link && (
                        <ExternalLink className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity shrink-0 text-purple-600" />
                      )}
                    </h4>

                    <p className="text-sm text-gray-600 leading-relaxed">
                      {item.description}
                    </p>
                  </div>

                  {item.link && (
                    <div className="pt-4 mt-6 border-t border-gray-100 flex items-center text-xs font-bold text-purple-600 group-hover:text-purple-700">
                      <span>{item.linkText || 'Learn More'}</span>
                      <ExternalLink className="w-3.5 h-3.5 ml-1" />
                    </div>
                  )}
                </motion.div>
              );

              return item.link ? (
                <a
                  key={index}
                  href={item.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block h-full cursor-pointer focus:outline-none focus:ring-2 focus:ring-purple-400 rounded-3xl"
                >
                  {cardContent}
                </a>
              ) : (
                <div key={index} className="h-full">
                  {cardContent}
                </div>
              );
            })}
          </div>
        </div>

        {/* Section Part 3: Cumulative Funding & Compute Banner */}
        <div className="bg-gradient-to-r from-purple-950 via-indigo-950 to-gray-950 text-white rounded-3xl p-8 sm:p-10 shadow-2xl border border-purple-800/50 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-80 h-80 bg-purple-500/15 rounded-full blur-3xl pointer-events-none" />
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center relative z-10 text-center md:text-left">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 text-purple-200 text-xs font-semibold uppercase tracking-wider mb-2">
                <Award className="w-3.5 h-3.5 text-purple-300" />
                <span>Cumulative Support</span>
              </div>
              <div className="text-3xl sm:text-4xl font-extrabold text-white">
                ₹35 Lakhs+
              </div>
              <p className="text-xs sm:text-sm text-purple-200 mt-1">
                Total Grants, Cloud Credits & Seed Funding
              </p>
            </div>

            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 text-blue-200 text-xs font-semibold uppercase tracking-wider mb-2">
                <Server className="w-3.5 h-3.5 text-blue-300" />
                <span>Cloud Scale</span>
              </div>
              <div className="text-2xl sm:text-3xl font-extrabold text-white">
                Enterprise AI Tier
              </div>
              <p className="text-xs sm:text-sm text-purple-200 mt-1">
                Google Cloud (Gemini AI) & AWS Activate
              </p>
            </div>

            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 text-emerald-200 text-xs font-semibold uppercase tracking-wider mb-2">
                <Cpu className="w-3.5 h-3.5 text-emerald-300" />
                <span>Incubation</span>
              </div>
              <div className="text-2xl sm:text-3xl font-extrabold text-white">
                T-Hub Campus
              </div>
              <p className="text-xs sm:text-sm text-purple-200 mt-1">
                World's Largest Innovation Hub & Govt Backing
              </p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Achievements;
