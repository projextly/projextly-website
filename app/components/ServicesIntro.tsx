"use client";

import { motion } from "framer-motion";

export default function ServicesIntro() {
  return (
    <section className="bg-[#030712] relative overflow-hidden">
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[#10B981]/5 rounded-full blur-[150px] pointer-events-none mix-blend-screen" />
      
      <div className="mx-auto max-w-7xl px-6 py-32 md:py-40 lg:px-10 relative z-10">
        {/* Heading */}
        <motion.h1 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-6xl text-5xl font-display font-bold leading-[1.08] tracking-tight text-white md:text-6xl lg:text-[72px]"
        >
          Get creative digital services to <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#10B981] to-emerald-500">secure your market presence.</span>
        </motion.h1>

        {/* Bottom Section */}
        <div className="mt-24 flex flex-col lg:flex-row items-start">
          {/* Line */}
          <motion.div 
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex w-full lg:w-1/4 origin-left"
          >
            <div className="mt-4 h-[2px] w-44 bg-[#10B981]/50 shadow-[0_0_10px_rgba(16,185,129,0.5)]"></div>
          </motion.div>

          {/* Text */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="w-full lg:w-3/4 mt-8 lg:mt-0"
          >
            <p className="text-xl leading-relaxed text-slate-400 font-medium">
              We offer a full spectrum of engineering services to help you establish a dominant presence in the digital landscape. Our core expertise includes highly scalable web applications, robust mobile platforms, 
              <span className="text-[#10B981]"> high-conversion headless eCommerce</span>, and stunning UI/UX design. 
              <br /><br />
              We incorporate advanced technical SEO architectures to ensure that your platform not only looks incredible but commands top search rankings. As an elite development agency, we engineer solutions that outperform the competition.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}