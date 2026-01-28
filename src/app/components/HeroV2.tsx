import { motion, useScroll, useTransform } from "motion/react";
import { ArrowRight } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import LogoArrowBlue from "@/imports/LogoArrowBlue1";
import MaskGroup from "@/imports/MaskGroup";
import LogoIconWhite from "@/imports/LogoIconWhite1";

interface HeroV2Props {
  onOpenContact: () => void;
}

export function HeroV2({ onOpenContact }: HeroV2Props) {
  const { scrollY } = useScroll();
  const arrowRef = useRef<HTMLDivElement>(null);
  const [lineHeight, setLineHeight] = useState<number>(0);
  
  // Parallax effects
  const backgroundY = useTransform(scrollY, [0, 500], [0, 150]);
  const contentY = useTransform(scrollY, [0, 500], [0, -50]);
  const opacity = useTransform(scrollY, [0, 300], [1, 0]);

  // Calculate dynamic line height
  useEffect(() => {
    const calculateLineHeight = () => {
      if (arrowRef.current) {
        const arrowTop = arrowRef.current.getBoundingClientRect().top;
        const lineTop = 100;
        const calculatedHeight = arrowTop - lineTop - 10;
        setLineHeight(calculatedHeight > 0 ? calculatedHeight : 0);
      }
    };

    calculateLineHeight();
    window.addEventListener('resize', calculateLineHeight);
    const timer = setTimeout(calculateLineHeight, 100);

    return () => {
      window.removeEventListener('resize', calculateLineHeight);
      clearTimeout(timer);
    };
  }, []);

  return (
    <section className="min-h-screen flex items-end justify-start py-20 pb-6 md:pb-[40px] relative overflow-hidden bg-gradient-to-b from-[#121212] to-[#000D24]">

      {/* Upper Right Corner Text */}
      <motion.div
        className="absolute top-12 right-6 md:top-10 md:right-10 text-right z-20"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
      >
        <div className="text-[8px] md:text-[10px] text-white/50 leading-tight" style={{ fontFamily: 'Open Sans, sans-serif' }}>
          <div>Digital and Creative Transformation</div>
          <div>Innovation Design</div>
        </div>
      </motion.div>

      {/* Animated Mesh Gradient Background with Parallax */}
      <motion.div 
        className="absolute inset-0 opacity-30"
        style={{ y: backgroundY }}
      >
        <motion.div 
          className="absolute w-96 h-96 bg-[#0053d9] rounded-full mix-blend-multiply filter blur-[128px]"
          animate={{
            scale: [1, 1.2, 1],
            x: ['10vw', '60vw', '10vw'],
            y: ['10vh', '50vh', '10vh'],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div 
          className="absolute w-96 h-96 bg-[#0053d9] rounded-full mix-blend-multiply filter blur-[128px]"
          animate={{
            scale: [1, 1.3, 1],
            x: ['70vw', '20vw', '70vw'],
            y: ['20vh', '60vh', '20vh'],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2
          }}
        />
        <motion.div 
          className="absolute w-96 h-96 bg-[#0053d9] rounded-full mix-blend-multiply filter blur-[128px]"
          animate={{
            scale: [1, 1.1, 1],
            x: ['40vw', '80vw', '40vw'],
            y: ['70vh', '30vh', '70vh'],
          }}
          transition={{
            duration: 18,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 4
          }}
        />
      </motion.div>

      {/* Floating Particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(30)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-[#00AAFF] rounded-full shadow-[0_0_10px_rgba(0,170,255,0.8)]"
            initial={{
              x: Math.random() * window.innerWidth,
              y: window.innerHeight + 100,
              opacity: Math.random() * 0.6 + 0.4,
            }}
            animate={{
              y: -100,
              opacity: [null, 0],
            }}
            transition={{
              duration: Math.random() * 4 + 4,
              repeat: Infinity,
              delay: Math.random() * 8,
              ease: "linear"
            }}
          />
        ))}
      </div>

      {/* Animated Scan Lines */}
      <motion.div 
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: 'linear-gradient(0deg, transparent 0%, rgba(0, 170, 255, 0.03) 50%, transparent 100%)',
          backgroundSize: '100% 4px',
        }}
        animate={{
          backgroundPosition: ['0% 0%', '0% 100%'],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "linear"
        }}
      />

      {/* Logo Grid Pattern Background */}
      <motion.div 
        className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-screen overflow-hidden pointer-events-none"
        style={{
          filter: 'brightness(2) contrast(1.5)',
        }}
        animate={{
          opacity: [0.08, 0.15, 0.08],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      >
        <MaskGroup />
      </motion.div>

      {/* Glowing Orbs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(5)].map((_, i) => (
          <motion.div
            key={`orb-${i}`}
            className="absolute w-2 h-2 rounded-full bg-[#0053d9] shadow-[0_0_20px_rgba(0,83,217,0.8)]"
            initial={{
              x: Math.random() * window.innerWidth,
              y: window.innerHeight + 100,
              scale: Math.random() * 0.5 + 0.5,
            }}
            animate={{
              y: -100,
              x: [null, `+=${Math.random() * 200 - 100}`],
            }}
            transition={{
              duration: Math.random() * 10 + 15,
              repeat: Infinity,
              delay: Math.random() * 5,
              ease: "linear"
            }}
          />
        ))}
      </div>

      {/* Vertical Line - Left Aligned */}
      {lineHeight > 0 && (
        <motion.div
          className="absolute left-7 md:left-11 top-[100px] w-[1.5px] bg-white/20 z-10"
          style={{ height: `${lineHeight}px` }}
          initial={{ scaleY: 0, opacity: 0 }}
          animate={{ scaleY: 1, opacity: 1 }}
          transition={{ duration: 1.5, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
        />
      )}

      {/* White Icon Logo - Bottom Right on Desktop, Hidden on Mobile (will show below CTA) */}
      <motion.div
        className="hidden md:block fixed bottom-6 right-6 w-18 h-auto z-20"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
      >
        <LogoIconWhite />
      </motion.div>

      {/* Copyright Text - Bottom Center */}
      <motion.div
        className="absolute bottom-5 md:bottom-6 left-6 md:left-1/2 md:-translate-x-1/2 z-20"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.6, ease: [0.22, 1, 0.36, 1] }}
      >
        <div className="text-[6px] text-white/50 whitespace-nowrap" style={{ fontFamily: 'Open Sans, sans-serif' }}>
          2026 8180.Studio™ | ALL RIGHTS RESERVED
        </div>
      </motion.div>

      <div className="w-full max-w-[1600px] px-6 md:px-10">
        <motion.div 
          className="max-w-7xl relative z-10"
          style={{ y: contentY, opacity }}
        >
          {/* Brand Arrow */}
          <motion.div
            className="w-8 h-12 mb-2"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            ref={arrowRef}
          >
            <LogoArrowBlue />
          </motion.div>

          {/* Main Headline with Gradient Text */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
          >
            <h1 className="text-[clamp(3.2rem,12vw,10rem)] md:text-8xl lg:text-[6rem] leading-[0.85] tracking-tighter mb-0 pb-4 md:pb-6">
              <span className="bg-gradient-to-b from-[#00AAFF] to-[#0088FF] bg-clip-text text-transparent font-light inline-block pr-1 pb-3.5 drop-shadow-[0_0_30px_rgba(0,170,255,0.5)]" style={{ fontFamily: 'Agdasima, sans-serif' }}>Human Productivity</span><br />
              <span className="text-white font-light inline-block pr-1 pb-3" style={{ fontFamily: 'Agdasima, sans-serif' }}>through Better Design</span>
            </h1>
          </motion.div>

          {/* Subheadline */}
          <motion.p
            className="text-lg md:text-xl lg:text-2xl text-[rgb(255,255,255)] max-w-lg mb-8 leading-[1.5]"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          >
            Building smart web tools that clear the clutter and free your creativity.
          </motion.p>

          {/* CTA Buttons with Enhanced Effects */}
          <motion.div
            className="flex flex-col sm:flex-row gap-3 md:gap-4 items-start sm:items-center w-full sm:w-auto"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
          >
            {/* Primary CTA with Animated Border */}
            <motion.button
              onClick={onOpenContact}
              className="group relative bg-gradient-to-b from-[#00AAFF] to-[#0088FF] text-white px-8 md:px-10 py-4 md:py-5 text-base md:text-lg border border-[#00AAFF] rounded-md shadow-[0_0_30px_rgba(0,170,255,0.6),0_8px_32px_rgba(0,0,0,0.4)] active:scale-[0.98] md:hover:shadow-[0_0_50px_rgba(0,170,255,0.9),0_12px_48px_rgba(0,0,0,0.5)] md:hover:scale-[1.05] transition-all duration-300 inline-flex items-center justify-center gap-3 overflow-hidden w-auto"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700" />
              <motion.span 
                className="relative z-10 font-medium"
                whileHover={{ letterSpacing: "0.05em" }}
                transition={{ duration: 0.2 }}
              >
                Let's Talk
              </motion.span>
              <motion.div
                animate={{ x: [0, 4, 0] }}
                transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
              >
                <ArrowRight className="w-5 h-5 relative z-10" />
              </motion.div>
            </motion.button>

            {/* Secondary CTA removed for temporary landing page */}
          </motion.div>

          {/* White Icon Logo - Below CTA on Mobile Only */}
          <motion.div
            className="md:hidden w-18 h-auto mt-8 ml-auto"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
          >
            <LogoIconWhite />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}