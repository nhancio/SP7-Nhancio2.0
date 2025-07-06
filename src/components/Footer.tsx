import React from 'react';
import { Linkedin, Twitter, Github, Instagram, Mail } from 'lucide-react';

const Footer = () => {
  const quickLinks = [
    { name: 'Services', href: '#services' },
    { name: 'About', href: '#about' },
    { name: 'Careers', href: '#careers' },
    { name: 'Blog', href: '#blogs' },
    { name: 'Privacy Policy', href: '#privacy' },
    { name: 'Terms of Service', href: '#terms' }
  ];

  const socialLinks = [
    { icon: <Linkedin className="w-5 h-5" />, href: '#', color: 'hover:text-blue-600' },
    { icon: <Twitter className="w-5 h-5" />, href: '#', color: 'hover:text-blue-400' },
    { icon: <Github className="w-5 h-5" />, href: '#', color: 'hover:text-gray-700' },
    { icon: <Instagram className="w-5 h-5" />, href: '#', color: 'hover:text-pink-600' }
  ];

  return (
    <footer className="bg-gray-900 text-white pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8 mb-12">
          <div className="md:col-span-2">
            <h3 className="text-2xl font-bold mb-4">Nhancio</h3>
            <p className="text-gray-400 mb-6 leading-relaxed">
              Engineering innovation and empowering businesses with AI. 
              A dream by IITians to build the future with cutting-edge technology.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((link, index) => (
                <a
                  key={index}
                  href={link.href}
                  className={`w-10 h-10 bg-gray-800 rounded-2xl flex items-center justify-center text-gray-400 ${link.color} transition-all duration-300 hover:bg-gray-700`}
                >
                  {link.icon}
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Newsletter</h4>
            <p className="text-gray-400 mb-4">
              Stay updated with our latest insights and innovations.
            </p>
            <div className="flex">
              <input
                type="email"
                placeholder="Your email"
                className="flex-1 px-4 py-2 bg-gray-800 rounded-l-2xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500"
              />
              <button className="bg-purple-600 px-4 py-2 rounded-r-2xl hover:bg-purple-700 transition-colors">
                <Mail className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-gray-800 text-center">
          <p className="text-gray-400">
            © 2024 Nhancio. All rights reserved. Built with ❤️ by IITians.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;