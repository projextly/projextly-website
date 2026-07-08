"use client";

import { motion } from "framer-motion";

interface PageHeaderProps {
  title: string;
  subtitle: string;
  badge?: string;
}

export default function PageHeader({ title, subtitle, badge }: PageHeaderProps) {
  return (
    <section className="relative pt-40 pb-24 overflow-hidden bg-[#030712] flex items-center justify-center min-h-[50vh]">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-[#10B981]/15 via-[#030712] to-[#030712] pointer-events-none" />
      <div className="grain-overlay pointer-events-none opacity-20" />
      
      {/* Content */}
      <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto w-full">
        {badge && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-8"
          >
            <span className="text-[#10B981] font-bold text-xs uppercase tracking-[0.3em] bg-[#10B981]/10 border border-[#10B981]/30 backdrop-blur-md rounded-full px-5 py-2 inline-block">
              {badge}
            </span>
          </motion.div>
        )}
        
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-5xl sm:text-6xl md:text-7xl lg:text-[5rem] font-display font-bold tracking-tight mb-8 text-white leading-[1.1]"
        >
          {title}
        </motion.h1>
        
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-slate-400 text-xl sm:text-2xl max-w-3xl mx-auto font-medium"
        >
          {subtitle}
        </motion.p>
      </div>
    </section>
  );
}
