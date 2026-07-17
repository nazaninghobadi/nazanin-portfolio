import { motion } from 'framer-motion'

const fadeUp = {
  hidden: { opacity: 0, y: 18 },
  show: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { delay: 0.15 * i, duration: 0.7, ease: 'easeOut' },
  }),
}

export default function Hero() {
  return (
    <section id="top" className="relative pt-20 pb-28 md:pt-48 md:pb-36">
      <div className="mx-auto max-w-6xl px-6 grid lg:grid-cols-[1.1fr_0.9fr] items-center gap-16">
        <div>
          <div className="md:hidden flex justify-center mt-2 mb-10">
            <img
              src="/images/profilee.png"
              alt="Nazanin Ghobadi"
              className="h-28 w-28 rounded-full object-cover object-top border-2 border-gold-dim/60 shadow-lg"
            />
          </div>
          <motion.p
            initial="hidden"
            animate="show"
            variants={fadeUp}
            custom={0}
            className="section-label mb-5"
          >
            Computer Engineering · AI Track
          </motion.p>

          <motion.h1
            initial="hidden"
            animate="show"
            variants={fadeUp}
            custom={1}
            className="font-display font-semibold text-4xl sm:text-5xl lg:text-6xl leading-[1.08] tracking-tight"
          >
            Nazanin Ghobadi
          </motion.h1>

          <motion.p
            initial="hidden"
            animate="show"
            variants={fadeUp}
            custom={2}
            className="mt-5 text-lg sm:text-xl text-muted max-w-xl"
          >
            Computer engineering student, interested in artificial intelligence and building practical software
            solutions.
          </motion.p>

          <motion.p
            initial="hidden"
            animate="show"
            variants={fadeUp}
            custom={3}
            className="mt-6 max-w-lg text-[15px] leading-relaxed text-faint"
          >
            Exploring AI, machine learning, and intelligent systems through practical projects.
          </motion.p>

          <motion.div
            initial="hidden"
            animate="show"
            variants={fadeUp}
            custom={4}
            className="mt-9 flex flex-wrap items-center gap-4"
          >
            <a
              href="#projects"
              className="inline-flex items-center gap-2 rounded-full bg-gold text-bg px-6 py-3 text-sm font-medium hover:bg-teal transition-colors"
            >
              View projects
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
                <path d="M3 7h8M7 3l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-full border border-border px-6 py-3 text-sm font-medium text-text hover:border-gold-dim transition-colors"
            >
              Contact me
            </a>
          </motion.div>
        </div>
        <motion.div
        initial={{ opacity: 0, scale: 0.96 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.9, ease: 'easeOut', delay: 0.3 }}
        className="relative hidden md:flex justify-center lg:justify-end"
        >
          <div
            aria-hidden="true"
            className="absolute inset-0 m-auto h-[85%] w-[85%] rounded-full blur-3xl opacity-30"
            style={{
              background:
                'radial-gradient(circle, var(--color-gold) 0%, var(--color-teal) 55%, transparent 75%)',
            }}
          />
          <img
          src="/images/profilee.png"
          alt="Nazanin Ghobadi"
          className="relative w-auto max-h-[220px] md:max-h-none md:w-full md:max-w-sm lg:max-w-md object-contain drop-shadow-[0_20px_50px_rgba(0,0,0,0.5)]"
          />
        </motion.div>
      </div>
    </section>
  )
}
