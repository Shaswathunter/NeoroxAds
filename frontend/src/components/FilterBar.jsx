const FILTERS = ['All', 'PC', 'Android']

export default function FilterBar({ active, onChange }) {
  return (
    <div className="flex flex-wrap items-center gap-2" role="group" aria-label="Filter games by platform">
      {FILTERS.map((f) => {
        const isActive = active === f
        return (
          <button
            key={f}
            onClick={() => onChange(f)}
            className={`rounded-full border px-4 py-1.5 text-sm font-medium transition-all duration-200 ${
              isActive
                ? 'border-neonblue bg-neonblue/10 text-neonblue shadow-neon-blue'
                : 'border-line bg-panel text-mist hover:border-neonblue/40 hover:text-frost'
            }`}
          >
            {f}
          </button>
        )
      })}
    </div>
  )
}
