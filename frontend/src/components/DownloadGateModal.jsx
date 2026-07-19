import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import useCountdown from "../hooks/useCountdown.js";

const GATE_SECONDS = 5;

/**
 * DownloadGateModal
 * --------------------------------------------------------------
 * Opens the moment someone taps "Download" on a game card. Shows
 * the same kind of 5-second countdown + ad slot as the download
 * page, but *before* the user ever reaches it.
 *
 * The modal uses `position: fixed`, so it stays centered in the
 * viewport no matter how far the page behind it is scrolled — the
 * timer and ad never scroll out of view, and the countdown itself
 * keeps ticking in the background regardless of scrolling.
 * --------------------------------------------------------------
 */
export default function DownloadGateModal({ game, onClose }) {
  const navigate = useNavigate();
  const { secondsLeft, ready, progress } = useCountdown(GATE_SECONDS);

  // Prevent the page behind the modal from scrolling while it's open.
  useEffect(() => {
    const original = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = original;
    };
  }, []);

  // Let Esc close the modal like any standard dialog.
  useEffect(() => {
    const onKey = (e) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [onClose]);

  const goToDownloadPage = () => {
    onClose();
    navigate(`/download/${game.slug}`);
  };

  return (
    <div
      className="fixed inset-0 z-[60] flex items-center justify-center p-4"
      role="dialog"
      aria-modal="true"
      aria-label={`Preparing download for ${game.name}`}
    >
      {/* Backdrop — click to dismiss */}
      <div
        className="absolute inset-0 bg-void/85 backdrop-blur-sm"
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Modal card — fixed to the viewport, so it never scrolls away */}
      <div className="relative w-full max-w-sm rounded-2xl border border-line bg-panel p-5 shadow-neon-purple animate-rise">
        <button
          onClick={onClose}
          aria-label="Close"
          className="absolute right-4 top-4 text-mist transition-colors hover:text-neonpink"
        >
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
            <path
              d="M2 2L14 14M14 2L2 14"
              stroke="currentColor"
              strokeWidth="1.6"
              strokeLinecap="round"
            />
          </svg>
        </button>

        <div className="flex items-center gap-3 pr-6">
          <img
            src={game.thumbnail}
            alt=""
            className="h-12 w-12 shrink-0 rounded-lg border border-line object-cover"
          />
          <div className="min-w-0">
            <p className="truncate font-display text-sm font-semibold text-frost">
              {game.name}
            </p>
            <p className="text-xs text-mist">Preparing your download page…</p>
          </div>
        </div>

        {/* -------------------------------------------------------
            AD PLACEHOLDER — paste your AdSense / ad network code
            inside this div. Shown for the full countdown and
            triggers no clicks on its own.
           ------------------------------------------------------- */}
        <div
          id="ad-container-gate"
          className="my-4 flex min-h-[100px] items-center justify-center rounded-xl border border-dashed border-line bg-panel2 text-xs text-mist"
        >
          {/* Paste AdSense code here */}
          Ad space — 300×100 / responsive
        </div>

        <div className="flex items-center gap-3">
          <div className="relative flex h-11 w-11 shrink-0 items-center justify-center">
            <svg
              width="44"
              height="44"
              viewBox="0 0 44 44"
              className="-rotate-90"
            >
              <circle
                cx="22"
                cy="22"
                r="18"
                stroke="#22243a"
                strokeWidth="4"
                fill="none"
              />
              <circle
                cx="22"
                cy="22"
                r="18"
                stroke="url(#gateGradient)"
                strokeWidth="4"
                fill="none"
                strokeLinecap="round"
                strokeDasharray={2 * Math.PI * 18}
                strokeDashoffset={2 * Math.PI * 18 * (1 - progress / 100)}
                style={{ transition: "stroke-dashoffset 1s linear" }}
              />
              <defs>
                <linearGradient id="gateGradient" x1="0" y1="0" x2="1" y2="1">
                  <stop offset="0%" stopColor="#3fd4ff" />
                  <stop offset="100%" stopColor="#a855f7" />
                </linearGradient>
              </defs>
            </svg>
            <span className="absolute font-mono text-xs font-bold text-frost">
              {ready ? "0" : secondsLeft}
            </span>
          </div>

          {!ready ? (
            <button
              disabled
              className="flex-1 cursor-not-allowed rounded-lg border border-line bg-panel2 px-4 py-2.5 text-sm font-semibold text-mist"
            >
              Please wait ({secondsLeft}s)
            </button>
          ) : (
            <button
              onClick={goToDownloadPage}
              className="flex-1 rounded-lg bg-gradient-to-r from-neonblue to-neonpurple px-4 py-2.5 text-sm font-semibold text-void transition-transform hover:scale-105"
            >
              Continue
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
