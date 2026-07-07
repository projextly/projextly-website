import type { Metadata } from "next";
import PageHeader from "../components/PageHeader";
import ContactUs from "../components/ContactUs";
import FAQ from "../components/FAQ";

export const metadata: Metadata = {
  title: "Contact Us | Projextly",
  description:
    "Get in touch with Projextly — reach out to discuss your next web project, request a quote, or learn how our Bengaluru-based team can help your business grow online.",
  openGraph: {
    title: "Contact Us | Projextly",
    description:
      "Have a project in mind? Contact Projextly to discuss how we can help your business grow.",
  },
};

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
