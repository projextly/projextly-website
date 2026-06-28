import { CheckCircle2, Sparkles, MapPin } from "lucide-react";

export default function WhoAreWe() {
  const bullets = [
    "Custom websites & web apps built with React & Next.js",
    "Performance-optimized, SEO-first architecture",
    "End-to-end project management & dedicated support",
  ];

  return (
    <section id="about" className="bg-black py-24 relative overflow-hidden">
      {/* Subtle glow */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-cyan-500/5 rounded-full blur-[150px]" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left Column - Text */}
          <div>
            <span className="text-cyan-400 font-semibold text-sm uppercase tracking-widest mb-3 inline-block">
              About Projextly
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
              Crafting Digital Excellence from Bengaluru
            </h2>
            <p className="text-gray-400 leading-relaxed mb-4">
              Projextly is a modern web development agency based in Bengaluru,
              India. We transform ideas into powerful digital experiences through
              innovative design and cutting-edge technology.
            </p>
            <p className="text-gray-400 leading-relaxed mb-8">
              Our team of passionate developers, designers, and strategists work
              together to deliver solutions that not only look stunning but
              perform exceptionally.
            </p>

            {/* Bullet Points */}
            <ul className="space-y-0">
              {bullets.map((text, i) => (
                <li key={i} className="flex items-start gap-3 text-gray-300 text-sm mb-3">
                  <CheckCircle2 className="w-5 h-5 text-cyan-400 mt-0.5 flex-shrink-0" />
                  <span>{text}</span>
                </li>
              ))}
            </ul>

            {/* CTA */}
            <a
              href="#"
              className="inline-flex items-center gap-2 mt-8 bg-cyan-400 text-black font-semibold px-6 py-3 rounded-xl hover:bg-cyan-300 transition-all hover:scale-105"
            >
              Learn More
            </a>
          </div>

          {/* Right Column - Visual Card */}
          <div className="relative flex justify-center items-center">
            {/* Main Card */}
            <div className="w-80 h-80 rounded-3xl bg-gradient-to-br from-cyan-950 via-cyan-900/50 to-black border border-cyan-500/20 flex items-center justify-center shadow-2xl">
              <div className="flex flex-col items-center">
                <Sparkles className="w-20 h-20 text-cyan-400" />
                <span className="text-cyan-300 font-bold text-lg mt-4">
                  Digital Excellence
                </span>
                <span className="text-gray-500 text-sm mt-1">Since March 2026</span>
              </div>
            </div>

            {/* Floating Badge - Years of Impact */}
            <div className="absolute -bottom-4 -left-4 bg-gradient-to-r from-cyan-500 to-cyan-400 text-black rounded-xl px-5 py-3 shadow-xl">
              <div className="font-extrabold text-2xl">3mo</div>
              <div className="text-cyan-900 text-xs">Of Rapid Growth</div>
            </div>

            {/* Floating Badge - Bengaluru */}
            <div className="absolute -top-3 -right-3 bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl px-4 py-2">
              <span className="flex items-center gap-1 text-cyan-400 text-sm font-medium">
                <MapPin className="w-4 h-4 inline" />
                Bengaluru
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
