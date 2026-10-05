// All site content lives here. Edit this file to update the portfolio.

export type Social = {
  label: string;
  href: string;
  icon: "github" | "linkedin" | "mail";
};

export type Project = {
  title: string;
  org?: string;
  summary: string;
  tags: string[];
  link?: string;
  // Optional bullet points shown on the back of the project card.
  highlights?: string[];
};

export type Focus = {
  title: string;
  body: string;
};

export const profile = {
  firstName: "Oluwatobi",
  lastName: "Ikuesan",
  role: "Software Engineer",
  tagline: "builds calm, useful software.",
  intro:
    "I craft digital tools that simplify business processes and make everyday life a little easier. I care about clear interfaces, honest code and details that quietly work.",

  // Replace this file with your own photo (a 4:5 portrait works best),
  // or point this path at a new file inside the public/ folder.
  image: "/images/profile.svg",
  imageAlt: "Portrait of Oluwatobi Ikuesan",

  email: "hello@example.com",
  resume: "",

  about: [
    "I am a software engineer and computer science student with a background in graphic design. That mix shapes how I work: I think about systems and structure, but I never lose sight of how a product looks and feels.",
    "My work spans web, mobile and AI: production web apps, an AI career platform and React Native apps that talk to hardware over Bluetooth. I enjoy turning messy, manual tasks into tools that are pleasant to use, and I am always learning something new along the way.",
  ],
};

export const socials: Social[] = [
  { label: "GitHub", href: "https://github.com/oluwatobiikuesan", icon: "github" },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/oluwatobiikuesan/", icon: "linkedin" },
  { label: "Email", href: `mailto:${profile.email}`, icon: "mail" },
];

export const skills: { group: string; items: string[] }[] = [
  { group: "Languages", items: ["Python", "Java", "JavaScript", "TypeScript", "Bash", "SQL", "HTML", "CSS"] },
  { group: "Databases", items: ["PostgreSQL", "MongoDB"] },
  { group: "Frontend & mobile", items: ["React", "React Native", "Tailwind CSS", "daisyUI", "Vite", "Responsive design"] },
  { group: "Backend & AI", items: ["Node.js", "Express", "REST APIs", "LLM APIs", "Bluetooth Low Energy"] },
  { group: "DevOps & tools", items: ["Docker", "Git", "GitHub", "GitHub Actions", "CI/CD", "Linux", "npm"] },
  { group: "Design", items: ["UI design", "Typography", "Graphic design", "Prototyping"] },
];

export const focus: Focus[] = [
  {
    title: "Software engineering",
    body: "Building reliable web and mobile apps, from the interface down to the API, with code that is easy to read and easy to change.",
  },
  {
    title: "Computer science",
    body: "Studying the fundamentals: data structures, algorithms and systems, and applying them to real problems.",
  },
  {
    title: "Graphic design",
    body: "Bringing a designer's eye to every product: layout, rhythm, type and the small details that make things feel finished.",
  },
];

export const projects: Project[] = [
  {
    title: "Arktively",
    summary: "A live web product, designed, built and shipped to production at arktively.com.",
    tags: ["Web app", "Production"],
    link: "https://arktively.com",
  },
  {
    title: "AllTheTools",
    summary: "A collection of handy online tools gathered in one place, built to be fast and simple to use.",
    tags: ["Web app", "Tools"],
    link: "https://allthetools.com",
  },
  {
    title: "Gradit",
    summary: "An AI career platform that helps people understand where they are and plan their next career move.",
    tags: ["AI", "Platform", "Careers"],
  },
  {
    title: "BLE Control System",
    org: "Deep Sym",
    summary: "A React Native app that connects to and controls hardware over Bluetooth Low Energy.",
    tags: ["React Native", "BLE", "Mobile"],
  },
  {
    title: "Swiftbot",
    summary: "A programmable robot project exploring movement, sensors and simple decision making.",
    tags: ["Java", "Robotics"],
  },
  {
    title: "Swiftbot: Mastermind",
    summary: "The classic code breaking game reimagined on the Swiftbot, with lights and buttons as the interface.",
    tags: ["Java", "Game logic"],
  },
  {
    title: "Hashtag Extractor",
    summary: "A small utility that pulls hashtags out of text and ranks them, handy for content and social analysis.",
    tags: ["Python", "Text processing"],
  },
  {
    title: "Local Email Sorter",
    summary: "Sorts and organises emails locally using simple rules, keeping inboxes tidy without sending data anywhere.",
    tags: ["Python", "Automation"],
  },
  {
    title: "Banking System",
    summary: "A console based banking system covering accounts, deposits, withdrawals and transaction history.",
    tags: ["Java", "OOP"],
  },
];

const pad = (n: number) => String(n).padStart(2, "0");

// Counts update automatically as projects and skills are added.
export const stats = [
  { label: "Projects", value: pad(projects.length) },
  { label: "Languages", value: pad(skills.find((s) => s.group === "Languages")?.items.length ?? 0) },
  { label: "Disciplines", value: pad(focus.length) },
];

export const navLinks = [
  { label: "About", to: "/#about" },
  { label: "Skills", to: "/#skills" },
  { label: "Work", to: "/#work" },
  { label: "Contact", to: "/#contact" },
  { label: "Ask AI", to: "/ai" },
];
