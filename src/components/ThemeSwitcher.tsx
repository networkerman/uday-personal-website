'use client'

import { useEffect, useState } from 'react'

const THEMES = ['cosmic-dark', 'cosmic-graphite', 'cosmic-amoled', 'cosmic-light'] as const
type Theme = typeof THEMES[number]

export default function ThemeSwitcher() {
  const [theme, setTheme] = useState<Theme>('cosmic-dark')

  useEffect(() => {
    const current = (document.documentElement.getAttribute('data-theme') || 'cosmic-dark') as Theme
    setTheme(current)
  }, [])

  const cycle = () => {
    const idx = THEMES.indexOf(theme)
    const next = THEMES[(idx + 1) % THEMES.length]
    document.documentElement.setAttribute('data-theme', next)
    localStorage.setItem('ud-theme', next)
    setTheme(next)
  }

  return (
    <button
      onClick={cycle}
      className="glass px-4 py-2 text-sm hover:opacity-90 transition-opacity duration-200"
      aria-label="Switch theme"
      title={`Theme: ${theme} (click to change)`}
    >
      Theme: {theme.replace('-', ' ')}
    </button>
  )
}
