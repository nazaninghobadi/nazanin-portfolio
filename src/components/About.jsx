import { motion } from 'framer-motion'
import TrainingCurve from './TrainingCurve'

const traits = [
  {
    label: 'Learning mindset',
    desc: 'I embrace being a beginner in new areas, staying curious and consistent until I build real expertise.'
  },
  {
    label: 'Practical development',
    desc: 'I focus on building working prototypes, learning from real feedback, and improving through iteration.'
  },
  {
    label: 'Problem solving',
    desc: 'I start with the actual problem and constraints, then choose the right tools to solve it.'
  },
]

export default function About() {
  return (
    <section id="about" className="relative py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6 }}
          className="section-label"
        >
          About
        </motion.p>

        <div className="mt-6 grid md:grid-cols-[1.3fr_0.7fr] gap-14 items-start">
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.7 }}
            className="font-display text-2xl sm:text-3xl leading-snug tracking-tight text-text/95"
          >
            I'm a computer engineering student passionate about artificial intelligence and developing practical
            solutions. My experience includes machine learning projects, LLM-based applications, and software
            development. I enjoy understanding real-world problems and turning ideas into working solutions.
          </motion.p>

          <div className="flex flex-col gap-6">
            {traits.map((t, i) => (
              <motion.div
                key={t.label}
                initial={{ opacity: 0, y: 14 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-80px' }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="border-l border-border pl-5"
              >
                <p className="font-mono-tag text-xs text-teal">{t.label}</p>
                <p className="mt-1.5 text-sm text-muted leading-relaxed">{t.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>

        <TrainingCurve variant="divider" className="mt-20 w-full h-6" />
      </div>
    </section>
  )
}
