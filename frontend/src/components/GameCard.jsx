import { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import DownloadGateModal from "./DownloadGateModal";

export default function GameCard({ game }) {
  const [open, setOpen] = useState(false);

  const image = useMemo(() => {
    return game.thumbnail || game.background_image || "/placeholder.webp";
  }, [game]);

  const platform = useMemo(() => {
    if (game.platform) return game.platform;

    if (game.parent_platforms) {
      return game.parent_platforms.map((p) => p.platform.name).join(", ");
    }

    return "PC";
  }, [game]);

  const genre = useMemo(() => {
    if (game.genre) return game.genre;

    if (game.genres) {
      return game.genres.map((g) => g.name).join(", ");
    }

    return "Action";
  }, [game]);

  const version = useMemo(() => {
    return game.version || game.released || "Latest";
  }, [game]);

  const rating = game.rating || 0;

  return (
    <>
      <div className="group overflow-hidden rounded-2xl border border-line bg-card transition duration-300 hover:-translate-y-1 hover:border-neonblue">
        <img
  src={image}
  alt={game.name}
  onClick={() => setOpen(true)}
  className="h-52 w-full cursor-pointer object-cover transition duration-300 group-hover:scale-105"
/>

        <div className="p-5">
         <h3
  onClick={() => setOpen(true)}
  className="line-clamp-1 cursor-pointer text-lg font-bold text-white"
>
  {game.name}
</h3>

          <div className="mt-3 flex flex-wrap gap-2">
            <span className="chip">{platform}</span>

            <span className="chip">{genre}</span>

            <span className="chip">{version}</span>
          </div>

          <div className="mt-4 flex items-center justify-between">
            <span className="text-sm text-yellow-400">
              ⭐ {rating.toFixed(1)}
            </span>{" "}
            <button
              onClick={() => setOpen(true)}
              className="rounded-lg bg-neonblue px-4 py-2 font-semibold text-black transition hover:scale-105"
            >
              Download
            </button>
          </div>
        </div>
      </div>
      {open && <DownloadGateModal game={game} onClose={() => setOpen(false)} />}
    </>
  );
}
