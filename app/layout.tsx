import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Footer } from "./components/CTAFooter";
import Navbar from "./components/Navbar";
import SmoothScrollProvider from "./components/SmoothScrollProvider";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://projextly.com"),
  title: "Projextly — Web Development Agency in Bengaluru",
  description:
    "Projextly is a premium web development agency in Bengaluru, India. We design and build stunning websites, web applications, and digital products with cutting-edge UI, blazing performance, and SEO-first architecture.",
  keywords: [
    "web development agency",
    "Bengaluru",
    "web design",
    "UI/UX",
    "Next.js",
    "React",
    "digital agency India",
  ],
  openGraph: {
    title: "Projextly — Web Development Agency in Bengaluru",
    description:
      "Premium web development agency crafting stunning digital experiences from Bengaluru, India.",
    type: "website",
    siteName: "Projextly",
    locale: "en_IN",
    url: "https://projextly.com",
  },
  twitter: {
    card: "summary_large_image",
    title: "Projextly — Web Development Agency in Bengaluru",
    description:
      "Premium web development agency crafting stunning digital experiences from Bengaluru, India.",
  },
  alternates: {
    canonical: "https://projextly.com",
  },
};

const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Projextly",
  url: "https://projextly.com",
  logo: "https://projextly.com/favicon.ico",
  description:
    "Premium web development agency crafting stunning digital experiences from Bengaluru, India.",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Bengaluru",
    addressRegion: "Karnataka",
    addressCountry: "India",
  },
};

const websiteJsonLd = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "Projextly",
  url: "https://projextly.com",
  potentialAction: {
    "@type": "SearchAction",
    target: "https://projextly.com/search?q={search_term_string}",
    "query-input": "required name=search_term_string",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="min-h-full flex flex-col bg-[#060B12] text-white">
        <SmoothScrollProvider>
          {/* <a href="#main-content" className="skip-link">
            Skip to main content
          </a> */}
          <Navbar />
          <div id="main-content">{children}</div>
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{
              __html: JSON.stringify([organizationJsonLd, websiteJsonLd]),
            }}
          />
          <Footer />
        </SmoothScrollProvider>
      </body>
    </html>
  );
}
