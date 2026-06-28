import PageHeader from "../components/PageHeader";
import Portfolio from "../components/Portfolio";
import Clients from "../components/Clients";

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
