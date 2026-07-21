function ActionButton({
  children,
  href,
  primary = false,
}) {
  return (
    <a
      href={href}
      className={`inline-flex items-center justify-center gap-2 px-6 py-3.5 text-sm font-bold transition ${
        primary
          ? 'bg-yellow-400 text-black hover:bg-yellow-300'
          : 'border border-white/15 text-neutral-200 hover:border-yellow-400 hover:text-yellow-400'
      }`}
    >
      {children}
    </a>
  )
}

export default ActionButton