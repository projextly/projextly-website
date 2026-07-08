import type { Metadata } from "next";
import LandingPageClient from "./LandingPageClient";

export const metadata: Metadata = {
  title:
    "Web Design Company in Bangalore | Professional Website Designers | Projextly",
  description:
    "Projextly is the best web design company in Bangalore. We build high-converting, responsive, SEO-friendly websites for startups, healthcare, education, ecommerce, and SaaS companies. Get a free consultation today.",
  keywords: [
    "web design company bangalore",
    "website design company bangalore",
    "best web designing company bangalore",
    "professional website designers bangalore",
    "responsive website development bangalore",
    "ecommerce website development bangalore",
    "custom website development bangalore",
    "web development agency bangalore",
    "website design services india",
    "Next.js development bangalore",
  ],
  openGraph: {
    title: "Web Design Company in Bangalore | Projextly",
    description:
      "Premium web design company in Bangalore crafting high-converting, SEO-friendly websites for startups, enterprises, healthcare, education, and ecommerce businesses.",
    type: "website",
    siteName: "Projextly",
    locale: "en_IN",
    url: "https://projextly.com/web-designing-company-bangalore",
  },
  twitter: {
    card: "summary_large_image",
    title: "Web Design Company in Bangalore | Projextly",
    description:
      "Premium web design company in Bangalore crafting high-converting, SEO-friendly websites for startups, enterprises, healthcare, education, and ecommerce businesses.",
  },
  alternates: {
    canonical: "https://projextly.com/web-designing-company-bangalore",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

const localBusinessJsonLd = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "@id": "https://projextly.com/#organization",
  name: "Projextly",
  url: "https://projextly.com",
  logo: "https://projextly.com/projextly-logo.png",
  image: "https://projextly.com/projextly-logo.png",
  description:
    "Projextly is a premium web design company in Bangalore, India. We design and build high-converting, responsive, SEO-friendly websites for startups, SMEs, healthcare, education, ecommerce, and SaaS companies.",
  telephone: "+919876543210",
  email: "hello@projextly.com",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Bangalore",
    addressLocality: "Bangalore",
    addressRegion: "Karnataka",
    postalCode: "560001",
    addressCountry: "IN",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: "12.9716",
    longitude: "77.5946",
  },
  areaServed: [
    { "@type": "City", name: "Bangalore" },
    { "@type": "Country", name: "India" },
  ],
  priceRange: "₹₹",
  openingHoursSpecification: {
    "@type": "OpeningHoursSpecification",
    dayOfWeek: [
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
    ],
    opens: "09:00",
    closes: "18:00",
  },
  sameAs: [
    "https://linkedin.com/company/projextly",
    "https://instagram.com/projextly",
    "https://github.com/projextly",
    "https://x.com/projextly",
  ],
};

const breadcrumbJsonLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    {
      "@type": "ListItem",
      position: 1,
      name: "Home",
      item: "https://projextly.com",
    },
    {
      "@type": "ListItem",
      position: 2,
      name: "Web Design Company Bangalore",
      item: "https://projextly.com/web-designing-company-bangalore",
    },
  ],
};

export default function WebDesignBangalorePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify([localBusinessJsonLd, breadcrumbJsonLd]),
        }}
      />
      <LandingPageClient />
    </>
  );
}
