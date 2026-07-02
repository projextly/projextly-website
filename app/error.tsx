"use client";

import { useEffect } from "react";
import Link from "next/link";
import { ArrowRight, RefreshCcw } from "lucide-react";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <main
      className="min-h-screen flex flex-col items-center justify-center text-center px-6 section-dark"
    >
      <div className="grain-overlay" />
      {/* Decorative glow */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] rounded-full pointer-events-none"
        style={{
          background:
            "radial-gradient(circle, rgba(255,59,48,0.1) 0%, transparent 70%)",
        }}
      />

      <div
        className="relative z-10 text-7xl md:text-8xl mb-6 select-none animate-fade-in-up"
        role="img"
        aria-label="Warning"
      >
        ⚠️
      </div>

      <h1 className="relative z-10 text-3xl md:text-4xl font-bold text-white mb-3 animate-fade-in-up" style={{ animationDelay: "100ms" }}>
        Something Went Wrong
      </h1>

      <p className="relative z-10 text-zinc-500 max-w-md mb-10 text-lg animate-fade-in-up" style={{ animationDelay: "200ms" }}>
        An unexpected error occurred. Please try again, or return to the
        homepage if the problem persists.
      </p>

      <div className="relative z-10 flex flex-col sm:flex-row gap-4 animate-fade-in-up" style={{ animationDelay: "300ms" }}>
        <button onClick={() => reset()} className="btn-primary group">
          <span className="text-sm">Try Again</span>
          <div className="icon-circle">
            <RefreshCcw className="w-4 h-4 group-hover:rotate-180 transition-transform duration-500" />
          </div>
        </button>

        <Link
          href="/"
          className="inline-flex items-center justify-center border border-white/20 text-white font-bold rounded-full px-8 py-3 transition-all duration-300 hover:border-[#34D399]/50 hover:bg-white/5 text-sm"
        >
          Back to Home
        </Link>
      </div>
    </main>
  );
}
