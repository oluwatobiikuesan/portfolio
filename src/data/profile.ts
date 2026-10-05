// All site content lives here. Edit this file to update the portfolio.

export type Social = {
  label: string;
  href: string;
  icon: "github" | "linkedin" | "mail";
};

export type Project = {
  title: string;
  // Short label shown above the title, e.g. "AI video platform".
  category: string;
  org?: string;
  summary: string;
  tags: string[];
  link?: string;
  // Featured projects lead the Work section; the rest sit under "More projects".
  featured?: boolean;
  // Bullet points shown on the back of the project card.
  highlights?: string[];
};

export type Focus = {
  title: string;
  body: string;
};

export const profile = {
  firstName: "Oluwatobi",
  lastName: "Ikuesan",
  role: "Software & AI Engineer",
  tagline: "builds calm, useful software.",
  intro:
    "I build full stack, mobile and AI systems: video pipelines, real-time platforms, autonomous agents and connected devices. I care about clear interfaces, honest code and details that quietly work.",
  currently: "Building AI agents and autonomous systems",

  // Replace this file with your own photo (a 4:5 portrait works best),
  // or point this path at a new file inside the public/ folder.
  image: "/images/profile.svg",
  imageAlt: "Portrait of Oluwatobi Ikuesan",

  email: "hello@example.com",
  resume: "",

  about: [
    "I am a software engineer and computer science student with a background in graphic design. I work across the whole stack: mobile apps, backend services, real-time systems and the pipelines that ship them.",
    "I like putting rules where they belong. On a peer support platform I enforced matching, blocking and messaging rules in the database itself, with triggers and constraints, so the system stays correct even as the app code changes.",
    "Lately my focus is AI and agentic systems: agents with persistent memory and real tools, tested for prompt injection, privacy leaks and authorization gaps. Next on the path are IoT and robotics, where software meets the physical world.",
  ],
};

export const socials: Social[] = [
  { label: "GitHub", href: "https://github.com/oluwatobiikuesan", icon: "github" },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/oluwatobiikuesan/", icon: "linkedin" },
  { label: "Email", href: `mailto:${profile.email}`, icon: "mail" },
];

export const skills: { group: string; items: string[] }[] = [
  { group: "Languages", items: ["Python", "Java", "TypeScript", "JavaScript", "SQL", "Dart"] },
  { group: "Frontend & mobile", items: ["React", "Next.js", "React Native", "Expo", "Flutter", "Riverpod"] },
  { group: "Backend", items: ["Node.js", "Spring Boot", "REST APIs", "Socket.IO", "WebSockets", "Sequelize"] },
  { group: "Data", items: ["MySQL", "PostgreSQL", "Supabase", "Firebase"] },
  {
    group: "AI & automation",
    items: ["LLMs", "AI Agents", "OpenClaw", "n8n", "Ollama", "AI Evaluation", "Agent Orchestration"],
  },
  { group: "Cloud & DevOps", items: ["Docker", "GitHub Actions", "Google Cloud", "CI/CD", "GHCR", "Linux"] },
  { group: "Specialised", items: ["FFmpeg", "IoT", "Raspberry Pi", "Pine Script", "Algorithms & Optimisation"] },
];

export const focus: Focus[] = [
  {
    title: "Software engineering",
    body: "Full stack and mobile apps, API design, real-time messaging and event driven systems, shipped with Docker and CI/CD.",
  },
  {
    title: "AI & agentic systems",
    body: "LLM integration, agent orchestration and persistent memory, plus evaluation and safety testing of how agents behave.",
  },
  {
    title: "Algorithms & optimisation",
    body: "Graphs, search and metaheuristics such as simulated annealing, genetic algorithms, ACO and PSO, applied to problems like TSP and bin packing.",
  },
  {
    title: "IoT & robotics",
    body: "Raspberry Pi devices, Bluetooth Low Energy control and robot programming, building toward autonomous systems.",
  },
];

export const projects: Project[] = [
  {
    title: "BetaClips",
    category: "AI video platform",
    featured: true,
    summary: "An AI powered platform that turns long videos into short, social ready clips and publishes them.",
    tags: ["React Native", "Next.js", "Node.js", "FFmpeg", "Docker"],
    highlights: [
      "Viral clip detection, auto reframing, captions and audio enhancement on an FFmpeg engine",
      "Bring your own key AI with a plugin architecture for Ollama, ChatGPT and Gemini",
      "Scheduled publishing to YouTube, with paid watermark removal handled through webhooks",
      "Docker deploys via GitHub Actions and GHCR, with health checks and rollback",
    ],
  },
  {
    title: "OpenClaw Agent Environment",
    category: "Autonomous AI agents",
    featured: true,
    summary: "A self hosted autonomous agent environment with persistent memory and access to real tools.",
    tags: ["OpenClaw", "AI Agents", "Supabase", "AI Evaluation"],
    highlights: [
      "Persistent agent state through HEARTBEAT, SKILL and MEMORY files",
      "Gmail and Supabase tool integrations for multi step workflows",
      "Prompt injection, privacy leakage and authorization boundary testing",
      "Trajectory and tool call review to evaluate agent behaviour",
    ],
  },
  {
    title: "Peer Support Platform",
    category: "Matchmaking & real-time chat",
    featured: true,
    summary: "A peer support app that moves people from match suggestions to connections to private, real-time messaging.",
    tags: ["Flutter", "Riverpod", "Node.js", "MySQL", "Socket.IO"],
    highlights: [
      "Business rules enforced in MySQL with triggers, generated columns and CHECK constraints",
      "Connection based chat authorization over Socket.IO private rooms",
      "Match scoring, blocking, notifications and mood check-ins",
      "GDPR consent logging, login auditing and Firebase with Google Sign-In",
    ],
  },
  {
    title: "Accessibility AI Assistant",
    category: "Voice-first mobile agent",
    featured: true,
    summary: "A single button assistant that lets visually impaired users speak a request while an AI agent acts on their device.",
    tags: ["React Native", "Expo", "AI Agents", "Accessibility"],
    highlights: [
      "Voice interaction with a large, accessible interface",
      "Native iOS and Android modules for device capabilities and accessibility APIs",
      "Automated testing and agent based code validation in a CI workflow",
    ],
  },
  {
    title: "TradeMind AI",
    category: "Predictive Forex trading",
    featured: true,
    summary: "An AI assisted Forex trading system that blends live market data, news and social sentiment.",
    tags: ["Python", "LLMs", "OANDA", "Telegram"],
    highlights: [
      "Python trading engine with CLI and API interfaces",
      "Live market data from OANDA and alternative sources such as Myfxbook",
      "News and social sentiment feeding strategies across trading horizons",
      "Telegram approval workflow before trades are placed",
    ],
  },
  {
    title: "Raspberry Pi IoT Camera",
    category: "Connected device",
    featured: true,
    summary: "A connected camera system for remote viewing over Wi-Fi, built on a Raspberry Pi.",
    tags: ["Raspberry Pi", "IoT", "Python", "Java"],
    highlights: [
      "Raspberry Pi with a camera module and Wi-Fi connectivity",
      "Remote access to the camera feed",
      "A first step toward IoT and robotics work",
    ],
  },
  {
    title: "Gradit",
    category: "AI career platform",
    summary: "An AI assisted career platform that automates the busy work of a job search.",
    tags: ["AI Agents", "LLMs", "Automation"],
    highlights: [
      "CV and cover letter generation matched to job descriptions",
      "Interview preparation from structured candidate data",
      "Agents with Gmail, Calendar and web page integrations",
    ],
  },
  {
    title: "n8n AI Automation",
    category: "Agentic workflows",
    summary: "Automated and agent driven workflows that connect external APIs, AI models and application services.",
    tags: ["n8n", "LLMs", "OpenClaw", "Supabase"],
  },
  {
    title: "BLE Control System",
    category: "Mobile hardware control",
    org: "Deep Sym",
    summary: "A React Native app that connects to and controls hardware over Bluetooth Low Energy.",
    tags: ["React Native", "BLE", "Mobile"],
  },
  {
    title: "Bacenta",
    category: "Community app",
    summary: "A faith based community app for university fellowship groups.",
    tags: ["Real-time", "Mobile", "Product design"],
    highlights: [
      "Weekly collaborative Bible quizzes with real-time participation",
      "Real-time chat, broadcasts, podcasts and personal notes",
      "Engagement metrics and inter-Bacenta competitions",
    ],
  },
  {
    title: "Smart Money Indicator",
    category: "TradingView indicator",
    summary: "A liquidity and smart money concepts indicator for TradingView.",
    tags: ["Pine Script", "TradingView"],
    highlights: [
      "Liquidity sweep and market structure detection",
      "Multi timeframe analysis with alerts",
    ],
  },
  {
    title: "Arktively",
    category: "Web product",
    summary: "A live web product, designed, built and shipped to production at arktively.com.",
    tags: ["Web app", "Production"],
    link: "https://arktively.com",
  },
  {
    title: "AllTheTools",
    category: "Web tools",
    summary: "A collection of handy online tools gathered in one place, built to be fast and simple to use.",
    tags: ["Web app", "Tools"],
    link: "https://allthetools.com",
  },
  {
    title: "Swiftbot",
    category: "Robotics",
    summary: "Programming the Swiftbot robot in Java, including a Mastermind code breaking game played with its lights and buttons.",
    tags: ["Java", "Robotics"],
  },
];

const pad = (n: number) => String(n).padStart(2, "0");

// Counts update automatically as projects and skills are added.
export const stats = [
  { label: "UKIEPC at Brunel", value: "2nd", desc: "out of 33 teams" },
  { label: "Projects", value: pad(projects.length), desc: "web, mobile, AI and IoT" },
  {
    label: "Languages",
    value: pad(skills.find((s) => s.group === "Languages")?.items.length ?? 0),
    desc: "plus Pine Script",
  },
];

export const navLinks = [
  { label: "About", to: "/#about" },
  { label: "Skills", to: "/#skills" },
  { label: "Work", to: "/#work" },
  { label: "Contact", to: "/#contact" },
  { label: "Ask AI", to: "/ai" },
];
