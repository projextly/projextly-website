"use client";

import { motion, useTransform, useScroll } from "framer-motion";
import { useRef } from "react";
import { PROCESS_STEPS } from "@/lib/constants";

export default function OurProcess() {
  return (
    <div className="bg-[#030712] relative overflow-hidden">
      <div className="absolute top-1/2 right-0 w-[600px] h-[600px] bg-[#10B981]/5 rounded-full blur-[150px] pointer-events-none mix-blend-screen -translate-y-1/2" />

      <div className="flex flex-col items-center justify-center pt-32 pb-16 relative z-10">
        <p className="text-[#10B981] font-semibold text-xs uppercase tracking-[0.3em] mb-4">
          Methodology
        </p>
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-white tracking-tight">
          How we engineer <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#10B981] to-emerald-400">excellence.</span>
        </h2>
      </div>
      
      <HorizontalScrollTimeline />
    </div>
  );
}

const HorizontalScrollTimeline = () => {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start start", "end end"]
  });

  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-60%"]);

  return (
    <section ref={targetRef} className="relative h-[110vh] bg-[#030712]">
      <div className="sticky top-0 flex h-[100vh] items-stretch overflow-hidden">
        
        {/* Continuous horizontal glow line in the background */}
        <div className="absolute top-[40%] left-0 right-0 h-px bg-white/10 pointer-events-none">
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#10B981] to-transparent opacity-30 shadow-[0_0_15px_#10B981]" />
        </div>

        <motion.div style={{ x }} className="flex h-full px-[10vw]">
          {PROCESS_STEPS.map((step, index) => (
            <TimelineCard step={step} key={index} index={index} />
          ))}
        </motion.div>
      </div>
    </section>
  );
};

const TimelineCard = ({ step, index }: { step: (typeof PROCESS_STEPS)[0], index: number }) => {
  return (
    <div className="relative h-full w-[450px] shrink-0 group">
      {/* Circle pinned to top-[40%] */}
      <div
        className="absolute top-[40%] left-1/2 -translate-x-1/2 -translate-y-1/2
                   w-48 h-48 rounded-full bg-[#030712] border border-white/10 flex flex-col items-center justify-center
                   z-10 group-hover:scale-105 group-hover:border-[#10B981]/50 transition-all duration-500 shadow-2xl relative overflow-hidden"
      >
        <div className="absolute inset-0 bg-[#10B981]/0 group-hover:bg-[#10B981]/5 transition-colors duration-500" />
        <span className="text-[#10B981] font-display font-bold text-lg mb-2">0{index + 1}</span>
        <h3 className="text-white text-xl font-display font-bold tracking-wide text-center px-4 relative z-10">
          {step.title}
        </h3>
      </div>

      {/* Connector line + description hanging off the circle */}
      <div
        className="absolute left-1/2 -translate-x-1/2 flex flex-col items-center w-[300px]"
        style={{ top: "calc(40% + 96px)" }}
      >
        <div className="h-16 w-px bg-white/20 group-hover:bg-[#10B981]/50 transition-colors duration-500 relative">
          <div className="absolute top-full left-1/2 -translate-x-1/2 w-2 h-2 rounded-full bg-white/20 group-hover:bg-[#10B981] group-hover:shadow-[0_0_10px_#10B981] transition-all duration-500" />
        </div>
        <div className="glass-panel mt-6 p-6 border border-white/5 bg-white/[0.02] group-hover:bg-white/[0.04] transition-colors rounded-2xl w-full">
          <p className="text-sm text-slate-400 leading-relaxed font-medium text-center">
            {step.desc}
          </p>
        </div>
      </div>
    </div>
  );
};