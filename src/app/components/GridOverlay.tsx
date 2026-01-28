export function GridOverlay() {
  return (
    <div className="fixed inset-0 pointer-events-none z-0 opacity-[0.03]">
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: `
            radial-gradient(circle at 2px 2px, rgba(0, 170, 255, 0.15) 1px, transparent 1px),
            linear-gradient(rgba(255, 255, 255, 0.05) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255, 255, 255, 0.05) 1px, transparent 1px)
          `,
          backgroundSize: '40px 40px, 80px 80px, 80px 80px',
          backgroundPosition: '0 0, 0 0, 0 0'
        }}
      />
    </div>
  );
}