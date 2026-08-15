import React from 'react';
import { Linkedin, Instagram, Youtube, Mail, MapPin } from 'lucide-react';
import { Link } from 'react-router-dom';
import BrandLogo from './BrandLogo';

const Footer = () => {
  const quickLinks = [
    { name: 'AI Services', href: '/#services' },
    { name: 'Showcase Projects', href: '/#products' },
    { name: 'Achievements', href: '/#achievements' },
    { name: 'About Us', href: '/#about' },
    { name: 'FAQ', href: '/#faq' },
    { name: 'Contact', href: '/#contact' },
    { name: 'Careers', href: '/careers' },
    { name: 'Blog', href: '/blogs' },
    { name: 'Privacy Policy', href: '/privacy-policy' },
    { name: 'Terms and Conditions', href: '/terms-and-conditions' }
  ];

  const featuredProjects = [
    { name: 'RalphAI — Restaurant Ad Automation', href: '/#products' },
    { name: 'Aura+ — Cross-Platform Ambient Mobile App', href: '/#products' },
    { name: 'NFLA App / Event Automation Engine — Countersignature Platform', href: '/#products' },
    { name: 'MagicBox — AI UGC Factory & Video Ad Creative Engine', href: '/#products' },
    { name: 'IntelliAssets.AI — ACARA AI Tutoring', href: '/#products' },
    { name: 'ResGro-AI — Autonomous Growth Engine', href: 'https://resgro.ai', external: true }
  ];

  const socialLinks = [
    { icon: <Linkedin className="w-4 h-4" />, href: 'https://www.linkedin.com/company/nhancio', color: 'hover:text-blue-400', label: 'Nhancio on LinkedIn' },
    { icon: <Instagram className="w-4 h-4" />, href: 'https://www.instagram.com/nhancio.ai/', color: 'hover:text-pink-400', label: 'Nhancio on Instagram' },
    { icon: <Youtube className="w-4 h-4" />, href: 'https://www.youtube.com/@nhancioai', color: 'hover:text-red-400', label: 'Nhancio on YouTube' }
  ];

  return (
    <footer className="bg-gray-950 text-white pt-16 pb-8 border-t border-gray-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 mb-12">
          
          {/* Brand Col */}
          <div className="lg:col-span-2 space-y-4">
            <Link to="/" aria-label="Nhancio home" className="inline-flex">
              <BrandLogo
                imageClassName="h-10 w-10"
                wordmarkClassName="text-2xl font-extrabold text-white"
                variant="light"
              />
            </Link>
            <p className="text-gray-400 text-sm leading-relaxed max-w-sm">
              Founded by IITians and incubated at T-Hub Hyderabad. Engineering research-grade autonomous agent systems, multimodal mobile apps, and scalable enterprise AI.
            </p>

            <div className="pt-2 text-xs text-gray-400 space-y-1.5">
              <div className="flex items-center gap-2">
                <MapPin className="w-3.5 h-3.5 text-purple-400 shrink-0" />
                <span>Hyderabad, Telangana, India</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-3.5 h-3.5 text-purple-400 shrink-0" />
                <a href="mailto:nithindidigam@nhancio.com" className="hover:text-white transition-colors">
                  nithindidigam@nhancio.com
                </a>
              </div>
            </div>

            <div className="flex space-x-3 pt-2">
              {socialLinks.map((link, index) => (
                <a
                  key={index}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={link.label}
                  title={link.label}
                  className={`w-9 h-9 bg-gray-900 border border-gray-800 rounded-xl flex items-center justify-center text-gray-400 ${link.color} transition-all duration-200 hover:bg-gray-800 hover:border-gray-700`}
                >
                  {link.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links Col */}
          <div>
            <h4 className="text-sm font-bold tracking-wider uppercase text-gray-200 mb-4">
              Navigation
            </h4>
            <ul className="space-y-2 text-sm text-gray-400">
              {quickLinks.slice(0, 6).map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="hover:text-purple-400 transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company & Legal Col */}
          <div>
            <h4 className="text-sm font-bold tracking-wider uppercase text-gray-200 mb-4">
              Company
            </h4>
            <ul className="space-y-2 text-sm text-gray-400">
              {quickLinks.slice(6).map((link, index) => (
                <li key={index}>
                  {link.href.startsWith('/') && !link.href.startsWith('/#') ? (
                    <Link
                      to={link.href}
                      className="hover:text-purple-400 transition-colors"
                    >
                      {link.name}
                    </Link>
                  ) : (
                    <a
                      href={link.href}
                      className="hover:text-purple-400 transition-colors"
                    >
                      {link.name}
                    </a>
                  )}
                </li>
              ))}
              <li>
                <a 
                  href="/llms.txt" 
                  target="_blank" 
                  className="inline-flex items-center gap-1 text-purple-400 hover:text-purple-300 font-mono text-xs"
                >
                  <span>llms.txt (AI Index)</span>
                </a>
              </li>
            </ul>
          </div>

          {/* Flagship Showcases Col */}
          <div>
            <h4 className="text-sm font-bold tracking-wider uppercase text-gray-200 mb-4">
              Flagship Systems
            </h4>
            <ul className="space-y-2.5 text-xs text-gray-400">
              {featuredProjects.map((p, idx) => (
                <li key={idx}>
                  {p.external ? (
                    <a
                      href={p.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:text-purple-400 transition-colors block leading-tight"
                    >
                      {p.name}
                    </a>
                  ) : (
                    <a
                      href={p.href}
                      className="hover:text-purple-400 transition-colors block leading-tight"
                    >
                      {p.name}
                    </a>
                  )}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom copyright */}
        <div className="pt-8 border-t border-gray-900 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-gray-500">
          <p>
            © {new Date().getFullYear()} Nhancio. All rights reserved. Founded by IITians • Incubated at T-Hub.
          </p>
          <div className="flex items-center gap-4">
            <Link to="/privacy-policy" className="hover:text-gray-400 transition-colors">
              Privacy Policy
            </Link>
            <span>•</span>
            <Link to="/terms-and-conditions" className="hover:text-gray-400 transition-colors">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
