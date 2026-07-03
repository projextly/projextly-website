import { ChevronRight, Database, Code, Shield } from "lucide-react";

export default function IntelligentBrain() {
  return (
    <section className="bg-black py-24 w-full border-t border-white/5">
      <div className="max-w-[1400px] mx-auto px-8">
        <h2 className="text-3xl md:text-5xl font-medium tracking-tight text-white mb-12">
          One intelligent brain, limitless<br />
          possibilities.
        </h2>

        {/* Tabs */}
        <div className="flex items-center gap-8 border-b border-white/10 mb-12 overflow-x-auto pb-4">
          <button className="text-white text-sm font-medium border-b-2 border-white pb-4 -mb-[17px] whitespace-nowrap">
            Knowledge
          </button>
          <button className="text-gray-500 text-sm font-medium hover:text-white transition-colors pb-4 whitespace-nowrap">
            Memory
          </button>
          <button className="text-gray-500 text-sm font-medium hover:text-white transition-colors pb-4 whitespace-nowrap">
            Reasoning
          </button>
          <button className="text-gray-500 text-sm font-medium hover:text-white transition-colors pb-4 whitespace-nowrap">
            Automation
          </button>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left - UI Mock */}
          <div className="relative rounded-2xl overflow-hidden bg-[#0a0a0a] border border-white/5 aspect-[4/3] flex items-center justify-center p-8">
             <div className="absolute inset-0 bg-[url('/hero-bg.mp4')] opacity-20 mix-blend-overlay"></div>
             
             {/* Main Mock UI Card */}
             <div className="w-full max-w-md bg-black/80 border border-white/10 rounded-xl p-6 backdrop-blur-md relative z-10 shadow-2xl">
               <div className="flex items-center gap-3 mb-6">
                 <div className="w-8 h-8 rounded-md bg-blue-500/20 flex items-center justify-center">
                   <Database className="w-4 h-4 text-blue-400" />
                 </div>
                 <div>
                   <div className="text-sm font-medium text-white">Connect Knowledge Base</div>
                   <div className="text-xs text-gray-400">Select sources to sync</div>
                 </div>
               </div>

               <div className="space-y-3">
                 <div className="flex items-center justify-between p-3 rounded-lg bg-white/5 border border-white/5 hover:border-white/20 transition-colors cursor-pointer">
                   <div className="flex items-center gap-3">
                     <Code className="w-4 h-4 text-gray-400" />
                     <span className="text-sm text-gray-200">GitHub Repository</span>
                   </div>
                   <div className="w-4 h-4 rounded-full border border-blue-500 bg-blue-500 flex items-center justify-center">
                     <div className="w-1.5 h-1.5 rounded-full bg-white"></div>
                   </div>
                 </div>
                 
                 <div className="flex items-center justify-between p-3 rounded-lg bg-white/5 border border-white/5 hover:border-white/20 transition-colors cursor-pointer">
                   <div className="flex items-center gap-3">
                     <Shield className="w-4 h-4 text-gray-400" />
                     <span className="text-sm text-gray-200">Confluence Workspace</span>
                   </div>
                   <div className="w-4 h-4 rounded-full border border-gray-600"></div>
                 </div>
               </div>

               <button className="w-full mt-6 py-2.5 bg-white text-black rounded-lg text-xs font-bold tracking-widest uppercase transition-colors hover:bg-gray-200">
                 Sync Data
               </button>
             </div>
          </div>

          {/* Right - Text */}
          <div className="max-w-md">
            <div className="text-[10px] text-gray-500 font-bold tracking-[0.2em] uppercase mb-4">
              Knowledge Base
            </div>
            <h3 className="text-3xl font-medium text-white mb-6">
              Connect your data, logic, and tools in one unified brain.
            </h3>
            <p className="text-gray-400 text-lg leading-relaxed mb-8">
              Empower your assistant with real-time access to your company's data. Seamlessly integrate with your existing tech stack to provide accurate, context-aware responses and actions.
            </p>
            <button className="flex items-center gap-2 rounded-sm bg-white/10 px-6 py-3 text-[11px] font-bold tracking-widest text-white transition hover:bg-white/20 uppercase">
              Learn More <ChevronRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
