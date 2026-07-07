import { ChevronRight } from "lucide-react";

export default function CTA() {
  return (
    <section className="bg-black py-24 w-full">
      <div className="max-w-[1400px] mx-auto px-8">
        <div className="relative rounded-[2rem] overflow-hidden aspect-[21/9] md:aspect-[3/1] flex items-center justify-center">
          {/* Background Video/Image */}
          <video
            autoPlay
            muted
            loop
            playsInline
            className="absolute inset-0 h-full w-full object-cover"
          >
            <source src="/hero-bg.mp4" type="video/mp4" />
          </video>
          
          {/* Overlays */}
          <div className="absolute inset-0 bg-black/60" />
          <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-black/80" />
          
          {/* Content */}
          <div className="relative z-10 flex flex-col items-center text-center p-8">
            <h2 className="text-3xl md:text-5xl lg:text-6xl font-medium tracking-tight text-white mb-10">
              Ready to meet<br />
              your new AI assistant?
            </h2>
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="flex items-center justify-center gap-2 rounded-sm bg-white px-8 py-4 text-[11px] font-bold tracking-widest text-black transition hover:bg-gray-200 uppercase">
                Start Chatting <ChevronRight className="w-3.5 h-3.5" />
              </button>

              <button className="flex items-center justify-center gap-2 rounded-sm border border-white/20 bg-black/40 px-8 py-4 text-[11px] font-bold tracking-widest text-white backdrop-blur-sm transition hover:bg-black/60 uppercase">
                Contact Sales <ChevronRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
