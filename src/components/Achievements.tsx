import React from 'react';
import { Trophy, Award, TrendingUp } from 'lucide-react';
import { motion } from 'framer-motion';

const Achievements = () => {
  const achievements = [
    {
      icon: <img src="/logos/Telangana-LOGO.png" alt="Telangana Government - Official Partner Logo" className="w-10 h-10 object-contain" />,
      title: "Won Mathhack 2.0",
      description: "Winners of Mathhack 2.0 by Govt of Telangana",
      color: "bg-yellow-100 text-yellow-600",
      link: "https://timesofindia.indiatimes.com/city/hyderabad/ai-hackathon-flatmate-finder-to-hair-care-help/articleshow/113139008.cms"
    },
    {
      icon: <img src="/logos/thub-logo.png" alt="T-Hub Hyderabad - Startup Incubator Logo" className="w-10 h-10 object-contain" />,
      title: "Incubated by T-Hub",
      description: "Recognized and incubated by T-Hub Hyderabad",
      color: "bg-purple-100 text-purple-600",
      link: "https://thub.co.in/"
    },
    {
      icon: <TrendingUp className="w-8 h-8" />,
      title: "Fastest growing startup in Hyderabad",
      description: "Working on innovative solutions for the future",
      color: "bg-green-100 text-green-600"
    }
  ];

  const cardVariants = {
    offscreen: { opacity: 0, y: 40 },
    onscreen: { opacity: 1, y: 0, transition: { type: 'spring', bounce: 0.3, duration: 0.7 } }
  };

  return (
    <section id="achievements" className="py-20 bg-gradient-to-br from-yellow-50 via-orange-50 to-red-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            Our Achievements
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Recognition and milestones that showcase our commitment to excellence
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {achievements.map((achievement, index) => (
            achievement.link ? (
              <motion.a
                key={index}
                href={achievement.link}
                target="_blank"
                rel="noopener noreferrer"
                className={`bg-gradient-to-br from-white/85 to-white/50 backdrop-blur-sm rounded-3xl p-8 shadow-lg hover:shadow-xl transition-all duration-500 transform hover:scale-105 group border border-white/30 ${achievement.color}`}
                style={{
                  boxShadow: 'inset 0 6px 12px rgba(255, 255, 255, 0.9), inset 0 -6px 12px rgba(0, 0, 0, 0.06), 0 12px 40px rgba(0, 0, 0, 0.15), 0 4px 12px rgba(0, 0, 0, 0.1)',
                }}
                initial="offscreen"
                whileInView="onscreen"
                viewport={{ once: true, amount: 0.3 }}
                variants={cardVariants}
                whileHover={{ scale: 1.07, boxShadow: '0 0 24px 2px #facc15' }}
              >
                <div className="flex items-center justify-center mb-6">
                  {achievement.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-800 mb-2">
                  {achievement.title}
                </h3>
                <p className="text-gray-600 text-sm mb-4 leading-relaxed">
                  {achievement.description}
                </p>
              </motion.a>
            ) : (
              <motion.div
                key={index}
                className={`bg-gradient-to-br from-white/85 to-white/50 backdrop-blur-sm rounded-3xl p-8 shadow-lg hover:shadow-xl transition-all duration-500 transform hover:scale-105 group border border-white/30 ${achievement.color}`}
                style={{
                  boxShadow: 'inset 0 6px 12px rgba(255, 255, 255, 0.9), inset 0 -6px 12px rgba(0, 0, 0, 0.06), 0 12px 40px rgba(0, 0, 0, 0.15), 0 4px 12px rgba(0, 0, 0, 0.1)',
                }}
                initial="offscreen"
                whileInView="onscreen"
                viewport={{ once: true, amount: 0.3 }}
                variants={cardVariants}
                whileHover={{ scale: 1.07, boxShadow: '0 0 24px 2px #4ade80' }}
              >
                <div className="flex items-center justify-center mb-6">
                  {achievement.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-800 mb-2">
                  {achievement.title}
                </h3>
                <p className="text-gray-600 text-sm mb-4 leading-relaxed">
                  {achievement.description}
                </p>
              </motion.div>
            )
          ))}
        </div>
      </div>
    </section>
  );
};

export default Achievements;