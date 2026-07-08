"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, ArrowRight } from "lucide-react";

const features = [
  {
    title: "Dedicated & Personalized Engineering",
    description:
      "We don't use templates. We architect bespoke digital solutions from the ground up to achieve extraordinary outcomes.",
    points: [
      "Focus on your specific KPI needs",
      "Tailored system architecture",
      "Personalized technical attention",
    ],
  },
  {
    title: "Elite Quality at Scale",
    description:
      "Our streamlined agile processes and top-tier talent allocation enable us to deliver enterprise-grade solutions efficiently.",
    points: [
      "Transparent pricing models",
      "World-class code quality",
      "Maximum ROI",
    ],
  },
  {
    title: "Real-time Project Telemetry",
    description:
      "We prioritize transparent communication. Clients have access to real-time development metrics and staging environments.",
    points: [
      "Continuous deployment access",
      "Sprint velocity tracking",
      "Direct engineer communication",
    ],
  },
  {
    title: "Continuous Optimization",
    description:
      "Deployment is just the beginning. We provide ongoing support to maintain, secure, and optimize your platform.",
    points: [
      "24/7 SLA availability",
      "Proactive security patching",
      "Performance monitoring",
    ],
  },
  {
    title: "Hyper-Responsive Interfaces",
    description:
      "We build liquid layouts that adapt flawlessly to any device, ensuring an uncompromising user experience everywhere.",
    points: [
      "Mobile-first architecture",
      "Cross-browser perfection",
      "High engagement retention",
    ],
  },
  {
    title: "Future-Proof Performance",
    description:
      "We leverage modern tooling (Next.js, Edge computing) to deliver instantaneous load times and scalable infrastructure.",
    points: [
      "Edge-network deployment",
      "Serverless scalability",
      "Unbreakable security",
    ],
  },
];

export default function WhyChooseUs2() {
  return (
    <section className="bg-[#030712] py-32 relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,_var(--tw-gradient-stops))] from-[#10B981]/5 via-transparent to-transparent pointer-events-none" />
      <div className="grain-overlay pointer-events-none opacity-20" />

      {/* Header */}
      <div className="relative z-10 border-b border-white/10 pb-20">
        <div className="mx-auto max-w-7xl px-6">
          <div className="flex flex-wrap items-center justify-between gap-10">
            <motion.h2 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6 }}
              className="max-w-4xl text-4xl font-display font-bold leading-tight text-white md:text-5xl lg:text-6xl tracking-tight"
            >
              Why Projextly is the Top <br className="hidden lg:block" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#10B981] to-emerald-400">Engineering Partner</span>
            </motion.h2>

            <motion.button 
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="flex h-16 w-24 items-center justify-center rounded-full border border-white/20 hover:border-[#10B981] hover:bg-[#10B981]/10 text-white hover:text-[#10B981] transition-all duration-300"
            >
              <ArrowRight size={28} strokeWidth={1.5} />
            </motion.button>
          </div>
        </div>
      </div>

      {/* Feature Grid */}
      <div className="mx-auto max-w-7xl px-6 pt-20 relative z-10">
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          variants={{ visible: { transition: { staggerChildren: 0.1 } } }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {features.map((item, index) => (
            <motion.div
              variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0, transition: { duration: 0.5 } } }}
              key={index}
              className="glass-panel p-8 md:p-10 border border-white/5 bg-white/[0.02] hover:bg-white/[0.04] transition-colors group rounded-[2rem]"
            >
              <h3 className="mb-6 text-2xl font-display font-bold leading-tight text-white group-hover:text-[#10B981] transition-colors">
                {item.title}
              </h3>

              <p className="mb-8 text-base leading-relaxed text-slate-400 font-medium">
                {item.description}
              </p>

              <ul className="space-y-3 text-sm text-slate-300 font-medium">
                {item.points.map((point) => (
                  <li key={point} className="flex items-center gap-3">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#10B981] shadow-[0_0_8px_#10B981]" />
                    {point}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </motion.div>

        {/* Button */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-16 flex justify-center"
        >
          <button className="magnetic-btn group flex items-center gap-3 border border-[#10B981]/50 bg-[#10B981]/10 px-8 py-5 text-base font-bold text-[#10B981] rounded-full transition-all hover:bg-[#10B981] hover:text-black shadow-[0_0_30px_rgba(16,185,129,0.15)]">
            Schedule Technical Consultation
            <ArrowUpRight
              size={20}
              className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-1"
            />
          </button>
        </motion.div>
      </div>
    </section>
  );
}