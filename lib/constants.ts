import type { LucideIcon } from "lucide-react";
import {
  Code2,
  Palette,
  ShoppingBag,
  Search,
  Smartphone,
  Settings,
  Heart,
  Building2,
  GraduationCap,
  ShoppingCart,
  Cloud,
  Landmark,
  Lightbulb,
  PenTool,
  Code,
  TestTube2,
  Rocket,
  Users,
  Trophy,
  Zap,
  TrendingUp,
  Star,
} from "lucide-react";

import { FaXTwitter } from "react-icons/fa6";
import { BsLinkedin } from "react-icons/bs";
import { FaInstagram } from "react-icons/fa";

/* ============================================================
   SITE-WIDE CONSTANTS
   All hardcoded data extracted for single-source-of-truth
   ============================================================ */

// ─── Site Metadata ───────────────────────────────────────────

export const SITE_URL = "https://projextly.com";
export const SITE_NAME = "Projextly";
export const SITE_DESCRIPTION =
  "Projextly is a premium web development agency in Bengaluru, India. We design and build stunning websites, web applications, and digital products with cutting-edge UI, blazing performance, and SEO-first architecture.";

// ─── Services ────────────────────────────────────────────────

export interface Service {
  icon: LucideIcon;
  title: string;
  description: string;
}

export const SERVICES: Service[] = [
  {
    icon: Code2,
    title: "Web Development",
    description:
      "Custom, high-performance websites and web applications built with React, Next.js, and modern frameworks for seamless digital experiences.",
  },
  {
    icon: Palette,
    title: "UI/UX Design",
    description:
      "Beautiful, intuitive interfaces designed with user-centric methodologies that elevate your brand and delight your customers.",
  },
  {
    icon: ShoppingBag,
    title: "E-Commerce Solutions",
    description:
      "Scalable online stores with secure payment integration, inventory management, and conversion-optimized checkout flows.",
  },
  {
    icon: Search,
    title: "SEO & Performance",
    description:
      "Data-driven SEO strategies and performance optimization that boost your search rankings and drive organic growth.",
  },
  {
    icon: Smartphone,
    title: "Mobile-First Design",
    description:
      "Responsive, mobile-optimized experiences that look and perform beautifully across every device and screen size.",
  },
  {
    icon: Settings,
    title: "Custom Software",
    description:
      "Tailored software solutions and integrations built to automate workflows, streamline operations, and scale your business.",
  },
];

// ─── Industries ──────────────────────────────────────────────

export interface Industry {
  icon: LucideIcon;
  label: string;
}

export const INDUSTRIES: Industry[] = [
  { icon: Heart, label: "Healthcare" },
  { icon: Building2, label: "Real Estate" },
  { icon: GraduationCap, label: "Education" },
  { icon: ShoppingCart, label: "E-Commerce" },
  { icon: Cloud, label: "Cloud / SaaS" },
  { icon: Landmark, label: "FinTech" },
];

// ─── Process Steps ───────────────────────────────────────────

export interface ProcessStep {
  step: string;
  title: string;
  desc: string;
  icon: LucideIcon;
}

export const PROCESS_STEPS: ProcessStep[] = [
  {
    step: "01",
    title: "Discussion",
    desc: "In order to gather website requirements, we schedule a detailed interaction with the client.",
    icon: Lightbulb,
  },
  {
    step: "02",
    title: "Sketch",
    desc: "A layout is designed as a prototype to meet the specified requirements of the client.",
    icon: PenTool,
  },
  {
    step: "03",
    title: "Approval",
    desc: "A final layout is designed based on the prototype and will be sent for client approval.",
    icon: Code,
  },
  {
    step: "04",
    title: "Web Design",
    desc: "We ensure that the design is in line with the requirements and specifications provided.",
    icon: TestTube2,
  },
  {
    step: "05",
    title: "Graphic Design",
    desc: "Creating visually appealing infographics for vibrant website for enhanced UI.",
    icon: Rocket,
  },
  {
    step: "06",
    title: "Optimization",
    desc: "Improving the loading speed of a website through optimization for enhanced UX.",
    icon: Rocket,
  },
  {
    step: "07",
    title: "Testing",
    desc: "We perform testing to check software functions and compatibility across platforms.",
    icon: Rocket,
  },
  {
    step: "08",
    title: "Hosting",
    desc: "We offer secure hosting and installation of SSL certificates for websites.",
    icon: Rocket,
  },
];

// ─── Portfolio / Projects ────────────────────────────────────

export interface Project {
  title: string;
  category: string;
  description: string;
  tech: string[];
  thumnail: string;
}

export const PROJECTS: Project[] = [
  {
    title: "FinFlow Dashboard",
    category: "Web Application",
    description:
      "A comprehensive financial analytics dashboard with real-time data visualization, portfolio tracking, and AI-powered insights.",
    tech: ["Next.js", "TypeScript", "PostgreSQL", "Tailwind"],
    thumnail: "https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?q=80&w=2013&auto=format&fit=crop",
  },
  {
    title: "ShopVerse",
    category: "E-Commerce",
    description:
      "A modern e-commerce platform with seamless checkout, inventory management, and multi-vendor support for 10,000+ products.",
    tech: ["React", "Node.js", "MongoDB", "Stripe"],
    thumnail: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?q=80&w=1974&auto=format&fit=crop",
  },
  {
    title: "MediConnect",
    category: "Healthcare",
    description:
      "A healthcare appointment and telemedicine platform connecting patients with specialists across Bengaluru and beyond.",
    tech: ["Next.js", "Supabase", "WebRTC", "Tailwind"],
    thumnail: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop",
  },
  {
    title: "MediConnect",
    category: "Healthcare",
    description:
      "A healthcare appointment and telemedicine platform connecting patients with specialists across Bengaluru and beyond.",
    tech: ["Next.js", "Supabase", "WebRTC", "Tailwind"],
    thumnail: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070&auto=format&fit=crop",
  },
];

// ─── Testimonials ────────────────────────────────────────────

export interface Testimonial {
  name: string;
  role: string;
  company: string;
  text: string;
  rating: number;
}

export const TESTIMONIALS: Testimonial[] = [
  {
    name: "Rajesh Kumar",
    role: "Founder",
    company: "TechStartup.io",
    text: "Projextly transformed our outdated website into a stunning, high-performing platform. Our conversions increased by 150% within the first month. Their attention to detail is unmatched.",
    rating: 5,
  },
  {
    name: "Ananya Sharma",
    role: "Head of Product",
    company: "FinServe India",
    text: "Working with Projextly was an exceptional experience. They delivered a complex financial dashboard ahead of schedule with pixel-perfect design and seamless performance.",
    rating: 5,
  },
  {
    name: "Vikram Patel",
    role: "CEO",
    company: "RetailMax",
    text: "The e-commerce platform Projextly built for us handles thousands of daily transactions flawlessly. Their technical expertise and commitment to quality are truly world-class.",
    rating: 5,
  },
];

// ─── FAQ ─────────────────────────────────────────────────────

export interface FAQItem {
  question: string;
  answer: string;
}

export const FAQ_ITEMS: FAQItem[] = [
  {
    question: "What technologies do you use?",
    answer:
      "We specialize in React, Next.js, TypeScript, Node.js, and Tailwind CSS. We also work with databases like PostgreSQL and MongoDB, and deploy on platforms like Vercel and AWS.",
  },
  {
    question: "How long does a typical project take?",
    answer:
      "A standard website takes 2-4 weeks, while complex web applications can take 6-12 weeks depending on scope. We provide detailed timelines during our initial consultation.",
  },
  {
    question: "Do you offer ongoing support and maintenance?",
    answer:
      "Yes! All our packages include post-launch support. We also offer monthly maintenance plans for updates, security patches, performance monitoring, and feature additions.",
  },
  {
    question: "Can you work with clients outside Bengaluru?",
    answer:
      "Absolutely. While we are based in Bengaluru, we work with clients across India and internationally. We use modern collaboration tools to ensure seamless communication regardless of location.",
  },
  {
    question: "What is your pricing model?",
    answer:
      "We offer both fixed-price packages and custom quotes based on project scope. Contact us for a free consultation and we will provide a detailed proposal tailored to your needs and budget.",
  },
];

// ─── Blog Posts ──────────────────────────────────────────────

export interface BlogPost {
  title: string;
  excerpt: string;
  category: string;
  date: string;
  readTime: string;
}

export const BLOG_POSTS: BlogPost[] = [
  {
    title: "Why Next.js Is the Future of Web Development in 2026",
    excerpt:
      "Explore how Next.js is revolutionizing web development with its hybrid rendering, edge functions, and unmatched developer experience.",
    category: "Engineering",
    date: "Jun 2026",
    readTime: "5 min read",
  },
  {
    title: "10 UI/UX Principles That Drive Conversion",
    excerpt:
      "Learn the design principles that top agencies use to create interfaces that convert visitors into customers consistently.",
    category: "Design",
    date: "Jun 2026",
    readTime: "7 min read",
  },
  {
    title: "SEO-First Architecture: Building for Google in 2026",
    excerpt:
      "A technical deep-dive into how to structure your Next.js application for maximum search engine visibility and performance.",
    category: "SEO",
    date: "May 2026",
    readTime: "6 min read",
  },
];

// ─── Clients ─────────────────────────────────────────────────

export interface Client {
  name: string;
  logo: string;
}

export const CLIENTS: Client[] = [
  { name: "Supperb", logo: "/client/supperb.png" },
  { name: "Sakara News", logo: "/client/sakara-news.png" },
  { name: "Kannada Suddi", logo: "/client/kannada-suddi.png" },
  // { name: "UrbanEdge", logo: "/logos/urban-edge.png" },
  // { name: "PayWise", logo: "/logos/pay-wise.png" },
  // { name: "EduSpark", logo: "/logos/edu-spark.png" },
  // { name: "CloudBase", logo: "/logos/cloud-base.png" },
  // { name: "StyleHQ", logo: "/logos/style-hq.png" },
];

// ─── Stats ───────────────────────────────────────────────────

export interface Stat {
  value: string;
  label: string;
  icon: LucideIcon;
}

export const STATS: Stat[] = [
  { value: "50+", label: "Projects Completed", icon: Trophy },
  { value: "30+", label: "Happy Clients", icon: Users },
  { value: "99%", label: "Client Satisfaction", icon: Star },
  { value: "3mo", label: "Rapid Growth", icon: Zap },
];

// ─── Pricing / Custom Solutions ──────────────────────────────

export interface PricingPlan {
  tier: string;
  subtitle: string;
  price: string;
  features: string[];
  cta: string;
  highlight: boolean;
}

export const PRICING_PLANS: PricingPlan[] = [
  {
    tier: "Starter",
    subtitle: "For small businesses & MVPs",
    price: "₹25,000+",
    features: [
      "Custom responsive website",
      "Up to 5 pages",
      "Basic SEO setup",
      "Contact form integration",
      "2 weeks delivery",
    ],
    cta: "Get Started",
    highlight: false,
  },
  {
    tier: "Professional",
    subtitle: "For growing businesses",
    price: "₹75,000+",
    features: [
      "Custom web application",
      "Up to 15 pages",
      "Advanced SEO & analytics",
      "CMS integration",
      "Payment gateway setup",
      "4 weeks delivery",
    ],
    cta: "Most Popular →",
    highlight: true,
  },
  {
    tier: "Enterprise",
    subtitle: "For large-scale projects",
    price: "₹2,00,000+",
    features: [
      "Full-stack custom software",
      "Unlimited pages & features",
      "Performance optimization",
      "Dedicated project manager",
      "Priority support (24/7)",
      "Custom timeline",
    ],
    cta: "Contact Us",
    highlight: false,
  },
];

// ─── Career Positions ────────────────────────────────────────

export interface JobPosition {
  title: string;
  dept: string;
  location: string;
  type: string;
}

export const JOB_POSITIONS: JobPosition[] = [
  {
    title: "Senior React Developer",
    dept: "Engineering",
    location: "Bengaluru / Remote",
    type: "Full-time",
  },
  {
    title: "UI/UX Designer",
    dept: "Design",
    location: "Bengaluru",
    type: "Full-time",
  },
  {
    title: "Full-Stack Intern",
    dept: "Engineering",
    location: "Remote",
    type: "Internship",
  },
];

// ─── Career Benefits ─────────────────────────────────────────

export interface Benefit {
  icon: LucideIcon;
  title: string;
  desc: string;
}

export const BENEFITS: Benefit[] = [
  {
    icon: Zap,
    title: "Fast-Paced Growth",
    desc: "Work on real client projects from day one. Learn, build, and ship products that impact thousands of users.",
  },
  {
    icon: Users,
    title: "Collaborative Culture",
    desc: "Join a tight-knit team of passionate creators who value open communication, mentorship, and shared success.",
  },
  {
    icon: TrendingUp,
    title: "Career Development",
    desc: "Continuous learning opportunities, conference sponsorships, and clear pathways for career progression.",
  },
];

// ─── Tech Stack ──────────────────────────────────────────────

export interface Technology {
  name: string;
  color: string;
}

export interface TechCategory {
  label: string;
  techs: Technology[];
}

export const TECH_CATEGORIES: TechCategory[] = [
  {
    label: "Frontend",
    techs: [
      { name: "React", color: "from-cyan-100 to-blue-50 text-blue-600" },
      { name: "Next.js", color: "from-gray-200 to-gray-100 text-gray-700" },
      { name: "TypeScript", color: "from-blue-100 to-blue-50 text-blue-700" },
      {
        name: "Tailwind CSS",
        color: "from-teal-100 to-teal-50 text-teal-700",
      },
    ],
  },
  {
    label: "Backend",
    techs: [
      {
        name: "Node.js",
        color: "from-green-100 to-emerald-50 text-emerald-700",
      },
      { name: "Express", color: "from-gray-200 to-gray-100 text-gray-700" },
      { name: "Python", color: "from-yellow-100 to-blue-50 text-blue-700" },
      { name: "REST APIs", color: "from-orange-100 to-red-50 text-red-600" },
    ],
  },
  {
    label: "Database",
    techs: [
      {
        name: "PostgreSQL",
        color: "from-blue-100 to-indigo-50 text-indigo-700",
      },
      { name: "MongoDB", color: "from-green-100 to-green-50 text-green-700" },
      { name: "Redis", color: "from-red-100 to-red-50 text-red-700" },
      {
        name: "Supabase",
        color: "from-emerald-100 to-cyan-50 text-teal-700",
      },
    ],
  },
  {
    label: "DevOps",
    techs: [
      { name: "Vercel", color: "from-gray-200 to-gray-100 text-gray-700" },
      { name: "AWS", color: "from-orange-100 to-yellow-50 text-orange-700" },
      { name: "Docker", color: "from-blue-100 to-cyan-50 text-cyan-700" },
      { name: "GitHub", color: "from-gray-200 to-gray-100 text-gray-800" },
    ],
  },
];

// ─── WhoAreWe Bullets ────────────────────────────────────────

export const ABOUT_BULLETS: string[] = [
  "Custom websites & web apps built with React & Next.js",
  "Performance-optimized, SEO-first architecture",
  "End-to-end project management & dedicated support",
];

// ─── Footer Data ─────────────────────────────────────────────

export interface SocialLink {
  label: string;
  ariaLabel: string;
  href: string;
  icon: React.ComponentType;
}

export const SOCIAL_LINKS: SocialLink[] = [
  {
    label: "Instagram",
    ariaLabel: "Follow us on Instagram",
    href: "https://instagram.com/projextly",
    icon: FaInstagram,
  }, 
  {
    label: "X",
    ariaLabel: "Follow us on X (Twitter)",
    href: "https://x.com/projextly",
    icon: FaXTwitter,
  }, 
  {
    label: "LinkedIn",
    ariaLabel: "Connect on LinkedIn",
    href: "https://linkedin.com/company/projextly",
    icon: BsLinkedin,
  },
];

export interface FooterLink {
  label: string;
  href: string;
}

export const FOOTER_SERVICES: FooterLink[] = [
  { label: "Web Development", href: "/services" },
  { label: "UI/UX Design", href: "/services" },
  { label: "E-Commerce", href: "/services" },
  { label: "SEO & Performance", href: "/services" },
  { label: "Mobile-First Design", href: "/services" },
];

export const FOOTER_COMPANY: FooterLink[] = [
  { label: "Home", href: "/" },
  { label: "The Company", href: "/company" },
  { label: "Portfolio", href: "/portfolio" },
  { label: "Careers", href: "/careers" },
  { label: "Contact", href: "/contact" },
];
