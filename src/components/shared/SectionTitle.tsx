import { motion } from 'framer-motion'
import { GoldDivider } from './GoldDivider'

interface SectionTitleProps {
  title: string
  subtitle?: string
  light?: boolean
}

export function SectionTitle({ title, subtitle, light = false }: SectionTitleProps) {
  return (
    <motion.div
      className="text-center mb-12"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
    >
      {subtitle && (
        <p
          className="text-xs tracking-[0.3em] uppercase mb-3"
          style={{ fontFamily: 'Cinzel, serif', color: '#D4AF37' }}
        >
          {subtitle}
        </p>
      )}
      <h2
        className="text-3xl md:text-4xl mb-4"
        style={{
          fontFamily: 'Cormorant Garamond, serif',
          color: light ? '#E8D5B0' : '#6D1F1F',
          fontWeight: 600,
        }}
      >
        {title}
      </h2>
      <GoldDivider />
    </motion.div>
  )
}
