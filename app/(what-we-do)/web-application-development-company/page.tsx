"use client";

import { motion } from 'framer-motion';
import { 
  ArrowRight,
  Code,
  Layout,
  Database,
  Server,
  Globe,
  Monitor,
  Smartphone,
  CheckCircle,
  Briefcase,
  ShieldCheck,
  Zap,
  Users
} from 'lucide-react';
import Link from 'next/link';

const WebAppDevelopment = () => {
  return (
    <main className="min-h-screen bg-neutral-950 text-neutral-50 overflow-hidden font-sans">
      
      {/* Hero Section */}
      <section className="relative w-full min-h-[90vh] flex items-center pt-24 pb-12 overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0 bg-neutral-950 z-0">
          <div className="absolute top-1/4 right-1/4 w-[500px] h-[500px] bg-indigo-600/20 rounded-full blur-[128px] mix-blend-screen" />
          <div className="absolute bottom-1/4 left-1/4 w-[500px] h-[500px] bg-blue-600/20 rounded-full blur-[128px] mix-blend-screen" />
        </div>
        
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] z-0" />

        <div className="container mx-auto px-6 max-w-7xl relative z-10 flex flex-col lg:flex-row items-center gap-12">
          <div className="lg:w-1/2">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 backdrop-blur-md mb-8"
            >
              <span className="w-2 h-2 rounded-full bg-indigo-500 animate-pulse" />
              <span className="text-sm font-medium text-neutral-300">Enterprise Web Solutions</span>
            </motion.div>
            
            <motion.h1 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1, ease: "easeOut" }}
              className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-8 leading-tight"
            >
              Web Application Development <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-blue-400 to-cyan-400">Company in Bangalore</span>
            </motion.h1>
            
            <motion.p 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
              className="text-lg md:text-xl text-neutral-400 mb-10 leading-relaxed max-w-xl"
            >
              Revolutionize your business with custom web applications and unlock new opportunities, enhance productivity, and engage your customers like never before.
            </motion.p>
            
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
              className="flex flex-wrap gap-4"
            >
              <Link 
                href="/contact"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white text-black font-semibold rounded-full hover:bg-neutral-200 transition-all duration-300 group shadow-[0_0_40px_rgba(255,255,255,0.2)]"
              >
                Talk to our experts
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </motion.div>
          </div>
          
          <motion.div 
            className="lg:w-1/2 relative w-full h-[500px]"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, ease: "easeOut" }}
          >
            {/* Abstract UI representation */}
            <div className="absolute inset-0 bg-neutral-900/50 backdrop-blur-3xl rounded-[2.5rem] border border-white/10 p-6 flex flex-col gap-4 shadow-2xl">
              <div className="flex items-center gap-2 mb-4">
                <div className="w-3 h-3 rounded-full bg-red-400" />
                <div className="w-3 h-3 rounded-full bg-yellow-400" />
                <div className="w-3 h-3 rounded-full bg-green-400" />
              </div>
              <div className="w-1/3 h-8 bg-white/5 rounded-lg" />
              <div className="flex gap-4 h-32">
                <div className="flex-1 bg-gradient-to-br from-indigo-500/20 to-blue-500/20 rounded-2xl border border-white/5" />
                <div className="flex-1 bg-gradient-to-br from-blue-500/20 to-cyan-500/20 rounded-2xl border border-white/5" />
              </div>
              <div className="flex-1 bg-white/5 rounded-2xl border border-white/5 p-4 flex flex-col gap-3">
                <div className="w-full h-4 bg-white/10 rounded-full" />
                <div className="w-3/4 h-4 bg-white/10 rounded-full" />
                <div className="w-5/6 h-4 bg-white/10 rounded-full" />
              </div>
            </div>
            
            <div className="absolute -bottom-10 -left-10 bg-neutral-900 border border-white/10 p-6 rounded-3xl shadow-2xl backdrop-blur-xl">
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 rounded-2xl bg-indigo-500/20 flex items-center justify-center">
                  <Code className="w-7 h-7 text-indigo-400" />
                </div>
                <div>
                  <p className="text-white font-bold text-2xl">80+</p>
                  <p className="text-neutral-400 text-sm">Web Apps Built</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Intro & Stats Section */}
      <section className="py-24 relative bg-neutral-900/30 border-y border-white/5">
        <div className="container mx-auto px-6 max-w-6xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-24">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl md:text-5xl font-bold mb-6 text-white leading-tight">
                Web application <br/>development
              </h2>
              <p className="text-neutral-400 mb-6 text-lg leading-relaxed">
                Webomindapps stands as the best web application development company in Bangalore. We provide end-to-end web applications for small and large-scale industries. We write high-level standards of codings that make applications more efficient and secure. We design web applications that are mobile responsive, customizable, and user-friendly.
              </p>
            </motion.div>
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <p className="text-neutral-400 mb-6 text-lg leading-relaxed mt-2">
                We aim to help our clients leverage the power of cutting-edge tools and technologies and implement the same in their businesses to get competitive advantages. No matter which service you opt for from us, we guarantee you to create a standout solution matching specific needs.
              </p>
              <p className="text-neutral-400 text-lg leading-relaxed">
                We endeavor to deliver smart solutions that catch the attention of users and witness higher user engagement. We let your business benefit more from our solutions.
              </p>
            </motion.div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
            {[
              { num: '450+', label: 'Websites designed' },
              { num: '80+', label: 'Web apps developed' },
              { num: '300+', label: 'Clients world wide' },
              { num: '4+', label: 'Govt applications' },
              { num: '80+', label: 'Payment integrations' },
            ].map((stat, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="p-6 rounded-2xl bg-neutral-900 border border-white/5 text-center hover:bg-neutral-800 transition-colors"
              >
                <h4 className="text-3xl font-bold text-white mb-2">{stat.num}</h4>
                <p className="text-sm text-neutral-400">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Technology Stack */}
      <section className="py-32 relative">
        <div className="container mx-auto px-6 max-w-6xl">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <h2 className="text-3xl md:text-5xl font-bold mb-6">We choose <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-blue-400">better technology</span> for custom web application development</h2>
            <p className="text-xl text-neutral-400">
              Our full-stack expertise ensures your web application is built on a robust, scalable, and secure foundation.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { title: 'Front-end Development', desc: 'React.js, Next.js, Angular, Vue.js, HTML5, CSS3', icon: Layout },
              { title: 'Back-end Development', desc: 'Node.js, Python, Django, PHP, Laravel, Java', icon: Code },
              { title: 'Database & Cloud', desc: 'MySQL, PostgreSQL, MongoDB, AWS, Google Cloud', icon: Database },
              { title: 'API Integration', desc: 'RESTful APIs, GraphQL, Third-party integrations', icon: Globe },
              { title: 'Server Infrastructure', desc: 'Nginx, Apache, Docker, Kubernetes', icon: Server },
              { title: 'Security & Auth', desc: 'OAuth, JWT, Data Encryption, SSL/TLS', icon: ShieldCheck },
            ].map((feature, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="p-8 rounded-3xl bg-white/5 border border-white/5 hover:border-indigo-500/30 transition-all duration-300 group hover:-translate-y-2"
              >
                <div className="w-14 h-14 rounded-2xl bg-indigo-500/10 flex items-center justify-center mb-6 group-hover:scale-110 group-hover:bg-indigo-500/20 transition-all duration-300">
                  <feature.icon className="w-7 h-7 text-indigo-400" />
                </div>
                <h3 className="text-xl font-semibold mb-3 text-white">{feature.title}</h3>
                <p className="text-neutral-400 leading-relaxed text-sm">{feature.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-24 bg-white text-neutral-950 rounded-t-[3rem] md:rounded-t-[5rem] relative overflow-hidden">
        <div className="container mx-auto px-6 max-w-6xl relative z-10">
          <div className="flex flex-col md:flex-row gap-12 items-end mb-16">
            <div className="md:w-1/2">
              <h2 className="text-4xl md:text-5xl font-bold leading-tight">Why we are the best <br/>web app development company?</h2>
            </div>
            <div className="md:w-1/2">
              <p className="text-lg text-neutral-600 leading-relaxed">
                We deliver high-quality, complex enterprise web applications tailored to your business operations. Our strategic approach ensures efficiency, security, and scalability.
              </p>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              "Agile Development Methodology",
              "Highly Skilled In-House Team",
              "Custom UX/UI Design Approach",
              "Robust Architecture & Scalability",
              "Rigorous QA & Testing Processes",
              "Post-Launch Maintenance & Support"
            ].map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="flex items-center gap-4 p-6 rounded-2xl bg-neutral-100 hover:bg-neutral-200 transition-colors"
              >
                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-indigo-600 text-white flex items-center justify-center">
                  <CheckCircle className="w-5 h-5" />
                </div>
                <h4 className="text-lg font-medium">{item}</h4>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

    </main>
  );
};

export default WebAppDevelopment;
