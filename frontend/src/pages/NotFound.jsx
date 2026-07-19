import { Link } from 'react-router-dom'

export default function NotFound() {
  return (
    <div className="mx-auto flex max-w-xl flex-col items-center px-5 py-32 text-center">
      <p className="font-mono text-sm text-neonpurple">404</p>
      <h1 className="mt-2 font-display text-3xl font-bold text-frost">Page not found</h1>
      <p className="mt-3 text-mist">The page you're looking for doesn't exist or may have moved.</p>
      <Link
        to="/"
        className="mt-6 rounded-lg bg-gradient-to-r from-neonblue to-neonpurple px-5 py-2.5 text-sm font-semibold text-void transition-transform hover:scale-105"
      >
        Back to home
      </Link>
    </div>
  )
}
