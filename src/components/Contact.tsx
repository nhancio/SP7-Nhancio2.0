import React from 'react';
import { Mail, Phone, MapPin, MessageCircle, Calendar } from 'lucide-react';
import { motion } from 'framer-motion';

const contactCards = [
  {
    icon: Phone,
    label: 'Call or WhatsApp',
    detail: '+91 70952 88950',
    href: 'https://wa.me/917095288950?text=Hey%2C%20I%20want%20to%20know%20more%20about%20your%20AI%20services!',
    buttonLabel: 'Chat on WhatsApp',
    buttonIcon: MessageCircle,
    color: 'bg-emerald-500 hover:bg-emerald-600',
    iconBg: 'bg-emerald-100 text-emerald-600',
  },
  {
    icon: Mail,
    label: 'Email',
    detail: 'nithindidigam@nhancio.com',
    href: 'mailto:nithindidigam@nhancio.com',
    buttonLabel: 'Send Email',
    buttonIcon: Mail,
    color: 'bg-violet-600 hover:bg-violet-700',
    iconBg: 'bg-violet-100 text-violet-600',
  },
  {
    icon: MapPin,
    label: 'Location',
    detail: 'Hyderabad, India',
    href: 'https://maps.app.goo.gl/5uCWQqy97KKWvZRTA',
    buttonLabel: 'Open in Maps',
    buttonIcon: MapPin,
    color: 'bg-blue-600 hover:bg-blue-700',
    iconBg: 'bg-blue-100 text-blue-600',
  },
  {
    icon: Calendar,
    label: 'Book a call',
    detail: 'Pick a time that works',
    href: 'https://calendly.com/nithindidigam/nhancio-introductory-call',
    buttonLabel: 'Schedule Call',
    buttonIcon: Calendar,
    color: 'bg-amber-500 hover:bg-amber-600',
    iconBg: 'bg-amber-100 text-amber-600',
  },
];

const cardVariants = {
  offscreen: { opacity: 0, y: 24 },
  onscreen: { opacity: 1, y: 0, transition: { type: 'spring', bounce: 0.3, duration: 0.6 } },
};

const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-gradient-to-br from-gray-50 to-purple-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-3">
            Get in touch
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Ready to transform your business with AI? Let’s talk.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {contactCards.map((card, index) => {
            const Icon = card.icon;
            const ButtonIcon = card.buttonIcon;
            return (
              <motion.a
                key={index}
                href={card.href}
                target={card.href.startsWith('http') ? '_blank' : undefined}
                rel={card.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                className="group block"
                initial="offscreen"
                whileInView="onscreen"
                viewport={{ once: true, amount: 0.2 }}
                variants={cardVariants}
              >
                <div
                  className="h-full bg-white/90 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-gray-100 transition-all duration-300 hover:shadow-xl hover:border-purple-100 hover:-translate-y-1 flex flex-col"
                  style={{
                    boxShadow: '0 4px 20px rgba(0,0,0,0.06), 0 1px 3px rgba(0,0,0,0.04)',
                  }}
                >
                  <div className={`w-12 h-12 ${card.iconBg} rounded-xl flex items-center justify-center mb-4`}>
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-sm font-medium text-gray-500 uppercase tracking-wide mb-1">
                    {card.label}
                  </h3>
                  <p className="text-gray-800 font-semibold mb-4 break-all">
                    {card.detail}
                  </p>
                  <span
                    className={`mt-auto inline-flex items-center justify-center gap-2 ${card.color} text-white text-sm font-medium py-2.5 px-4 rounded-xl transition-colors`}
                  >
                    <ButtonIcon className="w-4 h-4" />
                    {card.buttonLabel}
                  </span>
                </div>
              </motion.a>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Contact;
