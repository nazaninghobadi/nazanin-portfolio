import { motion } from 'framer-motion'

const items = [
  'AI-powered applications',
  'LLM-based systems',
  'AI product development',
  'Building useful technology products',
]

export default function Learning() {
  return (
    <section className="relative py-24 md:py-28 border-t border-border">
      <div className="mx-auto max-w-6xl px-6">
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6 }}
          className="section-label"
        >
          Currently exploring
        </motion.p>

        <div className="mt-8 flex flex-wrap gap-3">
          {items.map((item, i) => (
            <motion.span
              key={item}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.45, delay: i * 0.07 }}
              className="rounded-full border border-border px-5 py-2.5 text-sm text-muted hover:border-teal-dim hover:text-text transition-colors"
            >
              {item}
            </motion.span>
          ))}
        </div>
      </div>
    </section>
  )
}
