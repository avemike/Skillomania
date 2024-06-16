// import { db } from "../../db";

import { Challenge } from "../../database/entities/challenge.entity";
import { ChallengeSeries } from "../../database/entities/challengeSeries.entity";
import { ServerContext } from "../../types/custom";

// type InsertChallengeArgs = {
//   title: string;
//   description: string;
//   authorId?: string | null;
//   level: ChallengeLevel;
//   seriesId?: string | null;
//   order?: number;
// };

// type InsertChallengeSeriesArgs = {
//   title: string;
//   description: string;
//   authorId?: string | null;
// };

async function getLooseChallenges({ db }: ServerContext) {
  const challengeRepository = db.getRepository(Challenge);

  const challenges = await challengeRepository
    .createQueryBuilder("challenge")
    .leftJoin("challenge.series", "challengeSeries")
    .where("challengeSeries.id IS NULL")
    .getMany();

  return challenges;
}

async function getSeriesWithChallenges({ db }: ServerContext) {
  const challengeSeries = await db.getRepository(ChallengeSeries).find({
    relations: ["challenges"],
  });

  return challengeSeries;
}

// async function insertChallenge({
//   title,
//   description,
//   authorId = null,
//   level,
//   seriesId = null,
// }: InsertChallengeArgs) {
//   const result = await (
//     await db
//   ).run(
//     "INSERT INTO challenges (title, description, author_id, level, series_id) VALUES (?, ?, ?, ?, ?) RETURNING *",
//     [title, description, authorId, level, seriesId]
//   );

//   return {
//     id: result.lastID,
//     title,
//     description,
//     author_id: authorId,
//     level,
//     series_id: seriesId,
//   };
// }

// async function insertChallengeSeries({
//   title,
//   description,
//   authorId = null,
// }: InsertChallengeSeriesArgs) {
//   const result = await (
//     await db
//   ).run(
//     "INSERT INTO challenge_series (title, description, author_id) VALUES (?, ?, ?) RETURNING *",
//     [title, description, authorId]
//   );

//   return { id: result.lastID, title, description, authorId, challenges: [] };
// }

const challengesRepository = {
  getLooseChallenges,
  getSeriesWithChallenges,
  // insertChallenge,
  // insertChallengeSeries,
};

export { challengesRepository };
