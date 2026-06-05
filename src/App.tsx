import { useState, useCallback } from 'react'
import { AnimatePresence } from 'framer-motion'
import { Loader } from './components/Loader'
import { InvitationPage } from './pages/InvitationPage'

export default function App() {
  const [loading, setLoading] = useState(true)

  const handleLoaderComplete = useCallback(() => {
    setLoading(false)
  }, [])

  return (
    <>
      <AnimatePresence mode="wait">
        {loading && <Loader key="loader" onComplete={handleLoaderComplete} />}
      </AnimatePresence>

      {!loading && <InvitationPage />}
    </>
  )
}
