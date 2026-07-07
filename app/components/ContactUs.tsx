"use client";

import { useState } from "react";
import { Send, MapPin, Mail, Phone } from "lucide-react";
import { motion } from "framer-motion";

export default function ContactUs() {
  const [submitted, setSubmitted] = useState(false);

  return (
    <section id="contact" className="relative py-24 overflow-hidden section-light">
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <p className="text-[#34D399] font-semibold text-sm uppercase tracking-widest mb-3 text-center">
          Get In Touch
        </p>
        <motion.h2 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6 }}
          className="text-3xl sm:text-5xl font-bold text-gray-900 text-center mb-4 leading-tight"
        >
          Ready to Build Something Amazing?
        </motion.h2>
        <p className="text-gray-600 text-center max-w-xl mx-auto mb-16">
          Let&apos;s turn your vision into a stunning digital reality. Get in touch
          for a free consultation and project estimate.
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
          {/* Left — Contact Info */}
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={{ visible: { transition: { staggerChildren: 0.1 } } }}
            className="lg:col-span-2 space-y-8"
          >
            <motion.div variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0, transition: { duration: 0.5 } } }} className="bg-white/5 backdrop-blur-[12px] border border-white/[0.1] rounded-2xl p-6">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-emerald-50 flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-5 h-5 text-[#34D399]" />
                </div>
                <div>
                  <h4 className="text-gray-900 font-semibold text-sm mb-1">
                    Office
                  </h4>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    Bengaluru, Karnataka
                    <br />
                    India 560001
                  </p>
                </div>
              </div>
            </motion.div>

            <motion.div variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0, transition: { duration: 0.5 } } }} className="bg-white/5 backdrop-blur-[12px] border border-white/[0.1] rounded-2xl p-6">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-emerald-50 flex items-center justify-center flex-shrink-0">
                  <Mail className="w-5 h-5 text-[#34D399]" />
                </div>
                <div>
                  <h4 className="text-gray-900 font-semibold text-sm mb-1">
                    Email
                  </h4>
                  <a
                    href="mailto:hello@projextly.com"
                    className="text-gray-600 text-sm hover:text-[#34D399] transition-colors"
                  >
                    hello@projextly.com
                  </a>
                </div>
              </div>
            </motion.div>

            <motion.div variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0, transition: { duration: 0.5 } } }} className="bg-white/5 backdrop-blur-[12px] border border-white/[0.1] rounded-2xl p-6">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-emerald-50 flex items-center justify-center flex-shrink-0">
                  <Phone className="w-5 h-5 text-[#34D399]" />
                </div>
                <div>
                  <h4 className="text-gray-900 font-semibold text-sm mb-1">
                    Phone
                  </h4>
                  <a
                    href="tel:+919876543210"
                    className="text-gray-600 text-sm hover:text-[#34D399] transition-colors"
                  >
                    +91 98765 43210
                  </a>
                </div>
              </div>
            </motion.div>

            {/* Availability badge */}
            <motion.div variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0, transition: { duration: 0.5 } } }} className="flex items-center gap-3 mt-4">
              <span className="relative flex h-3 w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#34D399] opacity-75" />
                <span className="relative inline-flex rounded-full h-3 w-3 bg-[#34D399]" />
              </span>
              <span className="text-gray-600 text-sm">
                Available for new projects
              </span>
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
            <div className="bg-white/5 backdrop-blur-[12px] border border-white/[0.1] rounded-2xl p-8">
              {submitted ? (
                <div className="text-center py-12">
                  <div className="w-16 h-16 rounded-full bg-emerald-50 flex items-center justify-center mx-auto mb-4">
                    <Send className="w-8 h-8 text-[#34D399]" />
                  </div>
                  <h3 className="text-gray-900 font-bold text-xl mb-2">
                    Message Sent!
                  </h3>
                  <p className="text-gray-600 text-sm">
                    Thank you for reaching out. We&apos;ll get back to you within 24
                    hours.
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
                    className="space-y-5"
                  >
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      <div>
                        <label htmlFor="contact-name" className="block text-gray-700 text-sm font-medium mb-2">
                          Your Name
                        </label>
                        <input
                          id="contact-name"
                          name="name"
                          type="text"
                          required
                          aria-required="true"
                          placeholder="John Doe"
                          className="w-full bg-white border border-gray-200 rounded-xl px-4 py-3 text-gray-900 text-sm placeholder:text-gray-400 focus:outline-none focus:border-[#34D399] focus:ring-1 focus:ring-[#34D399]/20 transition-all"
                        />
                      </div>
                      <div>
                        <label htmlFor="contact-email" className="block text-gray-700 text-sm font-medium mb-2">
                          Email Address
                        </label>
                        <input
                          id="contact-email"
                          name="email"
                          type="email"
                          required
                          aria-required="true"
                          placeholder="john@example.com"
                          className="w-full bg-white border border-gray-200 rounded-xl px-4 py-3 text-gray-900 text-sm placeholder:text-gray-400 focus:outline-none focus:border-[#34D399] focus:ring-1 focus:ring-[#34D399]/20 transition-all"
                        />
                      </div>
                    </div>

                    <div>
                      <label htmlFor="contact-project-type" className="block text-gray-700 text-sm font-medium mb-2">
                        Project Type
                      </label>
                      <select id="contact-project-type" name="projectType" className="w-full bg-white border border-gray-200 rounded-xl px-4 py-3 text-gray-900 text-sm focus:outline-none focus:border-[#34D399] focus:ring-1 focus:ring-[#34D399]/20 transition-all appearance-none cursor-pointer">
                        <option value="">Select a service</option>
                        <option value="web">Website Development</option>
                        <option value="app">Web Application</option>
                        <option value="ecommerce">E-Commerce Store</option>
                        <option value="design">UI/UX Design</option>
                        <option value="seo">SEO & Performance</option>
                        <option value="other">Other</option>
                      </select>
                    </div>

                    <div>
                      <label htmlFor="contact-budget" className="block text-gray-700 text-sm font-medium mb-2">
                        Budget Range
                      </label>
                      <select id="contact-budget" name="budget" className="w-full bg-white border border-gray-200 rounded-xl px-4 py-3 text-gray-900 text-sm focus:outline-none focus:border-[#34D399] focus:ring-1 focus:ring-[#34D399]/20 transition-all appearance-none cursor-pointer">
                        <option value="">Select budget range</option>
                        <option value="10k-25k">₹10,000 – ₹25,000</option>
                        <option value="25k-50k">₹25,000 – ₹50,000</option>
                        <option value="50k-1L">₹50,000 – ₹1,00,000</option>
                        <option value="1L-5L">₹1,00,000 – ₹5,00,000</option>
                        <option value="5L+">₹5,00,000+</option>
                      </select>
                    </div>

                    <div>
                      <label htmlFor="contact-message" className="block text-gray-700 text-sm font-medium mb-2">
                        Tell Us About Your Project
                      </label>
                      <textarea
                        id="contact-message"
                        name="message"
                        rows={4}
                        required
                        aria-required="true"
                        placeholder="Describe your project, goals, and timeline..."
                        className="w-full bg-white border border-gray-200 rounded-xl px-4 py-3 text-gray-900 text-sm placeholder:text-gray-400 focus:outline-none focus:border-[#34D399] focus:ring-1 focus:ring-[#34D399]/20 transition-all resize-none"
                      />
                    </div>

                    <button
                      type="submit"
                      className="bg-[#34D399] text-white hover:bg-[#059669] transition-colors w-full py-4 rounded-xl text-sm flex items-center justify-center gap-2"
                    >
                      <Send className="w-4 h-4" />
                      Send Message
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
