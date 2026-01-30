import dotenv from "dotenv";

import app from "./App.js";

dotenv.config();

app.get("/", (req, res) => {
  res.send("Backend is live 🚀");
});
const PORT = process.env.PORT || 8080;

app.listen(PORT, "0.0.0.0", () => {
  console.log(`Server running on port ${PORT}`);
});