"use client";

import Image from "next/image";
import { ArrowRight } from "lucide-react";

const cards = [
  {
    title: "Creative websites",
    description:
      "We deliver creative websites that are best in class and compatible with a wide range of devices, setting a standard in web development services.",
  },
  {
    title: "Coding & usability",
    description:
      "We use the latest technologies for delivering web applications that are powerful and can scale with your business.",
  },
  {
    title: "Be first in Google",
    description:
      "With our digital marketing and SEO services we will help your website rank at the top of the search engine results.",
  },
];

const points = [
  "Highly skilled professionals delivering unique and creative websites.",
  "Tailored services for exceptional web solutions to meet specific needs.",
  "Utilizing capabilities to provide customized business solutions.",
  "Impeccable web services keep ahead of the competition.",
  "A preferred choice for top-notch website development.",
];

export default function BusinessSuccess() {
  return (
    <section className="bg-white">
      {/* Hero Image */}
      <div className="relative h-[230px] w-full">
        <Image
          src="/images/business-banner.jpg"
          alt="Business"
          fill
          className="object-cover"
        />
      </div>

      {/* Content */}
      <div className="mx-auto -mt-28 max-w-7xl px-6 pb-24">
        <div className="grid gap-16 lg:grid-cols-2">
          {/* Left Side */}
          <div className="pt-32">
            <h2 className="max-w-3xl text-5xl font-semibold leading-tight text-black lg:text-6xl">
              Drive your business success to new heights with ingenious websites
            </h2>

            <p className="mt-8 text-lg leading-8 text-gray-600">
              We offer high-quality website development services tailored for
              businesses. Our customized digital solutions exceed expectations
              and help brands grow with modern technology and outstanding user
              experiences.
            </p>

            <div className="mt-10 space-y-6">
              {points.map((item) => (
                <div key={item} className="flex items-start gap-4">
                  <ArrowRight
                    className="mt-1 shrink-0"
                    size={22}
                    strokeWidth={1.8}
                  />

                  <p className="text-lg text-gray-700">{item}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Right Side Cards */}
          <div className="space-y-8">
            {cards.map((card) => (
              <div
                key={card.title}
                className="rounded-3xl bg-white p-10 shadow-xl transition hover:-translate-y-2 hover:shadow-2xl"
              >
                <h3 className="text-4xl font-medium text-red-500">
                  {card.title}
                </h3>

                <p className="mt-6 text-lg leading-8 text-gray-600">
                  {card.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}