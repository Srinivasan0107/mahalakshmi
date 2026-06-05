import { motion } from 'framer-motion'
import { invitationData } from '../../data/invitationData'
import { GoldDivider } from '../shared/GoldDivider'
import { SectionTitle } from '../shared/SectionTitle'

export function Invitation({ isDark = false }: { isDark?: boolean }) {
  const bg = isDark
    ? 'linear-gradient(180deg, #140D08 0%, #1E1208 50%, #140D08 100%)'
    : 'linear-gradient(180deg, #FAF7F2 0%, #FDF3E3 50%, #FAF7F2 100%)'
  const maroon = isDark ? '#E8957A' : '#6D1F1F'
  const body = isDark ? '#C8B89A' : '#4A3728'
  const strong = isDark ? '#EDE0CC' : '#2B2B2B'

  return (
    <section
      id="invitation"
      className="relative py-20 px-4 overflow-hidden"
      style={{ background: bg }}
    >
      <div
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        aria-hidden="true"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='200' height='200' viewBox='0 0 200 200'%3E%3Cellipse cx='100' cy='100' rx='20' ry='40' fill='none' stroke='%236D1F1F' stroke-width='1'/%3E%3Cellipse cx='100' cy='100' rx='40' ry='20' fill='none' stroke='%236D1F1F' stroke-width='1'/%3E%3C/svg%3E")`,
          backgroundSize: '200px 200px',
        }}
      />

      <div className="max-w-3xl mx-auto relative z-10">
        <SectionTitle title="The Invitation" subtitle="You Are Cordially Invited" light={isDark} />

        <motion.div
          className="relative rounded-sm overflow-hidden glossy-card"
          style={{}}
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9, ease: [0.25, 0.46, 0.45, 0.94] }}
        >
          <div className="h-2 w-full" style={{ background: 'linear-gradient(90deg, #6D1F1F, #D4AF37, #6D1F1F)' }} />

          <div className="p-8 md:p-14 text-center">
            <motion.div
              className="mb-8"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, duration: 0.8 }}
            >
              <div className="inline-block px-6 py-2 mb-4" style={{ border: '1px solid rgba(212,175,55,0.4)', background: 'rgba(212,175,55,0.05)' }}>
                <span className="text-base" style={{ fontFamily: "'Noto Sans Tamil', Georgia, serif", color: maroon }}>
                  {invitationData.blessing}
                </span>
              </div>

              <div className="text-6xl mb-4" style={{ filter: 'drop-shadow(0 0 10px rgba(212,175,55,0.5))', lineHeight: 1 }}>🪔</div>

              <h2 className="text-3xl md:text-4xl mb-2" style={{ fontFamily: 'Cormorant Garamond, serif', color: maroon, fontWeight: 600 }}>
                Grihapravesam
              </h2>
              <p className="text-sm tracking-widest uppercase" style={{ fontFamily: 'Cinzel, serif', color: '#D4AF37' }}>
                Housewarming Ceremony
              </p>
            </motion.div>

            <GoldDivider />

            <motion.div
              className="my-8"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4, duration: 0.8 }}
            >
              <p className="text-xl md:text-2xl leading-loose mb-6" style={{ fontFamily: 'Cormorant Garamond, serif', color: body, fontStyle: 'italic' }}>
                "{invitationData.intro}"
              </p>
              <p className="text-sm tracking-widest uppercase mb-4" style={{ color: '#D4AF37', fontFamily: 'Cinzel, serif' }}>
                With joy, we welcome you to
              </p>
              <h3
                className="text-4xl md:text-5xl tracking-widest uppercase mb-2"
                style={{
                  fontFamily: 'Cinzel, serif',
                  background: 'linear-gradient(135deg, #A8892A 0%, #F0D060 40%, #D4AF37 60%, #A8892A 100%)',
                  WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text',
                  letterSpacing: '0.12em',
                }}
              >
                {invitationData.homeName}
              </h3>
            </motion.div>

            <GoldDivider />

            <motion.div
              className="mt-8 space-y-2"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5, duration: 0.8 }}
            >
              {invitationData.hosts.map((host, i) => (
                <div key={i}>
                  <p className="text-2xl md:text-3xl" style={{ fontFamily: 'Cormorant Garamond, serif', color: strong, fontWeight: 600 }}>
                    {host.name}
                  </p>
                </div>
              ))}

              <div className="flex items-center justify-center gap-3 pt-2">
                {invitationData.family.map((m, i) => (
                  <span key={i} className="flex items-center gap-3">
                    <span className="text-lg" style={{ fontFamily: 'Cormorant Garamond, serif', color: body }}>{m.name}</span>
                    {i < invitationData.family.length - 1 && <span style={{ color: '#D4AF37', fontSize: '1.2rem' }}>✦</span>}
                  </span>
                ))}
              </div>
            </motion.div>

            <motion.div
              className="flex justify-center gap-3 mt-8 opacity-50"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 0.5 }}
              viewport={{ once: true }}
              transition={{ delay: 0.6, duration: 0.8 }}
            >
              {['✿', '❀', '✾', '❀', '✿'].map((f, i) => (
                <span key={i} style={{ color: '#D4AF37' }}>{f}</span>
              ))}
            </motion.div>
          </div>

          <div className="h-2 w-full" style={{ background: 'linear-gradient(90deg, #6D1F1F, #D4AF37, #6D1F1F)' }} />
        </motion.div>
      </div>
    </section>
  )
}
