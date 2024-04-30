import { SidebarNavItem, SiteConfig } from "types";
import { env } from "@/env.mjs";

const site_url = env.NEXT_PUBLIC_APP_URL;

export const siteConfig: SiteConfig = {
  name: "Collabur",
  description:
    "Empower your teams to create and publish web apps effortlessly, using bespoke, AI-generated design systems, generative-UI, and no-code tooling.",
  url: site_url,
  ogImage: `${site_url}/og.jpg`,
  links: {
    twitter: "https://twitter.com/collabur",
    github: "https://github.com/collabur",
  },
  mailSupport: "support@collabur.com",
};

export const footerLinks: SidebarNavItem[] = [
  {
    title: "Company",
    items: [
      { title: "About", href: "#" },
      { title: "Enterprise", href: "#" },
      { title: "Partners", href: "#" },
      { title: "Jobs", href: "#" },
    ],
  },
  {
    title: "Product",
    items: [
      { title: "Design Systems", href: "#" },
      { title: "Generative UI", href: "#" },
      { title: "No Code Editor", href: "#" },
      { title: "Case Studies", href: "#" },
      { title: "Roadmap", href: "#" },
    ],
  },
  {
    title: "Docs",
    items: [
      { title: "Getting started", href: "#" },
      { title: "Consuming DS Components", href: "#" },
      { title: "DS Management", href: "#" },
      { title: "Deploying apps", href: "#" },
      { title: "API Reference", href: "#" },
    ],
  },
];
