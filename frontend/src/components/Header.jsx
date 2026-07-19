import { useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'

const NAV_LINKS = [
  { label: 'Home', href: '#home' },
  { label: 'Games', href: '#games' },
  { label: 'About', href: '#about' }
]

export default function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const { pathname } = useLocation()
  const onHome = pathname === '/'

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className={`sticky top-0 z-40 transition-colors duration-300 ${
        scrolled ? 'bg-void/90 backdrop-blur-md border-b border-line' : 'bg-transparent border-b border-transparent'
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 sm:px-8">
        {/* Logo */}
        <Link to="/" className="group flex items-center gap-2">
          <span className="relative flex h-8 w-8 items-center justify-center rounded-md bg-gradient-to-br from-neonblue to-neonpurple shadow-neon-blue">
            <span className="font-display text-lg font-bold text-void">N</span>
          </span>
          <span className="font-display text-xl font-bold tracking-wide text-frost">
            Neo<span className="text-neonblue text-glow-blue">Rox</span> Games
          </span>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden items-center gap-8 md:flex">
          {NAV_LINKS.map((link) => (
            <a
              key={link.label}
              href={onHome ? link.href : `/${link.href}`}
              className="text-sm font-medium text-mist transition-colors hover:text-neonblue"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Mobile menu toggle */}
        <button
          className="flex h-9 w-9 items-center justify-center rounded-md border border-line text-frost md:hidden"
          onClick={() => setMenuOpen((o) => !o)}
          aria-label="Toggle navigation menu"
          aria-expanded={menuOpen}
        >
          <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
            {menuOpen ? (
              <path d="M2 2L16 16M16 2L2 16" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
            ) : (
              <path d="M2 4H16M2 9H16M2 14H16" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile nav panel */}
      {menuOpen && (
        <nav className="flex flex-col gap-1 border-t border-line bg-void px-5 py-4 md:hidden">
          {NAV_LINKS.map((link) => (
            <a
              key={link.label}
              href={onHome ? link.href : `/${link.href}`}
              onClick={() => setMenuOpen(false)}
              className="rounded-md px-3 py-2 text-sm font-medium text-mist transition-colors hover:bg-panel2 hover:text-neonblue"
            >
              {link.label}
            </a>
          ))}
        </nav>
      )}
    </header>
  )
}
