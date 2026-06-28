import { ArrowUpRight } from "lucide-react";

const projects = [
  {
    tag: "SaaS Platform",
    title: "CloudMetrics Dashboard",
    desc: "A real-time analytics dashboard for a SaaS startup, built with Next.js and featuring interactive data visualizations.",
    gradient: "from-cyan-600/30 via-blue-600/20 to-purple-600/30",
  },
  {
    tag: "E-Commerce",
    title: "Urban Style Store",
    desc: "A high-conversion e-commerce platform with seamless checkout, inventory management, and mobile-first design.",
    gradient: "from-emerald-600/30 via-teal-600/20 to-cyan-600/30",
  },
  {
    tag: "Healthcare",
    title: "MedConnect Portal",
    desc: "A patient-facing healthcare portal with appointment booking, telemedicine integration, and secure medical records.",
    gradient: "from-rose-600/30 via-pink-600/20 to-fuchsia-600/30",
  },
];

export default function Portfolio() {
  return (
    <section id="portfolio" className="bg-black py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <p className="text-cyan-400 font-semibold text-sm uppercase tracking-widest mb-3 text-center">
          Our Work
        </p>
        <h2 className="text-3xl sm:text-4xl font-bold text-white text-center mb-4">
          Featured Projects
        </h2>
        <p className="text-gray-400 text-center max-w-xl mx-auto mb-14">
          A selection of projects we are proud to have delivered for clients
          across industries.
        </p>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-7">
          {projects.map((project) => (
            <div
              key={project.title}
              className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl overflow-hidden group cursor-pointer transition-all duration-300 hover:border-cyan-400/20"
            >
              {/* Thumbnail */}
              <div className="h-52 relative overflow-hidden">
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${project.gradient}`}
                />
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <ArrowUpRight className="w-8 h-8 text-white" />
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <p className="text-xs font-bold text-cyan-400 uppercase tracking-wider mb-2">
                  {project.tag}
                </p>
                <h3 className="text-white font-bold text-lg mb-2 group-hover:text-cyan-300 transition-colors">
                  {project.title}
                </h3>
                <p className="text-gray-400 text-sm leading-relaxed">
                  {project.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* View All Button */}
        <div className="text-center mt-10">
          <button className="border border-white/20 text-white font-semibold px-7 py-3 rounded-xl hover:border-cyan-400/50 hover:bg-white/5 transition-all">
            View All Projects
          </button>
        </div>
      </div>
    </section>
  );
}
