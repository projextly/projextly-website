import dynamic from 'next/dynamic';
import Hero from './components/Hero';
import Clients from './components/Clients';
import Portfolio from './components/Portfolio';
import Services from './components/Services';

const OurProcess = dynamic(() => import('./components/OurProcess'));
const CustomSolutions = dynamic(() => import('./components/CustomSolutions'));
const Testimonials = dynamic(() => import('./components/Testimonials'));
const Stats = dynamic(() => import('./components/Stats'));
const Industries = dynamic(() => import('./components/Industries'));
const WhoAreWe = dynamic(() => import('./components/WhoAreWe'));
const TechStack = dynamic(() => import('./components/TechStack'));
const FAQ = dynamic(() => import('./components/FAQ'));
const Blog = dynamic(() => import('./components/Blog'));
const ContactUs = dynamic(() => import('./components/ContactUs'));

export default function Home() {
  return (
    <main>
      <Hero />
      <Clients />
      <Portfolio />
      <Services />
      <OurProcess />
      <CustomSolutions />
      <Testimonials />
      <Stats />
      <Industries />
      <WhoAreWe />
      <TechStack />
      <FAQ />
      <Blog />
      <ContactUs />
    </main>
  );
}
