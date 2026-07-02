"use client";
import { Button } from "@/components/ui/button";
import { PROJECTS } from "@/lib/constants";
import { motion } from "framer-motion";
import Image from "next/image";

export default function Portfolio() {
  return (
    <section id="portfolio" className="section-dark py-24">
      <div className="grain-overlay" />
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <motion.div 
          className="mb-20"
          initial={{ opacity: 0, y: 30 }} 
          whileInView={{ opacity: 1, y: 0 }} 
          viewport={{ once: true, margin: "-50px" }} 
          transition={{ duration: 0.6 }}
        >
          <p className="text-[#34D399] font-semibold text-[10px] uppercase tracking-[0.2em] mb-3 text-center">
            Our Work
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-white text-center mb-4">
            Featured Projects
          </h2>
          <p className="text-zinc-500 text-center max-w-xl mx-auto">
            A selection of projects we are proud to have delivered for clients
            across industries.
          </p>
        </motion.div>

        {/* Projects Stacking Deck */}
        <div className="flex flex-col relative w-full mb-10">
          {PROJECTS.map((project, index) => (
            <motion.div
              key={project.title}
              className="sticky w-full"
              style={{
                // Calculate sticky top position with an offset for each card
                // so they appear to stack like a deck of cards
                top: `calc(6rem + ${index * 1.5}rem)`,
                // Add bottom margin except for the last item to give scroll space
                marginBottom: index === PROJECTS.length - 1 ? "0" : "6rem",
                // Z-index ensures subsequent cards layer on top of previous ones naturally,
                // but the DOM order handles that automatically.
              }}
              initial={{ opacity: 0, y: 30 }} 
              whileInView={{ opacity: 1, y: 0 }} 
              viewport={{ once: true, margin: "-50px" }} 
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <div className="glass-stat-card p-0 overflow-hidden group transition-all duration-300 hover:border-[#34D399]/30 flex flex-col md:flex-row shadow-2xl bg-zinc-950/90 backdrop-blur-[20px] rounded-3xl">
                
                {/* Thumbnail */}
                <div className="w-full md:w-1/2 h-64 md:h-100 relative overflow-hidden bg-black border-b md:border-b-0 md:border-r border-white/10">
                  <Image 
                   src={project.thumnail}
                   alt={project.title}
                   width={1974}
                   height={1280}
                   className="w-full h-full object-cover transition-transform duration-500"
                  />
                </div>

                {/* Content */}
                <div className="w-full md:w-1/2 p-8 md:p-12 flex flex-col justify-center relative">
                  <div className="absolute top-0 right-0 p-8 text-9xl font-black text-white/[0.02] select-none pointer-events-none tracking-tighter">
                    0{index + 1}
                  </div>
                  
                  <p className="text-[10px] font-bold text-[#34D399] uppercase tracking-[0.2em] mb-4 relative z-10">
                    {project.category}
                  </p>
                  <h3 className="text-white font-bold text-3xl md:text-4xl mb-4 group-hover:text-[#34D399] transition-colors relative z-10">
                    {project.title}
                  </h3>
                  <p className="text-zinc-400 text-base leading-relaxed mb-8 relative z-10">
                    {project.description}
                  </p>
                  
                  <div className="mt-auto relative z-10">
                    <button className="text-white text-sm font-semibold flex items-center gap-2 group-hover:text-[#34D399] transition-colors">
                      View Case Study
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-arrow-right group-hover:translate-x-1 transition-transform"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
                    </button>
                  </div>
                </div>
                
              </div>
            </motion.div>
          ))}
        </div>

        {/* View All Button */}
        <motion.div 
          className="text-center mt-12 relative z-10"
          initial={{ opacity: 0, y: 30 }} 
          whileInView={{ opacity: 1, y: 0 }} 
          viewport={{ once: true, margin: "-50px" }} 
          transition={{ duration: 0.6 }}
        >
          <Button className="btn-primary group shadow-2xl">
            <span className="text-sm">View All Projects</span>
            <div className="icon-circle">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-arrow-right group-hover:translate-x-0.5 transition-transform"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
            </div>
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
