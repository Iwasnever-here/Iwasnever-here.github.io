import { motion } from 'motion/react'

import { personal } from '../../data/personal'

const orbitItems = [
  {
    name: 'React',
    className: 'left-0 top-[45%]',
    duration: 4,
  },
  {
    name: 'Python',
    className: 'right-0 top-[26%]',
    duration: 5,
  },
  {
    name: 'Tailwind',
    className: 'left-[38%] top-0',
    duration: 4.5,
  },
  {
    name: 'Supabase',
    className: 'bottom-2 left-[24%]',
    duration: 5.5,
  },
]

function OrbitVisual() {
  return (
    <div className="relative mx-auto aspect-square w-full max-w-[520px]">
      <motion.div
        animate={{
          rotate: 360,
        }}
        transition={{
          duration: 34,
          repeat: Infinity,
          ease: 'linear',
        }}
        className="absolute inset-[5%] rounded-full border border-dashed border-yellow-400/25"
      />

      <motion.div
        animate={{
          rotate: -360,
        }}
        transition={{
          duration: 24,
          repeat: Infinity,
          ease: 'linear',
        }}
        className="absolute inset-[18%] rounded-full border border-white/10"
      />

      
     

      {orbitItems.map((item, index) => (
        <motion.div
          key={item.name}
          animate={{
            y: [0, -12, 0],
            rotate: [
              0,
              index % 2 === 0 ? 4 : -4,
              0,
            ],
          }}
          transition={{
            duration: item.duration,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
          className={`absolute ${item.className} border border-white/10 bg-[#111]/90 px-4 py-2.5 text-xs font-bold uppercase tracking-[0.18em] text-yellow-400 backdrop-blur-md`}
        >
          {item.name}
        </motion.div>
      ))}

      <motion.div
        animate={{
          rotate: 360,
        }}
        transition={{
          duration: 14,
          repeat: Infinity,
          ease: 'linear',
        }}
        className="absolute inset-[31%] rounded-full border border-yellow-400/20"
      >
        <span className="absolute -top-1 left-1/2 h-2 w-2 -translate-x-1/2 rounded-full bg-yellow-400 shadow-[0_0_18px_rgba(250,204,21,1)]" />
      </motion.div>
    </div>
  )
}

export default OrbitVisual