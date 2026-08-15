import React, { useState } from 'react';
import { ExternalLink, Sparkles, GraduationCap, Building2, Rocket, ArrowUpRight, ShieldCheck } from 'lucide-react';
import SEO from '../components/SEO';

const GOOGLE_FORM_URL = "https://forms.gle/h7GBehc1Ldn9WZFz6";

const Careers = () => {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50/70 via-blue-50/50 to-pink-50/60 pt-24 pb-20">
      <SEO
        title="Careers & Internships | Join Nhancio AI Systems"
        description="Join Nhancio — Building the Future of AI Systems (IITian Founded & T-Hub Incubated). Apply for high-impact roles and internships in autonomous AI agents, multimodal mobile apps, and machine learning engineering."
        path="/careers"
      />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center mb-12 max-w-4xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-purple-100 text-purple-800 text-xs font-semibold uppercase tracking-wider mb-4 border border-purple-200/60 shadow-xs">
            <Sparkles className="w-3.5 h-3.5 text-purple-600" />
            <span>Opportunities at Nhancio</span>
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-gray-900 tracking-tight mb-4 leading-tight">
            Join Nhancio — Building the Future of AI Systems <br className="hidden sm:inline" />
            <span className="bg-gradient-to-r from-purple-600 to-indigo-600 bg-clip-text text-transparent">
              (IITian Founded & T-Hub Incubated)
            </span>
          </h1>

          <p className="text-base sm:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Work directly on real-world autonomous multi-agent frameworks, multimodal creative engines, and high-performance apps alongside engineers from IIT Kanpur and the T-Hub ecosystem.
          </p>

          <div className="mt-6 flex flex-wrap items-center justify-center gap-3">
            <a
              href={GOOGLE_FORM_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-2xl text-sm font-bold bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700 text-white shadow-lg hover:shadow-purple-500/25 transition-all duration-300 transform hover:scale-[1.02]"
            >
              <span>Open Application Form in New Tab</span>
              <ArrowUpRight className="w-4 h-4" />
            </a>
          </div>
        </div>

        {/* Culture & Highlights Cards */}
        <div className="grid sm:grid-cols-3 gap-5 mb-12">
          <div className="bg-white/80 backdrop-blur-md rounded-2xl p-5 border border-white/80 shadow-md flex items-start gap-3.5">
            <div className="w-10 h-10 rounded-xl bg-purple-100 text-purple-600 flex items-center justify-center shrink-0">
              <GraduationCap className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-sm font-bold text-gray-900 mb-1">IITian Leadership</h3>
              <p className="text-xs text-gray-600 leading-relaxed">
                Mentorship and code reviews by IIT Kanpur alumni with deep systems and AI expertise.
              </p>
            </div>
          </div>

          <div className="bg-white/80 backdrop-blur-md rounded-2xl p-5 border border-white/80 shadow-md flex items-start gap-3.5">
            <div className="w-10 h-10 rounded-xl bg-blue-100 text-blue-600 flex items-center justify-center shrink-0">
              <Building2 className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-sm font-bold text-gray-900 mb-1">T-Hub Ecosystem</h3>
              <p className="text-xs text-gray-600 leading-relaxed">
                Incubated in India's top innovation hub with access to high-impact enterprise networks.
              </p>
            </div>
          </div>

          <div className="bg-white/80 backdrop-blur-md rounded-2xl p-5 border border-white/80 shadow-md flex items-start gap-3.5">
            <div className="w-10 h-10 rounded-xl bg-emerald-100 text-emerald-600 flex items-center justify-center shrink-0">
              <Rocket className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-sm font-bold text-gray-900 mb-1">Real AI Production</h3>
              <p className="text-xs text-gray-600 leading-relaxed">
                Ship to thousands of active users across RalphAI, Aura+, NFLA App, and MagicBox UGC Factory.
              </p>
            </div>
          </div>
        </div>

        {/* Embedded Google Form Container */}
        <div 
          className="bg-white/95 backdrop-blur-xl rounded-3xl p-4 sm:p-8 shadow-2xl border border-white/80 relative overflow-hidden"
          style={{
            boxShadow: '0 25px 60px -15px rgba(0,0,0,0.08), inset 0 2px 4px rgba(255,255,255,0.95)',
          }}
        >
          {/* Header strip inside form container */}
          <div className="flex flex-col sm:flex-row items-center justify-between gap-3 pb-6 mb-6 border-b border-gray-100">
            <div>
              <h2 className="text-lg font-bold text-gray-900">
                Nhancio Application & Candidate Intake
              </h2>
              <p className="text-xs text-gray-500">
                Complete the form below to apply for engineering, research, design, or marketing roles.
              </p>
            </div>
            <a
              href={GOOGLE_FORM_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-xs font-bold text-purple-600 hover:text-purple-700 bg-purple-50 hover:bg-purple-100 px-3.5 py-2 rounded-xl transition-colors shrink-0"
            >
              <span>Open in New Tab</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>

          {/* Iframe wrapper */}
          <div className="relative w-full rounded-2xl overflow-hidden bg-gray-50 border border-gray-200/80 min-h-[750px] sm:min-h-[850px] flex items-center justify-center">
            {isLoading && (
              <div className="absolute inset-0 flex flex-col items-center justify-center bg-gray-50/90 backdrop-blur-xs z-10">
                <div className="w-10 h-10 border-3 border-purple-600 border-t-transparent rounded-full animate-spin mb-3" />
                <p className="text-xs font-semibold text-gray-600">Loading application form...</p>
              </div>
            )}
            
            <iframe
              src={GOOGLE_FORM_URL}
              title="Nhancio Careers Application Form"
              className="w-full h-[750px] sm:h-[850px] border-0"
              onLoad={() => setIsLoading(false)}
              loading="lazy"
            >
              Loading…
            </iframe>
          </div>

          {/* Footer inside form container */}
          <div className="mt-6 pt-4 border-t border-gray-100 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-gray-500">
            <div className="flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-purple-600" />
              <span>Direct application review by Nhancio founders</span>
            </div>
            <p>
              Questions? Email us at <a href="mailto:nithindidigam@nhancio.com" className="text-purple-600 hover:underline font-semibold">nithindidigam@nhancio.com</a>
            </p>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Careers;
