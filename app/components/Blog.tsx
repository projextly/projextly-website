import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { BLOG_POSTS } from "@/lib/constants";

const gradients = [
  "from-teal-600/20 via-cyan-600/15 to-blue-600/20",
  "from-emerald-600/20 via-teal-600/15 to-cyan-600/20",
  "from-amber-600/20 via-orange-600/15 to-red-600/20",
];

export default function Blog() {
  return (
    <section className="bg-white py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <p className="text-teal-600 font-semibold text-sm uppercase tracking-widest mb-3 text-center">
          Latest Insights
        </p>
        <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 text-center mb-14">
          From Our Blog
        </h2>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {BLOG_POSTS.map((post, index) => (
            <div
              key={post.title}
              className="b2b-card b2b-card-hover group cursor-pointer transition-all duration-300 overflow-hidden flex flex-col"
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
                  <span className="text-xs font-bold text-teal-600 uppercase tracking-wider">
                    {post.category}
                  </span>
                  <span className="w-1 h-1 rounded-full bg-gray-300" />
                  <span className="text-xs text-gray-500">{post.date}</span>
                </div>

                {/* Title */}
                <h3 className="text-gray-900 font-bold text-base leading-snug mb-3 group-hover:text-teal-600 transition-colors">
                  {post.title}
                </h3>

                {/* Read More */}
                <Link
                  href="#"
                  className="inline-flex items-center gap-1 text-sm font-medium text-teal-600 hover:text-teal-700 transition-colors mt-auto"
                >
                  Read More
                  <ArrowUpRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
