const STEPS = [
  {
    title: 'Wait for the timer',
    body: 'Let the countdown below finish — it takes just a few seconds.'
  },
  {
    title: 'Tap Continue to Download',
    body: 'The button unlocks automatically once the timer reaches zero.'
  },
  {
    title: 'Install and play',
    body: 'Open the downloaded file and follow the on-screen installer.'
  }
]

export default function DownloadSteps() {
  return (
    <ol className="grid gap-3 sm:grid-cols-3">
      {STEPS.map((step, i) => (
        <li key={step.title} className="rounded-xl border border-line bg-panel p-4">
          <span className="font-mono text-xs text-neonpurple">STEP {i + 1}</span>
          <h4 className="mt-1 font-display text-sm font-semibold text-frost">{step.title}</h4>
          <p className="mt-1 text-xs text-mist">{step.body}</p>
        </li>
      ))}
    </ol>
  )
}
