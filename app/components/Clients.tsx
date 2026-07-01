import { CLIENTS } from "@/lib/constants";

export default function Clients() {
  return (
    <section className="bg-[#060B12] py-20 relative overflow-hidden">
      {/* Top divider */}
      <div className="absolute top-0 left-0 right-0 h-px bg-white/10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <p className="text-gray-400 text-sm uppercase tracking-widest text-center mb-10 font-medium">
          Trusted by innovative companies across India
        </p>

        {/* Client Logos Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-4 gap-4">
          {CLIENTS.map((client) => (
            <div
              key={client.name}
              className="card-dark p-6 flex flex-col items-center justify-center group transition-all duration-300"
            >
              {/* Logo placeholder */}
              <div className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center mb-3 group-hover:border-[#00e5ff]/30 transition-colors">
                <span className="text-xl font-bold text-gray-400 group-hover:text-[#00e5ff] transition-colors">
                  {client.name.charAt(0)}
                </span>
              </div>
              <span className="text-white font-semibold text-sm group-hover:text-[#00e5ff] transition-colors">
                {client.name}
              </span>
              <span className="text-gray-400 text-xs mt-1">
                {client.industry}
              </span>
            </div>
          ))}
        </div>

        {/* Scroll marquee effect for brand trust */}
        <div className="mt-12 overflow-hidden relative">
          <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-[#060B12] to-transparent z-10" />
          <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-[#060B12] to-transparent z-10" />
          <div className="flex animate-[shimmer_20s_linear_infinite] gap-8 text-gray-400 text-sm whitespace-nowrap">
            {[...Array(3)].map((_, groupIdx) => (
              <div key={groupIdx} className="flex gap-8">
                {CLIENTS.map((c) => (
                  <span key={`${groupIdx}-${c.name}`} className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#00e5ff]/40" />
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
