import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Arjun Mehta",
    role: "Founder, NexaStack",
    review:
      "Projextly transformed our vision into a stunning SaaS platform. Their attention to detail and technical expertise is unmatched. Highly recommend!",
    rating: 5,
  },
  {
    name: "Priya Sharma",
    role: "CEO, StyleVerse",
    review:
      "Working with Projextly was a game-changer for our e-commerce business. The new website doubled our conversion rate within the first month.",
    rating: 5,
  },
  {
    name: "Rahul Krishnan",
    role: "CTO, HealthBridge",
    review:
      "The team delivered our healthcare portal ahead of schedule with exceptional quality. Their React and Next.js expertise is world-class.",
    rating: 5,
  },
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="bg-black py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <p className="text-cyan-400 font-semibold text-sm uppercase tracking-widest mb-3 text-center">
          What Clients Say
        </p>
        <h2 className="text-3xl sm:text-4xl font-bold text-white text-center mb-14">
          Trusted by Businesses Across India
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.name}
              className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 transition-all duration-300 hover:border-cyan-400/20"
            >
              <div className="flex gap-1 mb-5">
                {Array.from({ length: testimonial.rating }).map((_, i) => (
                  <Star
                    key={i}
                    className="w-4 h-4 fill-cyan-400 text-cyan-400"
                  />
                ))}
              </div>

              <p className="text-gray-300 text-sm leading-relaxed mb-6 italic">
                &ldquo;{testimonial.review}&rdquo;
              </p>

              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-cyan-400 to-cyan-600 flex items-center justify-center text-black font-bold text-sm">
                  {testimonial.name.charAt(0)}
                </div>
                <div>
                  <p className="font-semibold text-white text-sm">
                    {testimonial.name}
                  </p>
                  <p className="text-gray-500 text-xs">{testimonial.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
