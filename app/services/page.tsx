import PageHeader from "../components/PageHeader";
import Services from "../components/Services";
import OurProcess from "../components/OurProcess";
import CustomSolutions from "../components/CustomSolutions";

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
      <CustomSolutions />
    </main>
  );
}
