import { Challenge } from "../../database/entities/challenge.entity";
import { ChallengeSeries } from "../../database/entities/challengeSeries.entity";
import { db } from "../../database/initializeDatabase";
import { wrapInRepositoryError } from "../../errors/errorWrappers";

interface GetChallengeArgs {
  id?: number;
}

async function getChallenge({ id }: GetChallengeArgs) {
  const challengeRepository = db.getRepository(Challenge);
  const challenge = await challengeRepository.findOne({
    where: { id },
    relations: ["series"],
  });

  return challenge;
}

/** Challenges without any series associated with them */
async function getLooseChallenges() {
  const challengeRepository = db.getRepository(Challenge);

  const challenges = await challengeRepository
    .createQueryBuilder("challenge")
    .leftJoin("challenge.series", "challengeSeries")
    .where("challengeSeries.id IS NULL")
    .getMany();

  return challenges;
}

interface GetSeriesWithChallengesArgs {
  ids?: number[];
}

async function getSeriesWithChallenges({
  ids = [],
}: GetSeriesWithChallengesArgs) {
  const challengeSeriesRepository = db.getRepository(ChallengeSeries);
  const challengeSeries = await challengeSeriesRepository.find({
    relations: ["challenges"],
    where: ids.length ? ids.map((id) => ({ id })) : {},
  });

  return challengeSeries;
}

interface InsertChallengeArgs {
  title: string;
  description: string;
  seriesId?: number | null;
}

async function insertChallenge({
  title,
  description,
  seriesId,
}: InsertChallengeArgs) {
  const challengeRepository = db.getRepository(Challenge);
  const challenge = challengeRepository.create({
    title,
    description,
    /** temp start */
    author: { id: 1 },
    versionAuthor: { id: 1 },
    /** temp end */
    ...(seriesId && {
      series: [{ id: seriesId }],
    }),
  });

  await challengeRepository.save(challenge);

  return challenge;
}

interface InsertChallengeSeriesArgs {
  title: string;
  description: string;
}

async function insertChallengeSeries({
  title,
  description,
}: InsertChallengeSeriesArgs) {
  const challengeSeriesRepository = db.getRepository(ChallengeSeries);
  const challengeSeries = challengeSeriesRepository.create({
    title,
    description,
    /** temp start */
    author: { id: 1 },
    versionAuthor: { id: 1 },
    /** temp end */
  });

  await challengeSeriesRepository.save(challengeSeries);

  return challengeSeries;
}

const challengesRepository = {
  getChallenge: wrapInRepositoryError(getChallenge),
  getLooseChallenges: wrapInRepositoryError(getLooseChallenges),
  getSeriesWithChallenges: wrapInRepositoryError(getSeriesWithChallenges),
  insertChallenge: wrapInRepositoryError(insertChallenge),
  insertChallengeSeries: wrapInRepositoryError(insertChallengeSeries),
};

export { challengesRepository };
