import React from 'react';
import { Mail, Phone, MapPin, MessageCircle, Calendar, Sparkles, ArrowUpRight, CheckCircle2, Clock } from 'lucide-react';
import { motion } from 'framer-motion';

const Contact = () => {
  const cardVariants = {
    offscreen: { opacity: 0, y: 30 },
    onscreen: { 
      opacity: 1, 
      y: 0, 
      transition: { type: 'spring' as const, bounce: 0.25, duration: 0.6 } 
    }
  };

  return (
    <section id="contact" className="py-24 md:py-28 bg-gradient-to-br from-gray-50 via-purple-50/40 to-blue-50/40 relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] bg-purple-200/30 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center mb-14 max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-purple-100 text-purple-800 text-xs font-semibold uppercase tracking-wider mb-4 border border-purple-200/60 shadow-xs">
            <Sparkles className="w-3.5 h-3.5 text-purple-600" />
            <span>Direct Engineering Access</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-gray-900 tracking-tight mb-4">
            Get in Touch
          </h2>
          <p className="text-base sm:text-xl text-gray-600 leading-relaxed">
            Ready to architect production-ready autonomous agents, multimodal mobile apps, or enterprise AI platforms? Let's connect.
          </p>
        </div>

        {/* Unified All-in-One Sleek Container Box */}
        <motion.div
          className="max-w-5xl mx-auto bg-white/95 backdrop-blur-xl rounded-3xl p-6 sm:p-10 lg:p-12 shadow-2xl border border-white/80 relative overflow-hidden"
          style={{
            boxShadow: '0 25px 60px -15px rgba(0,0,0,0.08), inset 0 2px 4px rgba(255,255,255,0.95)',
          }}
          initial="offscreen"
          whileInView="onscreen"
          viewport={{ once: true, amount: 0.2 }}
          variants={cardVariants}
        >
          {/* Top accent bar */}
          <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-purple-600 via-indigo-600 to-pink-500" />

          <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 items-stretch">
            
            {/* Left side: Book a Strategy Session */}
            <div className="lg:col-span-6 flex flex-col justify-between bg-gradient-to-br from-purple-900 via-indigo-950 to-gray-950 text-white rounded-2xl p-7 sm:p-8 relative overflow-hidden shadow-lg">
              {/* Subtle background glow */}
              <div className="absolute top-0 right-0 w-48 h-48 bg-purple-500/20 rounded-full blur-2xl pointer-events-none" />

              <div>
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-500/20 border border-purple-400/30 text-purple-300 text-xs font-semibold uppercase tracking-wider mb-4">
                  <Calendar className="w-3.5 h-3.5" />
                  <span>Interactive Consultation</span>
                </div>

                <h3 className="text-2xl sm:text-3xl font-extrabold text-white mb-3 leading-tight">
                  Book an AI Strategy Session
                </h3>

                <p className="text-sm text-purple-200/90 leading-relaxed mb-6">
                  Schedule a direct 1-on-1 strategy call with our founding engineers. We'll review your technical requirements and outline an agentic roadmap.
                </p>

                <div className="space-y-3 mb-8 text-xs sm:text-sm text-purple-100">
                  <div className="flex items-center gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                    <span>Deep technical use-case & feasibility analysis</span>
                  </div>
                  <div className="flex items-center gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                    <span>Agent architecture & ROI projection</span>
                  </div>
                  <div className="flex items-center gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                    <span>Direct engineering leadership (IIT Kanpur alumni)</span>
                  </div>
                </div>
              </div>

              <div>
                <a
                  href="https://calendar.app.google/JnCV7hMYMaBTgYPg9"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center gap-2 px-6 py-4 rounded-xl text-sm sm:text-base font-bold bg-gradient-to-r from-purple-500 to-indigo-500 hover:from-purple-600 hover:to-indigo-600 text-white shadow-lg hover:shadow-purple-500/25 transition-all duration-300 transform hover:scale-[1.02] cursor-pointer group"
                >
                  <Calendar className="w-5 h-5 group-hover:rotate-6 transition-transform" />
                  <span>Book on Google Calendar</span>
                  <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </a>
                <p className="text-center text-[11px] text-purple-300/80 mt-2.5 flex items-center justify-center gap-1.5">
                  <Clock className="w-3 h-3" />
                  <span>Instant confirmation • Pick a convenient time slot</span>
                </p>
              </div>
            </div>

            {/* Right side: Direct Contact Channels */}
            <div className="lg:col-span-6 flex flex-col justify-between space-y-6">
              
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-1.5">
                  Direct Contact & Location
                </h3>
                <p className="text-xs sm:text-sm text-gray-500 mb-6">
                  Reach out directly via phone, WhatsApp, email, or visit us at T-Hub Hyderabad.
                </p>

                <div className="space-y-4">
                  
                  {/* Phone & WhatsApp Card */}
                  <div className="p-4 rounded-2xl bg-gray-50/90 border border-gray-100 hover:border-purple-200 transition-colors flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 group">
                    <div className="flex items-center gap-3.5">
                      <div className="w-11 h-11 rounded-xl bg-emerald-100 text-emerald-600 flex items-center justify-center shrink-0">
                        <Phone className="w-5 h-5" />
                      </div>
                      <div>
                        <span className="text-[11px] font-semibold text-gray-500 uppercase tracking-wider block">Call & WhatsApp</span>
                        <a href="tel:+917095288950" className="text-sm sm:text-base font-bold text-gray-900 hover:text-emerald-600 transition-colors">
                          +91 70952 88950
                        </a>
                      </div>
                    </div>
                    <a
                      href="https://wa.me/917095288950?text=Hey%20Nhancio%20Team%2C%20I%20would%20like%20to%20discuss%20an%20AI%20project!"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full sm:w-auto inline-flex items-center justify-center gap-1.5 px-4 py-2 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-semibold transition-all shadow-xs"
                    >
                      <MessageCircle className="w-3.5 h-3.5" />
                      <span>Chat on WhatsApp</span>
                    </a>
                  </div>

                  {/* Email Card */}
                  <div className="p-4 rounded-2xl bg-gray-50/90 border border-gray-100 hover:border-purple-200 transition-colors flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 group">
                    <div className="flex items-center gap-3.5">
                      <div className="w-11 h-11 rounded-xl bg-violet-100 text-violet-600 flex items-center justify-center shrink-0">
                        <Mail className="w-5 h-5" />
                      </div>
                      <div>
                        <span className="text-[11px] font-semibold text-gray-500 uppercase tracking-wider block">Email Inquiries</span>
                        <a href="mailto:nithindidigam@nhancio.com" className="text-xs sm:text-sm font-bold text-gray-900 hover:text-violet-600 transition-colors break-all">
                          nithindidigam@nhancio.com
                        </a>
                      </div>
                    </div>
                    <a
                      href="mailto:nithindidigam@nhancio.com"
                      className="w-full sm:w-auto inline-flex items-center justify-center gap-1.5 px-4 py-2 rounded-xl bg-violet-600 hover:bg-violet-700 text-white text-xs font-semibold transition-all shadow-xs"
                    >
                      <Mail className="w-3.5 h-3.5" />
                      <span>Send Email</span>
                    </a>
                  </div>

                  {/* Location Card */}
                  <div className="p-4 rounded-2xl bg-gray-50/90 border border-gray-100 hover:border-purple-200 transition-colors flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 group">
                    <div className="flex items-center gap-3.5">
                      <div className="w-11 h-11 rounded-xl bg-blue-100 text-blue-600 flex items-center justify-center shrink-0">
                        <MapPin className="w-5 h-5" />
                      </div>
                      <div>
                        <span className="text-[11px] font-semibold text-gray-500 uppercase tracking-wider block">Headquarters & Incubation</span>
                        <span className="text-sm font-bold text-gray-900 block">
                          T-Hub, Hyderabad, India
                        </span>
                      </div>
                    </div>
                    <a
                      href="https://maps.app.goo.gl/5uCWQqy97KKWvZRTA"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full sm:w-auto inline-flex items-center justify-center gap-1.5 px-4 py-2 rounded-xl bg-blue-600 hover:bg-blue-700 text-white text-xs font-semibold transition-all shadow-xs"
                    >
                      <MapPin className="w-3.5 h-3.5" />
                      <span>Open Maps</span>
                    </a>
                  </div>

                </div>
              </div>

              {/* Bottom Assurance */}
              <div className="pt-4 border-t border-gray-100 flex items-center justify-between text-[11px] text-gray-500">
                <span className="flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-emerald-500" />
                  Response time: Under 2 hours
                </span>
                <span>NDA & Confidentiality Guaranteed</span>
              </div>

            </div>

          </div>

        </motion.div>

      </div>
    </section>
  );
};

export default Contact;
