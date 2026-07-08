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
  Rocket,
  Users,
  Zap,
  TrendingUp,
  Star,
  Shield,
  Gauge,
  Target,
  MonitorSmartphone,
  FileEdit,
  Factory,
  UtensilsCrossed,
  Plane,
  Briefcase,
  Layout,
  RefreshCw,
  GaugeCircle,
} from "lucide-react";

import { FaXTwitter, FaGithub } from "react-icons/fa6";
import { BsLinkedin } from "react-icons/bs";
import { FaInstagram } from "react-icons/fa";

/* ============================================================
   LANDING PAGE CONSTANTS
   Data for /web-designing-company-bangalore landing page
   Adapted from the requested content strategy
   ============================================================ */

// ─── Navigation Links ────────────────────────────────────────

export const NAV_LINKS = [
  { label: "Services", href: "#services" },
  { label: "Portfolio", href: "#portfolio" },
  { label: "Technologies", href: "#technologies" },
  { label: "Industries", href: "#industries" },
  { label: "Process", href: "#process" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
];

// ─── Hero Stats ──────────────────────────────────────────────

export interface HeroStat {
  value: number;
  suffix: string;
  label: string;
}

export const HERO_STATS: HeroStat[] = [
  { value: 12, suffix: "+", label: "Years in Web Design" },
  { value: 2000, suffix: "+", label: "Projects Delivered" },
  { value: 30, suffix: "+", label: "Industries Served" },
  { value: 1, suffix: " Yr", label: "Free Support" },
];

// ─── Trust Section Industries ────────────────────────────────

export const TRUST_INDUSTRIES = [
  "Startups",
  "Healthcare",
  "Education",
  "Ecommerce",
  "IT Companies",
  "Manufacturing",
  "Real Estate",
  "SaaS",
  "Finance",
  "Travel",
];

// ─── Why Choose Us Cards ─────────────────────────────────────
// These are mapped to the Services mentioned in the JSON-LD

export interface WhyChooseUsCard {
  icon: LucideIcon;
  title: string;
  description: string;
}

export const WHY_CHOOSE_US_CARDS: WhyChooseUsCard[] = [
  {
    icon: Palette,
    title: "UI/UX Design",
    description:
      "We design intuitive, engaging, and beautiful user interfaces that guide visitors toward a clear action and reflect your brand identity perfectly.",
  },
  {
    icon: MonitorSmartphone,
    title: "Responsive Web Design",
    description:
      "Every website we build is mobile-first and fully responsive. We test across 20+ device sizes to ensure flawless experiences on phones, tablets, and desktops.",
  },
  {
    icon: ShoppingBag,
    title: "E-Commerce Web Design",
    description:
      "High-converting online stores built on WooCommerce, Shopify, and custom platforms, featuring secure payments, clean product pages, and optimized checkout flows.",
  },
  {
    icon: Layout,
    title: "CMS Based Web Design",
    description:
      "Intuitive Content Management Systems like WordPress let you update text, images, and pages effortlessly without touching a single line of code.",
  },
  {
    icon: RefreshCw,
    title: "Website Redesign",
    description:
      "Modernize your outdated site. We audit your current website, identify UX bottlenecks, and rebuild it for better performance and higher conversion rates.",
  },
  {
    icon: GaugeCircle,
    title: "Performance-Optimized Design",
    description:
      "Speed is non-negotiable. We optimize every asset and write clean code to ensure sub-second page load times that pass Google's Core Web Vitals.",
  },
];

// ─── Design Principles ──────────────────────────────────────

export interface DesignPrinciple {
  icon: LucideIcon;
  title: string;
  description: string;
}

export const DESIGN_PRINCIPLES: DesignPrinciple[] = [
  {
    icon: Zap,
    title: "Speed That Passes Google's Vitals",
    description:
      "Performance is not an afterthought — it is built-in. Every element is optimized for speed, ensuring your website loads instantly and ranks higher.",
  },
  {
    icon: Target,
    title: "Conversion-Focused Layouts",
    description:
      "Beautiful design means nothing without results. Every layout, color choice, and interaction is strategically crafted to turn visitors into customers.",
  },
  {
    icon: Search,
    title: "SEO Built In From Day One",
    description:
      "We build with proper heading structures, clean code, optimized meta tags, and image alt text. This gives your website the technical foundation to rank.",
  },
];

// ─── Process Steps ───────────────────────────────────────────

export interface LandingProcessStep {
  step: string;
  title: string;
  desc: string;
  icon: LucideIcon;
}

export const PROCESS_STEPS: LandingProcessStep[] = [
  {
    step: "01",
    title: "Discovery Call",
    desc: "We start with a free 30-minute consultation to understand your business goals, target audience, and specific requirements.",
    icon: Lightbulb,
  },
  {
    step: "02",
    title: "Proposal & Strategy",
    desc: "Within 2 business days, we provide a detailed project proposal, timeline, and strategy mapping out the user journey.",
    icon: PenTool,
  },
  {
    step: "03",
    title: "UI/UX Design",
    desc: "Our experienced designers create high-fidelity mockups bringing your brand to life with engaging web pages that reflect your identity.",
    icon: Palette,
  },
  {
    step: "04",
    title: "Development",
    desc: "We build your site with clean, semantic code that is responsive, accessible, and optimized for speed and SEO.",
    icon: Code,
  },
  {
    step: "05",
    title: "Launch & Support",
    desc: "We test across 20+ devices, launch your site flawlessly, and provide 30 days of free post-launch support and training.",
    icon: Rocket,
  },
];

// ─── Industries ──────────────────────────────────────────────

export interface LandingIndustry {
  icon: LucideIcon;
  label: string;
  description: string;
}

export const INDUSTRIES: LandingIndustry[] = [
  {
    icon: Heart,
    label: "Healthcare",
    description:
      "HIPAA-compliant healthcare websites, telemedicine platforms, and patient portals that improve patient engagement and streamline appointment booking.",
  },
  {
    icon: Building2,
    label: "Real Estate",
    description:
      "Property listing websites with advanced search, virtual tours, map integrations, and lead generation systems for real estate agents and developers.",
  },
  {
    icon: ShoppingCart,
    label: "Ecommerce",
    description:
      "High-converting online stores with secure payments, inventory management, product catalogs, and seamless checkout experiences.",
  },
  {
    icon: GraduationCap,
    label: "Education",
    description:
      "Interactive e-learning platforms, LMS portals, school websites, and educational apps designed to make online learning accessible and engaging.",
  },
  {
    icon: Factory,
    label: "Manufacturing",
    description:
      "Industrial websites with product catalogs, quote request systems, and B2B portals that showcase manufacturing capabilities and drive inquiries.",
  },
  {
    icon: Cloud,
    label: "SaaS & Enterprise",
    description:
      "Modern SaaS landing pages, enterprise software platforms, dashboards, and web applications with seamless onboarding flows.",
  },
  {
    icon: Landmark,
    label: "Finance & Fintech",
    description:
      "Secure financial service websites, banking portals, and fintech platforms with regulatory compliance and trust-building design elements.",
  },
  {
    icon: Briefcase,
    label: "Startups",
    description:
      "MVP websites, pitch-ready landing pages, and scalable web applications built to help startups validate ideas and attract investors quickly.",
  },
];

// ─── Technologies ────────────────────────────────────────────

export interface LandingTechnology {
  name: string;
  icon: string;
  invertDark?: boolean;
}

export interface LandingTechCategory {
  label: string;
  techs: LandingTechnology[];
}

export const TECH_CATEGORIES: LandingTechCategory[] = [
  {
    label: "Frontend",
    techs: [
      { name: "HTML5", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg" },
      { name: "CSS3", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg" },
      { name: "JavaScript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg" },
      { name: "TypeScript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg" },
      { name: "React", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg" },
      { name: "Next.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nextjs/nextjs-original.svg", invertDark: true },
      { name: "Tailwind CSS", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg" },
    ],
  },
  {
    label: "Backend",
    techs: [
      { name: "Node.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original-wordmark.svg" },
      { name: "Express", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/express/express-original.svg", invertDark: true },
    ],
  },
  {
    label: "Database",
    techs: [
      { name: "PostgreSQL", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postgresql/postgresql-original.svg" },
      { name: "MongoDB", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mongodb/mongodb-original.svg" },
      { name: "MySQL", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mysql/mysql-original.svg" },
    ],
  },
  {
    label: "CMS",
    techs: [
      { name: "WordPress", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/wordpress/wordpress-plain.svg", invertDark: true },
      { name: "Shopify", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/shopify/shopify-original.svg" },
    ],
  },
];

// ─── Case Studies ────────────────────────────────────────────

export interface CaseStudy {
  title: string;
  industry: string;
  description: string;
  image: string;
  results: { label: string; value: string }[];
}

export const CASE_STUDIES: CaseStudy[] = [
  {
    title: "HealthConnect Pro",
    industry: "Healthcare",
    description:
      "A comprehensive telemedicine platform with appointment scheduling, video consultations, and patient management for a leading Bangalore clinic.",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1200&auto=format&fit=crop",
    results: [
      { label: "Lead Increase", value: "+220%" },
      { label: "Page Speed", value: "3x Faster" },
      { label: "Lighthouse", value: "95+" },
    ],
  },
  {
    title: "ShopNest Commerce",
    industry: "Ecommerce",
    description:
      "A high-converting ecommerce storefront with advanced product filtering, secure payments, and a mobile-first shopping experience.",
    image: "https://images.unsplash.com/photo-1556740749-887f6717d7e4?q=80&w=1200&auto=format&fit=crop",
    results: [
      { label: "Conversion Rate", value: "+180%" },
      { label: "Bounce Rate", value: "-45%" },
      { label: "Lighthouse", value: "97+" },
    ],
  },
];

// ─── Testimonials ────────────────────────────────────────────

export interface LandingTestimonial {
  name: string;
  role: string;
  company: string;
  text: string;
  rating: number;
  image: string;
}

export const TESTIMONIALS: LandingTestimonial[] = [
  {
    name: "Rajesh Kumar",
    role: "Founder & CEO",
    company: "TechStartup.io",
    text: "Projextly transformed our outdated website into a stunning, high-performing platform that truly represents our brand. Our leads increased by 150% within the first month of launch. Their attention to detail, responsiveness, and design sensibility is unmatched. Highly recommended for any business in Bangalore looking for a world-class web design agency.",
    rating: 5,
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=200&auto=format&fit=crop",
  },
  {
    name: "Dr. Ananya Sharma",
    role: "Head of Digital",
    company: "MedCare Hospitals",
    text: "Working with Projextly on our hospital website and patient portal was an exceptional experience. They delivered a complex healthcare solution ahead of schedule with pixel-perfect design, HIPAA-compliant architecture, and seamless patient booking integration. Our online appointment bookings increased by 200%.",
    rating: 5,
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=200&auto=format&fit=crop",
  },
];

// ─── Blog Posts ──────────────────────────────────────────────

export interface LandingBlogPost {
  title: string;
  excerpt: string;
  category: string;
  date: string;
  readTime: string;
  image: string;
}

export const BLOG_POSTS: LandingBlogPost[] = [
  {
    title: "Why Every Bangalore Business Needs a Professional Website in 2026",
    excerpt:
      "Discover how a professionally designed website can transform your local Bangalore business, boost credibility, and drive more customers through your doors.",
    category: "Business",
    date: "Jul 2026",
    readTime: "5 min read",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=800&auto=format&fit=crop",
  },
  {
    title: "10 UI/UX Design Principles That Drive Conversion in 2026",
    excerpt:
      "Learn the design principles that top web design agencies use to create interfaces that convert visitors into paying customers consistently.",
    category: "Design",
    date: "Jun 2026",
    readTime: "7 min read",
    image: "https://images.unsplash.com/photo-1558655146-9f40138edfeb?q=80&w=800&auto=format&fit=crop",
  },
  {
    title: "SEO-First Web Architecture: Building for Google in 2026",
    excerpt:
      "A technical deep-dive into how to structure your Next.js website for maximum search engine visibility, performance, and organic traffic growth.",
    category: "SEO",
    date: "Jun 2026",
    readTime: "6 min read",
    image: "https://images.unsplash.com/photo-1432888498266-38ffec3eaf0a?q=80&w=800&auto=format&fit=crop",
  },
];

// ─── FAQ ─────────────────────────────────────────────────────

export interface FAQItem {
  question: string;
  answer: string;
}

export const FAQ_ITEMS: FAQItem[] = [
  {
    question: "How much does web design cost in Bangalore?",
    answer:
      "Web design costs in Bangalore typically range from Rs. 30,000 for a basic 5-page website to Rs. 2,00,000 or more for a fully custom e-commerce site. At Projextly, we provide a detailed project quote based on your specific requirements. Contact us for a free estimate.",
  },
  {
    question: "How long does it take to design a website?",
    answer:
      "A standard 5 to 10 page website takes 4 to 6 weeks from project kickoff to launch. E-commerce websites typically take 6 to 10 weeks. The timeline depends on content readiness and how quickly approvals are given.",
  },
  {
    question: "Do you design mobile-friendly websites?",
    answer:
      "Yes. Every website we design is mobile-first and fully responsive. We test across 20+ device sizes including phones, tablets, and desktops before launch. Mobile usability is checked against Google's standards.",
  },
  {
    question: "Can I update my website content after it is launched?",
    answer:
      "Yes. We build most websites on a Content Management System (CMS) like WordPress so you can update text, images, and pages without technical knowledge. We also provide a brief training session after launch.",
  },
  {
    question: "Do your websites rank on Google?",
    answer:
      "We build every website with on-page SEO built in: proper heading structure, fast load times, mobile optimization, clean code, meta tags, and image alt text. This gives your website the technical foundation to rank. Ongoing SEO (content and link building) is a separate service we offer.",
  },
  {
    question: "Do you provide website maintenance after launch?",
    answer:
      "Yes. Every project includes 30 days of free post-launch support. After that, we offer affordable monthly maintenance plans that cover security updates, content changes, performance monitoring, and backups.",
  },
  {
    question: "Do you redesign existing websites?",
    answer:
      "Yes. Website redesign is one of our most common services. We audit your current site, identify what is working and what is not, and redesign it with a focus on better performance, modern design, and improved conversion rates.",
  },
  {
    question: "Can you design websites for e-commerce businesses?",
    answer:
      "Yes. We design e-commerce websites on WooCommerce, Shopify, and Magento. Our ecommerce designs focus on clean product pages, easy navigation, and checkout flows that reduce cart abandonment.",
  },
  {
    question: "Are you a Google Partner company?",
    answer:
      "Yes. Projextly is a certified Google Partner. This means our team meets Google's standards for performance and expertise in digital solutions including web design, SEO, and digital advertising.",
  },
  {
    question: "Do you work with clients outside Bangalore?",
    answer:
      "Yes. While we are based in Bangalore, we work with clients across India and internationally. Our project process is designed to work remotely with regular video calls, shared design reviews, and project management tools.",
  },
];

// ─── Footer Data ─────────────────────────────────────────────

export interface SocialLink {
  label: string;
  ariaLabel: string;
  href: string;
  icon: React.ComponentType<{ className?: string }>;
}

export const SOCIAL_LINKS: SocialLink[] = [
  {
    label: "LinkedIn",
    ariaLabel: "Connect on LinkedIn",
    href: "https://linkedin.com/company/projextly",
    icon: BsLinkedin,
  },
  {
    label: "Instagram",
    ariaLabel: "Follow us on Instagram",
    href: "https://instagram.com/projextly",
    icon: FaInstagram,
  },
  {
    label: "GitHub",
    ariaLabel: "View our GitHub",
    href: "https://github.com/projextly",
    icon: FaGithub,
  },
  {
    label: "X",
    ariaLabel: "Follow us on X (Twitter)",
    href: "https://x.com/projextly",
    icon: FaXTwitter,
  },
];

export interface FooterLink {
  label: string;
  href: string;
}

export const FOOTER_COMPANY: FooterLink[] = [
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Portfolio", href: "#portfolio" },
  { label: "Blog", href: "#blog" },
];

export const FOOTER_QUICK_LINKS: FooterLink[] = [
  { label: "Industries", href: "#industries" },
  { label: "Technologies", href: "#technologies" },
  { label: "Privacy Policy", href: "/privacy" },
  { label: "Terms of Service", href: "/terms" },
];
