"use client";

import { motion } from "framer-motion";
import { ArrowRight, Trophy, Zap, Search } from "lucide-react";

const cards = [
  {
    icon: <Trophy className="w-8 h-8 text-[#10B981]" />,
    title: "Award-Winning UI",
    description: "We deliver breathtaking, creative interfaces that captivate users and set the standard in modern web development.",
  },
  {
    icon: <Zap className="w-8 h-8 text-emerald-400" />,
    title: "High-Performance Engineering",
    description: "Using cutting-edge stacks like Next.js, we build scalable web applications that load instantly and perform flawlessly under heavy traffic.",
  },
  {
    icon: <Search className="w-8 h-8 text-teal-400" />,
    title: "SEO Dominance",
    description: "Our technical SEO architectures ensure your platform ranks at the top of search engine results, driving organic growth.",
  },
];

const points = [
  "Elite engineering team delivering bespoke digital solutions.",
  "Tailored architectures for complex, high-scale business needs.",
  "Pixel-perfect implementation of modern UI/UX principles.",
  "Agile methodologies ensuring rapid, transparent delivery.",
];

export default function BusinessSuccess() {
  return (
    <section className="bg-[#030712] py-32 relative overflow-hidden">
      {/* Background gradients */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-[#10B981]/5 to-transparent pointer-events-none" />
      <div className="grain-overlay pointer-events-none opacity-20" />
      
      <div className="mx-auto max-w-7xl px-6 lg:px-8 relative z-10">
        <div className="grid gap-16 lg:grid-cols-2 lg:items-center">
          
          {/* Left Side */}
          <motion.div 
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-display font-bold leading-[1.1] text-white tracking-tight">
              Drive growth with <br className="hidden sm:block" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#10B981] to-emerald-400">intelligent platforms.</span>
            </h2>

            <p className="mt-8 text-lg md:text-xl leading-relaxed text-slate-400 font-medium max-w-lg">
              We offer ultra-premium engineering services tailored for ambitious brands. Our scalable architectures exceed expectations and accelerate digital growth.
            </p>

            <div className="mt-12 space-y-6">
              {points.map((item, i) => (
                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.5, delay: 0.2 + (i * 0.1) }}
                  key={item} 
                  className="flex items-start gap-4 group"
                >
                  <div className="mt-1 flex-shrink-0 w-6 h-6 rounded-full bg-[#10B981]/10 flex items-center justify-center border border-[#10B981]/30 group-hover:bg-[#10B981] transition-colors duration-300">
                    <ArrowRight className="w-3 h-3 text-[#10B981] group-hover:text-black transition-colors" />
                  </div>
                  <p className="text-lg text-slate-300 group-hover:text-white transition-colors">{item}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right Side Cards */}
          <div className="space-y-6 relative">
            {/* Glowing Orb behind cards */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-[#10B981]/10 rounded-full blur-[100px] pointer-events-none" />
            
            {cards.map((card, idx) => (
              <motion.div
                initial={{ opacity: 0, x: 40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8, delay: idx * 0.15, ease: [0.16, 1, 0.3, 1] }}
                key={card.title}
                className="glass-panel p-8 md:p-10 border border-white/5 bg-black/40 hover:bg-black/60 transition-all rounded-[2rem] group"
              >
                <div className="flex gap-6 items-start">
                  <div className="w-14 h-14 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center shrink-0 group-hover:scale-110 group-hover:border-[#10B981]/30 transition-all duration-500">
                    {card.icon}
                  </div>
                  <div>
                    <h3 className="text-2xl font-display font-bold text-white mb-3 group-hover:text-[#10B981] transition-colors">
                      {card.title}
                    </h3>
                    <p className="text-lg leading-relaxed text-slate-400 font-medium">
                      {card.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}