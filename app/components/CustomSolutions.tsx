"use client";

import { Check } from "lucide-react";
import { PRICING_PLANS } from "@/lib/constants";
import Link from "next/link";
import { motion } from "framer-motion";

export default function CustomSolutions() {
  return (
    <section className="section-light py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-3xl mx-auto mb-16">
          <p className="text-zinc-500 font-semibold text-sm uppercase tracking-widest mb-3">
            Flexible Packages
          </p>
          <motion.h2 
            initial={{ opacity: 0, y: 30 }} 
            whileInView={{ opacity: 1, y: 0 }} 
            viewport={{ once: true, margin: "-50px" }} 
            transition={{ duration: 0.6 }}
            className="text-4xl sm:text-5xl font-bold text-zinc-900 mb-6 leading-tight"
          >
            Solutions for Every Stage
          </motion.h2>
          <p className="text-zinc-600 text-lg">
            Whether you are a startup launching your first product or an enterprise scaling globally, we have the right package tailored to your needs.
          </p>
        </div>

        <motion.div 
          initial="hidden" 
          whileInView="visible" 
          viewport={{ once: true, margin: "-50px" }} 
          variants={{ visible: { transition: { staggerChildren: 0.1 } } }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          {PRICING_PLANS.map((plan) => (
            <motion.div 
              variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0, transition: { duration: 0.5 } } }}
              key={plan.tier}
              className="bg-white rounded-[2rem] border border-zinc-100 overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col relative group"
            >
              {plan.highlight && (
                <div className="absolute top-4 right-4 z-20 bg-zinc-900 text-white text-xs font-bold px-3 py-1.5 rounded-full shadow-lg">
                  Most Popular
                </div>
              )}

              {/* Top half with 64px accent and gradient-to-black overlay */}
              <div className="h-16 relative w-full bg-zinc-900 overflow-hidden">
                {/* Abstract pattern / image placeholder */}
                <div 
                  className="absolute inset-0 opacity-50 bg-[url('https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&q=80&w=600')] bg-cover bg-center group-hover:scale-105 transition-transform duration-700"
                />
                {/* Gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-b from-transparent to-zinc-900/90" />
              </div>

              {/* Bottom half */}
              <div className="p-6 flex flex-col flex-grow">
                <div className="mb-6">
                  <h3 className="text-2xl font-bold text-zinc-900 mb-1">{plan.tier}</h3>
                  <p className="text-zinc-500 text-sm">{plan.subtitle}</p>
                </div>

                <div className="text-3xl font-bold text-zinc-900 mb-6 pb-6 border-b border-zinc-100">
                  {plan.price}
                </div>

                <ul className="space-y-4 mb-8 flex-grow">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-3">
                      <Check className="w-4 h-4 text-zinc-400 mt-0.5 shrink-0" />
                      <span className="text-sm text-zinc-600 leading-relaxed">{feature}</span>
                    </li>
                  ))}
                </ul>

                <button 
                  className={`w-full py-3.5 px-6 rounded-xl font-semibold transition-all duration-300 text-sm ${
                    plan.highlight 
                      ? "bg-zinc-900 text-white hover:bg-zinc-800 shadow-md hover:shadow-xl hover:-translate-y-0.5" 
                      : "bg-zinc-50 text-zinc-900 border border-zinc-200 hover:bg-zinc-100 hover:border-zinc-300"
                  }`}
                >
                  {plan.cta}
                </button>
              </div>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
}
