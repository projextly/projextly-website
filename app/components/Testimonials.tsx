export default function Testimonials() {
  const testimonials = [
    {
      quote: "The integration was seamless. We went from zero to a fully functional AI assistant resolving 40% of our L1 support tickets in just under two weeks.",
      author: "Sarah Jenkins",
      role: "VP of Engineering",
      company: "Acme Corp"
    },
    {
      quote: "What impressed me most was the reasoning engine. It doesn't just regurgitate facts; it connects data points from our internal docs to provide genuinely insightful answers.",
      author: "David Chen",
      role: "CTO",
      company: "Nexus Labs"
    },
    {
      quote: "We replaced three disparate AI tools with this single platform. The ability to give the assistant long-term memory has completely transformed our customer experience.",
      author: "Elena Rodriguez",
      role: "Head of Product",
      company: "FinTech Solutions"
    },
    {
      quote: "Security was our biggest concern, but their enterprise-grade compliance and granular permission controls made it an easy sell to our infosec team.",
      author: "Marcus Thorne",
      role: "CISO",
      company: "Global Healthcare"
    }
  ];

  return (
    <section className="bg-black py-24 w-full">
      <div className="max-w-[1400px] mx-auto px-8">
        <div className="text-[10px] text-gray-500 font-bold tracking-[0.2em] uppercase mb-4">
          Testimonials
        </div>
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16">
          <h2 className="text-3xl md:text-5xl font-medium tracking-tight text-white max-w-xl">
            What our users say about<br />
            their new AI teammate.
          </h2>
          <div className="flex items-center gap-4">
            <button className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center text-white hover:bg-white/10 transition-colors">
              &larr;
            </button>
            <button className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center text-white hover:bg-white/10 transition-colors">
              &rarr;
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {testimonials.map((t, i) => (
            <div key={i} className="bg-[#0a0a0a] border border-white/5 rounded-2xl p-8 flex flex-col justify-between">
              <p className="text-gray-300 text-sm leading-relaxed mb-8">
                "{t.quote}"
              </p>
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-500 to-purple-500"></div>
                <div>
                  <div className="text-sm font-bold text-white">{t.author}</div>
                  <div className="text-xs text-gray-500">{t.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
