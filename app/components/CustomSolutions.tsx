import { Check } from "lucide-react";
import Link from "next/link";
import { PRICING_PLANS } from "@/lib/constants";

export default function CustomSolutions() {
  return (
    <section className="bg-gray-50 py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Left Column */}
          <div className="lg:sticky lg:top-24">
            <p className="text-[#00b8cc] font-semibold text-sm uppercase tracking-widest mb-3">
              Flexible Packages
            </p>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4 leading-tight">
              Solutions for Every Stage of Growth
            </h2>
            <p className="text-gray-600 leading-relaxed">
              Whether you are a startup launching your first product or an
              enterprise scaling globally, we have the right package tailored to
              your needs.
            </p>
            <Link
              href="#"
              className="btn-brainhub inline-block mt-6 px-6 py-3 rounded-xl hover:scale-105"
            >
              Get A Custom Quote →
            </Link>
          </div>

          {/* Right Column */}
          <div className="space-y-5">
            {PRICING_PLANS.map((plan) => (
              <div
                key={plan.tier}
                className={
                  plan.highlight
                    ? "relative bg-white border-2 border-[#00b8cc] rounded-2xl p-7 shadow-lg shadow-[#00b8cc]/10"
                    : "b2b-card b2b-card-hover p-7"
                }
              >
                {plan.highlight && (
                  <span className="absolute -top-3 right-6 bg-[#00b8cc] text-white text-xs font-bold px-3 py-1 rounded-full">
                    Most Popular
                  </span>
                )}

                <div className="flex items-center justify-between mb-4">
                  <div>
                    <h3
                      className={
                        plan.highlight
                          ? "font-bold text-xl text-[#00b8cc]"
                          : "font-bold text-xl text-gray-900"
                      }
                    >
                      {plan.tier}
                    </h3>
                    <p
                      className={
                        plan.highlight
                          ? "text-[#00b8cc]/80 text-sm"
                          : "text-gray-600 text-sm"
                      }
                    >
                      {plan.subtitle}
                    </p>
                  </div>
                </div>

                <ul className="space-y-2.5 mb-6">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-center gap-3">
                      <Check className="w-4 h-4 text-[#00b8cc] shrink-0" />
                      <span className="text-sm text-gray-600">{feature}</span>
                    </li>
                  ))}
                </ul>

                <button
                  className={
                    plan.highlight
                      ? "btn-brainhub w-full relative px-5 py-2.5 rounded-xl transition-all"
                      : "border border-gray-200 text-gray-900 font-semibold px-5 py-2.5 rounded-xl hover:border-[#00b8cc]/50 hover:bg-gray-50 transition-all w-full"
                  }
                >
                  {plan.cta}
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
