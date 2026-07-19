export default function LegalPage({ title, children }) {
  return (
    <div className="mx-auto max-w-3xl px-5 py-14 sm:px-8">
      <p className="font-mono text-xs uppercase tracking-[0.25em] text-neonpurple">Legal</p>
      <h1 className="mt-1 font-display text-3xl font-bold text-frost">{title}</h1>
      <div className="prose-invert mt-6 space-y-4 text-sm leading-relaxed text-mist [&_h2]:mt-6 [&_h2]:font-display [&_h2]:text-lg [&_h2]:font-semibold [&_h2]:text-frost">
        {children}
      </div>
    </div>
  )
}
