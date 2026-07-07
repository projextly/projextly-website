"use client";

import { ArrowUpRight, ArrowRight } from "lucide-react";

const features = [
  {
    title: "Dedicated and personalized web development",
    description:
      "We value making things and always give our best to create unique websites and achieve great outcomes.",
    points: [
      "Focus on your needs",
      "Tailored to your business",
      "Personalized attention",
    ],
  },
  {
    title: "High quality at a reasonable cost",
    description:
      "Our streamlined processes and optimized resource allocation enable us to deliver high-quality web development solutions as per global standards.",
    points: [
      "Affordable prices",
      "High-quality work",
      "Value for your money",
    ],
  },
  {
    title: "Real-time project tracking",
    description:
      "At Projextly, we prioritize transparent communication with our clients by providing real-time report tracking.",
    points: [
      "Stay up-to-date",
      "See your project progress",
      "Be involved in the process",
    ],
  },
  {
    title: "Ongoing support",
    description:
      "We believe in providing ongoing support to our clients in maintaining and optimizing their websites.",
    points: [
      "Help when you need it",
      "Answer your questions",
      "Make sure you're happy",
    ],
  },
  {
    title: "Dynamic and responsive website",
    description:
      "We strive to exceed client expectations with our reliable and accessible web development services.",
    points: [
      "Looks great on any device",
      "Works seamlessly",
      "Keeps your visitors engaged",
    ],
  },
  {
    title: "Performance readiness",
    description:
      "We use smart tools to make websites easy to use and navigate for users.",
    points: [
      "Built to last",
      "Scalable and secure",
      "Ready for the future",
    ],
  },
];

export default function WhyChooseUs2() {
  return (
    <section className="bg-[#faf9f7]">
      {/* Header */}
      <div
        className="border-b border-neutral-200"
        style={{
          backgroundImage:
            "linear-gradient(to right,#ececec 1px,transparent 1px),linear-gradient(to bottom,#ececec 1px,transparent 1px)",
          backgroundSize: "16px 16px",
        }}
      >
        <div className="mx-auto max-w-7xl px-6 py-20">
          <div className="flex flex-wrap items-start gap-5">
            <h2 className="max-w-4xl text-4xl font-semibold leading-tight text-black md:text-6xl">
              Why Projextly is the Top Web Development Company in Bangalore?
            </h2>

            <button className="flex h-14 w-24 items-center justify-center rounded-full border border-black hover:bg-black hover:text-white transition">
              <ArrowRight size={28} strokeWidth={1.5} />
            </button>
          </div>

          {/* Decorative Shape */}
          <div className="mt-6 flex items-center gap-2">
            <div className="relative h-14 w-14 overflow-hidden rounded-full">
              <div className="absolute bottom-0 left-0 h-full w-full bg-[#f59d75] rounded-tr-full"></div>
            </div>

            <div className="-ml-7 -mt-7 flex gap-2">
              <div className="h-3 w-3 rounded-full bg-black"></div>
              <div className="mt-3 h-2.5 w-2.5 rounded-full bg-black"></div>
            </div>
          </div>
        </div>
      </div>

      {/* Feature Grid */}
      <div className="mx-auto max-w-7xl px-6 py-14">
        <div className="grid grid-cols-1 border-t border-l border-neutral-300 md:grid-cols-2 lg:grid-cols-3">
          {features.map((item, index) => (
            <div
              key={index}
              className="border-r border-b border-neutral-300 p-8"
            >
              <h3 className="mb-5 text-3xl font-medium leading-tight text-black">
                {item.title}
              </h3>

              <p className="mb-8 text-sm leading-7 text-neutral-600">
                {item.description}
              </p>

              <ul className="space-y-2 text-sm text-black">
                {item.points.map((point) => (
                  <li key={point}>+ {point}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Button */}
        <div className="mt-10 flex justify-center">
          <button className="group flex items-center gap-3 border border-black px-7 py-4 text-sm font-medium transition hover:bg-black hover:text-white">
            Book a 30-min Free Consultation
            <ArrowUpRight
              size={18}
              className="transition group-hover:translate-x-1 group-hover:-translate-y-1"
            />
          </button>
        </div>
      </div>
    </section>
  );
}