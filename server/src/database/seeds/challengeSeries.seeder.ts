import { DataSource } from "typeorm";
import { ChallengeSeries } from "../entities/challengeSeries.entity";
import {
  cookingChallengeSeries,
  instrumentsCategory,
  othersCategory,
  playingGuitarChallengeSeries,
  playingUkuleleChallengeSeries,
  readingChallengeSeries,
  runningChallengeSeries,
  sportsCategory,
  userGuitarMaster,
  userRunningGuru,
  userYourMama,
} from "./seeds";

export const ChallengeSeriesSeeder = {
  run: async (dataSource: DataSource): Promise<any> => {
    console.log("ChallengeSeriesSeeder is running...");
    const challengeSeriesRepository = dataSource.getRepository(ChallengeSeries);

    const playingGuitarChallengeSeriesEntity =
      await challengeSeriesRepository.save({
        ...playingGuitarChallengeSeries,
        author: userGuitarMaster,
        owners: [userGuitarMaster],
        versionAuthor: userGuitarMaster,
        category: instrumentsCategory,
      });

    const runningChallengeSeriesEntity = await challengeSeriesRepository.save({
      ...runningChallengeSeries,
      author: userRunningGuru,
      owners: [userRunningGuru],
      versionAuthor: userRunningGuru,
      category: sportsCategory,
    });

    const readingChallengeSeriesEntity = await challengeSeriesRepository.save({
      ...readingChallengeSeries,
      author: userRunningGuru,
      owners: [userRunningGuru],
      versionAuthor: userRunningGuru,
      category: sportsCategory,
    });

    const cookingChallengeSeriesEntity = await challengeSeriesRepository.save({
      ...cookingChallengeSeries,
      author: userYourMama,
      owners: [userYourMama],
      versionAuthor: userYourMama,
      category: othersCategory,
    });

    const playingUkuleleChallengeSeriesEntity =
      await challengeSeriesRepository.save({
        ...playingUkuleleChallengeSeries,
        author: userRunningGuru,
        owners: [userRunningGuru],
        versionAuthor: userRunningGuru,
        category: sportsCategory,
      });

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
