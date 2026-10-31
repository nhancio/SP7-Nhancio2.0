import React, { useState } from 'react';
import { 
  Sparkles, 
  GraduationCap, 
  Building2, 
  Rocket, 
  ArrowUpRight, 
  ShieldCheck, 
  CheckCircle2, 
  Send, 
  Copy, 
  ExternalLink, 
  Briefcase, 
  MapPin, 
  Clock, 
  Code2, 
  Cpu, 
  Smartphone, 
  Sparkle,
  Mail
} from 'lucide-react';
import SEO from '../components/SEO';

const GOOGLE_FORM_URL = "https://forms.gle/h7GBehc1Ldn9WZFz6";
const CAREERS_EMAIL = "nithindidigam@nhancio.com";

interface JobRole {
  id: string;
  title: string;
  category: string;
  type: string;
  location: string;
  experience: string;
  description: string;
  skills: string[];
}

const openRoles: JobRole[] = [
  {
    id: 'agent-engineer',
    title: 'Autonomous AI Agents Engineer',
    category: 'Engineering',
    type: 'Full-Time / Contract',
    location: 'Hyderabad (T-Hub) / Remote',
    experience: '1 - 3 Years / Strong Portfolios',
    description: 'Build closed-loop multi-agent systems, tool-calling pipelines, and browser bots like RalphAI.',
    skills: ['Python', 'FastAPI', 'Playwright', 'LangGraph / State Machines', 'PostgreSQL', 'Docker']
  },
  {
    id: 'mobile-ai-engineer',
    title: 'Full-Stack AI & Mobile Engineer',
    category: 'Mobile & Web',
    type: 'Full-Time',
    location: 'Hyderabad (T-Hub) / Remote',
    experience: '1 - 3 Years / Strong Track Record',
    description: 'Develop fluid 60fps mobile apps (Aura+) with React Native, Expo 56, and scalable backends.',
    skills: ['React Native', 'Expo 56', 'TypeScript', 'Tailwind CSS', 'Node.js', 'Firebase / Supabase']
  },
  {
    id: 'ai-intern',
    title: 'AI Research & Multimodal Intern',
    category: 'Internship',
    type: 'Internship (3-6 Months)',
    location: 'Hyderabad (T-Hub) / Hybrid',
    experience: 'Students / Recent Grads (IITs & Tier-1)',
    description: 'Work on multimodal models, Gemini 1.5 inference, and video generators (MagicBox).',
    skills: ['Python', 'PyTorch / Hugging Face', 'LLM Prompt Engineering', 'Computer Vision', 'Git']
  },
  {
    id: 'growth-specialist',
    title: 'Growth & AI Automation Specialist',
    category: 'Growth',
    type: 'Full-Time / Part-Time',
    location: 'Hyderabad / Remote',
    experience: '1+ Years in B2B / SaaS Growth',
    description: 'Orchestrate programmatic acquisition, lead qualification agents, and marketing workflows.',
    skills: ['AI Marketing Workflows', 'CRM Automation', 'Analytics', 'Copywriting', 'B2B Outbound']
  }
];

const Careers = () => {
  const [selectedRole, setSelectedRole] = useState<string>('Autonomous AI Agents Engineer');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    role: 'Autonomous AI Agents Engineer',
    portfolio: '',
    resumeLink: '',
    experienceLevel: '1 - 3 Years',
    note: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isCopied, setIsCopied] = useState(false);

  const handleRoleSelect = (roleTitle: string) => {
    setSelectedRole(roleTitle);
    setFormData(prev => ({ ...prev, role: roleTitle }));
    const formElement = document.getElementById('application-form');
    if (formElement) {
      formElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const generateMailtoBody = () => {
    return encodeURIComponent(
      `Hello Nhancio Team,\n\n` +
      `I would like to apply for the position of: ${formData.role}\n\n` +
      `--- CANDIDATE DETAILS ---\n` +
      `Full Name: ${formData.name}\n` +
      `Email: ${formData.email}\n` +
      `Phone/WhatsApp: ${formData.phone}\n` +
      `Experience Level / Education: ${formData.experienceLevel}\n` +
      `Portfolio / GitHub / LinkedIn: ${formData.portfolio}\n` +
      `Resume Link: ${formData.resumeLink}\n\n` +
      `--- WHY NHANCIO / NOTE ---\n` +
      `${formData.note || 'Looking forward to building world-class AI systems at Nhancio!'}\n\n` +
      `Best regards,\n${formData.name}`
    );
  };

  const generateApplicationSummary = () => {
    return (
      `Nhancio Application for ${formData.role}\n` +
      `Name: ${formData.name}\n` +
      `Email: ${formData.email}\n` +
      `Phone: ${formData.phone}\n` +
      `Experience Level: ${formData.experienceLevel}\n` +
      `Portfolio / Links: ${formData.portfolio}\n` +
      `Resume URL: ${formData.resumeLink}\n` +
      `Note: ${formData.note || 'Ready to build high-impact AI systems'}`
    );
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const mailtoUrl = `mailto:${CAREERS_EMAIL}?subject=${encodeURIComponent(`Job Application: ${formData.role} - ${formData.name}`)}&body=${generateMailtoBody()}`;
    window.location.href = mailtoUrl;
    setIsSubmitted(true);
  };

  const handleCopySummary = () => {
    navigator.clipboard.writeText(generateApplicationSummary());
    setIsCopied(true);
    setTimeout(() => setIsCopied(false), 3000);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50/70 via-blue-50/50 to-pink-50/60 pt-24 pb-20">
      <SEO
        title="Careers & Internships | Join Nhancio AI Systems"
        description="Join Nhancio — Building the Future of AI Systems (IITian Founded & T-Hub Incubated). Apply for high-impact roles and internships in autonomous AI agents, multimodal mobile apps, and machine learning engineering."
        path="/careers"
      />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Hero */}
        <div className="text-center mb-14 max-w-4xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-purple-100 text-purple-800 text-xs font-semibold uppercase tracking-wider mb-4 border border-purple-200/60 shadow-xs">
            <Sparkles className="w-3.5 h-3.5 text-purple-600" />
            <span>Opportunities at Nhancio</span>
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-gray-900 tracking-tight mb-4 leading-tight">
            Build Autonomous AI Systems <br className="hidden sm:inline" />
            <span className="bg-gradient-to-r from-purple-600 to-indigo-600 bg-clip-text text-transparent">
              Founded by IITians • Incubated at T-Hub
            </span>
          </h1>

          <p className="text-base sm:text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Build production multi-agent systems (RalphAI), 60fps mobile apps (Aura+), and multimodal AI (MagicBox) with IIT Kanpur engineers.
          </p>
        </div>

        {/* Culture & Highlights Cards */}
        <div className="grid sm:grid-cols-3 gap-5 mb-14">
          <div className="bg-white/85 backdrop-blur-md rounded-2xl p-6 border border-white/80 shadow-md flex items-start gap-4 hover:shadow-lg transition-shadow">
            <div className="w-11 h-11 rounded-xl bg-purple-100 text-purple-600 flex items-center justify-center shrink-0">
              <GraduationCap className="w-6 h-6" />
            </div>
            <div>
              <h3 className="text-base font-bold text-gray-900 mb-1">IITian Mentorship</h3>
              <p className="text-xs text-gray-600 leading-relaxed">
                Direct architecture guidance and code reviews from IIT Kanpur alumni.
              </p>
            </div>
          </div>

          <div className="bg-white/85 backdrop-blur-md rounded-2xl p-6 border border-white/80 shadow-md flex items-start gap-4 hover:shadow-lg transition-shadow">
            <div className="w-11 h-11 rounded-xl bg-blue-100 text-blue-600 flex items-center justify-center shrink-0">
              <Building2 className="w-6 h-6" />
            </div>
            <div>
              <h3 className="text-base font-bold text-gray-900 mb-1">T-Hub Innovation Hub</h3>
              <p className="text-xs text-gray-600 leading-relaxed">
                Headquartered at T-Hub Hyderabad with premier infrastructure and enterprise network.
              </p>
            </div>
          </div>

          <div className="bg-white/85 backdrop-blur-md rounded-2xl p-6 border border-white/80 shadow-md flex items-start gap-4 hover:shadow-lg transition-shadow">
            <div className="w-11 h-11 rounded-xl bg-emerald-100 text-emerald-600 flex items-center justify-center shrink-0">
              <Rocket className="w-6 h-6" />
            </div>
            <div>
              <h3 className="text-base font-bold text-gray-900 mb-1">High-Impact Systems</h3>
              <p className="text-xs text-gray-600 leading-relaxed">
                Ship production AI used daily by thousands of active users and enterprises.
              </p>
            </div>
          </div>
        </div>

        {/* Open Roles Section */}
        <div className="mb-14">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8">
            <div>
              <div className="inline-flex items-center gap-1.5 text-xs font-bold text-purple-600 uppercase tracking-wider mb-1">
                <Briefcase className="w-3.5 h-3.5" />
                <span>Featured Openings</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-gray-900">
                Explore Available Roles
              </h2>
            </div>
            <span className="text-xs font-semibold px-3 py-1 rounded-full bg-purple-50 text-purple-700 border border-purple-200 self-start sm:self-auto">
              4 Priority Positions
            </span>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {openRoles.map((role) => (
              <div
                key={role.id}
                className="bg-white/90 backdrop-blur-md rounded-3xl p-6 sm:p-7 border border-white/90 shadow-md hover:shadow-xl transition-all duration-300 flex flex-col justify-between group"
              >
                <div>
                  <div className="flex items-start justify-between gap-3 mb-3">
                    <span className="px-2.5 py-0.5 rounded-md text-[11px] font-bold bg-purple-100 text-purple-800 border border-purple-200/60">
                      {role.category}
                    </span>
                    <span className="text-xs font-semibold text-gray-500 flex items-center gap-1">
                      <Clock className="w-3.5 h-3.5" />
                      {role.type}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-gray-900 group-hover:text-purple-600 transition-colors mb-2">
                    {role.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-gray-600 leading-relaxed mb-4">
                    {role.description}
                  </p>

                  <div className="flex flex-wrap items-center gap-2 text-xs text-gray-500 mb-5">
                    <span className="inline-flex items-center gap-1">
                      <MapPin className="w-3.5 h-3.5 text-purple-500" />
                      {role.location}
                    </span>
                    <span>•</span>
                    <span>{role.experience}</span>
                  </div>

                  <div className="flex flex-wrap gap-1.5 mb-6">
                    {role.skills.map((skill, sIdx) => (
                      <span
                        key={sIdx}
                        className="px-2 py-0.5 rounded-md bg-gray-100 text-gray-700 text-[11px] font-medium"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="pt-4 border-t border-gray-100 flex items-center justify-between">
                  <button
                    onClick={() => handleRoleSelect(role.title)}
                    className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs font-bold bg-gradient-to-r from-purple-600 to-indigo-600 text-white shadow-xs hover:from-purple-700 hover:to-indigo-700 transition-all transform hover:scale-[1.02] cursor-pointer"
                  >
                    <span>Apply for Role</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </button>
                  <span className="text-[11px] text-gray-400 font-medium">Direct Review</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Native Interactive Application Card */}
        <div 
          id="application-form"
          className="bg-white/95 backdrop-blur-xl rounded-3xl p-6 sm:p-10 lg:p-12 shadow-2xl border border-white/80 relative overflow-hidden"
          style={{
            boxShadow: '0 25px 60px -15px rgba(0,0,0,0.08), inset 0 2px 4px rgba(255,255,255,0.95)',
          }}
        >
          {/* Accent top line */}
          <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-purple-600 via-indigo-600 to-pink-500" />

          {/* Form Header */}
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 pb-8 mb-8 border-b border-gray-100">
            <div>
              <div className="inline-flex items-center gap-1.5 text-xs font-bold text-purple-600 uppercase tracking-wider mb-1">
                <Code2 className="w-3.5 h-3.5" />
                <span>Quick Application Portal</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-gray-900">
                Direct Candidate Intake
              </h2>
              <p className="text-xs sm:text-sm text-gray-500 mt-1">
                Direct review by Nhancio engineering leadership within 48 hours. No ATS bottlenecks.
              </p>
            </div>

            <div className="flex items-center gap-2 shrink-0">
              <a
                href={GOOGLE_FORM_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-xs font-bold text-purple-600 hover:text-purple-700 bg-purple-50 hover:bg-purple-100 px-3.5 py-2 rounded-xl transition-colors border border-purple-200/60"
              >
                <span>Google Form Backup</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

          {/* Success State View */}
          {isSubmitted ? (
            <div className="bg-gradient-to-br from-purple-50 to-indigo-50/50 rounded-2xl p-8 sm:p-10 border border-purple-100 text-center max-w-2xl mx-auto">
              <div className="w-16 h-16 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto mb-4 shadow-sm">
                <CheckCircle2 className="w-8 h-8" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-2">
                Application Prepared!
              </h3>
              <p className="text-sm text-gray-600 leading-relaxed mb-6">
                Your email client should have opened with your application for <strong className="text-purple-700 font-semibold">{formData.role}</strong>. If it didn't open automatically, you can copy your application details below and email them directly to <a href={`mailto:${CAREERS_EMAIL}`} className="text-purple-600 font-bold underline">{CAREERS_EMAIL}</a>.
              </p>

              <div className="flex flex-wrap items-center justify-center gap-3 mb-6">
                <button
                  type="button"
                  onClick={handleCopySummary}
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-purple-600 text-white text-xs font-bold shadow-md hover:bg-purple-700 transition-all cursor-pointer"
                >
                  <Copy className="w-3.5 h-3.5" />
                  <span>{isCopied ? 'Application Copied!' : 'Copy Application Details'}</span>
                </button>

                <a
                  href={`mailto:${CAREERS_EMAIL}?subject=${encodeURIComponent(`Job Application: ${formData.role} - ${formData.name}`)}&body=${generateMailtoBody()}`}
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-white text-gray-800 border border-gray-200 text-xs font-bold shadow-xs hover:bg-gray-50 transition-all"
                >
                  <Mail className="w-3.5 h-3.5 text-purple-600" />
                  <span>Re-open Email Client</span>
                </a>
              </div>

              <button
                type="button"
                onClick={() => setIsSubmitted(false)}
                className="text-xs text-gray-500 hover:text-purple-600 underline font-medium"
              >
                Submit another application or edit details
              </button>
            </div>
          ) : (
            /* Main Interactive Form */
            <form onSubmit={handleSubmit} className="space-y-6">
              
              <div className="grid sm:grid-cols-2 gap-6">
                {/* Full Name */}
                <div>
                  <label className="block text-xs font-bold text-gray-700 uppercase tracking-wider mb-2">
                    Full Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleInputChange}
                    placeholder="e.g. Rahul Sharma"
                    className="w-full px-4 py-3 rounded-xl bg-gray-50 border border-gray-200 text-sm text-gray-900 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:bg-white transition-all"
                  />
                </div>

                {/* Email Address */}
                <div>
                  <label className="block text-xs font-bold text-gray-700 uppercase tracking-wider mb-2">
                    Email Address <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="rahul@example.com"
                    className="w-full px-4 py-3 rounded-xl bg-gray-50 border border-gray-200 text-sm text-gray-900 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:bg-white transition-all"
                  />
                </div>
              </div>

              <div className="grid sm:grid-cols-2 gap-6">
                {/* Phone / WhatsApp */}
                <div>
                  <label className="block text-xs font-bold text-gray-700 uppercase tracking-wider mb-2">
                    Phone / WhatsApp Number <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    required
                    value={formData.phone}
                    onChange={handleInputChange}
                    placeholder="+91 98765 43210"
                    className="w-full px-4 py-3 rounded-xl bg-gray-50 border border-gray-200 text-sm text-gray-900 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:bg-white transition-all"
                  />
                </div>

                {/* Role Selecting Dropdown */}
                <div>
                  <label className="block text-xs font-bold text-gray-700 uppercase tracking-wider mb-2">
                    Role You Are Applying For <span className="text-red-500">*</span>
                  </label>
                  <select
                    name="role"
                    value={formData.role}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 rounded-xl bg-gray-50 border border-gray-200 text-sm text-gray-900 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:bg-white transition-all cursor-pointer"
                  >
                    {openRoles.map((r) => (
                      <option key={r.id} value={r.title}>
                        {r.title} ({r.type})
                      </option>
                    ))}
                    <option value="General Engineering Application">
                      General Engineering / Research (Open Track)
                    </option>
                  </select>
                </div>
              </div>

              <div className="grid sm:grid-cols-2 gap-6">
                {/* Experience Level / Education */}
                <div>
                  <label className="block text-xs font-bold text-gray-700 uppercase tracking-wider mb-2">
                    Experience Level / Background <span className="text-red-500">*</span>
                  </label>
                  <select
                    name="experienceLevel"
                    value={formData.experienceLevel}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 rounded-xl bg-gray-50 border border-gray-200 text-sm text-gray-900 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:bg-white transition-all cursor-pointer"
                  >
                    <option value="Student / Recent Graduate">Student / Recent Graduate</option>
                    <option value="1 - 3 Years Experience">1 - 3 Years Experience</option>
                    <option value="3+ Years Senior Experience">3+ Years Senior Experience</option>
                    <option value="Independent AI Researcher / Builder">Independent AI Researcher / Builder</option>
                  </select>
                </div>

                {/* Resume URL / Drive Link */}
                <div>
                  <label className="block text-xs font-bold text-gray-700 uppercase tracking-wider mb-2">
                    Resume Link (Google Drive / Notion / Dropbox) <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="url"
                    name="resumeLink"
                    required
                    value={formData.resumeLink}
                    onChange={handleInputChange}
                    placeholder="https://drive.google.com/file/d/..."
                    className="w-full px-4 py-3 rounded-xl bg-gray-50 border border-gray-200 text-sm text-gray-900 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:bg-white transition-all"
                  />
                  <span className="text-[11px] text-gray-400 mt-1 block">Please ensure view access is set to anyone with link.</span>
                </div>
              </div>

              {/* Portfolio / GitHub / LinkedIn */}
              <div>
                <label className="block text-xs font-bold text-gray-700 uppercase tracking-wider mb-2">
                  GitHub Profile / Portfolio / LinkedIn URL
                </label>
                <input
                  type="text"
                  name="portfolio"
                  value={formData.portfolio}
                  onChange={handleInputChange}
                  placeholder="https://github.com/your-handle or https://linkedin.com/in/your-profile"
                  className="w-full px-4 py-3 rounded-xl bg-gray-50 border border-gray-200 text-sm text-gray-900 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:bg-white transition-all"
                />
              </div>

              {/* Note / Highlight Projects */}
              <div>
                <label className="block text-xs font-bold text-gray-700 uppercase tracking-wider mb-2">
                  Key Projects Built / Why You'd Excel at Nhancio
                </label>
                <textarea
                  name="note"
                  rows={4}
                  value={formData.note}
                  onChange={handleInputChange}
                  placeholder="Tell us about the coolest AI agent, pipeline, or app you've built, or why you want to build alongside us at Nhancio."
                  className="w-full px-4 py-3 rounded-xl bg-gray-50 border border-gray-200 text-sm text-gray-900 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:bg-white transition-all resize-y"
                />
              </div>

              {/* Submit CTA */}
              <div className="pt-4 flex flex-col sm:flex-row items-center justify-between gap-4">
                <div className="flex items-center gap-2 text-xs text-gray-500">
                  <ShieldCheck className="w-4 h-4 text-purple-600 shrink-0" />
                  <span>Applications are reviewed directly by IITian founders within 48 hours.</span>
                </div>

                <button
                  type="submit"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-xl text-sm font-bold bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700 text-white shadow-lg hover:shadow-purple-500/25 transition-all duration-300 transform hover:scale-[1.02] cursor-pointer"
                >
                  <Send className="w-4 h-4" />
                  <span>Submit Application</span>
                </button>
              </div>

            </form>
          )}

          {/* Direct Support Footer Strip */}
          <div className="mt-10 pt-6 border-t border-gray-100 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-gray-500">
            <div className="flex items-center gap-2">
              <Mail className="w-4 h-4 text-purple-600" />
              <span>Direct Recruitment Inquiries: <a href={`mailto:${CAREERS_EMAIL}`} className="text-purple-600 font-semibold hover:underline">{CAREERS_EMAIL}</a></span>
            </div>
            <p>
              Office: T-Hub, Knowledge City, Hyderabad, India
            </p>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Careers;
