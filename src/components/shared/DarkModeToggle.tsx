import { motion } from 'framer-motion'
import { Moon, Sun } from 'lucide-react'

interface DarkModeToggleProps {
  isDark: boolean
  onToggle: () => void
}

export function DarkModeToggle({ isDark, onToggle }: DarkModeToggleProps) {
  return (
    <motion.button
      onClick={onToggle}
      className="fixed bottom-6 right-6 z-50 w-11 h-11 rounded-full flex items-center justify-center shadow-lg"
      style={{
        background: isDark
          ? 'rgba(30,20,10,0.9)'
          : 'rgba(253,248,238,0.9)',
        border: '1px solid rgba(212,175,55,0.4)',
        backdropFilter: 'blur(8px)',
      }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      aria-label={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
      initial={{ opacity: 0, scale: 0 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay: 1, duration: 0.4 }}
    >
      <motion.div
        key={isDark ? 'moon' : 'sun'}
        initial={{ rotate: -90, opacity: 0 }}
        animate={{ rotate: 0, opacity: 1 }}
        exit={{ rotate: 90, opacity: 0 }}
        transition={{ duration: 0.3 }}
      >
        {isDark ? (
          <Sun size={18} style={{ color: '#D4AF37' }} />
        ) : (
          <Moon size={18} style={{ color: '#6D1F1F' }} />
        )}
      </motion.div>
    </motion.button>
  )
}
