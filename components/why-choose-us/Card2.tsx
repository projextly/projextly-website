import Image from "next/image";

const stats = [
  { value: "96%", text: "Agree, positive user experience leads to sales" },
  { value: "93%", text: "Start online experience with search engines" },
  { value: "75%", text: "Research companies online before taking action" },
  { value: "72%", text: "Of users revisit mobile-friendly websites" },
  { value: "52%", text: "Say website design affects business credibility" },
  { value: "46%", text: "Expect website pages to load within 2 seconds" },
];

export function Card2() {
  return (
    <section className="flex w-[88vw] shrink-0 items-center justify-center rounded-xl bg-[#F8F4EC] sm:w-[85vw] md:w-[80vw] lg:w-[70vw] xl:w-[1100px]">
      <div className="mx-auto px-6 py-12 sm:px-8 sm:py-16 lg:px-8 lg:py-20">
        <h2 className="mb-10 text-center text-2xl font-bold text-black sm:mb-14 sm:text-3xl lg:mb-20 lg:text-5xl">
          Why Does Your Business Need a Website in 2026?
        </h2>

        <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
          {/* Left Side */}
          <div className="grid grid-cols-2 gap-x-6 gap-y-8 sm:grid-cols-3 sm:gap-x-10 sm:gap-y-10 lg:gap-x-12 lg:gap-y-12">
            {stats.map((item) => (
              <div key={item.value}>
                <h3 className="text-2xl font-bold text-black sm:text-3xl lg:text-4xl">{item.value}</h3>
                <p className="mt-2 text-xs leading-6 text-gray-700 sm:mt-3 sm:text-sm sm:leading-7">{item.text}</p>
              </div>
            ))}
          </div>

          {/* Right Side */}
          <div className="hidden relative sm:flex justify-center">
            {/* Grid Background */}
            <div
              className="absolute inset-0 opacity-30"
              style={{
                backgroundImage: `
                  linear-gradient(#000 1px, transparent 1px),
                  linear-gradient(90deg,#000 1px,transparent 1px)
                `,
                backgroundSize: "60px 60px",
              }}
            />

            {/* Dots */}
            <div className="absolute inset-0">
              {Array.from({ length: 7 }).map((_, row) =>
                Array.from({ length: 7 }).map((_, col) => (
                  <span
                    key={`${row}-${col}`}
                    className="absolute h-2 w-2 -translate-x-1/2 -translate-y-1/2 rotate-45 bg-black sm:h-3 sm:w-3"
                    style={{
                      top: `${row * 16.6}%`,
                      left: `${col * 16.6}%`,
                    }}
                  />
                ))
              )}
            </div>

            {/* Circle */}
            <div className="relative h-40 w-40 overflow-hidden rounded-full bg-[#E7E3E0] shadow-xl sm:h-56 sm:w-56 lg:h-64 lg:w-64 xl:h-80 xl:w-80">
              <Image
                src="/rocket.png"
                alt="Rocket"
                fill
                className="object-cover"
                sizes="(min-width: 1280px) 320px, (min-width: 1024px) 256px, (min-width: 640px) 224px, 160px"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}