'use client'

import { ThemeProvider as NextThemesProvider } from 'next-themes'
import { ReactNode, useEffect } from 'react'

export default function ThemeProvider({ children }: { children: ReactNode }) {
  // Initialize with a default cosmic theme if none chosen
  useEffect(() => {
    const current = document.documentElement.getAttribute('data-theme')
    if (!current) {
      document.documentElement.setAttribute('data-theme', 'cosmic-dark')
    }
  }, [])

  return (
    <NextThemesProvider
      attribute="data-theme"
      defaultTheme="cosmic-dark"
      enableSystem={false}
      storageKey="ud-theme"
    >
      {children}
    </NextThemesProvider>
  )
}
