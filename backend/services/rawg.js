import axios from "axios";

const api = axios.create({
  baseURL: "https://api.rawg.io/api",
});

const API_KEY = process.env.RAWG_API_KEY;
console.log("RAWG KEY:", API_KEY);
export async function getGames() {
  const apiKey = process.env.RAWG_API_KEY;
  console.log("RAWG KEY:", apiKey);

  const requests = [];

  for (let page = 1; page <= 5; page++) {
    requests.push(
      api.get("/games", {
        params: {
          key: apiKey,
          page,
          page_size: 20,
        },
      }),
    );
  }

  const responses = await Promise.all(requests);
  return responses.flatMap((res) => res.data.results);
}
export async function getGame(slug) {
  const { data } = await api.get(`/games/${slug}`, {
    params: {
      key: process.env.RAWG_API_KEY,
    },
  });

  return data;
}

export async function getScreenshots(id) {
  const { data } = await api.get(`/games/${id}/screenshots`, {
    params: {
      key: process.env.RAWG_API_KEY,
    },
  });

  return data.results || [];
}
