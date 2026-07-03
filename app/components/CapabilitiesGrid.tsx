export default function CapabilitiesGrid() {
  const capabilities = [
    {
      number: "01",
      title: "Workflows",
      description: "Automate complex, multi-step tasks by stringing together various AI capabilities into seamless, repeatable workflows."
    },
    {
      number: "02",
      title: "Memory Core",
      description: "Give your assistants persistent context so they remember previous interactions, user preferences, and business rules."
    },
    {
      number: "03",
      title: "Data Base Sync",
      description: "Connect securely to internal databases, data warehouses, and vector stores to ground AI responses in your truth."
    },
    {
      number: "04",
      title: "API Access",
      description: "Enable your assistants to take action by calling external services, triggering webhooks, and interacting with SaaS tools."
    },
    {
      number: "05",
      title: "Security & Auth",
      description: "Enterprise-grade protection with granular access controls, SSO integration, and complete audit logging of all AI actions."
    },
    {
      number: "06",
      title: "Analytics",
      description: "Track performance metrics, usage patterns, and user satisfaction to continuously optimize your AI assistants."
    }
  ];

  return (
    <section className="bg-black py-24 w-full">
      <div className="max-w-[1400px] mx-auto px-8">
        <div className="text-[10px] text-gray-500 font-bold tracking-[0.2em] uppercase mb-4">
          Capabilities
        </div>
        <h2 className="text-3xl md:text-5xl font-medium tracking-tight text-white mb-16">
          Your intelligent stack for<br />
          every business need.
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-white/10 border border-white/10 rounded-2xl overflow-hidden">
          {capabilities.map((cap) => (
            <div key={cap.number} className="bg-black p-10 hover:bg-white/[0.02] transition-colors">
              <div className="text-sm font-bold text-gray-600 mb-6">{cap.number}</div>
              <h3 className="text-xl font-medium text-white mb-4">{cap.title}</h3>
              <p className="text-sm text-gray-400 leading-relaxed">
                {cap.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
