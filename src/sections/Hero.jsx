import { motion } from 'motion/react'
import {
  ArrowDown,
  ArrowUpRight,
  Mail,
} from 'lucide-react'

import OrbitVisual from '../components/hero/OrbitVisual'
import ActionButton from '../components/ui/ActionButton'
import { personal } from '../data/personal'

function Hero() {
  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center overflow-hidden pt-20"
    >
      <div className="mx-auto grid w-full max-w-7xl items-center gap-14 px-4 py-20 sm:px-6 lg:grid-cols-[1.05fr_0.95fr] lg:px-8">
        <motion.div
          initial={{
            opacity: 0,
            x: -70,
            filter: 'blur(12px)',
          }}
          animate={{
            opacity: 1,
            x: 0,
            filter: 'blur(0px)',
          }}
          transition={{
            duration: 0.9,
            ease: [0.22, 1, 0.36, 1],
          }}
        >
          {personal.availability && (
            <div className="mb-6 inline-flex items-center gap-3 border border-yellow-400/30 bg-yellow-400/5 px-3 py-2">
              

              <span className="text-xs font-semibold uppercase tracking-[0.22em] text-yellow-400">
                Available for 2027 summer internships
              </span>
            </div>
          )}

          <p className="mb-4 text-xs font-medium uppercase tracking-[0.35em] text-neutral-500">
            {personal.role} · {personal.location}
          </p>

          <h1 className="max-w-4xl text-5xl font-black text-neutral-500 leading-[0.9] tracking-[-0.065em] sm:text-7xl lg:text-[6.5rem]">
            Welcome to my
            <span className="block text-yellow-400">
              Portfolio
            </span>
          </h1>

          <p className="mt-8 max-w-xl text-base leading-8 text-neutral-400 sm:text-lg">
            {personal.introduction}
          </p>

          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <ActionButton href="#projects" primary>
              Explore projects
              <ArrowUpRight size={17} />
            </ActionButton>

            <ActionButton href="#contact">
              Contact me
              <Mail size={17} />
            </ActionButton>
          </div>

          <a
            href="#about"
            className="mt-12 inline-flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.2em] text-neutral-500 transition hover:text-yellow-400"
          >
            <span className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10">
              <ArrowDown size={15} />
            </span>

            Scroll to explore
          </a>
        </motion.div>

        <motion.div
          initial={{
            opacity: 0,
            scale: 0.8,
            rotate: -8,
          }}
          animate={{
            opacity: 1,
            scale: 1,
            rotate: 0,
          }}
          transition={{
            duration: 1,
            delay: 0.1,
            ease: [0.22, 1, 0.36, 1],
          }}
        >
          <OrbitVisual />
        </motion.div>
      </div>
    </section>
  )
}

export default Hero