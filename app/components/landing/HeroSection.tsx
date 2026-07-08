"use client";

import { motion } from "framer-motion";
import { Star, ArrowRight } from "lucide-react";
import AnimatedCounter from "./AnimatedCounter";
import { HERO_STATS } from "@/lib/landing-constants";

export default function HeroSection() {
  return (
    <section className="relative min-h-screen bg-black overflow-hidden flex items-center pt-24 pb-16">
      {/* Grid Pattern Overlay */}
      <div className="absolute inset-0 grid-pattern opacity-40" />

      {/* Gradient Blobs */}
      <div className="absolute top-1/4 -left-32 w-[500px] h-[500px] bg-[#E5333B]/15 rounded-full blur-[120px] animate-pulse-glow" />
      <div className="absolute bottom-1/4 -right-32 w-[400px] h-[400px] bg-[#E5333B]/10 rounded-full blur-[120px] animate-pulse-glow" />

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Column */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              {/* Badge */}
              <div className="inline-flex items-center gap-2 border border-white/10 bg-white/5 rounded-full px-5 py-2.5 backdrop-blur-sm mb-8">
                <Star className="w-4 h-4 text-[#E5333B] fill-[#E5333B]" />
                <span className="text-gray-300 text-sm font-medium">
                  Rated Web Design Agency in Bangalore
                </span>
              </div>
            </motion.div>

            {/* Heading */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight leading-[1.08]"
            >
              <span className="text-white block">Web Design Company in</span>
              <span className="text-white block">Bangalore That Builds</span>
              <span className="text-[#E5333B] block">
                High-Converting Websites
              </span>
            </motion.h1>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="max-w-xl text-gray-400 text-lg leading-relaxed mt-6"
            >
              Your website should turn visitors into customers. We design fast, secure, and conversion-focused websites that help your business grow. Get a site that looks sharp, loads quickly, and drives real results.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="flex flex-wrap gap-4 mt-8"
            >
              <a
                href="#contact"
                className="btn-primary-red flex items-center gap-2"
              >
                Start Your Project
                <ArrowRight className="w-4 h-4" />
              </a>
              <a href="#portfolio" className="btn-outline">
                View Portfolio
              </a>
            </motion.div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              className="grid grid-cols-2 sm:grid-cols-4 gap-6 mt-12 pt-12 border-t border-white/[0.06]"
            >
              {HERO_STATS.map((stat, index) => (
                <div key={index}>
                  <AnimatedCounter
                    value={stat.value}
                    suffix={stat.suffix}
                    className="text-3xl font-bold text-white block"
                  />
                  <span className="text-sm text-gray-500 mt-1 block">
                    {stat.label}
                  </span>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Right Column - Device Mockups */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.8, duration: 0.8 }}
            className="hidden lg:block"
          >
            <div className="relative w-full h-[500px]">
              {/* Laptop Mockup */}
              <div className="absolute top-0 right-0 w-[400px] h-[260px] rounded-2xl bg-[#111] border border-white/10 p-3 animate-float">
                <div className="rounded-xl bg-gradient-to-br from-[#E5333B]/20 via-[#E5333B]/5 to-transparent w-full h-full p-4">
                  <div className="h-2 bg-white/10 rounded-full mb-3 w-3/4" />
                  <div className="h-2 bg-white/10 rounded-full mb-3 w-1/2" />
                  <div className="h-2 bg-[#E5333B]/30 rounded-full mb-3 w-2/3" />
                  <div className="h-2 bg-white/10 rounded-full mb-3 w-5/6" />
                  <div className="mt-6 grid grid-cols-3 gap-2">
                    <div className="h-16 rounded-lg bg-white/5 border border-white/[0.06]" />
                    <div className="h-16 rounded-lg bg-white/5 border border-white/[0.06]" />
                    <div className="h-16 rounded-lg bg-white/5 border border-white/[0.06]" />
                  </div>
                </div>
              </div>

              {/* Tablet Mockup */}
              <div className="absolute bottom-8 right-0 w-[180px] h-[250px] rounded-2xl bg-[#0A0A0A] border border-white/10 p-2 animate-float-delayed z-10">
                <div className="rounded-xl bg-gradient-to-br from-[#E5333B]/15 via-[#E5333B]/5 to-transparent w-full h-full p-3">
                  <div className="h-2 bg-white/10 rounded-full mb-2 w-3/4" />
                  <div className="h-2 bg-white/10 rounded-full mb-2 w-1/2" />
                  <div className="h-2 bg-[#E5333B]/30 rounded-full mb-4 w-2/3" />
                  <div className="h-20 rounded-lg bg-white/5 border border-white/[0.06] mb-2" />
                  <div className="h-20 rounded-lg bg-white/5 border border-white/[0.06]" />
                </div>
              </div>

              {/* Phone Mockup */}
              <div className="absolute bottom-16 left-8 w-[110px] h-[200px] rounded-2xl bg-[#0A0A0A] border border-white/10 p-2 animate-float-slow z-20">
                <div className="rounded-xl bg-gradient-to-br from-[#E5333B]/15 via-[#E5333B]/5 to-transparent w-full h-full p-2">
                  <div className="h-1.5 bg-white/10 rounded-full mb-2 w-3/4" />
                  <div className="h-1.5 bg-white/10 rounded-full mb-2 w-1/2" />
                  <div className="h-1.5 bg-[#E5333B]/30 rounded-full mb-3 w-2/3" />
                  <div className="h-14 rounded-lg bg-white/5 border border-white/[0.06] mb-2" />
                  <div className="h-14 rounded-lg bg-white/5 border border-white/[0.06]" />
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
