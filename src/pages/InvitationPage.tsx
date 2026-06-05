import { lazy, Suspense } from 'react'
import { Hero } from '../components/Hero'
import { ScrollProgress } from '../components/shared/ScrollProgress'
import { DarkModeToggle } from '../components/shared/DarkModeToggle'
import { useDarkMode } from '../hooks/useDarkMode'

const Invitation = lazy(() =>
  import('../components/Invitation').then((m) => ({ default: m.Invitation }))
)
const EventDetails = lazy(() =>
  import('../components/EventDetails').then((m) => ({ default: m.EventDetails }))
)
const Location = lazy(() =>
  import('../components/Location').then((m) => ({ default: m.Location }))
)
const Blessings = lazy(() =>
  import('../components/Blessings').then((m) => ({ default: m.Blessings }))
)
const Compliments = lazy(() =>
  import('../components/Compliments').then((m) => ({ default: m.Compliments }))
)
const Footer = lazy(() =>
  import('../components/Footer').then((m) => ({ default: m.Footer }))
)

function SectionFallback() {
  return (
    <div
      className="w-full py-20 flex items-center justify-center"
      aria-busy="true"
      aria-label="Loading section"
    >
      <div
        className="w-8 h-8 rounded-full border-2 border-t-transparent animate-spin"
        style={{ borderColor: 'rgba(212,175,55,0.4)', borderTopColor: '#D4AF37' }}
      />
    </div>
  )
}

export function InvitationPage() {
  const [isDark, toggleDark] = useDarkMode()

  return (
    <div className={isDark ? 'dark' : ''}>
      <ScrollProgress />
      <DarkModeToggle isDark={isDark} onToggle={toggleDark} />

      <main>
        <Hero isDark={isDark} />

        <Suspense fallback={<SectionFallback />}>
          <Invitation isDark={isDark} />
        </Suspense>

        <Suspense fallback={<SectionFallback />}>
          <EventDetails isDark={isDark} />
        </Suspense>

        <Suspense fallback={<SectionFallback />}>
          <Location />
        </Suspense>

        <Suspense fallback={<SectionFallback />}>
          <Blessings isDark={isDark} />
        </Suspense>

        <Suspense fallback={<SectionFallback />}>
          <Compliments isDark={isDark} />
        </Suspense>

        <Suspense fallback={<SectionFallback />}>
          <Footer />
        </Suspense>
      </main>
    </div>
  )
}
