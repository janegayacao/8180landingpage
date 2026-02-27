import { motion, AnimatePresence } from 'motion/react';
import svgPaths from "../../imports/svg-sls13oas0q";
import imgIcon1 from "../../assets/51ec98fbeb316106fb773ab8aaee47ee13e542e3.png";
import imgIcon2 from "../../assets/c1d83268fafb4175a3e24c84f58629b616274c5b.png";
import imgIcon3 from "../../assets/0826be63dd13e18a191bf6f4da8795d78712350a.png";

interface Service {
  icon: string;
  title: string;
  description: string;
}

interface CardModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  description: string;
  backgroundImage: string;
  services: Service[];
}

export default function CardModal({ isOpen, onClose, title, description, backgroundImage, services }: CardModalProps) {
  return (
    <AnimatePresence mode="wait">
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 bg-black/80 z-[70]"
            onClick={onClose}
            style={{ pointerEvents: 'auto' }}
            onAnimationStart={() => {
              // Ensure pointer events are enabled when animation starts
            }}
          />
          
          {/* Modal */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="fixed inset-[40px] md:inset-[60px] bg-[#121212] rounded-[20px] overflow-hidden z-[80]"
          >
            {/* Background Image with 10% opacity */}
            <div className="absolute inset-0 opacity-10">
              <img 
                src={backgroundImage} 
                alt="" 
                className="w-full h-full object-cover object-right"
              />
            </div>

            {/* Blue gradient blurred circles */}
            <div className="absolute h-[800px] md:h-[1120px] right-[-300px] md:right-[-669px] top-[-200px] md:top-[-860px] w-[800px] md:w-[1307px] pointer-events-none">
              <div className="absolute inset-[-44.64%_-38.26%]">
                <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 2307 2120">
                  <g filter="url(#filter0_f_modal_1)" id="Ellipse 2" opacity="0.2">
                    <ellipse cx="1153.5" cy="1060" fill="#0062FF" rx="653.5" ry="560" />
                  </g>
                  <defs>
                    <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="2120" id="filter0_f_modal_1" width="2307" x="0" y="0">
                      <feFlood floodOpacity="0" result="BackgroundImageFix" />
                      <feBlend in="SourceGraphic" in2="BackgroundImageFix" mode="normal" result="shape" />
                      <feGaussianBlur result="effect1_foregroundBlur_modal_1" stdDeviation="250" />
                    </filter>
                  </defs>
                </svg>
              </div>
            </div>
            <div className="absolute h-[800px] md:h-[1120px] left-[-300px] md:left-[-669px] bottom-[-200px] md:bottom-[-860px] w-[800px] md:w-[1307px] pointer-events-none">
              <div className="absolute inset-[-44.64%_-38.26%]">
                <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 2307 2120">
                  <g filter="url(#filter0_f_modal_2)" id="Ellipse 2" opacity="0.2">
                    <ellipse cx="1153.5" cy="1060" fill="#0062FF" rx="653.5" ry="560" />
                  </g>
                  <defs>
                    <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="2120" id="filter0_f_modal_2" width="2307" x="0" y="0">
                      <feFlood floodOpacity="0" result="BackgroundImageFix" />
                      <feBlend in="SourceGraphic" in2="BackgroundImageFix" mode="normal" result="shape" />
                      <feGaussianBlur result="effect1_foregroundBlur_modal_2" stdDeviation="250" />
                    </filter>
                  </defs>
                </svg>
              </div>
            </div>

            {/* Close button */}
            <button
              onClick={onClose}
              className="absolute top-[20px] md:top-[40px] right-[20px] md:right-[40px] z-[90] text-white/60 hover:text-white transition-colors text-3xl md:text-4xl leading-none"
            >
              ×
            </button>

            {/* Content */}
            <div 
              className="relative z-10 h-full overflow-y-auto px-[24px] md:px-[110px] py-[24px] md:py-[140px]"
              onWheel={(e) => e.stopPropagation()}
              onTouchStart={(e) => e.stopPropagation()}
              onTouchEnd={(e) => e.stopPropagation()}
              onTouchMove={(e) => e.stopPropagation()}
            >
              {/* Blue triangle lockup */}
              <div className="mb-[20px] md:mb-[30px]">
                <div className="h-[30px] md:h-[37.094px] w-[16px] md:w-[19.784px]">
                  <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 19.7838 37.0943">
                    <path d={svgPaths.p2cbf2600} fill="url(#paint0_linear_modal)" id="Rectangle 63" />
                    <defs>
                      <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_modal" x1="9.89192" x2="9.89192" y1="0" y2="37.0943">
                        <stop stopColor="#00AAFF" />
                        <stop offset="1" stopColor="#0062FF" />
                      </linearGradient>
                    </defs>
                  </svg>
                </div>
              </div>

              {/* Title */}
              <h2 className="font-['Agdasima:Regular',sans-serif] leading-[0.76] not-italic text-[28px] md:text-[46px] text-white tracking-[-0.56px] md:tracking-[-0.92px] mb-[10px] md:mb-[15px] whitespace-pre-wrap">
                {title}
              </h2>

              {/* Description */}
              <p className="font-['Open_Sauce_Sans:Regular',sans-serif] leading-[1.2] not-italic text-[9px] md:text-[16px] text-white tracking-[-0.18px] md:tracking-[-0.32px] mb-[70px] md:mb-[90px] max-w-[300px] md:max-w-[400px]">
                {description}
              </p>

              {/* Services Grid */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-[40px] md:gap-[60px]">
                {services.map((service, index) => (
                  <div key={index} className="flex flex-col gap-[20px]">
                    {/* Icon */}
                    <div className="w-[60px] h-[60px] md:w-[85px] md:h-[85px]">
                      <img 
                        src={service.icon} 
                        alt="" 
                        className="w-full h-full object-cover"
                      />
                    </div>
                    
                    {/* Title */}
                    <h3 className="font-['Agdasima:Regular',sans-serif] leading-[0.76] not-italic md:text-[46.728px] text-white tracking-[-0.72px] md:tracking-[-0.9346px] whitespace-pre-wrap text-[32px]">
                      {service.title}
                    </h3>
                    
                    {/* Description */}
                    <p className="font-['Open_Sauce_Sans:Regular',sans-serif] leading-[1.2] not-italic md:text-[18.691px] text-white tracking-[-0.28px] md:tracking-[-0.3738px] text-[14px]">
                      {service.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}

// Export the icon images for use in Section05
export const serviceIcons = {
  icon1: imgIcon1,
  icon2: imgIcon2,
  icon3: imgIcon3,
};