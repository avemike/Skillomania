import { ServerContext } from "../../types/custom";
import { challengesRepository } from "./challenges.repository";

// interface CreateChallengeArgs {
//   title: string;
//   description: string;
//   level: "easy" | "medium" | "hard";
//   seriesId?: string;
// }

// interface CreateChallengeSeriesArgs {
//   title: string;
//   description: string;
// }

async function getSeries({ db }: ServerContext) {
  return await challengesRepository.getSeriesWithChallenges({ db });
}

async function getLooseChallenges({ db }: ServerContext) {
  return await challengesRepository.getLooseChallenges({ db });
}

// async function createChallenge({
//   title,
//   description,
//   level,
//   seriesId,
// }: CreateChallengeArgs) {
//   return await challengesRepository.insertChallenge({
//     title,
//     description,
//     level,
//     seriesId,
//   });
// }

// async function createChallengeSeries({
//   title,
//   description,
// }: CreateChallengeSeriesArgs) {
//   return await challengesRepository.insertChallengeSeries({
//     title,
//     description,
//   });
// }

export const challengesService = {
  getSeries,
  getLooseChallenges,
  // createChallenge,
  // createChallengeSeries,
};
