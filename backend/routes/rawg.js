import express from "express";
import {
  getGames,
  getGame,
  getScreenshots,
} from "../services/rawg.js";

const router = express.Router();

router.get("/games", async (req, res) => {
  res.json(await getGames());
});

router.get("/games/:slug", async (req, res) => {
  res.json(await getGame(req.params.slug));
});

router.get("/games/:id/screenshots", async (req, res) => {
  res.json(await getScreenshots(req.params.id));
});

export default router;