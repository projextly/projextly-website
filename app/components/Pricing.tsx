export default function Pricing() {
  return (
    <section className="bg-black py-24 w-full border-t border-white/5">
      <div className="max-w-[1400px] mx-auto px-8">
        <div className="text-[10px] text-gray-500 font-bold tracking-[0.2em] uppercase mb-4">
          Pricing
        </div>
        <h2 className="text-3xl md:text-5xl font-medium tracking-tight text-white mb-16 max-w-2xl">
          Choose a plan for<br />
          <span className="text-gray-400">your needs.</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Free Tier */}
          <div className="bg-[#0a0a0a] border border-white/5 rounded-3xl p-10 flex flex-col hover:border-white/20 transition-colors">
            <h3 className="text-lg font-medium text-white mb-2">Free</h3>
            <div className="text-sm text-gray-400 mb-8 h-10">For individuals and small projects getting started.</div>
            <div className="text-5xl font-medium text-white mb-2">$0<span className="text-lg text-gray-500 font-normal">/mo</span></div>
            <p className="text-sm text-gray-500 mb-10">Free forever</p>
            
            <button className="w-full py-3 rounded-lg border border-white/20 text-white text-sm font-bold tracking-wider hover:bg-white/5 transition-colors mb-10">
              GET STARTED
            </button>

            <div className="flex flex-col gap-4 mt-auto">
              <div className="flex items-center gap-3 text-sm text-gray-300">
                <div className="w-1.5 h-1.5 rounded-full bg-gray-500"></div>
                100 queries / month
              </div>
              <div className="flex items-center gap-3 text-sm text-gray-300">
                <div className="w-1.5 h-1.5 rounded-full bg-gray-500"></div>
                1 Assistant
              </div>
              <div className="flex items-center gap-3 text-sm text-gray-300">
                <div className="w-1.5 h-1.5 rounded-full bg-gray-500"></div>
                Community support
              </div>
            </div>
          </div>

          {/* Pro Tier */}
          <div className="bg-[#0f0f13] border-2 border-white/20 rounded-3xl p-10 flex flex-col relative transform md:-translate-y-4 shadow-2xl">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-blue-600 text-white text-[10px] font-bold tracking-widest uppercase px-4 py-1 rounded-full">
              Most Popular
            </div>
            <h3 className="text-lg font-medium text-white mb-2">Pro</h3>
            <div className="text-sm text-gray-400 mb-8 h-10">For professionals and teams building production apps.</div>
            <div className="text-5xl font-medium text-white mb-2">$49<span className="text-lg text-gray-500 font-normal">/mo</span></div>
            <p className="text-sm text-gray-500 mb-10">Billed annually</p>
            
            <button className="w-full py-3 rounded-lg bg-white text-black text-sm font-bold tracking-wider hover:bg-gray-200 transition-colors mb-10">
              START FREE TRIAL
            </button>

            <div className="flex flex-col gap-4 mt-auto">
              <div className="flex items-center gap-3 text-sm text-gray-300">
                <div className="w-1.5 h-1.5 rounded-full bg-white"></div>
                Unlimited queries
              </div>
              <div className="flex items-center gap-3 text-sm text-gray-300">
                <div className="w-1.5 h-1.5 rounded-full bg-white"></div>
                Unlimited Assistants
              </div>
              <div className="flex items-center gap-3 text-sm text-gray-300">
                <div className="w-1.5 h-1.5 rounded-full bg-white"></div>
                Full API access
              </div>
              <div className="flex items-center gap-3 text-sm text-gray-300">
                <div className="w-1.5 h-1.5 rounded-full bg-white"></div>
                Priority support
              </div>
            </div>
          </div>

          {/* Custom Tier */}
          <div className="bg-[#0a0a0a] border border-white/5 rounded-3xl p-10 flex flex-col hover:border-white/20 transition-colors">
            <h3 className="text-lg font-medium text-white mb-2">Custom</h3>
            <div className="text-sm text-gray-400 mb-8 h-10">For large scale organizations with specific requirements.</div>
            <div className="text-5xl font-medium text-white mb-2">Custom</div>
            <p className="text-sm text-gray-500 mb-10">Contact sales for pricing</p>
            
            <button className="w-full py-3 rounded-lg border border-white/20 text-white text-sm font-bold tracking-wider hover:bg-white/5 transition-colors mb-10">
              CONTACT SALES
            </button>

            <div className="flex flex-col gap-4 mt-auto">
              <div className="flex items-center gap-3 text-sm text-gray-300">
                <div className="w-1.5 h-1.5 rounded-full bg-gray-500"></div>
                Dedicated compute
              </div>
              <div className="flex items-center gap-3 text-sm text-gray-300">
                <div className="w-1.5 h-1.5 rounded-full bg-gray-500"></div>
                Custom integrations
              </div>
              <div className="flex items-center gap-3 text-sm text-gray-300">
                <div className="w-1.5 h-1.5 rounded-full bg-gray-500"></div>
                99.99% SLA
              </div>
              <div className="flex items-center gap-3 text-sm text-gray-300">
                <div className="w-1.5 h-1.5 rounded-full bg-gray-500"></div>
                24/7 phone support
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
