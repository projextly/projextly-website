"use client";

import { BLOG_POSTS } from "@/lib/landing-constants";
import { motion } from "framer-motion";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

export default function BlogSection() {
  return (
    <section id="blog" className="section-light py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <p className="text-[#E5333B] font-semibold text-sm uppercase tracking-widest mb-4">
          Blog
        </p>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-3xl sm:text-4xl lg:text-5xl font-bold text-zinc-900"
        >
          Latest from Our Blog
        </motion.h2>
        <p className="text-gray-500 text-lg mt-4 max-w-2xl">
          Insights, tips, and trends from our team of web design experts in
          Bangalore.
        </p>

        {/* Cards */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-16"
        >
          {BLOG_POSTS.map((post, index) => (
            <motion.div key={index} variants={itemVariants}>
              <div className="bg-white rounded-3xl overflow-hidden border border-zinc-100 group hover:-translate-y-2 transition-all duration-300 shadow-sm hover:shadow-lg">
                {/* Image */}
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src={post.image}
                    alt={post.title}
                    width={800}
                    height={400}
                    className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-500"
                  />
                  <span className="absolute top-4 left-4 bg-[#E5333B] text-white text-xs font-semibold px-3 py-1 rounded-full">
                    {post.category}
                  </span>
                </div>

                {/* Content */}
                <div className="p-6">
                  <div className="flex items-center gap-3 text-xs text-gray-400 mb-3">
                    {post.date} · {post.readTime}
                  </div>
                  <h3 className="text-lg font-semibold text-zinc-900 mb-3 group-hover:text-[#E5333B] transition-colors">
                    {post.title}
                  </h3>
                  <p className="text-gray-500 text-sm leading-relaxed mb-4 line-clamp-3">
                    {post.excerpt}
                  </p>
                  <span className="inline-flex items-center gap-1 text-[#E5333B] text-sm font-semibold">
                    Read More
                    <ArrowUpRight className="w-4 h-4" />
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
