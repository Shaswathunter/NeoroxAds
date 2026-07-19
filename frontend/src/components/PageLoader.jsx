/**
 * PageLoader
 * Brief boot-up style loading screen shown while the app mounts.
 * Purely CSS/SVG driven, no external assets, so it paints instantly.
 */
export default function PageLoader() {
  return (
    <div className="fixed inset-0 z-50 flex flex-col items-center justify-center gap-4 bg-void">
      <div className="relative h-14 w-14">
        <div className="absolute inset-0 rounded-full border-2 border-line" />
        <div className="absolute inset-0 rounded-full border-2 border-t-neonblue border-r-neonpurple border-b-transparent border-l-transparent animate-spin" />
      </div>
      <p className="font-mono text-xs tracking-[0.3em] text-mist animate-flicker">
        NEOROX<span className="text-neonblue">_</span>BOOT
      </p>
    </div>
  )
}
