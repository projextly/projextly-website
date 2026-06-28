import Hero from "./components/Hero";
import Clients from "./components/Clients";
import Stats from "./components/Stats";
import Industries from "./components/Industries";
import WhoAreWe from "./components/WhoAreWe";
import Services from "./components/Services";
import OurProcess from "./components/OurProcess";
import TechStack from "./components/TechStack";
import CustomSolutions from "./components/CustomSolutions";
import Portfolio from "./components/Portfolio";
import Testimonials from "./components/Testimonials";
import FAQ from "./components/FAQ";
import Blog from "./components/Blog";
import ContactUs from "./components/ContactUs";

export default function Home() {
  return (
    <main>
      <Hero />
      <Clients />
      <Stats />
      <Services />
      <OurProcess />
      <Portfolio />
      <Industries />
      <WhoAreWe />
      <TechStack />
      <CustomSolutions />
      <Testimonials />
      <FAQ />
      <Blog />
      <ContactUs />
    </main>
  );
}
