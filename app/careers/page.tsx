import PageHeader from "../components/PageHeader";
import Careers from "../components/Careers";

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
