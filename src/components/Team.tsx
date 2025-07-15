import React from 'react';
import { Linkedin, Mail } from 'lucide-react';

const Team = () => {
  const teamMembers = [
    {
      name: "Didigam Nithin",
      role: "Co-founder and CEO",
      bio: "",
      image: "/people/Nithin.jpg",
      social: { linkedin: "https://www.linkedin.com/in/didigamnithin/", email: "mailto:nithindidigam@gmail.com" }
    },
    {
      name: "Jay Usadadiya",
      role: "Co-founder and CTO",
      bio: "",
      image: "/people/jay.jpeg",
      social: { linkedin: "https://www.linkedin.com/in/jay-usadadiya-338032254/", email: "mailto:jayusadadiya49@gmail.com" }
    },
    {
      name: "Nikhitha Reddy",
      role: "Co-founder and CAIO",
      bio: "",
      image: "/people/nikki.jpg",
      social: { linkedin: "https://www.linkedin.com/in/nikhithareddy19/", email: "mailto:nikhithadubbaka2003@gmail.com" }
    },
    {
      name: "Murali Krishna",
      role: "COO",
      bio: "",
      image: "/people/murali.jpeg",
      social: { linkedin: "#", email: "#" }
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-green-50 via-blue-50 to-purple-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            Meet Our Team
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Passionate innovators from premier institutions working together to build the future
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {teamMembers.map((member, index) => (
            <div
              key={index}
              className="bg-gradient-to-br from-white/85 to-white/50 backdrop-blur-sm rounded-3xl p-6 text-center shadow-lg hover:shadow-xl transition-all duration-500 transform hover:scale-105 group border border-white/30"
              style={{
                boxShadow: 'inset 0 6px 12px rgba(255, 255, 255, 0.9), inset 0 -6px 12px rgba(0, 0, 0, 0.06), 0 12px 40px rgba(0, 0, 0, 0.15), 0 4px 12px rgba(0, 0, 0, 0.1)',
              }}
            >
              <div className="relative mb-6">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-24 h-24 rounded-2xl mx-auto object-cover shadow-lg"
                />
                <div className="absolute inset-0 rounded-2xl shadow-inner"></div>
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">
                {member.name}
              </h3>
              <p className="text-purple-600 font-medium mb-3">
                {member.role}
              </p>
              <p className="text-gray-600 text-sm mb-4 leading-relaxed">
                {member.bio}
              </p>
              <div className="flex justify-center space-x-3">
                <a
                  href={member.social.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-blue-100 text-blue-600 rounded-2xl flex items-center justify-center hover:bg-blue-200 transition-colors"
                >
                  <Linkedin className="w-5 h-5" />
                </a>
                <a
                  href={member.social.email}
                  className="w-10 h-10 bg-green-100 text-green-600 rounded-2xl flex items-center justify-center hover:bg-green-200 transition-colors"
                >
                  <Mail className="w-5 h-5" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;