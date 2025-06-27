import React from 'react';
import { Check, Star, Zap, Crown } from 'lucide-react';

export default function Pricing() {
  const plans = [
    {
      name: 'Basic',
      price: '$1,499',
      icon: Star,
      description: 'Perfect for small businesses and startups',
      features: [
        'Template-based website or app',
        'Basic features and functionality',
        'Responsive design',
        'Basic SEO optimization',
        'Email support',
        '30-day warranty',
        'Basic documentation'
      ],
      popular: false,
      cta: 'Get Started'
    },
    {
      name: 'Plus',
      price: '$3,499',
      icon: Zap,
      description: 'Most popular choice for growing businesses',
      features: [
        'Custom UI/UX design',
        'Tavus video integration',
        'Live chat support',
        'Advanced SEO optimization',
        'Priority email & chat support',
        '90-day warranty',
        'Training documentation',
        'Basic analytics integration'
      ],
      popular: true,
      cta: 'Most Popular'
    },
    {
      name: 'Pro',
      price: '$6,999+',
      icon: Crown,
      description: 'Enterprise-level solution for complex projects',
      features: [
        'Fully customized solutions',
        'Multilingual support',
        'Advanced animations & interactions',
        'AI workflow integration',
        'Dedicated project manager',
        '1-year warranty & maintenance',
        'Comprehensive training',
        'Advanced analytics & reporting',
        'Priority phone support'
      ],
      popular: false,
      cta: 'Contact Sales'
    }
  ];

  const addOns = [
    { name: 'Additional Language Support', price: '$299/language' },
    { name: 'Advanced AI Features', price: '$799' },
    { name: 'Custom API Integration', price: '$499' },
    { name: 'Mobile App Version', price: '$1,299' },
    { name: 'E-commerce Functionality', price: '$899' },
    { name: 'Advanced Security Features', price: '$599' }
  ];

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-blue-900 to-purple-900">
        <div className="container mx-auto px-6 text-center">
          <h1 className="text-5xl font-bold text-white mb-6">Transparent Pricing</h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Choose the perfect plan for your business. All plans include our commitment to quality and customer satisfaction.
          </p>
        </div>
      </section>

      {/* Pricing Plans */}
      <section className="py-20 bg-white dark:bg-gray-800">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {plans.map((plan, index) => (
              <div
                key={index}
                className={`relative bg-gray-50 dark:bg-gray-900 rounded-2xl p-8 ${
                  plan.popular 
                    ? 'ring-2 ring-blue-600 transform scale-105 shadow-2xl' 
                    : 'hover:shadow-xl'
                } transition-all duration-300`}
              >
                {/* Popular badge */}
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-2 rounded-full text-sm font-semibold">
                      Most Popular
                    </span>
                  </div>
                )}

                {/* Plan header */}
                <div className="text-center mb-8">
                  <div className={`w-16 h-16 mx-auto mb-4 rounded-xl flex items-center justify-center ${
                    plan.popular 
                      ? 'bg-gradient-to-br from-blue-600 to-purple-600' 
                      : 'bg-gray-200 dark:bg-gray-700'
                  }`}>
                    <plan.icon className={`w-8 h-8 ${plan.popular ? 'text-white' : 'text-gray-600 dark:text-gray-400'}`} />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">{plan.name}</h3>
                  <p className="text-gray-600 dark:text-gray-400 mb-4">{plan.description}</p>
                  <div className="text-4xl font-bold text-gray-900 dark:text-white">
                    {plan.price}
                    {plan.name === 'Pro' && <span className="text-lg text-gray-500">+</span>}
                  </div>
                </div>

                {/* Features */}
                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start">
                      <Check className="w-5 h-5 text-green-500 mt-0.5 mr-3 flex-shrink-0" />
                      <span className="text-gray-700 dark:text-gray-300">{feature}</span>
                    </li>
                  ))}
                </ul>

                {/* Contact note */}
                <div className="mb-6 p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
                  <p className="text-sm text-blue-700 dark:text-blue-300 text-center">
                    Contact us for custom quotes and detailed project scoping
                  </p>
                </div>

                {/* CTA Button */}
                <button className={`w-full py-4 rounded-xl font-semibold transition-all duration-300 ${
                  plan.popular
                    ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white hover:shadow-lg transform hover:scale-105'
                    : 'bg-gray-200 dark:bg-gray-700 text-gray-900 dark:text-white hover:bg-gray-300 dark:hover:bg-gray-600'
                }`}>
                  {plan.cta}
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Add-ons Section */}
      <section className="py-20 bg-gray-50 dark:bg-gray-900">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-6">
              Optional Add-ons
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
              Enhance your project with additional features and services.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {addOns.map((addon, index) => (
              <div
                key={index}
                className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow duration-300"
              >
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                  {addon.name}
                </h3>
                <p className="text-2xl font-bold text-blue-600">{addon.price}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-white dark:bg-gray-800">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-6">
              Frequently Asked Questions
            </h2>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {[
                {
                  question: 'What\'s included in the basic package?',
                  answer: 'The basic package includes a template-based website or app with essential features, responsive design, and basic SEO optimization.'
                },
                {
                  question: 'How long does development take?',
                  answer: 'Development timelines vary by complexity. Basic projects take 2-4 weeks, Plus projects 4-8 weeks, and Pro projects 8-16 weeks.'
                },
                {
                  question: 'Do you provide ongoing support?',
                  answer: 'Yes, all plans include warranties and support. Pro plans include 1-year maintenance and priority support.'
                },
                {
                  question: 'Can I upgrade my plan later?',
                  answer: 'Absolutely! You can upgrade to a higher tier at any time, and we\'ll credit your previous investment.'
                }
              ].map((faq, index) => (
                <div key={index} className="bg-gray-50 dark:bg-gray-900 rounded-xl p-6">
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
                    {faq.question}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400">
                    {faq.answer}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-blue-900 to-purple-900">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Ready to Start Your Project?
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Contact us today for a free consultation and custom quote tailored to your specific needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-8 py-4 bg-white text-blue-900 rounded-xl font-semibold hover:shadow-lg transform hover:scale-105 transition-all duration-300">
              Get Free Quote
            </button>
            <button className="px-8 py-4 bg-white/10 backdrop-blur-sm text-white border border-white/20 rounded-xl font-semibold hover:bg-white/20 transition-all duration-300">
              Schedule Call
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}