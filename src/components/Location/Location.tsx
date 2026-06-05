import { motion } from 'framer-motion'
import { Navigation, ExternalLink, MapPin } from 'lucide-react'
import { invitationData } from '../../data/invitationData'
import { SectionTitle } from '../shared/SectionTitle'
import { GoldDivider } from '../shared/GoldDivider'

export function Location() {
  return (
    <section
      id="location"
      className="relative py-20 px-4 overflow-hidden"
      style={{
        background: 'linear-gradient(160deg, #1a0f0f 0%, #2d1515 50%, #1a0f0f 100%)',
      }}
    >
      {/* Gold shimmer overlay */}
      <div
        className="absolute inset-0 pointer-events-none opacity-5"
        aria-hidden="true"
        style={{
          backgroundImage:
            'radial-gradient(circle at 20% 50%, rgba(212,175,55,0.8) 0%, transparent 50%), radial-gradient(circle at 80% 50%, rgba(212,175,55,0.8) 0%, transparent 50%)',
        }}
      />

      <div className="max-w-4xl mx-auto relative z-10">
        <SectionTitle title="How to Find Us" subtitle="Directions & Location" light />

        <motion.div
          className="rounded-sm overflow-hidden"
          style={{
            border: '1px solid rgba(212,175,55,0.3)',
            boxShadow: '0 20px 60px rgba(0,0,0,0.4)',
          }}
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          {/* Map header */}
          <div
            className="px-6 py-4 flex items-center gap-3"
            style={{ background: 'rgba(212,175,55,0.1)', borderBottom: '1px solid rgba(212,175,55,0.2)' }}
          >
            <MapPin size={18} style={{ color: '#D4AF37' }} />
            <p
              className="text-sm tracking-widest uppercase"
              style={{ fontFamily: 'Cinzel, serif', color: '#D4AF37' }}
            >
              Mahalakshmi Illam
            </p>
          </div>

          {/* Google Maps Embed */}
          <div className="relative w-full" style={{ height: 320 }}>
            <iframe
              src="https://maps.google.com/maps?q=13.0322744,80.1420609&z=17&output=embed&hl=en"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Venue Location - Mahalakshmi Illam, Porur, Chennai"
              className="w-full h-full"
            />
            <div
              className="absolute inset-0 pointer-events-none"
              style={{ border: '1px solid rgba(212,175,55,0.2)' }}
            />
          </div>

          {/* Address & actions */}
          <div
            className="p-6 md:p-8"
            style={{ background: 'rgba(20,12,8,0.9)' }}
          >
            <div className="text-center mb-6">
              <p
                className="text-base leading-loose"
                style={{ fontFamily: 'Lato, sans-serif', color: 'rgba(250,247,242,0.8)' }}
              >
                {invitationData.venue.addressLine1}{' '}
                {invitationData.venue.addressLine2}{' '}
                {invitationData.venue.addressLine3}{' '}
                <span style={{ color: '#D4AF37' }}>{invitationData.venue.addressLine4}</span>
              </p>
            </div>

            <GoldDivider />

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-6">
              <motion.a
                href={invitationData.venue.googleMapsLink}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-6 py-3 text-sm tracking-widest uppercase transition-all"
                style={{
                  background: 'linear-gradient(135deg, #6D1F1F, #8B2929)',
                  color: '#FAF7F2',
                  fontFamily: 'Cinzel, serif',
                  border: '1px solid rgba(212,175,55,0.3)',
                }}
                whileHover={{ scale: 1.03, boxShadow: '0 4px 20px rgba(109,31,31,0.4)' }}
                whileTap={{ scale: 0.98 }}
                aria-label="Open in Google Maps"
              >
                <ExternalLink size={14} />
                Open in Maps
              </motion.a>

              <motion.a
                href={invitationData.venue.googleMapsLink}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-6 py-3 text-sm tracking-widest uppercase transition-all"
                style={{
                  background: 'transparent',
                  color: '#D4AF37',
                  fontFamily: 'Cinzel, serif',
                  border: '1px solid rgba(212,175,55,0.4)',
                }}
                whileHover={{ scale: 1.03, background: 'rgba(212,175,55,0.1)' }}
                whileTap={{ scale: 0.98 }}
                aria-label="Get Directions"
              >
                <Navigation size={14} />
                Get Directions
              </motion.a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
