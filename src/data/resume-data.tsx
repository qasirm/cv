import {
  AmbitLogo,
  BarepapersLogo,
  BimLogo,
  CDGOLogo,
  ClevertechLogo,
  ConsultlyLogo,
  EvercastLogo,
  Howdy,
  JarockiMeLogo,
  JojoMobileLogo,
  Minimal,
  MobileVikingsLogo,
  MonitoLogo,
  NSNLogo,
  ParabolLogo,
  TastyCloudLogo,
  YearProgressLogo,
} from "@/images/logos";
import { GitHubIcon, LinkedInIcon, XIcon } from "@/components/icons";

export const RESUME_DATA = {
  name: "Qasir Morton",
  initials: "QM",
  location: "Los Angeles, CA",
  about:
    "Full Stack Engineer focused on building products with extra attention to detail",
  summary:
    "As a Full Stack Engineer, I have successfully taken multiple products from 0 to 1. I lead teams effectively, ensuring an environment where people can do their best work. Currently, I work mostly with TypeScript, React, Node.js, and GraphQL. I have over 8 years of experience in working remotely with companies all around the world.",
  avatarUrl: "https://avatars.githubusercontent.com/u/1017620?v=4",
  personalWebsiteUrl: "https://astral.framer.website/",
  contact: {
    email: "harveymo@usc.edu",
    tel: "+3462207921",
    social: [
      {
        name: "GitHub",
        url: "https://github.com/qasirm",
        icon: GitHubIcon,
      },
      {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/qasirmorton/",
        icon: LinkedInIcon,
      },
    ],
  },
  education: [
    {
      school: "University of Southern California",
      degree:
        "Bachelor's Degree in Business Administration and Computer Programming",
      start: "2020",
      end: "2024",
    },
  ],
  work: [
    {
      company: "KWILL Advisors",
      link: "https://kwilladvisors.com/",
      title: "Full Stack Developer",
      logo: ParabolLogo,
      start: "2021",
      end: "2024",
      description:
        "Developed a HIPAA-compliant full-stack application with Next.js, managing 500+ orders, built 11 websites, and led a data integration project to streamline data warehousing and automation.",
    },
    {
      company: "PwC",
      link: "https://www.pwc.com/us/en.html",
      badges: ["Remote"],
      title: "Cloud & Digital Analyst",
      logo: ClevertechLogo,
      start: "2015",
      end: "2021",
      description:
        "Built handbook in ADO wiki, doubling the team's close rate, introduced the RICE framework to halve backlog size, and integrated pull requests into the wiki.",
    },
    {
      company: "Astral",
      link: "https://astral.framer.website/",
      badges: [],
      title: "Founder",
      logo: JojoMobileLogo,
      start: "2012",
      end: "2015",
      description:
        "Astral is a design and technology studio focused on crafting digital experiences for brands, starting from concept discovery, through strategic development, to launching visually dynamic and interactive websites and web apps.",
    },
  ],
  skills: [
    "JavaScript",
    "TypeScript",
    "React/Next.js/Remix",
    "Node.js",
    "GraphQL",
    "Relay",
    "WebRTC",
  ],
  projects: [
    {
      title: "Solari Splash Page",
      techStack: ["Side Project", "JavaScript", "React"],
      description:
        "A small splash page modeled after a split-flap display for my MIL",
      logo: ConsultlyLogo,
      link: {
        label: "sinem-gamma",
        href: "https://sinem-gamma.vercel.app/",
      },
    },
    {
      title: "NextLang",
      techStack: ["Side Project", "TypeScript", "Next.js"],
      description: "Language Learning Application powered by ChatGPT",
      logo: AmbitLogo,
    },
    {
      title: "Issue Tracker",
      techStack: ["Side Project", "TypeScript", "Next.js"],
      description:
        "Full-stack issue tracker and dashboard using Next.js, Prisma, NextAuth, and MYSQL",
      logo: BimLogo,
    },
    {
      title: "Game Hub",
      techStack: ["Side Project", "TypeScript", "React"],
      description: "Video game repository using Rawg.io API",
      logo: CDGOLogo,
      link: {
        label: "sinem-gamma",
        href: "https://game-hub-seven-ashen.vercel.app/",
      },
    },
  ],
} as const;
