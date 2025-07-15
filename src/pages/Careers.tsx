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
  },
  {
    id: 10,
    title: "Market Research Intern",
    department: "Business",
    location: "Remote",
    duration: "2-6 months",
    hours: "15–25 hrs/week",
    description: `Help us explore new markets, user personas, and AI opportunities across industries. You’ll conduct competitive analysis, customer interviews, and data-driven insights to shape new AI products. Work closely with founders on product-market fit for tools like Agentlybot and upcoming AI agents. Perfect for those curious about user needs, tech trends, and startup ecosystems. You’ll be a critical voice in validating what we build next.`,
    requirements: [
      "Market research",
      "Data analysis",
      "Curiosity about tech/startups",
      "Interest in AI/business"
    ],
    icon: <Search className="w-6 h-6" />, color: "bg-yellow-100 text-yellow-600"
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
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold text-gray-800 mb-6">
            🌟 Nhancio Internship Program
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Work on real AI products, learn from IIT Kanpur alumni, and launch your career in tech/startups. Flexible, remote, and high-impact internships for students and early professionals.
          </p>
        </div>

        {/* Overview Table */}
        <div className="mb-16 max-w-2xl mx-auto">
          <table className="w-full bg-white/80 rounded-2xl shadow-lg overflow-hidden">
            <tbody>
              {overview.map((item, idx) => (
                <tr key={idx} className="border-b last:border-b-0">
                  <td className="py-3 px-4 font-semibold text-gray-700 w-1/3">{item.label}</td>
                  <td className="py-3 px-4 text-gray-600">{item.value}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Internship Listings */}
        <div className="space-y-6">
          {internshipOpenings.map((role) => (
            <div
              key={role.id}
              className="bg-gradient-to-br from-white/85 to-white/50 backdrop-blur-sm rounded-3xl p-8 shadow-lg hover:shadow-xl transition-all duration-500 transform hover:scale-[1.02] border border-white/30 group"
              style={{
                boxShadow: 'inset 0 6px 12px rgba(255, 255, 255, 0.9), inset 0 -6px 12px rgba(0, 0, 0, 0.06), 0 12px 40px rgba(0, 0, 0, 0.15), 0 4px 12px rgba(0, 0, 0, 0.1)',
              }}
            >
              <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between">
                <div className="flex-1">
                  <div className="flex items-start gap-4 mb-4">
                    <div className={`w-12 h-12 rounded-2xl ${role.color} flex items-center justify-center`}>
                      {role.icon}
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-gray-800 mb-2">
                        {role.title}
                      </h3>
                      <div className="flex flex-wrap gap-4 text-sm text-gray-600">
                        <div className="flex items-center gap-1">
                          <Briefcase className="w-4 h-4" />
                          {role.department}
                        </div>
                        <div className="flex items-center gap-1">
                          <MapPin className="w-4 h-4" />
                          {role.location}
                        </div>
                        <div className="flex items-center gap-1">
                          <Clock className="w-4 h-4" />
                          {role.duration}
                        </div>
                        <div className="flex items-center gap-1">
                          <Users className="w-4 h-4" />
                          {role.hours}
                        </div>
                      </div>
                    </div>
                  </div>

                  <p className="text-gray-600 mb-4">
                    {role.description}
                  </p>

                  <div className="mb-4">
                    <h4 className="font-semibold text-gray-800 mb-2">Requirements:</h4>
                    <ul className="space-y-1">
                      {role.requirements.map((req, index) => (
                        <li key={index} className="flex items-start gap-2 text-sm text-gray-600">
                          <div className="w-1.5 h-1.5 bg-purple-500 rounded-full mt-2 flex-shrink-0"></div>
                          {req}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="mt-6 lg:mt-0 lg:ml-8">
                  <a
                    href="https://forms.gle/FP9MxgEgLZmXbwJ48"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full lg:w-auto bg-purple-600 text-white px-8 py-3 rounded-2xl font-semibold hover:bg-purple-700 transition-all duration-300 transform hover:scale-105 flex items-center justify-center gap-2 group"
                  >
                    Apply Now
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </a>
                </div>
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