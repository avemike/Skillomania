import "reflect-metadata";
import "dotenv/config";

import express, { urlencoded } from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import { setupContext } from "./setupContext";
import { validateEnvs } from "./validateEnvs";
import { googleAuthHandler } from "./auth/googleAuthHandler";
import { RegisterRoutes } from "../build/routes";

validateEnvs();

const app = express();

app.use(cookieParser());
app.use(urlencoded({ extended: true }));
app.use(cors({ origin: process.env.CLIENT_URL, credentials: true }));
app.use(express.json());
// Logger middleware
app.use((req, _res, next) => {
  console.log(`[server]: ${req.method} ${req.path}`);
  next();
});

const port = process.env.SERVER_PORT;

// Setup context
app.use(async (req, res, next) => {
  const context = await setupContext(req, res);

  req = Object.assign(req, context);

  next();
});

app.get("/", (_req, res) => {
  res.send("Express + TypeScript Server");
});

app.listen(port, () => {
  console.log(`[server]: Server is running at http://localhost:${port}`);
});

app.post("/google-auth", googleAuthHandler);

RegisterRoutes(app);
