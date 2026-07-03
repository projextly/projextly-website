"use client";

import React from "react";

/**
 * FutureOfWebDev
 * A features section: heading + intro copy, followed by a 3-column / 2-column
 * grid of feature cards, each with a large decorative "letter" mark, a title,
 * and a description. Recreates the layout in the provided screenshot.
 *
 * Usage:
 *   import FutureOfWebDev from "@/components/FutureOfWebDev";
 *   <FutureOfWebDev />
 */

const features = [
  {
    letter: "A",
    title: "AI/ML-Driven Smart Features",
    description:
      "We integrate AI chatbots, smart recommendation engines, and adaptive content features that learn from user behavior to personalize interactions, automate support, and improve engagement, all in real-time.",
  },
  {
    letter: "H",
    title: "Headless CMS & Decoupled Frontends",
    description:
      "Using platforms like Strapi, Sanity, and Contentful, we create flexible content systems that pair with frontend frameworks like Next.js, Nuxt.js, or SvelteKit for lightning-fast performance and full design freedom.",
  },
  {
    letter: "P",
    title: "Progressive Web Apps (PWAs)",
    description:
      "With PWA technology, we deliver smooth, app-like experiences that work seamlessly across devices even offline helping you retain users and improve reach.",
  },
  {
    letter: "M",
    title: "Mobile-First Development & Design",
    description:
      "By prioritizing mobile-first design, we create fully responsive interfaces that are easy to navigate and built to convert across all platforms.",
  },
  {
    letter: "E",
    title: "Security-First, Privacy-Compliant Dev",
    description:
      "With built-in data protection, GDPR-ready configurations, and enterprise-grade security, we help you build trust while staying compliant in a privacy-focused digital world.",
  },
];

function LetterMark({ letter }) {
  // Decorative oversized letter with a subtle textured/gradient fill,
  // mirroring the collage-style letters in the reference design.
  return (
    <span
      aria-hidden="true"
      className="inline-block select-none bg-clip-text text-6xl font-extrabold leading-none text-transparent sm:text-7xl"
      style={{
        backgroundImage:
          "linear-gradient(135deg, #1a1a1a 0%, #4a4a4a 35%, #8fb3c9 55%, #d98f7a 75%, #1a1a1a 100%)",
        backgroundSize: "200% 200%",
      }}
    >
      {letter}
    </span>
  );
}

function FeatureCard({ letter, title, description, className = "" }) {
  return (
    <div className={`px-6 py-10 sm:px-10 lg:px-12 ${className}`}>
      <div className="flex flex-col gap-6 sm:flex-row sm:items-start sm:gap-8">
        <div className="w-16 flex-shrink-0 sm:w-20">
          <LetterMark letter={letter} />
        </div>
        <div>
          <h3 className="text-xl font-medium text-neutral-900 sm:text-2xl">
            {title}
          </h3>
        </div>
      </div>
      <p className="mt-6 max-w-xl text-[15px] leading-relaxed text-neutral-600">
        {description}
      </p>
    </div>
  );
}

export default function FutureOfWebDev() {
  const [first, second, third, fourth, fifth] = features;

  return (
    <section className="bg-[#f7f8fa] py-20">
      <div className="mx-auto px-6 lg:px-10">
        {/* Heading + intro */}
        <div className="max-w-7xl mx-auto grid grid-cols-1 gap-8 lg:grid-cols-[1fr_auto_1.4fr]">
          <h2 className="max-w-md text-4xl font-bold leading-tight text-neutral-900 sm:text-">
            The Future of Web Development – Delivered by Projextly
          </h2>

          <div className="hidden pt-4 lg:block">
            <span className="block h-px w-14 bg-neutral-400" />
          </div>

          <div className="max-w-2xl">
            <span className="mb-6 block h-px w-14 bg-neutral-400 lg:hidden" />
            <p className="text-[15px] leading-relaxed text-neutral-700">
              Choosing the right eCommerce platform is very essential for
              your online success. Every industry has unique requirements,
              whether it&apos;s managing large inventories, handling secure
              transactions, or offering personalized shopping experiences. At
              projextly, we help you assess platforms like WooCommerce,
              Magento, BigCommerce, Shopify, and more based on your business
              size, goals, budget, and technical needs.
            </p>
            <p className="mt-4 text-[15px] leading-relaxed text-neutral-700">
              Here&apos;s how we build future-ready digital experiences:
            </p>
          </div>
        </div>

        {/* Feature grid */}
        <div className="mt-16 border-t border-neutral-200 ">
          {/* Row 1: three columns */}
          <div className="grid grid-cols-1 divide-y divide-neutral-200 border-b border-neutral-200 sm:grid-cols-2 sm:divide-y-0 lg:grid-cols-3 lg:divide-x">
            <FeatureCard {...first} />
            <FeatureCard {...second} />
            <FeatureCard {...third} />
          </div>

          {/* Row 2: two columns */}
          <div className="grid grid-cols-1 divide-y divide-neutral-200 sm:grid-cols-2 sm:divide-y-0 sm:divide-x">
            <FeatureCard {...fourth} />
            <FeatureCard {...fifth} />
          </div>
        </div>
      </div>
    </section>
  );
}