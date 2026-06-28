export function CTA() {
  return (
    <section id="contact" className="relative py-24 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-black via-cyan-950/20 to-black" />

      {/* Decorative glows */}
      <div className="absolute -top-20 -right-20 w-80 h-80 bg-cyan-500/10 rounded-full blur-[100px]" />
      <div className="absolute -bottom-20 -left-20 w-64 h-64 bg-cyan-400/10 rounded-full blur-[100px]" />

      <div className="relative max-w-3xl mx-auto px-4 text-center">
        <h2 className="text-3xl sm:text-5xl font-bold text-white mb-5 leading-tight">
          Ready to Build Something Amazing?
        </h2>
        <p className="text-gray-400 text-base max-w-xl mx-auto mb-8">
          Let us turn your vision into a stunning digital reality. Get in touch
          for a free consultation and project estimate.
        </p>
        <a
          href="mailto:hello@projextly.com"
          className="inline-block bg-cyan-400 text-black font-bold px-8 py-4 rounded-xl hover:bg-cyan-300 hover:scale-105 transition-all text-sm shadow-lg shadow-cyan-500/20"
        >
          GET STARTED TODAY →
        </a>
      </div>
    </section>
  );
}

const socialLinks = [
  { label: "X", href: "#" },
  { label: "in", href: "#" },
  { label: "gh", href: "#" },
  { label: "dr", href: "#" },
];

const services = [
  { label: "Web Development", href: "/services" },
  { label: "UI/UX Design", href: "/services" },
  { label: "E-Commerce", href: "/services" },
  { label: "SEO & Performance", href: "/services" },
  { label: "Mobile-First Design", href: "/services" },
];

const companyLinks = [
  { label: "Home", href: "/" },
  { label: "The Company", href: "/company" },
  { label: "Portfolio", href: "/portfolio" },
  { label: "Careers", href: "/careers" },
  { label: "Contact", href: "/contact" },
];

export function Footer() {
  return (
    <footer className="bg-black border-t border-white/5 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          {/* Column 1 — Brand */}
          <div className="lg:col-span-2">
            <h3 className="text-2xl font-bold text-white mb-1">
              Projextly<span className="text-cyan-400">.</span>
            </h3>
            <p className="text-cyan-400 text-sm font-medium mb-4">
              Web Development Agency
            </p>
            <p className="text-gray-500 text-sm">
              Bengaluru, Karnataka, India
            </p>
            <div className="flex gap-3 mt-5">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  className="w-9 h-9 bg-white/5 hover:bg-cyan-400/20 rounded-full flex items-center justify-center text-gray-400 hover:text-cyan-400 transition-colors border border-white/10 text-xs font-semibold"
                >
                  {social.label}
                </a>
              ))}
            </div>
          </div>

          {/* Column 2 — Services */}
          <div>
            <h4 className="text-white font-semibold text-sm uppercase tracking-wide mb-4">
              Services
            </h4>
            <ul className="space-y-2.5">
              {services.map((service) => (
                <li key={service.label}>
                  <a
                    href={service.href}
                    className="text-gray-500 text-sm hover:text-cyan-400 transition-colors"
                  >
                    {service.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3 — Company */}
          <div>
            <h4 className="text-white font-semibold text-sm uppercase tracking-wide mb-4">
              Company
            </h4>
            <ul className="space-y-2.5">
              {companyLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-gray-500 text-sm hover:text-cyan-400 transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/5 pt-6 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-gray-600 text-xs">
            © 2026 Projextly. All rights reserved.
          </p>
          <div className="flex gap-5">
            <a
              href="#"
              className="text-gray-600 text-xs hover:text-cyan-400 transition-colors"
            >
              Privacy Policy
            </a>
            <a
              href="#"
              className="text-gray-600 text-xs hover:text-cyan-400 transition-colors"
            >
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
