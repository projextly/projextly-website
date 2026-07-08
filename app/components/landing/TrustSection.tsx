"use client";

import { motion } from "framer-motion";
import { TRUST_INDUSTRIES } from "@/lib/landing-constants";

export default function TrustSection() {
  return (
    <section className="section-white py-16 border-y border-zinc-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <p className="text-sm text-gray-400 uppercase tracking-widest mb-8 text-center font-medium">
          Trusted by businesses across
        </p>
      </div>

      {/* Marquee Container */}
      <div className="relative overflow-hidden">
        {/* Left Fade Mask */}
        <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-white to-transparent z-10" />
        {/* Right Fade Mask */}
        <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-white to-transparent z-10" />

        {/* Marquee Track */}
        <div className="flex animate-marquee">
          {/* First set */}
          {TRUST_INDUSTRIES.map((industry, index) => (
            <div
              key={`first-${index}`}
              className="flex-shrink-0 px-8 text-xl font-semibold text-gray-300 flex items-center gap-8"
            >
              <span>{industry}</span>
              <div className="w-2 h-2 rounded-full bg-[#E5333B]/40" />
            </div>
          ))}
          {/* Second set (for seamless loop) */}
          {TRUST_INDUSTRIES.map((industry, index) => (
            <div
              key={`second-${index}`}
              className="flex-shrink-0 px-8 text-xl font-semibold text-gray-300 flex items-center gap-8"
            >
              <span>{industry}</span>
              <div className="w-2 h-2 rounded-full bg-[#E5333B]/40" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
