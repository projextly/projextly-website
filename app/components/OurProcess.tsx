import {
  Lightbulb,
  Pencil,
  Code2,
  Rocket,
  HeadphonesIcon,
} from "lucide-react";

const steps = [
  {
    icon: Lightbulb,
    step: "01",
    title: "Discovery & Strategy",
    desc: "We dive deep into your business goals, target audience, and market landscape to craft a strategic blueprint for your project.",
  },
  {
    icon: Pencil,
    step: "02",
    title: "Design & Prototype",
    desc: "Our designers create stunning wireframes and interactive prototypes, iterating with you until every pixel feels perfect.",
  },
  {
    icon: Code2,
    step: "03",
    title: "Development & Build",
    desc: "Our engineers bring the design to life using React, Next.js, and modern frameworks — clean code, blazing performance.",
  },
  {
    icon: Rocket,
    step: "04",
    title: "Testing & Launch",
    desc: "Rigorous QA across devices and browsers. We handle deployment, DNS, analytics setup, and a smooth go-live.",
  },
  {
    icon: HeadphonesIcon,
    step: "05",
    title: "Support & Growth",
    desc: "Post-launch, we provide ongoing maintenance, performance monitoring, and iterative improvements to keep you growing.",
  },
];

export default function OurProcess() {
  return (
    <section id="process" className="bg-black py-24 relative overflow-hidden">
      {/* Subtle glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-cyan-500/5 rounded-full blur-[200px]" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <p className="text-cyan-400 font-semibold text-sm uppercase tracking-widest mb-3 text-center">
          How We Work
        </p>
        <h2 className="text-3xl sm:text-4xl font-bold text-white text-center mb-4">
          Our Process
        </h2>
        <p className="text-gray-400 text-center max-w-2xl mx-auto mb-16">
          A proven, transparent workflow that takes your project from idea to
          launch — and beyond.
        </p>

        {/* Steps */}
        <div className="relative">
          {/* Connecting line (desktop) */}
          <div className="hidden lg:block absolute top-[60px] left-[10%] right-[10%] h-px bg-gradient-to-r from-transparent via-cyan-400/30 to-transparent" />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-6">
            {steps.map((s) => {
              const Icon = s.icon;
              return (
                <div
                  key={s.step}
                  className="relative flex flex-col items-center text-center group"
                >
                  {/* Step number */}
                  <div className="relative z-10 w-[72px] h-[72px] rounded-2xl bg-gradient-to-br from-cyan-400/10 to-cyan-400/5 border border-cyan-400/20 flex items-center justify-center mb-5 group-hover:border-cyan-400/50 group-hover:shadow-lg group-hover:shadow-cyan-500/10 transition-all duration-300">
                    <Icon className="w-7 h-7 text-cyan-400" />
                  </div>

                  {/* Step badge */}
                  <span className="text-cyan-400/60 text-xs font-bold tracking-widest mb-2">
                    STEP {s.step}
                  </span>

                  {/* Title */}
                  <h3 className="text-white font-bold text-base mb-2 group-hover:text-cyan-300 transition-colors">
                    {s.title}
                  </h3>

                  {/* Description */}
                  <p className="text-gray-400 text-sm leading-relaxed max-w-[240px]">
                    {s.desc}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
