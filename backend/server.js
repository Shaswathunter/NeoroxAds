import "dotenv/config";

import express from "express";
import cors from "cors";
import rawgRoutes from "./routes/rawg.js";

const app = express();

app.use(cors({
  origin: "http://localhost:5173",
  credentials: true,
}));

console.log(process.env.RAWG_API_KEY);

app.use(express.json());
app.use("/api", rawgRoutes);

app.get("/", (req, res) => {
  res.json({ message: "NeoRox Games API Running 🚀" });
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on ${PORT}`);
});