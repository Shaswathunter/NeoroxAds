import useCountdown from "../hooks/useCountdown.js";
const COUNTDOWN_SECONDS = 5;

/**
 * CountdownDownload
 * --------------------------------------------------------------
 * Shows a 5-second countdown before revealing the real download
 * button. This is a genuine wait state, not a fake progress bar —
 * the button is disabled the whole time and only becomes clickable
 * once the timer reaches zero.
 *
 * The ad slot below is a plain placeholder <div id="ad-container">.
 * Paste your AdSense (or other network) snippet directly inside it.
 * No fake clicks, no auto-redirects — it just displays your ad
 * while the visitor waits out the countdown.
 * --------------------------------------------------------------
 */
export default function CountdownDownload({ downloadUrl, onContinue }) {
  const { secondsLeft, ready, progress } = useCountdown(COUNTDOWN_SECONDS);

  return (
    <div className="rounded-2xl border border-line bg-panel p-5 sm:p-6">
      <h3 className="font-display text-lg font-semibold text-frost">
        Your download is almost ready
      </h3>
      <p className="mt-1 text-sm text-mist">
        {ready
          ? "Your link is ready below."
          : "Please wait for the timer to finish."}
      </p>

      {/* -------------------------------------------------------
          AD PLACEHOLDER — paste your AdSense / ad network code
          inside this div. It is shown for the full countdown
          duration and does not trigger any click on its own.
         ------------------------------------------------------- */}
      <div
        id="ad-container"
        className="my-5 flex min-h-[120px] items-center justify-center rounded-xl border border-dashed border-line bg-panel2 text-xs text-mist"
      >
        {/* Paste AdSense code here */}
        Ad space — 728×90 / responsive
      </div>

      {/* Countdown progress ring + button */}
      <div className="flex flex-col items-center gap-4 sm:flex-row sm:justify-between">
        <div className="flex items-center gap-3">
          <div className="relative flex h-12 w-12 items-center justify-center">
            <svg
              width="48"
              height="48"
              viewBox="0 0 48 48"
              className="-rotate-90"
            >
              <circle
                cx="24"
                cy="24"
                r="20"
                stroke="#22243a"
                strokeWidth="4"
                fill="none"
              />
              <circle
                cx="24"
                cy="24"
                r="20"
                stroke="url(#countdownGradient)"
                strokeWidth="4"
                fill="none"
                strokeLinecap="round"
                strokeDasharray={2 * Math.PI * 20}
                strokeDashoffset={2 * Math.PI * 20 * (1 - progress / 100)}
                style={{ transition: "stroke-dashoffset 1s linear" }}
              />
              <defs>
                <linearGradient
                  id="countdownGradient"
                  x1="0"
                  y1="0"
                  x2="1"
                  y2="1"
                >
                  <stop offset="0%" stopColor="#3fd4ff" />
                  <stop offset="100%" stopColor="#a855f7" />
                </linearGradient>
              </defs>
            </svg>
            <span className="absolute font-mono text-sm font-bold text-frost">
              {ready ? "0" : secondsLeft}
            </span>
          </div>
          <p className="text-xs text-mist">
            {ready ? "Timer complete" : `Unlocking in ${secondsLeft}s`}
          </p>
        </div>

      {!ready ? (
  <button
    disabled
    className="w-full cursor-not-allowed rounded-lg border border-line bg-panel2 px-6 py-3 text-sm font-semibold text-mist sm:w-auto"
  >
    Please wait ({secondsLeft}s)
  </button>
) : downloadUrl ? (
  <a
    href={downloadUrl}
    target="_blank"
    rel="noopener noreferrer"
    className="w-full rounded-lg bg-gradient-to-r from-neonblue to-neonpurple px-6 py-3 text-center text-sm font-semibold text-void shadow-neon-blue transition-transform hover:scale-105 sm:w-auto"
  >
    Continue to Download
  </a>
) : (
  <button
    onClick={onContinue}
    className="w-full rounded-lg bg-gradient-to-r from-neonblue to-neonpurple px-6 py-3 text-center text-sm font-semibold text-void shadow-neon-blue transition-transform hover:scale-105 sm:w-auto"
  >
    Continue
  </button>
)}
      </div>
    </div>
  );
}
