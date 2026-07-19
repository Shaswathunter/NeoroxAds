import "dotenv/config";

import express from "express";
import cors from "cors";
import rawgRoutes from "./routes/rawg.js";

const app = express();

const allowedOrigins = [
  "http://localhost:5173",
  "https://neorox-ads.vercel.app"
];

app.use(cors({
  origin: function (origin, callback) {
    if (!origin || allowedOrigins.includes(origin)) {
      callback(null, true);
    } else {
      callback(new Error("Not allowed by CORS"));
    }
  },
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