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
  { icon: Brush, title: "Crafted Design", description: "Bespoke digital aesthetics." },
  { icon: Cpu, title: "Scalable Architecture", description: "Engineered for massive growth." },
  { icon: Code2, title: "Secure Code", description: "Defense against cyber threats." },
  { icon: ShieldCheck, title: "Advanced Protection", description: "Cutting-edge security." },
  { icon: Users, title: "Dedicated Squad", description: "Experts committed to success." },
  { icon: FileCheck, title: "Result-Oriented", description: "Data-driven outcomes." },
  { icon: Clock3, title: "24/7 Support", description: "Round-the-clock maintenance." },
  { icon: Wrench, title: "Systems Upkeep", description: "Reliable performance tuning." },
  { icon: TimerReset, title: "On-Time Deploy", description: "Timely project completion." },
  { icon: BadgeCheck, title: "100% Satisfaction", description: "Exceeding expectations." },
];

export function Card1() {
  return (
    <section className="flex w-[88vw] shrink-0 items-center justify-center rounded-[2.5rem] bg-[#162822] border border-[#E8F4F0]/10 p-6 sm:w-[85vw] sm:p-8 md:w-[80vw] lg:w-[70vw] lg:p-12 xl:w-[1100px] shadow-[0_20px_50px_rgba(0,0,0,0.5)]">
      <div className="grid grid-cols-2 gap-x-6 gap-y-8 sm:grid-cols-3 sm:gap-x-8 sm:gap-y-10 lg:grid-cols-5 lg:gap-y-12">
        {features.map((item, index) => {
          const Icon = item.icon;
          return (
            <div key={index} className="group flex flex-col items-center text-center">
              <div className="mb-4">
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#0A1C16] border border-[#E8F4F0]/10 transition-all duration-300 group-hover:scale-110 group-hover:border-[#E53935]/50 group-hover:shadow-[0_0_20px_rgba(229,57,53,0.3)] sm:h-16 sm:w-16 lg:h-20 lg:w-20">
                  <Icon className="h-6 w-6 text-[#E53935] sm:h-8 sm:w-8 lg:h-10 lg:w-10 transition-colors group-hover:text-[#E8F4F0]" strokeWidth={1.5} />
                </div>
              </div>
              <h3 className="whitespace-pre-line text-sm font-display font-bold text-[#E8F4F0] sm:text-md tracking-wide">{item.title}</h3>
              <p className="mt-2 max-w-40 text-xs leading-5 font-sans text-[#8A9F98] sm:mt-3 sm:max-w-60 sm:text-sm">
                {item.description}
              </p>
            </div>
          );
        })}
      </div>
    </section>
  );
}