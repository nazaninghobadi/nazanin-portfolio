import { motion } from 'framer-motion'

export default function Achievements() {
  return (
    <section id="achievements" className="relative py-24 md:py-32 border-t border-border">
      <div className="mx-auto max-w-6xl px-6">
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6 }}
          className="section-label"
        >
          Achievements
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mt-8 rounded-2xl border border-gold-dim/40 bg-gradient-to-br from-surface to-surface-2 p-8 md:p-10 flex flex-col md:flex-row md:items-center gap-6"
        >
          <div className="text-4xl">🏆</div>
          <div>
            <p className="font-display text-xl font-semibold tracking-tight">AI Competition Winner, 2025</p>
            <p className="mt-2 text-sm text-muted leading-relaxed max-w-2xl">
              Designed an interpretable machine learning model for non-alcoholic fatty liver disease screening as
              part of a five-person team, as the SmartLiver project — placing explainability alongside accuracy as a
              design requirement, not an afterthought.
            </p>
          </div>
        </motion.div>

        <motion.div
  initial={{ opacity: 0, y: 18 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true, margin: '-80px' }}
  transition={{ duration: 0.6, delay: 0.2 }}
  className="mt-6 rounded-2xl border border-border bg-surface p-8 md:p-10 flex flex-col md:flex-row md:items-center gap-6"
>
  <div className="text-4xl">🎓</div>

  <div>
    <p className="font-display text-xl font-semibold tracking-tight">
      Specialized Artificial Intelligence Workshop
    </p>

    <p className="mt-2 text-sm text-muted leading-relaxed max-w-2xl">
      Co-organized a two-day specialized Artificial Intelligence workshop alongside
      Dr. Mohammad Mehdi Hosseini and Dr. Abdolreza Alavi Gharabagh for over 70
      registered participants. As one of the instructors, I delivered the AI
      Agents session, introducing the foundations of intelligent agents and their
      role in modern AI.
    </p>
  </div>
</motion.div>
      </div>
    </section>
  )
}
