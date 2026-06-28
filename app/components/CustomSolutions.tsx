import { Check } from "lucide-react";

const plans = [
  {
    tier: "Starter",
    subtitle: "For Startups & MVPs",
    highlight: false,
    features: [
      "5-page responsive website",
      "Mobile-first design",
      "Basic SEO setup",
      "Contact form integration",
      "1 month post-launch support",
    ],
    cta: "Get Started",
  },
  {
    tier: "Growth",
    subtitle: "For Scaling Businesses",
    highlight: true,
    features: [
      "Up to 15-page custom website",
      "Advanced UI/UX design",
      "Full SEO & analytics setup",
      "CMS integration",
      "E-commerce features",
      "3 months priority support",
    ],
    cta: "Most Popular",
  },
  {
    tier: "Enterprise",
    subtitle: "For Large Organizations",
    highlight: false,
    features: [
      "Custom web application",
      "API integrations & dashboards",
      "Performance optimization",
      "Dedicated project manager",
      "12 months premium support",
    ],
    cta: "Contact Us",
  },
];

export default function CustomSolutions() {
  return (
    <section className="bg-black py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Left Column */}
          <div className="lg:sticky lg:top-24">
            <p className="text-cyan-400 font-semibold text-sm uppercase tracking-widest mb-3">
              Flexible Packages
            </p>
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4 leading-tight">
              Solutions for Every Stage of Growth
            </h2>
            <p className="text-gray-400 leading-relaxed">
              Whether you are a startup launching your first product or an
              enterprise scaling globally, we have the right package tailored to
              your needs.
            </p>
            <a
              href="#"
              className="inline-block mt-6 bg-cyan-400 text-black font-semibold px-6 py-3 rounded-xl hover:bg-cyan-300 transition-all hover:scale-105"
            >
              Get A Custom Quote →
            </a>
          </div>

          {/* Right Column */}
          <div className="space-y-5">
            {plans.map((plan) => (
              <div
                key={plan.tier}
                className={
                  plan.highlight
                    ? "relative bg-gradient-to-br from-cyan-500/10 to-cyan-400/5 border border-cyan-400/30 rounded-2xl p-7 shadow-lg shadow-cyan-500/5"
                    : "bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-7 transition-all duration-300 hover:border-cyan-400/20"
                }
              >
                {plan.highlight && (
                  <span className="absolute -top-3 right-6 bg-cyan-400 text-black text-xs font-bold px-3 py-1 rounded-full">
                    Most Popular
                  </span>
                )}

                <div className="flex items-center justify-between mb-4">
                  <div>
                    <h3
                      className={
                        plan.highlight
                          ? "font-bold text-xl text-cyan-300"
                          : "font-bold text-xl text-white"
                      }
                    >
                      {plan.tier}
                    </h3>
                    <p
                      className={
                        plan.highlight
                          ? "text-cyan-400/80 text-sm"
                          : "text-gray-400 text-sm"
                      }
                    >
                      {plan.subtitle}
                    </p>
                  </div>
                </div>

                <ul className="space-y-2.5 mb-6">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-center gap-3">
                      <Check className="w-4 h-4 text-cyan-400 shrink-0" />
                      <span className="text-sm text-gray-300">{feature}</span>
                    </li>
                  ))}
                </ul>

                <button
                  className={
                    plan.highlight
                      ? "bg-cyan-400 text-black font-semibold px-5 py-2.5 rounded-xl hover:bg-cyan-300 transition-all"
                      : "border border-white/20 text-white font-semibold px-5 py-2.5 rounded-xl hover:border-cyan-400/50 transition-all"
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
