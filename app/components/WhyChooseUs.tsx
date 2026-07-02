"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useTransform, useScroll } from "framer-motion";
import { Card1 } from "@/components/why-choose-us/Card1";
import { Card2 } from "@/components/why-choose-us/Card2";
import { Card3 } from "@/components/why-choose-us/Card3";
import { Card4 } from "@/components/why-choose-us/Card4";


const cards = [Card1, Card2, Card3, Card4];

const WhyChooseUsCarousel = () => {
  return (
    // i want to top corder with rounded
    <div className="bg-black">
      <div className="flex flex-col items-center justify-center px-6 pt-16 pb-8 sm:pt-20 sm:pb-10 md:pt-24 md:pb-12">
        <p className="mb-2 text-center text-xs font-semibold uppercase tracking-widest text-[#34D399] sm:mb-3 sm:text-sm">
          Our website development process
        </p>
        <h2 className="text-center text-2xl font-bold leading-tight text-white sm:text-3xl md:text-4xl lg:text-5xl">
          Why Choose Projextly?
        </h2>
      </div>
      <HorizontalScrollCarousel />
    </div>
  );
};

const HorizontalScrollCarousel = () => {
  const targetRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const [scrollDistance, setScrollDistance] = useState(0);
  const [isTouchLayout, setIsTouchLayout] = useState(false);

  // Switch to a native, swipeable snap-carousel on small screens: pinned
  // scroll-jacking behaves poorly with touch scrolling and viewport resize
  // (e.g. mobile URL bar collapse), so we avoid it below the md breakpoint.
  useEffect(() => {
    const mql = window.matchMedia("(max-width: 767px)");
    const update = () => setIsTouchLayout(mql.matches);
    update();
    mql.addEventListener("change", update);
    return () => mql.removeEventListener("change", update);
  }, []);

  // Measure the real overflow of the track instead of hard-coding a
  // percentage that only happened to work for exactly 4 fixed-width cards.
  useEffect(() => {
    if (isTouchLayout) return;

    const measure = () => {
      if (!trackRef.current) return;
      const trackWidth = trackRef.current.scrollWidth;
      const viewportWidth = window.innerWidth;
      setScrollDistance(Math.max(trackWidth - viewportWidth, 0));
    };

    measure();
    window.addEventListener("resize", measure);
    return () => window.removeEventListener("resize", measure);
  }, [isTouchLayout]);

  const { scrollYProgress } = useScroll({
    target: targetRef,
  });

  const x = useTransform(scrollYProgress, [0, 1], [0, -scrollDistance]);

  if (isTouchLayout) {
    return (
      <section className="bg-black py-8">
        <div className="flex flex-col snap-x snap-mandatory gap-2 overflow-x-auto px-4 pb-4 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
          {cards.map((CardComponent, index) => (
            <div key={index} className="shrink-0 snap-center">
              <CardComponent />
            </div>
          ))}
        </div>
      </section>
    );
  }

  return (
    <section ref={targetRef} className="relative h-[400vh] bg-black">
      <div className="sticky top-0 flex h-screen items-center overflow-hidden">
        <motion.div ref={trackRef} style={{ x }} className="flex gap-4 px-4 sm:gap-6 sm:px-6">
          {cards.map((CardComponent, index) => (
            <CardComponent key={index} />
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default WhyChooseUsCarousel;