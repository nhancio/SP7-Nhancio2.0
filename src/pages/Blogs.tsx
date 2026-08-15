import React, { useState } from 'react';
import { Calendar, User, ArrowRight, BookOpen, TrendingUp, Lightbulb, ArrowLeft, CheckCircle2, Clock } from 'lucide-react';
import { Helmet } from 'react-helmet-async';
import SEO from '../components/SEO';

interface BlogPost {
  id: number;
  slug: string;
  title: string;
  excerpt: string;
  content: {
    introduction: string;
    sections: {
      heading: string;
      body: string;
      keyPoints?: string[];
    }[];
    conclusion: string;
  };
  author: string;
  authorRole: string;
  date: string;
  isoDate: string;
  readTime: string;
  category: string;
  image: string;
  tags: string[];
  icon: React.ReactNode;
}

const blogPosts: BlogPost[] = [
  {
    id: 1,
    slug: "future-of-ai-business-automation",
    title: "The Future of AI in Business Automation: From Scripts to Autonomous Agents",
    excerpt: "Exploring how deterministic state machines, closed-loop multi-agent reasoning, and tool orchestration are replacing brittle prompt scripts in enterprise workflows.",
    author: "Rahul Sharma",
    authorRole: "Principal AI Architect",
    date: "March 15, 2024",
    isoDate: "2024-03-15T09:00:00+00:00",
    readTime: "6 min read",
    category: "AI & Technology",
    image: "https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=1200",
    tags: ["AI Agents", "Multi-Agent Systems", "Enterprise Automation", "RalphAI", "NFLA App"],
    icon: <Lightbulb className="w-6 h-6" />,
    content: {
      introduction: "Business automation is undergoing a generational inflection point. For the past decade, robotic process automation (RPA) relied on rigid, rule-based scripts that shattered whenever a UI element shifted or an unexpected input appeared. Today, modern autonomous agent architectures—such as Nhancio's RalphAI and NFLA App—combine large language models (LLMs) with deterministic state machines and verified tool execution to create resilient, closed-loop autonomous workflows.",
      sections: [
        {
          heading: "1. The Paradigm Shift from Single Prompts to Multi-Agent Squads",
          body: "Single-prompt LLM wrappers fail in mission-critical enterprise environments because of hallucination, lack of bounded context, and unbounded execution state. By decomposing complex workflows into specialized agent roles (e.g., Ingestion Agent, Validation Agent, Execution Agent, and Quality Auditing Agent), each subsystem operates within a strictly defined schema and deterministic guardrail.",
          keyPoints: [
            "Bounded context windows with isolated responsibility per sub-agent",
            "Deterministic schema validation using TypeScript and Pydantic interfaces",
            "Self-healing execution loops that retry and diagnose transient failures automatically"
          ]
        },
        {
          heading: "2. Real-World Case Study: Multi-Unit Restaurant Ad Orchestration",
          body: "In production systems like RalphAI, autonomous agents authenticate into delivery platforms, extract performance telemetry, evaluate pre/post promotional metrics, and dynamically reallocate daily budgets. This completely replaces 15+ weekly hours of manual operational overhead per restaurant group while boosting Return on Ad Spend (ROAS).",
          keyPoints: [
            "Headless browser automation powered by Playwright and Chrome DevTools Protocol",
            "Automated revenue attribution and anomaly detection across third-party portals",
            "End-to-end audit logging with complete operational observability"
          ]
        },
        {
          heading: "3. Enterprise Guardrails and Zero-Hallucination Compliance",
          body: "Enterprise adoption demands deterministic reliability. Incorporating human-in-the-loop escalation triggers for high-consequence decisions ensures that autonomous operations remain safe, auditable, and aligned with organizational compliance policies.",
          keyPoints: [
            "Role-based permission gating on write operations",
            "Cryptographic signature verification for executed contracts and state mutations",
            "Comprehensive observability telemetry powered by OpenTelemetry and PostHog"
          ]
        }
      ],
      conclusion: "Autonomous AI agents are not mere chatbots; they are the next-generation operating system for enterprise productivity. Organizations that transition from brittle scripts to verified multi-agent systems will achieve unprecedented operational leverage in 2026 and beyond."
    }
  },
  {
    id: 2,
    slug: "building-scalable-web-applications-modern-frameworks",
    title: "Building Scalable Web Applications with Modern React, Vite & Serverless Edge",
    excerpt: "A deep dive into crafting lightning-fast, production-ready web architectures utilizing Vite, React 18, TypeScript, Tailwind CSS, and edge storage primitives.",
    author: "Priya Gupta",
    authorRole: "Lead Full-Stack Engineer",
    date: "March 10, 2024",
    isoDate: "2024-03-10T09:00:00+00:00",
    readTime: "8 min read",
    category: "Web Development",
    image: "https://images.pexels.com/photos/11035380/pexels-photo-11035380.jpeg?auto=compress&cs=tinysrgb&w=1200",
    tags: ["React", "Vite", "TypeScript", "Tailwind CSS", "Edge Computing"],
    icon: <BookOpen className="w-6 h-6" />,
    content: {
      introduction: "In modern full-stack engineering, performance and developer velocity are intertwined. Modern web applications require sub-second First Contentful Paint (FCP), zero layout shifts, end-to-end type safety, and global low-latency edge caching. Here is how we engineer high-throughput web frontends at Nhancio.",
      sections: [
        {
          heading: "1. Why Vite and Modern Bundling Beat Legacy Toolchains",
          body: "By leveraging native ES modules during local development and Rollup with code splitting for production builds, Vite delivers near-instantaneous Hot Module Replacement (HMR) and ultra-lean production bundles. When paired with strict TypeScript configurations, runtime errors are caught at compile time.",
          keyPoints: [
            "Native ESM hot reload under 50ms regardless of codebase size",
            "Granular chunk splitting separating vendor libraries from business logic",
            "Zero runtime overhead styling via atomic Tailwind CSS utilities"
          ]
        },
        {
          heading: "2. Client-Side State Management and Micro-Interactions",
          body: "High-performance applications require fluid UI responses. Utilizing lightweight state stores like Zustand alongside Framer Motion enables silky 60fps animations without bloating the main thread or causing unnecessary component re-renders.",
          keyPoints: [
            "Zustand selectors preventing cascading DOM re-renders",
            "Hardware-accelerated transforms for complex layout transitions",
            "Accessible keyboard navigation and focus management across all interactive components"
          ]
        },
        {
          heading: "3. Edge Functions and Serverless Object Storage",
          body: "By integrating serverless compute functions and modern distributed object stores (such as Netlify Blobs), modern web apps eliminate database connection bottlenecks while maintaining instant global availability.",
          keyPoints: [
            "Sub-50ms Cold-start times with modern serverless edge runtimes",
            "Direct-to-storage authenticated file uploads without proxy bottlenecks",
            "Immutable CDN cache-control headers on static assets for maximum throughput"
          ]
        }
      ],
      conclusion: "By combining React, TypeScript, Vite, and serverless edge infrastructure, teams can ship enterprise-grade web applications that deliver uncompromising speed, reliability, and security."
    }
  },
  {
    id: 3,
    slug: "data-science-trends-shaping-2026",
    title: "Data Science & LLM Trends Shaping the Enterprise Landscape",
    excerpt: "Discover the latest paradigms in retrieval-augmented generation (RAG), fine-tuned domain models, vector embeddings, and evaluation benchmarks.",
    author: "Arjun Patel",
    authorRole: "Head of AI Research",
    date: "March 5, 2024",
    isoDate: "2024-03-05T09:00:00+00:00",
    readTime: "7 min read",
    category: "Data Science",
    image: "https://images.pexels.com/photos/8386434/pexels-photo-8386434.jpeg?auto=compress&cs=tinysrgb&w=1200",
    tags: ["Data Science", "Machine Learning", "RAG", "Vector Search", "LLMs"],
    icon: <TrendingUp className="w-6 h-6" />,
    content: {
      introduction: "The data science field has transformed rapidly from offline batch model training to real-time LLM orchestration, continuous contextual evaluation, and multi-modal vector search. Organizations are shifting away from generic foundation models toward tightly coupled domain intelligence systems.",
      sections: [
        {
          heading: "1. Advanced RAG: Beyond Naive Vector Similarity",
          body: "Naive cosine-similarity RAG often fails on domain-specific corpora due to chunk fragmentation and loss of global context. Modern architectures implement hybrid search combining dense vector embeddings with sparse BM25 keyword matching, followed by neural rerankers (like Cohere or BGE).",
          keyPoints: [
            "Hybrid dense-sparse retrieval pipelines for 98%+ precision",
            "Contextual chunk headers preserving parent document semantics",
            "Cross-encoder neural rerankers eliminating irrelevant context injection"
          ]
        },
        {
          heading: "2. Synthetic Data Generation and Ground-Truth Evaluation",
          body: "To validate LLM pipelines without subjective manual review, automated evaluation frameworks (such as Ragas and DeepEval) score outputs across faithfulness, answer relevance, and context recall against verified ground-truth test sets.",
          keyPoints: [
            "Continuous automated regression testing for LLM pipelines",
            "Deterministic scoring metrics preventing hallucination drift",
            "Curated gold-standard benchmark datasets tailored to enterprise domains"
          ]
        },
        {
          heading: "3. Small Domain Models vs Massive Foundation APIs",
          body: "Enterprises are increasingly deploying specialized 7B to 14B parameter models fine-tuned with Direct Preference Optimization (DPO) and LoRA. These models run on private VPC hardware, offering higher throughput, zero data leakage, and significantly lower inference costs.",
          keyPoints: [
            "Reduced inference latency under 200ms for specialized tasks",
            "Strict data isolation and privacy compliance under GDPR and HIPAA",
            "Over 70% cost reduction compared to commercial proprietary API calls"
          ]
        }
      ],
      conclusion: "The competitive edge in data science no longer lies in possessing raw compute, but in architecting superior data ingestion pipelines, hybrid retrieval mechanisms, and deterministic evaluation loops."
    }
  },
  {
    id: 4,
    slug: "ui-ux-design-principles-ai-applications",
    title: "UI/UX Design Principles for Human-Centric AI Applications",
    excerpt: "How to design intuitive, transparent, and confidence-building user interfaces for non-deterministic AI agents and generative tools.",
    author: "Sneha Reddy",
    authorRole: "Lead Product Designer",
    date: "February 28, 2024",
    isoDate: "2024-02-28T09:00:00+00:00",
    readTime: "6 min read",
    category: "Design",
    image: "https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=1200",
    tags: ["UI/UX", "Design Systems", "AI Interfaces", "Human-in-the-Loop"],
    icon: <Lightbulb className="w-6 h-6" />,
    content: {
      introduction: "Designing interfaces for AI applications is fundamentally different from traditional deterministic software. When system outputs can vary probabilistically, interfaces must communicate status, confidence, and provenance while empowering users to edit, regenerate, and inspect machine decisions with confidence.",
      sections: [
        {
          heading: "1. Progressive Disclosure and Streaming Latency UX",
          body: "Long generation wait times cause user friction. Implementing token-by-token streaming, animated skeleton states, and step-by-step reasoning progress indicators provides immediate visual feedback, transforming perceived latency into an engaging experience.",
          keyPoints: [
            "Real-time token streaming with smooth typography smoothing",
            "Agent reasoning step badges (e.g., 'Searching database...', 'Validating schema...')",
            "Graceful cancellation and pause buttons during live generation"
          ]
        },
        {
          heading: "2. Inline Correction and One-Click Remixing",
          body: "Users should never feel locked into an AI output. Providing inline diff viewers, multi-variant selectors, and editable suggestion blocks allows users to co-create with AI rather than fighting it.",
          keyPoints: [
            "Visual side-by-side comparison of generated variations",
            "One-click action items for tone, length, and detail adjustments",
            "Persistent history checkpoints allowing instant undo and fork workflows"
          ]
        },
        {
          heading: "3. Transparent Provenance and Citation Design",
          body: "To build enterprise trust, every generated claim must link back to its source snippet. Designing interactive hover citations and collapsible source drawers grounds AI answers in verifiable facts.",
          keyPoints: [
            "Interactive badge citations linking to source document page numbers",
            "Confidence indicators highlighting potentially speculative statements",
            "Accessible contrast ratios and glassmorphic elevated panels"
          ]
        }
      ],
      conclusion: "The best AI interfaces do not attempt to impersonate humans—they serve as high-leverage cognitive prosthetics that amplify human speed, creativity, and strategic clarity."
    }
  },
  {
    id: 5,
    slug: "implementing-n8n-workflows-business-automation",
    title: "Orchestrating Complex Enterprise Workflows with n8n & Custom Webhooks",
    excerpt: "A practical guide to connecting LLMs, CRMs, databases, and custom microservices into resilient self-hosted automation pipelines.",
    author: "Rahul Sharma",
    authorRole: "Principal AI Architect",
    date: "February 20, 2024",
    isoDate: "2024-02-20T09:00:00+00:00",
    readTime: "9 min read",
    category: "Automation",
    image: "https://images.pexels.com/photos/8386422/pexels-photo-8386422.jpeg?auto=compress&cs=tinysrgb&w=1200",
    tags: ["n8n", "Automation", "Workflows", "Webhooks", "Integrations"],
    icon: <BookOpen className="w-6 h-6" />,
    content: {
      introduction: "While SaaS automation tools like Zapier work well for basic triggers, enterprise-scale automation requires complex branching, self-hosted data governance, sub-workflow modularity, and custom code execution. n8n has emerged as the premier open-source workflow automation platform for engineering teams.",
      sections: [
        {
          heading: "1. Architecture Setup: Self-Hosted n8n on Docker & Kubernetes",
          body: "Running n8n on private cloud infrastructure with PostgreSQL as the backing database ensures complete data privacy and eliminates per-task execution fees. Scaling worker nodes via Redis queue mode allows pipelines to handle thousands of concurrent webhooks without degradation.",
          keyPoints: [
            "Zero external data exposure with on-premises or private VPC hosting",
            "Horizontal worker scaling using Redis queue concurrency",
            "Encrypted secret management for API keys and database credentials"
          ]
        },
        {
          heading: "2. Incorporating LLMs and AI Tool Calling in Workflows",
          body: "By leveraging n8n's native LangChain integration nodes, developers can inject autonomous reasoning agents directly into business pipelines—automatically classifying inbound leads, parsing unstructured PDF contracts, and formatting JSON payloads for backend databases.",
          keyPoints: [
            "Dynamic document classification and semantic routing",
            "Automated schema extraction with strict fallback validation",
            "Multi-channel output dispatching to Slack, HubSpot, and PostgreSQL"
          ]
        },
        {
          heading: "3. Error Handling, Retries, and Incident Alerting",
          body: "Robust automation requires comprehensive exception handling. Designing error-trigger workflows that capture failed execution payloads and alert engineering squads via Telegram or Slack prevents silent data synchronization failures.",
          keyPoints: [
            "Exponential backoff retry mechanisms for third-party rate limits",
            "Dead-letter queues capturing failed webhooks for inspection",
            "Automated health checks and uptime monitoring"
          ]
        }
      ],
      conclusion: "n8n bridges the gap between low-code agility and software engineering rigor, empowering organizations to automate critical operations at a fraction of traditional SaaS costs."
    }
  },
  {
    id: 6,
    slug: "rise-of-no-code-and-ai-in-enterprise",
    title: "The Strategic Rise of No-Code & AI Platforms in Enterprise Digital Transformation",
    excerpt: "How cross-functional squads are leveraging modern visual builders, AI generators, and headless backends to collapse product development cycles from months to days.",
    author: "Priya Gupta",
    authorRole: "Lead Full-Stack Engineer",
    date: "February 15, 2024",
    isoDate: "2024-02-15T09:00:00+00:00",
    readTime: "5 min read",
    category: "AI & Technology",
    image: "https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg?auto=compress&cs=tinysrgb&w=1200",
    tags: ["No-Code", "Enterprise AI", "Product Velocity", "Digital Transformation"],
    icon: <TrendingUp className="w-6 h-6" />,
    content: {
      introduction: "Digital transformation is no longer constrained by software engineering bandwidth. By uniting modern visual development platforms, headless APIs, and generative AI creation sandboxes (such as the MagicBox AI UGC Factory), business teams can prototype, validate, and scale production systems with unprecedented agility.",
      sections: [
        {
          heading: "1. Bridging the Gap Between Engineering and Business Stakeholders",
          body: "Traditional software lifecycles lose months translating business requirements into technical specs. Visual platforms enable product managers and domain experts to assemble core logic visually while engineers focus on high-performance microservices, security compliance, and custom LLM architectures.",
          keyPoints: [
            "10x acceleration in time-to-market for internal tooling and portals",
            "Elimination of repetitive boilerplate coding through AI scaffolding",
            "Collaborative real-time iteration between design and development squads"
          ]
        },
        {
          heading: "2. Hybrid Architecture: Visual Speed with Enterprise Rigor",
          body: "The winning enterprise pattern is hybrid: using visual builders for front-facing dashboards and campaign portals, backed by robust serverless APIs, strict database schema migrations, and CI/CD version control.",
          keyPoints: [
            "Decoupled frontend presentations with centralized API gateways",
            "Automated test suites guaranteeing regression-free deployments",
            "Enterprise Single Sign-On (SSO) and role-based data access policies"
          ]
        },
        {
          heading: "3. Real-World Value Creation",
          body: "Organizations implementing hybrid AI and visual development frameworks report over 65% reductions in initial development budgets and significant improvements in feature turnaround times.",
          keyPoints: [
            "Rapid validation of new market offerings in under two weeks",
            "Lower maintenance overhead through modular component libraries",
            "Scalable architecture ready for enterprise traffic spikes"
          ]
        }
      ],
      conclusion: "The future of enterprise software is not 'code vs no-code'—it is the strategic fusion of autonomous AI agents, intuitive visual builders, and robust backend engineering."
    }
  }
];

const categories = ["All", "AI & Technology", "Web Development", "Data Science", "Design", "Automation"];

const Blogs = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [openBlog, setOpenBlog] = useState<BlogPost | null>(null);

  const filteredPosts = selectedCategory === "All" 
    ? blogPosts 
    : blogPosts.filter(post => post.category === selectedCategory);

  if (openBlog) {
    const articleJsonLd = {
      "@context": "https://schema.org",
      "@type": "BlogPosting",
      "headline": openBlog.title,
      "description": openBlog.excerpt,
      "image": openBlog.image,
      "author": {
        "@type": "Person",
        "name": openBlog.author,
        "jobTitle": openBlog.authorRole
      },
      "publisher": {
        "@type": "Organization",
        "name": "Nhancio",
        "url": "https://nhancio.com",
        "logo": {
          "@type": "ImageObject",
          "url": "https://nhancio.com/logos/Nhancio-logo.png"
        }
      },
      "datePublished": openBlog.isoDate,
      "dateModified": openBlog.isoDate,
      "mainEntityOfPage": {
        "@type": "WebPage",
        "@id": `https://nhancio.com/blogs#${openBlog.slug}`
      },
      "keywords": openBlog.tags.join(", "),
      "articleSection": openBlog.category
    };

    return (
      <div className="min-h-screen bg-gradient-to-br from-purple-50 via-blue-50 to-green-50 pt-20">
        <SEO
          title={`${openBlog.title} | Nhancio AI Insights`}
          description={openBlog.excerpt}
          path={`/blogs`}
          image={openBlog.image}
        />
        <Helmet>
          <script type="application/ld+json">
            {JSON.stringify(articleJsonLd)}
          </script>
        </Helmet>
        
        <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <button
            className="inline-flex items-center gap-2 text-purple-600 font-semibold hover:text-purple-800 transition-colors mb-8 cursor-pointer group"
            onClick={() => setOpenBlog(null)}
          >
            <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
            <span>Back to All Articles</span>
          </button>

          <div className="bg-white/90 backdrop-blur-md rounded-3xl p-6 sm:p-10 shadow-xl border border-white/60">
            {/* Category & Read Time */}
            <div className="flex items-center gap-3 mb-4 flex-wrap">
              <span className="bg-purple-100 text-purple-700 px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-wider">
                {openBlog.category}
              </span>
              <span className="text-gray-500 text-xs font-medium flex items-center gap-1">
                <Clock className="w-3.5 h-3.5" />
                {openBlog.readTime}
              </span>
            </div>

            {/* Title */}
            <h1 className="text-2xl sm:text-4xl font-extrabold text-gray-900 leading-tight mb-6">
              {openBlog.title}
            </h1>

            {/* Author Meta */}
            <div className="flex items-center justify-between border-b border-gray-100 pb-6 mb-8 flex-wrap gap-4">
              <div className="flex items-center gap-3">
                <div className="w-11 h-11 rounded-full bg-purple-600 text-white flex items-center justify-center font-bold text-base shadow-sm">
                  {openBlog.author.slice(0, 2)}
                </div>
                <div>
                  <div className="font-bold text-gray-900 text-sm">{openBlog.author}</div>
                  <div className="text-xs text-gray-500">{openBlog.authorRole} • {openBlog.date}</div>
                </div>
              </div>

              <div className="flex items-center gap-2">
                {openBlog.tags.map((tag, idx) => (
                  <span key={idx} className="bg-gray-100 text-gray-600 px-2.5 py-1 rounded-lg text-xs font-medium">
                    #{tag}
                  </span>
                ))}
              </div>
            </div>

            {/* Hero Image */}
            <div className="rounded-2xl overflow-hidden mb-8 shadow-md">
              <img
                src={openBlog.image}
                alt={openBlog.title}
                width="1200"
                height="600"
                loading="lazy"
                decoding="async"
                className="w-full h-64 sm:h-96 object-cover"
              />
            </div>

            {/* Article Body */}
            <div className="prose prose-purple max-w-none text-gray-700 space-y-8">
              <p className="text-base sm:text-lg leading-relaxed font-medium text-gray-800 bg-purple-50/50 p-6 rounded-2xl border-l-4 border-purple-600">
                {openBlog.content.introduction}
              </p>

              {openBlog.content.sections.map((sec, sIdx) => (
                <section key={sIdx} className="space-y-4">
                  <h2 className="text-xl sm:text-2xl font-bold text-gray-900 tracking-tight">
                    {sec.heading}
                  </h2>
                  <p className="text-sm sm:text-base leading-relaxed text-gray-700">
                    {sec.body}
                  </p>
                  {sec.keyPoints && sec.keyPoints.length > 0 && (
                    <div className="bg-gray-50 rounded-2xl p-5 border border-gray-100 space-y-2.5">
                      <div className="text-xs font-bold uppercase tracking-wider text-gray-500 mb-2">Key Engineering Insights:</div>
                      {sec.keyPoints.map((kp, kIdx) => (
                        <div key={kIdx} className="flex items-start gap-2.5 text-xs sm:text-sm text-gray-700">
                          <CheckCircle2 className="w-4 h-4 text-purple-600 shrink-0 mt-0.5" />
                          <span>{kp}</span>
                        </div>
                      ))}
                    </div>
                  )}
                </section>
              ))}

              <div className="bg-gradient-to-r from-purple-600 to-indigo-600 text-white p-6 sm:p-8 rounded-2xl shadow-lg mt-8">
                <h3 className="text-lg sm:text-xl font-bold mb-2">Summary & Strategic Outlook</h3>
                <p className="text-sm sm:text-base text-purple-100 leading-relaxed">
                  {openBlog.content.conclusion}
                </p>
              </div>
            </div>

            {/* Article Footer CTA */}
            <div className="mt-12 pt-8 border-t border-gray-100 flex flex-col sm:flex-row items-center justify-between gap-4">
              <button
                onClick={() => setOpenBlog(null)}
                className="text-sm font-semibold text-gray-700 hover:text-purple-600 transition-colors flex items-center gap-1.5"
              >
                <ArrowLeft className="w-4 h-4" />
                <span>Return to Blog Hub</span>
              </button>

              <a
                href="/#contact"
                className="px-6 py-3 rounded-xl bg-purple-600 hover:bg-purple-700 text-white text-xs sm:text-sm font-bold transition-all shadow-md hover:shadow-purple-500/20 flex items-center gap-2"
              >
                <span>Consult Our AI Engineering Team</span>
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </div>
        </article>
      </div>
    );
  }

  const blogListJsonLd = {
    "@context": "https://schema.org",
    "@type": "Blog",
    "name": "Nhancio AI Engineering & Automation Blog",
    "description": "In-depth articles, architectural blueprints, and insights on autonomous AI agents, multi-agent frameworks, full-stack engineering, and data science.",
    "url": "https://nhancio.com/blogs",
    "publisher": {
      "@type": "Organization",
      "name": "Nhancio",
      "url": "https://nhancio.com",
      "logo": {
        "@type": "ImageObject",
        "url": "https://nhancio.com/logos/Nhancio-logo.png"
      }
    },
    "blogPost": blogPosts.map(post => ({
      "@type": "BlogPosting",
      "headline": post.title,
      "description": post.excerpt,
      "url": `https://nhancio.com/blogs#${post.slug}`,
      "datePublished": post.isoDate,
      "author": {
        "@type": "Person",
        "name": post.author
      }
    }))
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-blue-50 to-green-50 pt-20">
      <SEO
        title="Blog - AI Agents, Multi-Agent Systems & Scalable Engineering | Nhancio"
        description="Explore in-depth technical articles, tutorials, and research insights on autonomous AI agents, RalphAI, NFLA App, Vite/React, data science, and business automation."
        path="/blogs"
      />
      <Helmet>
        <script type="application/ld+json">
          {JSON.stringify(blogListJsonLd)}
        </script>
      </Helmet>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Header */}
        <div className="text-center mb-14 max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-purple-100 text-purple-700 text-xs font-semibold uppercase tracking-wider mb-3">
            <BookOpen className="w-3.5 h-3.5" />
            <span>Nhancio Engineering Publications</span>
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-gray-900 tracking-tight mb-4">
            Insights on AI, Agents & <span className="text-purple-600">Deep Tech</span>
          </h1>
          <p className="text-base sm:text-xl text-gray-600 leading-relaxed">
            Architectural teardowns, production case studies, and engineering tutorials from the IITian founders and builders at Nhancio.
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-2 sm:gap-3 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-5 py-2.5 rounded-xl text-xs sm:text-sm font-semibold transition-all duration-200 cursor-pointer ${
                selectedCategory === category
                  ? 'bg-purple-600 text-white shadow-md shadow-purple-500/20 scale-102'
                  : 'bg-white/80 hover:bg-white text-gray-700 border border-gray-200/80 shadow-2xs'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Blog Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredPosts.map((post) => (
            <article
              key={post.id}
              className="bg-white/90 backdrop-blur-md rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1.5 border border-white/60 flex flex-col justify-between group"
              style={{
                boxShadow: '0 10px 30px -5px rgba(0,0,0,0.05), inset 0 2px 4px rgba(255,255,255,0.9)',
              }}
            >
              <div className="relative overflow-hidden h-52">
                <img
                  src={post.image}
                  alt={post.title}
                  width="600"
                  height="400"
                  loading="lazy"
                  decoding="async"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute top-4 left-4">
                  <span className="bg-purple-600/90 backdrop-blur-md text-white px-3 py-1 rounded-full text-xs font-bold shadow-sm">
                    {post.category}
                  </span>
                </div>
                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm rounded-xl p-2 text-purple-700 shadow-sm">
                  {post.icon}
                </div>
              </div>

              <div className="p-6 flex-1 flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-3 text-xs text-gray-500 mb-3">
                    <div className="flex items-center gap-1">
                      <User className="w-3.5 h-3.5 text-purple-600" />
                      <span>{post.author}</span>
                    </div>
                    <span>•</span>
                    <div className="flex items-center gap-1">
                      <Calendar className="w-3.5 h-3.5" />
                      <span>{post.date}</span>
                    </div>
                  </div>

                  <h2 className="text-lg sm:text-xl font-bold text-gray-900 mb-3 group-hover:text-purple-600 transition-colors leading-snug">
                    {post.title}
                  </h2>

                  <p className="text-xs sm:text-sm text-gray-600 leading-relaxed mb-4 line-clamp-3">
                    {post.excerpt}
                  </p>

                  <div className="flex flex-wrap gap-1.5 mb-5">
                    {post.tags.slice(0, 3).map((tag, index) => (
                      <span
                        key={index}
                        className="bg-purple-50 text-purple-700 border border-purple-100 px-2.5 py-0.5 rounded-md text-[11px] font-semibold"
                      >
                        #{tag}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="flex items-center justify-between pt-4 border-t border-gray-100 mt-auto">
                  <span className="text-xs text-gray-500 font-medium flex items-center gap-1">
                    <Clock className="w-3.5 h-3.5" />
                    {post.readTime}
                  </span>
                  <button
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-purple-600 hover:text-purple-700 group cursor-pointer"
                    onClick={() => setOpenBlog(post)}
                    aria-label={`Read full article: ${post.title}`}
                  >
                    <span>Read Article</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Blogs;
