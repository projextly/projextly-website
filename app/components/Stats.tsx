import { Briefcase, Users, Zap, ThumbsUp } from "lucide-react";

const stats = [
  { value: "50+", label: "Projects Delivered", icon: Briefcase },
  { value: "30+", label: "Happy Clients", icon: Users },
  { value: "3mo", label: "Of Rapid Growth", icon: Zap },
  { value: "99%", label: "Client Satisfaction", icon: ThumbsUp },
];

export default function Stats() {
  return (
    <section className="bg-black py-20 relative overflow-hidden">
      {/* Dot pattern background */}
      <div className="dot-pattern absolute inset-0" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="text-center">
          <p className="text-cyan-400 font-semibold text-sm uppercase tracking-widest mb-3">
            Welcome to Projextly
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Your Digital Growth Partner in Bengaluru
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Born 3 months ago with a bold vision — we&apos;re a fast-growing web
            development agency crafting high-performance digital experiences.
            From startups to enterprises, we help businesses in Bengaluru and
            beyond scale with cutting-edge technology and design.
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-8 mt-14">
          {stats.map((stat) => {
            const Icon = stat.icon;
            return (
              <div
                key={stat.label}
                className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 text-center hover:border-cyan-400/30 hover:bg-white/[0.08] transition-all duration-300"
              >
                <Icon className="w-6 h-6 text-cyan-400/60 mx-auto mb-3" />
                <div className="text-4xl font-bold text-cyan-400">
                  {stat.value}
                </div>
                <div className="text-gray-400 text-sm mt-2">{stat.label}</div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
