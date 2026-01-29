import express from "express";
import dotenv from "dotenv";
import session from "express-session";
import cors from "cors";
import configRoute from "./routes/config.route.js";
import leadsRoute from "./routes/leads.route.js";


dotenv.config();

const app = express();

const PORT = process.env.PORT || 3000;


app.use(express.json());
app.use(cors({
  origin: "*",
  credentials: true
}));


app.get("/health", (req, res) => {
  res.json({ message: "API is running" });
});
// app.use("/api/config", configRoute);
app.use("/api/leads", leadsRoute);

export default app;