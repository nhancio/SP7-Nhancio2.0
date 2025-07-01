import React from 'react';
import { Bot, Database, Headphones, Code, ShoppingCart, Globe, Smartphone, Tablet, Wrench, Workflow } from 'lucide-react';
import TavusVideo from '../components/Widgets/TavusVideo';

export default function Services() {
  const services = [
    {
      icon: Bot,
      title: 'AI & Data Science',
      description: 'Harness the power of artificial intelligence and data analytics to transform your business operations and decision-making processes.',
      features: ['Machine Learning Models', 'Predictive Analytics', 'AI Chatbots', 'Natural Language Processing', 'Data Visualization', 'Business Intelligence']
    },
    {
      icon: Workflow,
      title: 'Automation & Agents',
      description: 'Streamline your workflows with intelligent automation solutions and AI agents that work around the clock.',
      features: ['Process Automation', 'Voice AI Agents', 'Workflow Optimization', 'n8n Templates', 'Custom Integrations', 'Business Process Management']
    },
    {
      icon: Globe,
      title: 'Design & Marketing',
      description: 'Create stunning digital experiences and effective marketing strategies that engage your audience and drive growth.',
      features: ['UI/UX Design', 'Brand Identity', 'Digital Marketing', 'Content Strategy', 'SEO Optimization', 'Social Media Management']
    },
    {
      icon: Code,
      title: 'SaaS & Development',
      description: 'Build scalable software solutions with modern technologies, from web applications to mobile apps and enterprise systems.',
      features: ['SaaS Development', 'Web Applications', 'Mobile Apps', 'API Development', 'Cloud Solutions', 'Custom Software']
    }
  ];

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-blue-900 to-purple-900 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-32 h-32 bg-blue-400/20 rounded-full blur-3xl animate-float"></div>
          <div className="absolute bottom-20 right-10 w-24 h-24 bg-purple-400/30 rounded-full blur-2xl animate-float-reverse"></div>
          <div className="absolute top-1/2 left-1/3 w-16 h-16 bg-cyan-400/20 rounded-full blur-xl animate-pulse"></div>
        </div>
        <div className="container mx-auto px-6 text-center relative z-10">
          <h1 className="text-5xl font-bold text-white mb-6 animate-slide-in-up">
            <span className="gradient-text animate-gradient bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400">
              Our Services
            </span>
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto animate-slide-in-up delay-200">
            Comprehensive digital solutions designed to transform your business and drive growth through technology innovation.
          </p>
        </div>
      </section>

      {/* Video Section */}
      <section className="py-20 bg-gray-50 dark:bg-gray-900">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-6">
              Discover Our Expertise
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-400">
              Learn how our services can transform your business
            </p>
          </div>
          <div className="max-w-3xl mx-auto">
            <TavusVideo title="Our Services Overview" className="shadow-2xl" />
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-white dark:bg-gray-800">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="group bg-gray-50 dark:bg-gray-900 rounded-2xl p-8 hover:shadow-2xl hover:transform hover:scale-105 transition-all duration-300 border border-gray-200 dark:border-gray-700 animate-slide-in-up interactive-card hover-lift"
                style={{animationDelay: `${index * 0.1}s`}}
              >
                <div className="w-16 h-16 bg-gradient-to-br from-blue-600 to-purple-600 rounded-xl flex items-center justify-center mb-6 group-hover:shadow-lg transition-shadow duration-300 animate-pulse-glow">
                  <service.icon className="w-8 h-8 text-white animate-float" />
                </div>
                
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4 gradient-text">
                  {service.title}
                </h3>
                
                <p className="text-gray-600 dark:text-gray-400 mb-6 leading-relaxed">
                  {service.description}
                </p>
                
                <ul className="space-y-2">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-sm text-gray-600 dark:text-gray-400 animate-slide-in-left" style={{animationDelay: `${(index * 0.1) + (idx * 0.05)}s`}}>
                      <div className="w-2 h-2 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full mr-3 animate-pulse"></div>
                      {feature}
                    </li>
                  ))}
                </ul>
                
                <button className="mt-6 w-full px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg font-medium hover:shadow-lg transform hover:scale-105 transition-all duration-200 animate-shimmer hover-lift">
                  Learn More
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-gray-50 dark:bg-gray-900">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-6">
              Our Development Process
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
              A proven methodology that ensures successful project delivery every time.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { step: '01', title: 'Discovery', description: 'Understanding your business needs and objectives' },
              { step: '02', title: 'Planning', description: 'Creating detailed project roadmap and timelines' },
              { step: '03', title: 'Development', description: 'Building your solution with best practices' },
              { step: '04', title: 'Delivery', description: 'Testing, deployment, and ongoing support' }
            ].map((phase, index) => (
              <div key={index} className="text-center group">
                <div className="w-20 h-20 bg-gradient-to-br from-blue-600 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:shadow-lg transition-shadow duration-300">
                  <span className="text-2xl font-bold text-white">{phase.step}</span>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                  {phase.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-400">
                  {phase.description}
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
            Ready to Get Started?
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Let's discuss your project and create a solution that drives real results for your business.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-8 py-4 bg-white text-blue-900 rounded-xl font-semibold hover:shadow-lg transform hover:scale-105 transition-all duration-300">
              Start Your Project
            </button>
            <button className="px-8 py-4 bg-white/10 backdrop-blur-sm text-white border border-white/20 rounded-xl font-semibold hover:bg-white/20 transition-all duration-300">
              Schedule Consultation
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}