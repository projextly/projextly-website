import { INDUSTRIES } from "@/lib/constants";

export default function Industries() {
  return (
    <section className="bg-white py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 text-center mb-4">
          Industries We Serve
        </h2>
        <p className="text-gray-600 text-center max-w-2xl mx-auto mb-12">
          Delivering best-in-class web solutions across diverse industries worldwide.
        </p>

        <div className="flex flex-wrap justify-center gap-4 md:gap-6">
          {INDUSTRIES.map((industry) => {
            const Icon = industry.icon;
            return (
              <div
                key={industry.label}
                className="b2b-card b2b-card-hover p-6 md:p-8 text-center group min-w-[130px] transition-all duration-300"
              >
                <Icon className="w-8 h-8 text-teal-600 mx-auto mb-3 group-hover:scale-110 transition-transform" />
                <span className="text-sm font-medium text-gray-600 group-hover:text-teal-600 transition-colors">
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
