"use client";

import { motion } from "framer-motion";
import { PROCESS_STEPS } from "@/lib/landing-constants";

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const stepVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5 },
  },
};

export default function ProcessTimeline() {
  return (
    <section id="process" className="section-dark py-24 relative">
      <div className="grain-overlay" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="text-center">
          <p className="text-[#E5333B] font-semibold text-sm uppercase tracking-widest mb-4">
            Our Process
          </p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white text-center"
          >
            Our Development Process
          </motion.h2>
          <p className="text-gray-400 text-lg text-center max-w-2xl mx-auto mt-6">
            From discovery to launch, our proven 5-step process ensures your
            website is delivered on time, on budget, and beyond expectations.
          </p>
        </div>

        {/* Desktop Timeline */}
        <div className="hidden lg:block mt-20">
          <div className="relative">
            {/* Horizontal Connecting Line */}
            <div className="absolute top-[60px] left-[10%] right-[10%] h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-80px" }}
              variants={containerVariants}
              className="flex justify-between items-start relative"
            >
              {PROCESS_STEPS.map((step, index) => {
                const IconComponent = step.icon;
                return (
                  <motion.div
                    key={index}
                    variants={stepVariants}
                    className="flex flex-col items-center text-center max-w-[180px]"
                  >
                    {/* Circle */}
                    <div className="w-[120px] h-[120px] rounded-full bg-[#0A0A0A] border-2 border-white/[0.08] flex flex-col items-center justify-center mb-6 group hover:border-[#E5333B]/40 transition-all duration-500">
                      <span className="text-[#E5333B] text-xs font-bold tracking-widest mb-1">
                        {step.step}
                      </span>
                      <IconComponent className="w-6 h-6 text-white/60 group-hover:text-[#E5333B] transition-colors" />
                    </div>
                    <h3 className="text-white font-semibold text-sm mb-2">
                      {step.title}
                    </h3>
                    <p className="text-gray-500 text-xs leading-relaxed">
                      {step.desc}
                    </p>
                  </motion.div>
                );
              })}
            </motion.div>
          </div>
        </div>

        {/* Mobile Timeline */}
        <div className="lg:hidden mt-16">
          <div className="space-y-8">
            {PROCESS_STEPS.map((step, index) => {
              const IconComponent = step.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="flex gap-6 items-start"
                >
                  {/* Left Circle */}
                  <div className="w-16 h-16 rounded-full bg-[#0A0A0A] border border-white/10 flex items-center justify-center flex-shrink-0">
                    <span className="text-[#E5333B] text-sm font-bold">
                      {step.step}
                    </span>
                  </div>
                  {/* Right Content */}
                  <div>
                    <h3 className="text-white font-semibold mb-1">
                      {step.title}
                    </h3>
                    <p className="text-gray-500 text-sm leading-relaxed">
                      {step.desc}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
