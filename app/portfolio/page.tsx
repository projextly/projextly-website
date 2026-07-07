import type { Metadata } from "next";
import PageHeader from "../components/PageHeader";
import Portfolio from "../components/Portfolio";
import Clients from "../components/Clients";

export const metadata: Metadata = {
  title: "Portfolio | Projextly",
  description:
    "Browse Projextly's portfolio of case studies and client projects — real-world examples of high-performance websites, web apps, and digital products built with modern tech.",
  openGraph: {
    title: "Portfolio | Projextly",
    description:
      "Case studies and client work showcasing scalable digital products built by Projextly.",
  },
};

export default function PortfolioPage() {
  return (
    <main>
      <PageHeader 
        title="Our Work" 
        subtitle="Explore how we have helped startups and enterprises build scalable digital products."
        badge="Case Studies"
      />
      <Portfolio />
      <Clients />
    </main>
  );
}
