import { Heart, Building2, GraduationCap, ShoppingCart, Cloud, Landmark } from "lucide-react";
import type { LucideIcon } from "lucide-react";

interface Industry {
  icon: LucideIcon;
  label: string;
}

const industries: Industry[] = [
  { icon: Heart, label: "Healthcare" },
  { icon: Building2, label: "Real Estate" },
  { icon: GraduationCap, label: "Education" },
  { icon: ShoppingCart, label: "E-Commerce" },
  { icon: Cloud, label: "Cloud / SaaS" },
  { icon: Landmark, label: "FinTech" },
];

export default function Industries() {
  return (
    <section className="bg-black py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl sm:text-4xl font-bold text-white text-center mb-4">
          Industries We Serve
        </h2>
        <p className="text-gray-400 text-center max-w-2xl mx-auto mb-12">
          Delivering best-in-class web solutions across diverse industries worldwide.
        </p>

        <div className="flex flex-wrap justify-center gap-4 md:gap-6">
          {industries.map((industry) => {
            const Icon = industry.icon;
            return (
              <div
                key={industry.label}
                className="glass-card glass-card-hover p-6 md:p-8 text-center cursor-pointer group min-w-[130px] transition-all duration-300"
              >
                <Icon className="w-8 h-8 text-cyan-400 mx-auto mb-3 group-hover:scale-110 transition-transform" />
                <span className="text-sm font-medium text-gray-300 group-hover:text-white transition-colors">
                  {industry.label}
                </span>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
