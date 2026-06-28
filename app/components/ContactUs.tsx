"use client";

import { useState } from "react";
import { Send, MapPin, Mail, Phone } from "lucide-react";

export default function ContactUs() {
  const [submitted, setSubmitted] = useState(false);

  return (
    <section id="contact" className="relative py-24 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-cyan-950/10 to-black" />

      {/* Glows */}
      <div className="absolute -top-20 -right-20 w-80 h-80 bg-cyan-500/10 rounded-full blur-[100px]" />
      <div className="absolute -bottom-20 -left-20 w-64 h-64 bg-cyan-400/10 rounded-full blur-[100px]" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <p className="text-cyan-400 font-semibold text-sm uppercase tracking-widest mb-3 text-center">
          Get In Touch
        </p>
        <h2 className="text-3xl sm:text-5xl font-bold text-white text-center mb-4 leading-tight">
          Ready to Build Something Amazing?
        </h2>
        <p className="text-gray-400 text-center max-w-xl mx-auto mb-16">
          Let&apos;s turn your vision into a stunning digital reality. Get in touch
          for a free consultation and project estimate.
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
          {/* Left — Contact Info */}
          <div className="lg:col-span-2 space-y-8">
            <div className="glass-card p-6">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-cyan-400/10 flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-5 h-5 text-cyan-400" />
                </div>
                <div>
                  <h4 className="text-white font-semibold text-sm mb-1">
                    Office
                  </h4>
                  <p className="text-gray-400 text-sm leading-relaxed">
                    Bengaluru, Karnataka
                    <br />
                    India 560001
                  </p>
                </div>
              </div>
            </div>

            <div className="glass-card p-6">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-cyan-400/10 flex items-center justify-center flex-shrink-0">
                  <Mail className="w-5 h-5 text-cyan-400" />
                </div>
                <div>
                  <h4 className="text-white font-semibold text-sm mb-1">
                    Email
                  </h4>
                  <a
                    href="mailto:hello@projextly.com"
                    className="text-gray-400 text-sm hover:text-cyan-400 transition-colors"
                  >
                    hello@projextly.com
                  </a>
                </div>
              </div>
            </div>

            <div className="glass-card p-6">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-cyan-400/10 flex items-center justify-center flex-shrink-0">
                  <Phone className="w-5 h-5 text-cyan-400" />
                </div>
                <div>
                  <h4 className="text-white font-semibold text-sm mb-1">
                    Phone
                  </h4>
                  <a
                    href="tel:+919876543210"
                    className="text-gray-400 text-sm hover:text-cyan-400 transition-colors"
                  >
                    +91 98765 43210
                  </a>
                </div>
              </div>
            </div>

            {/* Availability badge */}
            <div className="flex items-center gap-3 mt-4">
              <span className="relative flex h-3 w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-3 w-3 bg-cyan-400" />
              </span>
              <span className="text-gray-400 text-sm">
                Available for new projects
              </span>
            </div>
          </div>

          {/* Right — Contact Form */}
          <div className="lg:col-span-3">
            <div className="glass-card p-8">
              {submitted ? (
                <div className="text-center py-12">
                  <div className="w-16 h-16 rounded-full bg-cyan-400/10 flex items-center justify-center mx-auto mb-4">
                    <Send className="w-8 h-8 text-cyan-400" />
                  </div>
                  <h3 className="text-white font-bold text-xl mb-2">
                    Message Sent!
                  </h3>
                  <p className="text-gray-400 text-sm">
                    Thank you for reaching out. We&apos;ll get back to you within 24
                    hours.
                  </p>
                </div>
              ) : (
                <form
                  onSubmit={(e) => {
                    e.preventDefault();
                    setSubmitted(true);
                  }}
                  className="space-y-5"
                >
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-gray-300 text-sm font-medium mb-2">
                        Your Name
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="John Doe"
                        className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white text-sm placeholder:text-gray-600 focus:outline-none focus:border-cyan-400/50 focus:ring-1 focus:ring-cyan-400/20 transition-all"
                      />
                    </div>
                    <div>
                      <label className="block text-gray-300 text-sm font-medium mb-2">
                        Email Address
                      </label>
                      <input
                        type="email"
                        required
                        placeholder="john@example.com"
                        className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white text-sm placeholder:text-gray-600 focus:outline-none focus:border-cyan-400/50 focus:ring-1 focus:ring-cyan-400/20 transition-all"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-gray-300 text-sm font-medium mb-2">
                      Project Type
                    </label>
                    <select className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white text-sm focus:outline-none focus:border-cyan-400/50 focus:ring-1 focus:ring-cyan-400/20 transition-all appearance-none cursor-pointer">
                      <option value="" className="bg-black">
                        Select a service
                      </option>
                      <option value="web" className="bg-black">
                        Website Development
                      </option>
                      <option value="app" className="bg-black">
                        Web Application
                      </option>
                      <option value="ecommerce" className="bg-black">
                        E-Commerce Store
                      </option>
                      <option value="design" className="bg-black">
                        UI/UX Design
                      </option>
                      <option value="seo" className="bg-black">
                        SEO & Performance
                      </option>
                      <option value="other" className="bg-black">
                        Other
                      </option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-gray-300 text-sm font-medium mb-2">
                      Budget Range
                    </label>
                    <select className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white text-sm focus:outline-none focus:border-cyan-400/50 focus:ring-1 focus:ring-cyan-400/20 transition-all appearance-none cursor-pointer">
                      <option value="" className="bg-black">
                        Select budget range
                      </option>
                      <option value="10k-25k" className="bg-black">
                        ₹10,000 – ₹25,000
                      </option>
                      <option value="25k-50k" className="bg-black">
                        ₹25,000 – ₹50,000
                      </option>
                      <option value="50k-1L" className="bg-black">
                        ₹50,000 – ₹1,00,000
                      </option>
                      <option value="1L-5L" className="bg-black">
                        ₹1,00,000 – ₹5,00,000
                      </option>
                      <option value="5L+" className="bg-black">
                        ₹5,00,000+
                      </option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-gray-300 text-sm font-medium mb-2">
                      Tell Us About Your Project
                    </label>
                    <textarea
                      rows={4}
                      required
                      placeholder="Describe your project, goals, and timeline..."
                      className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white text-sm placeholder:text-gray-600 focus:outline-none focus:border-cyan-400/50 focus:ring-1 focus:ring-cyan-400/20 transition-all resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-cyan-400 text-black font-bold py-4 rounded-xl hover:bg-cyan-300 hover:scale-[1.02] transition-all text-sm shadow-lg shadow-cyan-500/20 flex items-center justify-center gap-2"
                  >
                    <Send className="w-4 h-4" />
                    Send Message
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
