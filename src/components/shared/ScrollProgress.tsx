import { motion, useSpring } from 'framer-motion'
import { useScrollProgress } from '../../hooks/useScrollProgress'

export function ScrollProgress() {
  const progress = useScrollProgress()
  const scaleX = useSpring(progress / 100, { stiffness: 200, damping: 30 })

  return (
    <motion.div
      className="fixed top-0 left-0 right-0 z-50 h-0.5 origin-left"
      style={{
        scaleX,
        background: 'linear-gradient(90deg, #6D1F1F, #D4AF37, #6D1F1F)',
        transformOrigin: 'left',
      }}
      aria-hidden="true"
    />
  )
}
