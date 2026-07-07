import type { Metadata } from "next";
import PageHeader from "../components/PageHeader";
import WhoAreWe from "../components/WhoAreWe";
import Stats from "../components/Stats";
import Testimonials from "../components/Testimonials";

export const metadata: Metadata = {
  title: "About Us | Projextly",
  description:
    "Learn about Projextly — a team of passionate creators, developers, and strategists based in Bengaluru, India. Discover our mission, values, and the people behind premium digital experiences.",
  openGraph: {
    title: "About Us | Projextly",
    description:
      "Meet the Projextly team — passionate creators and developers crafting premium digital experiences from Bengaluru.",
  },
};

export default function CompanyPage() {
  return (
    <main>
      <PageHeader 
        title="The Company" 
        subtitle="We are a team of passionate creators, developers, and strategists based in Bengaluru."
        badge="About Us"
      />
      <WhoAreWe />
      <Stats />
      <Testimonials />
    </main>
  );
}
