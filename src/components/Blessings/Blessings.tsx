import { motion } from 'framer-motion'
import { invitationData } from '../../data/invitationData'
import { GoldDivider } from '../shared/GoldDivider'
import { FloatingParticles } from '../shared/FloatingParticles'

function LotusPattern() {
  return (
    <div className="flex items-center justify-center gap-2 my-4" aria-hidden="true">
      {['✿', '❀', '✾', '❀', '✿'].map((f, i) => (
        <motion.span key={i} style={{ color: '#D4AF37', fontSize: '1.4rem', opacity: 0.6 }}
          animate={{ y: [0, -6, 0] }} transition={{ duration: 3, delay: i * 0.3, repeat: Infinity, ease: 'easeInOut' }}>
          {f}
        </motion.span>
      ))}
    </div>
  )
}

function MandalaDecoration() {
  return (
    <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-5" aria-hidden="true">
      <svg width="500" height="500" viewBox="0 0 500 500" fill="none">
        {[180, 150, 120, 90, 60].map((r, i) => (
          <circle key={i} cx="250" cy="250" r={r} stroke="#D4AF37" strokeWidth="0.5" />
        ))}
        {Array.from({ length: 12 }).map((_, i) => {
          const angle = (i * 30 * Math.PI) / 180
          return <line key={i} x1={250 + 70 * Math.cos(angle)} y1={250 + 70 * Math.sin(angle)} x2={250 + 180 * Math.cos(angle)} y2={250 + 180 * Math.sin(angle)} stroke="#D4AF37" strokeWidth="0.5" />
        })}
        {Array.from({ length: 8 }).map((_, i) => {
          const angle = (i * 45 * Math.PI) / 180
          return <circle key={i} cx={250 + 130 * Math.cos(angle)} cy={250 + 130 * Math.sin(angle)} r="4" fill="#D4AF37" opacity="0.5" />
        })}
      </svg>
    </div>
  )
}

export function Blessings({ isDark = false }: { isDark?: boolean }) {
  const bg = isDark
    ? 'linear-gradient(160deg, #140D08 0%, #1A1008 50%, #140D08 100%)'
    : 'linear-gradient(160deg, #FDF8EE 0%, #FAF3E0 50%, #FDF8EE 100%)'
  const body = isDark ? '#C8B89A' : '#4A3728'
  const nameColor = isDark ? '#E8957A' : '#6D1F1F'

  return (
    <section id="blessings" className="relative py-24 px-4 overflow-hidden" style={{ background: bg }}>
      <MandalaDecoration />
      <FloatingParticles />

      <div className="max-w-2xl mx-auto relative z-10">
        <motion.div className="text-center mb-8"
          initial={{ opacity: 0, scale: 0.8 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ duration: 1 }}>
          <span style={{
            fontSize: '4rem', fontFamily: 'serif',
            background: 'linear-gradient(135deg, #A8892A, #F0D060, #D4AF37, #A8892A)',
            WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text',
            filter: 'drop-shadow(0 0 16px rgba(212,175,55,0.5))', display: 'block', lineHeight: 1,
          }} aria-label="Om">ॐ</span>
        </motion.div>

        <LotusPattern />

        <motion.div className="text-center my-8"
          initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.9 }}>
          <div className="relative inline-block w-full rounded-sm p-8 md:p-12 glossy-card"
            style={{}}>
            {['top-2 left-2', 'top-2 right-2', 'bottom-2 left-2', 'bottom-2 right-2'].map((pos, i) => (
              <div key={i} className={`absolute ${pos}`} style={{ width: 8, height: 8, background: '#D4AF37', transform: 'rotate(45deg)', opacity: 0.6 }} aria-hidden="true" />
            ))}

            <GoldDivider />

            <motion.p className="text-2xl md:text-3xl leading-relaxed my-8"
              style={{ fontFamily: 'Cormorant Garamond, serif', color: body, fontStyle: 'italic', fontWeight: 400 }}
              initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ duration: 1, delay: 0.3 }}>
              "{invitationData.blessingQuote}"
            </motion.p>

            <GoldDivider />

            <motion.div className="mt-6"
              initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8, delay: 0.5 }}>
              <p className="text-xs tracking-[0.3em] uppercase" style={{ fontFamily: 'Cinzel, serif', color: '#D4AF37' }}>— With Folded Hands —</p>
              <p className="text-xl mt-2" style={{ fontFamily: 'Cormorant Garamond, serif', color: nameColor }}>Mr. Balaji & Mrs. Mahalakshmi</p>
            </motion.div>
          </div>
        </motion.div>

        <LotusPattern />

        <motion.div className="flex justify-center mt-4 text-4xl"
          animate={{ filter: ['drop-shadow(0 0 6px rgba(212,175,55,0.6))', 'drop-shadow(0 0 18px rgba(212,175,55,1))', 'drop-shadow(0 0 6px rgba(212,175,55,0.6))'] }}
          transition={{ duration: 2.5, repeat: Infinity, ease: 'easeInOut' }} aria-label="Diya">🪔</motion.div>
      </div>
    </section>
  )
}
