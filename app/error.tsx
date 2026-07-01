"use client";

import { useEffect } from "react";
import Link from "next/link";

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
      className="min-h-screen flex flex-col items-center justify-center text-center px-6"
      style={{ backgroundColor: "#060B12" }}
    >
      {/* Decorative glow */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] rounded-full pointer-events-none"
        style={{
          background:
            "radial-gradient(circle, rgba(255,59,48,0.1) 0%, transparent 70%)",
        }}
      />

      <div
        className="text-7xl md:text-8xl mb-6 select-none"
        role="img"
        aria-label="Warning"
      >
        ⚠️
      </div>

      <h1 className="text-3xl md:text-4xl font-bold text-white mb-3">
        Something Went Wrong
      </h1>

      <p className="text-gray-400 max-w-md mb-10 text-lg">
        An unexpected error occurred. Please try again, or return to the
        homepage if the problem persists.
      </p>

      <div className="flex flex-col sm:flex-row gap-4">
        <button onClick={() => reset()} className="btn-brainhub">
          Try Again
        </button>

        <Link
          href="/"
          className="inline-flex items-center justify-center border border-white/20 text-white font-bold rounded-lg px-8 py-4 transition-all duration-300 hover:border-[#00e5ff]/50 hover:text-[#00e5ff]"
        >
          Back to Home
        </Link>
      </div>
    </main>
  );
}
