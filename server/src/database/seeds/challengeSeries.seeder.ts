import { DataSource } from "typeorm";
import { ChallengeSeries } from "../entities/challengeSeries.entity";
import {
  cookingChallengeSeries,
  playingGuitarChallengeSeries,
  playingUkuleleChallengeSeries,
  readingChallengeSeries,
  runningChallengeSeries,
} from "./seeds";
import { IChallengeSeries } from "../../models/IChallengeSeries";

/** We need to convert IChallengeSeries (challengeSeries model) to new ChallengeSeries (challengeSeries entity instance) */
function convertToChallengeSeries(
  data: Partial<IChallengeSeries>
): ChallengeSeries {
  const challengeSeries = new ChallengeSeries();

  Object.assign(challengeSeries, data);

  return challengeSeries;
}

export const ChallengeSeriesSeeder = {
  run: async (dataSource: DataSource): Promise<any> => {
    console.log("ChallengeSeriesSeeder is running...");
    const repository = dataSource.getRepository(ChallengeSeries);

    const playingGuitarChallengeSeriesEntity = await repository.save(
      convertToChallengeSeries(playingGuitarChallengeSeries)
    );

    const runningChallengeSeriesEntity = await repository.save(
      convertToChallengeSeries(runningChallengeSeries)
    );

    const readingChallengeSeriesEntity = await repository.save(
      convertToChallengeSeries(readingChallengeSeries)
    );

    const cookingChallengeSeriesEntity = await repository.save(
      convertToChallengeSeries(cookingChallengeSeries)
    );

    const playingUkuleleChallengeSeriesEntity = await repository.save(
      convertToChallengeSeries(playingUkuleleChallengeSeries)
    );

    Object.assign(
      playingGuitarChallengeSeries,
      playingGuitarChallengeSeriesEntity
    );
    Object.assign(runningChallengeSeries, runningChallengeSeriesEntity);
    Object.assign(readingChallengeSeries, readingChallengeSeriesEntity);
    Object.assign(cookingChallengeSeries, cookingChallengeSeriesEntity);
    Object.assign(
      playingUkuleleChallengeSeries,
      playingUkuleleChallengeSeriesEntity
    );

    console.log("ChallengeSeriesSeeder has run successfully!");
  },
};
