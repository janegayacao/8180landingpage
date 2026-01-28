export function SectionDivider() {
  return (
    <div className="px-6 py-0 max-w-[1600px] mx-auto">
      <div className="relative h-[1px] bg-gradient-to-r from-transparent via-white/30 to-transparent">
        {/* Animated Glow */}
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#00AAFF]/30 to-transparent blur-sm animate-pulse" style={{ animationDuration: '3s' }} />
        
        {/* Left Diamond */}
        <div className="absolute left-0 top-1/2 -translate-y-1/2 w-2 h-2 bg-[#00AAFF] rotate-45 shadow-[0_0_8px_rgba(0,170,255,0.6)]" />
        
        {/* Center Dot */}
        <div className="absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 w-1.5 h-1.5 bg-[#00AAFF] rounded-full shadow-[0_0_6px_rgba(0,170,255,0.8)]" />
        
        {/* Right Diamond */}
        <div className="absolute right-0 top-1/2 -translate-y-1/2 w-2 h-2 bg-[#00AAFF] rotate-45 shadow-[0_0_8px_rgba(0,170,255,0.6)]" />
      </div>
    </div>
  );
}