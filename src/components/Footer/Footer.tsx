import { motion } from 'framer-motion'
import { invitationData } from '../../data/invitationData'
import { GoldDivider } from '../shared/GoldDivider'

export function Footer() {
  return (
    <footer
      id="footer"
      className="relative py-16 px-4 overflow-hidden"
      style={{
        background: 'linear-gradient(160deg, #1a0f0f 0%, #2d1515 50%, #1a0f0f 100%)',
      }}
    >
      {/* Radial light effect */}
      <div
        className="absolute inset-0 pointer-events-none"
        aria-hidden="true"
        style={{
          background:
            'radial-gradient(ellipse at center, rgba(212,175,55,0.08) 0%, transparent 70%)',
        }}
      />

      {/* Temple border top */}
      <div
        className="absolute top-0 left-0 right-0 h-px"
        style={{ background: 'linear-gradient(90deg, transparent, #D4AF37, transparent)' }}
      />
      <div
        className="absolute top-1 left-0 right-0 h-px"
        style={{
          background: 'linear-gradient(90deg, transparent, rgba(212,175,55,0.3), transparent)',
        }}
      />

      <div className="max-w-xl mx-auto relative z-10 text-center">
        {/* Diya */}
        <motion.div
          className="text-5xl mb-6"
          animate={{
            filter: [
              'drop-shadow(0 0 8px rgba(212,175,55,0.6))',
              'drop-shadow(0 0 20px rgba(212,175,55,1))',
              'drop-shadow(0 0 8px rgba(212,175,55,0.6))',
            ],
          }}
          transition={{ duration: 2.5, repeat: Infinity, ease: 'easeInOut' }}
          aria-label="Diya"
        >
          🪔
        </motion.div>

        <GoldDivider />

        <motion.div
          className="my-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9 }}
        >
          <h2
            className="text-5xl md:text-6xl mb-4"
            style={{
              fontFamily: 'Cormorant Garamond, serif',
              background: 'linear-gradient(135deg, #A8892A 0%, #F0D060 40%, #D4AF37 60%, #A8892A 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
              fontWeight: 500,
            }}
          >
            {invitationData.footer.thanks}
          </h2>

          <p
            className="text-lg leading-relaxed"
            style={{
              fontFamily: 'Cormorant Garamond, serif',
              color: 'rgba(250,247,242,0.75)',
              fontStyle: 'italic',
            }}
          >
            {invitationData.footer.closing}
          </p>
        </motion.div>

        <GoldDivider />

        <motion.div
          className="mt-8 space-y-3"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          <p
            className="text-2xl md:text-3xl"
            style={{
              fontFamily: 'Cormorant Garamond, serif',
              color: 'rgba(250,247,242,0.9)',
              fontWeight: 500,
            }}
          >
            Mr. Balaji & Mrs. Mahalakshmi
          </p>
          <p
            className="text-base tracking-widest uppercase"
            style={{ fontFamily: 'Cinzel, serif', color: '#D4AF37', opacity: 0.8 }}
          >
            {invitationData.homeName}
          </p>
          <p
            className="text-sm"
            style={{ fontFamily: 'Lato, sans-serif', color: 'rgba(250,247,242,0.5)' }}
          >
            {invitationData.event.date}
          </p>
        </motion.div>

        {/* Decorative lotus row */}
        <motion.div
          className="flex justify-center gap-4 mt-10"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          {['✿', '❀', '✾', '❀', '✿'].map((f, i) => (
            <span key={i} style={{ color: '#D4AF37', opacity: 0.5, fontSize: '1.1rem' }}>
              {f}
            </span>
          ))}
        </motion.div>

        {/* Om at very bottom */}
        <motion.p
          className="mt-8 text-2xl"
          style={{
            fontFamily: 'serif',
            background: 'linear-gradient(135deg, #A8892A, #D4AF37)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text',
            opacity: 0.7,
          }}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 0.7 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.6 }}
          aria-label="Om"
        >
          ॐ
        </motion.p>

        <div
          className="mt-8 pt-4 text-xs"
          style={{
            borderTop: '1px solid rgba(212,175,55,0.15)',
            color: 'rgba(250,247,242,0.3)',
            fontFamily: 'Lato, sans-serif',
          }}
        >
          Mahalakshmi Illam · Porur, Chennai
        </div>
      </div>

      {/* Temple border bottom */}
      <div
        className="absolute bottom-0 left-0 right-0 h-px"
        style={{ background: 'linear-gradient(90deg, transparent, #D4AF37, transparent)' }}
      />
    </footer>
  )
}
