import { motion, type Variants } from 'framer-motion'
import { Calendar, Clock, MapPin, Flame, Home, Users, Coffee, UtensilsCrossed } from 'lucide-react'
import { invitationData } from '../../data/invitationData'
import { SectionTitle } from '../shared/SectionTitle'
import { GoldDivider } from '../shared/GoldDivider'

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: (i: number) => ({
    opacity: 1, y: 0,
    transition: { duration: 0.7, delay: i * 0.2, ease: [0.25, 0.46, 0.45, 0.94] },
  }),
}

function CeremonyIcon({ name }: { name: string }) {
  const style = { color: '#D4AF37' }
  if (name === 'flame') return <Flame size={28} style={style} />
  if (name === 'home') return <Home size={28} style={style} />
  if (name === 'users') return <Users size={28} style={style} />
  if (name === 'coffee') return <Coffee size={28} style={style} />
  if (name === 'utensils') return <UtensilsCrossed size={28} style={style} />
  return <Flame size={28} style={style} />
}

export function EventDetails({ isDark = false }: { isDark?: boolean }) {
  const bg = isDark
    ? 'linear-gradient(160deg, #140D08 0%, #1A1008 100%)'
    : 'linear-gradient(160deg, #FAF7F2 0%, #FBF4E8 100%)'
  const maroon = isDark ? '#E8957A' : '#6D1F1F'
  const body = isDark ? '#C8B89A' : '#4A3728'
  const strong = isDark ? '#EDE0CC' : '#2B2B2B'

  return (
    <section id="event-details" className="relative py-20 px-4 overflow-hidden" style={{ background: bg }}>
      <div className="absolute inset-0 pointer-events-none opacity-[0.025]" aria-hidden="true"
        style={{ backgroundImage: 'linear-gradient(#D4AF37 1px, transparent 1px), linear-gradient(90deg, #D4AF37 1px, transparent 1px)', backgroundSize: '60px 60px' }}
      />

      <div className="max-w-4xl mx-auto relative z-10">
        <SectionTitle title="Event Details" subtitle="Sacred Ceremony" light={isDark} />

        {/* Date Card */}
        <motion.div
          className="relative mb-8 rounded-sm overflow-hidden glossy-card"
          style={{}}
          custom={0} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={cardVariants}
        >
          <div className="flex items-center gap-5 p-6 md:p-8">
            <div className="flex-shrink-0 w-16 h-16 rounded-sm flex items-center justify-center"
              style={{ background: 'rgba(212,175,55,0.1)', border: '1px solid rgba(212,175,55,0.3)' }}>
              <Calendar size={28} style={{ color: '#D4AF37' }} />
            </div>
            <div>
              <p className="text-xs tracking-[0.25em] uppercase mb-1" style={{ fontFamily: 'Cinzel, serif', color: '#D4AF37' }}>Date</p>
              <p className="text-2xl md:text-3xl" style={{ fontFamily: 'Cormorant Garamond, serif', color: strong, fontWeight: 600 }}>
                {invitationData.event.date}
              </p>
            </div>
          </div>
        </motion.div>

        {/* Ceremony Cards */}
        <div className="grid md:grid-cols-2 gap-6 mb-8">
          {invitationData.event.ceremonies.map((ceremony, i) => (
            <motion.div
              key={i}
              className="relative rounded-sm overflow-hidden glossy-card"
              style={{}}
              custom={i + 1} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={cardVariants}
              whileHover={{ y: -4, boxShadow: '0 16px 48px rgba(212,175,55,0.2)' }}
            >
              <div className="h-1 w-full" style={{ background: 'linear-gradient(90deg, #6D1F1F, #D4AF37, #6D1F1F)' }} />
              <div className="p-6 md:p-8">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 rounded-sm flex items-center justify-center"
                    style={{ background: 'rgba(212,175,55,0.08)', border: '1px solid rgba(212,175,55,0.25)' }}>
                    <CeremonyIcon name={ceremony.icon} />
                  </div>
                  <div>
                    <p className="text-lg md:text-xl font-semibold mb-1" style={{ fontFamily: 'Cormorant Garamond, serif', color: maroon }}>
                      {ceremony.name}
                    </p>
                    <div className="flex items-center gap-2">
                      <Clock size={14} style={{ color: '#D4AF37' }} />
                      <p className="text-sm tracking-wide" style={{ color: body, fontFamily: 'Lato, sans-serif' }}>{ceremony.time}</p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Venue Card */}
        <motion.div
          className="relative rounded-sm overflow-hidden glossy-card"
          style={{}}
          custom={invitationData.event.ceremonies.length + 1}
          initial="hidden" whileInView="visible" viewport={{ once: true }} variants={cardVariants}
        >
          <div className="h-1 w-full" style={{ background: 'linear-gradient(90deg, #6D1F1F, #D4AF37, #6D1F1F)' }} />
          <div className="p-6 md:p-10">
            <div className="flex items-start gap-5 mb-5">
              <div className="flex-shrink-0 w-12 h-12 rounded-sm flex items-center justify-center"
                style={{ background: 'rgba(212,175,55,0.08)', border: '1px solid rgba(212,175,55,0.25)' }}>
                <MapPin size={24} style={{ color: '#D4AF37' }} />
              </div>
              <div>
                <p className="text-xs tracking-[0.25em] uppercase mb-1" style={{ fontFamily: 'Cinzel, serif', color: '#D4AF37' }}>Venue</p>
                <p className="text-xl md:text-2xl font-semibold" style={{ fontFamily: 'Cormorant Garamond, serif', color: maroon }}>
                  {invitationData.venue.name}
                </p>
              </div>
            </div>
            <GoldDivider />
            <div className="mt-5 text-center">
              <p className="text-base leading-loose" style={{ fontFamily: 'Lato, sans-serif', color: body }}>
                {invitationData.venue.addressLine1}<br />
                {invitationData.venue.addressLine2}<br />
                {invitationData.venue.addressLine3}<br />
                <strong style={{ color: strong }}>{invitationData.venue.addressLine4}</strong>
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
