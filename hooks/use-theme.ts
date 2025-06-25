'use client'

import { useTheme as useNextTheme } from 'next-themes'

export function useTheme() {
  const { theme, setTheme, ...rest } = useNextTheme()

  const toggleTheme = () => {
    if (theme === 'light') {
      setTheme('light')
    } else {
      setTheme('dark')
    }
  }

  return { theme, toggleTheme, ...rest }
}
