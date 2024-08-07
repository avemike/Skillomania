import { Category } from "../../database/entities/category.entity";
import { Challenge } from "../../database/entities/challenge.entity";
import { ChallengeSeries } from "../../database/entities/challengeSeries.entity";
import { db } from "../../database/initializeDatabase";
import { wrapInRepositoryError } from "../../errors/errorWrappers";
import { IChallenge } from "../../models/IChallenge";
import { IChallengeSeries } from "../../models/IChallengeSeries";

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
  categoryId: number;
  effortLevel: IChallenge["effortLevel"];
  requiredExpertise: IChallenge["requiredExpertise"];
  authorId: number;
  difficultyExplanation?: string;
  seriesId?: number | null;
}

async function insertChallenge({
  title,
  description,
  seriesId,
  categoryId,
  effortLevel,
  requiredExpertise,
  authorId,
  difficultyExplanation,
}: InsertChallengeArgs) {
  const challengeRepository = db.getRepository(Challenge);
  const challenge = challengeRepository.create({
    title,
    description,
    author: { id: authorId },
    versionAuthor: { id: authorId },
    category: { id: categoryId },
    effortLevel,
    requiredExpertise,
    difficultyExplanation: difficultyExplanation,
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
  categoryId: number;
  effortLevel: IChallengeSeries["effortLevel"];
  requiredExpertise: IChallengeSeries["requiredExpertise"];
  authorId: number;
  difficultyExplanation?: string;
}

async function insertChallengeSeries({
  title,
  description,
  categoryId,
  effortLevel,
  requiredExpertise,
  authorId,
  difficultyExplanation,
}: InsertChallengeSeriesArgs) {
  const challengeSeriesRepository = db.getRepository(ChallengeSeries);
  const challengeSeries = challengeSeriesRepository.create({
    title,
    description,
    category: { id: categoryId },
    effortLevel,
    requiredExpertise,
    author: { id: authorId },
    versionAuthor: { id: authorId },
    difficultyExplanation: difficultyExplanation,
  });

  await challengeSeriesRepository.save(challengeSeries);

  return challengeSeries;
}

async function getCategories() {
  const categoryRepository = db.getRepository(Category);
  const categories = await categoryRepository.find();

  return categories;
}

const challengesRepository = {
  getCategories: wrapInRepositoryError(getCategories),
  getChallenge: wrapInRepositoryError(getChallenge),
  getLooseChallenges: wrapInRepositoryError(getLooseChallenges),
  getSeriesWithChallenges: wrapInRepositoryError(getSeriesWithChallenges),

  insertChallenge: wrapInRepositoryError(insertChallenge),
  insertChallengeSeries: wrapInRepositoryError(insertChallengeSeries),
};

export { challengesRepository };
