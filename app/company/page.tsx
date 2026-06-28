import PageHeader from "../components/PageHeader";
import WhoAreWe from "../components/WhoAreWe";
import Stats from "../components/Stats";
import Testimonials from "../components/Testimonials";

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
