"use client";

import { useState } from "react";
import { INDUSTRIES } from "@/lib/landing-constants";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";
import Image from "next/image";

export default function IndustriesSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section id="industries" className="section-white py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <p className="text-[#E5333B] font-semibold text-sm uppercase tracking-widest mb-4">
          Industries
        </p>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-3xl sm:text-4xl lg:text-5xl font-bold text-zinc-900"
        >
          Industries We Serve
        </motion.h2>
        <p className="text-gray-500 text-lg mt-4 max-w-2xl">
          We have deep expertise building websites for businesses across diverse
          industries in Bangalore and beyond.
        </p>

        {/* Split layout */}
        <div className="grid lg:grid-cols-2 gap-16 mt-16 items-start">
          {/* LEFT — Image */}
          <div className="rounded-3xl overflow-hidden lg:sticky lg:top-32">
            <Image
              src="https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=1200&auto=format&fit=crop"
              width={800}
              height={600}
              className="object-cover w-full h-[500px]"
              alt="Modern office workspace"
            />
          </div>

          {/* RIGHT — Accordion */}
          <div className="space-y-3">
            {INDUSTRIES.map((industry, index) => {
              const isOpen = openIndex === index;
              const Icon = industry.icon;

              return (
                <div
                  key={index}
                  className={`border rounded-2xl overflow-hidden transition-all duration-300 ${
                    isOpen
                      ? "border-[#E5333B]/20 bg-[#E5333B]/[0.02]"
                      : "border-zinc-200"
                  }`}
                >
                  <button
                    onClick={() =>
                      setOpenIndex(isOpen ? null : index)
                    }
                    className="w-full flex items-center justify-between px-6 py-5 text-left"
                  >
                    <div className="flex items-center gap-4">
                      <div className="w-10 h-10 rounded-xl bg-[#E5333B]/10 flex items-center justify-center">
                        <Icon className="w-5 h-5 text-[#E5333B]" />
                      </div>
                      <span className="font-medium text-zinc-900">
                        {industry.label}
                      </span>
                    </div>
                    <ChevronDown
                      className={`w-5 h-5 text-gray-400 transition-transform duration-300 ${
                        isOpen ? "rotate-180" : ""
                      }`}
                    />
                  </button>

                  <AnimatePresence>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                      >
                        <div className="px-6 pb-5 pl-20 text-gray-500 text-sm leading-relaxed">
                          {industry.description}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
