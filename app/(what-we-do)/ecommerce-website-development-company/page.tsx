"use client";

import { motion } from 'framer-motion';
import { 
  CheckCircle, 
  ShoppingCart, 
  Store, 
  Smartphone, 
  TrendingUp, 
  ShieldCheck, 
  CreditCard,
  Search,
  Settings,
  ArrowRight,
  Code
} from 'lucide-react';
import Link from 'next/link';

const EcommerceWebDevelopment = () => {
  return (
    <main className="min-h-screen bg-neutral-950 text-neutral-50 overflow-hidden font-sans">
      
      {/* Hero Section */}
      <section className="relative w-full min-h-[90vh] flex items-center pt-24 pb-12 overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0 bg-neutral-950 z-0">
          <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-purple-600/20 rounded-full blur-[128px] mix-blend-screen" />
          <div className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-pink-600/20 rounded-full blur-[128px] mix-blend-screen" />
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
              <span className="w-2 h-2 rounded-full bg-purple-500 animate-pulse" />
              <span className="text-sm font-medium text-neutral-300">Top eCommerce Agency</span>
            </motion.div>
            
            <motion.h1 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1, ease: "easeOut" }}
              className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-8 leading-tight"
            >
              Leading <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-400 to-red-400">eCommerce</span> Development Company
            </motion.h1>
            
            <motion.p 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
              className="text-lg md:text-xl text-neutral-400 mb-6 leading-relaxed"
            >
              With more than 12+ years of experience and a proven track record of over 200+ stores launched, we are a trusted partner for building scalable eCommerce stores.
            </motion.p>
            
            <motion.p 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
              className="text-lg md:text-xl font-medium text-white mb-10 leading-relaxed"
            >
              Launch a scalable and high-performing eCommerce Store today.
            </motion.p>
            
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
              className="flex flex-wrap gap-4"
            >
              <Link 
                href="/contact"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white text-black font-semibold rounded-full hover:bg-neutral-200 transition-all duration-300 group shadow-[0_0_40px_rgba(255,255,255,0.3)]"
              >
                Get a Free Consultation
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </motion.div>
          </div>
          
          <motion.div 
            className="lg:w-1/2 relative"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, ease: "easeOut" }}
          >
            <div className="aspect-square md:aspect-[4/3] rounded-3xl overflow-hidden relative border border-white/10 bg-neutral-800/50 backdrop-blur-xl p-4 shadow-2xl">
              <div className="w-full h-full bg-neutral-900 rounded-2xl overflow-hidden relative group border border-white/5">
                <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?q=80&w=2070&auto=format&fit=crop')] bg-cover bg-center opacity-70 group-hover:scale-105 transition-transform duration-700" />
                <div className="absolute inset-0 bg-gradient-to-t from-neutral-950 via-neutral-950/40 to-transparent" />
                
                {/* Floating UI Elements */}
                <div className="absolute bottom-8 left-8 right-8">
                  <div className="flex items-center justify-between p-4 bg-white/10 backdrop-blur-md rounded-2xl border border-white/10 shadow-xl mb-4 transform -rotate-2">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full bg-green-500/20 flex items-center justify-center">
                        <TrendingUp className="w-5 h-5 text-green-400" />
                      </div>
                      <div>
                        <p className="text-sm text-neutral-300">Conversion Rate</p>
                        <p className="text-white font-bold">+124%</p>
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center justify-between p-4 bg-white/10 backdrop-blur-md rounded-2xl border border-white/10 shadow-xl transform translate-x-8">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full bg-blue-500/20 flex items-center justify-center">
                        <ShoppingCart className="w-5 h-5 text-blue-400" />
                      </div>
                      <div>
                        <p className="text-sm text-neutral-300">Active Sales</p>
                        <p className="text-white font-bold">12,450</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Trust Badges */}
      <section className="py-10 border-y border-white/5 bg-neutral-900/30 backdrop-blur-sm">
        <div className="container mx-auto px-6 max-w-6xl">
          <div className="flex flex-wrap justify-center md:justify-between items-center gap-8 opacity-60 grayscale hover:grayscale-0 transition-all duration-500">
             <div className="text-xl font-bold tracking-wider text-white">Google Reviews</div>
             <div className="text-xl font-bold tracking-wider text-white">Clutch</div>
             <div className="text-xl font-bold tracking-wider text-white">GoodFirms</div>
             <div className="text-xl font-bold tracking-wider text-white">Shopify Partners</div>
             <div className="text-xl font-bold tracking-wider text-white">100% Satisfied</div>
          </div>
        </div>
      </section>

      {/* Intro / Portfolio Summary */}
      <section className="py-24 relative">
        <div className="container mx-auto px-6 max-w-6xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto mb-16"
          >
            <h2 className="text-sm uppercase tracking-wider text-purple-400 font-semibold mb-3">Webomindapps</h2>
            <h3 className="text-3xl md:text-5xl font-bold mb-6">Build Your Online Store with <br/>Bangalore's Top Agency</h3>
            <p className="text-neutral-400 text-lg leading-relaxed">
              As the best eCommerce development company with 12+ years of experience and 200+ successful store launches, we build user-focused, tech-optimized eCommerce stores on Shopify, Magento, and WooCommerce. We help businesses across various sectors build custom online stores that enhance digital growth and increase revenue.
            </p>
          </motion.div>
          
          {/* Portfolio Grid Mock */}
          <div className="grid grid-cols-2 md:grid-cols-3 gap-6 mb-12">
            {[1, 2, 3, 4, 5, 6].map((item) => (
              <motion.div 
                key={item}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: item * 0.1 }}
                className="aspect-video bg-neutral-800 rounded-2xl border border-white/5 overflow-hidden group relative"
              >
                <div className="absolute inset-0 bg-neutral-700/30 group-hover:bg-transparent transition-colors duration-300" />
                {/* Placeholder for actual portfolio images */}
                <div className="w-full h-full flex items-center justify-center text-neutral-500">
                  <Store className="w-8 h-8 opacity-50" />
                </div>
              </motion.div>
            ))}
          </div>
          
          <Link href="/portfolio" className="inline-flex items-center gap-2 text-purple-400 hover:text-purple-300 transition-colors font-medium text-lg">
            View Portfolio of successful eCommerce projects <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-32 relative bg-neutral-900 border-t border-white/5 overflow-hidden">
        {/* Glow effect */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-purple-500/10 blur-[120px] rounded-full" />
        
        <div className="container mx-auto px-6 max-w-6xl relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <h2 className="text-3xl md:text-5xl font-bold mb-6">Why Choose Us as Your <br/>eCommerce Development Company?</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { title: 'Proven Expertise', desc: '12+ years of experience and 200+ successful online stores delivered.', icon: ShieldCheck },
              { title: 'High-Converting', desc: 'Designed to deliver impact, captivate users, and increase your sales.', icon: TrendingUp },
              { title: 'Tailored Solutions', desc: 'Personalized designs that align with your business goals and audience needs.', icon: Settings },
              { title: 'Cost-Effective', desc: 'Save up to 40% compared to market rates without compromising quality.', icon: CreditCard },
            ].map((feature, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="p-8 rounded-3xl bg-neutral-950 border border-white/5 hover:border-purple-500/30 transition-all duration-300 group hover:-translate-y-2"
              >
                <div className="w-14 h-14 rounded-2xl bg-white/5 flex items-center justify-center mb-6 group-hover:scale-110 group-hover:bg-purple-500/20 transition-all duration-300">
                  <feature.icon className="w-7 h-7 text-neutral-300 group-hover:text-purple-400 transition-colors" />
                </div>
                <h3 className="text-xl font-semibold mb-3 text-white">{feature.title}</h3>
                <p className="text-neutral-400 leading-relaxed text-sm">{feature.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-32 relative">
        <div className="container mx-auto px-6 max-w-6xl">
          <div className="mb-20">
            <h2 className="text-3xl md:text-5xl font-bold mb-6">Our eCommerce <br/>Development Services</h2>
            <p className="text-xl text-neutral-400 max-w-2xl">
              Comprehensive end-to-end solutions tailored to build, scale, and optimize your online retail business.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              "Custom eCommerce Design & Development",
              "B2B & B2C eCommerce Platforms",
              "Multi-vendor Marketplace Development",
              "eCommerce Platform Migration",
              "Mobile Commerce App Development",
              "Payment Gateway Integration",
              "API & Third-party Integrations",
              "eCommerce SEO & Marketing",
              "Maintenance & Support"
            ].map((service, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.1 }}
                className="flex items-start gap-4 p-6 rounded-2xl bg-white/5 border border-white/5 hover:bg-white/10 transition-colors group"
              >
                <div className="flex-shrink-0 mt-1">
                  <CheckCircle className="w-6 h-6 text-purple-400 group-hover:text-pink-400 transition-colors" />
                </div>
                <h4 className="text-lg font-medium text-neutral-200 group-hover:text-white transition-colors">{service}</h4>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Features of eCommerce */}
      <section className="py-24 bg-white text-neutral-950 rounded-t-[3rem] md:rounded-t-[5rem] relative overflow-hidden">
        <div className="container mx-auto px-6 max-w-6xl relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Essential Features of an <br/>eCommerce Website</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-16">
            {[
              { title: "Mobile Responsive", desc: "Flawless shopping experience across all devices and screen sizes.", icon: Smartphone },
              { title: "Secure Payments", desc: "Multiple gateway options with robust SSL security encryption.", icon: CreditCard },
              { title: "SEO Friendly", desc: "Optimized structure to rank higher on search engines and drive traffic.", icon: Search },
              { title: "Order Management", desc: "Streamlined dashboard to track, fulfill, and manage customer orders.", icon: Store },
              { title: "Analytics Integration", desc: "Detailed insights into sales, visitor behavior, and store performance.", icon: TrendingUp },
              { title: "Custom APIs", desc: "Seamless integration with your CRM, ERP, and inventory systems.", icon: Code },
            ].map((feature, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="text-center group"
              >
                <div className="w-20 h-20 mx-auto rounded-full bg-neutral-100 flex items-center justify-center mb-6 group-hover:bg-neutral-950 group-hover:text-white transition-all duration-300 shadow-sm">
                  <feature.icon className="w-8 h-8 text-neutral-600 group-hover:text-white transition-colors" />
                </div>
                <h4 className="text-xl font-bold mb-3">{feature.title}</h4>
                <p className="text-neutral-600 leading-relaxed">{feature.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

    </main>
  );
};

export default EcommerceWebDevelopment;
