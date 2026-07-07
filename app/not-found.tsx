import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function NotFound() {
  return (
    <main
      className="min-h-screen flex flex-col items-center justify-center text-center px-6 section-dark"
    >
      <div className="grain-overlay" />
      {/* Decorative glow */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full pointer-events-none"
        style={{
          background:
            "radial-gradient(circle, rgba(52,211,153,0.08) 0%, transparent 70%)",
        }}
      />

      <h1
        className="relative z-10 text-[10rem] md:text-[14rem] font-black leading-none tracking-tighter select-none animate-fade-in-up"
        style={{
          background: "linear-gradient(135deg, #34D399 0%, #059669 100%)",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
        }}
      >
        404
      </h1>

      <h2 className="relative z-10 text-2xl md:text-3xl font-bold text-white mt-2 mb-4 animate-fade-in-up" style={{ animationDelay: "100ms" }}>
        Page Not Found
      </h2>

      <p className="relative z-10 text-zinc-500 max-w-md mb-10 text-lg animate-fade-in-up" style={{ animationDelay: "200ms" }}>
        The page you&apos;re looking for doesn&apos;t exist or has been moved.
        Let&apos;s get you back on track.
      </p>

      <Link href="/" className="relative z-10 btn-primary group animate-fade-in-up" style={{ animationDelay: "300ms" }}>
        <span className="text-sm">Back to Home</span>
        <div className="icon-circle">
          <ArrowRight className="w-4 h-4 group-hover:-translate-x-0.5 transition-transform" />
        </div>
      </Link>
    </main>
  );
}
