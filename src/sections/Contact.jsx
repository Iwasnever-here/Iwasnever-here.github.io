import { motion } from 'motion/react'
import {
  ArrowUpRight,
 
  Mail,
} from 'lucide-react'

const contactLinks = [
  {
    label: 'Email',
    value: 'lucycoe07@gmail.com',
    href: 'mailto:lucycoe07@gmail.com',
    icon: Mail,
  },
  {
    label: 'GitHub',
    value: '@Iwasnever-here',
    href: 'https://github.com/Iwasnever-here',
    icon: ArrowUpRight,
  },
  {
    label: 'LinkedIn',
    value: 'Lucy Coe',
    href: 'https://www.linkedin.com/in/lucy-coe-a191a834b/',
    icon: ArrowUpRight,
  },
]

const itemVariants = {
  hidden: {
    opacity: 0,
    y: 24,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.65,
      ease: [0.22, 1, 0.36, 1],
    },
  },
}

function Contact() {
  return (
    <section
      id="contact"
      className="relative overflow-hidden px-5 py-24 sm:px-8 lg:px-12 lg:py-32"
    >
      <div className="mx-auto max-w-6xl">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.25 }}
          className="grid items-center gap-14 lg:grid-cols-[1.15fr_0.85fr]"
        >
          <motion.div variants={itemVariants}>
            <p className="font-mono text-xs uppercase tracking-[0.35em] text-yellow-400">
              05 / Contact
            </p>

            <h2 className="mt-6 max-w-2xl text-5xl text-neutral-500 font-semibold leading-[0.95] tracking-[-0.04em] text-(--text-primary) sm:text-6xl lg:text-7xl">
              Here's where you can
              <span className="block text-yellow-400">
                Contact me
              </span>
            </h2>

            <p className="mt-7 max-w-xl text-base leading-8 text-neutral-400">
              Open to internships, and other oppotunities
            </p>

            <motion.a
              href="mailto:lucycoe07@gmail.com"
              whileHover={{ x: 6 }}
              className="group mt-9 inline-flex items-center gap-4 text-lg font-semibold text-(--text-primary)"
            >
              Start a conversation

              <span className="flex h-11 w-11 items-center justify-center rounded-full bg-yellow-400 text-black transition-transform duration-300 group-hover:rotate-45">
                <ArrowUpRight size={19} />
              </span>
            </motion.a>
          </motion.div>

          <motion.div
            variants={itemVariants}
            className="relative mx-auto w-full max-w-md"
          >
           

            <motion.div
              whileHover={{
                rotate: 0,
                y: -6,
              }}
              transition={{
                duration: 0.3,
              }}
              className="relative rotate-2 border border-white/10 bg-[#202020] p-6 shadow-2xl sm:p-8"
            >
              <div className="flex items-center justify-between border-b border-white/10 pb-5">
                <div className="flex gap-1.5">
                  <span className="h-2 w-2 rounded-full bg-yellow-400" />
                  <span className="h-2 w-2 rounded-full bg-white/15" />
                  <span className="h-2 w-2 rounded-full bg-white/15" />
                </div>

                <span className="font-mono text-[9px] uppercase tracking-[0.2em] text-neutral-600">
                  contact.exe
                </span>
              </div>

              <div className="py-8">
                <p className="font-mono text-xs text-neutral-500">
                  &gt; initiating connection...
                </p>

                <p className="mt-3 font-mono text-sm text-yellow-400">
                  connection ready.
                </p>

                
              </div>

              <div className="space-y-2">
                {contactLinks.map((link, index) => (
                  <ContactLink
                    key={link.label}
                    link={link}
                    index={index}
                  />
                ))}
              </div>

              <div className="mt-6 flex items-center justify-between border-t border-white/10 pt-5">
                <span className="font-mono text-[9px] uppercase tracking-[0.2em] text-neutral-600">
                  Response time
                </span>

                <span className="font-mono text-[10px] text-neutral-400">
                  Usually within 24h
                </span>
              </div>

              <span className="absolute inset-x-0 bottom-0 h-px bg-yellow-400" />
            </motion.div>

            <div className="absolute -bottom-6 -left-6 -z-10 h-full w-full border border-yellow-400/20" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

function ContactLink({ link, index }) {
  const Icon = link.icon

  return (
    <motion.a
      href={link.href}
      target={link.href.startsWith('mailto:') ? undefined : '_blank'}
      rel={link.href.startsWith('mailto:') ? undefined : 'noreferrer'}
      initial={{ opacity: 0, x: 20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{
        delay: 0.15 + index * 0.08,
        duration: 0.45,
      }}
      whileHover={{ x: 6 }}
      className="group flex items-center justify-between border border-white/10 px-4 py-4 transition-colors duration-300 hover:border-yellow-400/40 hover:bg-yellow-400/[0.04]"
    >
      <div className="flex items-center gap-3">
        <Icon
          size={17}
          className="text-yellow-400"
        />

        <div>
          <p className="font-mono text-[9px] uppercase tracking-[0.18em] text-neutral-600">
            {link.label}
          </p>

          <p className="mt-1 text-sm text-neutral-300">
            {link.value}
          </p>
        </div>
      </div>

      <ArrowUpRight
        size={16}
        className="text-neutral-600 transition-all duration-300 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-yellow-400"
      />
    </motion.a>
  )
}

export default Contact