import React from 'react';
import { Globe, Brain, Zap, BarChart, TrendingUp, Palette } from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: <Globe className="w-10 h-10" />,
      title: "Custom Web and Mobile App Development",
      description: "Full-stack development with modern frameworks and technologies",
      color: "bg-blue-100 text-blue-600"
    },
    {
      icon: <Brain className="w-10 h-10" />,
      title: "End-to-End AI & ML Solutions",
      description: "From concept to deployment, we build intelligent systems",
      color: "bg-purple-100 text-purple-600"
    },
    {
      icon: <Zap className="w-10 h-10" />,
      title: "Workflow Automation (n8n, Zapier)",
      description: "Streamline your business processes with smart automation",
      color: "bg-green-100 text-green-600"
    },
    {
      icon: <BarChart className="w-10 h-10" />,
      title: "Data Analytics & Dashboards",
      description: "Transform data into actionable insights with beautiful visualizations",
      color: "bg-orange-100 text-orange-600"
    },
    {
      icon: <TrendingUp className="w-10 h-10" />,
      title: "Marketing & Growth Consulting",
      description: "Strategic guidance to accelerate your business growth",
      color: "bg-pink-100 text-pink-600"
    },
    {
      icon: <Palette className="w-10 h-10" />,
      title: "UI/UX Design & Branding",
      description: "Create memorable user experiences with stunning design",
      color: "bg-cyan-100 text-cyan-600"
    }
  ];

  return (
    <section id="services" className="py-20 bg-gradient-to-br from-gray-50 to-purple-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            Our Services
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Comprehensive solutions to transform your business with cutting-edge technology
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-gradient-to-br from-white/85 to-white/50 backdrop-blur-sm rounded-3xl p-8 shadow-lg hover:shadow-xl transition-all duration-500 transform hover:scale-105 hover:-translate-y-2 border border-white/30"
              style={{
                boxShadow: 'inset 0 6px 12px rgba(255, 255, 255, 0.9), inset 0 -6px 12px rgba(0, 0, 0, 0.06), 0 12px 40px rgba(0, 0, 0, 0.15), 0 4px 12px rgba(0, 0, 0, 0.1)',
              }}
            >
              <div className={`w-16 h-16 rounded-2xl ${service.color} flex items-center justify-center mb-6`}>
                {service.icon}
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-3">
                {service.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;