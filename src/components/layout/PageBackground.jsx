function PageBackground() {
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 z-0 overflow-hidden"
    >
      {/* Base background */}
      <div className="absolute inset-0 bg-[#080808]" />

  

      {/* Top accent line */}
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-yellow-400/60 to-transparent" />

      {/* Top horizontal guide */}
      <div className="absolute left-1/2 top-24 h-px w-full max-w-6xl -translate-x-1/2 bg-gradient-to-r from-transparent via-white/[0.05] to-transparent" />

      {/* Corner details */}
      <div className="absolute left-6 top-24 hidden items-center gap-3 lg:flex">
        <span className="h-1.5 w-1.5 bg-yellow-400/70" />
        <span className="font-mono text-[8px] uppercase tracking-[0.3em] text-white/15">
          Portfolio / 2026
        </span>
      </div>

      <div className="absolute right-6 top-24 hidden items-center gap-3 lg:flex">
        <span className="font-mono text-[8px] uppercase tracking-[0.3em] text-white/15">
          Scroll to explore
        </span>
        <span className="h-1.5 w-1.5 border border-yellow-400/50" />
      </div>

      {/* Bottom fade */}
      <div className="absolute inset-x-0 bottom-0 h-48 bg-gradient-to-t from-[#080808] to-transparent" />
    </div>
  )
}

export default PageBackground