import { HeroV2 } from "@/app/components/HeroV2";
import { HeaderV2 } from "@/app/components/HeaderV2";
import { GridOverlay } from "@/app/components/GridOverlay";
import { BackToTop } from "@/app/components/BackToTop";
import { NoiseTexture } from "@/app/components/NoiseTexture";
import { ContactModal } from "@/app/components/ContactModal";
import { useState } from "react";

function App() {
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);

  return (
    <div className="min-h-screen bg-[#121212] text-white antialiased relative">
      <NoiseTexture />
      <GridOverlay />
      <div className="relative z-10">
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50 focus:bg-[#00AAFF] focus:text-white focus:px-6 focus:py-3 focus:border focus:border-[#00AAFF]"
        >
          Skip to main content
        </a>
        <HeaderV2 onOpenContact={() => setIsContactModalOpen(true)} />
        <main id="main-content">
          <HeroV2 onOpenContact={() => setIsContactModalOpen(true)} />
          {/* Temporarily hidden sections - will be used later */}
          {/* <ClientLogos /> */}
          {/* <ArrowDivider /> */}
          {/* <div id="services">
            <ServicesV2 />
          </div>
          <ArrowDivider />
          <div id="work">
            <PortfolioV2 />
          </div> */}
          {/* <TestimonialsV2 /> */}
          {/* <ArrowDivider />
          <div id="about">
            <AboutV2 />
            <WorkflowV2 />
          </div>
          <TeamSection />
          <ArrowDivider /> */}
          {/* <FAQ /> */}
          {/* <ContactFooterV2 /> */}
        </main>
        <BackToTop />
      </div>
      <ContactModal isOpen={isContactModalOpen} onClose={() => setIsContactModalOpen(false)} />
    </div>
  );
}

export default App;