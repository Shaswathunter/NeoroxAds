import SearchBar from './SearchBar.jsx'

export default function Hero({ searchTerm, onSearchChange, resultCount }) {
  return (
    <section id="home" className="relative overflow-hidden pt-16 pb-24 sm:pt-24 sm:pb-32">
      {/* Animated background: cyberpunk grid + drifting glow orbs + scan line */}
      <div className="absolute inset-0 bg-grid-overlay" aria-hidden="true" />
      <div
        className="absolute -left-24 top-10 h-72 w-72 rounded-full bg-neonpurple/25 blur-[100px] animate-floatSlow"
        aria-hidden="true"
      />
      <div
        className="absolute -right-16 top-32 h-80 w-80 rounded-full bg-neonblue/20 blur-[110px] animate-floatSlow"
        style={{ animationDelay: '1.5s' }}
        aria-hidden="true"
      />
      <div className="scan-bar top-0" aria-hidden="true" />

      <div className="relative mx-auto max-w-4xl px-5 text-center sm:px-8">
        <div className="mx-auto mb-5 inline-flex items-center gap-2 rounded-full border border-line bg-panel/70 px-3 py-1 font-mono text-[11px] tracking-wider text-neonblue">
          <span className="h-1.5 w-1.5 animate-pulseGlow rounded-full bg-neonblue" />
          200+ TITLES · UPDATED WEEKLY
        </div>

        <h1 className="font-display text-4xl font-bold leading-tight text-frost sm:text-5xl md:text-6xl">
          Download Free{' '}
          <span className="text-neonblue text-glow-blue">PC</span> &{' '}
          <span className="text-neonpurple text-glow-purple">Android</span> Games
        </h1>

        <p className="mx-auto mt-5 max-w-xl text-base text-mist sm:text-lg">
          Handpicked, virus-checked, and ready to run. No sign-up, no nonsense —
          just games you can start playing today.
        </p>

        <div className="mx-auto mt-8 max-w-xl">
          <SearchBar value={searchTerm} onChange={onSearchChange} />
          {searchTerm && (
            <p className="mt-3 font-mono text-xs text-mist">
              {resultCount} result{resultCount === 1 ? '' : 's'} for “{searchTerm}”
            </p>
          )}
        </div>
      </div>
    </section>
  )
}
