import { DataSource } from "typeorm";
import { Challenge } from "../entities/challenge.entity";
import {
  cookingChallenge1,
  cookingChallenge2,
  cookingChallenge3,
  cookingChallenge4,
  cookingChallenge5,
  cookingChallengeSeries,
  playingGuitarChallenge1,
  playingGuitarChallenge2,
  playingGuitarChallengeSeries,
  playingUkuleleChallenge1,
  playingUkuleleChallenge2,
  playingUkuleleChallenge3,
  playingUkuleleChallenge4,
  playingUkuleleChallenge5,
  playingUkuleleChallengeSeries,
  readingChallengeSeries,
  runningChallengeSeries,
  playingGuitarChallenge3,
  playingGuitarChallenge4,
  playingGuitarChallenge5,
  readingChallenge1,
  readingChallenge2,
  readingChallenge3,
  readingChallenge4,
  readingChallenge5,
  runningChallenge1,
  runningChallenge2,
  runningChallenge3,
  runningChallenge4,
  yoMamaChallenge,
  userGuitarMaster,
  userRunningGuru,
  userYourMama,
  instrumentsCategory,
  cookingCategory,
  sportsCategory,
  readingCategory,
  othersCategory,
} from "./seeds";

export const ChallengeSeeder = {
  run: async (dataSource: DataSource): Promise<any> => {
    console.log("ChallengeSeeder is running...");
    const challengeRepository = dataSource.getRepository(Challenge);

    challengeRepository.save({
      ...playingUkuleleChallenge1,
      author: userRunningGuru,
      owners: [userRunningGuru],
      versionAuthor: userRunningGuru,
      series: [playingUkuleleChallengeSeries],
      category: instrumentsCategory,
    });

    challengeRepository.save({
      ...playingUkuleleChallenge2,
      author: userRunningGuru,
      owners: [userRunningGuru],
      versionAuthor: userRunningGuru,
      series: [playingUkuleleChallengeSeries],
      category: instrumentsCategory,
    });

    challengeRepository.save({
      ...playingUkuleleChallenge3,
      author: userRunningGuru,
      owners: [userRunningGuru],
      versionAuthor: userRunningGuru,
      series: [playingUkuleleChallengeSeries],
      category: instrumentsCategory,
    });

    challengeRepository.save({
      ...playingUkuleleChallenge4,
      author: userRunningGuru,
      owners: [userRunningGuru],
      versionAuthor: userRunningGuru,
      series: [playingUkuleleChallengeSeries],
      category: instrumentsCategory,
    });

    challengeRepository.save({
      ...playingUkuleleChallenge5,
      author: userRunningGuru,
      owners: [userRunningGuru],
      versionAuthor: userRunningGuru,
      series: [playingUkuleleChallengeSeries],
      category: instrumentsCategory,
    });

    challengeRepository.save({
      ...cookingChallenge1,
      author: userYourMama,
      owners: [userYourMama],
      versionAuthor: userYourMama,
      series: [cookingChallengeSeries],
      category: cookingCategory,
    });

    challengeRepository.save({
      ...cookingChallenge2,
      author: userYourMama,
      owners: [userYourMama],
      versionAuthor: userYourMama,
      series: [cookingChallengeSeries],
      category: cookingCategory,
    });

    challengeRepository.save({
      ...cookingChallenge3,
      author: userYourMama,
      owners: [userYourMama],
      versionAuthor: userYourMama,
      series: [cookingChallengeSeries],
      category: cookingCategory,
    });

    challengeRepository.save({
      ...cookingChallenge4,
      author: userYourMama,
      owners: [userYourMama],
      versionAuthor: userYourMama,
      series: [cookingChallengeSeries],
      category: cookingCategory,
    });

    challengeRepository.save({
      ...cookingChallenge5,
      author: userYourMama,
      owners: [userYourMama],
      versionAuthor: userYourMama,
      series: [cookingChallengeSeries],
      category: cookingCategory,
    });

    challengeRepository.save({
      ...playingGuitarChallenge1,
      author: userGuitarMaster,
      owners: [userGuitarMaster],
      versionAuthor: userGuitarMaster,
      series: [playingGuitarChallengeSeries],
      category: instrumentsCategory,
    });

    challengeRepository.save({
      ...playingGuitarChallenge2,
      author: userGuitarMaster,
      owners: [userGuitarMaster],
      versionAuthor: userGuitarMaster,
      series: [playingGuitarChallengeSeries],
      category: instrumentsCategory,
    });

    challengeRepository.save({
      ...playingGuitarChallenge3,
      author: userGuitarMaster,
      owners: [userGuitarMaster],
      versionAuthor: userGuitarMaster,
      series: [playingGuitarChallengeSeries],
      category: instrumentsCategory,
    });

    challengeRepository.save({
      ...playingGuitarChallenge4,
      author: userGuitarMaster,
      owners: [userGuitarMaster],
      versionAuthor: userGuitarMaster,
      series: [playingGuitarChallengeSeries],
      category: instrumentsCategory,
    });

    challengeRepository.save({
      ...playingGuitarChallenge5,
      author: userGuitarMaster,
      owners: [userGuitarMaster],
      versionAuthor: userGuitarMaster,
      series: [playingGuitarChallengeSeries],
      category: instrumentsCategory,
    });

    challengeRepository.save({
      ...runningChallenge1,
      author: userRunningGuru,
      owners: [userRunningGuru],
      versionAuthor: userRunningGuru,
      series: [runningChallengeSeries],
      category: sportsCategory,
    });

    challengeRepository.save({
      ...runningChallenge2,
      author: userRunningGuru,
      owners: [userRunningGuru],
      versionAuthor: userRunningGuru,
      series: [runningChallengeSeries],
      category: sportsCategory,
    });

    challengeRepository.save({
      ...runningChallenge3,
      author: userRunningGuru,
      owners: [userRunningGuru],
      versionAuthor: userRunningGuru,
      series: [runningChallengeSeries],
      category: sportsCategory,
    });

    challengeRepository.save({
      ...runningChallenge4,
      author: userRunningGuru,
      owners: [userRunningGuru],
      versionAuthor: userRunningGuru,
      series: [runningChallengeSeries],
      category: sportsCategory,
    });

    challengeRepository.save({
      ...readingChallenge1,
      author: userRunningGuru,
      owners: [userRunningGuru],
      versionAuthor: userRunningGuru,
      series: [readingChallengeSeries],
      category: readingCategory,
    });

    challengeRepository.save({
      ...readingChallenge2,
      author: userRunningGuru,
      owners: [userRunningGuru],
      versionAuthor: userRunningGuru,
      series: [readingChallengeSeries],
      category: readingCategory,
    });

    challengeRepository.save({
      ...readingChallenge3,
      author: userRunningGuru,
      owners: [userRunningGuru],
      versionAuthor: userRunningGuru,
      series: [readingChallengeSeries],
      category: readingCategory,
    });

    challengeRepository.save({
      ...readingChallenge4,
      author: userRunningGuru,
      owners: [userRunningGuru],
      versionAuthor: userRunningGuru,
      series: [readingChallengeSeries],
      category: readingCategory,
    });

    challengeRepository.save({
      ...readingChallenge5,
      author: userRunningGuru,
      owners: [userRunningGuru],
      versionAuthor: userRunningGuru,
      series: [readingChallengeSeries],
      category: readingCategory,
    });

    challengeRepository.save({
      ...yoMamaChallenge,
      author: userYourMama,
      owners: [userYourMama],
      versionAuthor: userYourMama,
      category: othersCategory,
    });

    console.log("ChallengeSeeder has run successfully!");
  },
};
