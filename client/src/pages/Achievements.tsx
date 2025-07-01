import React, { useState, useEffect } from 'react';
import { Award, Users, Trophy, Star, Calendar, MapPin } from 'lucide-react';

export default function Achievements() {
  const [counts, setCounts] = useState({
    projects: 0,
    clients: 0,
    experience: 0,
    satisfaction: 0
  });

  useEffect(() => {
    const targets = { projects: 1200, clients: 500, experience: 8, satisfaction: 99 };
    const duration = 2000; // 2 seconds
    const steps = 60;
    const increment = {
      projects: targets.projects / steps,
      clients: targets.clients / steps,
      experience: targets.experience / steps,
      satisfaction: targets.satisfaction / steps
    };

    let step = 0;
    const timer = setInterval(() => {
      step++;
      setCounts({
        projects: Math.min(Math.floor(increment.projects * step), targets.projects),
        clients: Math.min(Math.floor(increment.clients * step), targets.clients),
        experience: Math.min(Math.floor(increment.experience * step), targets.experience),
        satisfaction: Math.min(Math.floor(increment.satisfaction * step), targets.satisfaction)
      });

      if (step >= steps) {
        clearInterval(timer);
      }
    }, duration / steps);

    return () => clearInterval(timer);
  }, []);

  const milestones = [
    {
      year: '2016',
      title: 'Company Founded',
      description: 'Started as a small digital agency with a vision to transform businesses through technology.',
      icon: Calendar
    },
    {
      year: '2018',
      title: 'First 100 Projects',
      description: 'Reached our first major milestone with 100 successful project deliveries.',
      icon: Trophy
    },
    {
      year: '2020',
      title: 'AI Integration',
      description: 'Pioneered AI and automation services, becoming early adopters in the industry.',
      icon: Award
    },
    {
      year: '2022',
      title: 'Global Expansion',
      description: 'Expanded services globally with multilingual support and international clients.',
      icon: MapPin
    },
    {
      year: '2024',
      title: 'Industry Recognition',
      description: 'Recognized as a leading digital transformation partner with 99% client satisfaction.',
      icon: Star
    }
  ];

  const testimonials = [
    {
      name: 'Sarah Johnson',
      company: 'TechStart Inc.',
      role: 'CEO',
      content: 'Nhancio transformed our business with their AI automation solutions. We\'ve seen a 300% increase in efficiency.',
      rating: 5,
      image: 'https://images.pexels.com/photos/3778876/pexels-photo-3778876.jpeg?auto=compress&cs=tinysrgb&w=150'
    },
    {
      name: 'Michael Chen',
      company: 'Global Commerce',
      role: 'CTO',
      content: 'Their SaaS development expertise is unmatched. The platform they built scaled seamlessly with our growth.',
      rating: 5,
      image: 'https://images.pexels.com/photos/3777943/pexels-photo-3777943.jpeg?auto=compress&cs=tinysrgb&w=150'
    },
    {
      name: 'Emily Rodriguez',
      company: 'Boutique Hotels',
      role: 'Operations Manager',
      content: 'The voice agent system revolutionized our customer service. Bookings increased by 150% in the first quarter.',
      rating: 5,
      image: 'https://images.pexels.com/photos/3778876/pexels-photo-3778876.jpeg?auto=compress&cs=tinysrgb&w=150'
    }
  ];

  const awards = [
    {
      title: 'Best Digital Agency 2024',
      organization: 'Tech Innovation Awards',
      description: 'Recognized for outstanding innovation in AI and digital transformation services.'
    },
    {
      title: 'Customer Excellence Award',
      organization: 'Business Leadership Council',
      description: 'Honored for maintaining 99% client satisfaction rate across all projects.'
    },
    {
      title: 'Rising Star in SaaS',
      organization: 'Software Development Association',
      description: 'Acknowledged for exceptional growth and expertise in SaaS development.'
    }
  ];

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-blue-900 to-purple-900">
        <div className="container mx-auto px-6 text-center">
          <h1 className="text-5xl font-bold text-white mb-6">Our Achievements</h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            A track record of excellence, innovation, and client success spanning over 8 years in the industry.
          </p>
        </div>
      </section>

      {/* Stats Counter */}
      <section className="py-20 bg-white dark:bg-gray-800">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-20 h-20 bg-gradient-to-br from-blue-600 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <Trophy className="w-10 h-10 text-white" />
              </div>
              <div className="text-4xl font-bold text-gray-900 dark:text-white mb-2">
                {counts.projects}+
              </div>
              <div className="text-gray-600 dark:text-gray-400">Projects Completed</div>
            </div>
            
            <div className="text-center">
              <div className="w-20 h-20 bg-gradient-to-br from-green-600 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-10 h-10 text-white" />
              </div>
              <div className="text-4xl font-bold text-gray-900 dark:text-white mb-2">
                {counts.clients}+
              </div>
              <div className="text-gray-600 dark:text-gray-400">Happy Clients</div>
            </div>
            
            <div className="text-center">
              <div className="w-20 h-20 bg-gradient-to-br from-purple-600 to-pink-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <Calendar className="w-10 h-10 text-white" />
              </div>
              <div className="text-4xl font-bold text-gray-900 dark:text-white mb-2">
                {counts.experience}+
              </div>
              <div className="text-gray-600 dark:text-gray-400">Years Experience</div>
            </div>
            
            <div className="text-center">
              <div className="w-20 h-20 bg-gradient-to-br from-orange-600 to-red-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <Star className="w-10 h-10 text-white" />
              </div>
              <div className="text-4xl font-bold text-gray-900 dark:text-white mb-2">
                {counts.satisfaction}%
              </div>
              <div className="text-gray-600 dark:text-gray-400">Satisfaction Rate</div>
            </div>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20 bg-gray-50 dark:bg-gray-900">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-6">
              Our Journey
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
              Key milestones that shaped our growth and success over the years.
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="relative">
              {/* Timeline line */}
              <div className="absolute left-1/2 transform -translate-x-1/2 w-1 bg-gradient-to-b from-blue-600 to-purple-600 h-full rounded-full"></div>
              
              {milestones.map((milestone, index) => (
                <div key={index} className={`relative flex items-center mb-12 ${
                  index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'
                }`}>
                  {/* Content */}
                  <div className={`w-5/12 ${index % 2 === 0 ? 'text-right pr-8' : 'text-left pl-8'}`}>
                    <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300">
                      <div className="flex items-center mb-3">
                        <milestone.icon className="w-6 h-6 text-blue-600 mr-2" />
                        <span className="text-2xl font-bold text-blue-600">{milestone.year}</span>
                      </div>
                      <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                        {milestone.title}
                      </h3>
                      <p className="text-gray-600 dark:text-gray-400">
                        {milestone.description}
                      </p>
                    </div>
                  </div>
                  
                  {/* Center point */}
                  <div className="w-8 h-8 bg-gradient-to-br from-blue-600 to-purple-600 rounded-full border-4 border-white dark:border-gray-900 z-10"></div>
                  
                  {/* Spacer */}
                  <div className="w-5/12"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Awards Section */}
      <section className="py-20 bg-white dark:bg-gray-800">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-6">
              Awards & Recognition
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
              Industry recognition for our commitment to excellence and innovation.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {awards.map((award, index) => (
              <div
                key={index}
                className="text-center group hover:transform hover:scale-105 transition-all duration-300"
              >
                <div className="w-24 h-24 bg-gradient-to-br from-yellow-500 to-orange-500 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:shadow-lg transition-shadow duration-300">
                  <Award className="w-12 h-12 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                  {award.title}
                </h3>
                <p className="text-blue-600 dark:text-blue-400 font-medium mb-3">
                  {award.organization}
                </p>
                <p className="text-gray-600 dark:text-gray-400">
                  {award.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-gray-50 dark:bg-gray-900">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-6">
              Client Success Stories
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
              Real testimonials from clients who have achieved remarkable results with our services.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300"
              >
                <div className="flex items-center mb-4">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full mr-4 object-cover"
                  />
                  <div>
                    <h4 className="font-semibold text-gray-900 dark:text-white">
                      {testimonial.name}
                    </h4>
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                      {testimonial.role}, {testimonial.company}
                    </p>
                  </div>
                </div>
                
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-500 fill-current" />
                  ))}
                </div>
                
                <p className="text-gray-700 dark:text-gray-300 italic">
                  "{testimonial.content}"
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-blue-900 to-purple-900">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Join Our Success Stories
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Ready to become our next success story? Let's work together to achieve your business goals.
          </p>
          <button className="px-8 py-4 bg-white text-blue-900 rounded-xl font-semibold hover:shadow-lg transform hover:scale-105 transition-all duration-300">
            Start Your Success Story
          </button>
        </div>
      </section>
    </div>
  );
}