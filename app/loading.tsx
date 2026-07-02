export default function Loading() {
  return (
    <div
      className="min-h-screen flex flex-col items-center justify-center section-dark"
    >
      <div className="grain-overlay" />
      {/* Spinner */}
      <div
        className="relative z-10"
        style={{
          width: "48px",
          height: "48px",
          border: "3px solid rgba(255,255,255,0.1)",
          borderTopColor: "#34D399",
          borderRadius: "50%",
          animation: "projextly-spin 0.8s linear infinite",
        }}
      />

      {/* Brand text */}
      <p
        className="relative z-10"
        style={{
          marginTop: "1.5rem",
          color: "#34D399",
          fontWeight: 700,
          fontSize: "1.125rem",
          letterSpacing: "-0.02em",
          animation: "projextly-pulse 2s ease-in-out infinite",
        }}
      >
        Projextly
      </p>

      <style>{`
        @keyframes projextly-spin {
          to { transform: rotate(360deg); }
        }
        @keyframes projextly-pulse {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.4; }
        }
      `}</style>
    </div>
  );
}
