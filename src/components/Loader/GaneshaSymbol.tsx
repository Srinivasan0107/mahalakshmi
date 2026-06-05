import { motion } from 'framer-motion'

export function GaneshaSymbol() {
  return (
    <motion.div
      className="relative flex items-center justify-center"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ duration: 1.2, ease: 'easeOut' }}
    >
      {/* Outer glow ring */}
      <motion.div
        className="absolute rounded-full"
        style={{
          width: 120,
          height: 120,
          background:
            'radial-gradient(circle, rgba(212,175,55,0.4) 0%, rgba(212,175,55,0) 70%)',
        }}
        animate={{ scale: [1, 1.3, 1], opacity: [0.5, 1, 0.5] }}
        transition={{ duration: 2.5, repeat: Infinity, ease: 'easeInOut' }}
      />

      {/* Om symbol */}
      <motion.div
        className="relative z-10 text-center select-none"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 1 }}
      >
        <span
          style={{
            fontFamily: 'serif',
            fontSize: '5rem',
            lineHeight: 1,
            background:
              'linear-gradient(135deg, #A8892A 0%, #F0D060 40%, #D4AF37 60%, #A8892A 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text',
            filter: 'drop-shadow(0 0 12px rgba(212,175,55,0.8))',
            display: 'block',
          }}
          aria-label="Om symbol"
        >
          ॐ
        </span>
      </motion.div>
    </motion.div>
  )
}
