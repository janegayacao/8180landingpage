import { motion } from "motion/react";
import { Zap, Palette, Brain, Workflow, Globe, Megaphone, ArrowRight } from "lucide-react";
import LogoArrowBlue from "@/imports/LogoArrowBlue1";

export function ServicesV2() {
  return (
    <section className="px-6 py-8 pt-16 max-w-[1600px] mx-auto">
      {/* Section Header with Context */}
      <div className="max-w-full mb-12 md:mb-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          {/* Brand Arrow Accent */}
          <p className="text-sm tracking-wider uppercase text-[#00AAFF] mb-4">What We Create</p>
          <div className="w-5 h-7 mb-0">
            <LogoArrowBlue />
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl mb-4 md:mb-6 tracking-tight">
            Visual Identity. Digital Experiences.
          </h2>
          <p className="text-lg md:text-xl text-[rgb(255,255,255)] leading-relaxed">
            We design brands that stand out and interfaces that feel effortless—turning first impressions into lasting connections.
          </p>
        </motion.div>
      </div>

      {/* 4-Column Bento Grid */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 auto-rows-auto md:auto-rows-[280px]">
        {/* Large Card 1: Process Automation */}
        <motion.div
          className="md:col-span-2 md:row-span-2 relative group"
          initial={{ opacity: 0, y: 50, scale: 0.95 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        >
          {/* Glow Effect on Hover */}
          <div className="absolute inset-0 bg-gradient-to-br from-[#00AAFF]/20 to-[#0062FF]/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-2xl -z-10" />
          
          <div className="h-full border border-white/20 bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl p-8 rounded-lg shadow-[0_8px_32px_rgba(0,0,0,0.4)] hover:border-[#00AAFF]/60 hover:shadow-[0_8px_32px_rgba(0,170,255,0.2),0_16px_64px_rgba(0,0,0,0.5)] transition-all duration-500 flex flex-col justify-between relative overflow-hidden group-hover:scale-[1.01] group-hover:translate-y-[-2px]">
            {/* Neon Reflection Background Image */}
            <div className="absolute inset-0 opacity-5 mix-blend-overlay group-hover:opacity-10 transition-opacity duration-500">
              <img 
                src="https://images.unsplash.com/photo-1555531811-a852ac344c60?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwZXJzb24lMjByZWxpZWYlMjBmcmVlZG9tJTIwcmVsYXhlZHxlbnwxfHx8fDE3NjkwNzE3NzB8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt=""
                className="w-full h-full object-cover"
              />
            </div>
            {/* Animated Border Gradient */}
            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
              <div className="absolute inset-[-2px] bg-gradient-to-r from-[#00AAFF] via-[#0088FF] to-[#00AAFF] animate-gradient bg-[length:200%_auto] opacity-20 blur-sm" />
            </div>
            
            <div className="relative z-10">
              <motion.div 
                className="w-16 h-16 border border-[#00AAFF] rounded-md flex items-center justify-center mb-6 relative bg-[#00AAFF]/10 backdrop-blur-sm group-hover:scale-110 group-hover:shadow-[0_0_20px_rgba(0,170,255,0.4)] transition-all duration-300"
                whileHover={{ rotate: [0, -5, 5, -5, 0] }}
                transition={{ duration: 0.5 }}
              >
                <motion.div
                  animate={{ 
                    scale: [1, 1.1, 1],
                  }}
                  transition={{ 
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                >
                  <Zap className="w-8 h-8 text-[#FFFFFF]" />
                </motion.div>
              </motion.div>
              <h3 className="text-4xl mb-4 tracking-tight font-bold font-normal text-[40px]">Process Automation</h3>
              <p className="text-gray-200 text-lg leading-relaxed mb-4">
                Reclaim hours every week. Focus on what you love while smart systems handle the rest.
              </p>
              <ul className="space-y-2 text-gray-200">
                <li className="flex items-center gap-2">
                  <div className="w-4 h-4 flex-shrink-0">
                    <LogoArrowBlue />
                  </div>
                  <span>Get 15+ hours back every week</span>
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-4 h-4 flex-shrink-0">
                    <LogoArrowBlue />
                  </div>
                  <span>Peace of mind with reliable systems</span>
                </li>
              </ul>
            </div>

            {/* Nested Small Cards */}
            <div className="grid grid-cols-2 gap-3 mt-6 relative z-10">
              <div className="border border-white/20 bg-black/40 backdrop-blur-md p-4 rounded-md hover:border-[#00AAFF]/50 hover:bg-[#00AAFF]/10 transition-all duration-300 group/nested">
                <Brain className="w-6 h-6 text-[#00AAFF] mb-2 group-hover/nested:scale-110 transition-transform" />
                <p className="text-sm text-[16px]">AI Integration</p>
              </div>
              <div className="border border-white/20 bg-black/40 backdrop-blur-md p-4 rounded-md hover:border-[#00AAFF]/50 hover:bg-[#00AAFF]/10 transition-all duration-300 group/nested">
                <Workflow className="w-6 h-6 text-[#00AAFF] mb-2 group-hover/nested:scale-110 transition-transform" />
                <p className="text-sm text-[16px]">Workflow Optimization</p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Large Card 2: Creative Solutions */}
        <motion.div
          className="md:col-span-2 md:row-span-2 relative group"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          {/* Glow Effect on Hover */}
          <div className="absolute inset-0 bg-gradient-to-br from-[#00AAFF]/20 to-[#0062FF]/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-2xl -z-10" />
          
          <div className="h-full border border-white/20 bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl p-8 rounded-lg shadow-[0_8px_32px_rgba(0,0,0,0.4)] hover:border-[#00AAFF]/60 hover:shadow-[0_8px_32px_rgba(0,170,255,0.2),0_16px_64px_rgba(0,0,0,0.5)] transition-all duration-500 flex flex-col justify-between relative overflow-hidden group-hover:scale-[1.01] group-hover:translate-y-[-2px]">
            {/* Surreal Architecture Background Image */}
            <div className="absolute inset-0 opacity-5 mix-blend-overlay group-hover:opacity-10 transition-opacity duration-500">
              <img 
                src="https://images.unsplash.com/photo-1758873269276-9518d0cb4a0b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwZXJzb24lMjBlbmdhZ2VkJTIwY3JlYXRpdmUlMjB3b3JrfGVufDF8fHx8MTc2OTA3MTc3MXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt=""
                className="w-full h-full object-cover"
              />
            </div>
            {/* Animated Border Gradient */}
            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
              <div className="absolute inset-[-2px] bg-gradient-to-r from-[#00AAFF] via-[#0088FF] to-[#00AAFF] animate-gradient bg-[length:200%_auto] opacity-20 blur-sm" />
            </div>
            
            <div className="relative z-10">
              <motion.div 
                className="w-16 h-16 border border-[#00AAFF] rounded-md flex items-center justify-center mb-6 relative bg-[#00AAFF]/10 backdrop-blur-sm group-hover:scale-110 group-hover:shadow-[0_0_20px_rgba(0,170,255,0.4)] transition-all duration-300"
                whileHover={{ rotate: [0, 5, -5, 5, 0] }}
                transition={{ duration: 0.5 }}
              >
                <motion.div
                  animate={{ 
                    rotate: [0, 10, -10, 0],
                  }}
                  transition={{ 
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                >
                  <Palette className="w-8 h-8 text-[#FFFFFF]" />
                </motion.div>
              </motion.div>
              <h3 className="text-4xl mb-4 tracking-tight font-bold font-normal text-[40px]">Digital Experiences</h3>
              <p className="text-gray-200 text-lg leading-relaxed mb-4">
                Interfaces that feel intuitive. Interactions that delight. Design that converts.
              </p>
              <ul className="space-y-2 text-gray-200">
                <li className="flex items-center gap-2">
                  <div className="w-4 h-4 flex-shrink-0">
                    <LogoArrowBlue />
                  </div>
                  <span>Websites & mobile apps</span>
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-4 h-4 flex-shrink-0">
                    <LogoArrowBlue />
                  </div>
                  <span>UI/UX design systems</span>
                </li>
              </ul>
            </div>

            {/* Nested Small Cards */}
            <div className="grid grid-cols-2 gap-3 mt-6 relative z-10">
              <div className="border border-white/20 bg-black/40 backdrop-blur-md p-4 rounded-md hover:border-[#00AAFF]/50 hover:bg-[#00AAFF]/10 transition-all duration-300 group/nested">
                <Globe className="w-6 h-6 text-[#00AAFF] mb-2 group-hover/nested:scale-110 transition-transform" />
                <p className="text-sm text-[16px]">Web Design</p>
              </div>
              <div className="border border-white/20 bg-black/40 backdrop-blur-md p-4 rounded-md hover:border-[#00AAFF]/50 hover:bg-[#00AAFF]/10 transition-all duration-300 group/nested">
                <Brain className="w-6 h-6 text-[#00AAFF] mb-2 group-hover/nested:scale-110 transition-transform" />
                <p className="text-sm text-[16px]">UX Research</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}