import { useState, useEffect } from 'react'

export function useDarkMode(): [boolean, () => void] {
  const [isDark, setIsDark] = useState(() => {
    if (typeof window === 'undefined') return true
    // Default to dark unless user has explicitly chosen light
    const stored = localStorage.getItem('theme')
    if (stored === 'light') return false
    return true
  })

  useEffect(() => {
    const root = document.documentElement
    if (isDark) {
      root.classList.add('dark')
      localStorage.setItem('theme', 'dark')
    } else {
      root.classList.remove('dark')
      localStorage.setItem('theme', 'light')
    }
  }, [isDark])

  const toggle = () => setIsDark((prev) => !prev)

  return [isDark, toggle]
}
