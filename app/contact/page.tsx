import PageHeader from "../components/PageHeader";
import ContactUs from "../components/ContactUs";
import FAQ from "../components/FAQ";

export default function ContactPage() {
  return (
    <main>
      <PageHeader 
        title="Contact Us" 
        subtitle="Have a project in mind? Let's discuss how we can help your business grow."
        badge="Get In Touch"
      />
      <ContactUs />
      <FAQ />
    </main>
  );
}
