"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { motion } from "framer-motion";
import { PROJECTS } from "@/lib/constants";

export default function FeaturedWork() {
  const featured = PROJECTS.slice(0, 3); // Take top 3 projects

  return (
    <section className="py-24 relative z-10 bg-[var(--color-background)] border-t-[3px] border-[var(--color-foreground)]">
      <div className="max-w-7xl mx-auto px-6">
        
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div>
            <h2 className="text-4xl md:text-6xl font-display font-bold text-[var(--color-foreground)] uppercase mb-4 tracking-tight">
              Selected Work
            </h2>
            <p className="text-[var(--color-foreground)] opacity-80 max-w-lg text-lg font-medium">
              A curated selection of our most recent and impactful digital products.
            </p>
          </div>
          <Link href="/portfolio" className="text-[var(--color-primary)] hover:text-[var(--color-foreground)] font-bold uppercase tracking-widest flex items-center gap-2 transition-colors border-b-4 border-[var(--color-primary)] hover:border-[var(--color-foreground)] pb-1">
            View full archive <ArrowUpRight className="w-5 h-5" />
          </Link>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {featured.map((project, idx) => (
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              key={idx} 
              className={`group relative bg-[var(--color-on-primary)] border-[3px] border-[var(--color-foreground)] shadow-[8px_8px_0_0_var(--color-primary)] hover:shadow-none hover:translate-x-[8px] hover:translate-y-[8px] transition-all duration-300 p-4 ${idx === 0 ? 'lg:col-span-2' : ''}`}
            >
              <div className="relative w-full aspect-video border-[3px] border-[var(--color-foreground)] overflow-hidden bg-[var(--color-muted)]">
                <Image 
                  src={project.thumnail} 
                  alt={project.title} 
                  fill 
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
                
                <div className="absolute top-4 left-4">
                  <span className="px-4 py-2 text-xs font-bold uppercase tracking-widest bg-[var(--color-accent)] text-[var(--color-on-primary)] border-[2px] border-[var(--color-foreground)] shadow-[4px_4px_0_0_var(--color-foreground)]">
                    {project.category}
                  </span>
                </div>
              </div>

              <div className="pt-6 pb-2 flex items-center justify-between">
                <h3 className="text-2xl md:text-3xl font-display font-bold text-[var(--color-foreground)] uppercase">
                  {project.title}
                </h3>
                <div className="w-12 h-12 bg-[var(--color-primary)] border-[3px] border-[var(--color-foreground)] shadow-[4px_4px_0_0_var(--color-foreground)] flex items-center justify-center text-[var(--color-on-primary)] group-hover:bg-[var(--color-accent)] transition-colors">
                  <ArrowUpRight className="w-6 h-6" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
