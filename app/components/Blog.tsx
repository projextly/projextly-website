"use client";

import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { motion } from "framer-motion";
import { BLOG_POSTS } from "@/lib/constants";

const gradients = [
  "from-[#34D399]/20 via-cyan-600/15 to-blue-600/20",
  "from-emerald-600/20 via-[#34D399]/15 to-cyan-600/20",
  "from-amber-600/20 via-orange-600/15 to-red-600/20",
];

export default function Blog() {
  return (
    <section className="section-light py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <p className="text-[#34D399] font-semibold text-sm uppercase tracking-widest mb-3 text-center">
          Latest Insights
        </p>
        <motion.h2 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6 }}
          className="text-3xl sm:text-4xl font-bold text-gray-900 text-center mb-14"
        >
          From Our Blog
        </motion.h2>

        {/* Grid */}
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          variants={{ visible: { transition: { staggerChildren: 0.1 } } }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          {BLOG_POSTS.map((post, index) => (
            <motion.div
              key={post.title}
              variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0, transition: { duration: 0.5 } } }}
              className="bg-white/5 backdrop-blur-[12px] border border-white/[0.1] rounded-2xl hover:bg-white/10 group cursor-pointer transition-all duration-300 overflow-hidden flex flex-col"
            >
              {/* Thumbnail */}
              <div className={`h-48 relative overflow-hidden bg-gradient-to-br ${gradients[index % gradients.length]}`}>
                <span className="absolute inset-0 flex items-center justify-center text-[8rem] font-black text-gray-900/5 select-none leading-none uppercase">
                  {post.title.charAt(0)}
                </span>
              </div>

              {/* Content */}
              <div className="p-6">
                {/* Meta row */}
                <div className="flex items-center gap-3 mb-3">
                  <span className="text-xs font-bold text-[#34D399] uppercase tracking-wider">
                    {post.category}
                  </span>
                  <span className="w-1 h-1 rounded-full bg-gray-300" />
                  <span className="text-xs text-gray-500">{post.date}</span>
                </div>

                {/* Title */}
                <h3 className="text-gray-900 font-bold text-base leading-snug mb-3 group-hover:text-[#34D399] transition-colors">
                  {post.title}
                </h3>

                {/* Read More */}
                <Link
                  href="#"
                  className="inline-flex items-center gap-1 text-sm font-medium text-[#34D399] hover:text-[#059669] transition-colors mt-auto"
                >
                  Read More
                  <ArrowUpRight className="w-4 h-4" />
                </Link>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
