"use client";

import { motion } from "framer-motion";

const TECHNOLOGIES = [
  {
    name: "React",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg",
  },
  {
    name: "Next.js",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nextjs/nextjs-original.svg",
    invertDark: true,
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
    <section id="techstack" className="relative py-32 overflow-hidden bg-[#030712]">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-[#10B981]/5 rounded-full blur-[150px] pointer-events-none mix-blend-screen" />
      
      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Heading */}
        <div className="mb-20 text-center">
          <motion.h2 
            initial={{ opacity: 0, y: 30 }} 
            whileInView={{ opacity: 1, y: 0 }} 
            viewport={{ once: true, margin: "-50px" }} 
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-white tracking-tight"
          >
            Engineering <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#10B981] to-emerald-400">Stack</span>
          </motion.h2>
        </div>

        {/* Outer Glow Container */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }} 
          whileInView={{ opacity: 1, y: 0 }} 
          viewport={{ once: true, margin: "-50px" }} 
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="glass-panel border border-white/10 rounded-[3rem] p-12 md:p-20 bg-black/40 relative overflow-hidden"
        >
          {/* Inner ambient glow */}
          <div className="absolute inset-0 bg-gradient-to-b from-[#10B981]/5 to-transparent pointer-events-none" />

          {/* Grid of Logos */}
          <motion.div 
            initial="hidden" 
            whileInView="visible" 
            viewport={{ once: true, margin: "-50px" }} 
            variants={{ visible: { transition: { staggerChildren: 0.1 } } }}
            className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-y-16 gap-x-8 items-center justify-items-center relative z-10"
          >
            {TECHNOLOGIES.map((tech) => (
              <motion.div 
                variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0, transition: { duration: 0.5 } } }}
                key={tech.name} 
                className="flex flex-col items-center justify-center group gap-6 w-full h-full"
              >
                <div className="relative w-16 h-16 md:w-20 md:h-20 transition-all duration-500 group-hover:scale-110 group-hover:-translate-y-2">
                  <img
                    src={tech.icon}
                    alt={`${tech.name} logo`}
                    className={`w-full h-full object-contain drop-shadow-2xl ${tech.invertDark ? "invert" : "opacity-80 group-hover:opacity-100 transition-opacity"}`}
                  />
                </div>
                <span className="text-slate-500 font-display font-bold text-sm tracking-widest uppercase opacity-0 group-hover:opacity-100 group-hover:text-[#10B981] transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
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
