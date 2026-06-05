import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { GaneshaSymbol } from './GaneshaSymbol'
import { OrnamentalLines } from './OrnamentalLines'

interface LoaderProps {
  onComplete: () => void
}

export function Loader({ onComplete }: LoaderProps) {
  const [phase, setPhase] = useState<'init' | 'title' | 'border' | 'exit'>('init')

  useEffect(() => {
    const t1 = setTimeout(() => setPhase('title'), 1800)
    const t2 = setTimeout(() => setPhase('border'), 3000)
    const t3 = setTimeout(() => setPhase('exit'), 4500)
    const t4 = setTimeout(() => onComplete(), 5400)

    return () => {
      clearTimeout(t1)
      clearTimeout(t2)
      clearTimeout(t3)
      clearTimeout(t4)
    }
  }, [onComplete])

  return (
    <AnimatePresence>
      {phase !== 'exit' ? (
        <motion.div
          key="loader"
          className="fixed inset-0 z-50 flex flex-col items-center justify-center"
          style={{ background: '#0D0A07' }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.9, ease: 'easeInOut' }}
        >
          {/* Subtle background gradient */}
          <div
            className="absolute inset-0"
            style={{
              background:
                'radial-gradient(ellipse at center, rgba(109,31,31,0.15) 0%, rgba(13,10,7,1) 70%)',
            }}
          />

          <div className="relative z-10 flex flex-col items-center gap-6 px-8">
            {/* Ganesha / Om Symbol */}
            <GaneshaSymbol />

            {/* Ornamental lines */}
            <motion.div
              className="w-64"
              initial={{ opacity: 0 }}
              animate={{ opacity: phase === 'init' ? 0 : 1 }}
              transition={{ duration: 0.8 }}
            >
              <OrnamentalLines />
            </motion.div>

            {/* Home name */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={
                phase === 'title' || phase === 'border'
                  ? { opacity: 1, y: 0 }
                  : { opacity: 0, y: 20 }
              }
              transition={{ duration: 1, ease: 'easeOut' }}
              className="text-center"
            >
              <h1
                className="text-4xl md:text-5xl tracking-widest uppercase"
                style={{
                  fontFamily: 'Cinzel, serif',
                  background:
                    'linear-gradient(135deg, #A8892A 0%, #F0D060 40%, #D4AF37 60%, #A8892A 100%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                  letterSpacing: '0.2em',
                }}
              >
                Mahalakshmi Illam
              </h1>
              <motion.p
                className="text-sm tracking-[0.3em] mt-2 uppercase"
                style={{ color: 'rgba(212,175,55,0.6)', fontFamily: 'Lato, sans-serif' }}
                initial={{ opacity: 0 }}
                animate={{ opacity: phase === 'title' || phase === 'border' ? 1 : 0 }}
                transition={{ delay: 0.4, duration: 0.8 }}
              >
                Grihapravesam
              </motion.p>
            </motion.div>

            {/* Animated border drawing */}
            {(phase === 'border') && (
              <motion.div
                className="absolute inset-8 md:inset-16 pointer-events-none"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
              >
                {/* Top border */}
                <motion.div
                  className="absolute top-0 left-0 h-px"
                  style={{ background: 'linear-gradient(90deg, transparent, #D4AF37, transparent)' }}
                  initial={{ width: '0%' }}
                  animate={{ width: '100%' }}
                  transition={{ duration: 0.8, ease: 'easeOut' }}
                />
                {/* Bottom border */}
                <motion.div
                  className="absolute bottom-0 right-0 h-px"
                  style={{ background: 'linear-gradient(90deg, transparent, #D4AF37, transparent)' }}
                  initial={{ width: '0%' }}
                  animate={{ width: '100%' }}
                  transition={{ duration: 0.8, delay: 0.2, ease: 'easeOut' }}
                />
                {/* Left border */}
                <motion.div
                  className="absolute top-0 left-0 w-px"
                  style={{ background: 'linear-gradient(180deg, transparent, #D4AF37, transparent)' }}
                  initial={{ height: '0%' }}
                  animate={{ height: '100%' }}
                  transition={{ duration: 0.8, delay: 0.4, ease: 'easeOut' }}
                />
                {/* Right border */}
                <motion.div
                  className="absolute bottom-0 right-0 w-px"
                  style={{ background: 'linear-gradient(180deg, transparent, #D4AF37, transparent)' }}
                  initial={{ height: '0%' }}
                  animate={{ height: '100%' }}
                  transition={{ duration: 0.8, delay: 0.4, ease: 'easeOut' }}
                />
                {/* Corner ornaments */}
                {['top-0 left-0', 'top-0 right-0', 'bottom-0 left-0', 'bottom-0 right-0'].map((pos, i) => (
                  <motion.div
                    key={i}
                    className={`absolute ${pos} w-3 h-3`}
                    style={{ background: '#D4AF37', transform: 'rotate(45deg)', margin: '-1px' }}
                    initial={{ scale: 0, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ delay: 0.9 + i * 0.1, duration: 0.3 }}
                  />
                ))}
              </motion.div>
            )}
          </div>
        </motion.div>
      ) : null}
    </AnimatePresence>
  )
}
