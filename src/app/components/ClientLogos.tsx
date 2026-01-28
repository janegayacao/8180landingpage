import { useEffect, useRef, useState } from 'react';

export function ClientLogos() {
  const sectionRef = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  // Client logos - in production, these would be real brand logos
  const clients = [
    'TechCorp',
    'Quantum',
    'Nexus',
    'Apex',
    'Vertex',
    'Horizon',
    'Pulse',
    'Echo',
    'Zenith',
    'Axiom',
    'Vortex',
    'Cipher',
  ];

  // Duplicate the array for seamless loop
  const duplicatedClients = [...clients, ...clients];

  return (
    <section
      ref={sectionRef}
      className="relative py-16 md:py-24 overflow-hidden"
      aria-labelledby="clients-heading"
    >
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#00AAFF]/5 to-transparent" />

      {/* Heading - Centered with max-width */}
      <div className="max-w-7xl mx-auto px-4 md:px-8 relative mb-12 md:mb-16">
        <div className="text-center">
          <p
            className={`text-[#00AAFF] text-sm md:text-base uppercase mb-3 transition-all duration-700 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            }`}
            style={{ fontFamily: 'Open Sans, sans-serif' }}
          >
            Trusted By
          </p>
          <h2
            id="clients-heading"
            className={`text-[32px] md:text-[40px] tracking-tight transition-all duration-700 delay-100 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            }`}
            style={{ fontFamily: 'Agdasima, sans-serif' }}
          >
            Industry Leaders Who Trust 8180
          </h2>
        </div>
      </div>

      {/* Marquee Container - Full Width */}
      <div className="relative w-full">
        {/* Scrolling logos */}
        <div className="overflow-hidden">
          <div 
            className="flex gap-12 md:gap-16 animate-marquee"
            style={{
              animation: 'marquee 40s linear infinite',
            }}
          >
            {duplicatedClients.map((client, index) => (
              <div
                key={`${client}-${index}`}
                className="flex-shrink-0 group"
              >
                {/* Logo */}
                <div className="px-8 py-6 border border-[#353535] bg-[#1a1a1a]/40 backdrop-blur-sm hover:border-[#00AAFF] hover:bg-[#00AAFF]/5 transition-all duration-300 min-w-[180px] flex items-center justify-center">
                  <span
                    className="text-2xl md:text-3xl font-bold text-white/70 group-hover:text-[#00AAFF] transition-colors duration-300 whitespace-nowrap"
                    style={{ fontFamily: 'Agdasima, sans-serif' }}
                  >
                    {client}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Keyframes for marquee animation */}
      <style>{`
        @keyframes marquee {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }

        .animate-marquee:hover {
          animation-play-state: paused;
        }
      `}</style>
    </section>
  );
}