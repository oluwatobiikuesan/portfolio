// All site content lives here. Edit this file to update the portfolio.

export type Social = {
  label: string;
  href: string;
  icon: "github" | "linkedin" | "mail";
};

export type Project = {
  title: string;
  summary: string;
  tags: string[];
  link?: string;
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
  available: true,

  // Replace this file with your own photo (a 4:5 portrait works best),
  // or point this path at a new file inside the public/ folder.
  image: "/images/profile.svg",
  imageAlt: "Portrait of Oluwatobi Ikuesan",

  email: "hello@example.com",
  resume: "",

  about: [
    "I am a software engineer and computer science student with a background in graphic design. That mix shapes how I work: I think about systems and structure, but I never lose sight of how a product looks and feels.",
    "Most of my work sits where the browser meets the backend. I enjoy turning messy, manual tasks into small tools that are pleasant to use, and I am always learning something new along the way.",
  ],
};

export const socials: Social[] = [
  { label: "GitHub", href: "https://github.com/oluwatobiikuesan", icon: "github" },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/oluwatobiikuesan/", icon: "linkedin" },
  { label: "Email", href: `mailto:${profile.email}`, icon: "mail" },
];

export const stats = [
  { label: "Projects shipped", value: "05" },
  { label: "Languages", value: "05" },
  { label: "Disciplines", value: "03" },
];

export const skills: { group: string; items: string[] }[] = [
  { group: "Languages", items: ["Java", "JavaScript", "TypeScript", "Python", "HTML", "CSS"] },
  { group: "Frontend", items: ["React", "Tailwind CSS", "daisyUI", "Vite", "Responsive design"] },
  { group: "Backend & tools", items: ["Node.js", "Express", "REST APIs", "Git", "GitHub"] },
  { group: "Design", items: ["UI design", "Typography", "Graphic design", "Prototyping"] },
];

export const focus: Focus[] = [
  {
    title: "Software engineering",
    body: "Building reliable web apps and tools, from the interface down to the API, with code that is easy to read and easy to change.",
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

export const navLinks = [
  { label: "About", to: "/#about" },
  { label: "Skills", to: "/#skills" },
  { label: "Work", to: "/#work" },
  { label: "Contact", to: "/#contact" },
  { label: "Ask AI", to: "/ai" },
];
