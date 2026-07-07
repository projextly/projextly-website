"use client";

import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowLeft, ArrowRight, ArrowUpRight } from "lucide-react";
import { useState } from "react";

const industries = [
  {
    title: "Financial Services",
    image:
      "https://images.unsplash.com/photo-1554224155-6726b3ff858f?q=80&w=1200&auto=format&fit=crop",
    description:
      "We create secure, modern banking websites and fintech platforms that build customer trust while ensuring safety, compliance, and seamless digital experiences.",
  },
  {
    title: "Healthcare",
    image:
      "https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?q=80&w=1200&auto=format&fit=crop",
    description:
      "From hospital websites to telemedicine portals, we build healthcare solutions that improve patient engagement and online appointments.",
  },
  {
    title: "E-Commerce",
    image:
      "https://images.unsplash.com/photo-1556740749-887f6717d7e4?q=80&w=1200&auto=format&fit=crop",
    description:
      "Grow your online business with scalable eCommerce websites featuring secure payments, inventory management, and excellent shopping experiences.",
  },
  {
    title: "Education",
    image:
      "https://images.unsplash.com/photo-1523240795612-9a054b0db644?q=80&w=1200&auto=format&fit=crop",
    description:
      "Interactive learning platforms, LMS portals, and education websites designed to make online learning simple and engaging.",
  },
  {
    title: "Real Estate",
    image:
      "https://images.unsplash.com/photo-1560518883-ce09059eeffa?q=80&w=1200&auto=format&fit=crop",
    description:
      "Beautiful real estate websites with advanced property listings, maps, virtual tours, and lead generation systems.",
  },
  {
    title: "Travel & Hospitality",
    image:
      "https://images.unsplash.com/photo-1502920917128-1aa500764cbd?q=80&w=1200&auto=format&fit=crop",
    description:
      "Travel booking websites and hospitality platforms designed to deliver memorable customer experiences.",
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
    <section className="bg-white py-24">
      <div className="mx-auto max-w-7xl px-6">

        {/* Heading */}

        <span className="text-red-500 text-lg">Industries</span>

        <h2 className="mt-2 text-5xl md:text-6xl font-semibold tracking-tight">
          Industries we serve
        </h2>

        {/* Main */}

        <div className="mt-20 grid gap-16 lg:grid-cols-12 items-start">

          {/* Image */}

          <div className="lg:col-span-5 overflow-hidden rounded-sm">

            <AnimatePresence mode="wait">
              <motion.div
                key={active.image}
                initial={{ opacity: 0, x: 60 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -60 }}
                transition={{ duration: 0.45 }}
              >
                <Image
                  src={active.image}
                  alt={active.title}
                  width={700}
                  height={550}
                  className="h-[420px] w-full object-cover"
                />
              </motion.div>
            </AnimatePresence>

          </div>

          {/* Right */}

          <div className="lg:col-span-7 flex flex-col justify-between h-full">

            <div>

              {/* Tabs */}

              <div className="grid grid-cols-2 gap-20">

                <div>
                  <div className="mb-8 h-px bg-neutral-300" />

                  <button className="text-5xl font-medium text-black text-left">
                    {active.title}
                  </button>
                </div>

                <div>
                  <div className="mb-8 h-px bg-neutral-300" />

                  <button
                    onClick={next}
                    className="text-4xl font-normal text-neutral-300 hover:text-black transition"
                  >
                    {nextIndustry.title}
                  </button>
                </div>
              </div>

              {/* Description */}

              <AnimatePresence mode="wait">

                <motion.div
                  key={active.description}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -30 }}
                  transition={{ duration: .4 }}
                >
                  <p className="mt-12 max-w-xl text-2xl leading-relaxed text-neutral-700">
                    {active.description}
                  </p>
                </motion.div>

              </AnimatePresence>

              {/* Link */}

              <button className="group mt-24 flex items-center gap-4 text-2xl font-medium">

                <span className="border-b border-black pb-1">
                  Explore {active.title}
                </span>

                <ArrowUpRight
                  size={26}
                  className="transition group-hover:-translate-y-1 group-hover:translate-x-1"
                />

              </button>

            </div>

            {/* Navigation */}

            <div className="mt-20 flex justify-end gap-5">

              <button
                onClick={prev}
                className="flex h-16 w-16 items-center justify-center rounded-full border border-red-400 text-red-400 hover:bg-red-500 hover:text-white transition"
              >
                <ArrowLeft />
              </button>

              <button
                onClick={next}
                className="flex h-16 w-16 items-center justify-center rounded-full border border-red-400 text-red-400 hover:bg-red-500 hover:text-white transition"
              >
                <ArrowRight />
              </button>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}