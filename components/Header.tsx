
'use client'
import Link from 'next/link'
import Image from 'next/image'
import ThemeToggle from './ThemeToggle'
import { usePathname } from 'next/navigation'
import clsx from 'clsx'

const nav = [
  { href: '/', label: 'Services' },
  { href: '/port-coverage', label: 'Port Coverage' },
  { href: '/market-intelligence', label: 'Market Intelligence' },
  { href: '/about', label: 'About' },
  { href: '/contact', label: 'Contact' }
]

export default function Header() {
  const pathname = usePathname()
  return (
    <header className="sticky top-0 z-40 backdrop-blur bg-brand-dayBG/70 dark:bg-brand-nightBG/60 border-b border-black/5 dark:border-white/10">
      <div className="section flex items-center gap-4 py-3">
        <Link href="/" className="flex items-center gap-3">
          <Image src="/prime-logo.svg" alt="Prime" width={110} height={30} />
          <span className="sr-only">Prime Bunker Services</span>
        </Link>
        <nav className="ml-auto hidden md:flex items-center gap-6">
          {nav.map(n => (
            <Link key={n.href} href={n.href}
              className={clsx('text-sm hover:opacity-80', pathname===n.href && 'font-semibold underline underline-offset-4')}>
              {n.label}
            </Link>
          ))}
          <ThemeToggle />
        </nav>
        <div className="md:hidden ml-auto"><ThemeToggle /></div>
      </div>
    </header>
  )
}
