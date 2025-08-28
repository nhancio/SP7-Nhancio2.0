import React from 'react';
import { Mail, Phone, MapPin, MessageCircle, Sparkles } from 'lucide-react';

const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-gradient-to-br from-purple-50 via-pink-50 to-orange-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="w-full flex flex-col items-center">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              Get In Touch
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Ready to transform your business with AI? Let&apos;s discuss your project and explore possibilities.
            </p>
          </div>
          <div className="relative bg-gradient-to-br from-purple-400/30 via-pink-200/30 to-orange-100/60 rounded-3xl p-12 shadow-2xl border-4 border-white/60 flex flex-col items-center gap-8 w-full max-w-5xl mx-auto animate-pulse-slow hover:animate-none transition-all duration-300"
               style={{
                 boxShadow: '0 8px 40px 0 rgba(80, 0, 120, 0.10), 0 2px 8px rgba(0,0,0,0.08)',
               }}>
            <div className="absolute -top-8 left-1/2 -translate-x-1/2 bg-white rounded-full shadow-lg p-4 border-4 border-purple-200 flex items-center justify-center">
              <Sparkles className="w-10 h-10 text-purple-500 animate-bounce" />
            </div>
            <div className="flex flex-col md:flex-row gap-8 w-full justify-center items-center mt-8">
              <div className="flex flex-col items-center gap-2 flex-1">
                <div className="w-16 h-16 bg-green-100 text-green-600 rounded-2xl flex items-center justify-center mb-2 shadow-lg">
                  <Phone className="w-8 h-8" />
                </div>
                <div className="text-xl font-semibold text-gray-800 text-center">Call Us</div>
                <a href="tel:+917095288950" className="text-2xl text-purple-700 font-bold hover:underline text-center">
                  +91 70952 88950
                </a>
                <div className="flex flex-col gap-3 mt-4 w-full items-center">
                  <a
                    href="https://wa.me/917095288950?text=Hey%2C%20I%20want%20to%20know%20more%20about%20your%20services%20!"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 bg-green-500 text-white px-6 py-3 rounded-2xl font-medium hover:bg-green-600 transition-colors shadow justify-center"
                  >
                    <MessageCircle className="w-5 h-5" />
                    WhatsApp
                  </a>
                </div>
              </div>
              <div className="flex flex-col items-center gap-2 flex-1">
                <div className="w-16 h-16 bg-purple-100 text-purple-600 rounded-2xl flex items-center justify-center mb-2 shadow-lg">
                  <Mail className="w-8 h-8" />
                </div>
                <div className="text-xl font-semibold text-gray-800 text-center">Email</div>
                <a href="mailto:nithindidigam@nhancio.com" className="text-2xl text-purple-700 font-bold hover:underline text-center">
                  nithindidigam@nhancio.com
                </a>
                <div className="flex flex-col gap-3 mt-4 w-full items-center">
                  <a
                    href="mailto:nithindidigam@nhancio.com"
                    className="flex items-center gap-2 bg-purple-600 text-white px-6 py-3 rounded-2xl font-medium hover:bg-purple-700 transition-colors shadow justify-center"
                  >
                    <Mail className="w-5 h-5" />
                    Email
                  </a>
                </div>
              </div>
              <div className="flex flex-col items-center gap-2 flex-1">
                <div className="w-16 h-16 bg-blue-100 text-blue-600 rounded-2xl flex items-center justify-center mb-2 shadow-lg">
                  <MapPin className="w-8 h-8" />
                </div>
                <div className="text-xl font-semibold text-gray-800 text-center">Address</div>
                <a
                  href="https://maps.app.goo.gl/5uCWQqy97KKWvZRTA"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-2xl text-purple-700 font-bold hover:underline text-center"
                >
                  Hyderabad
                </a>
                <div className="flex flex-col gap-3 mt-4 w-full items-center">
                  <a
                    href="https://maps.app.goo.gl/5uCWQqy97KKWvZRTA"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 bg-blue-600 text-white px-6 py-3 rounded-2xl font-medium hover:bg-blue-700 transition-colors shadow justify-center"
                  >
                    <MapPin className="w-5 h-5" />
                    Map
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;