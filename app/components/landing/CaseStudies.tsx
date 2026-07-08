"use client";

import { CASE_STUDIES } from "@/lib/landing-constants";
import { motion } from "framer-motion";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

export default function CaseStudies() {
  return (
    <section id="portfolio" className="section-light py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <p className="text-[#E5333B] font-semibold text-sm uppercase tracking-widest mb-4">
          Portfolio
        </p>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-3xl sm:text-4xl lg:text-5xl font-bold text-zinc-900"
        >
          Featured Projects
        </motion.h2>
        <p className="text-gray-500 text-lg mt-4 max-w-2xl">
          Explore our recent work and see how we helped businesses in Bangalore
          achieve their digital goals.
        </p>

        {/* Cards */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-16"
        >
          {CASE_STUDIES.map((cs, index) => (
            <motion.div key={index} variants={itemVariants}>
              <div className="bg-white rounded-3xl overflow-hidden border border-zinc-100 group hover:-translate-y-2 transition-all duration-300 shadow-sm hover:shadow-xl">
                {/* Image */}
                <div className="relative h-56 overflow-hidden">
                  <Image
                    src={cs.image}
                    alt={cs.title}
                    width={800}
                    height={600}
                    className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-500"
                  />
                  <span className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm text-xs font-semibold text-zinc-700 px-3 py-1.5 rounded-full">
                    {cs.industry}
                  </span>
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-zinc-900 mb-2">
                    {cs.title}
                  </h3>
                  <p className="text-gray-500 text-sm mb-4">
                    {cs.description}
                  </p>

                  {/* Results */}
                  <div className="flex flex-wrap gap-2 mb-5">
                    {cs.results.map((result, i) => (
                      <span
                        key={i}
                        className="bg-[#E5333B]/5 text-[#E5333B] text-xs font-bold px-3 py-1.5 rounded-full"
                      >
                        {result.value} {result.label}
                      </span>
                    ))}
                  </div>

                  {/* Link */}
                  <span className="inline-flex items-center gap-1 text-[#E5333B] text-sm font-semibold group-hover:gap-2 transition-all cursor-pointer">
                    View Case Study
                    <ArrowUpRight className="w-4 h-4" />
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
