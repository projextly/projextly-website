import { MapPin } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative min-h-screen bg-black overflow-hidden flex items-center justify-center">
      {/* Grid Background Pattern */}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: `linear-gradient(rgba(255,255,255,0.04) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.04) 1px, transparent 1px)`,
          backgroundSize: "60px 60px",
        }}
      />

      {/* Cyan Glow at Bottom Center */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 flex items-end justify-center">
        {/* Blur glow divs behind the semi-circle */}
        <div className="absolute bottom-0 w-[300px] h-[200px] md:w-[600px] md:h-[350px] bg-cyan-500/20 blur-[150px] rounded-full" />
        <div className="absolute bottom-[-50px] w-[250px] h-[180px] md:w-[500px] md:h-[300px] bg-cyan-500/20 blur-[150px] rounded-full" />

        {/* Semi-circle */}
        <div
          className="relative w-[280px] h-[140px] sm:w-[400px] sm:h-[200px] md:w-[600px] md:h-[300px] lg:w-[800px] lg:h-[400px] rounded-t-full bg-gradient-to-t from-cyan-800 via-cyan-500 to-cyan-300 border border-cyan-300/30 translate-y-[1px]"
          style={{
            boxShadow: "0 0 150px rgba(34,211,238,0.4)",
          }}
        />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto w-full">
        {/* Badge */}
        <div className="mb-8 lg:mb-10">
          <span className="bg-white/5 border border-white/10 rounded-full px-4 py-2 text-cyan-400 text-sm inline-flex items-center gap-2">
            <MapPin className="w-4 h-4" />
            Based in Bengaluru, India
          </span>
        </div>

        {/* Main Heading */}
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold tracking-tight leading-[0.95]">
          <span className="text-white">We Build Digital</span>
          <br />
          <span className="text-white">Experiences That</span>
          <br />
          <span className="gradient-text-cyan bg-gradient-to-r from-cyan-300 via-white to-cyan-400 bg-clip-text text-transparent">
            Drive Growth
          </span>
        </h1>

        {/* Subtitle */}
        <p className="text-gray-400 max-w-2xl mx-auto mt-6 lg:mt-8 text-base sm:text-lg">
          Projextly designs and develops premium websites, web applications, and
          digital products with stunning UI, lightning-fast performance, and
          SEO-friendly architecture.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-8 lg:mt-10">
          <a
            href="#contact"
            className="bg-cyan-400 text-black font-semibold rounded-xl px-8 py-4 hover:bg-cyan-300 hover:scale-105 transition-all"
          >
            Start Your Project
          </a>
          <a
            href="#work"
            className="border border-white/20 text-white rounded-xl px-8 py-4 hover:border-cyan-400/50 hover:bg-white/5 transition-all"
          >
            View Our Work
          </a>
        </div>

        {/* Stats Bar */}
        <div className="border-t border-white/10 pt-8 mt-16 grid grid-cols-2 md:grid-cols-4 gap-8">
          {[
            ["50+", "Projects Delivered"],
            ["30+", "Happy Clients"],
            ["99%", "Success Rate"],
            ["24/7", "Support"],
          ].map(([value, label]) => (
            <div key={label}>
              <div className="text-2xl md:text-3xl font-bold text-white">
                {value}
              </div>
              <div className="text-sm text-gray-400">{label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom Fade */}
      <div className="pointer-events-none absolute bottom-0 left-0 right-0 h-32 md:h-48 bg-gradient-to-t from-black to-transparent" />
    </section>
  );
}