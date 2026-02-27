import Component01Cover from '../imports/01Cover';
import Lockup8180 from './components/Lockup8180';
import Section02 from './components/Section02';
import Section03 from './components/Section03';
import Section04 from './components/Section04';
import Section05 from './components/Section05';
import Section06 from './components/Section06';
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';

export default function App() {
  const [currentSection, setCurrentSection] = useState(0);
  const totalSections = 6;

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowDown' || e.key === 'ArrowRight') {
        setCurrentSection((prev) => Math.min(prev + 1, totalSections - 1));
      } else if (e.key === 'ArrowUp' || e.key === 'ArrowLeft') {
        setCurrentSection((prev) => Math.max(prev - 1, 0));
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  // Scroll wheel navigation (with debouncing)
  useEffect(() => {
    let isScrolling = false;
    let touchStartY = 0;
    let touchEndY = 0;

    const handleWheel = (e: WheelEvent) => {
      if (isScrolling) return;

      isScrolling = true;
      setTimeout(() => {
        isScrolling = false;
      }, 1200); // Debounce time

      if (e.deltaY > 0) {
        // Scroll down
        setCurrentSection((prev) => Math.min(prev + 1, totalSections - 1));
      } else if (e.deltaY < 0) {
        // Scroll up
        setCurrentSection((prev) => Math.max(prev - 1, 0));
      }
    };

    const handleTouchStart = (e: TouchEvent) => {
      touchStartY = e.touches[0].clientY;
    };

    const handleTouchEnd = (e: TouchEvent) => {
      if (isScrolling) return;
      
      touchEndY = e.changedTouches[0].clientY;
      const swipeDistance = touchStartY - touchEndY;
      const minSwipeDistance = 80; // Increased from default to make it less sensitive

      if (Math.abs(swipeDistance) > minSwipeDistance) {
        isScrolling = true;
        setTimeout(() => {
          isScrolling = false;
        }, 1200);

        if (swipeDistance > 0) {
          // Swiped up (next section)
          setCurrentSection((prev) => Math.min(prev + 1, totalSections - 1));
        } else {
          // Swiped down (previous section)
          setCurrentSection((prev) => Math.max(prev - 1, 0));
        }
      }
    };

    window.addEventListener('wheel', handleWheel, { passive: true });
    window.addEventListener('touchstart', handleTouchStart, { passive: true });
    window.addEventListener('touchend', handleTouchEnd, { passive: true });
    
    return () => {
      window.removeEventListener('wheel', handleWheel);
      window.removeEventListener('touchstart', handleTouchStart);
      window.removeEventListener('touchend', handleTouchEnd);
    };
  }, []);

  const sections = [
    <Component01Cover key="section-0" />,
    <Section02 key="section-1" />,
    <Section03 key="section-2" />,
    <Section04 key="section-3" />,
    <Section05 key="section-4" />,
    <Section06 key="section-5" />
  ];

  return (
    <div className="fixed inset-0 overflow-hidden">
      {/* Fixed 8180 Lockup - always on top */}
      <Lockup8180 onHireUsClick={() => setCurrentSection(5)} onCornerIconClick={() => setCurrentSection(0)} />
      
      {/* Section content with animations */}
      <AnimatePresence initial={false}>
        <motion.div
          key={currentSection}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.6, ease: "easeInOut" }}
          className="absolute inset-0"
        >
          {sections[currentSection]}
        </motion.div>
      </AnimatePresence>

      {/* Navigation dots */}
      <div className="fixed right-[22px] bottom-[100px] z-[60] flex flex-col gap-2 md:flex-row md:bottom-8 md:left-1/2 md:-translate-x-1/2 md:translate-y-0 md:right-auto md:top-auto md:gap-4">
        {Array.from({ length: totalSections }).map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSection(index)}
            className={`w-1.5 h-1.5 md:w-2 md:h-2 rounded-full transition-all duration-300 ${
              currentSection === index
                ? 'bg-white scale-150'
                : 'bg-white/40 hover:bg-white/60'
            }`}
            aria-label={`Go to section ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
}