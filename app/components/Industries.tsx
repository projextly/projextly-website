"use client";

import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowLeft, ArrowRight, ArrowUpRight } from "lucide-react";
import { useState } from "react";

const industries = [
  {
    title: "Financial Services",
    image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?q=80&w=1200&auto=format&fit=crop",
    description: "We engineer secure, modern banking and fintech platforms that build customer trust while ensuring rigorous compliance and seamless digital experiences.",
  },
  {
    title: "Healthcare",
    image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?q=80&w=1200&auto=format&fit=crop",
    description: "From complex hospital portals to telemedicine applications, we build healthcare solutions prioritizing patient engagement and HIPAA compliance.",
  },
  {
    title: "E-Commerce",
    image: "https://images.unsplash.com/photo-1556740749-887f6717d7e4?q=80&w=1200&auto=format&fit=crop",
    description: "Scale your revenue with high-performance headless eCommerce architectures featuring frictionless checkouts and microsecond load times.",
  },
  {
    title: "Education",
    image: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?q=80&w=1200&auto=format&fit=crop",
    description: "Immersive learning platforms and LMS portals engineered to deliver engaging educational experiences at scale.",
  },
  {
    title: "Real Estate",
    image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?q=80&w=1200&auto=format&fit=crop",
    description: "Premium property platforms with advanced spatial mapping, virtual tours, and automated lead generation engines.",
  },
];

export default function Industries() {
  const [current, setCurrent] = useState(0);

  const next = () => {
    setCurrent((prev) => (prev + 1) % industries.length);
  };

  const prev = () => {
    setCurrent((prev) => (prev - 1 + industries.length) % industries.length);
  };

  const active = industries[current];
  const nextIndustry = industries[(current + 1) % industries.length];

  return (
    <section className="bg-[#030712] py-32 overflow-hidden relative">
      <div className="absolute top-1/2 left-0 w-[600px] h-[600px] bg-[#10B981]/5 rounded-full blur-[150px] pointer-events-none mix-blend-screen" />

      <div className="mx-auto max-w-7xl px-6 relative z-10">
        {/* Heading */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6 }}
        >
          <span className="text-[#10B981] font-semibold text-xs uppercase tracking-[0.3em]">Verticals</span>
          <h2 className="mt-4 text-4xl md:text-5xl lg:text-6xl font-display font-bold tracking-tight text-white">
            Industries we serve.
          </h2>
        </motion.div>

        {/* Main */}
        <div className="mt-20 grid gap-16 lg:grid-cols-12 items-start">
          
          {/* Image */}
          <div className="lg:col-span-5 overflow-hidden rounded-[2rem] border border-white/10 relative group">
            <div className="absolute inset-0 bg-[#10B981]/20 mix-blend-overlay z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <AnimatePresence mode="wait">
              <motion.div
                key={active.image}
                initial={{ opacity: 0, scale: 1.05 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
              >
                <Image
                  src={active.image}
                  alt={active.title}
                  width={700}
                  height={550}
                  className="h-[450px] w-full object-cover grayscale opacity-80"
                />
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Right */}
          <div className="lg:col-span-7 flex flex-col justify-between h-full lg:min-h-[450px]">
            <div>
              {/* Tabs */}
              <div className="grid grid-cols-2 gap-10 lg:gap-20">
                <div>
                  <div className="mb-8 h-px bg-white/20 relative">
                    <motion.div 
                      layoutId="industry-indicator" 
                      className="absolute inset-y-0 left-0 bg-[#10B981]" 
                      style={{ width: "100%" }} 
                    />
                  </div>
                  <button className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold text-white text-left tracking-tight">
                    {active.title}
                  </button>
                </div>

                <div>
                  <div className="mb-8 h-px bg-white/10" />
                  <button
                    onClick={next}
                    className="text-2xl sm:text-3xl lg:text-4xl font-display font-bold text-white/20 hover:text-white/50 transition-colors text-left"
                  >
                    {nextIndustry.title}
                  </button>
                </div>
              </div>

              {/* Description */}
              <AnimatePresence mode="wait">
                <motion.div
                  key={active.description}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.4 }}
                >
                  <p className="mt-12 max-w-xl text-lg sm:text-xl leading-relaxed text-slate-400 font-medium">
                    {active.description}
                  </p>
                </motion.div>
              </AnimatePresence>

              {/* Link */}
              <button className="group mt-16 flex items-center gap-4 text-xl font-display font-bold text-white hover:text-[#10B981] transition-colors">
                <span>Explore Solutions</span>
                <div className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center group-hover:border-[#10B981] group-hover:bg-[#10B981]/10 transition-all">
                  <ArrowUpRight size={20} className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                </div>
              </button>
            </div>

            {/* Navigation */}
            <div className="mt-16 flex justify-end gap-4">
              <button
                onClick={prev}
                className="flex h-14 w-14 items-center justify-center rounded-full border border-white/20 text-white hover:bg-[#10B981] hover:text-black hover:border-[#10B981] transition-all duration-300"
              >
                <ArrowLeft size={20} />
              </button>
              <button
                onClick={next}
                className="flex h-14 w-14 items-center justify-center rounded-full border border-white/20 text-white hover:bg-[#10B981] hover:text-black hover:border-[#10B981] transition-all duration-300"
              >
                <ArrowRight size={20} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}