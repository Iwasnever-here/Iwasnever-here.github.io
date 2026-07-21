import { motion } from 'motion/react'

const skills = [
  { name: 'React', category: 'Frontend' },
  { name: 'JavaScript', category: 'Frontend' },
  { name: 'HTML', category: 'Frontend' },
  { name: 'Tailwind CSS', category: 'Frontend' },
  { name: 'Node.js', category: 'Backend' },
  { name: 'Java', category: 'Backend' },
  { name: 'Python', category: 'Backend' },
  { name: 'Supabase', category: 'Backend' },
  { name: 'SQL', category: 'Backend' },
  { name: 'REST APIs', category: 'Backend' },
  { name: 'Git', category: 'Tools' },
]

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.06,
    },
  },
}

const tileVariants = {
  hidden: {
    opacity: 0,
    y: 18,
    scale: 0.97,
  },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.45,
      ease: [0.22, 1, 0.36, 1],
    },
  },
}

function Skills() {
  return (
    <section
      id="skills"
      className="relative overflow-hidden px-5 py-24 sm:px-8 lg:px-12 lg:py-32"
    >
      <div className="pointer-events-none absolute -right-40 top-1/2 h-96 w-96 -translate-y-1/2 rounded-full bg-yellow-400/[0.035] blur-[150px]" />

      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{
          once: true,
          amount: 0.15,
        }}
        variants={containerVariants}
        className="relative mx-auto max-w-6xl"
      >
        <motion.p
          variants={tileVariants}
          className="font-mono text-xs font-medium uppercase tracking-[0.35em] text-yellow-400 sm:text-sm"
        >
          02 / Skills
        </motion.p>

        <motion.div
          variants={tileVariants}
          className="mt-8 flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between"
        >
        

        
        </motion.div>

        <motion.div
          variants={containerVariants}
          className="mt-14 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4"
        >
          {skills.map((skill, index) => (
            <SkillTile
              key={skill.name}
              skill={skill}
              index={index}
            />
          ))}
        </motion.div>
      </motion.div>
    </section>
  )
}

function SkillTile({ skill, index }) {
  return (
    <motion.article
      variants={tileVariants}
      whileHover={{
        y: -3,
      }}
      transition={{
        duration: 0.2,
        ease: 'easeOut',
      }}
      className="group relative min-h-32 cursor-default border border-white/10 bg-[#202020]/[0.5] p-5 sm:min-h-36 sm:p-6"
    >
      <span className="font-mono text-[10px] text-neutral-600">
        {String(index + 1).padStart(2, '0')}
      </span>

      <div className="absolute bottom-5 left-5 right-5 sm:bottom-6 sm:left-6 sm:right-6">
        <p className="text-xl font-semibold text-yellow-400 sm:text-2xl">
          {skill.name}
        </p>

        <p className="mt-2 text-sm text-neutral-500">
          {skill.category}
        </p>
      </div>

      <span className="absolute inset-x-0 bottom-0 h-px origin-left scale-x-0 bg-yellow-400 transition-transform duration-300 group-hover:scale-x-100" />
    </motion.article>
  )
}


export default Skills