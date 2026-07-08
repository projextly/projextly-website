"use client";

import { Star } from "lucide-react";
import { TESTIMONIALS } from "@/lib/constants";
import { motion } from "framer-motion";

export default function Testimonials() {
  return (
    <section id="testimonials" className="bg-[#030712] py-32 overflow-hidden relative">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[500px] bg-[#10B981]/5 rounded-full blur-[120px] pointer-events-none mix-blend-screen" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 30 }} 
          whileInView={{ opacity: 1, y: 0 }} 
          viewport={{ once: true, margin: "-50px" }} 
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <p className="text-[#10B981] font-semibold text-xs uppercase tracking-[0.3em] mb-4">
            Client Success
          </p>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-display font-bold text-white tracking-tight">
            Trusted by <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#10B981] to-emerald-400">Industry Leaders</span>
          </h2>
        </motion.div>

        {/* Marquee Container */}
        <div className="relative w-full overflow-hidden flex flex-col gap-6">
          {/* Gradient Masks */}
          <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-[#030712] to-transparent z-10 pointer-events-none" />
          <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-[#030712] to-transparent z-10 pointer-events-none" />
          
          {/* Track 1 */}
          <div className="flex w-max animate-marquee hover:[animation-play-state:paused] gap-6">
            {[...TESTIMONIALS, ...TESTIMONIALS].map((testimonial, idx) => (
              <div
                key={`${testimonial.name}-${idx}`}
                className="w-[350px] sm:w-[450px] glass-panel p-8 border border-white/5 bg-white/[0.02] hover:bg-white/[0.04] transition-colors shrink-0"
              >
                <div className="flex gap-1 mb-6">
                  {Array.from({ length: testimonial.rating }).map((_, i) => (
                    <Star
                      key={i}
                      className="w-5 h-5 fill-[#10B981] text-[#10B981]"
                    />
                  ))}
                </div>

                <p className="text-slate-300 text-lg leading-relaxed mb-8 font-medium">
                  "{testimonial.text}"
                </p>

                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-[#10B981]/10 text-[#10B981] flex items-center justify-center font-display font-bold text-xl border border-[#10B981]/20">
                    {testimonial.name.charAt(0)}
                  </div>
                  <div>
                    <p className="font-display font-bold text-white text-base">
                      {testimonial.name}
                    </p>
                    <p className="text-slate-500 text-sm font-medium">
                      {testimonial.role}, {testimonial.company}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
        </div>
      </div>
    </section>
  );
}
