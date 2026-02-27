import svgPaths from "../../imports/svg-yx9r3vp7pb";
import { motion } from "motion/react";
import bgImage from "../../assets/img_01.png";

export default function Section02() {
  return (
    <section className="bg-[#0062FF] h-screen w-full flex items-center justify-center relative overflow-hidden" data-name="02_Section">
      {/* Background Image */}
      <div className="absolute inset-0 w-full h-full">
        <img 
          src={bgImage} 
          alt="" 
          className="w-full h-full object-cover"
        />
      </div>
      
      {/* Desktop layout */}
      <motion.div 
        className="hidden md:block absolute left-[120px] top-[670px] -translate-y-1/2"
        initial={{ x: -100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
      >
        <div className="mb-[30px] ml-[2px]" data-name="8180-Lock-up">
          <div className="h-[51.93px] w-[27.70px]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 39.5677 74.1887">
              <path d={svgPaths.p2f08900} fill="var(--fill-0, white)" id="Rectangle 62" />
            </svg>
          </div>
        </div>
        <div className="font-['Agdasima:Regular',sans-serif] leading-[0.76] not-italic text-white tracking-[-2px]">
          <p className="mb-0 text-[80px]">We are Designers</p>
        </div>
        <p className="font-['Open_Sauce_Sans:Regular',sans-serif] leading-none mt-[20px] not-italic text-white tracking-[-0.64px] text-[27px]">
          we just want to be productive
        </p>
      </motion.div>

      {/* Mobile layout */}
      <motion.div 
        className="md:hidden absolute left-[52px] top-[calc(50%+130px)] -translate-y-1/2"
        initial={{ x: -100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
      >
        <div className="mb-[20px] ml-[2px]" data-name="8180-Lock-up">
          <div className="h-[41.731px] w-[22.257px]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 39.5677 74.1887">
              <path d={svgPaths.p2f08900} fill="var(--fill-0, white)" id="Rectangle 62" />
            </svg>
          </div>
        </div>
        <div className="font-['Agdasima:Regular',sans-serif] leading-[0.77] not-italic text-white tracking-[-1.24px]">
          <p className="mb-0 text-[58px]">We are<br />Designers</p>
        </div>
        <p className="font-['Open_Sauce_Sans:Regular',sans-serif] leading-none mt-[12px] not-italic text-white tracking-[-0.64px] text-[15px]">
          we just want<br />to be productive
        </p>
      </motion.div>
    </section>
  );
}
