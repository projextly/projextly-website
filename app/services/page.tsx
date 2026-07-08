import type { Metadata } from "next";
import PageHeader from "../components/PageHeader";
import Services from "../components/Services";
import OurProcess from "../components/OurProcess";
// import CustomSolutions from "../components/CustomSolutions";

export const metadata: Metadata = {
  title: "Services | Projextly",
  description:
    "Explore Projextly's full-stack web development services — from custom UI/UX design and Next.js development to performance optimization and SEO-first architecture. Built in Bengaluru for the world.",
  openGraph: {
    title: "Services | Projextly",
    description:
      "Full-stack web development, design, and digital solutions engineered for growth — by Projextly.",
  },
};

export default function ServicesPage() {
  return (
    <main>
      <PageHeader 
        title="Our Services" 
        subtitle="End-to-end web development, design, and digital solutions engineered for growth."
        badge="What We Do"
      />
      <Services />
      <OurProcess />
      {/* <CustomSolutions /> */}
    </main>
  );
}
