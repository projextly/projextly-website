"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function WhoAreWe() {
  return (
    <section id="about" className="bg-white py-20">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Small Heading */}
        <p className="text-sm font-medium text-red-500 mb-4">
          Web Development Company in Bangalore
        </p>

        {/* Main Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-5xl font-bold text-black leading-tight mb-6"
        >
          Projextly - Best web development company in Bangalore
        </motion.h2>

        {/* Content */}
        <div className="grid lg:grid-cols-[220px_1fr] gap-12">
          {/* Left Decorative Line */}
          <div className="hidden lg:flex justify-center pt-3">
            <div className="h-px w-48 bg-gray-800"></div>
          </div>

          {/* Right Content */}
          <div>
            <p className="text-lg text-start leading-6 sm:leading-8 text-gray-700 mb-6 sm:mb-8">
              Welcome to <strong>Projextly</strong>, a leading website
              development company in Bangalore. We offer unique and creative
              web development services that have higher engagement rates at
              affordable prices. Whether it's e-business strategies, website
              development, web design, or web application development, we've
              got you covered.
            </p>

            <p className="text-lg leading-6 sm:leading-8 text-gray-700 mb-8">
              Our experienced team understands your business needs and creates
              visually appealing and functional websites. We stay updated with
              the latest technologies to optimize your website for search
              engines and ensure a great user experience. With our expertise,
              we can help your business grow online.
            </p>

            {/* Buttons */}
            <div className="flex flex-wrap items-center gap-8">
              {/* <Link
                href="/projects"
                className="rounded-full bg-red-500 px-10 py-5 text-lg font-semibold text-white transition hover:bg-red-600"
              >
                Explore our projects
              </Link> */}

              <Link
                href="/contact"
                className="group flex items-center gap-4 text-xl font-medium text-black"
              >
                {/* <span className="h-3 w-3 rounded-full border border-gray-500"></span> */}

                <span className="border-b border-black pb-1 group-hover:text-red-500 group-hover:border-red-500 transition">
                  Get in touch
                </span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}