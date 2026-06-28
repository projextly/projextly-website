export default function Clients() {
  const clients = [
    { name: "NexaStack", industry: "SaaS" },
    { name: "StyleVerse", industry: "E-Commerce" },
    { name: "HealthBridge", industry: "Healthcare" },
    { name: "CloudMetrics", industry: "Analytics" },
    { name: "UrbanStyle", industry: "Retail" },
    { name: "FinPulse", industry: "FinTech" },
    { name: "EduSpark", industry: "EdTech" },
    { name: "GreenLeaf", industry: "Sustainability" },
  ];

  return (
    <section className="bg-black py-20 relative overflow-hidden">
      {/* Top divider glow */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-cyan-400/20 to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <p className="text-gray-500 text-sm uppercase tracking-widest text-center mb-10 font-medium">
          Trusted by innovative companies across India
        </p>

        {/* Client Logos Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-4 gap-4">
          {clients.map((client) => (
            <div
              key={client.name}
              className="glass-card glass-card-hover py-6 px-6 flex flex-col items-center justify-center group cursor-pointer transition-all duration-300"
            >
              {/* Logo placeholder */}
              <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-white/5 to-white/10 border border-white/10 flex items-center justify-center mb-3 group-hover:border-cyan-400/30 transition-colors">
                <span className="text-xl font-bold text-white/40 group-hover:text-cyan-400/80 transition-colors">
                  {client.name.charAt(0)}
                </span>
              </div>
              <span className="text-white/60 font-semibold text-sm group-hover:text-white transition-colors">
                {client.name}
              </span>
              <span className="text-gray-600 text-xs mt-1">
                {client.industry}
              </span>
            </div>
          ))}
        </div>

        {/* Scroll marquee effect for brand trust */}
        <div className="mt-12 overflow-hidden relative">
          <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-black to-transparent z-10" />
          <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-black to-transparent z-10" />
          <div className="flex animate-[shimmer_20s_linear_infinite] gap-8 text-gray-600 text-sm whitespace-nowrap">
            {[...Array(3)].map((_, groupIdx) => (
              <div key={groupIdx} className="flex gap-8">
                {clients.map((c) => (
                  <span key={`${groupIdx}-${c.name}`} className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-cyan-400/40" />
                    {c.name}
                  </span>
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
