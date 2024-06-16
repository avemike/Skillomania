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

challengesRouter.get("/series", async (req: Request, res: Response) => {
  const series = await challengesService.getSeries(
    extractContextFromRequest(req)
  );

  return res.json(series);
});

// challengesRouter.post("/", async (req: Request, res: Response) => {
//   const { title, description, level, seriesId } = req.body as ParsedQs;

//   const challenge = await challengesService.createChallenge({
//     title: title as string,
//     description: description as string,
//     level: level as "easy" | "medium" | "hard",
//     seriesId: seriesId as string,
//   });

//   return res.json(challenge);
// });

// challengesRouter.post("/series", async (req: Request, res: Response) => {
//   const { title, description } = req.body as ParsedQs;

//   const series = await challengesService.createChallengeSeries({
//     title: title as string,
//     description: description as string,
//   });

//   return res.json(series);
// });

export { challengesRouter };
