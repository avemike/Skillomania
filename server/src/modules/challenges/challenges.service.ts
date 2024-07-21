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
}

interface CreateChallengeSeriesArgs {
  title: string;
  description: string;
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
  }: CreateChallengeArgs) => {
    return await challengesRepository.insertChallenge({
      title,
      description,
      seriesId,
    });
  };

  public createChallengeSeries = async ({
    title,
    description,
  }: CreateChallengeSeriesArgs) => {
    return await challengesRepository.insertChallengeSeries({
      title,
      description,
    });
  };
}
