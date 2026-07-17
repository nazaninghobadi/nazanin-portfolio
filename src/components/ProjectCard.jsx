import { motion } from 'framer-motion'

export default function ProjectCard({ project, index }) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.6, delay: (index % 2) * 0.08 }}
      className="card-glow group relative rounded-2xl border border-border bg-surface p-7 flex flex-col h-full"
    >
      <div className="flex items-start justify-between gap-4">
        <span className="font-mono-tag text-[11px] text-teal">{project.tag}</span>
        {project.achievement && (
          <span className="font-mono-tag text-[11px] text-gold whitespace-nowrap">🏆 winner</span>
        )}
      </div>

      <h3 className="mt-4 font-display text-xl font-semibold tracking-tight">{project.title}</h3>
      <p className="mt-1 text-sm text-faint">{project.subtitle}</p>

      <p className="mt-4 text-sm leading-relaxed text-muted">{project.description}</p>

      {project.details?.length > 0 && (
        <ul className="mt-5 grid grid-cols-2 gap-x-3 gap-y-1.5">
          {project.details.map((d) => (
            <li key={d} className="flex items-center gap-2 text-[13px] text-muted">
              <span className="h-1 w-1 rounded-full bg-teal-dim shrink-0" />
              {d}
            </li>
          ))}
        </ul>
      )}

      <div className="mt-6 flex flex-wrap gap-2">
        {project.stack.map((s) => (
          <span
            key={s}
            className="font-mono-tag text-[11px] rounded-full border border-border px-2.5 py-1 text-muted"
          >
            {s}
          </span>
        ))}
      </div>

      {project.achievement && (
        <p className="mt-5 text-[13px] text-gold/90 font-medium">{project.achievement}</p>
      )}

      <div className="mt-auto pt-6 flex items-center gap-4">
        {project.links.map((link) => (
          <a
            key={link.label}
            href={link.href}
            className="inline-flex items-center gap-1.5 text-xs font-mono-tag text-text hover:text-gold transition-colors"
          >
            {link.type === 'github' ? (
            <svg width="14" height="14" viewBox="0 0 16 16" fill="currentColor" aria-hidden="true">
            <path d="M8 0C3.58 0 0 3.58 0 8a8 8 0 0 0 5.47 7.59c.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82a7.5 7.5 0 0 1 4 0c1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8 8 0 0 0 16 8c0-4.42-3.58-8-8-8Z" />
            </svg>
            ) : (
                  <span>↗</span>
                  )}
            {link.label}
          </a>
        ))}
      </div>
    </motion.article>
  )
}
