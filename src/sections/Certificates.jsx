import { useState } from 'react'
import { AnimatePresence, motion } from 'motion/react'
import {
  ArrowLeft,
  ArrowRight,
  ArrowUpRight,
} from 'lucide-react'

const certificates = [
  {
    title: 'Certificate Name',
    issuer: 'Google',
    date: '2025',
    description:
      'A short description of the certificate and the main skills or knowledge it covered.',
    image: '/certificates/google-certificate.jpg',
    credentialUrl: '#',
  },
  {
    title: 'Certificate Name',
    issuer: 'Coursera',
    date: '2025',
    description:
      'A short description of what you learned and how the course supported your development.',
    image: '/certificates/coursera-certificate.jpg',
    credentialUrl: '#',
  },
  {
    title: 'Certificate Name',
    issuer: 'IBM',
    date: '2024',
    description:
      'A short description of the certificate and the practical topics included.',
    image: '/certificates/ibm-certificate.jpg',
    credentialUrl: '#',
  },
]

function Certificates() {
  const [[current, direction], setCurrent] = useState([0, 0])

  const changeCertificate = (newDirection) => {
    const nextIndex =
      (current + newDirection + certificates.length) %
      certificates.length

    setCurrent([nextIndex, newDirection])
  }

  const certificate = certificates[current]

  return (
    <section
      id="certificates"
      className="px-5 py-24 sm:px-8 lg:px-12 lg:py-32"
    >
      <div className="mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{
            duration: 0.6,
            ease: [0.22, 1, 0.36, 1],
          }}
        >
          <p className="font-mono text-xs uppercase tracking-[0.35em] text-yellow-400">
            05 / Certificates
          </p>

         

          <div className="mt-10 overflow-hidden border border-white/10 bg-[#202020]">
            <AnimatePresence
              initial={false}
              custom={direction}
              mode="wait"
            >
              <CertificateSlide
                key={current}
                certificate={certificate}
                direction={direction}
              />
            </AnimatePresence>

            <div className="flex items-center justify-between border-t border-white/10 px-5 py-4 sm:px-6">
              <button
                type="button"
                onClick={() => changeCertificate(-1)}
                aria-label="Previous certificate"
                className="group flex h-10 w-10 items-center justify-center border border-white/10 text-neutral-400 transition hover:border-yellow-400 hover:text-yellow-400"
              >
                <ArrowLeft
                  size={17}
                  className="transition-transform group-hover:-translate-x-0.5"
                />
              </button>

              <div className="flex items-center gap-2">
                {certificates.map((certificateItem, index) => (
                  <button
                    key={`${certificateItem.title}-${index}`}
                    type="button"
                    onClick={() =>
                      setCurrent([
                        index,
                        index > current ? 1 : -1,
                      ])
                    }
                    aria-label={`View certificate ${index + 1}`}
                    className={`h-1.5 rounded-full transition-all duration-300 ${
                      index === current
                        ? 'w-8 bg-yellow-400'
                        : 'w-1.5 bg-white/20 hover:bg-white/40'
                    }`}
                  />
                ))}
              </div>

              <button
                type="button"
                onClick={() => changeCertificate(1)}
                aria-label="Next certificate"
                className="group flex h-10 w-10 items-center justify-center border border-white/10 text-neutral-400 transition hover:border-yellow-400 hover:text-yellow-400"
              >
                <ArrowRight
                  size={17}
                  className="transition-transform group-hover:translate-x-0.5"
                />
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

function CertificateSlide({ certificate, direction }) {
  const variants = {
    enter: {
      opacity: 0,
      x: direction >= 0 ? 70 : -70,
    },
    active: {
      opacity: 1,
      x: 0,
    },
    exit: {
      opacity: 0,
      x: direction >= 0 ? -70 : 70,
    },
  }

  return (
    <motion.div
      custom={direction}
      variants={variants}
      initial="enter"
      animate="active"
      exit="exit"
      transition={{
        duration: 0.4,
        ease: [0.22, 1, 0.36, 1],
      }}
      className="grid md:grid-cols-2"
    >
      <div className="min-h-64 overflow-hidden bg-[#171717] md:min-h-80">
        <img
          src={certificate.image}
          alt={`${certificate.title} certificate`}
          className="h-full w-full object-cover transition-transform duration-500 hover:scale-[1.02]"
        />
      </div>

      <div className="flex min-h-64 flex-col justify-between p-6 sm:p-8 md:min-h-80">
        <div>
          <div className="flex items-center gap-3">
            <p className="font-mono text-[10px] uppercase tracking-[0.22em] text-yellow-400">
              {certificate.issuer}
            </p>

            <span className="h-1 w-1 rounded-full bg-neutral-600" />

            <p className="font-mono text-[10px] text-neutral-500">
              {certificate.date}
            </p>
          </div>

          <h3 className="mt-5 text-2xl text-yellow-400 font-semibold leading-tight tracking-tight text-(--text-primary) sm:text-3xl">
            {certificate.title}
          </h3>

          <p className="mt-5 text-sm leading-7 text-neutral-400">
            {certificate.description}
          </p>
        </div>

        <a
          href={certificate.credentialUrl}
          target="_blank"
          rel="noreferrer"
          className="group mt-8 inline-flex w-fit items-center gap-3 text-sm font-medium text-neutral-300 transition-colors hover:text-yellow-400"
        >
          View credential

          <ArrowUpRight
            size={16}
            className="transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1"
          />
        </a>
      </div>
    </motion.div>
  )
}

export default Certificates