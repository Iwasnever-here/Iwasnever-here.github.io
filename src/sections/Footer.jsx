import { motion } from 'motion/react'
import {
  ArrowUp,
  Mail,
  Code,
  UserRound,
} from 'lucide-react'

function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="border-t border-white/10 px-5 py-8 sm:px-8 lg:px-12">
      <div className="mx-auto flex max-w-7xl flex-col gap-8 md:flex-row md:items-center md:justify-between">
        {/* Left */}
        <div>
          <h3 className="text-lg font-semibold text-(--text-primary)">
            Lucy Coe
          </h3>

          <p className="mt-2 text-sm text-neutral-500">
            Computer Science Student 
          </p>

          <p className="mt-4 font-mono text-[11px] text-neutral-600">
            © {year} All rights reserved.
          </p>
        </div>

        {/* Centre */}
        <div className="flex items-center gap-5">
          <FooterLink
            href="mailto:lucycoe07@gmail.com"
            icon={Mail}
          />

          <FooterLink
            href="https://github.com/Iwasnever-here"
            icon={Code}
          />

          <FooterLink
            href="https://www.linkedin.com/in/lucy-coe-a191a834b/"
            icon={UserRound}
          />
        </div>

        {/* Right */}
        <motion.a
          href="#home"
          whileHover={{
            y: -4,
          }}
          whileTap={{
            scale: 0.95,
          }}
          className="group flex items-center gap-3 self-start border border-white/10 px-4 py-3 text-xs uppercase tracking-[0.2em] text-neutral-400 transition hover:border-yellow-400 hover:text-yellow-400 md:self-auto"
        >
          Back to top

          <ArrowUp
            size={16}
            className="transition-transform duration-300 group-hover:-translate-y-1"
          />
        </motion.a>
      </div>
    </footer>
  )
}

function FooterLink({ href, icon: Icon }) {
  return (
    <motion.a
      href={href}
      target={href.startsWith('mailto:') ? undefined : '_blank'}
      rel={href.startsWith('mailto:') ? undefined : 'noreferrer'}
      whileHover={{
        y: -3,
      }}
      whileTap={{
        scale: 0.95,
      }}
      className="flex h-11 w-11 items-center justify-center border border-white/10 text-neutral-400 transition hover:border-yellow-400 hover:text-yellow-400"
    >
      <Icon size={18} />
    </motion.a>
  )
}

export default Footer