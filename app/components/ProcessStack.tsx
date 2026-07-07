"use client";

import { motion } from "framer-motion";
import { TECH_CATEGORIES, PROCESS_STEPS } from "@/lib/constants";
import { Workflow, Layers } from "lucide-react";

export default function ProcessStack() {
  const coreProcess = PROCESS_STEPS.slice(0, 4); // Simplify for top-level view

  return (
    <section className="py-24 relative z-10 bg-[var(--color-background)] border-t-[3px] border-[var(--color-foreground)]">
      <div className="max-w-7xl mx-auto px-6">
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          
          {/* Left: Process */}
          <div>
            <div className="flex items-center gap-4 mb-12">
              <div className="w-14 h-14 bg-[var(--color-accent)] border-[3px] border-[var(--color-foreground)] shadow-[4px_4px_0_0_var(--color-foreground)] flex items-center justify-center">
                <Workflow className="w-6 h-6 text-[var(--color-on-primary)]" />
              </div>
              <h2 className="text-4xl font-display font-bold text-[var(--color-foreground)] tracking-tight uppercase">How We Build</h2>
            </div>

            <div className="space-y-6">
              {coreProcess.map((step, idx) => (
                <motion.div 
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  key={step.step} 
                  className="flex gap-6 p-6 bg-[var(--color-on-primary)] border-[3px] border-[var(--color-foreground)] shadow-[6px_6px_0_0_var(--color-primary)] hover:shadow-none hover:translate-x-[6px] hover:translate-y-[6px] transition-all"
                >
                  <div className="font-display text-2xl font-bold text-[var(--color-primary)]">
                    {step.step}
                  </div>
                  <div>
                    <h3 className="text-xl font-display font-bold text-[var(--color-foreground)] uppercase mb-2">{step.title}</h3>
                    <p className="text-[var(--color-foreground)] opacity-80 font-medium text-sm leading-relaxed">{step.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Right: Tech Stack */}
          <div>
            <div className="flex items-center gap-4 mb-12">
              <div className="w-14 h-14 bg-[var(--color-secondary)] border-[3px] border-[var(--color-foreground)] shadow-[4px_4px_0_0_var(--color-foreground)] flex items-center justify-center">
                <Layers className="w-6 h-6 text-[var(--color-on-primary)]" />
              </div>
              <h2 className="text-4xl font-display font-bold text-[var(--color-foreground)] tracking-tight uppercase">Our Stack</h2>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {TECH_CATEGORIES.map((category, idx) => (
                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  key={category.label} 
                  className="p-6 bg-[var(--color-muted)] border-[3px] border-[var(--color-foreground)]"
                >
                  <h3 className="text-base font-bold text-[var(--color-primary)] font-display uppercase tracking-widest mb-4 border-b-2 border-[var(--color-foreground)] pb-2">
                    {category.label}
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {category.techs.map((tech) => (
                      <span 
                        key={tech.name} 
                        className="px-3 py-1 text-xs font-bold bg-[var(--color-on-primary)] border-[2px] border-[var(--color-foreground)] text-[var(--color-foreground)] shadow-[2px_2px_0_0_var(--color-foreground)]"
                      >
                        {tech.name}
                      </span>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>

            <motion.div 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="mt-8 p-6 bg-[var(--color-primary)] border-[3px] border-[var(--color-foreground)] shadow-[6px_6px_0_0_var(--color-foreground)]"
            >
              <p className="text-sm font-medium text-[var(--color-on-primary)] leading-relaxed">
                We utilize a modern, decoupled architecture allowing for ultimate scalability, zero-downtime deployments, and edge-network performance.
              </p>
            </motion.div>
          </div>

        </div>

      </div>
    </section>
  );
}
