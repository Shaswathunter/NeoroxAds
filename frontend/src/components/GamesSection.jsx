import { useMemo, useState } from "react";
import useGames from "../hooks/useGames";
import GameCard from "./GameCard";
import FilterBar from "./FilterBar";

const GAMES_PER_PAGE = 12;

export default function GamesSection({ searchTerm }) {
  const { apiGames, localGames, loading } = useGames();

  const [platform, setPlatform] = useState("All");
  const [currentPage, setCurrentPage] = useState(1);

  // Filter API Games
  const filteredApiGames = useMemo(() => {
    const term = searchTerm.trim().toLowerCase();

    return apiGames.filter((game) => {
      const matchesSearch = !term || game.name.toLowerCase().includes(term);

      return matchesSearch;
    });
  }, [apiGames, searchTerm]);

  // Filter Local Games
  const filteredLocalGames = useMemo(() => {
    const term = searchTerm.trim().toLowerCase();

    return localGames.filter((game) => {
      const matchesSearch = !term || game.name.toLowerCase().includes(term);

      const matchesPlatform =
        platform === "All" ||
        game.platform.toLowerCase() === platform.toLowerCase();

      return matchesSearch && matchesPlatform;
    });
  }, [localGames, searchTerm, platform]);

  // API Pages
  const apiPages = Math.ceil(filteredApiGames.length / GAMES_PER_PAGE);

  // Local Pages
  const localPages = Math.ceil(filteredLocalGames.length / GAMES_PER_PAGE);

  // Total Pages
let totalPages;
let currentGames = [];
 const isSearching = searchTerm.trim() !== "";

if (isSearching) {
  const allGames = [
    ...filteredApiGames,
    ...filteredLocalGames,
  ];

  totalPages = Math.ceil(
    allGames.length / GAMES_PER_PAGE
  );

  const start =
    (currentPage - 1) * GAMES_PER_PAGE;

  currentGames = allGames.slice(
    start,
    start + GAMES_PER_PAGE
  );
} else {
  totalPages = apiPages + localPages;

  if (currentPage <= apiPages) {
    const start =
      (currentPage - 1) * GAMES_PER_PAGE;

    currentGames = filteredApiGames.slice(
      start,
      start + GAMES_PER_PAGE
    );
  } else {
    const localPage =
      currentPage - apiPages;

    const start =
      (localPage - 1) * GAMES_PER_PAGE;

    currentGames = filteredLocalGames.slice(
      start,
      start + GAMES_PER_PAGE
    );
  }
}
  if (loading) {
    return (
      <section className="py-20 text-center">
        <h2 className="text-2xl text-white">Loading Games...</h2>
      </section>
    );
  }
  return (
    <section
  id="games"
  className="mx-auto max-w-7xl px-5 py-12"
>
      <FilterBar platform={platform} setPlatform={setPlatform} />

      {currentGames.length === 0 ? (
        <div className="py-20 text-center">
          <h2 className="text-2xl font-semibold text-white">No Games Found</h2>

          <p className="mt-2 text-mist">Try another search keyword.</p>
        </div>
      ) : (
        <>
          <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {currentGames.map((game) => (
              <GameCard key={game.id || game.slug} game={game} />
            ))}
          </div>

          {totalPages > 1 && (
            <div className="mt-12 flex flex-wrap items-center justify-center gap-2">
              <button
                onClick={() => setCurrentPage((p) => Math.max(1, p - 1))}
                disabled={currentPage === 1}
                className="rounded-lg border border-line px-4 py-2 text-white transition hover:border-neonblue disabled:cursor-not-allowed disabled:opacity-40"
              >
                Previous
              </button>

              {Array.from({ length: totalPages }, (_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrentPage(i + 1)}
                  className={`h-10 w-10 rounded-lg transition ${
                    currentPage === i + 1
                      ? "bg-neonblue text-black font-bold"
                      : "border border-line text-white hover:border-neonblue"
                  }`}
                >
                  {i + 1}
                </button>
              ))}

              <button
                onClick={() =>
                  setCurrentPage((p) => Math.min(totalPages, p + 1))
                }
                disabled={currentPage === totalPages}
                className="rounded-lg border border-line px-4 py-2 text-white transition hover:border-neonblue disabled:cursor-not-allowed disabled:opacity-40"
              >
                Next
              </button>
            </div>
          )}
        </>
      )}
    </section>
  );
}
