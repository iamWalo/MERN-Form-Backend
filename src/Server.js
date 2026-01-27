import dotenv from "dotenv";

import app from "./App.js";

dotenv.config();

const PORT = process.env.PORT ;

app.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`);
});
