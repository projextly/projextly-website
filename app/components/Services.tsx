"use client";

import { useEffect, useState } from "react";
import { ArrowUpRight } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";

const SERVICES = [
  {
    title: "Custom web development",
    image:
      "/services/custom-web-development.png",
    heading: "Custom Web Development",
    description:
      "Build scalable and secure custom websites tailored to your business.",
  },
  {
    title: "E-commerce development",
    image:
      "/services/e-commerce-development.png",
    heading: "E-commerce Development",
    description:
      "Modern online stores with secure payments and fast performance.",
  },
  {
    title: "UI/UX development",
    image:
      "/services/ui-ux-development.png",
    heading: "UI/UX Design",
    description:
      "Beautiful user interfaces designed to improve customer experience.",
  },
  {
    title: "Full-stack development",
    image:
      "/services/full-stack-development.png",
    heading: "Full-stack Development",
    description:
      "Complete frontend and backend development using modern technologies.",
  },
  {
    title: "Cloud-based web development",
    image:
      "/services/cloud-based-web-development.png",
    heading: "Cloud Development",
    description:
      "Deploy scalable cloud applications with high availability.",
  },
  {
    title: "CMS development",
    image:
      "/services/cms-development.png",
    heading: "CMS Development",
    description:
      "Easy-to-manage websites powered by modern CMS solutions.",
  },
];

export default function Services() {
  const [activeIndex, setActiveIndex] = useState(0);

  const activeService = SERVICES[activeIndex];

  // Auto change every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % SERVICES.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section id="services" className="bg-white py-24 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* RIGHT IMAGE (Mobile First) */}
          <motion.div
            className="order-1 lg:order-2 relative"
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="relative h-87 sm:h-112 lg:h-115 rounded-[28px] overflow-hidden shadow-2xl">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeService.title}
                  initial={{ opacity: 0, scale: 0.97 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.97 }}
                  transition={{ duration: 0.4 }}
                  className="relative w-full h-full"
                >
                  <Image
                    src={`${activeService.image}`}
                    alt={activeService.heading}
                    // fill
                    // priority
                    width={800}
                    height={600}
                    quality={100}
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    style={{ width: "100%", height: "100%" }}
                    className="object-cover"
                  />
                  

                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent" />

                  <div className="absolute bottom-6 lg:bottom-10 left-6 lg:left-10 right-6 lg:right-10 text-white">
                    <h3 className="text-3xl sm:text-4xl lg:text-5xl font-semibold mb-4 lg:mb-6">
                      {activeService.heading}
                    </h3>

                    <p className="text-base sm:text-lg lg:text-xl leading-7 lg:leading-9 text-white/90">
                      {activeService.description}
                    </p>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
          </motion.div>

          {/* LEFT CONTENT */}
          <motion.div
            className="order-2 lg:order-1"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl md:text-5xl font-semibold leading-tight text-black">
              Our website development
              <br />
              services
            </h2>

            <p className="mt-4 text-lg text-zinc-600 leading-7 max-w-xl">
              Projextly is a reliable web development company. We provide
              high-quality web solutions that improve user experience and help
              businesses grow online.
            </p>

            <div className="grid md:grid-cols-2 gap-x-8 mt-6">
              {/* LEFT COLUMN */}
              <div>
                {SERVICES.slice(0, 3).map((service, index) => (
                  <button
                    key={service.title}
                    onClick={() => setActiveIndex(index)}
                    className={`w-full border-b border-zinc-200 py-6 flex justify-between items-center transition-all duration-300 ${
                      activeIndex === index
                        ? "text-cyan-600"
                        : "text-black hover:text-cyan-600"
                    }`}
                  >
                    <span className="text-left">{service.title}</span>

                    <ArrowUpRight
                      className={`transition-transform duration-300 ${
                        activeIndex === index ? "rotate-45" : ""
                      }`}
                    />
                  </button>
                ))}
              </div>

              {/* RIGHT COLUMN */}
              <div>
                {SERVICES.slice(3).map((service, index) => (
                  <button
                    key={service.title}
                    onClick={() => setActiveIndex(index + 3)}
                    className={`w-full border-b border-zinc-200 py-6 flex justify-between items-center transition-all duration-300 ${
                      activeIndex === index + 3
                        ? "text-cyan-600"
                        : "text-black hover:text-cyan-600"
                    }`}
                  >
                    <span className="text-left">{service.title}</span>

                    <ArrowUpRight
                      className={`transition-transform duration-300 ${
                        activeIndex === index + 3 ? "rotate-45" : ""
                      }`}
                    />
                  </button>
                ))}
              </div>
            </div>

            {/* Progress Indicators */}
            <div className="flex gap-2 mt-8">
              {SERVICES.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setActiveIndex(index)}
                  className={`h-2 rounded-full transition-all duration-300 ${
                    activeIndex === index
                      ? "w-10 bg-cyan-600"
                      : "w-2 bg-zinc-300"
                  }`}
                />
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}