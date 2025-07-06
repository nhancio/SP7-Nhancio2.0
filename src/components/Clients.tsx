import React from 'react';

const Clients = () => {
  const clients = [
    {
      name: "TechStartup Inc",
      logo: "https://images.pexels.com/photos/7887800/pexels-photo-7887800.jpeg?auto=compress&cs=tinysrgb&w=300",
      testimonial: "Nhancio transformed our business with their AI solutions. The automation they built saved us 40 hours per week."
    },
    {
      name: "Global Solutions Ltd",
      logo: "https://images.pexels.com/photos/6801648/pexels-photo-6801648.jpeg?auto=compress&cs=tinysrgb&w=300",
      testimonial: "Working with the Nhancio team was incredible. Their expertise in AI and dedication to quality is unmatched."
    },
    {
      name: "Innovation Corp",
      logo: "https://images.pexels.com/photos/5691659/pexels-photo-5691659.jpeg?auto=compress&cs=tinysrgb&w=300",
      testimonial: "The custom web application they developed exceeded our expectations. Highly recommend their services."
    },
    {
      name: "Future Tech",
      logo: "https://images.pexels.com/photos/5599425/pexels-photo-5599425.jpeg?auto=compress&cs=tinysrgb&w=300",
      testimonial: "Their data analytics dashboard gave us insights we never had before. Game-changing work!"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            Trusted by Amazing Clients
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We're proud to work with innovative companies around the world
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {clients.map((client, index) => (
            <div
              key={index}
              className="bg-gradient-to-br from-white/85 to-white/50 backdrop-blur-sm rounded-3xl p-6 text-center shadow-lg hover:shadow-xl transition-all duration-500 transform hover:scale-105 border border-white/30"
              style={{
                boxShadow: 'inset 0 6px 12px rgba(255, 255, 255, 0.9), inset 0 -6px 12px rgba(0, 0, 0, 0.06), 0 12px 40px rgba(0, 0, 0, 0.15), 0 4px 12px rgba(0, 0, 0, 0.1)',
              }}
            >
              <img
                src={client.logo}
                alt={client.name}
                className="w-16 h-16 rounded-2xl mx-auto mb-4 object-cover"
              />
              <h3 className="text-lg font-semibold text-gray-800 mb-3">
                {client.name}
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                "{client.testimonial}"
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Clients;