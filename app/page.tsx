import dynamic from 'next/dynamic';
import Hero from './components/Hero';
import Clients from './components/Clients';
import Portfolio from './components/Portfolio';
import Services from './components/Services';
import WhyChooseUsCarousel from './components/WhyChooseUs';
import WebsiteSolutionsSection from './components/WebsiteSolutions';
import FutureOfWebDev from './components/FutureOfWebDev';
import ServicesIntro from './components/ServicesIntro';
import WhyChooseUs2 from './components/WhyChooseUs2';
import BusinessSuccess from './components/BusinessSuccess';
// import WhyChooseUsCarousel from '@/components/ui/horizontal-scroll-carousel';

const OurProcess = dynamic(() => import('./components/OurProcess'));
// const CustomSolutions = dynamic(() => import('./components/CustomSolutions'));
const Testimonials = dynamic(() => import('./components/Testimonials'));
// const Stats = dynamic(() => import('./components/Stats'));
const Industries = dynamic(() => import('./components/Industries'));
const WhoAreWe = dynamic(() => import('./components/WhoAreWe'));
const TechStack = dynamic(() => import('./components/TechStack'));
const FAQ = dynamic(() => import('./components/FAQ'));
// const Blog = dynamic(() => import('./components/Blog'));
const ContactUs = dynamic(() => import('./components/ContactUs'));
// const WhyChooseUs = dynamic(() => import('./components/WhyChooseUs'));

export default function Home() {
  return (
    <main >
      <Hero />
      <WhoAreWe />
      {/* <Clients /> */}
      {/* <Stats /> */}
      <Services />
      {/* <WhyChooseUsCarousel /> */}
      <WebsiteSolutionsSection />
      <Testimonials />
      <BusinessSuccess />
      {/* <FutureOfWebDev /> */}
      <TechStack />
      <OurProcess />
      <WhyChooseUs2 />
      <Industries />
      {/* <WhyChooseUs /> */}
      {/* <CustomSolutions /> */}
      {/* <Portfolio /> */}
      {/* <Industries /> */}
      <FAQ />
      {/* <Blog /> */}
      <ContactUs />
      <ServicesIntro />
    </main>
  );
}
