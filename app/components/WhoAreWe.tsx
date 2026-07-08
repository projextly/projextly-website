"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function WhoAreWe() {
  return (
    <section id="about" className="bg-[#030712] py-32 relative overflow-hidden">
      <div className="absolute top-1/2 left-0 w-[500px] h-[500px] bg-[#10B981]/5 rounded-full blur-[120px] pointer-events-none mix-blend-screen" />
      
      <div className="mx-auto max-w-7xl px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            <p className="text-[#10B981] font-semibold text-xs uppercase tracking-[0.3em] mb-6 inline-block bg-[#10B981]/10 px-4 py-2 rounded-full border border-[#10B981]/20">
              Web Development Agency
            </p>

            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-display font-bold text-white leading-[1.1] mb-8 tracking-tight">
              We engineer <br className="hidden lg:block" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-slate-200 to-slate-500">
                digital excellence.
              </span>
            </h2>

            <div className="flex gap-4 items-center">
              <div className="w-16 h-px bg-white/20" />
              <p className="text-slate-400 font-medium">Bengaluru, India</p>
            </div>
          </motion.div>

          {/* Right Content */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="glass-panel p-8 sm:p-10 border border-white/5"
          >
            <p className="text-lg text-slate-300 leading-relaxed mb-6 font-medium">
              Welcome to <strong>Projextly</strong>. We are a premium digital agency offering unique and creative web development services that drive engagement and revenue. Whether it's complex web applications, modern e-commerce, or stunning corporate sites, we deliver unparalleled quality.
            </p>

            <p className="text-lg text-slate-400 leading-relaxed mb-10">
              Our experienced engineering team stays ahead of the curve, utilizing modern stacks like Next.js to ensure blazing-fast performance and seamless user experiences. We don't just build websites; we build businesses.
            </p>

            <Link href="/contact" className="group inline-flex items-center gap-4 text-white hover:text-[#10B981] transition-colors font-semibold text-lg">
              <span>Discuss Your Project</span>
              <div className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center group-hover:border-[#10B981] group-hover:bg-[#10B981]/10 transition-all">
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </div>
            </Link>
          </motion.div>

        </div>
      </div>
    </section>
  );
}