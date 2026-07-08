"use client";

import { useState } from "react";
import { Send, MapPin, Mail, Phone } from "lucide-react";
import { motion } from "framer-motion";

export default function ContactUs() {
  const [submitted, setSubmitted] = useState(false);

  return (
    <section id="contact" className="relative py-24 overflow-hidden bg-[#030712]">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,_var(--tw-gradient-stops))] from-[#10B981]/5 via-transparent to-transparent pointer-events-none" />
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10">

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
          {/* Left — Contact Info */}
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={{ visible: { transition: { staggerChildren: 0.1 } } }}
            className="lg:col-span-2 space-y-6"
          >
            <motion.div variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0, transition: { duration: 0.5 } } }} className="glass-panel p-8 border border-white/5 bg-white/[0.02]">
              <div className="flex items-start gap-5">
                <div className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-6 h-6 text-[#10B981]" />
                </div>
                <div>
                  <h4 className="text-white font-display font-semibold text-lg mb-2">
                    Headquarters
                  </h4>
                  <p className="text-slate-400 text-base leading-relaxed">
                    Bengaluru, Karnataka
                    <br />
                    India 560001
                  </p>
                </div>
              </div>
            </motion.div>

            <motion.div variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0, transition: { duration: 0.5 } } }} className="glass-panel p-8 border border-white/5 bg-white/[0.02]">
              <div className="flex items-start gap-5">
                <div className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center flex-shrink-0">
                  <Mail className="w-6 h-6 text-[#10B981]" />
                </div>
                <div>
                  <h4 className="text-white font-display font-semibold text-lg mb-2">
                    Email
                  </h4>
                  <a
                    href="mailto:hello@projextly.com"
                    className="text-slate-400 text-base hover:text-[#10B981] transition-colors"
                  >
                    hello@projextly.com
                  </a>
                </div>
              </div>
            </motion.div>

            <motion.div variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0, transition: { duration: 0.5 } } }} className="glass-panel p-8 border border-white/5 bg-white/[0.02]">
              <div className="flex items-start gap-5">
                <div className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center flex-shrink-0">
                  <Phone className="w-6 h-6 text-[#10B981]" />
                </div>
                <div>
                  <h4 className="text-white font-display font-semibold text-lg mb-2">
                    Phone
                  </h4>
                  <a
                    href="tel:+919876543210"
                    className="text-slate-400 text-base hover:text-[#10B981] transition-colors"
                  >
                    +91 98765 43210
                  </a>
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* Right — Contact Form */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-3"
          >
            <div className="glass-panel p-8 sm:p-12 border border-white/10 bg-black/40">
              {submitted ? (
                <div className="text-center py-16">
                  <div className="w-20 h-20 rounded-full bg-[#10B981]/10 flex items-center justify-center mx-auto mb-6 border border-[#10B981]/30">
                    <Send className="w-10 h-10 text-[#10B981]" />
                  </div>
                  <h3 className="text-white font-display font-bold text-3xl mb-4">
                    Transmission Successful
                  </h3>
                  <p className="text-slate-400 text-lg">
                    Thank you for reaching out. Our team will review your inquiry and get back to you shortly.
                  </p>
                </div>
              ) : (
                  <form
                    onSubmit={async (e) => {
                      e.preventDefault();
                      const formData = new FormData(e.currentTarget);
                      const data = {
                        name: formData.get("name"),
                        email: formData.get("email"),
                        projectType: formData.get("projectType"),
                        budget: formData.get("budget"),
                        message: formData.get("message"),
                      };

                      try {
                        const res = await fetch("/api/contact", {
                          method: "POST",
                          headers: { "Content-Type": "application/json" },
                          body: JSON.stringify(data),
                        });
                        if (res.ok) {
                          setSubmitted(true);
                        }
                      } catch (error) {
                        console.error("Failed to submit form:", error);
                      }
                    }}
                    className="space-y-6"
                  >
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                      <div>
                        <label htmlFor="contact-name" className="block text-slate-300 text-sm font-medium mb-2">
                          Your Name
                        </label>
                        <input
                          id="contact-name"
                          name="name"
                          type="text"
                          required
                          placeholder="John Doe"
                          className="w-full bg-white/5 border border-white/10 rounded-xl px-5 py-4 text-white placeholder:text-slate-500 focus:outline-none focus:border-[#10B981] focus:ring-1 focus:ring-[#10B981]/50 transition-all"
                        />
                      </div>
                      <div>
                        <label htmlFor="contact-email" className="block text-slate-300 text-sm font-medium mb-2">
                          Email Address
                        </label>
                        <input
                          id="contact-email"
                          name="email"
                          type="email"
                          required
                          placeholder="john@example.com"
                          className="w-full bg-white/5 border border-white/10 rounded-xl px-5 py-4 text-white placeholder:text-slate-500 focus:outline-none focus:border-[#10B981] focus:ring-1 focus:ring-[#10B981]/50 transition-all"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                      <div>
                        <label htmlFor="contact-project-type" className="block text-slate-300 text-sm font-medium mb-2">
                          Project Type
                        </label>
                        <select id="contact-project-type" name="projectType" className="w-full bg-white/5 border border-white/10 rounded-xl px-5 py-4 text-white focus:outline-none focus:border-[#10B981] focus:ring-1 focus:ring-[#10B981]/50 transition-all appearance-none cursor-pointer">
                          <option value="" className="bg-slate-900">Select a service</option>
                          <option value="web" className="bg-slate-900">Website Development</option>
                          <option value="app" className="bg-slate-900">Web Application</option>
                          <option value="ecommerce" className="bg-slate-900">E-Commerce Store</option>
                          <option value="design" className="bg-slate-900">UI/UX Design</option>
                          <option value="seo" className="bg-slate-900">SEO & Performance</option>
                          <option value="other" className="bg-slate-900">Other</option>
                        </select>
                      </div>

                      <div>
                        <label htmlFor="contact-budget" className="block text-slate-300 text-sm font-medium mb-2">
                          Budget Range
                        </label>
                        <select id="contact-budget" name="budget" className="w-full bg-white/5 border border-white/10 rounded-xl px-5 py-4 text-white focus:outline-none focus:border-[#10B981] focus:ring-1 focus:ring-[#10B981]/50 transition-all appearance-none cursor-pointer">
                          <option value="" className="bg-slate-900">Select budget range</option>
                          <option value="10k-25k" className="bg-slate-900">₹10,000 – ₹25,000</option>
                          <option value="25k-50k" className="bg-slate-900">₹25,000 – ₹50,000</option>
                          <option value="50k-1L" className="bg-slate-900">₹50,000 – ₹1,00,000</option>
                          <option value="1L-5L" className="bg-slate-900">₹1,00,000 – ₹5,00,000</option>
                          <option value="5L+" className="bg-slate-900">₹5,00,000+</option>
                        </select>
                      </div>
                    </div>

                    <div>
                      <label htmlFor="contact-message" className="block text-slate-300 text-sm font-medium mb-2">
                        Project Details
                      </label>
                      <textarea
                        id="contact-message"
                        name="message"
                        rows={5}
                        required
                        placeholder="Tell us about your vision..."
                        className="w-full bg-white/5 border border-white/10 rounded-xl px-5 py-4 text-white placeholder:text-slate-500 focus:outline-none focus:border-[#10B981] focus:ring-1 focus:ring-[#10B981]/50 transition-all resize-none"
                      />
                    </div>

                    <button
                      type="submit"
                      className="magnetic-btn w-full bg-[#10B981] text-black font-bold py-4 rounded-xl text-lg flex items-center justify-center gap-3 hover:bg-emerald-400 transition-colors shadow-[0_0_30px_rgba(16,185,129,0.3)]"
                    >
                      <Send className="w-5 h-5" />
                      Initialize Project
                    </button>
                  </form>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
