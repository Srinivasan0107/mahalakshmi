import { motion } from 'framer-motion'

export function OrnamentalLines() {
  return (
    <div className="flex items-center justify-center gap-3 w-full max-w-xs mx-auto">
      {/* Left line */}
      <motion.div
        className="h-px flex-1"
        style={{ background: 'linear-gradient(90deg, transparent, #D4AF37)' }}
        initial={{ scaleX: 0, originX: 1 }}
        animate={{ scaleX: 1 }}
        transition={{ duration: 1, delay: 1.2, ease: 'easeOut' }}
      />

      {/* Center diamond */}
      <motion.div
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.4, delay: 1.6 }}
        style={{
          width: 8,
          height: 8,
          background: '#D4AF37',
          transform: 'rotate(45deg)',
          flexShrink: 0,
          boxShadow: '0 0 6px rgba(212,175,55,0.8)',
        }}
      />

      {/* Right line */}
      <motion.div
        className="h-px flex-1"
        style={{ background: 'linear-gradient(90deg, #D4AF37, transparent)' }}
        initial={{ scaleX: 0, originX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ duration: 1, delay: 1.2, ease: 'easeOut' }}
      />
    </div>
  )
}
