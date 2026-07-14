"use client";

import { motion } from "framer-motion";
import { ArrowRight, Phone } from "lucide-react";

export default function FinalCTA() {
  return (
    <section id="contact" className="section-dark py-24 relative">
      <div className="grain-overlay" />

      {/* Gradient blobs */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#E5333B]/10 rounded-full blur-[150px] pointer-events-none" />

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 0.6 }}
        className="relative z-10 max-w-3xl mx-auto px-4 text-center"
      >
        {/* Label */}
        <p className="text-[#E5333B] font-semibold text-sm uppercase tracking-widest mb-6">
          Let&apos;s Work Together
        </p>

        {/* Heading */}
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight">
          Ready to Build Your
          <br />
          <span className="text-[#E5333B]">Next Website?</span>
        </h2>

        {/* Description */}
        <p className="text-gray-400 text-lg max-w-xl mx-auto mb-10">
          Let us turn your vision into a stunning, high-converting digital
          reality. Get in touch for a free consultation and project estimate.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href="mailto:hello@projextly.com"
            className="btn-primary-red flex items-center gap-2 text-base"
          >
            Get Free Consultation
            <ArrowRight className="w-5 h-5" />
          </a>
          <a
            href="tel:+918618045456"
            className="btn-outline flex items-center gap-2 text-base"
          >
            <Phone className="w-4 h-4" />
            Book Discovery Call
          </a>
        </div>
      </motion.div>
    </section>
  );
}
