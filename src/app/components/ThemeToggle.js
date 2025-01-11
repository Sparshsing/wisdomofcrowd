'use client'

import { useTheme } from 'next-themes'
import { useEffect, useState } from 'react'

export default function ThemeToggle() {
  const [mounted, setMounted] = useState(false)
  const { resolvedTheme, setTheme } = useTheme()

  useEffect(() => {
    setMounted(true)
  }, [])

  return (
    <button
      className="fixed top-4 right-4 p-2 rounded-lg bg-gray-200 dark:bg-gray-800"
      onClick={() => setTheme(resolvedTheme === 'dark' ? 'light' : 'dark')}
      aria-label="Toggle theme"
    >
      {mounted && (
        <span aria-hidden="true">
          {resolvedTheme === 'dark' ? '🌞' : '🌙'}
        </span>
      )}
    </button>
  )
}