import { Terminal } from "lucide-react";

export default function UniversalIntegration() {
  return (
    <section className="bg-black py-24 w-full border-t border-white/5">
      <div className="max-w-[1400px] mx-auto px-8">
        <div className="text-[10px] text-gray-500 font-bold tracking-[0.2em] uppercase mb-4">
          Integration
        </div>
        <h2 className="text-3xl md:text-5xl font-medium tracking-tight text-white mb-16 max-w-2xl">
          Universal integration.<br />
          <span className="text-gray-400">Unimaginably easy.</span>
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Left - UI Mock */}
          <div className="relative rounded-2xl overflow-hidden bg-[#0a0a0a] border border-white/5 aspect-video flex flex-col justify-end p-8">
            <div className="absolute inset-0 bg-[url('/hero-bg.mp4')] opacity-20 mix-blend-overlay"></div>
            
            {/* Input field mock */}
            <div className="w-full bg-black/80 border border-white/10 rounded-2xl p-2 flex items-center gap-4 backdrop-blur-md relative z-10 shadow-2xl">
              <div className="flex-1 bg-white/5 rounded-xl h-12 flex items-center px-4">
                <div className="w-4 h-4 rounded-full border-2 border-white/20 mr-3"></div>
                <div className="h-1.5 w-48 bg-white/30 rounded-full"></div>
              </div>
              <button className="bg-white text-black px-6 h-12 rounded-xl text-xs font-bold tracking-widest uppercase transition-colors hover:bg-gray-200">
                Send
              </button>
            </div>
          </div>

          {/* Right - Code Snippet */}
          <div className="flex flex-col justify-center">
            <div className="w-full bg-[#0a0a0a] border border-white/10 rounded-2xl overflow-hidden font-mono text-sm shadow-2xl">
              <div className="flex items-center gap-2 bg-white/5 px-4 py-3 border-b border-white/10">
                <Terminal className="w-4 h-4 text-gray-400" />
                <span className="text-gray-400 text-xs">terminal</span>
              </div>
              <div className="p-6 text-gray-300 overflow-x-auto">
                <div className="flex">
                  <span className="text-pink-500 mr-2">npm</span>
                  <span>install @mygom/sdk</span>
                </div>
                <div className="mt-4 text-gray-500">// Initialize the client</div>
                <div className="flex mt-1">
                  <span className="text-purple-400 mr-2">import</span>
                  <span>{`{ MyGomClient }`}</span>
                  <span className="text-purple-400 mx-2">from</span>
                  <span className="text-green-400">'@mygom/sdk'</span>
                  <span>;</span>
                </div>
                <div className="flex mt-4">
                  <span className="text-blue-400 mr-2">const</span>
                  <span>client =</span>
                  <span className="text-blue-400 mx-2">new</span>
                  <span>MyGomClient({`{`}</span>
                </div>
                <div className="flex mt-1 ml-4">
                  <span>apiKey: process.env.MYGOM_API_KEY,</span>
                </div>
                <div className="flex mt-1">
                  <span>{`}`});</span>
                </div>
                <div className="mt-4 text-gray-500">// Connect your assistant</div>
                <div className="flex mt-1">
                  <span className="text-blue-400 mr-2">await</span>
                  <span>client.assistant.connect('web');</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
