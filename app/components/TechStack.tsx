import { TECH_CATEGORIES } from "@/lib/constants";

export default function TechStack() {
  return (
    <section id="techstack" className="relative py-24 overflow-hidden bg-gray-50">
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <p className="text-teal-600 font-semibold text-sm uppercase tracking-widest mb-3 text-center">
          Technologies
        </p>
        <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 text-center mb-4">
          Our Tech Stack
        </h2>
        <p className="text-gray-600 text-center max-w-2xl mx-auto mb-16">
          We use cutting-edge technologies and frameworks to build fast,
          scalable, and beautiful digital products.
        </p>

        {/* Categories */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {TECH_CATEGORIES.map((cat) => (
            <div key={cat.label}>
              <h3 className="text-gray-900 font-semibold text-sm uppercase tracking-wider mb-5 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-teal-600" />
                {cat.label}
              </h3>
              <div className="space-y-3">
                {cat.techs.map((tech) => (
                  <div
                    key={tech.name}
                    className="b2b-card b2b-card-hover p-4 flex items-center gap-4 group transition-all duration-300"
                  >
                    {/* Gradient dot */}
                    <div
                      className={`w-10 h-10 rounded-xl bg-gradient-to-br ${tech.color} flex items-center justify-center border border-gray-100 group-hover:border-teal-200 transition-colors`}
                    >
                      <span className="font-bold text-sm">
                        {tech.name.charAt(0)}
                      </span>
                    </div>
                    <span className="text-gray-600 font-medium text-sm group-hover:text-teal-600 transition-colors">
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
