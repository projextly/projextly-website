import type { Metadata } from "next";
import PageHeader from "../components/PageHeader";
import Careers from "../components/Careers";

export const metadata: Metadata = {
  title: "Careers | Projextly",
  description:
    "Join Projextly — we're hiring talented developers, designers, and strategists in Bengaluru, India. Build the next generation of digital experiences with a passionate team.",
  openGraph: {
    title: "Careers | Projextly",
    description:
      "Explore career opportunities at Projextly and help build the next generation of digital experiences.",
  },
};

export default function CareersPage() {
  return (
    <main>
      <PageHeader 
        title="Join Our Team" 
        subtitle="We are always looking for talented individuals to help us build the next generation of digital experiences."
        badge="Careers"
      />
      <Careers />
    </main>
  );
}
