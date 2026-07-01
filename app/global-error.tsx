"use client";

export default function GlobalError({
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <html lang="en">
      <body
        style={{
          margin: 0,
          minHeight: "100vh",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "#060B12",
          color: "#ffffff",
          fontFamily:
            'Inter, ui-sans-serif, system-ui, -apple-system, sans-serif',
          textAlign: "center",
          padding: "2rem",
        }}
      >
        <div
          style={{
            fontSize: "4rem",
            marginBottom: "1rem",
          }}
          role="img"
          aria-label="Error"
        >
          💥
        </div>
        <h1
          style={{
            fontSize: "2rem",
            fontWeight: 800,
            marginBottom: "0.75rem",
            letterSpacing: "-0.03em",
          }}
        >
          Critical Error
        </h1>
        <p
          style={{
            color: "#9ca3af",
            maxWidth: "28rem",
            marginBottom: "2rem",
            fontSize: "1.125rem",
            lineHeight: 1.6,
          }}
        >
          A critical application error has occurred. Please try reloading the
          page.
        </p>
        <button
          onClick={() => reset()}
          style={{
            backgroundColor: "#00e5ff",
            color: "#000000",
            fontWeight: 700,
            border: "none",
            borderRadius: "0.5rem",
            padding: "1rem 2rem",
            fontSize: "1rem",
            cursor: "pointer",
            transition: "transform 0.2s, box-shadow 0.2s",
          }}
          onMouseOver={(e) => {
            (e.target as HTMLButtonElement).style.transform = "scale(1.02)";
            (e.target as HTMLButtonElement).style.boxShadow =
              "0 0 20px rgba(0,229,255,0.4)";
          }}
          onMouseOut={(e) => {
            (e.target as HTMLButtonElement).style.transform = "scale(1)";
            (e.target as HTMLButtonElement).style.boxShadow = "none";
          }}
        >
          Reload Page
        </button>
      </body>
    </html>
  );
}
