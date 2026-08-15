import React, { useState } from 'react';
import { 
  Bot, 
  ExternalLink, 
  Sparkles, 
  Code2, 
  Layers, 
  CheckCircle2, 
  Activity, 
  Cpu, 
  X, 
  ArrowRight,
  TrendingUp,
  ShieldCheck,
  Zap,
  Smartphone,
  BookOpen,
  Utensils,
  ShoppingBag,
  FileCheck,
  Search
} from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

interface ProjectShowcase {
  id: string;
  name: string;
  tagline: string;
  category: 'frameworks' | 'multimodal' | 'enterprise' | 'growth';
  categoryLabel: string;
  badge: string;
  badgeColor: string;
  logoSrc?: string;
  fallbackIcon: React.ReactNode;
  iconBg: string;
  summary: string;
  keyMetric: { value: string; label: string };
  features: string[];
  techStack: string[];
  deepDive: {
    problem: string;
    solution: string;
    architecture: string[];
    impact: string[];
    liveUrl?: string;
  };
}

const projects: ProjectShowcase[] = [
  {
    id: "ralf",
    name: "RalphAI (RALF)",
    tagline: "Unified Multi-Agent Marketing & Analytics System",
    category: "frameworks",
    categoryLabel: "Autonomous Agents",
    badge: "Enterprise Production",
    badgeColor: "bg-emerald-100 text-emerald-700 border-emerald-200",
    logoSrc: "/logos/todc.png",
    fallbackIcon: <TrendingUp className="w-6 h-6" />,
    iconBg: "bg-emerald-50 text-emerald-600",
    summary: "Autonomous multi-agent intelligence and reporting platform for multi-unit restaurant operators across DoorDash and UberEats, featuring closed-loop ad campaign execution and browser automation.",
    keyMetric: { value: "300+", label: "Restaurant Locations Automated" },
    features: [
      "DoorDash & UberEats Financial & Ad Sync",
      "Playwright Headless Browser Automation",
      "Macro Revenue Attribution & Forecasting",
      "Subprocess Sandbox & Automated Audits"
    ],
    techStack: ["Python", "FastAPI", "Playwright", "Chrome DevTools", "Streamlit", "PostgreSQL", "Docker"],
    deepDive: {
      problem: "Enterprise restaurant operators manage dozens of delivery accounts with fragmented portals, manual campaign tweaking, and hours of weekly reporting overhead.",
      solution: "RALF deploys autonomous browser-automation worker agents that authenticate, extract granular ad performance data, compute ROI metrics, and automatically optimize promotional spend.",
      architecture: [
        "FastAPI orchestration backend with asynchronous worker queues",
        "Headless Chromium agents via Playwright for authenticated portal ingestion",
        "Deterministic data transformations computing store-slot pre/post metrics",
        "Multi-tenant report generation exporting to CSV, JSON, and interactive dashboards"
      ],
      impact: [
        "Eliminated 15+ hours/week of manual marketing report compilation",
        "100% automated DoorDash/UberEats promotional campaign updates",
        "Real-time ROI calculation across hundreds of store locations"
      ]
    }
  },
  {
    id: "aura-plus",
    name: "Aura++ (AuraPlus)",
    tagline: "Cross-Platform Lifestyle & Ambient Intelligence Ecosystem",
    category: "multimodal",
    categoryLabel: "Mobile & Consumer AI",
    badge: "Expo 56 & Native SDK",
    badgeColor: "bg-purple-100 text-purple-700 border-purple-200",
    logoSrc: "/logos/auraplus-logo.png",
    fallbackIcon: <Smartphone className="w-6 h-6" />,
    iconBg: "bg-purple-50 text-purple-600",
    summary: "Next-generation iOS & Android application engineered with React Native and Expo 56, combining native audio synthesis, calendar synchronization, camera computer vision, and ambient intelligence.",
    keyMetric: { value: "60 FPS", label: "Fluid Reanimated UX" },
    features: [
      "Offline-First SQLite & IDB Sync Engine",
      "Expo Native Audio & Haptic Feedback",
      "Computer Vision Camera Integration",
      "PostHog Product Analytics & Observability"
    ],
    techStack: ["React Native 0.85", "Expo 56", "TypeScript", "Zustand", "Reanimated 4", "Firebase", "PostHog"],
    deepDive: {
      problem: "Mobile lifestyle and productivity tools are typically bloated, cloud-dependent with high latency, and lack deep native device integration.",
      solution: "Aura++ leverages an offline-first architecture with Zustand state management, hardware acceleration via Reanimated 4, and native Expo hardware modules for zero-latency interactions.",
      architecture: [
        "Expo Router file-based mobile navigation architecture",
        "Modular native device services: expo-audio, expo-calendar, expo-camera",
        "Local indexed storage fallback with cloud sync",
        "EAS CI/CD pipeline building native AAB and IPA release packages"
      ],
      impact: [
        "Sub-16ms frame render times across modern iOS and Android devices",
        "Zero-latency offline interactions with automatic cloud synchronization",
        "Production grade telemetry and crash-free session rates"
      ]
    }
  },
  {
    id: "nfla-talf",
    name: "TALF / NFLA Convention Engine",
    tagline: "Autonomous Event Operations & Digital Verification",
    category: "frameworks",
    categoryLabel: "Autonomous Frameworks",
    badge: "Netlify Blobs Powered",
    badgeColor: "bg-blue-100 text-blue-700 border-blue-200",
    fallbackIcon: <FileCheck className="w-6 h-6" />,
    iconBg: "bg-blue-50 text-blue-600",
    summary: "Enterprise event workflow and convention engine featuring real-time digital countersignatures, dynamic cryptographic QR verification, PDF generation, and Netlify Blobs storage.",
    keyMetric: { value: "100%", label: "Real-time Verification" },
    features: [
      "Dynamic Cryptographic QR Code Verification",
      "Touch Canvas Digital Countersignatures",
      "Client-Side PDF Document Compilation",
      "Serverless Netlify Blobs Document Store"
    ],
    techStack: ["React", "TypeScript", "Vite", "Tailwind CSS", "@netlify/blobs", "@netlify/functions", "pdf-lib"],
    deepDive: {
      problem: "Large-scale conventions and events struggle with sluggish physical paperwork, forgeable badges, slow countersignature processes, and disjointed attendee check-ins.",
      solution: "NFLA / TALF delivers an integrated, serverless web application that instantly signs legal agreements, compiles tamper-proof PDFs in browser memory, and stores signed assets in Netlify Blobs.",
      architecture: [
        "React + Vite responsive client optimized for low-bandwidth mobile networks",
        "In-memory PDF synthesis via pdf-lib and html5 signature canvas",
        "Netlify Functions serverless API layer orchestrating email and QR lookups",
        "Distributed key-value object storage powered by @netlify/blobs"
      ],
      impact: [
        "Eliminated 100% of paper registration overhead at partner conventions",
        "Instant sub-second badge scan and authentication at check-in gates",
        "Zero-infrastructure serverless deployment with infinite auto-scaling"
      ]
    }
  },
  {
    id: "magicbox",
    name: "MagicBoxAI",
    tagline: "Next-Gen AI Creation Sandbox & Multimodal Ecosystem",
    category: "multimodal",
    categoryLabel: "Generative AI",
    badge: "Multi-App Turborepo",
    badgeColor: "bg-pink-100 text-pink-700 border-pink-200",
    logoSrc: "/logos/magicbox-logo.png",
    fallbackIcon: <Sparkles className="w-6 h-6" />,
    iconBg: "bg-pink-50 text-pink-600",
    summary: "Comprehensive generative AI creative suite and multi-app ecosystem comprising high-converting landing pages, interactive creative studio web apps, and administrative telemetry portals.",
    keyMetric: { value: "<800ms", label: "Model Generation Latency" },
    features: [
      "Interactive Multimodal Generation Sandbox",
      "Monorepo Multi-App Architecture (Landing, Web, Admin)",
      "Serverless Compute Functions for AI Inference",
      "Role-Based Access Control & Usage Metering"
    ],
    techStack: ["React", "Vite", "TypeScript", "Node.js Functions", "Firebase", "Tailwind CSS", "GCP"],
    deepDive: {
      problem: "Creatives and marketing agencies need unified generative pipelines for copy, visuals, and marketing assets without toggling between disjointed LLM wrappers.",
      solution: "MagicBoxAI provides a unified workspace monorepo where users ideate, generate, remix, and publish multimedia content through a single intuitive dashboard.",
      architecture: [
        "Turborepo / npm workspaces connecting landing, web app, and admin studio",
        "Serverless functions proxying and streaming responses from cutting-edge LLMs",
        "Firestore / Firebase auth and real-time database synchronizing user sessions",
        "Production-tested CI/CD pipelines with comprehensive smoke tests"
      ],
      impact: [
        "Over 10x acceleration in multi-channel creative production cycles",
        "Unified authentication and token metering across multiple distinct sub-apps",
        "Seamless cross-team asset sharing and collaboration"
      ]
    }
  },
  {
    id: "intelliassets",
    name: "IntelliAssets.AI",
    tagline: "Adaptive AI Tutoring & Curriculum Platform for Australian Schools",
    category: "enterprise",
    categoryLabel: "EdTech & Enterprise",
    badge: "ACARA Aligned (Years 1-12)",
    badgeColor: "bg-indigo-100 text-indigo-700 border-indigo-200",
    fallbackIcon: <BookOpen className="w-6 h-6" />,
    iconBg: "bg-indigo-50 text-indigo-600",
    summary: "Full-scale educational intelligence platform tailored to Australian Curriculum standards (Years 1–12), integrating student learning portals, educator analytics dashboards, and Django REST APIs.",
    keyMetric: { value: "Years 1–12", label: "National Curriculum Coverage" },
    features: [
      "ACARA-Aligned Adaptive Question Engine",
      "Multi-Workspace Ecosystem (Student, Admin, API)",
      "Automated Student Progress & Skill Heatmaps",
      "Integrated Dodo Payments & Subscription Engine"
    ],
    techStack: ["Next.js", "React", "TypeScript", "Django REST Framework", "PostgreSQL", "Dodo Payments"],
    deepDive: {
      problem: "Traditional tutoring platforms lack real-time curriculum alignment, personalized diagnostic feedback, and multi-tenant tooling for school administrators.",
      solution: "IntelliAssets.AI matches every student question against strict Australian curriculum learning goals, utilizing AI to diagnose specific conceptual misunderstandings and generate custom remediation exercises.",
      architecture: [
        "Monorepo architecture separating Student Portal, Admin Dashboard, and Landing",
        "Django REST Framework backend handling student records and test submissions",
        "PostgreSQL relational database with curriculum topic graphs and progression trees",
        "Webhook-driven billing integration supporting recurring family and institutional plans"
      ],
      impact: [
        "Adopted across multiple school districts for continuous diagnostic evaluation",
        "42% improvement in student retention of core mathematical and literacy concepts",
        "Automated reporting for educators saving 5+ hours per assessment cycle"
      ]
    }
  },
  {
    id: "resgro",
    name: "ResGro-AI",
    tagline: "Autonomous Restaurant Growth & Ad Automation",
    category: "growth",
    categoryLabel: "Growth Automation",
    badge: "Live at resgro.ai",
    badgeColor: "bg-amber-100 text-amber-700 border-amber-200",
    logoSrc: "/logos/resgro.png",
    fallbackIcon: <Utensils className="w-6 h-6" />,
    iconBg: "bg-amber-50 text-amber-600",
    summary: "AI-driven growth marketing platform for restaurants providing automated campaign setup, monthly reporting, deep-dive analytics, and browser-automation agents deployed on Google Cloud Run.",
    keyMetric: { value: "100%", label: "Hands-Free Ad Launches" },
    features: [
      "Automated Multi-Platform Ad Setup & Review",
      "Deep-Dive Revenue Attribution Engine",
      "Headless Browser Autonomous Execution",
      "Stripe Customer Portal & Subscription Sync"
    ],
    techStack: ["Python FastAPI", "Playwright", "React", "Vite", "Django", "Cloud Run", "Stripe"],
    deepDive: {
      problem: "Restaurant owners waste thousands on unoptimized local ads without understanding platform analytics or having time to configure daily promo schedules.",
      solution: "ResGro-AI automates the entire ad lifecycle: analyzing local demographic traffic, recommending promotional offers, and executing campaigns via autonomous browser bots.",
      architecture: [
        "Python FastAPI agents running Playwright for unattended browser actions",
        "Django core managing user subscriptions, Stripe webhooks, and billing",
        "Containerized microservices deployed on Google Cloud Run with autoscaling",
        "Vite React customer portal with real-time campaign telemetry"
      ],
      impact: [
        "Average 2.8x Return on Ad Spend (ROAS) for enrolled restaurants",
        "Zero manual intervention required for weekly ad creative updates",
        "Live across nationwide restaurant groups"
      ],
      liveUrl: "https://resgro.ai"
    }
  },
  {
    id: "homemates",
    name: "Homemates AI",
    tagline: "AI-Native Flatmate Matching & Compatibility Engine",
    category: "multimodal",
    categoryLabel: "Consumer AI",
    badge: "Won Mathhack 2.0 (Govt of Telangana)",
    badgeColor: "bg-yellow-100 text-yellow-800 border-yellow-300",
    logoSrc: "/logos/homemates-logo.jpg",
    fallbackIcon: <Bot className="w-6 h-6" />,
    iconBg: "bg-yellow-50 text-yellow-600",
    summary: "Award-winning roommate discovery platform using lifestyle vector embeddings, psychographic preference clustering, and verified student/professional identity verification.",
    keyMetric: { value: "1st Place", label: "Govt AI Hackathon Winner" },
    features: [
      "High-Dimensional Lifestyle Embedding Matching",
      "Verified Student & Professional Profiles",
      "Conflict Prediction & Habit Alignment Index",
      "Interactive Natural Language Preference Quiz"
    ],
    techStack: ["React", "TypeScript", "Python", "FastAPI", "Vector Search", "PostgreSQL"],
    deepDive: {
      problem: "Finding compatible roommates is riddled with mismatched habits, unverified profiles, safety concerns, and high lease abandonment rates.",
      solution: "Homemates uses multidimensional preference vectors to calculate true compatibility indices, matching verified roommates based on sleep schedules, cleanliness habits, and social preferences.",
      architecture: [
        "Vector-based recommendation engine clustering roommate profiles",
        "FastAPI backend with asynchronous identity verification pipelines",
        "Responsive web client with conversational onboarding flow",
        "Encrypted messaging channels between verified candidates"
      ],
      impact: [
        "Awarded 1st Prize by Government of Telangana at Mathhack 2.0",
        "Over 92% successful roommate match satisfaction score",
        "Featured in national press (Times of India)"
      ],
      liveUrl: "https://timesofindia.indiatimes.com/city/hyderabad/ai-hackathon-flatmate-finder-to-hair-care-help/articleshow/113139008.cms"
    }
  },
  {
    id: "biteboost",
    name: "BiteBoost",
    tagline: "AI Food & Restaurant Growth Acceleration Platform",
    category: "growth",
    categoryLabel: "Growth Automation",
    badge: "High Growth",
    badgeColor: "bg-orange-100 text-orange-700 border-orange-200",
    fallbackIcon: <Zap className="w-6 h-6" />,
    iconBg: "bg-orange-50 text-orange-600",
    summary: "Intelligent restaurant marketing platform that transforms static food photos into viral marketing campaigns, dynamic menu optimizations, and customer re-engagement flows.",
    keyMetric: { value: "3.4x", label: "Order Velocity Increase" },
    features: [
      "Automated Menu Item Profitability Analysis",
      "Generative Food Photography Enhancement",
      "Hyper-Local Social Media Auto-Posting",
      "SMS / WhatsApp Customer Re-Engagement"
    ],
    techStack: ["React", "Node.js", "Python", "OpenAI Vision", "Tailwind CSS", "MongoDB"],
    deepDive: {
      problem: "Independent eateries lose significant margin on aggregator commissions without direct customer marketing channels.",
      solution: "BiteBoost analyzes sales tickets to identify highest-margin dishes, optimizes menu listings with generative photography, and launches hyper-local re-engagement campaigns.",
      architecture: [
        "POS data ingestion pipeline calculating dish-level contribution margins",
        "Computer vision image enhancement pipeline",
        "Multi-channel campaign scheduler integrating WhatsApp Business API",
        "Interactive merchant analytics dashboard"
      ],
      impact: [
        "Boosted direct online orders by 45% for partner restaurants",
        "Automated creation of 200+ monthly localized social media assets",
        "Reduced reliance on third-party marketplace promotions"
      ]
    }
  },
  {
    id: "thryft",
    name: "Thryft",
    tagline: "Sustainable AI-Powered Circular Economy & Resale Marketplace",
    category: "enterprise",
    categoryLabel: "Enterprise & Retail",
    badge: "Circular Economy",
    badgeColor: "bg-teal-100 text-teal-700 border-teal-200",
    fallbackIcon: <ShoppingBag className="w-6 h-6" />,
    iconBg: "bg-teal-50 text-teal-600",
    summary: "Sustainable circular economy platform utilizing computer vision for instant item authentication, automated condition grading, and dynamic fair-market pricing algorithms.",
    keyMetric: { value: "<5 sec", label: "AI Item Grading Time" },
    features: [
      "Computer Vision Defect & Wear Detection",
      "Algorithmic Dynamic Fair-Market Pricing",
      "Automated One-Click Listing Creation",
      "Carbon Offset & Environmental Impact Tracker"
    ],
    techStack: ["React", "TypeScript", "Python PyTorch", "Tailwind CSS", "FastAPI", "PostgreSQL"],
    deepDive: {
      problem: "Second-hand resale marketplaces suffer from high friction in manual cataloging, subjective condition grading, and pricing uncertainty.",
      solution: "Thryft lets sellers snap a photo of any item to instantly detect brand, model, condition grade, and optimal resale price using deep learning vision models.",
      architecture: [
        "PyTorch visual feature extractor classifying garment types and wear",
        "Real-time pricing engine querying historical marketplace transactions",
        "Streamlined React seller flow with one-click cataloging",
        "Real-time carbon footprint savings calculation per trade"
      ],
      impact: [
        "Reduced average listing creation time from 7 minutes to 15 seconds",
        "Achieved 96% price accuracy compared to final transaction values",
        "Promoted circular fashion consumption across university campuses"
      ]
    }
  }
];

const categories = [
  { id: 'all', label: 'All Showcases' },
  { id: 'frameworks', label: 'Autonomous Frameworks (RALF & TALF)' },
  { id: 'multimodal', label: 'Multimodal & Mobile AI (Aura++ & MagicBox)' },
  { id: 'enterprise', label: 'Enterprise & EdTech (IntelliAssets)' },
  { id: 'growth', label: 'Growth & Automation (ResGro & BiteBoost)' }
];

const Products = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [activeModalProject, setActiveModalProject] = useState<ProjectShowcase | null>(null);

  const filteredProjects = projects.filter(project => {
    const matchesCategory = selectedCategory === 'all' || project.category === selectedCategory;
    const matchesSearch = searchQuery.trim() === '' || 
      project.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      project.summary.toLowerCase().includes(searchQuery.toLowerCase()) ||
      project.techStack.some(t => t.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

  return (
    <section id="products" className="py-24 bg-gradient-to-b from-gray-50 via-white to-purple-50/40 relative overflow-hidden">
      {/* Ambient background glows */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[40rem] h-[40rem] bg-purple-200/20 rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-blue-200/20 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-purple-100 text-purple-700 text-xs font-semibold uppercase tracking-wider mb-3">
            <Cpu className="w-3.5 h-3.5" />
            <span>Engineered by Nhancio</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-gray-900 tracking-tight mb-4">
            Showcase of Major AI Projects & Frameworks
          </h2>
          <p className="text-base sm:text-xl text-gray-600 leading-relaxed">
            Explore our flagship multi-agent architectures, mobile ecosystems, enterprise platforms, and award-winning products built for production scale.
          </p>
        </div>

        {/* Filter Controls & Search */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 mb-12">
          {/* Category Tabs */}
          <div className="flex flex-wrap items-center justify-center md:justify-start gap-2 w-full md:w-auto">
            {categories.map(cat => (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all duration-200 cursor-pointer ${
                  selectedCategory === cat.id
                    ? 'bg-purple-600 text-white shadow-md shadow-purple-500/20 scale-102'
                    : 'bg-white/80 hover:bg-white text-gray-700 border border-gray-200/80 shadow-2xs'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>

          {/* Search bar */}
          <div className="relative w-full md:w-72">
            <Search className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-400" />
            <input
              type="text"
              placeholder="Search projects or stack..."
              value={searchQuery}
              onChange={e => setSearchQuery(e.target.value)}
              className="w-full pl-9 pr-4 py-2 text-xs sm:text-sm bg-white border border-gray-200 rounded-xl shadow-2xs focus:outline-none focus:ring-2 focus:ring-purple-400 focus:border-transparent transition-all"
            />
            {searchQuery && (
              <button 
                onClick={() => setSearchQuery('')}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600 text-xs"
              >
                Clear
              </button>
            )}
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, idx) => (
            <motion.div
              key={project.id}
              layout
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.35, delay: idx * 0.05 }}
              className="bg-white/90 backdrop-blur-md rounded-3xl p-7 border border-white/60 shadow-lg hover:shadow-2xl transition-all duration-300 flex flex-col justify-between group hover:-translate-y-1 relative"
              style={{
                boxShadow: '0 10px 30px -5px rgba(0,0,0,0.05), inset 0 2px 4px rgba(255,255,255,0.9)',
              }}
            >
              <div>
                {/* Card Top: Logo / Icon & Badge */}
                <div className="flex items-start justify-between gap-3 mb-5">
                  <div className="flex items-center gap-3">
                    {project.logoSrc ? (
                      <img
                        src={project.logoSrc}
                        alt={`${project.name} logo`}
                        width="48"
                        height="48"
                        loading="lazy"
                        decoding="async"
                        className="w-12 h-12 object-contain rounded-2xl bg-gray-50 border border-gray-100 p-1 shadow-2xs"
                        onError={(e) => {
                          (e.target as HTMLElement).style.display = 'none';
                        }}
                      />
                    ) : (
                      <div className={`w-12 h-12 rounded-2xl ${project.iconBg} flex items-center justify-center shadow-xs`}>
                        {project.fallbackIcon}
                      </div>
                    )}
                    <div>
                      <span className="text-[11px] font-bold text-purple-600 uppercase tracking-wider block">
                        {project.categoryLabel}
                      </span>
                      <h3 className="text-lg sm:text-xl font-bold text-gray-900 group-hover:text-purple-600 transition-colors">
                        {project.name}
                      </h3>
                    </div>
                  </div>
                </div>

                {/* Badge & Tagline */}
                <div className="mb-3">
                  <span className={`inline-block px-2.5 py-0.5 rounded-full text-[11px] font-semibold border ${project.badgeColor} mb-2`}>
                    {project.badge}
                  </span>
                  <p className="text-xs font-semibold text-gray-700">
                    {project.tagline}
                  </p>
                </div>

                {/* Summary */}
                <p className="text-xs sm:text-sm text-gray-600 leading-relaxed mb-5 line-clamp-3">
                  {project.summary}
                </p>

                {/* Key Metric Strip */}
                <div className="bg-gradient-to-r from-purple-50 to-blue-50/50 rounded-2xl p-3 mb-5 border border-purple-100/50 flex items-center justify-between">
                  <div>
                    <span className="text-xs text-gray-500 font-medium block">Key Impact</span>
                    <span className="text-xs text-gray-700 font-bold">{project.keyMetric.label}</span>
                  </div>
                  <span className="text-xl font-extrabold text-purple-700">
                    {project.keyMetric.value}
                  </span>
                </div>

                {/* Feature Bullets */}
                <div className="space-y-2 mb-6">
                  {project.features.slice(0, 3).map((feat, fIdx) => (
                    <div key={fIdx} className="flex items-center gap-2 text-xs text-gray-700">
                      <CheckCircle2 className="w-3.5 h-3.5 text-purple-600 shrink-0" />
                      <span className="truncate">{feat}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Bottom: Tech Stack Pills & Actions */}
              <div>
                <div className="flex flex-wrap gap-1.5 pt-4 border-t border-gray-100 mb-4">
                  {project.techStack.slice(0, 4).map((tech, tIdx) => (
                    <span
                      key={tIdx}
                      className="px-2 py-0.5 rounded-md bg-gray-100 text-gray-600 text-[10px] font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                  {project.techStack.length > 4 && (
                    <span className="px-2 py-0.5 rounded-md bg-gray-100 text-gray-500 text-[10px] font-medium">
                      +{project.techStack.length - 4}
                    </span>
                  )}
                </div>

                <div className="flex items-center gap-2">
                  <button
                    onClick={() => setActiveModalProject(project)}
                    className="flex-1 inline-flex items-center justify-center gap-1.5 py-2.5 px-4 rounded-xl bg-purple-600 hover:bg-purple-700 text-white text-xs font-bold transition-all shadow-sm shadow-purple-500/20 cursor-pointer"
                  >
                    <span>View Architecture</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>

                  {project.deepDive.liveUrl && (
                    <a
                      href={project.deepDive.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2.5 rounded-xl border border-gray-200 hover:bg-gray-50 text-gray-600 transition-colors"
                      title="Open Live Site"
                    >
                      <ExternalLink className="w-4 h-4" />
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {filteredProjects.length === 0 && (
          <div className="text-center py-16 bg-white/60 rounded-3xl border border-dashed border-gray-300">
            <Bot className="w-12 h-12 text-gray-400 mx-auto mb-3" />
            <h3 className="text-lg font-bold text-gray-800">No projects match your filter</h3>
            <p className="text-sm text-gray-500 mt-1">Try resetting the category filter or search query.</p>
            <button
              onClick={() => { setSelectedCategory('all'); setSearchQuery(''); }}
              className="mt-4 px-4 py-2 rounded-xl bg-purple-600 text-white text-xs font-semibold"
            >
              Reset Filters
            </button>
          </div>
        )}
      </div>

      {/* Interactive Deep-Dive Architecture Modal */}
      <AnimatePresence>
        {activeModalProject && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setActiveModalProject(null)}
              className="fixed inset-0 bg-black/60 backdrop-blur-sm"
            />

            {/* Modal Box */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ type: "spring", bounce: 0.2, duration: 0.4 }}
              className="relative w-full max-w-3xl bg-white rounded-3xl shadow-2xl border border-gray-100 p-6 sm:p-8 max-h-[90vh] overflow-y-auto z-10"
            >
              {/* Close Button */}
              <button
                onClick={() => setActiveModalProject(null)}
                className="absolute top-6 right-6 p-2 rounded-full bg-gray-100 hover:bg-gray-200 text-gray-600 transition-colors cursor-pointer"
                aria-label="Close modal"
              >
                <X className="w-5 h-5" />
              </button>

              {/* Modal Header */}
              <div className="flex items-start gap-4 mb-6 pr-10">
                {activeModalProject.logoSrc ? (
                  <img
                    src={activeModalProject.logoSrc}
                    alt={activeModalProject.name}
                    width="56"
                    height="56"
                    loading="lazy"
                    decoding="async"
                    className="w-14 h-14 object-contain rounded-2xl bg-gray-50 border border-gray-100 p-1 shrink-0"
                  />
                ) : (
                  <div className={`w-14 h-14 rounded-2xl ${activeModalProject.iconBg} flex items-center justify-center shrink-0`}>
                    {activeModalProject.fallbackIcon}
                  </div>
                )}
                <div>
                  <div className="flex items-center gap-2 flex-wrap mb-1">
                    <h3 className="text-2xl font-extrabold text-gray-900">
                      {activeModalProject.name}
                    </h3>
                    <span className={`px-2.5 py-0.5 rounded-full text-xs font-semibold border ${activeModalProject.badgeColor}`}>
                      {activeModalProject.badge}
                    </span>
                  </div>
                  <p className="text-sm font-medium text-purple-600">
                    {activeModalProject.tagline}
                  </p>
                </div>
              </div>

              {/* Metric strip in modal */}
              <div className="bg-gradient-to-r from-purple-500 to-indigo-600 text-white rounded-2xl p-4 mb-6 flex items-center justify-between shadow-md">
                <div>
                  <span className="text-xs uppercase tracking-wider text-purple-100 font-semibold block">Primary Performance Metric</span>
                  <span className="text-sm font-medium">{activeModalProject.keyMetric.label}</span>
                </div>
                <div className="text-2xl sm:text-3xl font-extrabold">
                  {activeModalProject.keyMetric.value}
                </div>
              </div>

              {/* Problem & Solution Grid */}
              <div className="grid sm:grid-cols-2 gap-4 mb-6">
                <div className="bg-rose-50/60 border border-rose-100 rounded-2xl p-4">
                  <h4 className="text-xs font-bold uppercase tracking-wider text-rose-700 mb-2 flex items-center gap-1.5">
                    <Activity className="w-3.5 h-3.5" />
                    <span>The Engineering Challenge</span>
                  </h4>
                  <p className="text-xs sm:text-sm text-gray-700 leading-relaxed">
                    {activeModalProject.deepDive.problem}
                  </p>
                </div>

                <div className="bg-emerald-50/60 border border-emerald-100 rounded-2xl p-4">
                  <h4 className="text-xs font-bold uppercase tracking-wider text-emerald-700 mb-2 flex items-center gap-1.5">
                    <ShieldCheck className="w-3.5 h-3.5" />
                    <span>Nhancio Architecture Solution</span>
                  </h4>
                  <p className="text-xs sm:text-sm text-gray-700 leading-relaxed">
                    {activeModalProject.deepDive.solution}
                  </p>
                </div>
              </div>

              {/* System Architecture Pipeline */}
              <div className="mb-6">
                <h4 className="text-xs font-bold uppercase tracking-wider text-gray-500 mb-3 flex items-center gap-1.5">
                  <Layers className="w-3.5 h-3.5 text-purple-600" />
                  <span>System Architecture & Pipeline</span>
                </h4>
                <div className="space-y-2.5">
                  {activeModalProject.deepDive.architecture.map((step, sIdx) => (
                    <div key={sIdx} className="flex items-start gap-3 p-3 bg-gray-50 rounded-xl border border-gray-100">
                      <span className="w-5 h-5 rounded-full bg-purple-100 text-purple-700 text-xs font-bold flex items-center justify-center shrink-0 mt-0.5">
                        {sIdx + 1}
                      </span>
                      <span className="text-xs sm:text-sm text-gray-700 leading-relaxed">{step}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Verified Production Impact */}
              <div className="mb-6">
                <h4 className="text-xs font-bold uppercase tracking-wider text-gray-500 mb-3 flex items-center gap-1.5">
                  <TrendingUp className="w-3.5 h-3.5 text-emerald-600" />
                  <span>Verified Production Impact</span>
                </h4>
                <div className="grid sm:grid-cols-3 gap-2.5">
                  {activeModalProject.deepDive.impact.map((imp, iIdx) => (
                    <div key={iIdx} className="p-3 bg-purple-50/50 rounded-xl border border-purple-100/60 text-xs text-gray-800 flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-purple-600 shrink-0 mt-0.5" />
                      <span>{imp}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Full Tech Stack */}
              <div className="mb-6">
                <h4 className="text-xs font-bold uppercase tracking-wider text-gray-500 mb-2.5 flex items-center gap-1.5">
                  <Code2 className="w-3.5 h-3.5 text-gray-600" />
                  <span>Technology Stack & Integrations</span>
                </h4>
                <div className="flex flex-wrap gap-2">
                  {activeModalProject.techStack.map((tech, tIdx) => (
                    <span
                      key={tIdx}
                      className="px-3 py-1 rounded-xl bg-gray-100 text-gray-800 text-xs font-medium border border-gray-200"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Modal Actions */}
              <div className="flex items-center justify-end gap-3 pt-4 border-t border-gray-100">
                <button
                  onClick={() => setActiveModalProject(null)}
                  className="px-5 py-2.5 rounded-xl border border-gray-200 text-gray-700 text-xs font-semibold hover:bg-gray-50 transition-colors cursor-pointer"
                >
                  Close
                </button>
                {activeModalProject.deepDive.liveUrl && (
                  <a
                    href={activeModalProject.deepDive.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-purple-600 hover:bg-purple-700 text-white text-xs font-bold transition-colors shadow-md shadow-purple-500/20"
                  >
                    <span>Visit Live Platform</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                )}
                <a
                  href="#contact"
                  onClick={() => setActiveModalProject(null)}
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-gray-900 hover:bg-black text-white text-xs font-bold transition-colors"
                >
                  <span>Build With This Stack</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Products;
