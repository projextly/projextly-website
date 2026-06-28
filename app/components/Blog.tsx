import { ArrowUpRight } from "lucide-react";

const posts = [
  {
    tag: "Web Dev",
    title: "Why Next.js is the Future of Web Development in 2026",
    date: "Jun 15, 2026",
    gradient: "from-cyan-600/20 via-blue-600/15 to-purple-600/20",
    letter: "N",
  },
  {
    tag: "Design",
    title: "The Art of Dark Mode: Designing Premium Web Experiences",
    date: "Jun 8, 2026",
    gradient: "from-emerald-600/20 via-teal-600/15 to-cyan-600/20",
    letter: "D",
  },
  {
    tag: "SEO",
    title: "Core Web Vitals: The Complete Performance Optimization Guide",
    date: "May 28, 2026",
    gradient: "from-amber-600/20 via-orange-600/15 to-red-600/20",
    letter: "S",
  },
];

export default function Blog() {
  return (
    <section className="bg-black py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <p className="text-cyan-400 font-semibold text-sm uppercase tracking-widest mb-3 text-center">
          Latest Insights
        </p>
        <h2 className="text-3xl sm:text-4xl font-bold text-white text-center mb-14">
          From Our Blog
        </h2>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {posts.map((post) => (
            <div
              key={post.title}
              className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl overflow-hidden group cursor-pointer transition-all duration-300 hover:border-cyan-400/20"
            >
              {/* Thumbnail */}
              <div className={`h-48 relative overflow-hidden bg-gradient-to-br ${post.gradient}`}>
                <span className="absolute inset-0 flex items-center justify-center text-[8rem] font-black text-white/5 select-none leading-none">
                  {post.letter}
                </span>
              </div>

              {/* Content */}
              <div className="p-6">
                {/* Meta row */}
                <div className="flex items-center gap-3 mb-3">
                  <span className="text-xs font-bold text-cyan-400 uppercase tracking-wider">
                    {post.tag}
                  </span>
                  <span className="w-1 h-1 rounded-full bg-gray-600" />
                  <span className="text-xs text-gray-500">{post.date}</span>
                </div>

                {/* Title */}
                <h3 className="text-white font-bold text-base leading-snug mb-3 group-hover:text-cyan-300 transition-colors">
                  {post.title}
                </h3>

                {/* Read More */}
                <a
                  href="#"
                  className="inline-flex items-center gap-1 text-sm font-medium text-cyan-400 hover:text-cyan-300 transition-colors"
                >
                  Read More
                  <ArrowUpRight className="w-4 h-4" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
