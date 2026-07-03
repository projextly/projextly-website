const stats3 = [
  {
    value: "12+",
    title: "Years of engineering",
    description:
      "Established in 2013, we bring over a decade of deep technical expertise to complex web deployments.",
  },
  {
    value: "2000+",
    title: "Systems deployed",
    description:
      "We've successfully architected and shipped over 2,000 digital platforms for a diverse range of technical requirements.",
  },
  {
    value: "25+",
    title: "Global regions",
    description:
      "Our infrastructure solutions support clients across 25+ countries, maintaining high availability worldwide.",
  },
];

export function Card3() {
  return (
    <section className="flex w-[88vw] shrink-0 items-center justify-center rounded-[2.5rem] bg-[#162822] border border-[#E8F4F0]/10 shadow-[0_20px_50px_rgba(0,0,0,0.5)] sm:w-[85vw] md:w-[80vw] lg:w-[70vw] xl:w-[1100px] overflow-hidden">
      <div className="mx-auto px-6 py-12 sm:px-8 sm:py-16 lg:px-12 lg:py-20 w-full">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
          {/* Left Content */}
          <div>
            <div className="mb-4 font-mono text-xs tracking-widest text-[#8A9F98] uppercase flex items-center gap-3">
              <span className="w-2 h-2 bg-[#E53935] rounded-none animate-pulse" />
              <span>metrics.log</span>
            </div>
            
            <h2 className="max-w-xl text-3xl font-display font-bold leading-tight text-[#E8F4F0] sm:text-4xl lg:text-5xl">
              Engineering Excellence in Bengaluru
            </h2>

            <div className="mt-8 space-y-6 text-sm font-sans text-[#8A9F98] sm:mt-10 sm:space-y-8 lg:text-base leading-relaxed">
              <p>
                Being a specialized web engineering studio in Bangalore, Projextly operates on a singular directive: delivering performant, uncompromised code. This is our baseline requirement for every deployment we execute.
              </p>

              <p>
                Our core specialty lies in discarding templates and meticulously architecting custom, robust systems. We aim to create an unshakeable technical foundation by aligning your corporate vision with advanced digital infrastructure.
              </p>
            </div>
          </div>

          {/* Right Content */}
          <div className="flex flex-col gap-8 sm:gap-10 lg:gap-12 relative">
            <div className="absolute left-[38px] top-10 bottom-10 w-[1px] bg-[#E8F4F0]/10 hidden sm:block" />
            
            {stats3.map((item) => (
              <div key={item.title} className="flex flex-col sm:flex-row sm:items-start gap-5 sm:gap-8 relative z-10">
                {/* Circle */}
                <div className="flex h-16 w-16 sm:h-20 sm:w-20 shrink-0 items-center justify-center rounded-2xl bg-[#0A1C16] border border-[#E53935]/30 text-[#E53935] shadow-[0_0_20px_rgba(229,57,53,0.1)]">
                  <span className="text-xl font-display font-bold sm:text-2xl">{item.value}</span>
                </div>

                {/* Text */}
                <div className="pt-1">
                  <h3 className="text-lg font-display font-bold text-[#E8F4F0] sm:text-xl lg:text-2xl">{item.title}</h3>
                  <p className="mt-2 max-w-md text-sm font-sans leading-6 text-[#8A9F98] sm:mt-3 sm:leading-7">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}