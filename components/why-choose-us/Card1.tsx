import {
  Brush,
  Cpu,
  Code2,
  ShieldCheck,
  Users,
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
    <section className="flex w-[88vw] shrink-0 items-center justify-center rounded-xl bg-[#f6fbfb] p-6 sm:w-[85vw] sm:p-8 md:w-[80vw] lg:w-[70vw] lg:p-12 xl:w-[1100px]">
      <div className="grid grid-cols-2 gap-x-6 gap-y-8 sm:grid-cols-3 sm:gap-x-8 sm:gap-y-10 lg:grid-cols-5 lg:gap-y-12">
        {features.map((item, index) => {
          const Icon = item.icon;

          return (
            <div key={index} className="group flex flex-col items-center text-center">
              <div className="mb-3 sm:mb-5">
                <div className="flex h-14 w-14 items-center justify-center rounded-full transition-all duration-300 group-hover:scale-110 sm:h-16 sm:w-16 lg:h-20 lg:w-20">
                  <Icon className="h-9 w-9 text-[#ef4444] sm:h-10 sm:w-10 lg:h-12 lg:w-12" strokeWidth={1.8} />
                </div>
              </div>

              <h3 className="whitespace-pre-line text-sm font-bold text-black sm:text-md">{item.title}</h3>

              <p className="mt-2 max-w-40 text-xs leading-4 text-gray-700 sm:mt-3 sm:max-w-60 sm:text-sm">
                {item.description}
              </p>
            </div>
          );
        })}
      </div>
    </section>
  );
}