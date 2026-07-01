import Link from "next/link";

export default function NotFound() {
  return (
    <main
      className="min-h-screen flex flex-col items-center justify-center text-center px-6"
      style={{ backgroundColor: "#060B12" }}
    >
      {/* Decorative glow */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full pointer-events-none"
        style={{
          background:
            "radial-gradient(circle, rgba(0,229,255,0.08) 0%, transparent 70%)",
        }}
      />

      <h1
        className="text-[10rem] md:text-[14rem] font-black leading-none tracking-tighter select-none"
        style={{
          background: "linear-gradient(135deg, #00e5ff 0%, #0070f3 100%)",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
        }}
      >
        404
      </h1>

      <h2 className="text-2xl md:text-3xl font-bold text-white mt-2 mb-4">
        Page Not Found
      </h2>

      <p className="text-gray-400 max-w-md mb-10 text-lg">
        The page you&apos;re looking for doesn&apos;t exist or has been moved.
        Let&apos;s get you back on track.
      </p>

      <Link href="/" className="btn-brainhub">
        Back to Home
      </Link>
    </main>
  );
}
