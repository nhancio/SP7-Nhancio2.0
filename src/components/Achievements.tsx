import React from 'react';
import { Trophy, TrendingUp, ExternalLink } from 'lucide-react';
import { motion } from 'framer-motion';

const Achievements = () => {
  const achievements = [
    {
      icon: <img src="/logos/Telangana-LOGO.png" alt="Government of Telangana Partner" width="48" height="48" loading="lazy" decoding="async" className="w-12 h-12 object-contain" />,
      badge: "Govt of Telangana",
      title: "Won Mathhack 2.0 AI Hackathon",
      description: "Secured 1st Place in the prestigious state AI innovation challenge organized by the Government of Telangana for our autonomous matching algorithms in Homemates AI.",
      color: "bg-yellow-100 text-yellow-700 border-yellow-200",
      link: "https://timesofindia.indiatimes.com/city/hyderabad/ai-hackathon-flatmate-finder-to-hair-care-help/articleshow/113139008.cms"
    },
    {
      icon: <img src="/logos/thub-logo.png" alt="T-Hub Incubator" width="48" height="48" loading="lazy" decoding="async" className="w-12 h-12 object-contain" />,
      badge: "Premier Incubator",
      title: "Incubated at T-Hub Hyderabad",
      description: "Selected and incubated by T-Hub, the world's largest innovation campus, supporting our enterprise multi-agent architectures and AI product development.",
      color: "bg-purple-100 text-purple-700 border-purple-200",
      link: "https://thub.co.in/"
    },
    {
      icon: <TrendingUp className="w-8 h-8 text-emerald-600" />,
      badge: "500k+ Automated Decisions",
      title: "Fastest-Growing AI Agency in Hyderabad",
      description: "Founded by IITians, Nhancio has shipped 8+ production AI systems, closed-loop reasoning engines (RalphAI), and autonomous frameworks (NFLA App) globally.",
      color: "bg-emerald-100 text-emerald-700 border-emerald-200"
    }
  ];

  const cardVariants = {
    offscreen: { opacity: 0, y: 30 },
    onscreen: { opacity: 1, y: 0, transition: { type: 'spring', bounce: 0.25, duration: 0.6 } }
  };

  return (
    <section id="achievements" className="py-24 bg-gradient-to-br from-yellow-50/60 via-orange-50/40 to-red-50/40 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-amber-100 text-amber-800 text-xs font-semibold uppercase tracking-wider mb-3">
            <Trophy className="w-3.5 h-3.5" />
            <span>Milestones & Recognition</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-gray-900 tracking-tight mb-4">
            Recognized for AI Innovation & Excellence
          </h2>
          <p className="text-base sm:text-xl text-gray-600 leading-relaxed">
            From winning state government hackathons to scaling global multi-agent systems, our track record reflects engineering rigor and measurable impact.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {achievements.map((item, index) => {
            const Content = (
              <motion.div
                key={index}
                className="bg-white/90 backdrop-blur-md rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-white/60 flex flex-col justify-between h-full group"
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
                  <div className="flex items-center justify-between gap-2 mb-6">
                    <div className="w-16 h-16 rounded-2xl bg-gray-50 border border-gray-100 p-2 flex items-center justify-center shadow-xs">
                      {item.icon}
                    </div>
                    <span className={`px-3 py-1 rounded-full text-xs font-bold border ${item.color}`}>
                      {item.badge}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-purple-600 transition-colors flex items-center gap-1.5">
                    <span>{item.title}</span>
                    {item.link && <ExternalLink className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity shrink-0 text-purple-600" />}
                  </h3>

                  <p className="text-sm text-gray-600 leading-relaxed">
                    {item.description}
                  </p>
                </div>

                {item.link && (
                  <div className="pt-4 mt-6 border-t border-gray-100 flex items-center text-xs font-bold text-purple-600 group-hover:text-purple-700">
                    <span>Read Press Coverage</span>
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
                {Content}
              </a>
            ) : (
              <div key={index} className="h-full">
                {Content}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Achievements;
