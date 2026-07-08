"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

const SERVICES = [
  "Custom Web Development",
  "Full-stack Development",
  "E-commerce Development",
  "Cloud-based Web Development",
  "UI/UX Development",
  "CMS Development",
];

export default function Services() {
  return (
    <section className="py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">

        {/* Heading */}

        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-3xl"
        >
          <h2 className="text-5xl md:text-6xl font-bold tracking-tight text-white leading-[1.05]">
            Our website development
            <br />
            services
          </h2>

          <p className="mt-8 text-xl leading-9 text-zinc-600">
            We build premium websites and digital products that combine
            outstanding design with high-performance engineering to help your
            business grow faster.
          </p>
        </motion.div>

        {/* Services */}

        <div className="mt-20 grid grid-cols-1 md:grid-cols-2 gap-x-16">

          {SERVICES.map((service, index) => (
            <motion.div
              key={service}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.08 }}
              viewport={{ once: true }}
              className="group"
            >
              <button
                className="flex w-full items-center justify-between border-b border-zinc-300 py-8 transition-all duration-300 hover:border-white"
              >
                <span className="text-3xl font-medium text-white transition-all group-hover:translate-x-2">
                  {service}
                </span>

                <ArrowUpRight
                  className="h-7 w-7 text-white  transition-all duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
                />
              </button>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}