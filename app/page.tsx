import { ChevronRight } from "lucide-react";
import FeaturesGrid from "./components/FeaturesGrid";
import IntelligentBrain from "./components/IntelligentBrain";
import UniversalIntegration from "./components/UniversalIntegration";
import CapabilitiesGrid from "./components/CapabilitiesGrid";
import Testimonials from "./components/Testimonials";
import Integrations from "./components/Integrations";
import Pricing from "./components/Pricing";
import FAQ from "./components/FAQ";
import CTA from "./components/CTA";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <>
    <section className="relative h-screen w-full overflow-hidden">
      {/* Background Video */}
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 h-full w-full object-cover"
      >
        <source src="/hero-bg.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/60" />

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/40 to-black/80" />

      {/* Hero Content */}
      <div className="relative z-10 flex h-full flex-col justify-end pb-12">
        <div className="mx-auto w-full max-w-[1400px] px-8 flex flex-col md:flex-row md:items-end justify-between gap-12">
          {/* Left Side */}
          <div className="max-w-3xl">
            <h1 className="text-5xl font-medium tracking-tight text-white md:text-[4.5rem] leading-[1.1]">
              The Complete Stack for<br />
              Smarter AI Assistants
            </h1>

            <p className="mt-6 max-w-xl text-[15px] leading-relaxed text-gray-300">
              Build, deploy, and scale AI assistants with integrated workflows for memory, reasoning, automation, retrieval, and real-time interactions.
            </p>

            <div className="mt-10 flex flex-wrap gap-4">
              <button className="flex items-center gap-2 rounded-sm bg-white px-6 py-3.5 text-[11px] font-bold tracking-widest text-black transition hover:bg-gray-200 uppercase">
                Start Chatting <ChevronRight className="w-3.5 h-3.5" />
              </button>

              <button className="flex items-center gap-2 rounded-sm border border-white/20 bg-black/40 px-6 py-3.5 text-[11px] font-bold tracking-widest text-white backdrop-blur-sm transition hover:bg-black/60 uppercase">
                Learn More <ChevronRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

          {/* Right Side - Backed By */}
          <div className="text-left md:text-right md:mb-4">
            <p className="text-[10px] text-gray-400 mb-2 font-medium">Backed by</p>
            <div className="flex flex-wrap justify-start md:justify-end items-center gap-3 text-[11px] text-gray-200 font-medium">
              <span>OpenAI Startup Fund</span>
              <span className="text-gray-500">/</span>
              <span>Paul Graham</span>
              <span className="text-gray-500">/</span>
              <span>Guillermo Rauch</span>
              <span className="text-gray-500">/</span>
              <span>Pieter Levels</span>
              <span className="text-gray-500">/</span>
              <span>Sahil Lavingia</span>
            </div>
          </div>
        </div>
      </div>
    </section>
    <FeaturesGrid />
    <IntelligentBrain />
    <UniversalIntegration />
    <CapabilitiesGrid />
    <Testimonials />
    <Integrations />
    <Pricing />
    <FAQ />
    <CTA />
    <Footer />
    </>
  );
}