import {  Zap } from "lucide-react";

export default function Integrations() {
  return (
    <section className="bg-black py-24 w-full">
      <div className="max-w-[1400px] mx-auto px-8">
        <div className="bg-[#0a0a0a] border border-white/5 rounded-3xl p-12 lg:p-24 flex items-center justify-center">
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-4 gap-16 md:gap-32 w-full max-w-4xl opacity-50 grayscale hover:grayscale-0 transition-all duration-700">
            {/* Since we don't have actual SVG logos for all companies, we'll use a mix of icons and text */}
            <div className="flex items-center justify-center">
              <div className="flex items-center gap-2 font-bold text-xl text-white">
                <div className="w-8 h-8 rounded-full border border-white flex items-center justify-center">
                  <div className="w-0 h-0 border-t-4 border-b-4 border-l-6 border-transparent border-l-white"></div>
                </div>
                Vercel
              </div>
            </div>
            
            <div className="flex items-center justify-center">
              <div className="flex items-center gap-2 font-bold text-xl text-white">
                {/* <Figma className="w-8 h-8 text-[#F24E1E]" /> */}
                Figma
              </div>
            </div>
            
            <div className="flex items-center justify-center">
              <div className="flex items-center gap-2 font-bold text-xl text-white">
                <div className="w-8 h-8 rounded-lg bg-blue-600 flex items-center justify-center text-white text-xs">J</div>
                Jira
              </div>
            </div>
            
            <div className="flex items-center justify-center">
              <div className="flex items-center gap-2 font-bold text-xl text-white">
                <Zap className="w-8 h-8 text-yellow-500" />
                Linear
              </div>
            </div>

            <div className="flex items-center justify-center">
              <div className="flex items-center gap-2 font-bold text-xl text-white">
                {/* <Github className="w-8 h-8" /> */}
                GitHub
              </div>
            </div>
            
            <div className="flex items-center justify-center">
              <div className="flex items-center gap-2 font-bold text-xl text-white">
                <div className="w-8 h-8 bg-blue-500 rounded flex items-center justify-center text-white font-serif">S</div>
                Stripe
              </div>
            </div>
            
            <div className="flex items-center justify-center">
              <div className="flex items-center gap-2 font-bold text-xl text-white">
                {/* <Chrome className="w-8 h-8 text-green-500" /> */}
                Chrome
              </div>
            </div>
            
            <div className="flex items-center justify-center">
              <div className="flex items-center gap-2 font-bold text-xl text-white">
                <div className="w-8 h-8 rounded-full bg-purple-600 flex items-center justify-center text-white font-mono">/</div>
                Slack
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
