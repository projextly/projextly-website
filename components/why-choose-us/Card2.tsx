import Image from "next/image";

const stats = [
  { value: "96%", text: "Agree positive UX leads to sales" },
  { value: "93%", text: "Start online experience with search" },
  { value: "75%", text: "Research companies before acting" },
  { value: "72%", text: "Revisit mobile-friendly websites" },
  { value: "52%", text: "Design affects business credibility" },
  { value: "46%", text: "Expect pages to load within 2 seconds" },
];

export function Card2() {
  return (
    <section className="flex w-[88vw] shrink-0 items-center justify-center rounded-[2.5rem] bg-[#162822] border border-[#E8F4F0]/10 shadow-[0_20px_50px_rgba(0,0,0,0.5)] sm:w-[85vw] md:w-[80vw] lg:w-[70vw] xl:w-[1100px] overflow-hidden relative">
      <div className="mx-auto px-6 py-12 sm:px-8 sm:py-16 lg:px-12 lg:py-20 relative z-10 w-full">
        <h2 className="mb-10 text-center text-3xl font-display font-bold text-[#E8F4F0] sm:mb-14 sm:text-4xl lg:mb-20 lg:text-5xl">
          Why Does Your Business Need an <br/>
          <span className="text-[#E53935]">Engineered Platform?</span>
        </h2>

        <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
          {/* Left Side */}
          <div className="grid grid-cols-2 gap-x-6 gap-y-8 sm:grid-cols-3 sm:gap-x-10 sm:gap-y-10 lg:gap-x-12 lg:gap-y-12">
            {stats.map((item) => (
              <div key={item.value}>
                <h3 className="text-3xl font-display font-bold text-[#E53935] sm:text-4xl lg:text-5xl">{item.value}</h3>
                <p className="mt-2 text-xs font-sans leading-5 text-[#8A9F98] sm:mt-3 sm:text-sm sm:leading-6">{item.text}</p>
              </div>
            ))}
          </div>

          {/* Right Side */}
          <div className="hidden relative sm:flex justify-center">
            {/* Structural Grid Background */}
            <div
              className="absolute inset-0 opacity-10 pointer-events-none"
              style={{
                backgroundImage: `
                  linear-gradient(#E8F4F0 1px, transparent 1px),
                  linear-gradient(90deg,#E8F4F0 1px,transparent 1px)
                `,
                backgroundSize: "60px 60px",
              }}
            />

            {/* Terminal Node */}
            <div className="relative h-40 w-40 overflow-hidden rounded-full bg-[#0A1C16] border border-[#E53935]/30 shadow-[0_0_50px_rgba(229,57,53,0.1)] sm:h-56 sm:w-56 lg:h-64 lg:w-64 xl:h-80 xl:w-80 flex items-center justify-center p-8">
              <div className="absolute inset-0 bg-[url('/noise.svg')] opacity-10 mix-blend-overlay" />
              <Image
                src="/rocket.png"
                alt="Deployment"
                fill
                className="object-cover opacity-80 mix-blend-luminosity hover:mix-blend-normal transition-all duration-700"
                sizes="(min-width: 1280px) 320px, (min-width: 1024px) 256px, (min-width: 640px) 224px, 160px"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}