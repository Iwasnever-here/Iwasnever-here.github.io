import { motion } from 'motion/react'

const stats = [
  { value: '6+', label: 'Projects built' },
  { value: '100+', label: 'DSA problems' },
  { value: '100%', label: 'Locked in' },
]

function About() {
  return (
    <section
      id="about"
      className="relative mx-auto max-w-7xl px-5 py-24 sm:px-8 lg:px-12 lg:py-32"
    >
      <div className="grid gap-14 lg:grid-cols-[0.8fr_1.2fr] lg:items-start">
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
        >
          <p className="mb-4 font-mono text-sm uppercase tracking-[0.3em] text-yellow-400">
            01 / About
          </p>

         
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.6, delay: 0.12 }}
        >
          <div className="space-y-6 text-base leading-8 text-neutral-400 sm:text-lg">
            <p>
              Hello, I am currently a 3rd year Computer Science student at the University of
              Edinburgh. I'm focused on building web application and strengthening my coding skills.
            </p>

            <p>
              I enjoy working on projects, taking them from ideas to actual things I can use.
              This includes building web applications, exploring new technologies and learning new skills.
            </p>

            <p>
              Outside of projects, I’m developing my understanding of data
              structures, algorithms as well as core computer science concepts.
            </p>
          </div>

          <div className="mt-12 grid grid-cols-1 gap-px overflow-hidden border border-white/10 bg-white/10 sm:grid-cols-3">
            {stats.map((stat) => (
              <div
                key={stat.label}
                className="bg-(--bg-page) px-6 py-7"
              >
                <p className="text-3xl font-semibold text-yellow-400">
                  {stat.value}
                </p>

                <p className="mt-2 text-sm text-neutral-500">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default About