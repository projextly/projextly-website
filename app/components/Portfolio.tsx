import { PROJECTS } from "@/lib/constants";

export default function Portfolio() {
  return (
    <section id="portfolio" className="bg-[#060B12] py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <p className="text-[#00e5ff] font-semibold text-sm uppercase tracking-widest mb-3 text-center">
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
          {PROJECTS.map((project) => (
            <div
              key={project.title}
              className="card-dark overflow-hidden group transition-all duration-300"
            >
              {/* Thumbnail */}
              <div className="h-52 relative overflow-hidden bg-white/5">
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${project.gradient}`}
                />
                <div className="absolute inset-0 bg-[#00e5ff]/10 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <span className="w-8 h-8 text-[#00e5ff] flex items-center justify-center">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-arrow-up-right"><path d="M7 7h10v10"/><path d="M7 17 17 7"/></svg>
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <p className="text-xs font-bold text-[#00e5ff] uppercase tracking-wider mb-2">
                  {project.category}
                </p>
                <h3 className="text-white font-bold text-lg mb-2 group-hover:text-[#00e5ff] transition-colors">
                  {project.title}
                </h3>
                <p className="text-gray-400 text-sm leading-relaxed">
                  {project.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* View All Button */}
        <div className="text-center mt-10">
          <button className="border border-white/10 text-white font-semibold px-7 py-3 rounded-xl hover:border-[#00e5ff]/50 hover:bg-[#00e5ff]/10 hover:text-[#00e5ff] transition-all">
            View All Projects
          </button>
        </div>
      </div>
    </section>
  );
}
