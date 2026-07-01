import { ArrowUpRight, MapPin, Clock } from "lucide-react";
import Link from "next/link";
import { JOB_POSITIONS, BENEFITS } from "@/lib/constants";

export default function Careers() {
  return (
    <section className="bg-white py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Culture & Benefits */}
        <div className="mb-24">
          <p className="text-teal-600 font-semibold text-sm uppercase tracking-widest mb-3 text-center">
            Our Culture
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 text-center mb-16">
            Why Join Projextly?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {BENEFITS.map((benefit) => {
              const Icon = benefit.icon;
              return (
                <div key={benefit.title} className="b2b-card p-8 text-center">
                  <div className="w-14 h-14 rounded-2xl bg-teal-50 flex items-center justify-center mx-auto mb-6">
                    <Icon className="w-7 h-7 text-teal-600" />
                  </div>
                  <h3 className="text-gray-900 font-bold text-lg mb-3">{benefit.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{benefit.desc}</p>
                </div>
              );
            })}
          </div>
        </div>

        {/* Open Positions */}
        <div>
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-12 border-b border-gray-200 pb-6">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-2">Open Positions</h2>
              <p className="text-gray-600">Join our growing team and build the future of the web.</p>
            </div>
            <div className="text-teal-600 font-medium bg-teal-50 px-4 py-2 rounded-lg">
              {JOB_POSITIONS.length} Open Roles
            </div>
          </div>

          <div className="space-y-4">
            {JOB_POSITIONS.map((job) => (
              <Link
                key={job.title}
                href="#"
                className="block b2b-card b2b-card-hover p-6 group transition-all duration-300"
              >
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
                  <div>
                    <div className="flex items-center gap-3 mb-2">
                      <span className="text-xs font-bold text-teal-600 uppercase tracking-wider">
                        {job.dept}
                      </span>
                    </div>
                    <h3 className="text-gray-900 font-bold text-xl group-hover:text-teal-600 transition-colors mb-3 md:mb-0">
                      {job.title}
                    </h3>
                  </div>
                  
                  <div className="flex flex-wrap items-center gap-4">
                    <span className="flex items-center gap-1.5 text-gray-500 text-sm">
                      <MapPin className="w-4 h-4" />
                      {job.location}
                    </span>
                    <span className="flex items-center gap-1.5 text-gray-500 text-sm">
                      <Clock className="w-4 h-4" />
                      {job.type}
                    </span>
                    <div className="w-10 h-10 rounded-full bg-gray-50 flex items-center justify-center group-hover:bg-teal-600 group-hover:text-white transition-colors md:ml-4 border border-gray-200 group-hover:border-teal-600">
                      <ArrowUpRight className="w-5 h-5" />
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
          
          <div className="mt-12 text-center">
             <p className="text-gray-500 text-sm">
               Don&apos;t see a perfect fit? Send your resume to <Link href="mailto:careers@projextly.com" className="text-teal-600 hover:underline">careers@projextly.com</Link>
             </p>
          </div>
        </div>
        
      </div>
    </section>
  );
}
