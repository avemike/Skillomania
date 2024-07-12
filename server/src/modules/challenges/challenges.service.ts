import { ServerContext } from "../../types/custom";
import { challengesRepository } from "./challenges.repository";

interface GetSeriesArgs extends Pick<ServerContext, "db"> {
  ids?: number[];
}

interface GetChallengeArgs extends Pick<ServerContext, "db"> {
  id?: number;
}

interface CreateChallengeArgs extends Pick<ServerContext, "db"> {
  title: string;
  description: string;
  seriesId?: number | null;
}

interface CreateChallengeSeriesArgs extends Pick<ServerContext, "db"> {
  title: string;
  description: string;
}

export class ChallengesService {
  public getSeries = async ({ ids, db }: GetSeriesArgs) => {
    return await challengesRepository.getSeriesWithChallenges({ ids, db });
  };

  public getLooseChallenges = async ({ db }: Pick<ServerContext, "db">) => {
    return await challengesRepository.getLooseChallenges({ db });
  };

  public getChallenge = async ({ id, db }: GetChallengeArgs) => {
    return await challengesRepository.getChallenge({ db, id });
  };

  public createChallenge = async ({
    db,
    title,
    description,
    seriesId,
  }: CreateChallengeArgs) => {
    return await challengesRepository.insertChallenge({
      db,
      title,
      description,
      seriesId,
    });
  };

  public createChallengeSeries = async ({
    db,
    title,
    description,
  }: CreateChallengeSeriesArgs) => {
    return await challengesRepository.insertChallengeSeries({
      db,
      title,
      description,
    });
  };
}
