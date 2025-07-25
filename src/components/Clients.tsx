import React from 'react';
import { motion } from 'framer-motion';

const Clients = () => {
  const clients = [
    {
      name: "Kuvaira",
      logo: "/logos/kuvaira-logo.png",
      testimonial: "Nhancio's AI solutions helped us automate our business and scale faster.",
      url: "https://kuvaira.in"
    },
    {
      name: "Avira Events",
      logo: "/logos/avira-logo.png",
      testimonial: "Their team delivered a robust event management platform for us.",
      url: "https://aviraevents.com"
    },
    {
      name: "Ion Semiconductor",
      logo: "/logos/ion-logo.png",
      testimonial: "Nhancio's data analytics gave us deep insights into our manufacturing process.",
      url: "https://ionsemiconductor.com"
    },
    {
      name: "Tejas Academy",
      logo: "/logos/tejas-logo.png",
      testimonial: "The custom learning platform built by Nhancio is loved by our students.",
      url: "https://tejas-academy.com"
    }
  ];

  const cardVariants = {
    offscreen: { opacity: 0, y: 40 },
    onscreen: { opacity: 1, y: 0, transition: { type: 'spring', bounce: 0.3, duration: 0.7 } }
  };

  return (
    <section id="clients" className="py-20 bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            Our Clients
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We're proud to work with innovative companies in Hyderabad
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {clients.map((client, index) => (
            <motion.a
              key={index}
              href={client.url}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gradient-to-br from-white/85 to-white/50 backdrop-blur-sm rounded-3xl p-6 text-center shadow-lg hover:shadow-xl transition-all duration-500 transform hover:scale-105 border border-white/30 block"
              style={{
                boxShadow: 'inset 0 6px 12px rgba(255, 255, 255, 0.9), inset 0 -6px 12px rgba(0, 0, 0, 0.06), 0 12px 40px rgba(0, 0, 0, 0.15), 0 4px 12px rgba(0, 0, 0, 0.1)',
              }}
              initial="offscreen"
              whileInView="onscreen"
              viewport={{ once: true, amount: 0.3 }}
              variants={cardVariants}
              whileHover={{ scale: 1.07, boxShadow: '0 0 24px 2px #6366f1' }}
            >
              <img
                src={client.logo}
                alt={client.name}
                className="w-16 h-16 rounded-2xl mx-auto mb-4 object-cover"
                onError={e => { (e.target as HTMLImageElement).src = 'https://placehold.co/64x64?text=Logo'; }}
              />
              <h3 className="text-lg font-semibold text-gray-800 mb-3">
                {client.name}
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                "{client.testimonial}"
              </p>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Clients;