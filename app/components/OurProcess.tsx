"use client";

import { motion, useTransform, useScroll } from "framer-motion";
import { useRef } from "react";
import { PROCESS_STEPS } from "@/lib/constants";

export default function OurProcess() {
  return (
    <div className="bg-[#FFF8F9]">
      <div className="flex h-48 flex-col items-center justify-center pt-24 pb-12">
        <h2 className="text-4xl md:text-5xl text-black tracking-tight">
          Our website development process
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
  });

  // Scroll distance scales with item count instead of a hardcoded magic number,
  // so this keeps working if PROCESS_STEPS grows or shrinks.
  const itemCount = PROCESS_STEPS.length;
  // const travelPercent = ((itemCount - 1) / itemCount) * 100;
  const x = useTransform(scrollYProgress, [0, 1], ["0%", `-65%`]);

  return (
    <>
      {/* Mobile & Tablet: Vertical Stack */}
      {/* <div className="md:hidden flex flex-col items-center gap-16 px-4 pb-24">
        {PROCESS_STEPS.map((step, index) => (
          <div key={index} className="flex flex-col items-center text-center max-w-sm relative">
            {index !== PROCESS_STEPS.length - 1 && (
              <div className="absolute top-[180px] bottom-[-64px] left-1/2 w-[1px] bg-black/20" />
            )}

            <div className="w-48 h-48 rounded-full bg-[#1A1A1A] flex items-center justify-center z-10 shadow-2xl">
              <h3 className="text-white text-xl font-medium tracking-wide">
                {step.title}
              </h3>
            </div>

            <div className="h-10 w-[1px] bg-black/50 z-10" />

            <p className="text-sm text-gray-800 leading-relaxed font-medium z-10 px-4">
              {step.desc}
            </p>
          </div>
        ))}
      </div> */}

      {/* Desktop: Horizontal Scrolling Timeline */}
      <section ref={targetRef} className="relative h-[200vh] bg-[#FFF8F9]">
        <div className="sticky top-0 flex h-[100vh] items-stretch overflow-hidden">
          {/* Continuous horizontal line in the background */}
          <div className="absolute top-[35%] left-64 right-0 h-[1px] bg-black pointer-events-none" />

          <motion.div style={{ x }} className="flex h-full px-[8vw]">
            {PROCESS_STEPS.map((step, index) => (
              <TimelineCard step={step} key={index} />
            ))}
          </motion.div>
        </div>
      </section>
    </>
  );
};

const TimelineCard = ({ step }: { step: (typeof PROCESS_STEPS)[0] }) => {
  return (
    <div className="relative h-full w-[550px] shrink-0">
      {/* Circle: center is pinned to the same top-[35%] line the background uses */}
      <div
        className="absolute top-[35%] left-1/2 -translate-x-1/2 -translate-y-1/2
                   w-58 h-58 rounded-full bg-[#1A1A1A] flex items-center justify-center
                   z-10 hover:scale-105 transition-transform duration-300 shadow-xl"
      >
        <h3 className="text-white text-2xl font-medium tracking-wide text-center px-4">
          {step.title}
        </h3>
      </div>

      {/* Connector line + description hang off the circle's bottom edge (96px = half of 192px circle) */}
      <div
        className="absolute left-1/2 -translate-x-1/2 flex flex-col items-center"
        style={{ top: "calc(35% + 96px)" }}
      >
        <div className="h-16 w-[1px] bg-black" />
        <p className="text-sm text-gray-800 leading-relaxed font-medium text-center px-6 mt-4 max-w-[280px]">
          {step.desc}
        </p>
      </div>
    </div>
  );
};