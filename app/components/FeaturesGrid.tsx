import { MessageSquare, Sparkles, Zap } from "lucide-react";

export default function FeaturesGrid() {
  return (
    <section className="bg-black py-24 w-full">
      <div className="max-w-[1400px] mx-auto px-8">
        <h2 className="text-3xl md:text-5xl font-medium tracking-tight text-white mb-16 max-w-2xl">
          Experience the power of an<br />
          <span className="text-gray-400">intelligent assistant.</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Card 1 */}
          <div className="bg-[#0a0a0a] border border-white/5 rounded-2xl overflow-hidden group">
            <div className="h-48 bg-gradient-to-br from-gray-900 to-black relative p-6 flex items-center justify-center">
              <div className="absolute inset-0 bg-[url('/hero-bg.mp4')] opacity-20 mix-blend-overlay"></div>
              {/* Mock UI */}
              <div className="w-full max-w-[240px] bg-black/60 border border-white/10 rounded-xl p-4 backdrop-blur-md relative z-10 shadow-2xl transition-transform group-hover:scale-105 duration-500">
                <div className="flex flex-col gap-3">
                  <div className="flex items-center gap-3 bg-white/5 p-2 rounded-lg">
                    <div className="w-6 h-6 rounded-full bg-blue-500/20 flex items-center justify-center">
                      <Sparkles className="w-3 h-3 text-blue-400" />
                    </div>
                    <div className="h-1.5 w-24 bg-white/20 rounded-full"></div>
                  </div>
                  <div className="flex items-center gap-3 bg-white/5 p-2 rounded-lg border border-blue-500/30">
                    <div className="w-6 h-6 rounded-full bg-purple-500/20 flex items-center justify-center">
                      <Zap className="w-3 h-3 text-purple-400" />
                    </div>
                    <div className="h-1.5 w-16 bg-white/40 rounded-full"></div>
                  </div>
                </div>
              </div>
            </div>
            <div className="p-8">
              <h3 className="text-xl font-medium text-white mb-3">Real-time sync</h3>
              <p className="text-sm text-gray-400 leading-relaxed">
                Connect your database and experience updates in real-time across all your AI assistants.
              </p>
            </div>
          </div>

          {/* Card 2 */}
          <div className="bg-[#0a0a0a] border border-white/5 rounded-2xl overflow-hidden group">
            <div className="h-48 bg-gradient-to-br from-gray-900 to-black relative p-6 flex items-center justify-center">
              <div className="absolute inset-0 bg-white/5 opacity-10 mix-blend-overlay"></div>
              {/* Mock UI */}
              <div className="w-full max-w-[240px] bg-black/80 border border-white/10 rounded-xl p-4 backdrop-blur-md relative z-10 shadow-2xl transition-transform group-hover:scale-105 duration-500">
                <div className="flex items-center justify-between border-b border-white/10 pb-3 mb-3">
                  <div className="flex items-center gap-2">
                    <MessageSquare className="w-4 h-4 text-gray-400" />
                    <div className="h-2 w-16 bg-gray-500 rounded-full"></div>
                  </div>
                  <div className="h-4 w-8 bg-green-500/20 rounded-full border border-green-500/30"></div>
                </div>
                <div className="space-y-3">
                  <div className="h-1.5 w-full bg-white/10 rounded-full"></div>
                  <div className="h-1.5 w-3/4 bg-white/10 rounded-full"></div>
                </div>
              </div>
            </div>
            <div className="p-8">
              <h3 className="text-xl font-medium text-white mb-3">Works everywhere</h3>
              <p className="text-sm text-gray-400 leading-relaxed">
                Embed your assistants on your website, in your app, or via API anywhere you need them.
              </p>
            </div>
          </div>

          {/* Card 3 */}
          <div className="bg-[#0a0a0a] border border-white/5 rounded-2xl overflow-hidden group">
            <div className="h-48 bg-gradient-to-br from-gray-900 to-black relative p-6 flex items-center justify-center">
              <div className="absolute inset-0 bg-purple-900/10 opacity-20 mix-blend-overlay"></div>
              {/* Mock UI */}
              <div className="w-full max-w-[240px] bg-black/60 border border-white/10 rounded-xl p-4 backdrop-blur-md relative z-10 shadow-2xl transition-transform group-hover:scale-105 duration-500">
                <div className="flex flex-col gap-3">
                  <div className="flex justify-between items-center p-2 rounded-lg bg-white/5">
                     <div className="h-1.5 w-12 bg-white/30 rounded-full"></div>
                     <div className="h-5 w-12 bg-white/10 rounded-full border border-white/20"></div>
                  </div>
                  <div className="flex justify-between items-center p-2 rounded-lg bg-white/5">
                     <div className="h-1.5 w-16 bg-white/30 rounded-full"></div>
                     <div className="h-5 w-12 bg-white/10 rounded-full border border-white/20"></div>
                  </div>
                </div>
              </div>
            </div>
            <div className="p-8">
              <h3 className="text-xl font-medium text-white mb-3">Limitless action</h3>
              <p className="text-sm text-gray-400 leading-relaxed">
                Connect tools and let your assistant take action on your behalf across your entire tech stack.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
