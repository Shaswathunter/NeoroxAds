import axios from "axios";

const api = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
});

export const getGames = async () => {
  const { data } = await api.get("/games");
  return data;
};

export const getGame = async (slug) => {
  const { data } = await api.get(`/games/${slug}`);
  return data;
};

export const getScreenshots = async (id) => {
  const { data } = await api.get(`/games/${id}/screenshots`);
  return data;
};