"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const TECHNOLOGIES = [
  {
    name: "React",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg",
  },
  {
    name: "Next.js",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nextjs/nextjs-original.svg",
    invertDark: true, // Next.js logo is black by default, needs to be inverted in dark mode or we use a white version.
  },
  {
    name: "TypeScript",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg",
  },
  {
    name: "Tailwind CSS",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg",
  },
  {
    name: "Node.js",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original-wordmark.svg",
  },
  {
    name: "Python",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg",
  },
  {
    name: "PostgreSQL",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postgresql/postgresql-original-wordmark.svg",
  },
  {
    name: "MongoDB",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mongodb/mongodb-original-wordmark.svg",
  },
  {
    name: "Redis",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/redis/redis-original.svg",
  },
  {
    name: "AWS",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/amazonwebservices/amazonwebservices-original-wordmark.svg",
    invertDark: true,
  },
  {
    name: "Docker",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/docker/docker-original.svg",
  },
  {
    name: "GitHub",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/github/github-original.svg",
    invertDark: true,
  },
];

export default function TechStack() {
  return (
    <section id="techstack" className="relative py-24 overflow-hidden section-dark">
      <div className="grain-overlay" />
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Heading */}
        <div className="mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 30 }} 
            whileInView={{ opacity: 1, y: 0 }} 
            viewport={{ once: true, margin: "-50px" }} 
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-5xl font-serif text-white text-center tracking-tight"
          >
            Technologies
          </motion.h2>
        </div>

        {/* Outer Glow Container */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }} 
          whileInView={{ opacity: 1, y: 0 }} 
          viewport={{ once: true, margin: "-50px" }} 
          transition={{ duration: 0.6 }}
          className="bg-[#050505] border border-[#34D399]/20 rounded-[2.5rem] p-10 md:p-16"
          style={{ 
            boxShadow: "0 0 80px -20px rgba(52, 211, 153, 0.15), inset 0 0 20px -10px rgba(52, 211, 153, 0.1)"
          }}
        >
          {/* Grid of Logos */}
          <motion.div 
            initial="hidden" 
            whileInView="visible" 
            viewport={{ once: true, margin: "-50px" }} 
            variants={{ visible: { transition: { staggerChildren: 0.1 } } }}
            className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-y-16 gap-x-8 items-center justify-items-center"
          >
            {TECHNOLOGIES.map((tech) => (
              <motion.div 
                variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0, transition: { duration: 0.5 } } }}
                key={tech.name} 
                className="flex flex-col items-center justify-center group gap-4 w-full h-full"
              >
                <div className="relative w-16 h-16 md:w-20 md:h-20 transition-transform duration-300 group-hover:scale-110 group-hover:-translate-y-1">
                  {/* Next.js and GitHub icons are black by default in DevIcon, so we use CSS invert for dark backgrounds */}
                  <img
                    src={tech.icon}
                    alt={`${tech.name} logo`}
                    className={`w-full h-full object-contain drop-shadow-lg ${tech.invertDark ? "invert" : ""}`}
                  />
                </div>
                {/* We only show the name if the logo itself isn't a wordmark, but for consistency, 
                    we can hide it or show it on hover, or always show it in small text.
                    Let's show it subtly like the design image. */}
                <span className="text-zinc-500 text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  {tech.name}
                </span>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>

      </div>
    </section>
  );
}
