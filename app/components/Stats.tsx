"use client";

import { STATS } from "@/lib/constants";
import { motion } from "framer-motion";

export default function Stats() {
  return (
    <section className="section-light py-20 relative overflow-hidden">
      {/* Dot pattern background */}
      <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px]" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="text-center">
          <p className="text-[#34D399] font-semibold text-sm uppercase tracking-widest mb-3">
            Welcome to Projextly
          </p>
          <motion.h2 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6 }}
            className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4"
          >
            Your Digital Growth Partner in Bengaluru
          </motion.h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Born 3 months ago with a bold vision — we&apos;re a fast-growing web
            development agency crafting high-performance digital experiences.
            From startups to enterprises, we help businesses in Bengaluru and
            beyond scale with cutting-edge technology and design.
          </p>
        </div>

        {/* Stats Grid */}
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          variants={{ visible: { transition: { staggerChildren: 0.1 } } }}
          className="grid grid-cols-2 sm:grid-cols-4 gap-8 mt-14"
        >
          {STATS.map((stat) => {
            const Icon = stat.icon;
            return (
              <motion.div
                key={stat.label}
                variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0, transition: { duration: 0.5 } } }}
                className="bg-white/5 backdrop-blur-[12px] border border-white/[0.1] rounded-2xl p-6 text-center"
              >
                <Icon className="w-6 h-6 text-[#34D399]/60 mx-auto mb-3" />
                <div className="text-4xl font-bold text-[#34D399]">
                  {stat.value}
                </div>
                <div className="text-gray-600 text-sm mt-2">{stat.label}</div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
