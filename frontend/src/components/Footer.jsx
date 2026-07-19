import { Link } from 'react-router-dom'

const LEGAL_LINKS = [
  { label: 'DMCA', href: '/dmca' },
  { label: 'Privacy Policy', href: '/privacy-policy' },
  { label: 'Disclaimer', href: '/disclaimer' },
  { label: 'Contact', href: '/contact' }
]

export default function Footer() {
  return (
    <footer className="border-t border-line bg-void">
      <div className="mx-auto max-w-7xl px-5 py-10 sm:px-8">
        <div className="flex flex-col items-center gap-6 sm:flex-row sm:justify-between">
          <Link to="/" className="flex items-center gap-2">
            <span className="flex h-7 w-7 items-center justify-center rounded-md bg-gradient-to-br from-neonblue to-neonpurple">
              <span className="font-display text-sm font-bold text-void">N</span>
            </span>
            <span className="font-display text-base font-bold text-frost">
              Neo<span className="text-neonblue">Rox</span> Games
            </span>
          </Link>

          <nav className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2">
            {LEGAL_LINKS.map((link) => (
              <Link
                key={link.label}
                to={link.href}
                className="text-sm text-mist transition-colors hover:text-neonblue"
              >
                {link.label}
              </Link>
            ))}
          </nav>
        </div>

        <div className="mt-8 border-t border-line pt-6 text-center text-xs text-mist/70">
          <p>© {new Date().getFullYear()} NeoRox Games. All trademarks belong to their respective owners.</p>
          <p className="mt-1">
            This site does not host any game files. All downloads are provided or redirected through
            official third-party sources.
          </p>
        </div>
      </div>
    </footer>
  )
}
