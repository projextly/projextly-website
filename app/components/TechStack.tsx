export default function TechStack() {
  const categories = [
    {
      label: "Frontend",
      techs: [
        { name: "React", color: "from-cyan-400/20 to-blue-500/20" },
        { name: "Next.js", color: "from-white/10 to-gray-400/10" },
        { name: "TypeScript", color: "from-blue-400/20 to-blue-600/20" },
        { name: "Tailwind CSS", color: "from-cyan-400/20 to-teal-500/20" },
      ],
    },
    {
      label: "Backend",
      techs: [
        { name: "Node.js", color: "from-green-400/20 to-emerald-500/20" },
        { name: "Express", color: "from-gray-300/10 to-gray-500/10" },
        { name: "Python", color: "from-yellow-400/20 to-blue-400/20" },
        { name: "REST APIs", color: "from-orange-400/20 to-red-400/20" },
      ],
    },
    {
      label: "Database",
      techs: [
        { name: "PostgreSQL", color: "from-blue-400/20 to-indigo-500/20" },
        { name: "MongoDB", color: "from-green-500/20 to-green-700/20" },
        { name: "Redis", color: "from-red-400/20 to-red-600/20" },
        { name: "Supabase", color: "from-emerald-400/20 to-cyan-500/20" },
      ],
    },
    {
      label: "DevOps & Tools",
      techs: [
        { name: "Vercel", color: "from-white/10 to-gray-400/10" },
        { name: "AWS", color: "from-orange-400/20 to-yellow-400/20" },
        { name: "Docker", color: "from-blue-400/20 to-cyan-500/20" },
        { name: "GitHub", color: "from-gray-300/10 to-white/10" },
      ],
    },
  ];

  return (
    <section id="techstack" className="relative py-24 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-cyan-950/5 to-black" />
      <div className="absolute inset-0 animated-grid opacity-10" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <p className="text-cyan-400 font-semibold text-sm uppercase tracking-widest mb-3 text-center">
          Technologies
        </p>
        <h2 className="text-3xl sm:text-4xl font-bold text-white text-center mb-4">
          Our Tech Stack
        </h2>
        <p className="text-gray-400 text-center max-w-2xl mx-auto mb-16">
          We use cutting-edge technologies and frameworks to build fast,
          scalable, and beautiful digital products.
        </p>

        {/* Categories */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {categories.map((cat) => (
            <div key={cat.label}>
              <h3 className="text-white font-semibold text-sm uppercase tracking-wider mb-5 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-cyan-400" />
                {cat.label}
              </h3>
              <div className="space-y-3">
                {cat.techs.map((tech) => (
                  <div
                    key={tech.name}
                    className="glass-card glass-card-hover px-5 py-4 flex items-center gap-4 group cursor-pointer transition-all duration-300"
                  >
                    {/* Gradient dot */}
                    <div
                      className={`w-10 h-10 rounded-xl bg-gradient-to-br ${tech.color} flex items-center justify-center border border-white/5 group-hover:border-cyan-400/20 transition-colors`}
                    >
                      <span className="text-white font-bold text-sm">
                        {tech.name.charAt(0)}
                      </span>
                    </div>
                    <span className="text-gray-300 font-medium text-sm group-hover:text-white transition-colors">
                      {tech.name}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
