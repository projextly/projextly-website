import { Code2, Palette, ShoppingBag, Search, Smartphone, Settings } from "lucide-react";

const services = [
  {
    icon: Code2,
    title: "Web Development",
    desc: "Custom, high-performance websites and web applications built with React, Next.js, and modern frameworks for seamless digital experiences.",
  },
  {
    icon: Palette,
    title: "UI/UX Design",
    desc: "Beautiful, intuitive interfaces designed with user-centric methodologies that elevate your brand and delight your customers.",
  },
  {
    icon: ShoppingBag,
    title: "E-Commerce Solutions",
    desc: "Scalable online stores with secure payment integration, inventory management, and conversion-optimized checkout flows.",
  },
  {
    icon: Search,
    title: "SEO & Performance",
    desc: "Data-driven SEO strategies and performance optimization that boost your search rankings and drive organic growth.",
  },
  {
    icon: Smartphone,
    title: "Mobile-First Design",
    desc: "Responsive, mobile-optimized experiences that look and perform beautifully across every device and screen size.",
  },
  {
    icon: Settings,
    title: "Custom Software",
    desc: "Tailored software solutions and integrations built to automate workflows, streamline operations, and scale your business.",
  },
];

export default function Services() {
  return (
    <section id="services" className="relative py-24 overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-cyan-950/10 to-black" />

      {/* Subtle animated grid pattern */}
      <div className="absolute inset-0 animated-grid opacity-20" />

      {/* Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Heading */}
        <p className="text-cyan-400 font-semibold text-sm uppercase tracking-widest mb-3 text-center">
          Our Services
        </p>
        <h2 className="text-3xl sm:text-4xl font-bold text-white text-center mb-4">
          What We Build
        </h2>
        <p className="text-gray-400 text-center max-w-2xl mx-auto mb-14">
          From concept to launch, we deliver end-to-end web solutions that help
          businesses thrive in the digital landscape.
        </p>

        {/* Services grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service) => (
            <div
              key={service.title}
              className="glass-card glass-card-hover p-8 group cursor-pointer transition-all duration-300"
            >
              {/* Icon container */}
              <div className="w-12 h-12 rounded-xl bg-cyan-400/10 flex items-center justify-center mb-5 group-hover:bg-cyan-400/20 transition-colors">
                <service.icon className="w-6 h-6 text-cyan-400" />
              </div>

              {/* Title */}
              <h3 className="text-white font-bold text-lg mb-3 group-hover:text-cyan-300 transition-colors">
                {service.title}
              </h3>

              {/* Description */}
              <p className="text-gray-400 text-sm leading-relaxed">
                {service.desc}
              </p>

              {/* Learn More link */}
              <a
                href="#"
                className="inline-block mt-4 text-cyan-400 font-medium text-sm hover:text-cyan-300 transition-colors"
              >
                Learn More →
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
