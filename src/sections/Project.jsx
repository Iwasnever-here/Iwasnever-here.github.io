import { motion } from 'motion/react'
import studyFlowImage from '../assets/studyflowdark.png'
import visualCiphersImage from '../assets/cyphersscreen.png'
import miniProjectsImage from '../assets/minidrawdraw.png'
import httpserverimage from '../assets/httpserverimage.png'
import projectsimianimage from '../assets/projectsimianimage.png'

const projects = [
  {
    number: '01',
    title: 'StudyFlow',
    description:
      'A study management platform designed to help students organise tasks, track progress and build consistent study habits.',
    technologies: [
      'React',
      'Supabase',
      'Tailwind CSS',
      'Vercel',
    ],
    image: studyFlowImage,
    liveUrl: 'https://studyflow-virid-seven.vercel.app/',
    githubUrl: 'https://github.com/Iwasnever-here/StudyFlow',
  },
  {
    number: '02',
    title: 'Visual Ciphers',
    description:
      'An interactive application that explains and visualises classical encryption methods through step-by-step demonstrations.',
    technologies: ['Python', 'Tkinter'],
    image: visualCiphersImage,
    liveUrl: '#',
    githubUrl: 'https://github.com/Iwasnever-here/visual-ciphers',
  },
  {
    number: '03',
    title: 'Mini React Projects',
    description:
      'A collection of small, focused React applications demonstrating various concepts and techniques.',
    technologies: ['React', 'JavaScript', 'APIs'],
    image: miniProjectsImage,
    liveUrl: '#',
    githubUrl:
      'https://github.com/Iwasnever-here/react-mini-projects',
  },
  {
    number: '04',
    title: 'Java Http Server',
    description:
      'An HTTP/1.1 server built from scratch in Java, featuring routing, concurrency, middleware, static file serving and session management.',
    technologies: ['Java', 'TCP/IP', 'HTTP/1.1', 'JUnit'],
    image: httpserverimage,
    liveUrl: '#',
    githubUrl:
      'https://github.com/Iwasnever-here/java-http-server',
  },
  {
  number: '03',

  title: 'Project Simian',

  description:
    'An agent-based simulation featuring autonomous monkeys with limited perception, memory, resource-driven behaviour and pathfinding in a procedural island environment.',

  technologies: ['Python', 'FastAPI', 'React', 'TypeScript', 'PixiJS'],

  image: projectsimianimage,

  liveUrl: '#',

  githubUrl:
    'https://github.com/Iwasnever-here/project-simian',
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

function Projects() {
  return (
    <section
      id="projects"
      className="relative overflow-hidden px-5 py-24 sm:px-8 lg:px-12 lg:py-32"
    >
      <div className="mx-auto max-w-6xl">
        <motion.p
          variants={headingVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{
            once: true,
            amount: 0.5,
          }}
          className="font-mono text-xs font-medium uppercase tracking-[0.35em] text-yellow-400 sm:text-sm"
        >
          03 / Projects
        </motion.p>

        <motion.div
          variants={headingVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{
            once: true,
            amount: 0.5,
          }}
          className="mt-8 flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between"
        />

        <div className="mt-14 space-y-6">
          {projects.map((project, index) => (
            <Project
              key={project.title}
              project={project}
              reverse={index % 2 !== 0}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

function Project({
  project,
  reverse,
  index,
}) {
  const projectVariants = {
    hidden: {
      opacity: 0,
      x: reverse ? 120 : -120,
      y: 28,
      rotate: reverse ? 1.5 : -1.5,
    },
    visible: {
      opacity: 1,
      x: 0,
      y: 0,
      rotate: 0,
      transition: {
        duration: 0.85,
        delay: index * 0.05,
        ease: [0.16, 1, 0.3, 1],
      },
    },
  }

  return (
    <motion.article
      variants={projectVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{
        once: true,
        amount: 0.18,
      }}
      className="group grid overflow-hidden border border-white/10 bg-[#202020] transition-colors duration-300 hover:border-white/20 lg:grid-cols-2"
    >
      <div
        className={`relative min-h-[280px] overflow-hidden bg-[#171717] sm:min-h-[360px] ${
          reverse ? 'lg:order-2' : ''
        }`}
      >
        <img
          src={project.image}
          alt={`${project.title} project preview`}
          className="h-full w-full object-cover opacity-80 transition duration-700 group-hover:scale-[1.03] group-hover:opacity-100"
        />

        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/35 via-transparent to-transparent" />

        <span className="absolute left-5 top-5 border border-white/10 bg-black/40 px-3 py-1.5 font-mono text-[10px] text-neutral-400 backdrop-blur-sm">
          {project.number}
        </span>
      </div>

      <div className="flex min-h-[320px] flex-col justify-between p-7 sm:p-9 lg:p-12">
        <div>
          <p className="font-mono text-[10px] uppercase tracking-[0.24em] text-neutral-500">
            Featured project
          </p>

          <h3 className="mt-5 text-3xl font-semibold tracking-tight text-yellow-400 sm:text-4xl">
            {project.title}
          </h3>

          <p className="mt-6 max-w-lg text-base leading-8 text-neutral-400">
            {project.description}
          </p>

          <div className="mt-7 flex flex-wrap gap-2">
            {project.technologies.map((technology) => (
              <span
                key={technology}
                className="border border-white px-3 py-2 font-mono text-[10px] uppercase tracking-[0.12em] text-neutral-100 transition-colors duration-300"
              >
                {technology}
              </span>
            ))}
          </div>
        </div>

        <div className="mt-10 flex flex-wrap gap-6">
          <ProjectLink href={project.liveUrl}>
            Live project
          </ProjectLink>

          <ProjectLink href={project.githubUrl}>
            View code
          </ProjectLink>
        </div>
      </div>
    </motion.article>
  )
}

function ProjectLink({
  href,
  children,
}) {
  const isPlaceholder = !href || href === '#'

  return (
    <motion.a
      href={href}
      target={isPlaceholder ? undefined : '_blank'}
      rel={isPlaceholder ? undefined : 'noreferrer'}
      whileHover={{
        x: 4,
      }}
      onClick={(event) => {
        if (isPlaceholder) {
          event.preventDefault()
        }
      }}
      className={`group/link inline-flex items-center gap-3 font-mono text-xs uppercase tracking-[0.18em] transition-colors duration-300 ${
        isPlaceholder
          ? 'cursor-not-allowed text-neutral-600'
          : 'text-neutral-400 hover:text-yellow-400'
      }`}
    >
      {children}

      <span
        className={`transition-transform duration-300 ${
          isPlaceholder
            ? 'text-neutral-600'
            : 'text-yellow-400 group-hover/link:translate-x-1'
        }`}
      >
        ↗
      </span>
    </motion.a>
  )
}

export default Projects