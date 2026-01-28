import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Plus, Minus } from 'lucide-react';
import LogoArrowBlue from "@/imports/LogoArrowBlue1";

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0); // First item open by default

  const faqs = [
    {
      question: 'What types of projects do you take on?',
      answer:
        'We specialize in brand identity systems, digital product design, and strategic creative direction for ambitious companies. Whether you\'re a venture-backed startup building from zero or an established brand ready for transformation, we work with clients who value design as a strategic advantage—not just decoration.',
    },
    {
      question: 'How long does a typical project take?',
      answer:
        'Most brand identity projects run 6-10 weeks, while digital product design engagements typically span 8-16 weeks depending on scope. We believe great work can\'t be rushed, but we also respect your timeline. We\'ll give you an honest timeline in our discovery call—no surprises.',
    },
    {
      question: 'What is your design process like?',
      answer:
        'We start with deep discovery: understanding your business, audience, and goals. Then we move into strategic exploration, developing multiple design directions. Once we align on a direction, we refine and build a complete system—not just a logo. You\'ll be involved at key milestones, but we don\'t believe in "design by committee." Trust us to lead, and we\'ll deliver work that exceeds expectations.',
    },
    {
      question: 'Do you work with startups or only established companies?',
      answer:
        'Both. We love working with ambitious founders building category-defining companies, but we also partner with established brands ready for their next evolution. What matters most is alignment: you need to value design, trust our process, and be ready to invest in work that actually moves the needle.',
    },
    {
      question: 'What is your pricing structure?',
      answer:
        'Project fees typically range from $25K-$150K+ depending on scope and complexity. We offer transparent, fixed-price engagements (no surprises), as well as flexible retainer arrangements for ongoing partnerships. Every project includes a detailed proposal with clear deliverables, timeline, and investment.',
    },
    {
      question: 'Can you work within our existing brand guidelines?',
      answer:
        'Absolutely. We can extend and evolve your existing system, or start fresh if needed. During discovery, we\'ll audit what\'s working (and what\'s not) and recommend the best path forward. Sometimes that means evolution, sometimes revolution—we\'ll be honest about what you need.',
    },
    {
      question: 'Do you offer ongoing support after project completion?',
      answer:
        'Yes. Every project includes a 30-day support window for minor tweaks and questions. Beyond that, many clients stay on monthly retainers for ongoing design needs, campaign work, and strategic guidance. We don\'t disappear after launch—we\'re invested in your long-term success.',
    },
    {
      question: 'What makes 8180 different from other design studios?',
      answer:
        'We\'re not a factory. Every project is led by senior designers with 10+ years of experience—no junior teams, no template solutions. We obsess over the details, challenge assumptions, and deliver systems that actually scale. If you want safe, predictable work, we\'re not your studio. If you want design that pushes boundaries and drives results, let\'s talk.',
    },
  ];

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="px-6 py-8 max-w-[1600px] mx-auto">
      {/* Section Header */}
      <div className="max-w-full mb-8 md:mb-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          {/* Brand Arrow Accent */}
          <p className="text-sm tracking-wider uppercase text-[#00AAFF] mb-4">Questions Answered</p>
          <div className="w-5 h-7 mb-0">
            <LogoArrowBlue />
          </div>
          <h2 className="text-5xl md:text-6xl mb-6 tracking-tight">
            Everything You Need to Know
          </h2>
          <p className="text-lg md:text-xl text-[rgb(255,255,255)] leading-relaxed">
            Still have questions? We're here to help. Reach out anytime.
          </p>
        </motion.div>
      </div>

      {/* FAQ List */}
      <div className="space-y-2">
        {faqs.map((faq, index) => {
          const isOpen = openIndex === index;
          return (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
            >
              <div className={`border-b border-white/10 transition-all duration-300 ${
                isOpen ? 'border-[#00AAFF]' : 'hover:border-white/20'
              }`}>
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full text-left py-4 flex items-start justify-between gap-4"
                  aria-expanded={isOpen}
                  aria-controls={`faq-answer-${index}`}
                >
                  <span
                    className={`text-lg md:text-2xl flex-1 tracking-tight transition-colors duration-200 ${
                      isOpen ? 'text-[#00AAFF]' : 'text-white hover:text-white/80'
                    }`}
                    style={{ fontFamily: 'Agdasima, sans-serif' }}
                  >
                    {faq.question}
                  </span>
                  <span className="flex-shrink-0 w-6 h-6 flex items-center justify-center">
                    {isOpen ? (
                      <Minus className="w-4 h-4 text-[#00AAFF]" />
                    ) : (
                      <Plus className="w-4 h-4 text-white/40" />
                    )}
                  </span>
                </button>

                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      id={`faq-answer-${index}`}
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                      className="overflow-hidden"
                    >
                      <div className="pb-4">
                        <p
                          className="text-sm md:text-base text-white/60 leading-relaxed"
                          style={{ fontFamily: 'Open-Sauce-Sans, sans-serif' }}
                        >
                          {faq.answer}
                        </p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </motion.div>
          );
        })}
      </div>

      {/* Bottom CTA */}
      <motion.div
        className="mt-8 md:mt-10 max-w-3xl mx-auto relative group"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.6 }}
      >
        {/* Glow Effect */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#00AAFF]/20 to-[#0062FF]/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-2xl -z-10" />
        
        <div className="border border-white/20 bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl p-6 md:p-8 rounded-lg shadow-[0_8px_32px_rgba(0,0,0,0.4)] hover:border-[#00AAFF]/60 hover:shadow-[0_8px_32px_rgba(0,170,255,0.2),0_16px_64px_rgba(0,0,0,0.5)] transition-all duration-500 text-center">
          {/* Animated Border Gradient */}
          <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
            <div className="absolute inset-[-2px] bg-gradient-to-r from-[#00AAFF] via-[#0088FF] to-[#00AAFF] animate-gradient bg-[length:200%_auto] opacity-20 blur-sm rounded-lg" />
          </div>

          <div className="relative z-10">
            <p
              className="text-[28px] md:text-[32px] text-white mb-4"
              style={{ fontFamily: 'Agdasima, sans-serif' }}
            >
              Still have questions?
            </p>
            <a
              href="#contact"
              className="inline-flex items-center gap-3 px-6 py-3 bg-[#00AAFF] text-white border border-[#00AAFF] hover:bg-white hover:text-[#00AAFF] transition-all duration-300 rounded-md shadow-lg hover:shadow-[0_0_20px_rgba(0,170,255,0.5)]"
              style={{ fontFamily: 'Agdasima, sans-serif' }}
            >
              <span className="text-base md:text-lg tracking-wide">Book a Free Discovery Call</span>
              <motion.svg
                className="w-5 h-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                whileHover={{ x: 3 }}
                transition={{ duration: 0.2 }}
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </motion.svg>
            </a>
          </div>
        </div>
      </motion.div>
    </section>
  );
}