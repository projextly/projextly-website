"use client";

import { useEffect, useState } from "react";
import {
  Carousel,
  CarouselApi,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import { CLIENTS } from "@/lib/constants";
import Image from "next/image";
import { motion } from "framer-motion";

export default function Clients() {
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    if (!api) {
      return;
    }

    const timer = setTimeout(() => {
      if (api.selectedScrollSnap() + 1 === api.scrollSnapList().length) {
        setCurrent(0);
        api.scrollTo(0);
      } else {
        api.scrollNext();
        setCurrent(current + 1);
      }
    }, 1500);

    return () => clearTimeout(timer);
  }, [api, current]);

  return (
    <section className="section-dark bg-black py-16 relative overflow-hidden">
      <div className="grain-overlay" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        {/* <p className="text-gray-400 text-sm uppercase tracking-widest text-center mb-12 font-medium">
          Trusted by innovative companies
        </p> */}

        {/* Infinite Scroll Carousel */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6 }}
        >
        <Carousel
          setApi={setApi}
          className="w-full"
          opts={{
            align: "start",
            loop: true,
          }}
        >
          <CarouselContent>
            {CLIENTS.map((client, index) => (
              <CarouselItem
                className="basis-1/3 sm:basis-1/4 lg:basis-1/6"
                key={index}
              >
                <div className="group flex flex-col items-center justify-center transition-all duration-300">
                  {/* Logo Container */}
                  {/* <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center mb-3 group-hover:border-[#00e5ff]/30 group-hover:bg-white/[0.08] transition-all duration-300"> */}
                    <Image 
                     src={client.logo}
                     alt={client.name}
                     width={100}
                     height={100}
                    />
                  {/* </div> */}
                  {/* Client Name */}
                  {/* <span className="text-white font-semibold text-sm text-center group-hover:text-gray-100 transition-colors">
                    {client.name}
                  </span> */}
                  {/* Industry */}
                  {/* <span className="text-gray-500 text-xs mt-1 text-center">
                    {client.industry}
                  </span> */}
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
        </motion.div>
      </div>
    </section>
  );
}
