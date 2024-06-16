import "reflect-metadata";
import "dotenv/config";

import express from "express";
// import { challengesRouter } from "./modules/challenges/challenges.controller";
import { setupContext } from "./setupContext";
import { challengesRouter } from "./modules/challenges/challenges.controller";

const app = express();
const port = process.env.SERVER_PORT;

// Setup context
app.use(async (req, _res, next) => {
  const context = await setupContext();

  req = Object.assign(req, context);

  next();
});

app.get("/", (_req, res) => {
  res.send("Express + TypeScript Server");
});

app.listen(port, () => {
  console.log(`[server]: Server is running at http://localhost:${port}`);
});

app.use("/challenges", challengesRouter);
