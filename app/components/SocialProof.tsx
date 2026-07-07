"use client";

import { motion } from "framer-motion";
import { TESTIMONIALS, STATS } from "@/lib/constants";
import { Star } from "lucide-react";

export default function SocialProof() {
  return (
    <section className="py-24 relative z-10 bg-[var(--color-background)] border-t-[3px] border-[var(--color-foreground)]">
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Stats Row */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-24">
          {STATS.map((stat, idx) => {
            const Icon = stat.icon;
            return (
              <motion.div 
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                key={stat.label} 
                className="flex flex-col items-center justify-center p-6 sm:p-8 bg-[var(--color-primary)] border-[3px] border-[var(--color-foreground)] shadow-[6px_6px_0_0_var(--color-foreground)] text-center hover:translate-y-[-4px] transition-transform"
              >
                <Icon className="w-8 h-8 text-[var(--color-on-primary)] mb-4" />
                <div className="text-4xl md:text-5xl font-display font-bold text-[var(--color-on-primary)] mb-2">{stat.value}</div>
                <div className="text-sm text-[var(--color-on-primary)] font-bold uppercase tracking-widest">{stat.label}</div>
              </motion.div>
            );
          })}
        </div>

        {/* Testimonials */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-4xl md:text-6xl font-display font-bold text-[var(--color-foreground)] uppercase mb-4 tracking-tight">
            Validation
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {TESTIMONIALS.map((testimonial, idx) => (
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              key={idx} 
              className="p-8 bg-[var(--color-on-primary)] border-[3px] border-[var(--color-foreground)] shadow-[8px_8px_0_0_var(--color-primary)] flex flex-col justify-between hover:shadow-none hover:translate-x-[8px] hover:translate-y-[8px] transition-all"
            >
              <div>
                <div className="flex gap-1 mb-6">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-[var(--color-accent)] text-[var(--color-accent)]" />
                  ))}
                </div>
                <p className="text-[var(--color-foreground)] font-medium text-lg leading-relaxed mb-8">
                  "{testimonial.text}"
                </p>
              </div>
              <div className="flex items-center gap-4 pt-6 border-t-[2px] border-dashed border-[var(--color-muted)]">
                <div className="w-12 h-12 bg-[var(--color-foreground)] flex items-center justify-center text-[var(--color-on-primary)] font-display font-bold text-xl border-[2px] border-[var(--color-primary)]">
                  {testimonial.name.charAt(0)}
                </div>
                <div>
                  <h4 className="text-[var(--color-foreground)] font-bold uppercase">{testimonial.name}</h4>
                  <p className="text-sm font-bold text-[var(--color-primary)]">{testimonial.role}, {testimonial.company}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
