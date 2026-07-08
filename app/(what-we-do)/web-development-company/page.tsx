"use client";

import { motion } from 'framer-motion';
import { CheckCircle, Code, Smartphone, Zap, Globe, Layout, ShieldCheck, ArrowRight } from 'lucide-react';
import Link from 'next/link';

const WebDevelopmentCompany = () => {
  return (
    <main className="min-h-screen bg-neutral-950 text-neutral-50 overflow-hidden font-sans">
      
      {/* Hero Section */}
      <section className="relative w-full min-h-[90vh] flex items-center justify-center pt-24 pb-12 overflow-hidden">
        {/* Background Gradients */}
        <div className="absolute inset-0 bg-neutral-950">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-600/20 rounded-full blur-[128px] mix-blend-screen" />
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-600/20 rounded-full blur-[128px] mix-blend-screen" />
        </div>
        
        {/* Grid Pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]" />

        <div className="relative z-10 container mx-auto px-6 max-w-6xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 backdrop-blur-md mb-8"
          >
            <span className="w-2 h-2 rounded-full bg-blue-500 animate-pulse" />
            <span className="text-sm font-medium text-neutral-300">Premium Web Development Services</span>
          </motion.div>
          
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1, ease: "easeOut" }}
            className="text-5xl md:text-7xl font-bold tracking-tight mb-8 leading-tight"
          >
            Best <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400">Web Development</span> Services
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="text-lg md:text-xl text-neutral-400 max-w-2xl mx-auto mb-10 leading-relaxed"
          >
            Experience the power of a seamless online journey with our cutting-edge web development services tailored to elevate your business.
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
          >
            <Link 
              href="/contact"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white text-black font-semibold rounded-full hover:bg-neutral-200 transition-colors duration-300 group"
            >
              Talk to our experts
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Intro Section */}
      <section className="py-24 relative z-10 bg-neutral-900/50 backdrop-blur-sm border-y border-white/5">
        <div className="container mx-auto px-6 max-w-6xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div 
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-sm uppercase tracking-wider text-blue-400 font-semibold mb-3">Our Expertise</h2>
              <h3 className="text-3xl md:text-5xl font-bold mb-6 text-white leading-tight">
                Website Development <br className="hidden md:block"/>Services
              </h3>
              <p className="text-neutral-400 mb-6 text-lg leading-relaxed">
                A highly interactive and fully-functional website is essential to keep your business on the right track. Whether it's enhancing brand identity, sustaining competition, highlighting products, or boosting revenue, a website serves your business in multiple ways.
              </p>
              <p className="text-neutral-400 text-lg leading-relaxed">
                We are a renowned web development company that has catered to businesses globally, delivering custom solutions that align perfectly with their core needs and goals.
              </p>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <div className="aspect-square md:aspect-[4/3] rounded-3xl overflow-hidden relative border border-white/10 bg-neutral-800 p-2">
                <div className="w-full h-full bg-neutral-900 rounded-2xl overflow-hidden relative group">
                  <div className="absolute inset-0 bg-gradient-to-tr from-blue-500/20 to-purple-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10" />
                  <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=2072&auto=format&fit=crop')] bg-cover bg-center mix-blend-luminosity opacity-60 group-hover:scale-105 group-hover:opacity-80 transition-all duration-700" />
                </div>
              </div>
              
              {/* Floating Element */}
              <div className="absolute -bottom-10 -left-10 bg-neutral-950 border border-white/10 p-6 rounded-2xl shadow-2xl backdrop-blur-xl hidden md:block">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-blue-500/20 flex items-center justify-center">
                    <Code className="w-6 h-6 text-blue-400" />
                  </div>
                  <div>
                    <p className="text-white font-bold text-xl">10+ Years</p>
                    <p className="text-neutral-400 text-sm">Of Excellence</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-32 relative">
        <div className="container mx-auto px-6 max-w-6xl">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <h2 className="text-3xl md:text-5xl font-bold mb-6">What we provide for your <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">dream business</span></h2>
            <p className="text-xl text-neutral-400">
              We deliver dynamic web development services, ensuring your website is highly engaging, visible, and built exactly to your requirements.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { title: 'High-quality', desc: 'Premium web development services across various platforms with exceptional attention to detail.', icon: ShieldCheck },
              { title: 'Affordable prices', desc: 'Top-tier websites developed at competitive prices tailored to your budget constraints.', icon: Zap },
              { title: 'Mobile compatibility', desc: 'Flawlessly responsive designs ensuring perfect accessibility across all devices and screen sizes.', icon: Smartphone },
              { title: 'Fast load time', desc: 'Optimized architectures for lightning-fast performance to boost your business growth.', icon: Globe },
              { title: 'Browser consistency', desc: 'Rigorous cross-browser testing to guarantee uniform experiences for every user.', icon: Layout },
              { title: 'Highly specialized', desc: 'Expert developers utilizing the latest trends and modern tech stacks for optimal results.', icon: Code },
            ].map((feature, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="p-8 rounded-3xl bg-white/5 border border-white/5 hover:border-white/20 transition-all duration-300 group hover:-translate-y-2"
              >
                <div className="w-14 h-14 rounded-2xl bg-white/5 flex items-center justify-center mb-6 group-hover:scale-110 group-hover:bg-blue-500/20 transition-all duration-300">
                  <feature.icon className="w-7 h-7 text-neutral-300 group-hover:text-blue-400 transition-colors" />
                </div>
                <h3 className="text-xl font-semibold mb-3 text-white">{feature.title}</h3>
                <p className="text-neutral-400 leading-relaxed">{feature.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Include */}
      <section className="py-24 bg-white text-neutral-950 rounded-t-[3rem] md:rounded-t-[5rem] relative overflow-hidden">
        <div className="container mx-auto px-6 max-w-6xl relative z-10">
          <div className="flex flex-col md:flex-row gap-12 items-end mb-16">
            <div className="md:w-1/2">
              <h2 className="text-4xl md:text-5xl font-bold leading-tight">Our web development <br/>services include</h2>
            </div>
            <div className="md:w-1/2">
              <p className="text-lg text-neutral-600 leading-relaxed">
                As a leading development agency, we offer a comprehensive suite of services. From static corporate sites to dynamic web applications, we provide exactly what your business needs to thrive digitally.
              </p>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              "Custom Web Application Development",
              "E-commerce Solutions & Integration",
              "CMS Development (WordPress, Headless)",
              "Frontend & Backend Development",
              "API Development & Integration",
              "Website Maintenance & Support"
            ].map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="flex items-center gap-4 p-6 rounded-2xl bg-neutral-100 hover:bg-neutral-200 transition-colors"
              >
                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-black text-white flex items-center justify-center">
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

export default WebDevelopmentCompany;
