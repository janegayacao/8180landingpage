import { motion } from "motion/react";
import { ImageWithFallback } from "@/app/components/figma/ImageWithFallback";
import { TrendingUp, ArrowRight } from "lucide-react";
import LogoArrowBlue from "@/imports/LogoArrowBlue1";

const projects = [
  {
    title: "Fintech Dashboard",
    category: "Process & Data",
    result: "40% Faster Task Completion",
    description: "Real-time analytics platform that cut reporting time in half",
    image: "https://images.unsplash.com/photo-1736134869040-1c1853bc23cb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBkYXNoYm9hcmQlMjB1eHxlbnwxfHx8fDE3Njg5MTY3OTd8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
  },
  {
    title: "Enterprise Automation",
    category: "Digital Transformation",
    result: "60% Reduction in Manual Work",
    description: "End-to-end workflow automation across 12 legacy systems",
    image: "https://images.unsplash.com/photo-1623578240928-9473b76272ee?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkaWdpdGFsJTIwdHJhbnNmb3JtYXRpb24lMjB0ZWNobm9sb2d5fGVufDF8fHx8MTc2ODgyNzMzNnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
  },
  {
    title: "E-Commerce Platform",
    category: "High-Conversion Website",
    result: "3.5x Conversion Rate",
    description: "Mobile-first design that tripled sales in 6 months",
    image: "https://images.unsplash.com/photo-1729575846509-613ecbc7ee88?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtaW5pbWFsJTIwd2Vic2l0ZSUyMGRlc2lnbnxlbnwxfHx8fDE3Njg4OTExMzh8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
  },
  {
    title: "Workflow Integration",
    category: "End-to-End Automation",
    result: "12 Systems, One Pipeline",
    description: "Unified platform connecting fragmented tools and databases",
    image: "https://images.unsplash.com/photo-1563884705074-7c8b15f16295?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhdXRvbWF0aW9uJTIwd29ya2Zsb3d8ZW58MXx8fHwxNzY4OTE2Nzk4fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
  },
  {
    title: "SaaS Product Design",
    category: "User Experience",
    result: "85% User Satisfaction",
    description: "Intuitive interface that reduced onboarding time by 70%",
    image: "https://images.unsplash.com/photo-1736134869040-1c1853bc23cb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBkYXNoYm9hcmQlMjB1eHxlbnwxfHx8fDE3Njg5MTY3OTd8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
  },
];

export function PortfolioV2() {
  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="py-8 overflow-hidden">
      <div className="px-6 max-w-[1600px] mx-auto mb-12">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
          <div className="max-w-2xl">
            
            <motion.p
              className="text-sm tracking-wider uppercase text-[#00AAFF] mb-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              Case Studies
            </motion.p>
            <div className="w-5 h-7 mb-0">
              <LogoArrowBlue />
            </div>
            <motion.h2
              className="text-5xl md:text-6xl tracking-tight mb-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              Work That Delivers Results
            </motion.h2>
            <motion.p
              className="text-lg text-[rgb(255,255,255)]"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.1 }}
            >
              Real projects. Real metrics. Real impact on business outcomes.
            </motion.p>
          </div>
          
          {/* Scroll Indicator - Desktop */}
          <motion.div
            className="hidden md:flex items-center gap-3 text-gray-400 text-sm"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <span>Scroll to explore</span>
            <motion.div
              animate={{ x: [0, 8, 0] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            >
              <ArrowRight className="w-5 h-5" />
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Horizontal Scroll Container */}
      <div className="relative">
        <div className="flex gap-6 px-6 overflow-x-auto overflow-y-visible pb-8 pt-8 snap-x snap-mandatory scrollbar-hide">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              className="flex-none w-[90vw] sm:w-[400px] md:w-[500px] snap-start group cursor-pointer"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <div className="border border-white/20 bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl overflow-hidden rounded-lg shadow-[0_8px_32px_rgba(0,0,0,0.4)] hover:border-[#00AAFF] hover:shadow-[0_8px_48px_rgba(0,170,255,0.4),0_16px_64px_rgba(0,0,0,0.6)] transition-all duration-500 h-full relative group-hover:scale-[1.03] group-hover:translate-y-[-6px]">
                {/* Hover Glow Effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-[#00AAFF]/30 to-[#0062FF]/30 opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-2xl -z-10" />
                
                {/* Image */}
                <div className="relative h-[300px] overflow-hidden">
                  <ImageWithFallback
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#121212] via-transparent to-transparent" />
                  
                  {/* Animated Overlay on Hover */}
                  <div className="absolute inset-0 bg-gradient-to-r from-[#00AAFF]/0 via-[#00AAFF]/20 to-[#00AAFF]/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000" />
                </div>

                {/* Content */}
                <div className="p-8 border-t border-white/20 relative z-10">
                  <p className="text-xs text-[#00AAFF] mb-3 tracking-wider uppercase">{project.category}</p>
                  <h3 className="text-3xl mb-3 tracking-tight group-hover:text-[#00AAFF] transition-colors duration-300 text-[32px]">{project.title}</h3>
                  <p className="text-gray-200 mb-4 leading-relaxed">{project.description}</p>
                  
                  {/* Result Highlight */}
                  <div className="flex items-center gap-2 text-gray-300 border-l-2 border-[#00AAFF] pl-4 bg-[#00AAFF]/10 backdrop-blur-sm py-3 -ml-4 group-hover:bg-[#00AAFF]/20 transition-colors">
                    <TrendingUp className="w-5 h-5 text-[#00AAFF]" />
                    <span className="text-base font-medium">{project.result}</span>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}

          {/* CTA Card at End */}
          <motion.div
            className="flex-none w-[500px] snap-start"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: projects.length * 0.1 }}
          >
            <div className="border border-[#00AAFF]/40 bg-gradient-to-br from-[#00AAFF]/15 to-transparent backdrop-blur-xl p-12 rounded-lg h-full flex flex-col justify-center items-center text-center gap-6 relative overflow-hidden shadow-[0_8px_32px_rgba(0,170,255,0.2)]">
              {/* Animated Background Gradient */}
              <div className="absolute inset-0 bg-gradient-to-r from-[#00AAFF]/10 via-[#0088FF]/10 to-[#00AAFF]/10 animate-gradient bg-[length:200%_auto]" />
              
              <div className="relative z-10">
                <h3 className="text-4xl tracking-tight mb-4">Ready to See Similar Results?</h3>
                <p className="text-lg text-gray-300 max-w-sm mb-6">
                  Let's discuss how we can transform your workflow and drive measurable outcomes.
                </p>
                <button
                  onClick={scrollToContact}
                  className="group relative bg-[#00AAFF] text-white px-8 py-4 text-lg border border-[#00AAFF] rounded-md shadow-[0_0_20px_rgba(0,170,255,0.4),0_8px_32px_rgba(0,0,0,0.3)] hover:shadow-[0_0_40px_rgba(0,170,255,0.7),0_12px_48px_rgba(0,0,0,0.4)] hover:scale-[1.02] transition-all duration-300 inline-flex items-center gap-3 overflow-hidden"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700" />
                  <span className="relative z-10">Start Your Project</span>
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform relative z-10" />
                </button>
              </div>
            </div>
          </motion.div>
        </div>

      </div>
    </section>
  );
}