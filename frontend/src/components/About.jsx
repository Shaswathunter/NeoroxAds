const POINTS = [
  {
    title: 'Checked before it\'s listed',
    body: 'Every file is scanned and verified before it goes live on the site.'
  },
  {
    title: 'No accounts, no clutter',
    body: 'Browse and download without creating an account or wading through pop-ups.'
  },
  {
    title: 'Updated every week',
    body: 'New titles and patched versions are added on a rolling weekly basis.'
  }
]

export default function About() {
  return (
    <section id="about" className="border-t border-line bg-panel/40">
      <div className="mx-auto max-w-7xl px-5 py-16 sm:px-8">
        <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
          <div>
            <p className="font-mono text-xs uppercase tracking-[0.25em] text-neonblue">About</p>
            <h2 className="mt-1 font-display text-3xl font-bold text-frost">Built by players, for players</h2>
            <p className="mt-4 max-w-lg text-mist">
              NeoRox Games started as a small archive of favorite titles shared between friends.
              It's grown into a catalog of PC and Android games, kept simple on purpose — a clean
              page, honest file sizes, and download links that actually work.
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-1">
            {POINTS.map((p) => (
              <div
                key={p.title}
                className="rounded-xl border border-line bg-panel p-5 transition-colors hover:border-neonpurple/40"
              >
                <h3 className="font-display text-base font-semibold text-frost">{p.title}</h3>
                <p className="mt-1 text-sm text-mist">{p.body}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
