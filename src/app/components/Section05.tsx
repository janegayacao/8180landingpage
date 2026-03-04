import svgPaths from "../../imports/svg-yx9r3vp7pb";
import svgPathsBlueTriangle from "../../imports/svg-sls13oas0q";
import { motion } from "motion/react";
import bgImage from "../../assets/img_04.png";
import Card1 from "../../imports/Card1";
import Card2 from "../../imports/Card2";
import CardModal, { serviceIcons } from "./CardModal";
import { useState } from "react";
import imgCard1Bg from "../../assets/img_05.png";
import imgCard2Bg from "../../assets/img_06.png";
import imgBrandIdentityIcon from "../../assets/icon_animate_04.png";
import imgOnlinePlatformsIcon from "../../assets/icon_animate_05.png";
import imgWebApplicationsIcon from "../../assets/icon_animate_06.png";
import ScrambleText from "./ScrambleText";

export default function Section05() {
  const [selectedCard, setSelectedCard] = useState<'card1' | 'card2' | null>(null);
  const [showSubhead, setShowSubhead] = useState(false);

  const card1ModalData = {
    title: "Digital\nTransformation",
    description: "User-centric digital experience that ensures consistency and effectivity for the customers.",
    backgroundImage: imgCard1Bg,
    services: [
      {
        icon: imgBrandIdentityIcon,
        title: "Brand Identity\nDirection & Strategy",
        description: "Designing a cohesive brand direction for your entire organization. We create the strategy for effective brand communication and ensure seamless implementation across all products, media, and content."
      },
      {
        icon: imgOnlinePlatformsIcon,
        title: "Online\nPlatforms",
        description: "Visually engaging brand and corporate online platforms interactively designed to showcase your unique identity."
      },
      {
        icon: imgWebApplicationsIcon,
        title: "Web\nApplications",
        description: "End-to-end design and development for all your business needs, regardless of your model. Bespoke applications, custom made specifically for your team and customer's needs."
      }
    ]
  };

  const card2ModalData = {
    title: "Innovation\nDesign",
    description: "User-centric digital technology integration optimizing workflow and operation.",
    backgroundImage: imgCard2Bg,
    services: [
      {
        icon: serviceIcons.icon1,
        title: "Efficiency\nDesign",
        description: "Analyzing current business operations to design and implement highly efficient, scalable workflows built for growth."
      },
      {
        icon: serviceIcons.icon2,
        title: "Automation\nDesign",
        description: "Leveraging advanced AI tools to automate repetitive, inefficient operational and marketing tasks."
      },
      {
        icon: serviceIcons.icon3,
        title: "AI Integration\nDesign",
        description: "End-to-end design and development for all your business needs, regardless of your model. Bespoke applications, custom made specifically for your team and customer's needs."
      }
    ]
  };

  return (
    <section className="bg-[#0062FF] h-screen w-full flex items-center justify-center relative overflow-hidden" data-name="05_Section">
      {/* Background Image */}
      <div className="absolute inset-0 w-full h-full">
        <img 
          src={bgImage} 
          alt="" 
          className="w-full h-full object-cover"
        />
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
                <path d={svgPathsBlueTriangle.p2cbf2600} fill="url(#paint0_linear_section5_desktop)" id="Rectangle 63" />
                <defs>
                  <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_section5_desktop" x1="9.89192" x2="9.89192" y1="0" y2="37.0943">
                    <stop stopColor="#00AAFF" />
                    <stop offset="1" stopColor="#0062FF" />
                  </linearGradient>
                </defs>
              </svg>
            </div>
          </div>
          <div className="font-['Agdasima',sans-serif] leading-[0.76] not-italic text-white tracking-[-2px]">
            <p className="mb-0 text-[80px]">
              <ScrambleText 
                text="Our Services" 
                delay={400}
                duration={2000}
              />
            </p>
          </div>
          <p className="font-['Open Sauce One',sans-serif] leading-none mt-[20px] not-italic text-white tracking-[-0.64px] text-[27px] max-w-[800px]">
            We provide user-centric design,<br />build, and integration.
          </p>
        </motion.div>

        {/* Cards Grid */}
        <motion.div 
          className="grid grid-cols-2 gap-[40px] mt-[60px]"
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
        >
          <div className="h-[460px] cursor-pointer transition-transform hover:scale-[1.02]" onClick={() => setSelectedCard('card1')}>
            <Card1 />
          </div>
          <div className="h-[460px] cursor-pointer transition-transform hover:scale-[1.02]" onClick={() => setSelectedCard('card2')}>
            <Card2 />
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
                <path d={svgPathsBlueTriangle.p2cbf2600} fill="url(#paint0_linear_section5_mobile)" id="Rectangle 63" />
                <defs>
                  <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_section5_mobile" x1="9.89192" x2="9.89192" y1="0" y2="37.0943">
                    <stop stopColor="#00AAFF" />
                    <stop offset="1" stopColor="#0062FF" />
                  </linearGradient>
                </defs>
              </svg>
            </div>
          </div>
          <div className="font-['Agdasima',sans-serif] leading-[0.77] not-italic text-white tracking-[-1.24px]">
            <p className="mb-0 text-[58px]">
              <ScrambleText 
                text="Our Services" 
                delay={400}
                duration={2000}
              />
            </p>
          </div>
          <p className="font-['Open Sauce One',sans-serif] leading-none mt-[12px] not-italic text-white tracking-[-0.64px] text-[15px] max-w-[280px]">
            We provide user-centric design,<br />build, and integration.
          </p>
        </motion.div>

        {/* Cards Grid */}
        <motion.div 
          className="grid grid-cols-1 gap-[20px] mt-[30px] overflow-y-auto"
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
        >
          <div className="h-[25vh] min-h-[180px] max-h-[240px] cursor-pointer active:scale-[0.98]" onClick={() => setSelectedCard('card1')}>
            <Card1 />
          </div>
          <div className="h-[25vh] min-h-[180px] max-h-[240px] cursor-pointer active:scale-[0.98]" onClick={() => setSelectedCard('card2')}>
            <Card2 />
          </div>
        </motion.div>
      </div>

      {/* Card Modal */}
      <CardModal
        isOpen={!!selectedCard}
        title={selectedCard === 'card1' ? card1ModalData.title : card2ModalData.title}
        description={selectedCard === 'card1' ? card1ModalData.description : card2ModalData.description}
        backgroundImage={selectedCard === 'card1' ? card1ModalData.backgroundImage : card2ModalData.backgroundImage}
        services={selectedCard === 'card1' ? card1ModalData.services : card2ModalData.services}
        onClose={() => setSelectedCard(null)}
      />
    </section>
  );
}