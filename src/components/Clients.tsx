import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Building2, 
  TrendingUp, 
  Utensils, 
  BookOpen, 
  ArrowUpRight, 
  Sparkles, 
  Quote, 
  ShieldCheck,
  Globe
} from 'lucide-react';

interface ClientItem {
  id: string;
  name: string;
  domain: string;
  category: string;
  logo: string;
  testimonial: string;
  url: string;
  fallbackIcon: React.ElementType;
  badgeColor: string;
  iconBg: string;
  highlightPill: string;
}

const clients: ClientItem[] = [
  {
    id: 'kuvaira',
    name: 'Kuvaira',
    domain: 'kuvaira.in',
    category: 'Enterprise AI & Scale',
    logo: '/logos/kuvaira-logo.png',
    testimonial: 'Automated business operations and accelerated scale with Nhancio AI.',
    url: 'https://kuvaira.in',
    fallbackIcon: Building2,
    badgeColor: 'bg-indigo-100 text-indigo-700 border-indigo-200/60',
    iconBg: 'bg-indigo-50 text-indigo-600 border-indigo-100',
    highlightPill: 'Operations Automation'
  },
  {
    id: 'todc',
    name: 'TODC',
    domain: 'todc.in',
    category: 'US Restaurant Ad Tech',
    logo: '/logos/todc.png',
    testimonial: 'Autonomous multi-agent ad automation for US restaurant chains.',
    url: 'https://todc.in',
    fallbackIcon: TrendingUp,
    badgeColor: 'bg-emerald-100 text-emerald-700 border-emerald-200/60',
    iconBg: 'bg-emerald-50 text-emerald-600 border-emerald-100',
    highlightPill: 'Multi-Agent Ad Ops'
  },
  {
    id: 'resgro',
    name: 'ResGro',
    domain: 'resgro.ai',
    category: 'Growth Marketing Engine',
    logo: '/logos/resgro.png',
    testimonial: 'Automated restaurant growth and promotional campaign pipelines.',
    url: 'https://resgro.ai',
    fallbackIcon: Utensils,
    badgeColor: 'bg-amber-100 text-amber-700 border-amber-200/60',
    iconBg: 'bg-amber-50 text-amber-600 border-amber-100',
    highlightPill: 'Growth Automation'
  },
  {
    id: 'intelliassets',
    name: 'IntelliAssets.AI',
    domain: 'intelliassets.ai',
    category: 'EdTech & Curriculum AI',
    logo: '/logos/intelliassets.png',
    testimonial: 'Adaptive AI tutoring and curriculum intelligence platform.',
    url: 'https://intelliassets.ai',
    fallbackIcon: BookOpen,
    badgeColor: 'bg-blue-100 text-blue-700 border-blue-200/60',
    iconBg: 'bg-blue-50 text-blue-600 border-blue-100',
    highlightPill: 'Adaptive Tutoring'
  }
];

const ClientLogo = ({
  logo,
  name,
  fallbackIcon: FallbackIcon,
  iconBg
}: {
  logo: string;
  name: string;
  fallbackIcon: React.ElementType;
  iconBg: string;
}) => {
  const [hasError, setHasError] = useState(false);

  if (hasError || !logo) {
    return (
      <div 
        className={`w-13 h-13 sm:w-14 sm:h-14 rounded-2xl ${iconBg} border flex items-center justify-center shadow-xs shrink-0 transition-transform duration-300 group-hover:scale-105`}
        aria-label={`${name} icon`}
      >
        <FallbackIcon className="w-6 h-6" />
      </div>
    );
  }

  return (
    <div className="w-13 h-13 sm:w-14 sm:h-14 rounded-2xl bg-white border border-gray-100 p-2 flex items-center justify-center shadow-xs shrink-0 transition-transform duration-300 group-hover:scale-105">
      <img
        src={logo}
        alt={`${name} Logo`}
        width="48"
        height="48"
        loading="lazy"
        decoding="async"
        className="w-full h-full object-contain rounded-xl"
        onError={() => setHasError(true)}
      />
    </div>
  );
};

const Clients = () => {
  const cardVariants = {
    offscreen: { opacity: 0, y: 30 },
    onscreen: (index: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        type: 'spring' as const,
        bounce: 0.25,
        duration: 0.6,
        delay: index * 0.1
      }
    })
  };

  return (
    <section id="clients" className="py-24 md:py-28 bg-gradient-to-b from-gray-50/60 via-purple-50/30 to-white relative overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[550px] h-[550px] bg-purple-200/20 rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="absolute bottom-10 right-10 w-80 h-80 bg-blue-200/15 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-purple-100 text-purple-800 text-xs font-semibold uppercase tracking-wider mb-4 border border-purple-200/60 shadow-xs">
            <Sparkles className="w-3.5 h-3.5 text-purple-600" />
            <span>Trusted Client Partnerships</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-gray-900 tracking-tight mb-4">
            Empowering High-Growth Clients
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
            From autonomous ad systems in the US to enterprise EdTech platforms, fast-scaling teams trust Nhancio to engineer and deploy production AI.
          </p>
        </div>

        {/* 4-Column Responsive Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {clients.map((client, index) => (
            <motion.a
              key={client.id}
              href={client.url}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white/90 backdrop-blur-md rounded-3xl p-6 sm:p-7 shadow-lg hover:shadow-2xl transition-all duration-300 border border-white/80 flex flex-col justify-between group h-full relative overflow-hidden"
              style={{
                boxShadow: '0 10px 30px -5px rgba(0,0,0,0.05), inset 0 2px 4px rgba(255,255,255,0.9)',
              }}
              initial="offscreen"
              whileInView="onscreen"
              viewport={{ once: true, amount: 0.2 }}
              custom={index}
              variants={cardVariants}
              whileHover={{ y: -6 }}
            >
              {/* Top Row: Logo/Icon, Client Info & External Link Indicator */}
              <div>
                <div className="flex items-start justify-between gap-3 mb-5">
                  <ClientLogo
                    logo={client.logo}
                    name={client.name}
                    fallbackIcon={client.fallbackIcon}
                    iconBg={client.iconBg}
                  />
                  <div className="flex items-center gap-1.5">
                    <span className={`px-2.5 py-1 rounded-full text-[11px] font-semibold border ${client.badgeColor}`}>
                      {client.highlightPill}
                    </span>
                    <div className="w-7 h-7 rounded-full bg-gray-50 border border-gray-200/80 flex items-center justify-center text-gray-400 group-hover:text-purple-600 group-hover:border-purple-200 group-hover:bg-purple-50 transition-colors shrink-0">
                      <ArrowUpRight className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                    </div>
                  </div>
                </div>

                {/* Client Name & Category */}
                <div className="mb-4">
                  <h3 className="text-xl font-bold text-gray-900 group-hover:text-purple-600 transition-colors flex items-center gap-1.5">
                    {client.name}
                  </h3>
                  <span className="text-xs font-medium text-gray-500 block mt-0.5">
                    {client.category}
                  </span>
                </div>

                {/* Testimonial Quote */}
                <div className="relative pl-3.5 border-l-2 border-purple-200/80 my-4">
                  <Quote className="w-3.5 h-3.5 text-purple-400 mb-1 opacity-70" />
                  <p className="text-xs sm:text-sm text-gray-700 font-medium leading-relaxed italic">
                    "{client.testimonial}"
                  </p>
                </div>
              </div>

              {/* Card Footer: Domain Link & Verification Badge */}
              <div className="pt-4 mt-4 border-t border-gray-100 flex items-center justify-between text-xs">
                <span className="font-mono text-purple-600 font-semibold group-hover:underline flex items-center gap-1">
                  <Globe className="w-3.5 h-3.5 text-purple-500" />
                  {client.domain}
                </span>
                <span className="text-[11px] font-semibold text-emerald-600 flex items-center gap-1 bg-emerald-50 px-2 py-0.5 rounded-md border border-emerald-100">
                  <ShieldCheck className="w-3 h-3 text-emerald-500" />
                  Live Platform
                </span>
              </div>
            </motion.a>
          ))}
        </div>

        {/* Bottom Callout / Assurance Banner */}
        <div className="mt-14 max-w-2xl mx-auto text-center">
          <div className="p-4 rounded-2xl bg-white/70 backdrop-blur-sm border border-purple-100/80 shadow-xs flex flex-col sm:flex-row items-center justify-center gap-3 text-xs sm:text-sm text-gray-600">
            <div className="flex items-center gap-2 font-semibold text-gray-800">
              <span className="flex h-2 w-2 relative">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
              <span>Need custom autonomous AI agents or platform engineering?</span>
            </div>
            <a
              href="#contact"
              className="font-bold text-purple-600 hover:text-purple-700 underline underline-offset-2 flex items-center gap-1"
            >
              Let's build together <ArrowUpRight className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Clients;
