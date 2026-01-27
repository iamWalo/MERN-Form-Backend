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
  origin: "http://localhost:3000",
  credentials: true
}));
app.use(session({
  secret: process.env.SESSION_SECRET,
  resave: false,
  saveUninitialized: false
}));

app.get("/health", (req, res) => {
  res.json({ status: "API is running" });
});
// app.use("/api/config", configRoute);
app.use("/api/leads", leadsRoute);

export default app;