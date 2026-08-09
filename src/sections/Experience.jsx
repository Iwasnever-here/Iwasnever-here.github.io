import { useRef } from 'react'
import {
  motion,
  useScroll,
  useSpring,
} from 'motion/react'

const experiences = [
  {
    date: '2024 — Present',
    title: 'BSc Computer Science',
    organisation: 'University of Edinburgh',
    description:
      'Studying core computer science topics including algorithms, data structures, software engineering and systems.',
    type: 'Education',
  },
  {
    date: '2026',
    title: 'OOP Tutor',
    organisation: 'University of Edinburgh',
    description:
      'Tutoring students in object-oriented programming concepts and helping them develop their coding skills.',
    type: 'Tutoring',
  },
  {
    date: '2026',
    title: 'COGSI Lab Demonstrator',
    organisation: 'University of Edinburgh',
    description:
      'Assisting students in the COGSI lab with their coursework and providing guidance on computer science concepts.',
    type: 'Demonstrating',
  },
]

const headingVariants = {
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

function Experience() {
  const timelineRef = useRef(null)

  const { scrollYProgress } = useScroll({
    target: timelineRef,
    offset: ['start 75%', 'end 55%'],
  })

  const lineProgress = useSpring(scrollYProgress, {
    stiffness: 90,
    damping: 25,
    restDelta: 0.001,
  })

  return (
    <section
      id="experience"
      className="relative overflow-hidden px-5 py-24 sm:px-8 lg:px-12 lg:py-32"
    >
      <div className="mx-auto max-w-6xl">
        <motion.p
          variants={headingVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="font-mono text-xs font-medium uppercase tracking-[0.35em] text-yellow-400 sm:text-sm"
        >
          04 / Experience
        </motion.p>

        <motion.div
          variants={headingVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mt-8 max-w-3xl"
        >
     
        </motion.div>

        <div
          ref={timelineRef}
          className="relative mt-16 lg:mt-24"
        >
          {/* Inactive timeline line */}
          <div className="absolute bottom-0 left-[11px] top-0 w-px bg-white/10 lg:left-1/2 lg:-translate-x-1/2" />

          {/* Animated timeline line */}
          <motion.div
            style={{
              scaleY: lineProgress,
              transformOrigin: 'top',
            }}
            className="absolute bottom-0 left-[11px] top-0 w-px bg-yellow-400 lg:left-1/2 lg:-translate-x-1/2"
          />

          <div className="space-y-12 lg:space-y-20">
            {experiences.map((experience, index) => (
              <TimelineItem
                key={`${experience.title}-${experience.date}`}
                experience={experience}
                index={index}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

function TimelineItem({ experience, index }) {
  const isRight = index % 2 !== 0

  const cardVariants = {
    hidden: {
      opacity: 0,
      x: isRight ? 40 : -40,
      y: 10,
    },
    visible: {
      opacity: 1,
      x: 0,
      y: 0,
      transition: {
        duration: 0.65,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  }

  return (
    <motion.article
      initial="hidden"
      whileInView="visible"
      viewport={{
        once: true,
        amount: 0.3,
      }}
      className="relative grid pl-9 lg:grid-cols-2 lg:pl-0"
    >
      {/* Timeline marker */}
      <motion.div
        initial={{
          scale: 0,
          backgroundColor: '#171717',
        }}
        whileInView={{
          scale: 1,
          backgroundColor: '#facc15',
        }}
        viewport={{
          once: true,
          amount: 0.6,
        }}
        transition={{
          scale: {
            duration: 0.4,
            ease: [0.22, 1, 0.36, 1],
          },
          backgroundColor: {
            duration: 0.25,
            delay: 0.12,
          },
        }}
        className="absolute left-[2px] top-6 z-10 flex h-5 w-5 items-center justify-center rounded-full border border-yellow-400 lg:left-1/2 lg:-translate-x-1/2"
      >
        <motion.span
          initial={{ scale: 0 }}
          whileInView={{ scale: 1 }}
          viewport={{ once: true }}
          transition={{
            delay: 0.25,
            duration: 0.25,
          }}
          className="h-1.5 w-1.5 rounded-full bg-black"
        />
      </motion.div>

      {/* Marker pulse */}
      <motion.span
        initial={{
          opacity: 0,
          scale: 0.7,
        }}
        whileInView={{
          opacity: [0, 0.3, 0],
          scale: [0.7, 1.5, 1.8],
        }}
        viewport={{ once: true }}
        transition={{
          duration: 1,
          delay: 0.2,
        }}
        className="absolute left-[2px] top-6 h-5 w-5 rounded-full border border-yellow-400 lg:left-1/2 lg:-translate-x-1/2"
      />

      <motion.div
        variants={cardVariants}
        whileHover={{
          y: -4,
        }}
        transition={{
          duration: 0.25,
          ease: 'easeOut',
        }}
        className={`
          group relative overflow-hidden border border-white/10
          bg-[#202020] px-5 py-4
          transition-colors duration-300
          hover:border-white/20 hover:bg-[#242424]
          sm:px-6 sm:py-5
          lg:w-[calc(100%-80px)]
          ${
            isRight
              ? 'lg:col-start-2 lg:ml-16'
              : 'lg:col-start-1 lg:mr-16'
          }
        `}
      >
        {/* Always visible */}
        <div className="flex items-start justify-between gap-4">
          <div>
            <div className="flex flex-wrap items-center gap-x-3 gap-y-1">
              <p className="font-mono text-[9px] uppercase tracking-[0.22em] text-yellow-400">
                {experience.type}
              </p>

              <span className="hidden h-1 w-1 rounded-full bg-neutral-700 sm:block" />

              <p className="font-mono text-[10px] text-neutral-500">
                {experience.date}
              </p>
            </div>

            <h3 className="mt-3 text-xl font-semibold tracking-tight text-neutral-300 sm:text-2xl">
              {experience.title}
            </h3>

            <p className="mt-1 text-xs text-neutral-500 sm:text-sm">
              {experience.organisation}
            </p>
          </div>

          <span className="font-mono text-[10px] text-neutral-600">
            {String(index + 1).padStart(2, '0')}
          </span>
        </div>

        {/* Revealed on hover */}
        <div
          className="
            grid grid-rows-[0fr] opacity-0
            transition-all duration-500 ease-out
            group-hover:mt-4 group-hover:grid-rows-[1fr] group-hover:opacity-100
          "
        >
          <div className="overflow-hidden">
            <div className="border-t border-white/10 pt-4">
              <p className="text-sm leading-6 text-neutral-400">
                {experience.description}
              </p>

              <div className="mt-4 flex items-center gap-2 font-mono text-[9px] uppercase tracking-[0.18em] text-neutral-600">
                
              </div>
            </div>
          </div>
        </div>

        <span className="absolute inset-x-0 bottom-0 h-px origin-left scale-x-0 bg-yellow-400 transition-transform duration-500 group-hover:scale-x-100" />
      </motion.div>
    </motion.article>
  )
}


export default Experience