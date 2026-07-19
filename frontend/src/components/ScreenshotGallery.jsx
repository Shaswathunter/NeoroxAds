import { useState } from 'react'

export default function ScreenshotGallery({ screenshots, gameName }) {
  const [active, setActive] = useState(0)

  if (!screenshots || screenshots.length === 0) return null

  return (
    <div>
      <div className="overflow-hidden rounded-xl border border-line bg-panel2">
        <img
          src={screenshots[active]}
          alt={`${gameName} screenshot ${active + 1}`}
          loading="lazy"
          className="aspect-video w-full object-cover"
        />
      </div>
      <div className="mt-3 flex gap-3 overflow-x-auto pb-1">
        {screenshots.map((src, i) => (
          <button
            key={src}
            onClick={() => setActive(i)}
            className={`h-16 w-28 shrink-0 overflow-hidden rounded-lg border-2 transition-colors ${
              active === i ? 'border-neonblue' : 'border-transparent opacity-70 hover:opacity-100'
            }`}
            aria-label={`Show screenshot ${i + 1}`}
          >
            <img src={src} alt="" className="h-full w-full object-cover" />
          </button>
        ))}
      </div>
    </div>
  )
}
