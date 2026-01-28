import { motion } from "motion/react";
import { Quote } from "lucide-react";
import LogoArrowBlue from "@/imports/LogoArrowBlue1";

export function TestimonialsV2() {
  const testimonials = [
    {
      quote: "8180 didn't just build us a system—they gave us our evenings back. We used to spend 15 hours a week on manual data entry. Now it's automated, and we can focus on actually growing the business.",
      author: "Sarah Chen",
      role: "Founder, TechFlow",
      impact: "15hrs/week saved"
    },
    {
      quote: "I was skeptical at first. But the team took time to understand our unique challenges. Six months later, our customer satisfaction is up 40% and our team morale has never been higher.",
      author: "Marcus Rodriguez",
      role: "CEO, Streamline Co",
      impact: "40% happier customers"
    },
    {
      quote: "Working with 8180 felt like having a co-founder who genuinely cares. They weren't just checking boxes—they were solving real problems and celebrating our wins with us.",
      author: "Priya Sharma",
      role: "Product Lead, Innovate Labs",
      impact: "Long-term partner"
    }
  ];

  return (
    <section className="px-6 py-8 pb-12 max-w-[1600px] mx-auto">
      {/* Section Header */}
      <motion.div
        className="mb-16"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <p className="text-sm tracking-wider uppercase text-[#00AAFF] mb-4">Real Stories</p>
        <div className="w-5 h-7 mb-0">
          <LogoArrowBlue />
        </div>
        <h2 className="text-5xl md:text-6xl mb-6 tracking-tight">
          Don't Take Our Word For It
        </h2>
        <p className="text-xl text-[rgb(255,255,255)] max-w-full">
          Here's what it's really like to work with us—straight from the people who matter most.
        </p>
      </motion.div>

      {/* Testimonials Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {testimonials.map((testimonial, index) => (
          <motion.div
            key={index}
            className="border border-white/10 bg-gradient-to-br from-white/5 to-transparent backdrop-blur-sm p-8 rounded-lg hover:border-[#00AAFF]/30 hover:bg-[#00AAFF]/5 transition-all duration-300 flex flex-col"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
          >
            {/* Quote Icon */}
            <Quote className="w-10 h-10 text-[#00AAFF] mb-6" />
            
            {/* Quote */}
            <p className="text-gray-200 leading-relaxed mb-6 flex-grow">
              "{testimonial.quote}"
            </p>

            {/* Author Info */}
            <div className="pt-6 border-t border-white/10">
              <p className="text-white font-medium mb-1">{testimonial.author}</p>
              <p className="text-sm text-gray-300 mb-3">{testimonial.role}</p>
              <div className="inline-block px-3 py-1 bg-[#00AAFF]/10 border border-[#00AAFF]/30 rounded-md">
                <p className="text-xs text-[#00AAFF]">{testimonial.impact}</p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}