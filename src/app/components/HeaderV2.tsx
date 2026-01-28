import { useEffect, useState } from "react";
import LogoWordmarkWhite from "@/imports/LogoWordmarkWhite1";

interface HeaderV2Props {
  onOpenContact: () => void;
}

export function HeaderV2({ onOpenContact }: HeaderV2Props) {
  const [scrolled, setScrolled] = useState(false);

  // Track scroll for header background
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 py-6 transition-all duration-500 ${ 
        scrolled 
          ? 'bg-[#121212]/90 backdrop-blur-lg border-b border-white/10' 
          : 'bg-transparent border-b border-transparent'
      }`}
    >
      <div className="max-w-[1600px] w-full px-6 md:px-10 flex items-center justify-between">
        {/* Logo */}
        <a 
          href="#" 
          onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: 'smooth' }); }} 
          className="w-20 md:w-24 h-auto transition-all hover:opacity-80 hover:scale-105 duration-300" 
          aria-label="8180 Studio Home"
        >
          <LogoWordmarkWhite />
        </a>
      </div>
    </header>
  );
}