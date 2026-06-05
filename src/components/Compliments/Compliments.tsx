import { motion, type Variants } from 'framer-motion'
import { invitationData } from '../../data/invitationData'
import { GoldDivider } from '../shared/GoldDivider'
import { SectionTitle } from '../shared/SectionTitle'

const staggerContainer: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.2 } },
}

const cardItem: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1, y: 0,
    transition: { duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] },
  },
}

export function Compliments({ isDark = false }: { isDark?: boolean }) {
  const bg = isDark
    ? 'linear-gradient(160deg, #140D08 0%, #1A1008 100%)'
    : 'linear-gradient(160deg, #FAF7F2 0%, #FDF3E3 100%)'
  const strong = isDark ? '#EDE0CC' : '#2B2B2B'

  return (
    <section id="compliments" className="relative py-20 px-4 overflow-hidden" style={{ background: bg }}>
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none" aria-hidden="true"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100' height='100' viewBox='0 0 100 100'%3E%3Ccircle cx='50' cy='50' r='45' fill='none' stroke='%236D1F1F' stroke-width='1'/%3E%3C/svg%3E")`,
          backgroundSize: '100px 100px',
        }}
      />

      <div className="max-w-2xl mx-auto relative z-10">
        <SectionTitle title="With Best Compliments" subtitle="Our Family" light={isDark} />

        <motion.div variants={staggerContainer} initial="hidden" whileInView="visible" viewport={{ once: true }} className="space-y-5">
          {invitationData.compliments.map((couple, i) => (
            <motion.div key={i} variants={cardItem}
              className="relative rounded-sm overflow-hidden text-center glossy-card"
              style={{}}
              whileHover={{ y: -3 }}>
              <div className="absolute left-0 top-0 bottom-0 w-1" style={{ background: 'linear-gradient(180deg, #6D1F1F, #D4AF37, #6D1F1F)' }} />
              <div className="absolute right-0 top-0 bottom-0 w-1" style={{ background: 'linear-gradient(180deg, #6D1F1F, #D4AF37, #6D1F1F)' }} />
              <div className="py-6 px-8">
                <div className="flex items-center justify-center gap-3 flex-wrap">
                  <span className="text-xl md:text-2xl" style={{ fontFamily: 'Cormorant Garamond, serif', color: strong, fontWeight: 600 }}>
                    {couple.husband}
                  </span>
                  <span style={{ color: '#D4AF37', fontSize: '1.2rem' }}>✦</span>
                  <span className="text-xl md:text-2xl" style={{ fontFamily: 'Cormorant Garamond, serif', color: strong, fontWeight: 600 }}>
                    {couple.wife}
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div className="mt-10 text-center"
          initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8, delay: 0.5 }}>
          <GoldDivider />
          <p className="text-xs tracking-[0.3em] uppercase mt-4" style={{ fontFamily: 'Cinzel, serif', color: '#8B7355' }}>
            With Joy & Gratitude
          </p>
        </motion.div>
      </div>
    </section>
  )
}
