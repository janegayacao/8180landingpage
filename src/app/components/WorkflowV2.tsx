import { motion } from "motion/react";
import { CheckCircle2, ArrowRight } from "lucide-react";
import LogoArrowBlue from "@/imports/LogoArrowBlue1";

export function WorkflowV2() {
  const steps = [
    { number: "01", title: "Discovery", description: "We analyze your current workflow and identify bottlenecks" },
    { number: "02", title: "Design", description: "Custom solutions tailored to your existing processes" },
    { number: "03", title: "Deploy", description: "Seamless integration without disrupting your operations" },
    { number: "04", title: "Optimize", description: "Continuous improvement based on real-world performance" },
  ];

  return (
    <section className="px-6 py-8 max-w-[1600px] mx-auto">
      <div className="border border-white/10 bg-gradient-to-br from-white/5 to-transparent backdrop-blur-sm p-8 md:p-16 rounded-lg shadow-[0_8px_32px_rgba(0,0,0,0.3)]">
        <motion.div
          className="mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="w-5 h-7 mb-0">
            <LogoArrowBlue />
          </div>
          <h2 className="text-5xl md:text-6xl mb-6 tracking-tight">
            Your Workflow, <span className="text-[#00AAFF]" style={{ fontFamily: 'Agdasima, sans-serif' }}>Our Solution.</span>
          </h2>
          <p className="text-xl text-[rgb(255,255,255)] leading-relaxed max-w-full">
            We design and tailor-fit platforms to your existing workflow, not the other way around. 
            Imagine your vision becoming a reality simply by doing what you do best.
          </p>
        </motion.div>

        {/* Process Steps */}
        <div className="grid md:grid-cols-4 gap-6 mt-16">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              className="relative border border-white/10 bg-black/20 p-6 rounded-md backdrop-blur-sm hover:border-[#00AAFF]/30 transition-colors"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <div className="text-6xl text-[#00AAFF]/20 mb-4 font-bold text-[rgb(0,170,255)]">
                {step.number}
              </div>
              <h3 className="text-2xl mb-3 tracking-tight">{step.title}</h3>
              <p className="text-gray-300 text-sm leading-relaxed">{step.description}</p>
              
              {index < steps.length - 1 && (
                <ArrowRight className="hidden md:block absolute -right-3 top-1/2 -translate-y-1/2 w-6 h-6 text-gray-600" />
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}