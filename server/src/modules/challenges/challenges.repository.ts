// import { db } from "../../db";

import { Challenge } from "../../database/entities/challenge.entity";
import { ChallengeSeries } from "../../database/entities/challengeSeries.entity";
import { ServerContext } from "../../types/custom";

interface GetChallengeArgs extends ServerContext {
  id?: number;
}

async function getChallenge({ db, id }: GetChallengeArgs) {
  const challengeRepository = db.getRepository(Challenge);
  const challenge = await challengeRepository.findOne({
    where: { id },
    relations: ["series"],
  });

  return challenge;
}

/** Challenges without any series associated with them */
async function getLooseChallenges({ db }: ServerContext) {
  const challengeRepository = db.getRepository(Challenge);

  const challenges = await challengeRepository
    .createQueryBuilder("challenge")
    .leftJoin("challenge.series", "challengeSeries")
    .where("challengeSeries.id IS NULL")
    .getMany();

  return challenges;
}

interface GetSeriesWithChallengesArgs extends ServerContext {
  ids?: number[];
}

async function getSeriesWithChallenges({
  ids = [],
  db,
}: GetSeriesWithChallengesArgs) {
  const challengeSeriesRepository = db.getRepository(ChallengeSeries);
  const challengeSeries = await challengeSeriesRepository.find({
    relations: ["challenges"],
    where: ids.length ? ids.map((id) => ({ id })) : {},
  });

  return challengeSeries;
}

interface InsertChallengeArgs extends ServerContext {
  title: string;
  description: string;
  seriesId?: number;
}

async function insertChallenge({
  db,
  title,
  description,
  seriesId,
}: InsertChallengeArgs) {
  const challengeRepository = db.getRepository(Challenge);
  const challenge = challengeRepository.create({
    title,
    description,
    ...(seriesId && {
      series: [{ id: seriesId }],
    }),
  });

  await challengeRepository.save(challenge);

  return challenge;
}

interface InsertChallengeSeriesArgs extends ServerContext {
  title: string;
  description: string;
}

async function insertChallengeSeries({
  db,
  title,
  description,
}: InsertChallengeSeriesArgs) {
  const challengeSeriesRepository = db.getRepository(ChallengeSeries);
  const challengeSeries = challengeSeriesRepository.create({
    title,
    description,
  });

  await challengeSeriesRepository.save(challengeSeries);

  return challengeSeries;
}

const challengesRepository = {
  getChallenge,
  getLooseChallenges,
  getSeriesWithChallenges,
  insertChallenge,
  insertChallengeSeries,
};

export { challengesRepository };
