"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";

const features = [
  {
    title: "Bespoke Architectures",
    body: "We abandon templates. Every digital product we build is architected from scratch using cutting-edge stacks to ensure unparalleled performance and unique brand expression.",
  },
  {
    title: "Full-Spectrum Delivery",
    body: "From UX strategy and interface design to robust backend engineering and cloud deployment—our team handles the entire lifecycle under one roof.",
  },
  {
    title: "Engineering Excellence",
    body: "Our developers are masters of modern frameworks. We write clean, scalable code that ensures your platform remains future-proof and hyper-fast.",
  },
  {
    title: "Precision Execution",
    body: "We operate with surgical precision. Deadlines are absolute, and our agile methodologies guarantee transparent, high-velocity delivery without compromising quality.",
  },
];

export default function WebsiteSolutionsSection() {
  return (
    <section className="w-full bg-[#030712] py-32 px-6 md:px-12 lg:px-20 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-[#10B981]/5 rounded-full blur-[150px] pointer-events-none mix-blend-screen" />
      
      <div className="mx-auto max-w-7xl relative z-10">
        {/* Heading */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-white mb-6 tracking-tight">
            End-to-End <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#10B981] to-emerald-400">Digital Solutions</span>
          </h2>
          <p className="text-slate-400 text-lg md:text-xl max-w-2xl mx-auto font-medium">
            We partner with growing businesses to deliver high-performance platforms engineered for scale and designed to convert.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          
          {/* Left: Interactive Image/Graphic Container */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95, rotate: -2 }}
            whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="relative mx-auto w-full max-w-lg lg:max-w-none"
          >
            {/* Glow Behind Image */}
            <div className="absolute inset-0 bg-[#10B981]/20 rounded-[2.5rem] blur-2xl transform scale-105" />
            
            <div className="relative rounded-[2.5rem] overflow-hidden border border-white/10 bg-white/5 p-4 backdrop-blur-sm">
              <div className="rounded-[2rem] overflow-hidden relative group">
                <Image
                  src="/rocket.png"
                  alt="Web development visualization"
                  width={800}
                  height={800}
                  className="w-full h-auto object-cover transform transition-transform duration-700 group-hover:scale-105"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div>
            </div>
            
            {/* Floating Stats Badge */}
            <motion.div 
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="absolute -bottom-6 -right-6 lg:-right-12 glass-panel p-6 border border-white/10 flex items-center gap-4 rounded-2xl shadow-2xl bg-black/80"
            >
              <div className="w-12 h-12 rounded-full bg-[#10B981]/10 flex items-center justify-center border border-[#10B981]/30">
                <span className="text-[#10B981] font-bold text-xl">100%</span>
              </div>
              <div>
                <p className="text-white font-display font-bold text-lg">In-House</p>
                <p className="text-slate-400 text-sm">Engineering Team</p>
              </div>
            </motion.div>
          </motion.div>

          {/* Right: Feature List */}
          <div className="space-y-6">
            {features.map((feature, index) => (
              <motion.div 
                key={feature.title} 
                initial={{ opacity: 0, x: 40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="glass-panel p-8 border border-white/5 hover:border-white/10 group bg-white/[0.02] rounded-[2rem]"
              >
                <div className="flex gap-6 items-start">
                  <div className="mt-1 flex-shrink-0 w-8 h-8 rounded-full bg-[#10B981]/10 flex items-center justify-center border border-[#10B981]/30 group-hover:bg-[#10B981] transition-colors duration-500">
                    <CheckCircle2 className="w-4 h-4 text-[#10B981] group-hover:text-black transition-colors duration-500" />
                  </div>
                  <div>
                    <h3 className="text-xl font-display font-bold text-white mb-3 tracking-wide group-hover:text-[#10B981] transition-colors">
                      {feature.title}
                    </h3>
                    <p className="text-slate-400 leading-relaxed font-medium">
                      {feature.body}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
          
        </div>
      </div>
    </section>
  );
}