"use client";

import { motion } from "framer-motion";
import { DESIGN_PRINCIPLES } from "@/lib/landing-constants";

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5 },
  },
};

export default function DesignPrinciples() {
  return (
    <section className="section-dark py-24 relative">
      <div className="grain-overlay" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="text-center">
          <p className="text-[#E5333B] font-semibold text-sm uppercase tracking-widest mb-4">
            Design Philosophy
          </p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white text-center"
          >
            Our Design Principles
          </motion.h2>
          <p className="text-gray-400 text-lg text-center max-w-2xl mx-auto mt-6">
            Every pixel is placed with purpose. Our design philosophy is built on
            three core pillars that drive results.
          </p>
        </div>

        {/* Cards Grid */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          variants={containerVariants}
          className="grid md:grid-cols-3 gap-8 mt-16"
        >
          {DESIGN_PRINCIPLES.map((principle, index) => {
            const IconComponent = principle.icon;
            return (
              <motion.div
                key={index}
                variants={cardVariants}
                className="premium-card-dark"
              >
                <div className="w-14 h-14 rounded-2xl bg-[#E5333B]/10 border border-[#E5333B]/20 flex items-center justify-center mb-6">
                  <IconComponent className="w-7 h-7 text-[#E5333B]" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-4">
                  {principle.title}
                </h3>
                <p className="text-gray-400 text-sm leading-relaxed">
                  {principle.description}
                </p>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
