import { motion } from "motion/react";
import { Heart, Users, Award } from "lucide-react";
import LogoArrowBlue from "@/imports/LogoArrowBlue1";
import { CountUp } from "@/app/components/CountUp";

export function AboutV2() {
  return (
    <section className="px-6 py-8 max-w-[1600px] mx-auto">
      
      {/* Section Label */}
      <motion.p
        className="text-sm tracking-wider uppercase text-[#00AAFF] mb-4"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        Our Story
      </motion.p>

      <div className="grid md:grid-cols-2 gap-16 items-start">
        {/* Left Side - Manifesto Title */}
        <motion.div
          className="relative"
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="border border-white/10 p-8 md:p-12 rounded-lg bg-gradient-to-br from-white/5 to-transparent backdrop-blur-sm shadow-[0_8px_32px_rgba(0,0,0,0.3)] relative overflow-hidden">
            {/* Ethereal Background Image */}
            <div className="absolute inset-0 opacity-10 mix-blend-overlay">
              <img 
                src="https://images.unsplash.com/photo-1767032701910-6efa456b4228?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhYnN0cmFjdCUyMGxpZ2h0JTIwcHJpc20lMjBldGhlcmVhbHxlbnwxfHx8fDE3NjkwNzAwMjV8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt=""
                className="w-full h-full object-cover"
              />
            </div>
            <div className="relative z-10">
              <h2 className="text-6xl md:text-7xl leading-[1.1] tracking-tight">
                Built by <span className="bg-gradient-to-r from-[#00AAFF] to-[#0088FF] bg-clip-text text-transparent inline-block" style={{ fontFamily: 'Agdasima, sans-serif', fontWeight: 400 }}>People Like You</span>
              </h2>
              <div className="mt-8 pt-8 border-t border-white/10">
                <p className="text-xl text-gray-300 tracking-wide mb-2">We've been there.</p>
                <p className="text-xl text-gray-300 tracking-wide mb-2">The late nights. The frustration.</p>
                <p className="text-xl text-[#00AAFF] tracking-wide">We built 8180 to change that.</p>
              </div>
            </div>
          </div>

          {/* Values Cards */}
          <div className="grid grid-cols-1 gap-4 mt-6">
            <motion.div 
              className="border border-white/20 bg-black/30 backdrop-blur-md p-6 rounded-md flex items-start gap-4 hover:border-[#00AAFF]/50 hover:bg-[#00AAFF]/5 transition-all duration-300 group"
              whileHover={{ x: 5 }}
              transition={{ duration: 0.2 }}
            >
              <motion.div
                whileHover={{ scale: 1.2, rotate: 10 }}
                transition={{ duration: 0.3 }}
              >
                <Heart className="w-6 h-6 text-[#00AAFF] flex-shrink-0 mt-1 group-hover:scale-110 transition-transform" />
              </motion.div>
              <div>
                <h4 className="text-lg mb-1 text-[24px]">Human First</h4>
                <p className="text-sm text-gray-300 text-[16px]">We design for real people with real problems. Your success is our purpose.</p>
              </div>
            </motion.div>
            <motion.div 
              className="border border-white/20 bg-black/30 backdrop-blur-md p-6 rounded-md flex items-start gap-4 hover:border-[#00AAFF]/50 hover:bg-[#00AAFF]/5 transition-all duration-300 group"
              whileHover={{ x: 5 }}
              transition={{ duration: 0.2 }}
            >
              <motion.div
                whileHover={{ scale: 1.2, rotate: -10 }}
                transition={{ duration: 0.3 }}
              >
                <Users className="w-6 h-6 text-[#00AAFF] flex-shrink-0 mt-1 group-hover:scale-110 transition-transform" />
              </motion.div>
              <div>
                <h4 className="text-lg mb-1 text-[24px]">True Partnership</h4>
                <p className="text-sm text-gray-300 text-[16px]">We're not vendors. We're your team. Your wins are our wins.</p>
              </div>
            </motion.div>
            <motion.div 
              className="border border-white/20 bg-black/30 backdrop-blur-md p-6 rounded-md flex items-start gap-4 hover:border-[#00AAFF]/50 hover:bg-[#00AAFF]/5 transition-all duration-300 group"
              whileHover={{ x: 5 }}
              transition={{ duration: 0.2 }}
            >
              <motion.div
                whileHover={{ scale: 1.2, rotate: 10 }}
                transition={{ duration: 0.3 }}
              >
                <Award className="w-6 h-6 text-[#00AAFF] flex-shrink-0 mt-1 group-hover:scale-110 transition-transform" />
              </motion.div>
              <div>
                <h4 className="text-lg mb-1 text-[24px]">Built to Last</h4>
                <p className="text-sm text-gray-300 text-[16px]">We create solutions you can depend on for years, not months.</p>
              </div>
            </motion.div>
          </div>
        </motion.div>

        {/* Right Side - Story with Better Hierarchy */}
        <motion.div
          className="space-y-8"
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          {/* Main Story */}
          <div className="border-l-2 border-[#00AAFF] pl-6">
            <div className="w-4 h-6 mb-0">
              <LogoArrowBlue />
            </div>
            <h3 className="text-4xl mb-4 tracking-tight text-[40px]">The Story Behind 8180</h3>
            <p className="text-lg text-[rgb(255,255,255)] leading-relaxed mb-4">
              We started 8180 after watching too many talented people lose themselves in broken workflows, 
              endless meetings, and tools that promised everything but delivered frustration.
            </p>
            <p className="text-lg text-[rgb(255,255,255)] leading-relaxed mb-4">
              We knew there was a better way. A way to build technology that serves people—not the other way around. 
              A way to give founders and teams the freedom to focus on their craft, their customers, and what they love.
            </p>
            <p className="text-lg text-[rgb(255,255,255)] leading-relaxed">
              Every project we take on, we ask ourselves: "Does this make someone's life better?" 
              If the answer isn't a resounding yes, we don't build it.
            </p>
          </div>

          {/* What Makes Us Different */}
          <div className="border border-white/10 bg-gradient-to-br from-white/5 to-transparent p-8 rounded-lg backdrop-blur-sm">
            <h4 className="text-2xl mb-4 text-[#00AAFF] tracking-tight text-[32px]">How We're Different</h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <span className="text-[#00AAFF] mt-1">→</span>
                <p className="text-gray-300 leading-relaxed">
                  <strong className="text-white">We Listen First:</strong> Your vision drives every decision we make.
                </p>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#00AAFF] mt-1">→</span>
                <p className="text-gray-300 leading-relaxed">
                  <strong className="text-white">We Care About Impact:</strong> It's not about features—it's about transforming how you work and live.
                </p>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#00AAFF] mt-1">→</span>
                <p className="text-gray-300 leading-relaxed">
                  <strong className="text-white">We Build Relationships:</strong> We want to be part of your story for years, not just one project.
                </p>
              </li>
            </ul>
          </div>
        </motion.div>
      </div>
    </section>
  );
}