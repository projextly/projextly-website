import Image from "next/image";
import { ArrowRight } from "lucide-react";

const logos = [
  "RedBull",
  "CHANEL",
  "ALL",
  "PwC",
  "dyson",
  "ALPINE",
  "sanofi",
  "RedBull",
];

export default function About() {
  return (
    <section className="w-full bg-[#072E30] overflow-hidden">
      {/* Logo Strip */}
      <div className="bg-[#D7FF77]">
        <div className="mx-auto flex h-24 max-w-7xl items-center justify-between px-8">
          {logos.map((logo, index) => (
            <h2
              key={index}
              className="text-2xl font-black tracking-tight text-black"
            >
              {logo}
            </h2>
          ))}
        </div>
      </div>

      {/* Hero */}
      <div className="relative flex min-h-[720px] items-center justify-center px-6">
        <div className="text-center">
          <h1 className="uppercase font-black leading-[0.9] tracking-tight">
            <span className="block text-white text-6xl md:text-8xl lg:text-[130px]">
              Bringing Back
            </span>

            <span className="mt-6 flex flex-wrap items-center justify-center gap-6">
              <span className="text-[#D7FF77] text-6xl md:text-8xl lg:text-[120px]">
                Impact
              </span>

              <ArrowRight
                strokeWidth={4}
                className="h-16 w-16 md:h-24 md:w-24 lg:h-36 lg:w-36 text-[#D7FF77]"
              />

              <span className="text-[#D7FF77] text-6xl md:text-8xl lg:text-[120px]">
                To Your
              </span>
            </span>

            <span className="relative mt-6 block text-white text-6xl md:text-8xl lg:text-[120px]">
              Presentations

              {/* Floating Illustration */}
              <div className="absolute left-1/2 top-0 -translate-x-[240px] translate-y-8 lg:-translate-x-[340px]">
                <Image
                  src="/powerpoint.png"
                  alt="PowerPoint Character"
                  width={220}
                  height={220}
                  className="drop-shadow-2xl"
                />
              </div>
            </span>
          </h1>
        </div>
      </div>
    </section>
  );
}