"use client";

import { motion } from 'framer-motion';
import { 
  ArrowRight,
  Code,
  Layout,
  MessageSquare,
  Paintbrush,
  Search,
  Settings,
  ShieldCheck,
  Smartphone,
  CheckCircle,
  Clock,
  ThumbsUp,
  Briefcase
} from 'lucide-react';
import Link from 'next/link';

const WordPressWebDevelopment = () => {
  return (
    <main className="min-h-screen bg-neutral-950 text-neutral-50 overflow-hidden font-sans">
      
      {/* Hero Section */}
      <section className="relative w-full min-h-[90vh] flex items-center justify-center pt-24 pb-12 overflow-hidden text-center">
        {/* Background Gradients */}
        <div className="absolute inset-0 bg-neutral-950 z-0">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-600/20 rounded-full blur-[128px] mix-blend-screen" />
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-cyan-600/20 rounded-full blur-[128px] mix-blend-screen" />
        </div>
        
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=2070&auto=format&fit=crop')] bg-cover bg-center opacity-10 z-0" />
        <div className="absolute inset-0 bg-gradient-to-b from-neutral-950/80 via-neutral-950/50 to-neutral-950 z-0" />

        <div className="container mx-auto px-6 max-w-5xl relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 backdrop-blur-md mb-8"
          >
            <span className="w-2 h-2 rounded-full bg-blue-400 animate-pulse" />
            <span className="text-sm font-medium text-neutral-300">Expert WordPress Development</span>
          </motion.div>
          
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1, ease: "easeOut" }}
            className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-8 leading-tight"
          >
            WordPress Website Development <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">Company in Bangalore</span>
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="text-lg md:text-xl text-neutral-300 mb-10 leading-relaxed max-w-3xl mx-auto"
          >
            Do you want to maintain your site without coding? That’s easy! Get the site developed in WordPress, manage your content by yourself, and keep your website updated.
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
          >
            <Link 
              href="/contact"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-blue-500 hover:bg-blue-600 text-white font-semibold rounded-full transition-all duration-300 group shadow-[0_0_40px_rgba(59,130,246,0.4)]"
            >
              Talk to our experts
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* About WordPress Dev Section */}
      <section className="py-24 relative bg-neutral-900/50 backdrop-blur-sm border-y border-white/5">
        <div className="container mx-auto px-6 max-w-6xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div 
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-sm uppercase tracking-wider text-blue-400 font-semibold mb-3">Webomindapps</h2>
              <h3 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-white leading-tight">
                WordPress Development Company in Bangalore
              </h3>
              <p className="text-neutral-400 mb-6 text-lg leading-relaxed">
                Manage your website’s content, customize its design, accept payments, and monitor your website's performance with our custom WordPress development services. We make it easier for you to keep your website up-to-date, secure, and powerful.
              </p>
              <p className="text-neutral-400 text-lg leading-relaxed mb-8">
                WordPress is currently the most preferable open-source CMS platform for its user-friendly interface and easy customization options. If you are looking for a reliable website that stays secure and up-to-date with current trends, WordPress is the right solution.
              </p>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="grid grid-cols-2 gap-4"
            >
              {[
                { title: 'Multiple page styles', icon: Layout, color: 'from-blue-500 to-cyan-500' },
                { title: 'Quick-embed media', icon: Smartphone, color: 'from-orange-400 to-red-500' },
                { title: 'Plenty of widgets', icon: Settings, color: 'from-purple-500 to-pink-500' },
                { title: 'Theme customization', icon: Paintbrush, color: 'from-emerald-400 to-teal-500' }
              ].map((feature, idx) => (
                <div key={idx} className="bg-neutral-900 border border-white/10 p-6 rounded-2xl hover:bg-neutral-800 transition-colors group">
                  <div className={`w-12 h-12 rounded-xl mb-4 flex items-center justify-center bg-gradient-to-br ${feature.color} opacity-80 group-hover:opacity-100 transition-opacity`}>
                    <feature.icon className="w-6 h-6 text-white" />
                  </div>
                  <h4 className="text-white font-medium">{feature.title}</h4>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-32 relative">
        <div className="container mx-auto px-6 max-w-6xl">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <h2 className="text-3xl md:text-5xl font-bold mb-6">Why Webomindapps for <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">WordPress</span> Development?</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { title: 'Top-notch Websites', desc: 'We deliver highly functional, visually stunning, and scalable WordPress websites tailored to your exact business needs.', icon: ThumbsUp },
              { title: 'Highly Skilled Team', desc: 'Our team comprises seasoned WordPress developers who follow industry best practices and modern coding standards.', icon: Briefcase },
              { title: 'Round the Clock Support', desc: 'We provide continuous maintenance, security updates, and technical support to keep your site running flawlessly.', icon: Clock },
            ].map((feature, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="p-8 rounded-3xl bg-white/5 border border-white/5 hover:border-blue-500/30 transition-all duration-300 group hover:-translate-y-2 text-center"
              >
                <div className="w-16 h-16 mx-auto rounded-full bg-blue-500/10 flex items-center justify-center mb-6 group-hover:scale-110 group-hover:bg-blue-500/20 transition-all duration-300">
                  <feature.icon className="w-8 h-8 text-blue-400" />
                </div>
                <h3 className="text-xl font-semibold mb-4 text-white">{feature.title}</h3>
                <p className="text-neutral-400 leading-relaxed">{feature.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Features / Services */}
      <section className="py-24 bg-white text-neutral-950 rounded-[3rem] md:rounded-[5rem] mx-4 md:mx-10 mb-10 relative overflow-hidden">
        <div className="container mx-auto px-6 max-w-6xl relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Our WordPress <br/>Development Expertise</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              { title: "Custom Theme Development", desc: "Unique, engaging designs tailored to your brand identity." },
              { title: "Plugin Integration & Development", desc: "Extend your website functionality seamlessly." },
              { title: "Fully Responsive Design", desc: "Perfectly optimized for mobile, tablet, and desktop viewing." },
              { title: "SEO Friendly Architecture", desc: "Built with clean code to help you rank higher on search engines." },
              { title: "E-Commerce Solutions (WooCommerce)", desc: "Turn your WordPress site into a powerful online store." },
              { title: "Website Migration & Upgrades", desc: "Safely move your existing site to WordPress without data loss." },
            ].map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.1 }}
                className="flex items-start gap-4 p-6 rounded-2xl bg-neutral-100 hover:bg-neutral-200 transition-colors"
              >
                <div className="flex-shrink-0 mt-1">
                  <CheckCircle className="w-6 h-6 text-blue-600" />
                </div>
                <div>
                  <h4 className="text-lg font-bold mb-1">{item.title}</h4>
                  <p className="text-neutral-600">{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

    </main>
  );
};

export default WordPressWebDevelopment;
