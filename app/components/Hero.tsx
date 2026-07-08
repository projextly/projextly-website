"use client";

import Link from "next/link";
import { ArrowRight, MapPin, Sparkles } from "lucide-react";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export default function Hero() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  return (
    <section 
      ref={containerRef}
      className="relative min-h-[100svh] bg-[#030712] overflow-hidden flex items-center justify-center pt-24 pb-12 perspective-1000"
    >
      {/* Dynamic Background */}
      <motion.div 
        className="absolute inset-0 pointer-events-none"
        style={{ y, opacity }}
      >
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-emerald-500/10 rounded-full blur-[120px] mix-blend-screen" />
        <div className="absolute top-1/3 left-1/3 w-[600px] h-[600px] bg-indigo-500/10 rounded-full blur-[100px] mix-blend-screen" />
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI0IiBoZWlnaHQ9IjQiPgo8cmVjdCB3aWR0aD0iNCIgaGVpZ2h0PSI0IiBmaWxsPSIjZmZmIiBmaWxsLW9wYWNpdHk9IjAuMDUiLz4KPC9zdmc+')] opacity-20" />
      </motion.div>

      {/* Content */}
      <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full flex flex-col items-center">
        
        {/* Badge */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mb-10"
        >
          <div className="border border-white/10 bg-white/5 rounded-full px-5 py-2 inline-flex items-center gap-3 backdrop-blur-md shadow-2xl">
            <span className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#10B981] opacity-75" />
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-[#10B981]" />
            </span>
            <span className="text-slate-300 text-sm font-medium tracking-wide flex items-center gap-1.5">
              Available for projects <Sparkles className="w-3.5 h-3.5 text-[#10B981]" />
            </span>
            <span className="w-px h-4 bg-white/10 mx-1" />
            <MapPin className="w-4 h-4 text-[#10B981]" />
            <span className="text-slate-300 text-sm">Bengaluru</span>
          </div>
        </motion.div>

        {/* Main Heading with Staggered Word Animation */}
        <div className="mb-8 max-w-5xl">
          <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-[6.5rem] font-display font-bold tracking-tighter leading-[1.05]">
            <motion.span 
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
              className="text-white block"
            >
              We Build Digital
            </motion.span>
            <motion.span 
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
              className="text-white block"
            >
              Experiences That
            </motion.span>
            <motion.span 
              initial={{ opacity: 0, y: 40, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
              className="text-transparent bg-clip-text bg-gradient-to-r from-[#10B981] to-emerald-300 block pb-4"
            >
              Drive Growth.
            </motion.span>
          </h1>
        </div>

        {/* Subtitle */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mb-14 max-w-2xl"
        >
          <p className="text-slate-400 text-lg sm:text-xl leading-relaxed font-medium">
            Projextly is an award-winning web agency crafting breathtaking websites, web applications, and digital products engineered for scale.
          </p>
        </motion.div>

        {/* CTA Buttons */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.7 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-6"
        >
          <Link href="/contact" className="group">
            <button className="relative overflow-hidden bg-white text-black px-8 py-4 rounded-full flex items-center gap-3 font-semibold text-lg transition-transform hover:scale-105 active:scale-95 shadow-[0_0_40px_rgba(255,255,255,0.15)]">
              <span className="relative z-10">Start Your Project</span>
              <ArrowRight className="w-5 h-5 relative z-10 group-hover:translate-x-1 transition-transform" />
              <div className="absolute inset-0 bg-gradient-to-r from-slate-100 to-slate-300 opacity-0 group-hover:opacity-100 transition-opacity" />
            </button>
          </Link>
          
          <Link href="/portfolio" className="group flex items-center gap-3 px-6 py-4">
            <div className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center group-hover:bg-white/10 group-hover:border-white/40 transition-all">
              <span className="w-2 h-2 rounded-full bg-white group-hover:scale-150 transition-transform" />
            </div>
            <span className="text-white font-medium text-lg group-hover:text-[#10B981] transition-colors">
              View Case Studies
            </span>
          </Link>
        </motion.div>
        
      </div>
    </section>
  );
}