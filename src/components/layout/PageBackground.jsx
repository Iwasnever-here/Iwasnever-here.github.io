function PageBackground() {
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 z-0 overflow-hidden"
    >
      {/* Base background */}
      <div className="absolute inset-0 bg-[#080808]" />

      {/* Subtle grid */}
      <div
        className="absolute inset-0 opacity-[0.035]"
        style={{
          backgroundImage: `
            linear-gradient(rgba(255,255,255,0.22) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.22) 1px, transparent 1px)
          `,
          backgroundSize: '54px 54px',
          maskImage:
            'linear-gradient(to bottom, black 0%, black 72%, transparent 100%)',
          WebkitMaskImage:
            'linear-gradient(to bottom, black 0%, black 72%, transparent 100%)',
        }}
      />

      {/* Soft light behind upper page */}
      <div
        className="absolute left-1/2 top-[-18rem] h-[42rem] w-[70rem] -translate-x-1/2 rounded-full opacity-30 blur-3xl"
        style={{
          background:
            'radial-gradient(circle, rgba(250,204,21,0.12) 0%, rgba(250,204,21,0.035) 38%, transparent 72%)',
        }}
      />

      {/* Central page rails */}
      <div className="absolute inset-y-0 left-1/2 w-full max-w-6xl -translate-x-1/2">
        <div className="absolute inset-y-0 left-0 w-px bg-white/[0.035]" />
        <div className="absolute inset-y-0 right-0 w-px bg-white/[0.035]" />
      </div>

      {/* Secondary inner rails */}
      <div className="absolute inset-y-0 left-1/2 hidden w-full max-w-4xl -translate-x-1/2 lg:block">
        <div className="absolute inset-y-0 left-0 w-px bg-white/[0.018]" />
        <div className="absolute inset-y-0 right-0 w-px bg-white/[0.018]" />
      </div>

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