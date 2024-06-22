import express, { Request, Response } from "express";
import { challengesService } from "./challenges.service";
import { extractContextFromRequest } from "../../helpers/extractContextFromRequest";

const challengesRouter = express.Router();

challengesRouter.get("/", async (req: Request, res: Response) => {
  const challenges = await challengesService.getLooseChallenges(
    extractContextFromRequest(req)
  );

  return res.json(challenges);
});

challengesRouter.get("/:id", async (req: Request, res: Response) => {
  const challenge = await challengesService.getChallenge({
    id: Number(req.params.id),
    ...extractContextFromRequest(req),
  });

  return res.json(challenge);
});

challengesRouter.get("/series", async (req: Request, res: Response) => {
  const series = await challengesService.getSeries(
    extractContextFromRequest(req)
  );

  return res.json(series);
});

challengesRouter.post("/series/:id", async (req: Request, res: Response) => {
  const challenge = await challengesService.createChallenge({
    ...req.body,
    seriesId: Number(req.params.id),
    ...extractContextFromRequest(req),
  });

  return res.json(challenge);
});

challengesRouter.post("/challenge", async (req: Request, res: Response) => {
  const challenge = await challengesService.createChallenge({
    ...req.body,
    ...extractContextFromRequest(req),
  });

  return res.json(challenge);
});

challengesRouter.post("/series", async (req: Request, res: Response) => {
  const series = await challengesService.createChallengeSeries({
    ...req.body,
    ...extractContextFromRequest(req),
  });

  return res.json(series);
});

export { challengesRouter };
