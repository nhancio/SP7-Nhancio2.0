import React, { useState, useRef, useEffect, useCallback } from 'react';
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
  Search,
  ChevronLeft,
  ChevronRight,
  MoveRight,
  Play,
  Pause
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
    name: "RalphAI",
    tagline: "Multi-Agent Restaurant Ad Automation",
    category: "frameworks",
    categoryLabel: "Autonomous Agents",
    badge: "Enterprise Production",
    badgeColor: "bg-emerald-100 text-emerald-700 border-emerald-200",
    logoSrc: "/logos/todc.png",
    fallbackIcon: <TrendingUp className="w-6 h-6" />,
    iconBg: "bg-emerald-50 text-emerald-600",
    summary: "Autonomous multi-agent platform automating DoorDash and UberEats ad spend for 300+ restaurant locations.",
    keyMetric: { value: "300+", label: "Locations Automated" },
    features: [
      "Delivery Ad Sync",
      "Browser Automation",
      "Revenue Attribution",
      "Automated Audits"
    ],
    techStack: ["Python", "FastAPI", "Playwright", "Chrome DevTools", "Streamlit", "PostgreSQL", "Docker"],
    deepDive: {
      problem: "Multi-unit restaurants lose hours manually adjusting delivery platform ads.",
      solution: "Autonomous browser agents ingest data, calculate ROI, and optimize ad spend.",
      architecture: [
        "FastAPI orchestration with async worker queues",
        "Headless Playwright agents for portal ingestion",
        "Deterministic metric pipeline computing store ROI",
        "Multi-tenant reporting engine and telemetry"
      ],
      impact: [
        "Saved 15+ hours/week on manual reports",
        "100% automated delivery ad management",
        "Real-time ROI across 300+ locations"
      ],
      liveUrl: "https://todc.in"
    }
  },
  {
    id: "aura-plus",
    name: "Aura+",
    tagline: "Cross-Platform Ambient Intelligence App",
    category: "multimodal",
    categoryLabel: "Mobile & Consumer AI",
    badge: "Expo 56 & Native SDK",
    badgeColor: "bg-purple-100 text-purple-700 border-purple-200",
    logoSrc: "/logos/auraplus-logo.png",
    fallbackIcon: <Smartphone className="w-6 h-6" />,
    iconBg: "bg-purple-50 text-purple-600",
    summary: "Cross-platform mobile app built on Expo 56 featuring native audio synthesis and offline sync.",
    keyMetric: { value: "60 FPS", label: "Fluid Native UX" },
    features: [
      "Offline SQLite Sync",
      "Native Audio & Haptics",
      "Vision Integration",
      "Product Observability"
    ],
    techStack: ["React Native 0.85", "Expo 56", "TypeScript", "Zustand", "Reanimated 4", "Firebase", "PostHog"],
    deepDive: {
      problem: "Lifestyle mobile apps are often cloud-dependent, slow, and laggy.",
      solution: "Offline-first React Native architecture with Reanimated 4 and native modules.",
      architecture: [
        "Expo Router file-based navigation",
        "Modular native audio and camera services",
        "Offline SQLite with background cloud sync",
        "Automated EAS CI/CD for iOS and Android"
      ],
      impact: [
        "Consistent 60 FPS on iOS and Android",
        "Zero-latency offline interactions",
        "Production-grade crash-free session rates"
      ],
      liveUrl: "https://auraplus.app"
    }
  },
  {
    id: "magicbox",
    name: "MagicBox",
    tagline: "AI UGC Factory & Multimodal Ad Engine",
    category: "multimodal",
    categoryLabel: "AI UGC Factory",
    badge: "100+ Signups • AI UGC Factory",
    badgeColor: "bg-pink-100 text-pink-700 border-pink-200",
    logoSrc: "/logos/magicbox-logo.png",
    fallbackIcon: <Sparkles className="w-6 h-6" />,
    iconBg: "bg-pink-50 text-pink-600",
    summary: "AI UGC factory creating high-converting video scripts, hooks, and branded ads for 100+ creators.",
    keyMetric: { value: "100+", label: "Creators & Brands" },
    features: [
      "AI Video Generation",
      "Automated UGC Scripts",
      "Brand Voice Presets",
      "Multi-Platform Export"
    ],
    techStack: ["React", "Vite", "TypeScript", "Node.js Functions", "Firebase", "Tailwind CSS", "GCP"],
    deepDive: {
      problem: "Creating high-converting UGC video ads manually is slow and expensive.",
      solution: "Multimodal engine that generates viral scripts, hooks, and video assets in seconds.",
      architecture: [
        "Turborepo monorepo connecting Studio and Engine",
        "Multimodal LLM, voice, and video pipelines",
        "Serverless inference functions streaming assets",
        "Cloud asset library with instant export"
      ],
      impact: [
        "100+ creators and brands onboarded",
        "10x faster ad creative turnaround",
        "60%+ reduction in production costs"
      ],
      liveUrl: "https://magicbox.nhancio.com"
    }
  },
  {
    id: "intelliassets",
    name: "IntelliAssets.AI",
    tagline: "Adaptive AI Tutoring Platform",
    category: "enterprise",
    categoryLabel: "EdTech & Enterprise",
    badge: "ACARA Aligned (Years 1-12)",
    badgeColor: "bg-indigo-100 text-indigo-700 border-indigo-200",
    fallbackIcon: <BookOpen className="w-6 h-6" />,
    iconBg: "bg-indigo-50 text-indigo-600",
    summary: "Adaptive AI tutoring and diagnostic platform aligned with Australian Curriculum standards for Years 1–12.",
    keyMetric: { value: "Years 1–12", label: "Curriculum Aligned" },
    features: [
      "ACARA-Aligned Questions",
      "Multi-Role Portals",
      "Skill Diagnostic Heatmaps",
      "Subscription Engine"
    ],
    techStack: ["Next.js", "React", "TypeScript", "Django REST Framework", "PostgreSQL", "Dodo Payments"],
    deepDive: {
      problem: "Traditional tutoring lacks real-time curriculum alignment and diagnostic insights.",
      solution: "AI engine that maps student work to curriculum standards and generates adaptive exercises.",
      architecture: [
        "Next.js portals for students and teachers",
        "Django REST backend for records and tests",
        "PostgreSQL curriculum topic graphs",
        "Webhook-driven Dodo Payments billing"
      ],
      impact: [
        "Adopted across Australian school districts",
        "42% improvement in concept retention",
        "Saved teachers 5+ hours per assessment"
      ],
      liveUrl: "https://intelliassets.ai"
    }
  },
  {
    id: "resgro",
    name: "ResGro-AI",
    tagline: "Autonomous Restaurant Growth Engine",
    category: "growth",
    categoryLabel: "Growth Automation",
    badge: "Live at resgro.ai",
    badgeColor: "bg-amber-100 text-amber-700 border-amber-200",
    logoSrc: "/logos/resgro.png",
    fallbackIcon: <Utensils className="w-6 h-6" />,
    iconBg: "bg-amber-50 text-amber-600",
    summary: "AI marketing engine automating restaurant campaign launches, attribution, and browser execution.",
    keyMetric: { value: "100%", label: "Hands-Free Campaigns" },
    features: [
      "Automated Ad Launches",
      "Revenue Attribution",
      "Browser Bot Execution",
      "Stripe Subscription Sync"
    ],
    techStack: ["Python FastAPI", "Playwright", "React", "Vite", "Django", "Cloud Run", "Stripe"],
    deepDive: {
      problem: "Restaurant owners waste ad budgets without proper campaign management or tracking.",
      solution: "Automates the full ad lifecycle using local analytics and headless browser bots.",
      architecture: [
        "FastAPI agents with Playwright automation",
        "Django backend managing Stripe billing",
        "Containerized microservices on Cloud Run",
        "React customer analytics dashboard"
      ],
      impact: [
        "2.8x average ROAS for restaurants",
        "100% automated weekly ad launches",
        "Deployed across nationwide groups"
      ],
      liveUrl: "https://resgro.ai"
    }
  },
  {
    id: "homemates",
    name: "Homemates AI",
    tagline: "AI Flatmate Compatibility Engine",
    category: "multimodal",
    categoryLabel: "Consumer AI",
    badge: "Won Mathhack 2.0 • 100+ Community",
    badgeColor: "bg-yellow-100 text-yellow-800 border-yellow-300",
    logoSrc: "/logos/homemates-logo.jpg",
    fallbackIcon: <Bot className="w-6 h-6" />,
    iconBg: "bg-yellow-50 text-yellow-600",
    summary: "AI flatmate matching platform using lifestyle vector embeddings and habit scoring (Won Mathhack 2.0).",
    keyMetric: { value: "100+", label: "Active Community" },
    features: [
      "Lifestyle Vector Matching",
      "Verified Profiles",
      "Habit Alignment Scoring",
      "Conversational Intake"
    ],
    techStack: ["React", "TypeScript", "Python", "FastAPI", "Vector Search", "PostgreSQL"],
    deepDive: {
      problem: "Finding roommates often results in mismatched habits and lease disputes.",
      solution: "Vector embeddings that score lifestyle compatibility across sleep, cleanliness, and work habits.",
      architecture: [
        "Vector recommendation engine for user clustering",
        "FastAPI backend with identity verification",
        "Conversational onboarding web app",
        "Encrypted in-app messaging channels"
      ],
      impact: [
        "1st Place at Telangana Mathhack 2.0",
        "100+ verified active members",
        "92% match satisfaction score; TOI featured"
      ],
      liveUrl: "https://timesofindia.indiatimes.com/city/hyderabad/ai-hackathon-flatmate-finder-to-hair-care-help/articleshow/113139008.cms"
    }
  },
  {
    id: "biteboost",
    name: "BiteBoost",
    tagline: "AI Food Growth & Marketing Platform",
    category: "growth",
    categoryLabel: "Growth Automation",
    badge: "High Growth",
    badgeColor: "bg-orange-100 text-orange-700 border-orange-200",
    fallbackIcon: <Zap className="w-6 h-6" />,
    iconBg: "bg-orange-50 text-orange-600",
    summary: "Growth platform turning food imagery into viral campaigns, menu optimizations, and WhatsApp flows.",
    keyMetric: { value: "3.4x", label: "Order Velocity Growth" },
    features: [
      "Menu Profit Analysis",
      "Food Photo Enhancement",
      "Social Media Auto-Post",
      "WhatsApp Re-Engagement"
    ],
    techStack: ["React", "Node.js", "Python", "OpenAI Vision", "Tailwind CSS", "MongoDB"],
    deepDive: {
      problem: "Independent restaurants lose margin to delivery apps without direct marketing channels.",
      solution: "Identifies high-margin dishes, enhances photos, and runs automated messaging campaigns.",
      architecture: [
        "POS pipeline calculating dish margins",
        "Computer vision food enhancement pipeline",
        "WhatsApp Business API campaign scheduler",
        "Interactive merchant analytics dashboard"
      ],
      impact: [
        "45% increase in direct online orders",
        "200+ monthly social assets generated",
        "Lowered third-party ad dependency"
      ],
      liveUrl: "https://biteboost.nhancio.com"
    }
  },
  {
    id: "thryft",
    name: "Thryft",
    tagline: "AI Circular Economy Marketplace",
    category: "enterprise",
    categoryLabel: "Enterprise & Retail",
    badge: "Circular Economy",
    badgeColor: "bg-teal-100 text-teal-700 border-teal-200",
    fallbackIcon: <ShoppingBag className="w-6 h-6" />,
    iconBg: "bg-teal-50 text-teal-600",
    summary: "Resale marketplace using computer vision for instant item authentication, grading, and dynamic pricing.",
    keyMetric: { value: "<5s", label: "AI Grading Speed" },
    features: [
      "Vision Wear Detection",
      "Dynamic Fair Pricing",
      "One-Click Cataloging",
      "Carbon Savings Tracker"
    ],
    techStack: ["React", "TypeScript", "Python PyTorch", "Tailwind CSS", "FastAPI", "PostgreSQL"],
    deepDive: {
      problem: "Second-hand resale suffers from slow cataloging, subjective grading, and unfair pricing.",
      solution: "Computer vision models that identify item brand, wear condition, and fair resale price.",
      architecture: [
        "PyTorch visual model classifying wear",
        "Real-time pricing engine from market data",
        "One-click seller cataloging flow",
        "Real-time carbon offset tracker"
      ],
      impact: [
        "Listing time cut from 7 mins to 15 secs",
        "96% pricing accuracy vs sales",
        "Promoted sustainable fashion across campuses"
      ],
      liveUrl: "https://thryft.nhancio.com"
    }
  }
];

const categories = [
  { id: 'all', label: 'All Showcases' },
  { id: 'frameworks', label: 'Autonomous Frameworks (RalphAI)' },
  { id: 'multimodal', label: 'Multimodal & Mobile AI (Aura+, MagicBox, Homemates)' },
  { id: 'enterprise', label: 'Enterprise & EdTech (IntelliAssets & Thryft)' },
  { id: 'growth', label: 'Growth & Automation (ResGro & BiteBoost)' }
];

const Products = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [activeModalProject, setActiveModalProject] = useState<ProjectShowcase | null>(null);

  // Carousel & Scroll state
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);
  const [scrollProgress, setScrollProgress] = useState(0);

  // Auto-scroll & User Controls state
  const [isAutoPlayActive, setIsAutoPlayActive] = useState(true);
  const [isHovered, setIsHovered] = useState(false);
  const [isTouching, setIsTouching] = useState(false);
  const [isSearchFocused, setIsSearchFocused] = useState(false);
  const [isTabVisible, setIsTabVisible] = useState(!document.hidden);
  const [resetTimerKey, setResetTimerKey] = useState(0);

  // Mouse Drag state
  const [isMouseDown, setIsMouseDown] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeftPos, setScrollLeftPos] = useState(0);
  const [isDragging, setIsDragging] = useState(false);

  const resetAutoScrollTimer = useCallback(() => {
    setResetTimerKey(k => k + 1);
  }, []);

  const filteredProjects = projects.filter(project => {
    const matchesCategory = selectedCategory === 'all' || project.category === selectedCategory;
    const matchesSearch = searchQuery.trim() === '' || 
      project.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      project.summary.toLowerCase().includes(searchQuery.toLowerCase()) ||
      project.techStack.some(t => t.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

  const updateScrollState = useCallback(() => {
    if (!scrollContainerRef.current) return;
    const { scrollLeft, scrollWidth, clientWidth } = scrollContainerRef.current;
    setCanScrollLeft(scrollLeft > 10);
    setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 10);
    const maxScroll = scrollWidth - clientWidth;
    setScrollProgress(maxScroll > 0 ? (scrollLeft / maxScroll) * 100 : 0);
  }, []);

  const advanceCarousel = useCallback(() => {
    if (!scrollContainerRef.current) return;
    const container = scrollContainerRef.current;
    const { scrollLeft, scrollWidth, clientWidth } = container;
    const maxScroll = scrollWidth - clientWidth;
    
    if (maxScroll <= 0) return;

    // When reaching the end (or near end), loop smoothly back to start
    if (scrollLeft >= maxScroll - 25) {
      container.scrollTo({ left: 0, behavior: 'smooth' });
    } else {
      const scrollAmount = Math.max(340, container.clientWidth * 0.75);
      container.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  }, []);

  // Listen for browser tab visibility to avoid hidden timer stacking
  useEffect(() => {
    const handleVisibilityChange = () => {
      setIsTabVisible(!document.hidden);
    };
    document.addEventListener('visibilitychange', handleVisibilityChange);
    return () => {
      document.removeEventListener('visibilitychange', handleVisibilityChange);
    };
  }, []);

  // Auto-scroll loop with intelligent pause triggers
  useEffect(() => {
    const shouldAutoScroll =
      isAutoPlayActive &&
      !isHovered &&
      !isMouseDown &&
      !isDragging &&
      !isTouching &&
      !activeModalProject &&
      !isSearchFocused &&
      isTabVisible &&
      filteredProjects.length > 1;

    if (!shouldAutoScroll) return;

    const interval = setInterval(() => {
      advanceCarousel();
    }, 4000);

    return () => clearInterval(interval);
  }, [
    isAutoPlayActive,
    isHovered,
    isMouseDown,
    isDragging,
    isTouching,
    activeModalProject,
    isSearchFocused,
    isTabVisible,
    filteredProjects.length,
    advanceCarousel,
    resetTimerKey
  ]);

  useEffect(() => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollTo({ left: 0, behavior: 'smooth' });
    }
    const timer = setTimeout(updateScrollState, 150);
    resetAutoScrollTimer();
    return () => clearTimeout(timer);
  }, [selectedCategory, searchQuery, updateScrollState, resetAutoScrollTimer]);

  useEffect(() => {
    const el = scrollContainerRef.current;
    if (!el) return;
    updateScrollState();
    el.addEventListener('scroll', updateScrollState, { passive: true });
    window.addEventListener('resize', updateScrollState);
    return () => {
      el.removeEventListener('scroll', updateScrollState);
      window.removeEventListener('resize', updateScrollState);
    };
  }, [updateScrollState, filteredProjects.length]);

  const scroll = (direction: 'left' | 'right') => {
    if (!scrollContainerRef.current) return;
    const container = scrollContainerRef.current;
    const scrollAmount = Math.max(340, container.clientWidth * 0.75);
    container.scrollBy({
      left: direction === 'left' ? -scrollAmount : scrollAmount,
      behavior: 'smooth'
    });
    resetAutoScrollTimer();
  };

  const handleMouseDown = (e: React.MouseEvent) => {
    if (!scrollContainerRef.current) return;
    setIsMouseDown(true);
    setIsDragging(false);
    setStartX(e.pageX - scrollContainerRef.current.offsetLeft);
    setScrollLeftPos(scrollContainerRef.current.scrollLeft);
  };

  const handleMouseUpOrLeave = () => {
    setIsMouseDown(false);
    setTimeout(() => setIsDragging(false), 50);
    resetAutoScrollTimer();
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isMouseDown || !scrollContainerRef.current) return;
    e.preventDefault();
    const x = e.pageX - scrollContainerRef.current.offsetLeft;
    const walk = (x - startX) * 1.3;
    if (Math.abs(walk) > 5) {
      setIsDragging(true);
    }
    scrollContainerRef.current.scrollLeft = scrollLeftPos - walk;
  };

  return (
    <section id="products" className="py-24 bg-gradient-to-b from-gray-50 via-white to-purple-50/40 relative overflow-hidden">
      {/* Ambient background glows */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[40rem] h-[40rem] bg-purple-200/20 rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-blue-200/20 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-purple-100 text-purple-700 text-xs font-semibold uppercase tracking-wider mb-3">
            <Cpu className="w-3.5 h-3.5" />
            <span>Engineered by Nhancio</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-gray-900 tracking-tight mb-4">
            Showcase of Major AI Projects & Frameworks
          </h2>
          <p className="text-base sm:text-xl text-gray-600 leading-relaxed max-w-2xl mx-auto">
            Explore our flagship multi-agent architectures, mobile ecosystems, and award-winning AI products.
          </p>
        </div>

        {/* Filter Controls & Search */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 mb-8">
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
              onFocus={() => setIsSearchFocused(true)}
              onBlur={() => setIsSearchFocused(false)}
              onChange={e => setSearchQuery(e.target.value)}
              className="w-full pl-9 pr-4 py-2 text-xs sm:text-sm bg-white border border-gray-200 rounded-xl shadow-2xs focus:outline-none focus:ring-2 focus:ring-purple-400 focus:border-transparent transition-all"
            />
            {searchQuery && (
              <button 
                onClick={() => setSearchQuery('')}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600 text-xs cursor-pointer"
              >
                Clear
              </button>
            )}
          </div>
        </div>

        {/* Carousel Header & Controls Bar */}
        <div className="flex items-center justify-between mb-4 px-1">
          <div className="flex items-center gap-2 flex-wrap">
            <span className="text-xs sm:text-sm font-semibold text-gray-700">
              Showing <span className="text-purple-600 font-bold">{filteredProjects.length}</span> {filteredProjects.length === 1 ? 'Showcase' : 'Showcases'}
            </span>
            <span className="hidden sm:inline-block text-xs text-gray-400 font-medium">
              • Swipe or drag horizontally to explore
            </span>
            {isAutoPlayActive && !isHovered && !isMouseDown && !isTouching && !activeModalProject && !isSearchFocused && filteredProjects.length > 1 && (
              <span className="hidden md:inline-flex items-center gap-1.5 text-[11px] text-purple-700 font-medium bg-purple-50/90 px-2.5 py-0.5 rounded-full border border-purple-200/60 shadow-2xs">
                <span className="w-1.5 h-1.5 rounded-full bg-purple-600 animate-pulse" />
                Auto-scroll active
              </span>
            )}
          </div>

          {/* Carousel Left / Right and Play / Pause Controls */}
          <div className="flex items-center gap-2">
            <button
              onClick={() => {
                setIsAutoPlayActive(prev => !prev);
                resetAutoScrollTimer();
              }}
              aria-label={isAutoPlayActive ? "Pause auto-scroll" : "Start auto-scroll"}
              title={isAutoPlayActive ? "Pause automatic scrolling" : "Resume automatic scrolling"}
              className={`w-9 h-9 sm:w-10 sm:h-10 rounded-full flex items-center justify-center border transition-all cursor-pointer ${
                isAutoPlayActive
                  ? 'bg-purple-50 text-purple-600 border-purple-200 hover:bg-purple-100 hover:border-purple-300 shadow-2xs'
                  : 'bg-white text-gray-500 border-gray-200 hover:bg-purple-600 hover:text-white hover:border-purple-600 shadow-2xs'
              }`}
            >
              {isAutoPlayActive ? (
                <Pause className="w-4 h-4" />
              ) : (
                <Play className="w-4 h-4 ml-0.5" />
              )}
            </button>
            <button
              onClick={() => scroll('left')}
              disabled={!canScrollLeft}
              aria-label="Scroll left"
              className={`w-9 h-9 sm:w-10 sm:h-10 rounded-full flex items-center justify-center border transition-all cursor-pointer ${
                canScrollLeft
                  ? 'bg-white text-gray-700 border-gray-200 hover:bg-purple-600 hover:text-white hover:border-purple-600 shadow-sm'
                  : 'bg-gray-100 text-gray-300 border-gray-100 cursor-not-allowed opacity-50'
              }`}
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={() => scroll('right')}
              disabled={!canScrollRight}
              aria-label="Scroll right"
              className={`w-9 h-9 sm:w-10 sm:h-10 rounded-full flex items-center justify-center border transition-all cursor-pointer ${
                canScrollRight
                  ? 'bg-white text-gray-700 border-gray-200 hover:bg-purple-600 hover:text-white hover:border-purple-600 shadow-sm'
                  : 'bg-gray-100 text-gray-300 border-gray-100 cursor-not-allowed opacity-50'
              }`}
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Horizontal Carousel Track */}
        {filteredProjects.length > 0 ? (
          <div 
            className="relative"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => {
              setIsHovered(false);
              handleMouseUpOrLeave();
            }}
          >
            <div
              ref={scrollContainerRef}
              onMouseDown={handleMouseDown}
              onMouseUp={handleMouseUpOrLeave}
              onMouseMove={handleMouseMove}
              onTouchStart={() => setIsTouching(true)}
              onTouchEnd={() => {
                setIsTouching(false);
                resetAutoScrollTimer();
              }}
              onTouchCancel={() => {
                setIsTouching(false);
                resetAutoScrollTimer();
              }}
              className={`flex gap-6 overflow-x-auto snap-x snap-mandatory py-4 px-1 sm:px-2 scroll-smooth select-none ${
                isMouseDown ? 'cursor-grabbing' : 'cursor-grab'
              } [scrollbar-width:thin] [scrollbar-color:rgb(216,180,254)_transparent] [&::-webkit-scrollbar]:h-2 [&::-webkit-scrollbar-track]:bg-gray-100/70 [&::-webkit-scrollbar-track]:rounded-full [&::-webkit-scrollbar-thumb]:bg-purple-200 hover:[&::-webkit-scrollbar-thumb]:bg-purple-300 [&::-webkit-scrollbar-thumb]:rounded-full`}
            >
              {filteredProjects.map((project, idx) => (
                <motion.div
                  key={project.id}
                  layout
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.3, delay: idx * 0.04 }}
                  className="w-[85vw] sm:w-[380px] md:w-[400px] shrink-0 snap-start flex flex-col justify-between bg-white/95 backdrop-blur-md rounded-3xl p-6 sm:p-7 border border-white/80 shadow-lg hover:shadow-2xl transition-all duration-300 relative group hover:-translate-y-1"
                  style={{
                    boxShadow: '0 10px 30px -5px rgba(0,0,0,0.05), inset 0 2px 4px rgba(255,255,255,0.9)',
                  }}
                >
                  <div>
                    {/* Card Top: Logo / Icon & Header */}
                    <div className="flex items-start justify-between gap-3 mb-4">
                      <div className="flex items-center gap-3">
                        {project.logoSrc ? (
                          <img
                            src={project.logoSrc}
                            alt={`${project.name} logo`}
                            width="48"
                            height="48"
                            loading="lazy"
                            decoding="async"
                            className="w-12 h-12 object-contain rounded-2xl bg-gray-50 border border-gray-100 p-1 shadow-2xs shrink-0"
                            onError={(e) => {
                              (e.target as HTMLElement).style.display = 'none';
                            }}
                          />
                        ) : (
                          <div className={`w-12 h-12 rounded-2xl ${project.iconBg} flex items-center justify-center shadow-xs shrink-0`}>
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
                      <p className="text-xs font-semibold text-gray-700 line-clamp-1">
                        {project.tagline}
                      </p>
                    </div>

                    {/* Summary */}
                    <p className="text-xs sm:text-sm text-gray-600 leading-relaxed mb-4 line-clamp-3 min-h-[3.75rem]">
                      {project.summary}
                    </p>

                    {/* Key Metric Strip */}
                    <div className="bg-gradient-to-r from-purple-50 to-blue-50/50 rounded-2xl p-3 mb-4 border border-purple-100/50 flex items-center justify-between">
                      <div>
                        <span className="text-[11px] text-gray-500 font-medium block">Key Impact</span>
                        <span className="text-xs text-gray-800 font-bold">{project.keyMetric.label}</span>
                      </div>
                      <span className="text-xl font-extrabold text-purple-700">
                        {project.keyMetric.value}
                      </span>
                    </div>

                    {/* Feature Bullets */}
                    <div className="space-y-1.5 mb-5">
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
                    <div className="flex flex-wrap gap-1.5 pt-3.5 border-t border-gray-100 mb-4">
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

                    <div className="grid grid-cols-2 gap-2">
                      <button
                        onClick={(e) => {
                          if (isDragging) {
                            e.preventDefault();
                            return;
                          }
                          setActiveModalProject(project);
                        }}
                        className="inline-flex items-center justify-center gap-1.5 py-2.5 px-3 rounded-xl bg-purple-600 hover:bg-purple-700 text-white text-xs font-bold transition-all shadow-sm shadow-purple-500/20 cursor-pointer text-center"
                      >
                        <span>View Architecture</span>
                        <ArrowRight className="w-3.5 h-3.5 shrink-0" />
                      </button>

                      {project.deepDive.liveUrl ? (
                        <a
                          href={project.deepDive.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          onClick={(e) => {
                            if (isDragging) {
                              e.preventDefault();
                            }
                          }}
                          className="inline-flex items-center justify-center gap-1.5 py-2.5 px-3 rounded-xl bg-purple-50 hover:bg-purple-100 text-purple-700 border border-purple-200 hover:border-purple-300 text-xs font-bold transition-all text-center group/live shadow-2xs cursor-pointer"
                          title={`Visit live link for ${project.name}`}
                        >
                          <span>Live Link</span>
                          <ExternalLink className="w-3.5 h-3.5 shrink-0 group-hover/live:translate-x-0.5 group-hover/live:-translate-y-0.5 transition-transform" />
                        </a>
                      ) : (
                        <button
                          onClick={(e) => {
                            if (isDragging) {
                              e.preventDefault();
                              return;
                            }
                            setActiveModalProject(project);
                          }}
                          className="inline-flex items-center justify-center gap-1.5 py-2.5 px-3 rounded-xl bg-gray-50 hover:bg-gray-100 text-gray-700 border border-gray-200 text-xs font-bold transition-all text-center cursor-pointer"
                        >
                          <span>Live Demo</span>
                          <ExternalLink className="w-3.5 h-3.5 shrink-0" />
                        </button>
                      )}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Visual Scroll Track Progress Bar */}
            <div className="flex flex-col items-center justify-center mt-6 gap-2">
              <div className="w-48 sm:w-64 h-1.5 bg-gray-200/80 rounded-full overflow-hidden">
                <div 
                  className="h-full bg-gradient-to-r from-purple-600 to-indigo-600 rounded-full transition-all duration-150"
                  style={{ width: `${Math.max(15, scrollProgress)}%` }}
                />
              </div>
              <div className="flex items-center gap-1.5 text-[11px] text-gray-500 font-medium">
                <span>
                  {isAutoPlayActive 
                    ? (isHovered ? 'Paused on hover • Move cursor away to resume' : 'Auto-advancing through frameworks • Drag or hover to pause')
                    : 'Auto-scroll paused • Click Play to resume or drag track'}
                </span>
                <MoveRight className="w-3.5 h-3.5 text-purple-600 animate-pulse" />
              </div>
            </div>
          </div>
        ) : (
          <div className="text-center py-16 bg-white/60 rounded-3xl border border-dashed border-gray-300">
            <Bot className="w-12 h-12 text-gray-400 mx-auto mb-3" />
            <h3 className="text-lg font-bold text-gray-800">No projects match your filter</h3>
            <p className="text-sm text-gray-500 mt-1">Try resetting the category filter or search query.</p>
            <button
              onClick={() => { setSelectedCategory('all'); setSearchQuery(''); }}
              className="mt-4 px-4 py-2 rounded-xl bg-purple-600 text-white text-xs font-semibold cursor-pointer hover:bg-purple-700 transition-colors"
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
              className="fixed inset-0 bg-black/60 backdrop-blur-sm cursor-pointer"
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
