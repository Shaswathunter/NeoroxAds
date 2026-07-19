/**
 * RatingStars
 * Renders a 5-star rating from a numeric value (e.g. 4.7).
 */
export default function RatingStars({ rating, size = 13 }) {
  const stars = [1, 2, 3, 4, 5]

  return (
    <div className="flex items-center gap-1" aria-label={`Rated ${rating} out of 5`}>
      <div className="flex items-center">
        {stars.map((star) => {
          const fill = Math.max(0, Math.min(1, rating - (star - 1)))
          return (
            <span key={star} className="relative inline-block" style={{ width: size, height: size }}>
              <svg width={size} height={size} viewBox="0 0 20 20" className="absolute inset-0 text-line" fill="currentColor">
                <path d="M10 1.5l2.6 5.4 5.9.8-4.3 4.2 1 5.9L10 15l-5.2 2.8 1-5.9L1.5 7.7l5.9-.8L10 1.5z" />
              </svg>
              <span className="absolute inset-0 overflow-hidden" style={{ width: `${fill * 100}%` }}>
                <svg width={size} height={size} viewBox="0 0 20 20" className="text-neonblue" fill="currentColor">
                  <path d="M10 1.5l2.6 5.4 5.9.8-4.3 4.2 1 5.9L10 15l-5.2 2.8 1-5.9L1.5 7.7l5.9-.8L10 1.5z" />
                </svg>
              </span>
            </span>
          )
        })}
      </div>
      <span className="font-mono text-xs text-mist">{rating.toFixed(1)}</span>
    </div>
  )
}
