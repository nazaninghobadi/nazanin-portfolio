import { motion, useReducedMotion } from 'framer-motion'

// Signature visual: a loss curve that starts noisy and converges — a quiet
// stand-in for "growth journey" that comes from the subject's own vocabulary
// rather than a neuron cluster or robot.
const PATH =
  'M0,40 C20,70 35,20 55,55 C75,90 95,50 115,72 C140,100 155,60 175,85 ' +
  'C200,112 220,78 245,96 C270,112 290,92 315,104 C345,118 365,104 390,112 ' +
  'C420,120 445,112 470,118 C500,124 525,120 550,122 C570,123.5 585,124 600,124'

export default function TrainingCurve({ variant = 'hero', className = '' }) {
  const reduceMotion = useReducedMotion()

  if (variant === 'divider') {
    return (
      <svg
        viewBox="0 0 600 24"
        className={className}
        preserveAspectRatio="none"
        aria-hidden="true"
      >
        <path
          d="M0,18 C40,6 80,20 130,10 C180,2 220,18 280,12 C340,6 380,16 440,10 C500,4 540,14 600,8"
          fill="none"
          stroke="var(--color-border)"
          strokeWidth="1"
        />
      </svg>
    )
  }

  return (
    <svg
      viewBox="0 0 600 220"
      className={className}
      role="img"
      aria-label="Illustration of a training loss curve converging toward a target line"
    >
      <line x1="0" y1="128" x2="600" y2="128" stroke="var(--color-border)" strokeWidth="1" strokeDasharray="2 6" />
      <text x="4" y="118" fontFamily="var(--font-mono)" fontSize="10" fill="var(--color-faint)" letterSpacing="1">
        target
      </text>

      <motion.path
        d={PATH}
        fill="none"
        stroke="var(--color-gold)"
        strokeWidth="2.5"
        strokeLinecap="round"
        initial={reduceMotion ? false : { pathLength: 0, opacity: 0.4 }}
        animate={{ pathLength: 1, opacity: 1 }}
        transition={{ duration: 2.2, ease: 'easeInOut' }}
      />

      <motion.circle
        r="4.5"
        fill="var(--color-teal)"
        initial={reduceMotion ? false : { offsetDistance: '0%', opacity: 0 }}
        animate={{ offsetDistance: '100%', opacity: 1 }}
        transition={{ duration: 2.2, ease: 'easeInOut' }}
        style={{ offsetPath: `path("${PATH}")` }}
      />

      <circle cx="600" cy="124" r="4.5" fill="var(--color-teal)" opacity="0.9">
        {!reduceMotion && (
          <animate attributeName="r" values="4.5;7;4.5" dur="2.4s" begin="2.2s" repeatCount="indefinite" />
        )}
      </circle>
    </svg>
  )
}
