import express, { urlencoded } from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import { setupContext } from "./setupContext";
import { googleAuthHandler } from "./auth/googleAuthHandler";
import { RegisterRoutes } from "../build/routes";

export const app = express();

app.use(cookieParser());
app.use(urlencoded({ extended: true }));
app.use(cors({ origin: process.env.CLIENT_URL, credentials: true }));
app.use(express.json());
// Logger middleware
app.use((req, _res, next) => {
  console.log(`[server]: ${req.method} ${req.path}`);
  next();
});

// Setup context
app.use(async (req, res, next) => {
  const context = await setupContext(req, res);

  req = Object.assign(req, context);

  next();
});

app.post("/google-auth", googleAuthHandler);

RegisterRoutes(app);
