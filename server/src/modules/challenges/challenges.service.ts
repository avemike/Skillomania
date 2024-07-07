import { ServerContext } from "../../types/custom";
import { challengesRepository } from "./challenges.repository";

interface GetSeriesArgs extends Pick<ServerContext, "db"> {
  ids?: number[];
}

async function getSeries({ ids, db }: GetSeriesArgs) {
  return await challengesRepository.getSeriesWithChallenges({ ids, db });
}

async function getLooseChallenges({ db }: Pick<ServerContext, "db">) {
  return await challengesRepository.getLooseChallenges({ db });
}

interface GetChallengeArgs extends Pick<ServerContext, "db"> {
  id?: number;
}

async function getChallenge({ id, db }: GetChallengeArgs) {
  return await challengesRepository.getChallenge({ db, id });
}

interface CreateChallengeArgs extends Pick<ServerContext, "db"> {
  title: string;
  description: string;
  seriesId?: number;
}

async function createChallenge({
  db,
  title,
  description,
  seriesId,
}: CreateChallengeArgs) {
  return await challengesRepository.insertChallenge({
    db,
    title,
    description,
    seriesId,
  });
}

interface CreateChallengeSeriesArgs extends Pick<ServerContext, "db"> {
  title: string;
  description: string;
}

async function createChallengeSeries({
  db,
  title,
  description,
}: CreateChallengeSeriesArgs) {
  return await challengesRepository.insertChallengeSeries({
    db,
    title,
    description,
  });
}

export const challengesService = {
  getSeries,
  getLooseChallenges,
  getChallenge,
  createChallenge,
  createChallengeSeries,
};
