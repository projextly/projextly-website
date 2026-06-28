import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Footer } from "./components/CTAFooter";
import Navbar from "./components/Navbar";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

export const metadata: Metadata = {
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
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={inter.variable} suppressHydrationWarning>
      <body className="min-h-full flex flex-col">
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
