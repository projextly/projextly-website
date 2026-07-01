
import { PROCESS_STEPS } from "@/lib/constants";

export default function OurProcess() {
  return (
    <section id="process" className="bg-white py-24 relative overflow-hidden">
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <p className="text-[#00b8cc] font-semibold text-sm uppercase tracking-widest mb-3 text-center">
          How We Work
        </p>
        <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 text-center mb-4">
          Our Process
        </h2>
        <p className="text-gray-600 text-center max-w-2xl mx-auto mb-16">
          A proven, transparent workflow that takes your project from idea to
          launch — and beyond.
        </p>

        {/* Steps */}
        <div className="relative">
          {/* Connecting line (desktop) */}
          <div className="hidden lg:block absolute top-[60px] left-[10%] right-[10%] h-px bg-gray-200" />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-6">
            {PROCESS_STEPS.map((s) => {
              const Icon = s.icon;
              return (
                <div
                  key={s.step}
                  className="relative flex flex-col items-center text-center group"
                >
                  {/* Step number */}
                  <div className="relative z-10 w-[72px] h-[72px] rounded-2xl bg-white border border-gray-200 flex items-center justify-center mb-5 group-hover:border-[#00b8cc] group-hover:shadow-lg transition-all duration-300">
                    <Icon className="w-7 h-7 text-[#00b8cc]" />
                  </div>

                  {/* Step badge */}
                  <span className="text-[#00b8cc]/60 text-xs font-bold tracking-widest mb-2">
                    STEP {s.step}
                  </span>

                  {/* Title */}
                  <h3 className="text-gray-900 font-bold text-base mb-2 group-hover:text-[#00b8cc] transition-colors">
                    {s.title}
                  </h3>

                  {/* Description */}
                  <p className="text-gray-600 text-sm leading-relaxed max-w-[240px]">
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
