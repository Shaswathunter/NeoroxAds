export default function SearchBar({ value, onChange, placeholder = 'Search games — e.g. “racing” or “RPG”' }) {
  return (
    <div className="group relative">
      <div className="pointer-events-none absolute inset-0 rounded-xl bg-gradient-to-r from-neonblue/40 to-neonpurple/40 opacity-0 blur transition-opacity duration-300 group-focus-within:opacity-60" />
      <div className="relative flex items-center gap-3 rounded-xl border border-line bg-panel px-4 py-3.5 shadow-lg shadow-black/30">
        <svg width="18" height="18" viewBox="0 0 18 18" fill="none" className="shrink-0 text-mist">
          <circle cx="8" cy="8" r="5.5" stroke="currentColor" strokeWidth="1.6" />
          <path d="M16 16L12.2 12.2" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
        </svg>
        <input
          type="text"
          value={value}
          onChange={(e) => onChange(e.target.value)}
          placeholder={placeholder}
          aria-label="Search games"
          className="w-full bg-transparent font-body text-sm text-frost placeholder:text-mist/70 focus:outline-none"
        />
        {value && (
          <button
            onClick={() => onChange('')}
            aria-label="Clear search"
            className="shrink-0 rounded-full p-1 text-mist transition-colors hover:text-neonpink"
          >
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
              <path d="M2 2L12 12M12 2L2 12" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
            </svg>
          </button>
        )}
      </div>
    </div>
  )
}
