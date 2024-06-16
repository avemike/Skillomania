import "dotenv/config";

import express from "express";
import { challengesRouter } from "./modules/challenges/challenges.controller";
import { setupContext } from "./setupContext";

const app = express();
const port = process.env.PORT;

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
