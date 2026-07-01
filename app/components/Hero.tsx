import Link from "next/link";
import { ArrowRight, MapPin } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative min-h-screen bg-[#060B12] overflow-hidden flex items-center justify-center pt-20 pb-10">
      {/* Content */}
      <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full flex flex-col items-center">
        
        {/* Badge */}
        <div className="mb-8">
          <div className="border border-white/10 bg-white/5 rounded-full px-5 py-2 inline-flex items-center gap-2 backdrop-blur-sm">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-teal-500 opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-teal-500" />
            </span>
            <span className="text-gray-300 text-sm font-medium tracking-wide">
              Available for new projects
            </span>
            <span className="w-px h-4 bg-white/10 mx-2" />
            <MapPin className="w-4 h-4 text-teal-500" />
            <span className="text-gray-300 text-sm">Bengaluru</span>
          </div>
        </div>

        {/* Main Heading */}
        <div className="mb-6">
          <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-[5.5rem] font-bold tracking-tighter leading-[1.05]">
            <span className="text-white block">We Build Digital</span>
            <span className="text-white block">Experiences That</span>
            <span className="text-teal-500 block pb-2">
              Drive Growth.
            </span>
          </h1>
        </div>

        {/* Subtitle */}
        <div className="mb-12 max-w-2xl">
          <p className="text-gray-400 text-lg sm:text-xl leading-relaxed">
            Projextly is an ultra-premium web agency crafting stunning websites, web applications, and digital products optimized for conversion.
          </p>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
          <Link href="/contact" className="btn-brainhub flex items-center gap-2 group">
            <span>Start Your Project</span>
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Link>
          
          <Link href="/portfolio" className="text-white hover:text-gray-300 flex items-center gap-2 transition-colors">
            View Case Studies
          </Link>
        </div>
        
      </div>
      
      {/* Glowing Arc */}
      <div className="glowing-arc" />
    </section>
  );
}