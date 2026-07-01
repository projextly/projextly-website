import Link from "next/link";
import { SERVICES } from "@/lib/constants";

export default function Services() {
  return (
    <section id="services" className="relative py-24 overflow-hidden bg-gray-50">
      {/* Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Heading */}
        <p className="text-[#00b8cc] font-semibold text-sm uppercase tracking-widest mb-3 text-center">
          Our Services
        </p>
        <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 text-center mb-4">
          What We Build
        </h2>
        <p className="text-gray-600 text-center max-w-2xl mx-auto mb-14">
          From concept to launch, we deliver end-to-end web solutions that help
          businesses thrive in the digital landscape.
        </p>

        {/* Services grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {SERVICES.map((service) => (
            <div
              key={service.title}
              className="b2b-card b2b-card-hover p-6 sm:p-8 group cursor-pointer transition-all duration-300"
            >
              {/* Icon container */}
              <div className="w-12 h-12 rounded-xl bg-[#00e5ff]/10 flex items-center justify-center mb-5 group-hover:bg-[#00e5ff]/20 transition-colors">
                <service.icon className="w-6 h-6 text-[#00b8cc]" />
              </div>

              {/* Title */}
              <h3 className="text-gray-900 font-bold text-lg mb-3 group-hover:text-[#00b8cc] transition-colors">
                {service.title}
              </h3>

              {/* Description */}
              <p className="text-gray-600 text-sm leading-relaxed">
                {service.description}
              </p>

              {/* Learn More link */}
              <Link
                href="#"
                className="inline-block mt-4 text-[#00b8cc] font-medium text-sm hover:text-[#00b8cc]/80 transition-colors"
              >
                Learn More →
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
