"use client";

import { useState } from "react";
import { TECH_CATEGORIES } from "@/lib/landing-constants";
import { motion, AnimatePresence } from "framer-motion";

export default function TechnologiesSection() {
  const [activeCategory, setActiveCategory] = useState(0);

  return (
    <section id="technologies" className="section-dark py-24">
      <div className="grain-overlay" />
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <p className="text-[#E5333B] font-semibold text-sm uppercase tracking-widest mb-4 text-center">
          Tech Stack
        </p>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white text-center"
        >
          Technologies We Use
        </motion.h2>
        <p className="text-gray-400 text-lg text-center max-w-2xl mx-auto mt-6">
          We use industry-leading technologies to build fast, scalable, and
          maintainable websites.
        </p>

        {/* Layout */}
        <div className="grid lg:grid-cols-[250px_1fr] gap-12 mt-16">
          {/* LEFT — Tabs */}
          <div className="flex flex-row lg:flex-col gap-2 overflow-x-auto lg:overflow-visible pb-4 lg:pb-0">
            {TECH_CATEGORIES.map((category, index) => (
              <button
                key={index}
                onClick={() => setActiveCategory(index)}
                className={`px-6 py-4 rounded-2xl text-sm font-medium transition-all duration-300 whitespace-nowrap ${
                  index === activeCategory
                    ? "bg-[#E5333B]/10 text-[#E5333B] border border-[#E5333B]/20"
                    : "text-gray-400 hover:text-white hover:bg-white/5 border border-transparent"
                }`}
              >
                {category.label}
              </button>
            ))}
          </div>

          {/* RIGHT — Cards */}
          <AnimatePresence mode="wait">
            <motion.div
              key={activeCategory}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
              className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4"
            >
              {TECH_CATEGORIES[activeCategory].techs.map((tech, i) => (
                <div
                  key={i}
                  className="premium-card-dark p-6 flex flex-col items-center gap-4 group cursor-default group-hover:-translate-y-1 transition-transform duration-300"
                >
                  <img
                    src={tech.icon}
                    alt={`${tech.name} logo`}
                    className={`w-12 h-12 object-contain ${
                      tech.invertDark ? "invert" : ""
                    }`}
                  />
                  <span className="text-sm text-gray-400 font-medium group-hover:text-white transition-colors">
                    {tech.name}
                  </span>
                </div>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
