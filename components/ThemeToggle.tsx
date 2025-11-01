
'use client'
import { useTheme } from 'next-themes'
import { useEffect, useState } from 'react'

export default function ThemeToggle() {
  const { theme, setTheme, resolvedTheme } = useTheme()
  const [mounted, setMounted] = useState(false)
  useEffect(() => setMounted(true), [])
  if (!mounted) return null

  const active = resolvedTheme === 'dark'
  return (
    <button
      onClick={() => setTheme(active ? 'light' : 'dark')}
      className="rounded-full px-3 py-1.5 border border-black/10 dark:border-white/20 text-xs hover:scale-[1.02] transition"
      aria-label="Toggle Trading Mode"
      title="Toggle Trading Mode">
      {active ? 'Night Trading' : 'Day Mode'}
    </button>
  )
}
