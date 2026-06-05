import { motion, type Variants } from 'framer-motion'
import { invitationData } from '../../data/invitationData'
import { GoldDivider } from '../shared/GoldDivider'
import { FloatingParticles } from '../shared/FloatingParticles'
import houseImage from '../../assets/house.svg'

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.2, delayChildren: 0.1 },
  },
}

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] },
  },
}

export function Hero({ isDark = false }: { isDark?: boolean }) {
  const bg = isDark
    ? 'linear-gradient(160deg, #140D08 0%, #1E1208 50%, #140D08 100%)'
    : 'linear-gradient(160deg, #FAF7F2 0%, #FDF3E3 50%, #FAF7F2 100%)'
  const maroon = isDark ? '#E8957A' : '#6D1F1F'
  const body = isDark ? '#C8B89A' : '#4A3728'
  const strong = isDark ? '#EDE0CC' : '#2B2B2B'
  const roleColor = isDark ? '#B89060' : '#6D1F1F'

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      style={{ background: bg }}
    >
      {/* Mandala background */}
      <div
        className="absolute inset-0 opacity-5 pointer-events-none"
        aria-hidden="true"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='400' height='400' viewBox='0 0 400 400'%3E%3Ccircle cx='200' cy='200' r='180' fill='none' stroke='%23D4AF37' stroke-width='1'/%3E%3Ccircle cx='200' cy='200' r='140' fill='none' stroke='%23D4AF37' stroke-width='0.5'/%3E%3Ccircle cx='200' cy='200' r='100' fill='none' stroke='%23D4AF37' stroke-width='0.5'/%3E%3Ccircle cx='200' cy='200' r='60' fill='none' stroke='%23D4AF37' stroke-width='0.5'/%3E%3C/svg%3E")`,
          backgroundSize: '400px 400px',
          backgroundPosition: 'center',
        }}
      />

      <FloatingParticles />

      <motion.div
        className="relative z-10 w-full max-w-2xl mx-auto px-6 py-12"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <div
          className="relative p-8 md:p-12 text-center glossy-card"
          style={{
            boxShadow: undefined,
          }}
        >
          <CornerOrnament position="top-left" />
          <CornerOrnament position="top-right" />
          <CornerOrnament position="bottom-left" />
          <CornerOrnament position="bottom-right" />
          <div className="absolute inset-3 pointer-events-none" style={{ border: '0.5px solid rgba(212,175,55,0.2)' }} />

          {/* Om */}
          <motion.div variants={itemVariants} className="mb-4">
            <span
              style={{
                fontSize: '2.5rem', fontFamily: 'serif',
                background: 'linear-gradient(135deg, #A8892A, #D4AF37, #A8892A)',
                WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text',
                filter: 'drop-shadow(0 0 8px rgba(212,175,55,0.4))',
              }}
              aria-label="Om"
            >ॐ</span>
          </motion.div>

          {/* Blessing */}
          <motion.p
            variants={itemVariants}
            className="text-base tracking-wide mb-6"
            style={{ fontFamily: "'Noto Sans Tamil', Georgia, serif", color: maroon, fontSize: '1.1rem' }}
          >
            {invitationData.blessing}
          </motion.p>

          <motion.div variants={itemVariants}><GoldDivider /></motion.div>

          {/* Ceremony name */}
          <motion.div variants={itemVariants} className="my-6">
            <h1
              className="text-4xl md:text-5xl mb-2"
              style={{ fontFamily: 'Cormorant Garamond, serif', color: maroon, fontWeight: 600, lineHeight: 1.2 }}
            >
              {invitationData.ceremonyName}
            </h1>
            <p className="text-base tracking-[0.25em] uppercase" style={{ fontFamily: 'Cinzel, serif', color: '#D4AF37', fontSize: '0.75rem' }}>
              {invitationData.ceremonySubtitle}
            </p>
          </motion.div>

          <motion.div variants={itemVariants}><GoldDivider /></motion.div>

          {/* Intro */}
          <motion.p
            variants={itemVariants}
            className="text-base md:text-lg leading-relaxed my-6"
            style={{ fontFamily: 'Cormorant Garamond, serif', color: body, fontStyle: 'italic', fontWeight: 400 }}
          >
            {invitationData.intro}
          </motion.p>

          {/* Home Name */}
          <motion.div variants={itemVariants} className="my-6">
            <h2
              className="text-3xl md:text-4xl tracking-widest uppercase"
              style={{
                fontFamily: 'Cinzel, serif',
                background: 'linear-gradient(135deg, #A8892A 0%, #F0D060 40%, #D4AF37 60%, #A8892A 100%)',
                WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text',
                letterSpacing: '0.15em',
              }}
            >
              {invitationData.homeName}
            </h2>
          </motion.div>

          {/* House Illustration */}
          <motion.div variants={itemVariants} className="my-4 flex justify-center">
            <img
              src={houseImage}
              alt="Mahalakshmi Illam – our new home"
              className="w-full max-w-sm"
              style={{ filter: 'drop-shadow(0 4px 16px rgba(212,175,55,0.25))', borderRadius: '2px' }}
            />
          </motion.div>

          <motion.div variants={itemVariants}><GoldDivider /></motion.div>

          {/* Hosts */}
          <motion.div variants={itemVariants} className="mt-6 space-y-3">
            {invitationData.hosts.map((host, i) => (
              <div key={i} className="text-center">
                <p className="text-xl md:text-2xl" style={{ fontFamily: 'Cormorant Garamond, serif', color: strong, fontWeight: 600 }}>
                  {host.name}
                </p>
                <p className="text-sm tracking-wider mt-1" style={{ color: roleColor, fontFamily: 'Lato, sans-serif' }}>
                  {host.role}
                </p>
              </div>
            ))}
            <div className="flex items-center justify-center gap-4 mt-2">
              {invitationData.family.map((member, i) => (
                <span key={i}>
                  <span className="text-base md:text-lg" style={{ fontFamily: 'Cormorant Garamond, serif', color: body }}>
                    {member.name}
                  </span>
                  {i < invitationData.family.length - 1 && (
                    <span className="mx-3" style={{ color: '#D4AF37' }}>&</span>
                  )}
                </span>
              ))}
            </div>
          </motion.div>

          {/* Lotus row */}
          <motion.div variants={itemVariants} className="flex justify-center gap-4 mt-8 opacity-40">
            {['❋', '✿', '❋'].map((f, i) => (
              <span key={i} style={{ color: '#D4AF37', fontSize: '1.2rem' }}>{f}</span>
            ))}
          </motion.div>
        </div>
      </motion.div>
    </section>
  )
}

function CornerOrnament({ position }: { position: 'top-left' | 'top-right' | 'bottom-left' | 'bottom-right' }) {
  const posClass = { 'top-left': 'top-1 left-1', 'top-right': 'top-1 right-1', 'bottom-left': 'bottom-1 left-1', 'bottom-right': 'bottom-1 right-1' }[position]
  const rot = { 'top-left': '0deg', 'top-right': '90deg', 'bottom-left': '270deg', 'bottom-right': '180deg' }[position]
  return (
    <div className={`absolute ${posClass} w-6 h-6 pointer-events-none`} style={{ transform: `rotate(${rot})` }} aria-hidden="true">
      <svg viewBox="0 0 24 24" fill="none">
        <path d="M2 2 L10 2 L2 10 Z" fill="rgba(212,175,55,0.6)" />
        <path d="M2 2 L8 2" stroke="#D4AF37" strokeWidth="0.5" />
        <path d="M2 2 L2 8" stroke="#D4AF37" strokeWidth="0.5" />
      </svg>
    </div>
  )
}
