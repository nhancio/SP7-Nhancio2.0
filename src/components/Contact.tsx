import React from 'react';
import { Mail, Phone, MapPin, MessageCircle } from 'lucide-react';

const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-gradient-to-br from-purple-50 via-pink-50 to-orange-50">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            Get In Touch
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Ready to transform your business with AI? Let's discuss your project and explore possibilities.
          </p>
        </div>
        <div className="bg-gradient-to-br from-white/85 to-white/50 backdrop-blur-sm rounded-3xl p-12 shadow-lg border border-white/30 flex flex-col items-center gap-8 w-full max-w-4xl mx-auto"
             style={{
               boxShadow: 'inset 0 6px 12px rgba(255, 255, 255, 0.9), inset 0 -6px 12px rgba(0, 0, 0, 0.06), 0 12px 40px rgba(0, 0, 0, 0.15), 0 4px 12px rgba(0, 0, 0, 0.1)',
             }}>
          <div className="flex flex-col md:flex-row gap-8 w-full justify-center">
            <div className="flex flex-col items-center gap-2 flex-1">
              <div className="w-14 h-14 bg-green-100 text-green-600 rounded-2xl flex items-center justify-center mb-2">
                <Phone className="w-7 h-7" />
              </div>
              <div className="text-lg font-semibold text-gray-800">Call Us</div>
              <a href="tel:+917095288950" className="text-xl text-purple-600 font-bold hover:underline">
                +91 70952 88950
              </a>
              <a
                href="https://wa.me/917095288950?text=Hey%2C%20I%20want%20to%20know%20more%20about%20your%20services%20!"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 bg-green-500 text-white px-6 py-3 rounded-2xl font-medium hover:bg-green-600 transition-colors mt-2"
              >
                <MessageCircle className="w-5 h-5" />
                WhatsApp
              </a>
            </div>
            <div className="flex flex-col items-center gap-2 flex-1">
              <div className="w-14 h-14 bg-purple-100 text-purple-600 rounded-2xl flex items-center justify-center mb-2">
                <Mail className="w-7 h-7" />
              </div>
              <div className="text-lg font-semibold text-gray-800">Email</div>
              <a href="mailto:nithindidigam@gmail.com" className="text-xl text-purple-600 font-bold hover:underline">
                nithindidigam@gmail.com
              </a>
            </div>
            <div className="flex flex-col items-center gap-2 flex-1">
              <div className="w-14 h-14 bg-blue-100 text-blue-600 rounded-2xl flex items-center justify-center mb-2">
                <MapPin className="w-7 h-7" />
              </div>
              <div className="text-lg font-semibold text-gray-800">Address</div>
              <a
                href="https://maps.app.goo.gl/5uCWQqy97KKWvZRTA"
                target="_blank"
                rel="noopener noreferrer"
                className="text-xl text-purple-600 font-bold hover:underline"
              >
                Manikonda, Hyderabad
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;