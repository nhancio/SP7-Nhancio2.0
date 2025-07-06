import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, MessageCircle } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
    // Reset form
    setFormData({ name: '', email: '', message: '' });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section id="contact" className="py-20 bg-gradient-to-br from-purple-50 via-pink-50 to-orange-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            Get In Touch
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Ready to transform your business with AI? Let's discuss your project and explore possibilities.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          <div className="space-y-8">
            <div className="bg-gradient-to-br from-white/85 to-white/50 backdrop-blur-sm rounded-3xl p-8 shadow-lg border border-white/30"
                 style={{
                   boxShadow: 'inset 0 6px 12px rgba(255, 255, 255, 0.9), inset 0 -6px 12px rgba(0, 0, 0, 0.06), 0 12px 40px rgba(0, 0, 0, 0.15), 0 4px 12px rgba(0, 0, 0, 0.1)',
                 }}>
              <h3 className="text-2xl font-bold text-gray-800 mb-6">Contact Information</h3>
              
              <div className="space-y-6">
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-purple-100 text-purple-600 rounded-2xl flex items-center justify-center mr-4">
                    <Mail className="w-6 h-6" />
                  </div>
                  <div>
                    <p className="text-gray-800 font-medium">Email</p>
                    <p className="text-gray-600">hello@nhancio.com</p>
                  </div>
                </div>

                <div className="flex items-center">
                  <div className="w-12 h-12 bg-green-100 text-green-600 rounded-2xl flex items-center justify-center mr-4">
                    <Phone className="w-6 h-6" />
                  </div>
                  <div>
                    <p className="text-gray-800 font-medium">Phone</p>
                    <p className="text-gray-600">+91 9876543210</p>
                  </div>
                </div>

                <div className="flex items-center">
                  <div className="w-12 h-12 bg-blue-100 text-blue-600 rounded-2xl flex items-center justify-center mr-4">
                    <MapPin className="w-6 h-6" />
                  </div>
                  <div>
                    <p className="text-gray-800 font-medium">Office</p>
                    <p className="text-gray-600">Hyderabad, India</p>
                  </div>
                </div>
              </div>

              <div className="mt-8 pt-8 border-t border-gray-200">
                <h4 className="text-lg font-semibold text-gray-800 mb-4">Quick Contact</h4>
                <div className="flex gap-4">
                  <a
                    href="https://wa.me/919876543210"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 bg-green-500 text-white px-6 py-3 rounded-2xl font-medium hover:bg-green-600 transition-colors"
                  >
                    <MessageCircle className="w-5 h-5" />
                    WhatsApp
                  </a>
                  <a
                    href="mailto:hello@nhancio.com"
                    className="flex items-center justify-center gap-2 bg-purple-500 text-white px-6 py-3 rounded-2xl font-medium hover:bg-purple-600 transition-colors"
                  >
                    <Mail className="w-5 h-5" />
                    Email
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-br from-white/85 to-white/50 backdrop-blur-sm rounded-3xl p-8 shadow-lg border border-white/30"
               style={{
                 boxShadow: 'inset 0 6px 12px rgba(255, 255, 255, 0.9), inset 0 -6px 12px rgba(0, 0, 0, 0.06), 0 12px 40px rgba(0, 0, 0, 0.15), 0 4px 12px rgba(0, 0, 0, 0.1)',
               }}>
            <h3 className="text-2xl font-bold text-gray-800 mb-6">Send us a Message</h3>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-2xl border border-gray-300 focus:ring-2 focus:ring-purple-500 focus:border-transparent outline-none transition-all duration-300"
                  placeholder="Your name"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-2xl border border-gray-300 focus:ring-2 focus:ring-purple-500 focus:border-transparent outline-none transition-all duration-300"
                  placeholder="your@email.com"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={4}
                  className="w-full px-4 py-3 rounded-2xl border border-gray-300 focus:ring-2 focus:ring-purple-500 focus:border-transparent outline-none transition-all duration-300 resize-none"
                  placeholder="Tell us about your project..."
                />
              </div>

              <button
                type="submit"
                className="w-full bg-gradient-to-r from-purple-500 to-pink-500 text-white py-3 px-6 rounded-2xl font-semibold hover:from-purple-600 hover:to-pink-600 transition-all duration-300 transform hover:scale-105 flex items-center justify-center gap-2"
              >
                <Send className="w-5 h-5" />
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;