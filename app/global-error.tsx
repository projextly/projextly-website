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
          backgroundColor: "#000000",
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
            letterSpacing: "-0.05em",
          }}
        >
          Critical Error
        </h1>
        <p
          style={{
            color: "#71717A",
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
            display: "inline-flex",
            alignItems: "center",
            justifyContent: "space-between",
            gap: "1rem",
            backgroundColor: "#ffffff",
            color: "#18181B",
            fontWeight: 500,
            border: "none",
            borderRadius: "9999px",
            padding: "0.5rem 0.5rem 0.5rem 1.5rem",
            fontSize: "0.875rem",
            cursor: "pointer",
            transition: "all 0.3s",
          }}
          onMouseOver={(e) => {
            (e.currentTarget as HTMLButtonElement).style.transform = "scale(1.05)";
          }}
          onMouseOut={(e) => {
            (e.currentTarget as HTMLButtonElement).style.transform = "scale(1)";
          }}
        >
          Reload Page
          <div style={{
            width: "2.5rem",
            height: "2.5rem",
            backgroundColor: "#18181B",
            borderRadius: "50%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            color: "white"
          }}>
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8"/><path d="M3 3v5h5"/></svg>
          </div>
        </button>
      </body>
    </html>
  );
}
