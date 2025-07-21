import React from 'react';
import { Linkedin, Instagram, Youtube } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer = () => {
  const quickLinks = [
    { name: 'Services', href: '#services' },
    { name: 'About', href: '#about' },
    { name: 'Careers', href: '/careers' },
    { name: 'Blog', href: '/blogs' },
    { name: 'Privacy Policy', href: '/privacy-policy' },
    { name: 'Terms and Conditions', href: '/terms-and-conditions' }
  ];

  const socialLinks = [
    { icon: <Linkedin className="w-5 h-5" />, href: 'https://www.linkedin.com/company/nhancio', color: 'hover:text-blue-600' },
    { icon: <Instagram className="w-5 h-5" />, href: 'https://www.instagram.com/nhancio.ai/', color: 'hover:text-pink-600' },
    { icon: <Youtube className="w-5 h-5" />, href: 'https://www.youtube.com/@nhancioai', color: 'hover:text-red-600' }
  ];

  return (
    <footer className="bg-gray-900 text-white pt-10 pb-4">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
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
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`w-10 h-10 bg-gray-800 rounded-2xl flex items-center justify-center text-gray-400 ${link.color} transition-all duration-300 hover:bg-gray-700`}
                >
                  {link.icon}
                </a>
              ))}
            </div>
          </div>
          <div className="md:col-span-2">
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2">
              {quickLinks.map((link, index) => (
                link.href.startsWith('/') ? (
                  <Link
                    key={index}
                    to={link.href}
                    className="text-gray-400 hover:text-white transition-colors block"
                  >
                    {link.name}
                  </Link>
                ) : (
                  <a
                    key={index}
                    href={link.href}
                    className="text-gray-400 hover:text-white transition-colors block"
                  >
                    {link.name}
                  </a>
                )
              ))}
            </div>
          </div>
        </div>
        <div className="pt-4 border-t border-gray-800 text-center">
          <p className="text-gray-400">
            © 2024 Nhancio. All rights reserved. Built with ❤️ by IITians.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;