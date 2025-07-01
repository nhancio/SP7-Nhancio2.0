import React, { useState } from 'react';
import { Link } from 'wouter';
import { 
  Workflow, 
  Zap, 
  Clock, 
  DollarSign, 
  Users, 
  BarChart3, 
  Mail, 
  Database, 
  Cloud, 
  ArrowRight,
  CheckCircle,
  Play,
  Settings,
  Target,
  TrendingUp
} from 'lucide-react';

export default function AutomationSetup() {
  const [activeTab, setActiveTab] = useState('templates');

  const automationTemplates = [
    {
      title: 'Lead Generation Automation',
      description: 'Automatically capture, qualify, and nurture leads from multiple sources',
      price: '$299',
      features: ['Multi-channel lead capture', 'Auto-qualification scoring', 'CRM integration', 'Email sequences'],
      category: 'Sales',
      complexity: 'Medium',
      setupTime: '2-3 days'
    },
    {
      title: 'Customer Support Workflow',
      description: 'Streamline support tickets with intelligent routing and auto-responses',
      price: '$399',
      features: ['Ticket auto-routing', 'Priority classification', 'Response templates', 'Escalation rules'],
      category: 'Support',
      complexity: 'Medium',
      setupTime: '3-4 days'
    },
    {
      title: 'E-commerce Order Processing',
      description: 'Complete order fulfillment automation from purchase to delivery',
      price: '$499',
      features: ['Order validation', 'Inventory updates', 'Shipping automation', 'Customer notifications'],
      category: 'E-commerce',
      complexity: 'High',
      setupTime: '4-5 days'
    },
    {
      title: 'Social Media Management',
      description: 'Automate content posting, engagement tracking, and reporting',
      price: '$249',
      features: ['Multi-platform posting', 'Engagement monitoring', 'Analytics reports', 'Content scheduling'],
      category: 'Marketing',
      complexity: 'Low',
      setupTime: '1-2 days'
    },
    {
      title: 'Invoice & Payment Processing',
      description: 'Automated billing, payment tracking, and financial reporting',
      price: '$349',
      features: ['Auto invoice generation', 'Payment reminders', 'Financial reporting', 'Tax calculations'],
      category: 'Finance',
      complexity: 'Medium',
      setupTime: '2-3 days'
    },
    {
      title: 'HR Onboarding Workflow',
      description: 'Streamline employee onboarding with automated document processing',
      price: '$399',
      features: ['Document collection', 'Task assignments', 'Progress tracking', 'Compliance checks'],
      category: 'HR',
      complexity: 'Medium',
      setupTime: '3-4 days'
    }
  ];

  const customServices = [
    {
      title: 'Custom n8n Workflow Development',
      description: 'Tailored automation solutions built specifically for your business needs',
      startingPrice: '$799',
      features: [
        'Business process analysis',
        'Custom workflow design',
        'API integrations',
        'Testing & optimization',
        'Documentation & training',
        '30-day support included'
      ]
    },
    {
      title: 'Enterprise Automation Suite',
      description: 'Complete automation transformation for large organizations',
      startingPrice: '$2,999',
      features: [
        'Multi-department workflows',
        'Advanced integrations',
        'Custom dashboards',
        'Performance monitoring',
        'Team training program',
        '90-day support & maintenance'
      ]
    }
  ];

  const benefits = [
    {
      icon: Clock,
      title: 'Save 40+ Hours Weekly',
      description: 'Automate repetitive tasks and focus on strategic work'
    },
    {
      icon: DollarSign,
      title: 'Reduce Operational Costs',
      description: 'Cut manual processing costs by up to 70%'
    },
    {
      icon: Target,
      title: 'Improve Accuracy',
      description: 'Eliminate human errors with automated processes'
    },
    {
      icon: TrendingUp,
      title: 'Scale Efficiently',
      description: 'Handle increased workload without hiring more staff'
    }
  ];

  const integrations = [
    'Slack', 'Gmail', 'Shopify', 'WordPress', 'Salesforce', 'HubSpot', 
    'Stripe', 'PayPal', 'Zoom', 'Calendly', 'Airtable', 'Google Sheets',
    'Mailchimp', 'Zapier', 'Webhook', 'REST API', 'GraphQL', 'Database'
  ];

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.pexels.com/photos/3861943/pexels-photo-3861943.jpeg?auto=compress&cs=tinysrgb&w=1200')] bg-cover bg-center opacity-10"></div>
        <div className="absolute inset-0">
          <div className="absolute top-20 left-20 w-64 h-64 bg-blue-600/20 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 right-20 w-64 h-64 bg-purple-600/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        </div>
        
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full text-white mb-6">
              <Workflow className="w-5 h-5 mr-2" />
              <span className="text-sm font-medium">Professional n8n Automation Services</span>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
              Automate Your Business with 
              <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent"> n8n</span>
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-300 mb-8 leading-relaxed max-w-3xl mx-auto">
              Transform your business operations with custom n8n workflows and automation templates. 
              Save time, reduce costs, and scale efficiently with our Better.com-style automation solutions.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <button className="px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-xl font-semibold hover:shadow-2xl transform hover:scale-105 transition-all duration-300 flex items-center justify-center space-x-2">
                <Play className="w-5 h-5" />
                <span>View Demo Workflows</span>
              </button>
              <Link
                to="/contact"
                className="px-8 py-4 bg-white/10 backdrop-blur-sm text-white border border-white/20 rounded-xl font-semibold hover:bg-white/20 transition-all duration-300"
              >
                Get Custom Quote
              </Link>
            </div>

            {/* Quick Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-2xl mx-auto">
              {[
                { number: '500+', label: 'Workflows Created' },
                { number: '40+', label: 'Hours Saved Weekly' },
                { number: '99%', label: 'Uptime Guarantee' },
                { number: '24/7', label: 'Support Available' }
              ].map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-2xl font-bold text-white mb-1">{stat.number}</div>
                  <div className="text-sm text-gray-300">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-white dark:bg-gray-800">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-6">
              Why Choose Our n8n Automation Services?
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
              Experience the power of professional automation with measurable results
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <div
                key={index}
                className="text-center group hover:transform hover:scale-105 transition-all duration-300"
              >
                <div className="w-20 h-20 bg-gradient-to-br from-blue-600 to-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:shadow-lg transition-shadow duration-300">
                  <benefit.icon className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                  {benefit.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-400">
                  {benefit.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Tabs */}
      <section className="py-20 bg-gray-50 dark:bg-gray-900">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-6">
              Our Automation Solutions
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
              Choose from ready-made templates or get a completely custom solution
            </p>
          </div>

          {/* Tab Navigation */}
          <div className="flex justify-center mb-12">
            <div className="bg-white dark:bg-gray-800 rounded-xl p-2 shadow-lg">
              <button
                onClick={() => setActiveTab('templates')}
                className={`px-6 py-3 rounded-lg font-medium transition-all duration-200 ${
                  activeTab === 'templates'
                    ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg'
                    : 'text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white'
                }`}
              >
                Ready Templates
              </button>
              <button
                onClick={() => setActiveTab('custom')}
                className={`px-6 py-3 rounded-lg font-medium transition-all duration-200 ${
                  activeTab === 'custom'
                    ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg'
                    : 'text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white'
                }`}
              >
                Custom Solutions
              </button>
            </div>
          </div>

          {/* Templates Tab */}
          {activeTab === 'templates' && (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {automationTemplates.map((template, index) => (
                <div
                  key={index}
                  className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg hover:shadow-2xl transform hover:scale-105 transition-all duration-300 border border-gray-200 dark:border-gray-700"
                >
                  <div className="flex items-center justify-between mb-4">
                    <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                      template.complexity === 'Low' ? 'bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-400' :
                      template.complexity === 'Medium' ? 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900/30 dark:text-yellow-400' :
                      'bg-red-100 text-red-800 dark:bg-red-900/30 dark:text-red-400'
                    }`}>
                      {template.complexity} Complexity
                    </span>
                    <span className="text-2xl font-bold text-blue-600">{template.price}</span>
                  </div>

                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                    {template.title}
                  </h3>
                  
                  <p className="text-gray-600 dark:text-gray-400 mb-4">
                    {template.description}
                  </p>

                  <div className="flex items-center text-sm text-gray-500 dark:text-gray-400 mb-4">
                    <Clock className="w-4 h-4 mr-1" />
                    <span>Setup: {template.setupTime}</span>
                    <span className="mx-2">•</span>
                    <span>{template.category}</span>
                  </div>

                  <ul className="space-y-2 mb-6">
                    {template.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-sm text-gray-600 dark:text-gray-400">
                        <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>

                  <button className="w-full px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg font-medium hover:shadow-lg transform hover:scale-105 transition-all duration-200">
                    Get This Template
                  </button>
                </div>
              ))}
            </div>
          )}

          {/* Custom Solutions Tab */}
          {activeTab === 'custom' && (
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
              {customServices.map((service, index) => (
                <div
                  key={index}
                  className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-shadow duration-300 border border-gray-200 dark:border-gray-700"
                >
                  <div className="text-center mb-6">
                    <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                      {service.title}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-400 mb-4">
                      {service.description}
                    </p>
                    <div className="text-3xl font-bold text-blue-600">
                      Starting at {service.startingPrice}
                    </div>
                  </div>

                  <ul className="space-y-3 mb-8">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-gray-700 dark:text-gray-300">
                        <CheckCircle className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>

                  <button className="w-full px-6 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-xl font-semibold hover:shadow-lg transform hover:scale-105 transition-all duration-300">
                    Request Custom Quote
                  </button>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Integrations Section */}
      <section className="py-20 bg-white dark:bg-gray-800">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-6">
              Seamless Integrations
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
              Connect with 500+ apps and services to create powerful automation workflows
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {integrations.map((integration, index) => (
              <div
                key={index}
                className="bg-gray-50 dark:bg-gray-900 rounded-xl p-4 text-center hover:shadow-lg transform hover:scale-105 transition-all duration-300 border border-gray-200 dark:border-gray-700"
              >
                <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-purple-600 rounded-lg flex items-center justify-center mx-auto mb-3">
                  <Settings className="w-6 h-6 text-white" />
                </div>
                <span className="text-sm font-medium text-gray-900 dark:text-white">
                  {integration}
                </span>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <p className="text-gray-600 dark:text-gray-400 mb-4">
              Don't see your app? We can integrate with any service that has an API.
            </p>
            <button className="px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg font-medium hover:shadow-lg transform hover:scale-105 transition-all duration-200">
              Request Custom Integration
            </button>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-gray-50 dark:bg-gray-900">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-6">
              Our Automation Process
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
              From consultation to deployment, we ensure your automation works perfectly
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { 
                step: '01', 
                title: 'Analysis', 
                description: 'We analyze your current processes and identify automation opportunities',
                icon: BarChart3
              },
              { 
                step: '02', 
                title: 'Design', 
                description: 'Create custom workflow designs tailored to your specific needs',
                icon: Settings
              },
              { 
                step: '03', 
                title: 'Build', 
                description: 'Develop and test your n8n workflows with rigorous quality assurance',
                icon: Workflow
              },
              { 
                step: '04', 
                title: 'Deploy', 
                description: 'Launch your automation with training and ongoing support',
                icon: Zap
              }
            ].map((phase, index) => (
              <div key={index} className="text-center group">
                <div className="w-20 h-20 bg-gradient-to-br from-blue-600 to-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:shadow-lg transition-shadow duration-300">
                  <phase.icon className="w-10 h-10 text-white" />
                </div>
                <div className="text-3xl font-bold text-blue-600 mb-2">{phase.step}</div>
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
            Ready to Automate Your Business?
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Join hundreds of businesses that have transformed their operations with our n8n automation solutions.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="px-8 py-4 bg-white text-blue-900 rounded-xl font-semibold hover:shadow-lg transform hover:scale-105 transition-all duration-300 flex items-center justify-center space-x-2"
            >
              <span>Start Your Automation Journey</span>
              <ArrowRight className="w-5 h-5" />
            </Link>
            <button className="px-8 py-4 bg-white/10 backdrop-blur-sm text-white border border-white/20 rounded-xl font-semibold hover:bg-white/20 transition-all duration-300">
              Schedule Free Consultation
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}