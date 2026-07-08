"use client";

import { useEffect } from "react";
import dynamic from "next/dynamic";
import LandingNavbar from "../../components/landing/Navbar";
import HeroSection from "../../components/landing/HeroSection";
import TrustSection from "../../components/landing/TrustSection";
import WhyChooseUs from "../../components/landing/WhyChooseUs";
import LandingFooter from "../../components/landing/Footer";

const DesignPrinciples = dynamic(
  () => import("../../components/landing/DesignPrinciples")
);
const ProcessTimeline = dynamic(
  () => import("../../components/landing/ProcessTimeline")
);
const IndustriesSection = dynamic(
  () => import("../../components/landing/IndustriesSection")
);
const TechnologiesSection = dynamic(
  () => import("../../components/landing/TechnologiesSection")
);
const CaseStudies = dynamic(
  () => import("../../components/landing/CaseStudies")
);
const Testimonials = dynamic(
  () => import("../../components/landing/Testimonials")
);
const BlogSection = dynamic(
  () => import("../../components/landing/BlogSection")
);
const FAQSection = dynamic(
  () => import("../../components/landing/FAQSection")
);
const FinalCTA = dynamic(
  () => import("../../components/landing/FinalCTA")
);

export default function LandingPageClient() {
  // Add a class to the body so the root layout can hide the main navbar/footer
  useEffect(() => {
    document.body.classList.add("landing-page");
    return () => {
      document.body.classList.remove("landing-page");
    };
  }, []);

  return (
    <div className="landing-page-container bg-black text-white selection:bg-[#E5333B] selection:text-white">
      <LandingNavbar />
      <main>
        <HeroSection />
        <TrustSection />
        <WhyChooseUs />
        <DesignPrinciples />
        <ProcessTimeline />
        <IndustriesSection />
        <TechnologiesSection />
        <CaseStudies />
        <Testimonials />
        <BlogSection />
        <FAQSection />
        <FinalCTA />
      </main>
      <LandingFooter />
    </div>
  );
}
