import React from 'react';
import { MapPin, Clock, Users, Briefcase, ArrowRight, Code, Brain, Palette, TrendingUp, MonitorSmartphone, Smartphone, PenTool, Search } from 'lucide-react';

const internshipOpenings = [
  {
    id: 1,
    title: "Graphic Designer Intern",
    department: "Design",
    location: "Remote",
    duration: "2-6 months",
    hours: "15–25 hrs/week",
    description: `Join Nhancio as a Graphic Designer and craft visually stunning assets for our AI-driven products. You’ll design social creatives, landing pages, pitch decks, and branding materials for projects like Homemates AI and Agentlybot.com. Collaborate closely with product and marketing teams to define a unified visual identity. Ideal for those who love blending creativity with emerging technologies like AI and automation. You’ll work in a fast-paced, design-forward startup environment where your ideas directly shape brand presence.`,
    requirements: [
      "Figma/Canva skills",
      "Creativity & visual storytelling",
      "Portfolio (preferred)",
      "Interest in AI/tech design"
    ],
    icon: <Palette className="w-6 h-6" />, color: "bg-pink-100 text-pink-600"
  },
  {
    id: 2,
    title: "Social Media Marketing Intern",
    department: "Marketing",
    location: "Remote",
    duration: "2-6 months",
    hours: "15–25 hrs/week",
    description: `Help us build buzz around our AI tools and startups like Homemates AI and Agentlybot.com. Create viral content, manage campaigns, and track analytics across platforms like LinkedIn, Instagram, and Twitter. Get hands-on with AI tools to automate, optimise, and elevate our marketing game. Perfect for someone passionate about storytelling, trends, and growth hacking in tech. You’ll play a key role in making Nhancio a known name in the AI and startup ecosystem.`,
    requirements: [
      "Content creation skills",
      "Familiarity with social platforms",
      "Analytical mindset",
      "Interest in tech/startups"
    ],
    icon: <TrendingUp className="w-6 h-6" />, color: "bg-green-100 text-green-600"
  },
  {
    id: 3,
    title: "Web Developer Intern",
    department: "Engineering",
    location: "Remote",
    duration: "2-6 months",
    hours: "15–25 hrs/week",
    description: `Design, develop, and maintain lightning-fast and scalable websites for our AI products. You'll work on public platforms like Agentlybot.com and campaign microsites. Experience in HTML, CSS, JavaScript (React preferred) and deployment best practices is desired. Collaborate with designers and AI engineers to bring functional, user-focused digital experiences to life. Get exposure to real-world LLM integration and next-gen web tools.`,
    requirements: [
      "HTML, CSS, JS (React preferred)",
      "Deployment basics",
      "Portfolio/GitHub (preferred)",
      "Interest in AI/web tech"
    ],
    icon: <Code className="w-6 h-6" />, color: "bg-blue-100 text-blue-600"
  },
  {
    id: 4,
    title: "Flutter Development Intern",
    department: "Engineering",
    location: "Remote",
    duration: "2-6 months",
    hours: "15–25 hrs/week",
    description: `Build beautiful, cross-platform apps that reach thousands of users. You’ll work on the mobile experience for Homemates AI and similar agent-based AI tools. From UI design to Firebase integrations and LLM APIs, expect hands-on experience at every layer. Work in a tight-knit, agile team that moves fast and experiments often. Perfect for Flutter enthusiasts eager to contribute to real-world AI products.`,
    requirements: [
      "Flutter/Dart skills",
      "UI/UX basics",
      "Firebase/REST APIs",
      "Portfolio/GitHub (preferred)"
    ],
    icon: <MonitorSmartphone className="w-6 h-6" />, color: "bg-cyan-100 text-cyan-600"
  },
  {
    id: 5,
    title: "iOS Developer Intern",
    department: "Engineering",
    location: "Remote",
    duration: "2-6 months",
    hours: "15–25 hrs/week",
    description: `Join us to build sleek, performance-optimized iOS apps powered by LLMs and AI agents. You’ll help shape the iOS experience of platforms like Homemates AI, using Swift and the latest Apple SDKs. Collaborate with Flutter, backend, and product teams to deliver seamless experiences. Ideal for someone excited about innovation in GenAI, real-time data, and personalization. Opportunity to publish apps to the App Store under a growing startup brand.`,
    requirements: [
      "Swift/iOS SDKs",
      "UI/UX basics",
      "Portfolio/GitHub (preferred)",
      "Interest in GenAI/mobile"
    ],
    icon: <Smartphone className="w-6 h-6" />, color: "bg-purple-100 text-purple-600"
  },
  {
    id: 6,
    title: "Android Developer Intern",
    department: "Engineering",
    location: "Remote",
    duration: "2-6 months",
    hours: "15–25 hrs/week",
    description: `Develop cutting-edge Android applications for AI-first tools like Agentlybot and Homemates AI. You’ll work with Kotlin/Java, REST APIs, and Firebase to build intelligent, intuitive apps. Collaborate with design and data teams to integrate personalization and LLM features. Be part of a fast-evolving tech stack and contribute to public releases. Ideal for those passionate about mobile and innovation in GenAI.`,
    requirements: [
      "Kotlin/Java",
      "REST APIs/Firebase",
      "Portfolio/GitHub (preferred)",
      "Interest in GenAI/mobile"
    ],
    icon: <Smartphone className="w-6 h-6" />, color: "bg-orange-100 text-orange-600"
  },
  {
    id: 7,
    title: "AI / Data Science Intern",
    department: "AI Research",
    location: "Remote",
    duration: "2-6 months",
    hours: "15–25 hrs/week",
    description: `Dive deep into real-world AI and LLM pipelines, powering apps like Homemates AI and Agentlybot. You’ll work on data modeling, prompt engineering, retrieval-augmented generation (RAG), and fine-tuning. Experience with Python, LangChain, vector databases, and OpenAI APIs is a plus. You'll experiment with agent-based frameworks to build autonomous taskbots. If you're passionate about building AI that actually works — this is your place.`,
    requirements: [
      "Python, ML basics",
      "LangChain/OpenAI APIs (bonus)",
      "Portfolio/GitHub (preferred)",
      "Interest in LLMs/AI"
    ],
    icon: <Brain className="w-6 h-6" />, color: "bg-purple-100 text-purple-600"
  },
  {
    id: 8,
    title: "QA & Testing Intern",
    department: "Quality Assurance",
    location: "Remote",
    duration: "2-6 months",
    hours: "15–25 hrs/week",
    description: `Ensure the reliability and excellence of AI tools and mobile/web apps across platforms. You’ll develop test plans, perform functional and UI testing, and report bugs in Agile cycles. Work on products like Homemates AI and Agentlybot with real users. Exposure to automation tools like Selenium, Postman, and mobile emulators is a bonus. Perfect for detail-oriented techies who love finding and solving issues early.`,
    requirements: [
      "Testing basics",
      "Attention to detail",
      "Automation tools (bonus)",
      "Interest in AI/web/mobile"
    ],
    icon: <Code className="w-6 h-6" />, color: "bg-blue-100 text-blue-600"
  },
  {
    id: 9,
    title: "Product Management Intern",
    department: "Product",
    location: "Remote",
    duration: "2-6 months",
    hours: "15–25 hrs/week",
    description: `Take charge of user research, feature planning, and roadmapping for live products like Agentlybot and Homemates AI. Work cross-functionally with design, tech, and business teams to ship features and improve UX. You’ll define KPIs, run sprints, and get hands-on experience with LLM-based product innovations. Ideal for aspiring PMs who love AI, experimentation, and customer empathy. Expect full ownership of exciting modules from day one.`,
    requirements: [
      "User research",
      "Feature planning",
      "Analytical mindset",
      "Interest in AI/products"
    ],
    icon: <PenTool className="w-6 h-6" />, color: "bg-green-100 text-green-600"
  }
];

const overview = [
  { label: "Location", value: "Remote (Work from anywhere)" },
  { label: "Duration", value: "Minimum 2 months; Preferred 3–6 months" },
  { label: "Working Hours", value: "Flexible (Approx. 15–25 hours/week)" },
  { label: "Perks", value: "Work on real AI projects, Certificate & LOR, Mentorship from IIT Kanpur alumni, Spotlight on Nhancio socials, Access to internal tools & playbooks" },
  { label: "Eligibility", value: "Open to college students, recent grads, or early professionals with a strong interest in startups, tech, and AI" },
  { label: "General Tools", value: "Slack, Notion, Google Drive, GitHub, Figma/Canva (role-specific)" },
  { label: "Requirements", value: "Strong communication, self-motivation, willingness to learn, role-specific skills, portfolio/GitHub (preferred)" },
  { label: "Growth Path", value: "Top performers: PPO, incentives, featured intern showcase" }
];

const Careers = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-blue-50 to-green-50 pt-20">
      {/* Hero banner with SP1 image */}
      <div className="relative w-full h-64 md:h-80 overflow-hidden">
        <img src="/media/careers/hero-bg.jpg" alt="Careers at Nhancio" className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-black/30 flex items-end">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-8 w-full">
            <h1 className="text-3xl md:text-5xl font-bold text-white drop-shadow-lg">
              Build the future with AI — join Nhancio
            </h1>
            <p className="text-lg text-white/90 mt-2 max-w-2xl">
              Remote internships on real AI products. Learn from IIT alumni. Agentic-first teams.
            </p>
          </div>
        </div>
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-gray-800 mb-6">
            Nhancio Internship Program
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Work on real AI products, learn from IIT Kanpur alumni, and launch your career in tech/startups. Flexible, remote, and high-impact internships for students and early professionals.
          </p>
        </div>

        {/* Internship Listings - 2x3 Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {internshipOpenings.map((role) => (
            <div
              key={role.id}
              className="bg-gradient-to-br from-white/85 to-white/50 backdrop-blur-sm rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-500 transform hover:scale-[1.02] border border-white/30 group h-full flex flex-col"
              style={{
                boxShadow: 'inset 0 6px 12px rgba(255, 255, 255, 0.9), inset 0 -6px 12px rgba(0, 0, 0, 0.06), 0 12px 40px rgba(0, 0, 0, 0.15), 0 4px 12px rgba(0, 0, 0, 0.1)',
              }}
            >
              <div className="flex items-start gap-3 mb-4">
                <div className={`w-10 h-10 rounded-xl ${role.color} flex items-center justify-center flex-shrink-0`}>
                  {role.icon}
                </div>
                <div className="flex-1">
                  <h3 className="text-lg font-bold text-gray-800 mb-1">
                    {role.title}
                  </h3>
                  <div className="flex flex-wrap gap-2 text-xs text-gray-600">
                    <div className="flex items-center gap-1">
                      <Briefcase className="w-3 h-3" />
                      {role.department}
                    </div>
                    <div className="flex items-center gap-1">
                      <MapPin className="w-3 h-3" />
                      {role.location}
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex gap-4 text-xs text-gray-600 mb-4">
                <div className="flex items-center gap-1">
                  <Clock className="w-3 h-3" />
                  {role.duration}
                </div>
                <div className="flex items-center gap-1">
                  <Users className="w-3 h-3" />
                  {role.hours}
                </div>
              </div>

              <p className="text-sm text-gray-600 mb-4 flex-1">
                {role.description}
              </p>

              <div className="mb-4">
                <h4 className="font-semibold text-gray-800 mb-2 text-sm">Requirements:</h4>
                <ul className="space-y-1">
                  {role.requirements.map((req, index) => (
                    <li key={index} className="flex items-start gap-2 text-xs text-gray-600">
                      <div className="w-1 h-1 bg-purple-500 rounded-full mt-1.5 flex-shrink-0"></div>
                      {req}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-auto">
                <a
                  href="https://forms.gle/FP9MxgEgLZmXbwJ48"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full bg-purple-600 text-white px-4 py-2 rounded-xl font-semibold hover:bg-purple-700 transition-all duration-300 transform hover:scale-105 flex items-center justify-center gap-2 text-sm"
                >
                  Apply Now
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="mt-20">
          <div className="bg-gradient-to-br from-white/85 to-white/50 backdrop-blur-sm rounded-3xl p-8 text-center shadow-lg border border-white/30"
               style={{
                 boxShadow: 'inset 0 6px 12px rgba(255, 255, 255, 0.9), inset 0 -6px 12px rgba(0, 0, 0, 0.06), 0 12px 40px rgba(0, 0, 0, 0.15), 0 4px 12px rgba(0, 0, 0, 0.1)',
               }}>
            <h3 className="text-2xl font-bold text-gray-800 mb-4">
              Don't See the Right Internship?
            </h3>
            <p className="text-gray-600 mb-6">
              We're always looking for talented interns to join our team. Send us your resume and let's talk!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="mailto:hello@nhancio.com" className="bg-purple-600 text-white px-8 py-3 rounded-2xl font-semibold hover:bg-purple-700 transition-colors flex items-center justify-center">
                Contact HR
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Careers;