import { STATS } from "@/lib/constants";

export default function Stats() {
  return (
    <section className="bg-gray-50 py-20 relative overflow-hidden">
      {/* Dot pattern background */}
      <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px]" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="text-center">
          <p className="text-teal-600 font-semibold text-sm uppercase tracking-widest mb-3">
            Welcome to Projextly
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Your Digital Growth Partner in Bengaluru
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Born 3 months ago with a bold vision — we&apos;re a fast-growing web
            development agency crafting high-performance digital experiences.
            From startups to enterprises, we help businesses in Bengaluru and
            beyond scale with cutting-edge technology and design.
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-8 mt-14">
          {STATS.map((stat) => {
            const Icon = stat.icon;
            return (
              <div
                key={stat.label}
                className="b2b-card b2b-card-hover p-6 text-center"
              >
                <Icon className="w-6 h-6 text-teal-600/60 mx-auto mb-3" />
                <div className="text-4xl font-bold text-teal-600">
                  {stat.value}
                </div>
                <div className="text-gray-600 text-sm mt-2">{stat.label}</div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
