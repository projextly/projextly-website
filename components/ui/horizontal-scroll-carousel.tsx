"use client";

import { motion, useTransform, useScroll } from "framer-motion";
import { useRef } from "react";
import { Zap, Palette, Search, Code, Users, Heart } from "lucide-react";

const WhyChooseUsCarousel = () => {
  return (
    <div className="bg-black">
      <div className="flex h-48 flex-col items-center justify-center pt-24 pb-12">
        <p className="text-[#34D399] font-semibold text-sm uppercase tracking-widest mb-3 text-center">
          The Projextly Advantage
        </p>
        <h2 className="text-3xl sm:text-5xl font-bold text-white text-center leading-tight">
          Why Choose Projextly?
        </h2>
      </div>
      <HorizontalScrollCarousel />
    </div>
  );
};

const HorizontalScrollCarousel = () => {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
  });

  const x = useTransform(scrollYProgress, [0, 1], ["1%", "-67%"]);

  return (
    <section ref={targetRef} className="relative h-[400vh] bg-black">
      <div className="sticky top-0 flex h-screen items-center overflow-hidden">
        <motion.div style={{ x }} className="flex gap-2 px-6">
          {cards.map((CardComponent, index) => (
            <CardComponent key={index} />
          ))}
        </motion.div>
      </div>
    </section>
  );
};

// const Card = ({ card }: { card: typeof cards[0] }) => {
//   const Icon = card.icon;
//   return (
//     <div
//       key={card.id}
//       className="group relative h-137 w-7xl overflow-hidden rounded-xl bg-neutral-900 border border-white/10"
//     >
//       <card />
//     </div>
//   );
// };

export default WhyChooseUsCarousel;


import {
  Brush,
  Cpu,
  Code2,
  ShieldCheck,
  FileCheck,
  Clock3,
  Wrench,
  TimerReset,
  BadgeCheck,
} from "lucide-react";

const features = [
  {
    icon: Brush,
    title: "Crafted\nDesign",
    description: "Visually engrossing designs that captivate audiences",
  },
  {
    icon: Cpu,
    title: "Structured Web\nFramework",
    description: "Scalable architecture for seamless growth",
  },
  {
    icon: Code2,
    title: "Secure Coding\nTechniques",
    description: "Robust defense against cyber threats",
  },
  {
    icon: ShieldCheck,
    title: "Advanced Web\nProtection",
    description: "Cutting-edge security measures for safety",
  },
  {
    icon: Users,
    title: "Dedicated\nTeam",
    description: "Experts committed to client success",
  },
  {
    icon: FileCheck,
    title: "Result-Oriented\nApproach",
    description: "Strategies for achieving desired outcomes",
  },
  {
    icon: Clock3,
    title: "24/7 Email\nSupport",
    description: "Round-the-clock assistance for client convenience",
  },
  {
    icon: Wrench,
    title: "Maintenance\nSupport",
    description: "Reliable upkeep for website performance",
  },
  {
    icon: TimerReset,
    title: "On-time\nDelivery",
    description: "Timely completion of web projects",
  },
  {
    icon: BadgeCheck,
    title: "100% Client\nSatisfaction",
    description: "Client fulfillment by exceeding expectations",
  },
];

export function Card1() {
  return (
    <section className="bg-[#f6fbfb] w-7xl rounded-xl flex items-center justify-center">
      {/* <div className="mx-auto px-4"> */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-y-12 gap-x-8">
          {features.map((item, index) => {
            const Icon = item.icon;

            return (
              <div
                key={index}
                className="group flex flex-col items-center text-center"
              >
                <div className="mb-5">
                  <div className="flex h-20 w-20 items-center justify-center rounded-full transition-all duration-300 group-hover:scale-110">
                    <Icon
                      className="h-12 w-12 text-[#ef4444]"
                      strokeWidth={1.8}
                    />
                  </div>
                </div>

                <h3 className="text-md font-bold text-black">
                  {item.title}
                </h3>

                <p className="mt-3 text-sm leading-4 text-gray-700 max-w-60">
                  {item.description}
                </p>
              </div>
            );
          })}
        </div>
      {/* </div> */}
    </section>
  );
}



import Image from "next/image";

const stats = [
  {
    value: "96%",
    text: "Agree, positive user experience leads to sales",
  },
  {
    value: "93%",
    text: "Start online experience with search engines",
  },
  {
    value: "75%",
    text: "Research companies online before taking action",
  },
  {
    value: "72%",
    text: "Of users revisit mobile-friendly websites",
  },
  {
    value: "52%",
    text: "Say website design affects business credibility",
  },
  {
    value: "46%",
    text: "Expect website pages to load within 2 seconds",
  },
];

export function Card2() {
  return (
    <section className="bg-[#F8F4EC] w-7xl rounded-xl flex items-center justify-center">
      <div className="mx-auto max-w-7xl px-6 lg:px-8 py-20">
        {/* Heading */}
        <h2 className="mb-20 text-center text-4xl font-bold text-black lg:text-5xl">
          Why Does Your Business Need a Website in 2026?
        </h2>

        <div className="grid items-center gap-16 lg:grid-cols-2">
          {/* Left Side */}
          <div className="grid grid-cols-2 gap-x-12 gap-y-12 md:grid-cols-3">
            {stats.map((item) => (
              <div key={item.value}>
                <h3 className="text-4xl font-bold text-black">
                  {item.value}
                </h3>

                <p className="mt-3 text-sm leading-7 text-gray-700">
                  {item.text}
                </p>
              </div>
            ))}
          </div>

          {/* Right Side */}
          <div className="relative flex justify-center">
            {/* Grid Background */}
            <div
              className="absolute inset-0 opacity-30"
              style={{
                backgroundImage: `
                  linear-gradient(#000 1px, transparent 1px),
                  linear-gradient(90deg,#000 1px,transparent 1px)
                `,
                backgroundSize: "80px 80px",
              }}
            />

            {/* Dots */}
            <div className="absolute inset-0">
              {Array.from({ length: 7 }).map((_, row) =>
                Array.from({ length: 7 }).map((_, col) => (
                  <span
                    key={`${row}-${col}`}
                    className="absolute h-3 w-3 -translate-x-1/2 -translate-y-1/2 rotate-45 bg-black"
                    style={{
                      top: `${row * 16.6}%`,
                      left: `${col * 16.6}%`,
                    }}
                  />
                ))
              )}
            </div>

            {/* Circle */}
            <div className="relative h-100 w-100 overflow-hidden rounded-full bg-[#E7E3E0] shadow-xl">
              <Image
                src="/rocket.png" // <-- Replace with your image
                alt="Rocket"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}


const stats3 = [
  {
    value: "12+",
    title: "Years of experience",
    description:
      "Established in 2013, we have more than 12 years of experience in website development.",
  },
  {
    value: "2000+",
    title: "Websites developed",
    description:
      "With extensive experience in website development, we've successfully built over 2,000 websites for a diverse range of clients.",
  },
  {
    value: "25+",
    title: "Countries served",
    description:
      "With our global dominance, we have served our clients in more than 25+ countries across the globe.",
  },
];

export function Card3() {
  return (
    <section className="bg-[#F5FAFB] mx-auto w-7xl rounded-xl flex items-center justify-center">
      <div className="mx-auto max-w-7xl px-6 lg:px-8 py-20">
        <div className="grid items-center gap-20 lg:grid-cols-2">
          {/* Left Content */}
          <div>
            <h2 className="max-w-xl text-3xl font-bold leading-tight text-black">
              Website development company in Bangalore
            </h2>

            <div className="mt-8 space-y-8 text-[14px]  text-gray-700">
              <p>
                Being a top web development company in Bangalore, Webomindapps
                believes in delivering the best value to its clients. This is
                Webomindapps mission and sole purpose while taking up any new
                project. We have built our reputation on the core philosophy of
                delivering the best in class with the best in price.
              </p>

              <p>
                Our core specialties meticulously develop contemporary websites
                to engage and inspire your target audience. We aim to create a
                strong online presence by aligning your corporate vision with
                website development.
              </p>
            </div>
          </div>

          {/* Right Content */}
          <div className="flex flex-col gap-14">
            {stats3.map((item) => (
              <div
                key={item.title}
                className="flex items-center gap-8"
              >
                {/* Circle */}
                <div className="flex h-40 w-40 shrink-0 items-center justify-center rounded-full border-[4px] border-black text-black">
                  <span className="text-3xl font-bold">
                    {item.value}
                  </span>
                </div>

                {/* Text */}
                <div>
                  <h3 className="text-3xl font-semibold text-black">
                    {item.title}
                  </h3>

                  <p className="mt-4 max-w-md text-base leading-7 text-gray-700">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}


import { ArrowUpRight } from "lucide-react";

export function Card4() {
  return (
    <section className="bg-[#F8F3E8] w-7xl rounded-xl flex items-center justify-center">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-center px-6 text-center">
        {/* Small Label */}
        <span className="mb-8 text-sm font-medium text-[#E35A5A]">
          Have a project in mind?
        </span>

        {/* Heading */}
        <h2 className="max-w-5xl text-5xl font-bold uppercase leading-[1.05] tracking-tight text-black md:text-7xl">
          LET'S MAKE SOMETHING
          <br />
          GREAT TOGETHER!
        </h2>

        {/* Button */}
        <button className="group mt-12 flex h-44 w-44 items-center justify-center rounded-full border border-black bg-transparent transition-all duration-300 hover:bg-black hover:text-white">
          <div className="flex items-center gap-2 text-lg font-medium">
            <span className="text-black group-hover:text-white">Contact Us</span>

            <ArrowUpRight
              size={20}
              className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
            />
          </div>
        </button>
      </div>
    </section>
  );
}

const cards = [
  Card1,
  Card2,
  Card3,
  Card4,
];