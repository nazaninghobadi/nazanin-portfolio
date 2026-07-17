import { motion } from 'framer-motion'

const CONTACTS = [
  {
    label: 'Email',
    value: 'nazligh8383@gmail.com',
    href: 'mailto:nazligh8383@gmail.com',
  },
  {
    label: 'GitHub',
    value: 'github.com/nazaninghobadi',
    href: 'https://github.com/nazaninghobadi',
  },
  {
  label: 'Kaggle',
  value: 'kaggle.com/nazaningh83',
  href: 'https://www.kaggle.com/nazaningh83',
  },
]

export default function ContactSection() {
  return (
    <section id="contact" className="relative py-24 md:py-32 border-t border-border">
      <div className="mx-auto max-w-6xl px-6">
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6 }}
          className="section-label"
        >
          Contact
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6, delay: 0.05 }}
          className="mt-4 font-display text-3xl sm:text-4xl md:text-5xl font-semibold tracking-tight max-w-2xl"
        >
          Open to internships, collaborations, and conversations about AI.
        </motion.h2>

        <div className="mt-12 grid sm:grid-cols-3 gap-4">
          {CONTACTS.map((c, i) => (
            <motion.a
              key={c.label}
              href={c.href}
              target={c.label !== 'Email' ? '_blank' : undefined}
              rel={c.label !== 'Email' ? 'noreferrer' : undefined}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="group rounded-2xl border border-border bg-surface p-6 hover:border-gold-dim transition-colors"
            >
              <p className="font-mono-tag text-[11px] text-teal">{c.label}</p>
              <p className="mt-3 text-sm text-text group-hover:text-gold transition-colors break-all">{c.value}</p>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  )
}
