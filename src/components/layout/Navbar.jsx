import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'motion/react'

import {
  ChevronRight,
  Download,
  Menu,
  X,
} from 'lucide-react'

import { navigation } from '../../data/navigation'

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)

  const openMenu = () => {
    setMenuOpen(true)
  }

  const closeMenu = () => {
    setMenuOpen(false)
  }


  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }

    
    return () => {
      document.body.style.overflow = ''
    }
  }, [menuOpen])

  

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === 'Escape') {
        closeMenu()
      }
    }

    window.addEventListener('keydown', handleKeyDown)

    return () => {
      window.removeEventListener('keydown', handleKeyDown)
    }
  }, [])

  return (
    <>
      <header className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-[#080808]/75 backdrop-blur-xl">
        <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
          <Logo />

          <DesktopNavigation />

          <div className="flex items-center gap-3">
            <ResumeButton />

            <button
              type="button"
              onClick={openMenu}
              aria-label="Open navigation menu"
              aria-expanded={menuOpen}
              aria-controls="mobile-navigation"
              className="border border-white/10 p-2.5 text-neutral-200 transition hover:border-yellow-400 hover:text-yellow-400 lg:hidden"
            >
              <Menu size={19} />
            </button>
          </div>
        </div>
      </header>

      <AnimatePresence>
        {menuOpen && (
          <MobileMenu closeMenu={closeMenu} />
        )}
      </AnimatePresence>
    </>
  )
}

function Logo() {
  return (
    <a
      href="#home"
      className="group flex items-center gap-3"
      aria-label="Go to homepage"
    >
      <div className="flex h-8 w-8 items-center justify-center bg-yellow-400 text-sm font-black text-black transition-transform duration-300 group-hover:rotate-6">
        :)
      </div>

      <span className="text-sm font-bold tracking-wide text-yellow-400">
        Lucy Coe
      </span>
    </a>
  )
}

function DesktopNavigation() {
  return (
    <nav
      aria-label="Desktop navigation"
      className="hidden items-center gap-7 lg:flex"
    >
      {navigation.map((item) => (
        <a
          key={item.label}
          href={item.href}
          className="group relative py-2 text-xs font-medium uppercase tracking-[0.18em] text-neutral-500 transition-colors hover:text-yellow-400"
        >
          {item.label}

          <span className="absolute bottom-0 left-0 h-px w-0 bg-yellow-400 transition-all duration-300 group-hover:w-full" />
        </a>
      ))}
    </nav>
  )
}

function ResumeButton() {
  return (
    <a
      href="/resume.pdf"
      target="_blank"
      rel="noreferrer"
      className="hidden items-center gap-2 border border-yellow-400 bg-yellow-400 px-4 py-2 text-xs font-bold uppercase tracking-wider text-black transition hover:bg-transparent hover:text-yellow-400 sm:flex"
    >
      <Download size={14} />
      CV
    </a>
  )
}

function MobileMenu({ closeMenu }) {
  const menuVariants = {
    closed: {
      clipPath: 'circle(0% at calc(100% - 36px) 32px)',
      transition: {
        duration: 0.55,
        ease: [0.76, 0, 0.24, 1],
        when: 'afterChildren',
      },
    },

    open: {
      clipPath: 'circle(150% at calc(100% - 36px) 32px)',
      transition: {
        duration: 0.75,
        ease: [0.76, 0, 0.24, 1],
        when: 'beforeChildren',
        staggerChildren: 0.05,
        delayChildren: 0.10,
      },
    },
  }

  const linkVariants = {
    closed: {
      opacity: 0,
      x: 50,
    },

    open: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.30,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  }

  return (
    <motion.div
      id="mobile-navigation"
      role="dialog"
      aria-modal="true"
      aria-label="Mobile navigation"
      variants={menuVariants}
      initial="closed"
      animate="open"
      exit="closed"
      className="fixed inset-0 z-[60] bg-yellow-400 px-6 py-5 text-black lg:hidden"
    >
      <div className="flex items-center justify-between">
        <motion.span
          variants={linkVariants}
          className="text-sm font-black uppercase tracking-widest"
        >
          Navigation
        </motion.span>

        <motion.button
          variants={linkVariants}
          type="button"
          onClick={closeMenu}
          aria-label="Close navigation menu"
          className="border border-black/20 p-2.5 transition hover:bg-black hover:text-yellow-400"
        >
          <X size={20} />
        </motion.button>
      </div>

      <nav
        aria-label="Mobile navigation"
        className="mt-14"
      >
        {navigation.map((item, index) => (
          <motion.a
            key={item.label}
            variants={linkVariants}
            href={item.href}
            onClick={closeMenu}
            className="group flex items-center justify-between border-b border-black/20 py-5 text-3xl font-black uppercase tracking-tight"
          >
            <span className="flex items-center">
              <span className="mr-4 text-sm font-medium">
                {String(index + 1).padStart(2, '0')}
              </span>

              {item.label}
            </span>

            <ChevronRight
              size={26}
              className="transition-transform duration-300 group-hover:translate-x-2"
            />
          </motion.a>
        ))}
      </nav>

      <motion.div
        variants={linkVariants}
        className="absolute bottom-7 left-6 right-6 flex items-end justify-between border-t border-black/20 pt-5"
      >
        <div>
          <p className="text-xs font-bold uppercase tracking-[0.2em]">
            3rd Year Computer Science Student
          </p>

          <p className="mt-1 text-sm text-black/60">
            Edinburgh, United Kingdom
          </p>
        </div>

        
      </motion.div>
    </motion.div>
  )
}

export default Navbar