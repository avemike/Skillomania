import { Challenge } from "../../database/entities/challenge.entity";
import { ChallengeSeries } from "../../database/entities/challengeSeries.entity";
import { IChallenge } from "../../models/IChallenge";
import { ServerContext } from "../../types/custom";

interface GetChallengeArgs extends Pick<ServerContext, "db"> {
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
async function getLooseChallenges({
  db,
}: Pick<ServerContext, "db">): Promise<IChallenge[]> {
  const challengeRepository = db.getRepository(Challenge);

  const challenges = await challengeRepository
    .createQueryBuilder("challenge")
    .leftJoin("challenge.series", "challengeSeries")
    .where("challengeSeries.id IS NULL")
    .getMany();

  return challenges;
}

interface GetSeriesWithChallengesArgs extends Pick<ServerContext, "db"> {
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

interface InsertChallengeArgs extends Pick<ServerContext, "db"> {
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

interface InsertChallengeSeriesArgs extends Pick<ServerContext, "db"> {
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
    /** temp start */
    author: { id: 1 },
    versionAuthor: { id: 1 },
    /** temp end */
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
