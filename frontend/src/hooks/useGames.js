import { useEffect, useState } from "react";
import games from "../data/games";
import { getGames } from "../api/rawg";

export default function useGames() {
  const [apiGames, setApiGames] = useState([]);
  const [localGames] = useState(games);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let mounted = true;

    async function loadGames() {
      try {
        setLoading(true);

        const data = await getGames();

        if (!mounted) return;

        setApiGames(data || []);
      } catch (err) {
        console.error("RAWG Error:", err);

        if (mounted) {
          setApiGames([]);
        }
      } finally {
        if (mounted) {
          setLoading(false);
        }
      }
    }

    loadGames();

    return () => {
      mounted = false;
    };
  }, []);

  return {
    apiGames,
    localGames,
    loading,
  };
}