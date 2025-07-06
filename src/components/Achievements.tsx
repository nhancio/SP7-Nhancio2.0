import React from 'react';
import { Trophy, Award, TrendingUp } from 'lucide-react';

const Achievements = () => {
  const achievements = [
    {
      icon: <Trophy className="w-8 h-8" />,
      title: "Won Mathhack 2.0",
      description: "Winners of Mathhack 2.0 by Govt of Telangana",
      color: "bg-yellow-100 text-yellow-600"
    },
    {
      icon: <Award className="w-8 h-8" />,
      title: "Incubated by T-Hub",
      description: "Recognized and incubated by T-Hub Hyderabad",
      color: "bg-purple-100 text-purple-600"
    },
    {
      icon: <TrendingUp className="w-8 h-8" />,
      title: "2x Growth in Hyderabad",
      description: "Growing 2x in Hyderabad markets",
      color: "bg-green-100 text-green-600"
    }
  ];

  const stats = [
    { number: "500+", label: "AI Models Deployed" },
    { number: "1M+", label: "Data Points Processed" },
    { number: "99.9%", label: "Uptime Guarantee" },
    { number: "24/7", label: "Support Available" }
  ];

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

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {achievements.map((achievement, index) => (
            <div
              key={index}
              className="bg-gradient-to-br from-white/85 to-white/50 backdrop-blur-sm rounded-3xl p-8 text-center shadow-lg hover:shadow-xl transition-all duration-500 transform hover:scale-105 border border-white/30"
              style={{
                boxShadow: 'inset 0 6px 12px rgba(255, 255, 255, 0.9), inset 0 -6px 12px rgba(0, 0, 0, 0.06), 0 12px 40px rgba(0, 0, 0, 0.15), 0 4px 12px rgba(0, 0, 0, 0.1)',
              }}
            >
              <div className={`w-16 h-16 rounded-2xl ${achievement.color} flex items-center justify-center mx-auto mb-6`}>
                {achievement.icon}
              </div>
              <h3 className="text-lg font-semibold text-gray-800 mb-3">
                {achievement.title}
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                {achievement.description}
              </p>
            </div>
          ))}
        </div>

        <div className="bg-gradient-to-br from-white/85 to-white/50 backdrop-blur-sm rounded-3xl p-8 shadow-lg border border-white/30"
             style={{
               boxShadow: 'inset 0 6px 12px rgba(255, 255, 255, 0.9), inset 0 -6px 12px rgba(0, 0, 0, 0.06), 0 12px 40px rgba(0, 0, 0, 0.15), 0 4px 12px rgba(0, 0, 0, 0.1)',
             }}>
          <div className="grid md:grid-cols-4 gap-8 text-center">
            {stats.map((stat, index) => (
              <div key={index}>
                <div className="text-3xl md:text-4xl font-bold text-purple-600 mb-2">
                  {stat.number}
                </div>
                <div className="text-gray-600 font-medium">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Achievements;