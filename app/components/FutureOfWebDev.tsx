"use client";

import { motion } from "framer-motion";

const features = [
  {
    letter: "AI",
    title: "AI/ML-Driven Smart Features",
    description:
      "We integrate AI chatbots, smart recommendation engines, and adaptive content features that learn from user behavior to personalize interactions, automate support, and improve engagement, all in real-time.",
  },
  {
    letter: "HC",
    title: "Headless CMS & Decoupled Frontends",
    description:
      "Using platforms like Strapi, Sanity, and Contentful, we create flexible content systems that pair with frontend frameworks like Next.js, Nuxt.js, or SvelteKit for lightning-fast performance and full design freedom.",
  },
  {
    letter: "PW",
    title: "Progressive Web Apps (PWAs)",
    description:
      "With PWA technology, we deliver smooth, app-like experiences that work seamlessly across devices even offline helping you retain users and improve reach.",
  },
  {
    letter: "MF",
    title: "Mobile-First Development & Design",
    description:
      "By prioritizing mobile-first design, we create fully responsive interfaces that are easy to navigate and built to convert across all platforms.",
  },
  {
    letter: "SF",
    title: "Security-First, Privacy-Compliant Dev",
    description:
      "With built-in data protection, GDPR-ready configurations, and enterprise-grade security, we help you build trust while staying compliant in a privacy-focused digital world.",
  },
];

function LetterMark({ letter }: { letter: string }) {
  return (
    <span
      aria-hidden="true"
      className="inline-block select-none bg-clip-text text-5xl sm:text-6xl font-display font-black leading-none text-transparent tracking-tighter"
      style={{
        backgroundImage: "linear-gradient(135deg, #10B981 0%, #34D399 100%)",
      }}
    >
      {letter}
    </span>
  );
}

type FeatureCardProps = {
  letter: string;
  title: string;
  description: string;
  index: number;
};

function FeatureCard({ letter, title, description, index }: FeatureCardProps) {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className="glass-panel p-8 sm:p-10 border border-white/5 bg-white/2 hover:bg-white/4 transition-colors"
    >
      <div className="flex flex-col gap-6 sm:flex-row sm:items-start sm:gap-8">
        <div className="w-16 shrink-0 sm:w-20">
          <LetterMark letter={letter} />
        </div>
        <div>
          <h3 className="text-xl font-display font-semibold text-white sm:text-2xl mb-4">
            {title}
          </h3>
          <p className="max-w-xl text-base leading-relaxed text-slate-400 font-medium">
            {description}
          </p>
        </div>
      </div>
    </motion.div>
  );
}

export default function FutureOfWebDev() {
  return (
    <section className="bg-[#030712] py-32 relative overflow-hidden">
      <div className="absolute top-1/2 left-0 w-full h-125 bg-emerald-highlight/5 rounded-full blur-[120px] pointer-events-none mix-blend-screen -translate-y-1/2" />
      
      <div className="mx-auto px-6 lg:px-10 max-w-7xl relative z-10">
        
        {/* Heading + intro */}
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-[1fr_auto_1.2fr] items-start mb-24">
          <motion.h2 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6 }}
            className="max-w-xl text-4xl sm:text-5xl lg:text-6xl font-display font-bold leading-[1.1] text-white tracking-tight"
          >
            The Future of Web Development – <span className="text-emerald-highlight">Delivered by Projextly.</span>
          </motion.h2>

          <div className="hidden pt-4 lg:block">
            <span className="block h-px w-16 bg-white/20" />
          </div>

          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="max-w-2xl"
          >
            <span className="mb-8 block h-px w-16 bg-white/20 lg:hidden" />
            <p className="text-lg leading-relaxed text-slate-400 font-medium mb-6">
              Choosing the right eCommerce platform is very essential for
              your online success. Every industry has unique requirements,
              whether it&apos;s managing large inventories, handling secure
              transactions, or offering personalized shopping experiences.
            </p>
            <p className="text-lg leading-relaxed text-slate-300 font-medium">
              At Projextly, we help you assess platforms like WooCommerce, Magento, Shopify, and modern headless solutions to build future-ready digital experiences.
            </p>
          </motion.div>
        </div>

        {/* Feature grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.slice(0, 3).map((feat, i) => (
            <FeatureCard key={feat.title} {...feat} index={i} />
          ))}
          {features.slice(3).map((feat, i) => (
            <div key={feat.title} className="lg:col-span-1.5 md:col-span-1">
              <FeatureCard {...feat} index={i + 3} />
            </div>
          ))}
        </div>
        
      </div>
    </section>
  );
}