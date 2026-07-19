import { useEffect, useState } from 'react'

/**
 * useCountdown
 * Simple ticking countdown. Returns secondsLeft, whether it's finished
 * (ready), and a 0-100 progress value for drawing a progress ring.
 * Runs on setTimeout so it keeps counting regardless of page scroll
 * or any other UI interaction happening at the same time.
 */
export default function useCountdown(totalSeconds) {
  const [secondsLeft, setSecondsLeft] = useState(totalSeconds)

  useEffect(() => {
    if (secondsLeft <= 0) return
    const timer = setTimeout(() => setSecondsLeft((s) => s - 1), 1000)
    return () => clearTimeout(timer)
  }, [secondsLeft])

  const ready = secondsLeft <= 0
  const progress = ((totalSeconds - secondsLeft) / totalSeconds) * 100

  return { secondsLeft, ready, progress }
}
