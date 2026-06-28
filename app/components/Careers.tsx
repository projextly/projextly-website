import { ArrowUpRight, MapPin, Clock, Zap, Heart, Coffee } from "lucide-react";

const positions = [
  {
    title: "Senior Frontend Engineer",
    type: "Full-Time",
    location: "Bengaluru (Hybrid)",
    dept: "Engineering",
  },
  {
    title: "UI/UX Designer",
    type: "Full-Time",
    location: "Bengaluru (On-site)",
    dept: "Design",
  },
  {
    title: "Full Stack Developer",
    type: "Full-Time",
    location: "Remote",
    dept: "Engineering",
  },
];

const benefits = [
  {
    icon: Zap,
    title: "Fast-Paced Environment",
    desc: "Work on cutting-edge tech with rapid iterations and high impact.",
  },
  {
    icon: Heart,
    title: "Health & Wellness",
    desc: "Comprehensive health insurance and wellness stipends for you and your family.",
  },
  {
    icon: Coffee,
    title: "Flexible Work",
    desc: "Hybrid models, flexible hours, and remote opportunities for select roles.",
  },
];

export default function Careers() {
  return (
    <section className="bg-black py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Culture & Benefits */}
        <div className="mb-24">
          <p className="text-cyan-400 font-semibold text-sm uppercase tracking-widest mb-3 text-center">
            Our Culture
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-white text-center mb-16">
            Why Join Projextly?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {benefits.map((benefit) => {
              const Icon = benefit.icon;
              return (
                <div key={benefit.title} className="glass-card p-8 text-center">
                  <div className="w-14 h-14 rounded-2xl bg-cyan-400/10 flex items-center justify-center mx-auto mb-6">
                    <Icon className="w-7 h-7 text-cyan-400" />
                  </div>
                  <h3 className="text-white font-bold text-lg mb-3">{benefit.title}</h3>
                  <p className="text-gray-400 text-sm leading-relaxed">{benefit.desc}</p>
                </div>
              );
            })}
          </div>
        </div>

        {/* Open Positions */}
        <div>
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-12 border-b border-white/10 pb-6">
            <div>
              <h2 className="text-3xl font-bold text-white mb-2">Open Positions</h2>
              <p className="text-gray-400">Join our growing team and build the future of the web.</p>
            </div>
            <div className="text-cyan-400 font-medium bg-cyan-400/10 px-4 py-2 rounded-lg">
              {positions.length} Open Roles
            </div>
          </div>

          <div className="space-y-4">
            {positions.map((job) => (
              <a
                key={job.title}
                href="#"
                className="block glass-card glass-card-hover p-6 group transition-all duration-300"
              >
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
                  <div>
                    <div className="flex items-center gap-3 mb-2">
                      <span className="text-xs font-bold text-cyan-400 uppercase tracking-wider">
                        {job.dept}
                      </span>
                    </div>
                    <h3 className="text-white font-bold text-xl group-hover:text-cyan-300 transition-colors mb-3 md:mb-0">
                      {job.title}
                    </h3>
                  </div>
                  
                  <div className="flex flex-wrap items-center gap-4">
                    <span className="flex items-center gap-1.5 text-gray-400 text-sm">
                      <MapPin className="w-4 h-4" />
                      {job.location}
                    </span>
                    <span className="flex items-center gap-1.5 text-gray-400 text-sm">
                      <Clock className="w-4 h-4" />
                      {job.type}
                    </span>
                    <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center group-hover:bg-cyan-400 group-hover:text-black transition-colors md:ml-4">
                      <ArrowUpRight className="w-5 h-5" />
                    </div>
                  </div>
                </div>
              </a>
            ))}
          </div>
          
          <div className="mt-12 text-center">
             <p className="text-gray-400 text-sm">
               Don&apos;t see a perfect fit? Send your resume to <a href="mailto:careers@projextly.com" className="text-cyan-400 hover:underline">careers@projextly.com</a>
             </p>
          </div>
        </div>
        
      </div>
    </section>
  );
}
