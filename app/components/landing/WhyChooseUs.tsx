"use client";

import { motion } from "framer-motion";
import { WHY_CHOOSE_US_CARDS } from "@/lib/landing-constants";

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.1,
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

export default function WhyChooseUs() {
  return (
    <section id="services" className="section-white py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="text-center">
          <p className="text-[#E5333B] font-semibold text-sm uppercase tracking-widest mb-4">
            Why Choose Us
          </p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-3xl sm:text-4xl lg:text-5xl font-bold text-zinc-900 text-center max-w-3xl mx-auto"
          >
            Why Businesses Choose Our Web Design Company
          </motion.h2>
          <p className="text-gray-500 text-lg text-center max-w-2xl mx-auto mt-6">
            We combine creative excellence with technical precision to deliver
            websites that look stunning, load fast, rank high, and convert
            visitors into customers.
          </p>
        </div>

        {/* Cards Grid */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          variants={containerVariants}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-16"
        >
          {WHY_CHOOSE_US_CARDS.map((card, index) => {
            const IconComponent = card.icon;
            return (
              <motion.div
                key={index}
                variants={cardVariants}
                className="premium-card group cursor-default"
              >
                <div className="w-12 h-12 rounded-2xl bg-[#E5333B]/10 flex items-center justify-center mb-5 group-hover:bg-[#E5333B]/15 transition-colors">
                  <IconComponent className="w-6 h-6 text-[#E5333B]" />
                </div>
                <h3 className="text-xl font-semibold text-zinc-900 mb-3">
                  {card.title}
                </h3>
                <p className="text-gray-500 text-sm leading-relaxed">
                  {card.description}
                </p>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
