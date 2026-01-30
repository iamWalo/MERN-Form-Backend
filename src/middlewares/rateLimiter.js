import rateLimit from "express-rate-limit";
import { ipKeyGenerator } from "express-rate-limit"; // important
export const formLimiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  max: 5, 
  message: {
    error: "Trop de requêtes, réessayez plus tard 🛑",
  },
   keyGenerator: ipKeyGenerator(req),
});
