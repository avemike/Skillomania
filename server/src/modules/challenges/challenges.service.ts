import { ServerContext } from "../../types/custom";
import { challengesRepository } from "./challenges.repository";

interface GetSeriesArgs extends ServerContext {
  ids?: number[];
}

async function getSeries({ ids, db }: GetSeriesArgs) {
  return await challengesRepository.getSeriesWithChallenges({ ids, db });
}

async function getLooseChallenges({ db }: ServerContext) {
  return await challengesRepository.getLooseChallenges({ db });
}

interface GetChallengeArgs extends ServerContext {
  id?: number;
}

async function getChallenge({ id, db }: GetChallengeArgs) {
  return await challengesRepository.getChallenge({ db, id });
}

interface CreateChallengeArgs extends ServerContext {
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

interface CreateChallengeSeriesArgs extends ServerContext {
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
