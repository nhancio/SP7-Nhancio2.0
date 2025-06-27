import React from 'react';
import { Bot, Database, Headphones, Code, ShoppingCart, Globe, Smartphone, Tablet, Wrench, Workflow } from 'lucide-react';
import TavusVideo from '../components/Widgets/TavusVideo';

export default function Services() {
  const services = [
    {
      icon: Bot,
      title: 'AI Workflows & Automation',
      description: 'Streamline your business processes with intelligent automation solutions that reduce manual work and increase efficiency.',
      features: ['Process Automation', 'AI Chatbots', 'Workflow Optimization', 'Machine Learning Integration']
    },
    {
      icon: Workflow,
      title: 'n8n Template Custom-Making Services',
      description: 'Professional n8n automation templates and custom workflow solutions for seamless business process automation.',
      features: ['Custom n8n Templates', 'Workflow Automation', 'API Integrations', 'Business Process Optimization']
    },
    {
      icon: Database,
      title: 'Data Science Solutions',
      description: 'Transform your data into actionable insights with advanced analytics, predictive modeling, and business intelligence.',
      features: ['Data Analytics', 'Predictive Modeling', 'Business Intelligence', 'Data Visualization']
    },
    {
      icon: Headphones,
      title: 'Business Voice & Video Agent Setup',
      description: 'Professional voice and video agent solutions for hotels, sales teams, and customer support operations.',
      features: ['Voice AI Agents', 'Video Support', 'Call Center Setup', 'Customer Service Automation']
    },
    {
      icon: Code,
      title: 'SaaS Development',
      description: 'Custom Software-as-a-Service solutions built with modern technologies and scalable architecture.',
      features: ['Cloud-Native Architecture', 'API Development', 'Multi-tenant Systems', 'Subscription Management']
    },
    {
      icon: ShoppingCart,
      title: 'Shopify & Ecommerce Setup',
      description: 'Complete ecommerce solutions from store setup to payment processing and inventory management.',
      features: ['Store Setup', 'Payment Integration', 'Inventory Management', 'Marketing Automation']
    },
    {
      icon: Globe,
      title: 'WordPress Development',
      description: 'Professional WordPress websites with custom themes, plugins, and optimization for performance and SEO.',
      features: ['Custom Themes', 'Plugin Development', 'SEO Optimization', 'Performance Tuning']
    },
    {
      icon: Smartphone,
      title: 'Android App Development',
      description: 'Native Android applications with modern UI/UX design and seamless performance across all devices.',
      features: ['Native Development', 'Material Design', 'Play Store Optimization', 'Push Notifications']
    },
    {
      icon: Tablet,
      title: 'iOS App Development',
      description: 'Premium iOS applications built with Swift and SwiftUI, optimized for all Apple devices.',
      features: ['Swift Development', 'App Store Optimization', 'iOS Design Guidelines', 'Cross-device Compatibility']
    },
    {
      icon: Wrench,
      title: 'Custom Software Services',
      description: 'Tailored software solutions designed specifically for your unique business requirements and workflows.',
      features: ['Custom Development', 'Legacy System Integration', 'API Development', 'Database Design']
    }
  ];

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-blue-900 to-purple-900">
        <div className="container mx-auto px-6 text-center">
          <h1 className="text-5xl font-bold text-white mb-6">Our Services</h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
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
                className="group bg-gray-50 dark:bg-gray-900 rounded-2xl p-8 hover:shadow-2xl hover:transform hover:scale-105 transition-all duration-300 border border-gray-200 dark:border-gray-700"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-blue-600 to-purple-600 rounded-xl flex items-center justify-center mb-6 group-hover:shadow-lg transition-shadow duration-300">
                  <service.icon className="w-8 h-8 text-white" />
                </div>
                
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                  {service.title}
                </h3>
                
                <p className="text-gray-600 dark:text-gray-400 mb-6 leading-relaxed">
                  {service.description}
                </p>
                
                <ul className="space-y-2">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-sm text-gray-600 dark:text-gray-400">
                      <div className="w-2 h-2 bg-blue-600 rounded-full mr-3"></div>
                      {feature}
                    </li>
                  ))}
                </ul>
                
                <button className="mt-6 w-full px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg font-medium hover:shadow-lg transform hover:scale-105 transition-all duration-200">
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