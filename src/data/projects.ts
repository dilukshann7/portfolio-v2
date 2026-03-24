export interface Project {
  id: string;
  name: string;
  description: string;
  img: string;
  route: string;
  fullDescription: string;
  role: string;
  timeline: string;
  status: "Completed" | "In Progress" | "Live";
  technologies: string[];
  features: string[];
  links: {
    demo?: string;
    github?: string;
    website?: string;
  };
  highlights: string[];
  techImages?: string[]; // Optional field for technology logos
}

export const projects: Project[] = [
  {
    id: "portfolio-v2",
    name: "Portfolio v2",
    description:
      "Second iteration of a personal portfolio featuring editorial typography and interactive 3D motion.",
    img: "/projects/portfolio.png",
    route: "/portfolio-v2",
    fullDescription:
      "A single-page portfolio combining editorial-style typography, animated transitions, interactive project showcases, and motion-driven UI experiments. It utilizes a powerful Astro-first rendering approach with React and advanced WebGL/GSAP animations to present work in an immersive way.",
    role: "Solo Developer",
    timeline: "2026",
    status: "Completed",
    technologies: [
      "Astro",
      "React",
      "TypeScript",
      "Tailwind CSS v4",
      "GSAP",
      "Three.js / OGL",
      "Cloudflare Workers",
    ],
    features: [
      "Full-screen animated landing experience",
      "Preloader and shader-like background effects",
      "Interactive client-side project cards with GSAP & Lenis",
      "Hover-reactive technology stack highlights",
      "Cloudflare-ready deployment",
    ],
    links: {
      demo: "https://dilukshan.dev",
      github: "https://github.com/dilukshann7/portfolio-v2",
      website: "https://dilukshan.dev",
    },
    highlights: [
      "Smooth scroll and motion-driven UI via Lenis and GSAP",
      "Optimized Astro-first rendering for fast load times",
      "Custom 3D background effects",
    ],
    techImages: [
      "/tech/astro.png",
      "/tech/react.png",
      "/tech/typescript.png",
      "/tech/tailwind.png",
      "/tech/gsap.png",
      "/tech/cloudflare.png",
    ],
  },
  {
    id: "noxhd-ui",
    name: "NoxHD UI",
    description: "Beautifully Designed UI Library for Next.js",
    img: "/projects/noxhd.png",
    route: "/noxhd-ui",
    fullDescription:
      "NoxHD UI is a comprehensive design system and component library built specifically for Next.js applications. It provides a collection of beautifully crafted, accessible, and customizable UI components that help developers build modern web applications faster.",
    role: "Creator & Maintainer",
    timeline: "2024",
    status: "Live",
    technologies: [
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "Radix UI",
      "Storybook",
    ],
    features: [
      "40+ accessible UI components",
      "Built-in dark mode support",
      "Fully typed with TypeScript",
      "Customizable theme system",
      "Responsive by default",
      "Zero-runtime CSS",
    ],
    links: {
      demo: "https://noxhd-ui.vercel.app",
      github: "https://github.com/noxhd/noxhd-ui",
      website: "https://noxhd.dev",
    },
    highlights: [
      "Designed with a focus on developer experience and accessibility",
      "Used by 500+ developers in production applications",
      "Achieved 99+ Lighthouse accessibility score",
    ],
    techImages: [
      "/tech/nextjs.png",
      "/tech/typescript.png",
      "/tech/tailwind.png",
      "/tech/radix.png",
      "/tech/storybook.png",
    ],
  },
  {
    id: "legisdex",
    name: "LegisDex",
    description:
      "AI-powered FIDIC contract assistant for architects, engineers, and quantity surveyors.",
    img: "/projects/legisdex.png",
    route: "/legisdex",
    fullDescription:
      "LegisDex is a production-grade SaaS AI assistant that makes FIDIC contracts and construction law accessible to AEC professionals. Built on an advanced agentic RAG pipeline, it combines vector search, full-text search, and structured clause matching to ensure answers are grounded in real contract text rather than model hallucinations.",
    role: "Lead Developer & AI Engineer",
    timeline: "2025 - 2026",
    status: "Live",
    technologies: [
      "Next.js",
      "TypeScript",
      "Vercel AI SDK",
      "PostgreSQL (Neon)",
      "Drizzle ORM",
      "OpenAI",
      "Stripe",
    ],
    features: [
      "Real-time streamed AI responses with citation requirements",
      "Multi-strategy hybrid retrieval (Vector + BM25 FTS + Exact Clause)",
      "Historical case enrichment for adjudication/arbitration context",
      "Tool-based agentic reasoning",
      "Tier-based rate limits and Stripe billing integration",
      "Shareable public links for individual conversations",
    ],
    links: {
      demo: "https://legisdex.com",
      github: "https://github.com/dilukshann7/legisdex",
      website: "https://legisdex.com",
    },
    highlights: [
      "Implemented an advanced 3-tier Reciprocal Rank Fusion retrieval strategy",
      "Utilized pgvector and HNSW indexing for fast approximate searches",
      "Built a secure multi-tier user access system with robust billing integrations",
    ],
    techImages: [
      "/tech/nextjs.png",
      "/tech/typescript.png",
      "/tech/openai.png",
      "/tech/postgresql.png",
      "/tech/drizzle.png",
      "/tech/stripe.png",
    ],
  },
  {
    id: "termicord",
    name: "termicord",
    description: "A beautiful, terminal-native Discord attachment downloader",
    img: "/projects/termicord.jpg",
    route: "/termicord",
    fullDescription:
      "Termicord is a sleek, fully terminal-native tool to bulk-download all attachments from Discord channels. It talks directly to the Discord REST API, handles rate-limiting gracefully, and wraps everything in a gorgeous animated TUI—no browser, no Electron, no nonsense. Powered by Bun and rendered via OpenTUI.",
    role: "Solo Developer",
    timeline: "2026",
    status: "Completed",
    technologies: ["Bun", "TypeScript", "OpenTUI", "Zig", "Discord API"],
    features: [
      "Animated true-color (24-bit) Terminal UI",
      "Bulk channel attachment downloading",
      "Content-Hash deduplication",
      "Auto Rate-Limit handling and back-off",
      "Rich filtering (by author, date, size, extension)",
      "Resume & incremental sync",
    ],
    links: {
      github: "https://github.com/dilukshann7/termicord",
    },
    highlights: [
      "Sub-millisecond TUI render cycles utilizing OpenTUI's Zig engine",
      "Graceful 429 response handling natively communicating with Discord API",
      "Complex layout engine right in the terminal with mouse support",
    ],
    techImages: ["/tech/bun.png", "/tech/typescript.png", "/tech/discord.png"],
  },
  {
    id: "census-ms",
    name: "Census Management System",
    description:
      "A SvelteKit-based census data collection and admin review system.",
    img: "/projects/census.png",
    route: "/census-ms",
    fullDescription:
      "A complete platform built to collect family census submissions from a public form and securely store them in PostgreSQL. It includes a protected admin console for reviewing, approving, rejecting, and editing records with an email-based allowlist system.",
    role: "Solo Developer",
    timeline: "2026",
    status: "Live",
    technologies: [
      "SvelteKit 2",
      "Svelte 5",
      "Tailwind CSS 4",
      "Drizzle ORM",
      "PostgreSQL (Neon)",
      "Better Auth",
      "Zod",
    ],
    features: [
      "Public-facing census submission forms",
      "Secure admin dashboard for managing records",
      "Approval/rejection queue system",
      "Email allowlist authorization",
      "Server-side session validation",
    ],
    links: {
      demo: "https://census-lk.vercel.app",
      github: "https://github.com/dilukshann7/census-ms",
      website: "https://census-lk.vercel.app",
    },
    highlights: [
      "Optimized for fast data entry and bulk data management",
      "Robustly typed schema validations via Zod and Superforms",
      "Deployed with Vercel serverless integration",
    ],
    techImages: [
      "/tech/svelte.png",
      "/tech/tailwind.png",
      "/tech/postgresql.png",
      "/tech/drizzle.png",
    ],
  },
  {
    id: "imagepress",
    name: "ImagePress",
    description:
      "A powerful desktop image compression tool built with Electron and React.",
    img: "/projects/imagepress.jpg",
    route: "/imagepress",
    fullDescription:
      "ImagePress is a cross-platform desktop application that provides powerful image compression and optimization capabilities. It features a clean, intuitive interface powered by React and shadcn/ui components, packaged directly as a native desktop application.",
    role: "Solo Developer",
    timeline: "2026",
    status: "Completed",
    technologies: [
      "Electron",
      "Node.js",
      "React",
      "TypeScript",
      "Tailwind CSS",
      "Webpack",
    ],
    features: [
      "Batch image compression",
      "Multiple format support",
      "Adjustable compression quality",
      "Real-time compression preview",
      "Native cross-platform desktop experience",
    ],
    links: {
      github: "https://github.com/dilukshann7/imagepress",
    },
    highlights: [
      "Migrated robust build pipeline to Electron Builder for multi-platform installers",
      "Modern UI integrated with Radix UI and Tailwind CSS v4",
      "Zero external cloud dependencies - runs entirely locally",
    ],
    techImages: [
      "/tech/electron.png",
      "/tech/nodejs.png",
      "/tech/react.png",
      "/tech/typescript.png",
      "/tech/tailwind.png",
    ],
  },
  {
    id: "lankanbook",
    name: "LankanBook",
    description:
      "A community-driven platform documenting establishments in Sri Lanka that discriminate against local residents.",
    img: "/projects/lankanbook.png",
    route: "/lankanbook",
    fullDescription:
      "Inspired by the historic Green Book, LankanBook is a crowd-sourced platform empowering communities to verify experiences of discrimination, dual pricing, or denial of entry. It relies on community upvoting to build a credible, transparent record of establishments.",
    role: "Founder & Lead Developer",
    timeline: "2026",
    status: "Live",
    technologies: [
      "Next.js 16",
      "TypeScript",
      "PostgreSQL (Neon)",
      "Drizzle ORM",
      "Tailwind CSS",
      "Vercel Blob",
    ],
    features: [
      "Searchable database by province, name, or location",
      "Community testimony submissions with evidence gallery",
      "Automated verification scoring via upvote algorithms",
      "Strict API rate-limiting and browser-based tracking to prevent spam",
    ],
    links: {
      demo: "https://lankanbook.vercel.app",
      github: "https://github.com/dilukshann7/lankanbook",
      website: "https://lankanbook.vercel.app",
    },
    highlights: [
      "Custom tracking mechanism limits submissions to prevent bot spam",
      "High-security architecture featuring CSP, HSTS, and X-Frame-Options",
      "Scalable media handling using @vercel/blob",
    ],
    techImages: [
      "/tech/nextjs.png",
      "/tech/postgresql.png",
      "/tech/drizzle.png",
      "/tech/tailwind.png",
      "/tech/vercel.png",
    ],
  },
  {
    id: "distributor-ms",
    name: "ADP Namasinghe DMS",
    description:
      "A full-stack distribution management system with role-based dashboards.",
    img: "/projects/distributor.png",
    route: "/distributor-ms",
    fullDescription:
      "An academic project turned full-stack business solution providing a comprehensive distribution management system. Features include robust inventory tracking, order management, deliveries workflows, payments, and automated PDF reporting inside an Electron shell.",
    role: "Lead Developer",
    timeline: "2025",
    status: "Completed",
    technologies: [
      "Node.js",
      "Express",
      "Prisma",
      "PostgreSQL",
      "Electron",
      "Lit",
      "Tailwind CSS",
    ],
    features: [
      "Role-based access control (Management, Operations, Logistics, Suppliers)",
      "End-to-end order and delivery workflows",
      "Inventory and payments management",
      "Dynamic PDF report generation and exports",
      "Desktop SPA shell packaged via Electron",
    ],
    links: {
      demo: "https://distributor-ms.vercel.app",
      github: "https://github.com/dilukshann7/distributor-ms",
    },
    highlights: [
      "Combined traditional REST API concepts with modern Lit Web Components",
      "Packaged as both a web application and a cross-platform desktop application",
      "Handled complex relational database schemas via Prisma",
    ],
    techImages: [
      "/tech/nodejs.png",
      "/tech/prisma.png",
      "/tech/postgresql.png",
      "/tech/electron.png",
      "/tech/tailwind.png",
    ],
  },
  {
    id: "notesploy",
    name: "Notesploy",
    description:
      "A rich note-taking app with a block-based editor, live code execution, and real-time collaboration.",
    img: "/projects/notesploy.png",
    route: "/notesploy",
    fullDescription:
      "Notesploy is a modern note-taking application that combines the flexibility of a block-based editor with powerful developer-focused features like live code execution and real-time collaboration. It's designed to be the single workspace for developers to capture, organize, and share knowledge.",
    role: "Lead Developer",
    timeline: "2023 - 2024",
    status: "In Progress",
    technologies: [
      "Next.js",
      "Yjs",
      "WebContainers",
      "PostgreSQL",
      "Redis",
      "WebSockets",
    ],
    features: [
      "Block-based editor with slash commands",
      "Live code execution in the browser",
      "Real-time collaborative editing",
      "Markdown and rich text support",
      "Team workspaces with permissions",
      "Version history with branching",
    ],
    links: {
      demo: "https://notesploy.vercel.app",
      github: "https://github.com/noxhd/notesploy",
    },
    highlights: [
      "Built WebContainer integration for secure code execution",
      "Achieved sub-50ms sync latency for collaboration",
      "Designed extensible block plugin architecture",
    ],
    techImages: [
      "/tech/nextjs.png",
      "/tech/yjs.png",
      "/tech/webcontainers.png",
      "/tech/postgresql.png",
      "/tech/redis.png",
      "/tech/websockets.png",
    ],
  },
  {
    id: "h5ptopptx",
    name: "H5PtoPPTX",
    description:
      "Windows desktop application to convert H5P interactive content to PowerPoint.",
    img: "/projects/h5ptopptx.png",
    route: "/h5ptopptx",
    fullDescription:
      "H5PtoPPTX is a C# Windows desktop application designed to streamline educational content management. It extracts images from packaged .h5p files and seamlessly auto-generates a .pptx PowerPoint presentation, placing each image on an individual slide.",
    role: "Solo Developer",
    timeline: "2025",
    status: "Completed",
    technologies: [
      "C#",
      ".NET Framework 4.7.2",
      "DocumentFormat.OpenXml",
      "WPF",
    ],
    features: [
      "Bulk batch processing of multiple .h5p files",
      "Automatic media extraction",
      "Native PowerPoint document generation",
      "Conversion logging and tracking GUI",
    ],
    links: {
      github: "https://github.com/dilukshann7/H5PtoPPTX",
    },
    highlights: [
      "Manipulates complex OpenXML schemas to generate valid PPTX files without requiring MS Office installed",
      "Greatly speeds up course asset migrations for educators",
    ],
    techImages: ["/tech/csharp.png"],
  },
  {
    id: "easyremovebg",
    name: "EasyRemoveBG",
    description:
      "Removes backgrounds from photos via a right-click context menu in Windows Explorer.",
    img: "/projects/easyremovebg.png",
    route: "/easyremovebg",
    fullDescription:
      "A utility tool integrating directly into the Windows OS. It allows users to instantly remove backgrounds or logos from images just by right-clicking them in Windows Explorer, leveraging background processing scripts and ML models.",
    role: "Solo Developer",
    timeline: "2024",
    status: "Completed",
    technologies: ["Python", "OpenCV", "Rembg", "Windows Registry / Batch"],
    features: [
      "Native Windows right-click context menu integration",
      "Automated foreground/background mask generation via K-means clustering",
      "Logo removal specifically tuned with OpenCV algorithms",
    ],
    links: {
      github: "https://github.com/dilukshann7/EasyRemoveBG",
    },
    highlights: [
      "Bridges the gap between Python ML utilities and raw OS UI integration",
      "Uses K-means clustering and Rembg for high-accuracy cutout generation",
    ],
    techImages: ["/tech/python.png", "/tech/opencv.png"],
  },
] as const;

export const getProjectBySlug = (slug: string): Project | undefined => {
  return projects.find((p) => p.id === slug);
};

export const getProjectByRoute = (route: string): Project | undefined => {
  return projects.find((p) => p.route === route);
};
