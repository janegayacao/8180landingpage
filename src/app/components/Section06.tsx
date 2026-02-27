import svgPathsBlueTriangle from "../../imports/svg-sls13oas0q";
import { motion } from "motion/react";
import bgImage from "../../assets/img_04.png";
import Section6Graphic from "../../imports/Section6";

export default function Section06() {
  return (
    <section className="bg-[#0062FF] h-screen w-full flex items-center justify-center relative overflow-hidden" data-name="06_Section">
      {/* Background Image */}
      <div className="absolute inset-0 w-full h-full">
        <img 
          src={bgImage} 
          alt="" 
          className="w-full h-full object-cover"
        />
      </div>

      {/* Decorative graphic aligned to right */}
      <div className="absolute bottom-0 left-[80px] w-auto pointer-events-none scale-50 origin-bottom-left md:scale-100 md:top-0 md:right-0 md:left-auto md:bottom-0 md:h-full md:flex md:items-stretch md:justify-end md:origin-right h-[720px]">
        <div className="h-full" style={{ aspectRatio: '1333/1080' }}>
          <Section6Graphic />
        </div>
      </div>
      
      {/* Desktop layout */}
      <div className="hidden md:flex flex-col absolute left-[120px] right-[120px] top-[136px] bottom-[80px]">
        <motion.div
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
        >
          <div className="mb-[30px] ml-[2px]" data-name="8180-Lock-up">
            <div className="h-[51.93px] w-[27.70px]">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 19.7838 37.0943">
                <path d={svgPathsBlueTriangle.p2cbf2600} fill="url(#paint0_linear_section6_desktop)" id="Rectangle 63" />
                <defs>
                  <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_section6_desktop" x1="9.89192" x2="9.89192" y1="0" y2="37.0943">
                    <stop stopColor="#00AAFF" />
                    <stop offset="1" stopColor="#0062FF" />
                  </linearGradient>
                </defs>
              </svg>
            </div>
          </div>
          <div className="font-['Agdasima',sans-serif] leading-[0.76] not-italic text-white tracking-[-2px]">
            <p className="mb-0 text-[80px]">Work with Us</p>
          </div>
          <p className="font-['Open Sauce One',sans-serif] leading-none mt-[20px] not-italic text-white tracking-[-0.64px] text-[27px] max-w-[800px]">
            Business, Brands, and Collaborations.
          </p>
          <div className="font-['Agdasima',sans-serif] leading-[1.2] mt-[104px] not-italic text-[#0062FF] tracking-[-1.24px]">
            <p className="mb-0 text-[72px]">
              <a href="mailto:info@8180.studio" className="hover:opacity-80 transition-opacity">
                info@8180.studio
              </a>
            </p>
            <p className="mb-0 text-[72px]">
              <a href="mailto:accounts@8180.studio" className="hover:opacity-80 transition-opacity">
                accounts@8180.studio
              </a>
            </p>
          </div>
        </motion.div>
      </div>

      {/* Mobile layout */}
      <div className="md:hidden flex flex-col absolute left-[52px] right-[52px] top-[84px] bottom-[40px]">
        <motion.div
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
        >
          <div className="mb-[20px] ml-[2px]" data-name="8180-Lock-up">
            <div className="h-[41.731px] w-[22.257px]">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 19.7838 37.0943">
                <path d={svgPathsBlueTriangle.p2cbf2600} fill="url(#paint0_linear_section6_mobile)" id="Rectangle 63" />
                <defs>
                  <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_section6_mobile" x1="9.89192" x2="9.89192" y1="0" y2="37.0943">
                    <stop stopColor="#00AAFF" />
                    <stop offset="1" stopColor="#0062FF" />
                  </linearGradient>
                </defs>
              </svg>
            </div>
          </div>
          <div className="font-['Agdasima',sans-serif] leading-[0.77] not-italic text-white tracking-[-1.24px]">
            <p className="mb-0 text-[58px]">Work with Us</p>
          </div>
          <p className="font-['Open Sauce One',sans-serif] leading-none mt-[12px] not-italic text-white tracking-[-0.64px] text-[15px] max-w-[280px]">
            Business, Brands, and Collaborations.
          </p>
          <div className="font-['Agdasima',sans-serif] leading-[1.2] mt-[104px] not-italic text-[#0062FF] tracking-[-1.24px]">
            <p className="mb-0 text-[44px]">
              <a href="mailto:info@8180.studio" className="hover:opacity-80 transition-opacity">
                info@8180.studio
              </a>
            </p>
            <p className="mb-0 text-[44px]">
              <a href="mailto:accounts@8180.studio" className="hover:opacity-80 transition-opacity">
                accounts@8180.studio
              </a>
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}