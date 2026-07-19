import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import games from "../data/games";
import { getGame, getScreenshots } from "../api/rawg";

import RatingStars from "../components/RatingStars";
import RequirementsTable from "../components/RequirementsTable";
import ScreenshotGallery from "../components/ScreenshotGallery";
import DownloadSteps from "../components/DownloadSteps";
import CountdownDownload from "../components/CountdownDownload";
import NotFound from "./NotFound";

export default function DownloadPage() {
  const { slug } = useParams();

  const [game, setGame] = useState(null);
  const [loading, setLoading] = useState(true);
  const [isApiGame, setIsApiGame] = useState(false);

  useEffect(() => {
    async function loadGame() {
      setLoading(true);

      // Local Game
      const localGame = games.find((g) => g.slug === slug);

      if (localGame) {
        setGame(localGame);
        setIsApiGame(false);
        setLoading(false);
        return;
      }

      // API Game
      try {
        const apiGame = await getGame(slug);
        const screenshots = await getScreenshots(apiGame.id);

        setGame({
          id: apiGame.id,
          slug: apiGame.slug,
          name: apiGame.name,
          thumbnail: apiGame.background_image,
          screenshots: screenshots.map((s) => s.image),
          platform:
            apiGame.parent_platforms?.map((p) => p.platform.name).join(", ") ||
            "PC",
          genre: apiGame.genres?.map((g) => g.name).join(", ") || "Action",
          version: apiGame.released || "Latest",
          size: "Unknown",
          rating: apiGame.rating,
          description: apiGame.description_raw || "No description available.",

          requirements: {
            os: "N/A",
            cpu: "N/A",
            ram: "N/A",
            gpu: "N/A",
            storage: "N/A",
          },

          // Empty for now
          downloadUrl: "",
        });

        setIsApiGame(true);
      } catch (err) {
        console.error(err);
        setGame(null);
      }

      setLoading(false);
    }

    loadGame();
  }, [slug]);

  useEffect(() => {
    if (game) document.title = `Download ${game.name} — NeoRox Games`;

    return () => {
      document.title = "NeoRox Games — Download Free PC & Android Games";
    };
  }, [game]);

  if (loading) {
    return (
      <div className="py-24 text-center text-white text-2xl">Loading...</div>
    );
  }

  if (!game) return <NotFound />;
  return (
    <div className="mx-auto max-w-5xl px-5 py-10 sm:px-8 sm:py-14">
      <Link
        to="/"
        className="inline-flex items-center gap-1.5 text-sm text-mist transition-colors hover:text-neonblue"
      >
        <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
          <path
            d="M8.5 2.5L3.5 7L8.5 11.5"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
        Back to library
      </Link>
      {/* Header */}
      <div className="mt-6 flex flex-col gap-6 sm:flex-row">
        <img
          src={game.thumbnail}
          alt={game.name}
          className="h-48 w-full rounded-2xl border border-line object-cover sm:h-40 sm:w-64"
        />

        <div className="flex flex-col justify-center">
          <div className="flex flex-wrap items-center gap-2">
            <span className="chip border-neonblue/40 text-neonblue">
              {game.platform}
            </span>

            <span className="chip">{game.genre}</span>

            <span className="chip">{game.version}</span>

            <span className="chip">{game.size}</span>

            {isApiGame && (
              <span className="chip border-yellow-500/40 text-yellow-400">
                RAWG API
              </span>
            )}
          </div>

          <h1 className="mt-3 font-display text-3xl font-bold text-frost">
            {game.name}
          </h1>

          <div className="mt-2">
            <RatingStars rating={game.rating} size={15} />
          </div>
        </div>
      </div>
      {/* Description */}
      <section className="mt-10">
        <h2 className="font-display text-xl font-semibold text-frost">
          About this Game
        </h2>

        <p className="mt-3 max-w-4xl leading-7 text-mist">{game.description}</p>
      </section>
      {/* Screenshots */}
      <section className="mt-10">
        <h2 className="font-display text-xl font-semibold text-frost">
          Screenshots
        </h2>

        <div className="mt-4">
          <ScreenshotGallery
            screenshots={game.screenshots}
            gameName={game.name}
          />
        </div>
      </section>
      {/* Requirements */}
      {!isApiGame && (
        <section className="mt-10">
          <h2 className="font-display text-xl font-semibold text-frost">
            System Requirements
          </h2>

          <div className="mt-4 max-w-xl">
            <RequirementsTable requirements={game.requirements} />
          </div>
        </section>
      )}{" "}
      {/* Download Steps */}
      <section className="mt-10">
        <h2 className="font-display text-xl font-semibold text-frost">
          How to Download
        </h2>

        <div className="mt-4">
          <DownloadSteps />
        </div>
      </section>
      {/* Download */}
      <section className="mt-10">
        {isApiGame ? (
          <CountdownDownload downloadUrl="" />
        ) : (
          <CountdownDownload downloadUrl={game.downloadUrl} />
        )}
      </section>
      {/* API Notice */}
      {isApiGame && (
        <div className="mt-6 rounded-xl border border-yellow-500/30 bg-yellow-500/10 p-4">
          <h3 className="font-semibold text-yellow-400">
            Download Link Not Added Yet
          </h3>

          <p className="mt-2 text-sm text-mist">
            This game was loaded from the RAWG API. You can add your own
            download link later by editing the downloadUrl field.
          </p>
        </div>
      )}
    </div>
  );
}
