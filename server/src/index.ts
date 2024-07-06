import "reflect-metadata";
import "dotenv/config";

import express from "express";
import { setupContext } from "./setupContext";
import { challengesRouter } from "./modules/challenges/challenges.controller";
import cors from "cors";
import { validateEnvs } from "./validateEnvs";
import { googleAuthHandler } from "./auth/googleAuthHandler";
import cookieParser from "cookie-parser";

validateEnvs();

const app = express();

app.use(cookieParser());
app.use(cors());
app.use(express.json());

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

app.use("/challenges", challengesRouter);
