import { useEffect, useState } from 'react'

export default function BackToTop() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 500)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const scrollUp = () => window.scrollTo({ top: 0, behavior: 'smooth' })

  if (!visible) return null

  return (
    <button
      onClick={scrollUp}
      aria-label="Back to top"
      className="fixed bottom-6 right-6 z-30 flex h-11 w-11 items-center justify-center rounded-full border border-neonblue/40 bg-panel text-neonblue shadow-neon-blue transition-transform hover:-translate-y-1 hover:bg-panel2"
    >
      <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
        <path d="M8 13V3M8 3L3.5 7.5M8 3L12.5 7.5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </button>
  )
}
