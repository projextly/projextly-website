import { ArrowRight, Terminal } from "lucide-react";
import Link from "next/link";

export function Card4() {
  return (
    <section className="hidden sm:flex w-[88vw] shrink-0 items-center justify-center rounded-[2.5rem] bg-[#E53935] px-6 py-16 sm:w-[85vw] md:w-[80vw] lg:w-[70vw] lg:py-0 xl:w-[1100px] overflow-hidden relative shadow-[0_20px_50px_rgba(229,57,53,0.3)]">
      {/* Structural Grid overlay */}
      <div 
        className="absolute inset-0 pointer-events-none mix-blend-overlay opacity-30"
        style={{
          backgroundImage: `linear-gradient(to right, #000 1px, transparent 1px), linear-gradient(to bottom, #000 1px, transparent 1px)`,
          backgroundSize: '32px 32px'
        }}
      />
      
      <div className="mx-auto flex max-w-5xl flex-col items-center justify-center text-center relative z-10">
        <div className="mb-6 font-mono text-xs tracking-widest text-[#0A1C16] uppercase flex items-center justify-center gap-3 bg-white/20 px-4 py-2 rounded-full backdrop-blur-sm border border-white/20">
          <Terminal className="w-4 h-4" />
          <span>await init_project()</span>
        </div>

        <h2 className="max-w-5xl text-4xl font-display font-bold leading-[1.1] tracking-tight text-[#0A1C16] sm:text-5xl md:text-6xl lg:text-7xl">
          COMPILE YOUR VISION.
          <br />
          <span className="text-[#E8F4F0]">LET'S DEPLOY.</span>
        </h2>

        <Link href="/contact" className="group mt-10 flex h-20 w-auto px-10 items-center justify-center rounded-2xl bg-[#0A1C16] transition-all duration-300 hover:bg-[#E8F4F0] hover:scale-105 sm:mt-12 sm:h-24 lg:mt-14 shadow-xl">
          <div className="flex items-center gap-3 text-sm font-mono font-medium sm:text-base lg:text-lg">
            <span className="text-[#E8F4F0] group-hover:text-[#0A1C16]">Execute Handshake</span>
            <ArrowRight
              size={20}
              className="shrink-0 text-[#E8F4F0] group-hover:text-[#0A1C16] transition-transform duration-300 group-hover:translate-x-1"
            />
          </div>
        </Link>
      </div>
    </section>
  );
}