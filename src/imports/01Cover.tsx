import svgPaths from "./svg-yx9r3vp7pb";
import img1 from "../assets/68c8afef4b981d2bb93c294945dc9618ef02d8db.png";
import img2 from "../assets/62aff417ced7a56aae2bbd27723dec353f8d1456.png";
import img3 from "../assets/cc16cd5f447f491e0ef13d470c9368a51176b63f.png";
import img4 from "../assets/235c4ac7f3f921b534186d3c4bac15da85960d1a.png";
import img5 from "../assets/4bc1dd60c35aea2b18be4b339a9d8bf431958e8f.png";
import img6 from "../assets/0923bd9a0442d945904dff7d13ea19aeb647775b.png";
// Mobile-specific images
import mobileImg1 from "../assets/da9a88b258a3f0db86c4cbca852e3efe137371e7.png";
import mobileImg2 from "../assets/9b75d61e75ef28b34e051c5693bf8676609661d0.png";
import mobileImg3 from "../assets/8a26460070f7c8102e96bc4341c69d7c6771a9ae.png";
import mobileImg4 from "../assets/31309631e9ed40d1b2fbc841f5d93cda122cad94.png";
import mobileImg5 from "../assets/d34f0cca7b7853bdf9054113f65762f2414c734e.png";
import mobileImg6 from "../assets/f7c764e97a34a96c5c5d3b6ca1b773ab7ff71ef3.png";
import { motion, AnimatePresence } from "motion/react";
import { useState, useEffect } from "react";

function KenBurnsSlideshow() {
  // Desktop images (current images)
  const desktopImages = [img1, img2, img3, img4, img5, img6];
  
  // Mobile images - 3:4 ratio (1080x1440)
  const mobileImages = [mobileImg1, mobileImg2, mobileImg3, mobileImg4, mobileImg5, mobileImg6];
  
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);
  const [currentIndex, setCurrentIndex] = useState(0);
  
  // Detect screen size changes
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);
  
  // Select the appropriate image array based on screen size
  const images = isMobile ? mobileImages : desktopImages;

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 6000); // Change image every 6 seconds

    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <div className="absolute h-full overflow-clip right-0 top-0 w-full" data-name="2">
      <AnimatePresence initial={false}>
        <motion.div
          key={currentIndex}
          className="absolute inset-0"
          initial={{ scale: 1, opacity: 0 }}
          animate={{ scale: 1.15, opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ 
            scale: { duration: 6, ease: "linear" },
            opacity: { duration: 1 }
          }}
        >
          <img 
            alt="" 
            className="absolute inset-0 size-full object-cover pointer-events-none" 
            src={images[currentIndex]} 
          />
        </motion.div>
      </AnimatePresence>
    </div>
  );
}

function MainContent() {
  return (
    <>
      {/* Desktop layout */}
      <motion.div 
        className="hidden md:block absolute left-[120px] top-[520px] -translate-y-1/2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.5, ease: "easeOut" }}
      >
        <div className="mb-[30px] ml-[2px]" data-name="8180-Lock-up">
          <div className="h-[51.93px] w-[27.70px]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 39.5677 74.1887">
              <path d={svgPaths.p2f08900} fill="var(--fill-0, white)" id="Rectangle 62" />
            </svg>
          </div>
        </div>
        <div className="font-['Agdasima:Regular',sans-serif] leading-[0.76] not-italic text-white tracking-[-2px]">
          <p className="mb-0 text-[80px]">Human Productivity</p>
          <p className="text-[80px]">through Better Design</p>
        </div>
        <p className="font-['Open_Sauce_Sans:Regular',sans-serif] leading-none mt-[20px] not-italic text-white tracking-[-0.64px] text-[32px]">
          The 8180 Studio Principles.
        </p>
      </motion.div>

      {/* Mobile layout */}
      <motion.div 
        className="md:hidden absolute left-[52px] top-[calc(50%+120px)] -translate-y-1/2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.5, ease: "easeOut" }}
      >
        <div className="mb-[16px] ml-[2px]" data-name="8180-Lock-up">
          <div className="h-[34px] w-[18.15px]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 39.5677 74.1887">
              <path d={svgPaths.p2f08900} fill="var(--fill-0, white)" id="Rectangle 62" />
            </svg>
          </div>
        </div>
        <div className="font-['Agdasima:Regular',sans-serif] leading-[0.77] not-italic text-white tracking-[-1px]">
          <p className="mb-0 text-[54px]">
            Human
            <br />
            Productivity
            <br />
            <span className="inline-block -mt-[3px]">through</span>
            <br />
            Better Design
          </p>
        </div>
        <p className="font-['Open_Sauce_Sans:Regular',sans-serif] leading-none mt-[16px] not-italic text-white tracking-[-0.48px] text-[18px]">
          The 8180 Studio Principles.
        </p>
      </motion.div>
    </>
  );
}

export default function Component01Cover() {
  return (
    <section className="bg-[#0062ff] relative h-screen w-full" data-name="01_Cover">
      <KenBurnsSlideshow />
      <motion.div 
        className="-translate-y-1/2 absolute h-[1526.43744px] md:h-[1927.315px] left-[-480px] md:left-[-200px] top-[calc(50%+199.73px)] md:top-[calc(50%-0.27px)] w-[818.2944px] md:w-[1033.2px]"
        initial={{ x: -1200 }}
        animate={{ x: 0 }}
        exit={{ x: 2000, scale: 3 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1148 2141.46">
          <path d={svgPaths.p1dc58a00} fill="url(#paint0_linear_2_82)" id="Rectangle 64" />
          <defs>
            <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_2_82" x1="1148" x2="-634.832" y1="-0.000129228" y2="949.628">
              <stop stopColor="#00AAFF" />
              <stop offset="1" stopColor="#0062FF" />
            </linearGradient>
          </defs>
        </svg>
      </motion.div>
      <MainContent />
    </section>
  );
}