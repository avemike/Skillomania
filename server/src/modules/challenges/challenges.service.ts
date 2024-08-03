import { IChallenge } from "../../models/IChallenge";
import { IChallengeSeries } from "../../models/IChallengeSeries";
import { challengesRepository } from "./challenges.repository";

interface GetSeriesArgs {
  ids?: number[];
}

interface GetChallengeArgs {
  id?: number;
}

interface CreateChallengeArgs {
  title: string;
  description: string;
  seriesId?: number | null;
  categoryId: number;
  effortLevel: IChallenge["effortLevel"];
  requiredExpertise: IChallenge["requiredExpertise"];
  difficultyExplanation?: string;
  authorId: number;
}

interface CreateChallengeSeriesArgs {
  title: string;
  description: string;
  categoryId: number;
  effortLevel: IChallengeSeries["effortLevel"];
  requiredExpertise: IChallengeSeries["requiredExpertise"];
  authorId: number;
  difficultyExplanation?: string;
}

export class ChallengesService {
  public getSeries = async ({ ids }: GetSeriesArgs) => {
    return await challengesRepository.getSeriesWithChallenges({ ids });
  };

  public getLooseChallenges = async () => {
    return await challengesRepository.getLooseChallenges();
  };

  public getChallenge = async ({ id }: GetChallengeArgs) => {
    return await challengesRepository.getChallenge({ id });
  };

  public createChallenge = async ({
    title,
    description,
    seriesId,
    categoryId,
    effortLevel,
    requiredExpertise,
    difficultyExplanation,
    authorId,
  }: CreateChallengeArgs) => {
    return await challengesRepository.insertChallenge({
      title,
      description,
      seriesId,
      categoryId,
      effortLevel,
      requiredExpertise,
      difficultyExplanation,
      authorId,
    });
  };

  public createChallengeSeries = async ({
    title,
    description,
    categoryId,
    effortLevel,
    requiredExpertise,
    authorId,
    difficultyExplanation,
  }: CreateChallengeSeriesArgs) => {
    return await challengesRepository.insertChallengeSeries({
      title,
      description,
      categoryId,
      effortLevel,
      requiredExpertise,
      authorId,
      difficultyExplanation,
    });
  };
}
