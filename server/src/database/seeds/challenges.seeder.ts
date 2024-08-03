import { DataSource } from "typeorm";
import { Challenge } from "../entities/challenge.entity";
import {
  cookingChallenge1,
  cookingChallenge2,
  cookingChallenge3,
  cookingChallenge4,
  cookingChallenge5,
  playingGuitarChallenge1,
  playingGuitarChallenge2,
  playingUkuleleChallenge1,
  playingUkuleleChallenge2,
  playingUkuleleChallenge3,
  playingUkuleleChallenge4,
  playingUkuleleChallenge5,
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
} from "./seeds";
import { IChallenge } from "../../models/IChallenge";

/** We need to convert IChallenge (challenge model) to new Challenge (challenge entity instance) */
function convertToChallenge(data: Partial<IChallenge>): Challenge {
  const challenge = new Challenge();

  Object.assign(challenge, data);

  return challenge;
}

export const ChallengeSeeder = {
  run: async (dataSource: DataSource): Promise<any> => {
    console.log("ChallengeSeeder is running...");
    const challengeRepository = dataSource.getRepository(Challenge);

    await challengeRepository.save(
      convertToChallenge(playingUkuleleChallenge1)
    );
    await challengeRepository.save(
      convertToChallenge(playingUkuleleChallenge2)
    );
    await challengeRepository.save(
      convertToChallenge(playingUkuleleChallenge3)
    );
    await challengeRepository.save(
      convertToChallenge(playingUkuleleChallenge4)
    );
    await challengeRepository.save(
      convertToChallenge(playingUkuleleChallenge5)
    );

    await challengeRepository.save(convertToChallenge(cookingChallenge1));
    await challengeRepository.save(convertToChallenge(cookingChallenge2));
    await challengeRepository.save(convertToChallenge(cookingChallenge3));
    await challengeRepository.save(convertToChallenge(cookingChallenge4));
    await challengeRepository.save(convertToChallenge(cookingChallenge5));

    await challengeRepository.save(convertToChallenge(playingGuitarChallenge1));
    await challengeRepository.save(convertToChallenge(playingGuitarChallenge2));
    await challengeRepository.save(convertToChallenge(playingGuitarChallenge3));
    await challengeRepository.save(convertToChallenge(playingGuitarChallenge4));
    await challengeRepository.save(convertToChallenge(playingGuitarChallenge5));

    await challengeRepository.save(convertToChallenge(runningChallenge1));
    await challengeRepository.save(convertToChallenge(runningChallenge2));
    await challengeRepository.save(convertToChallenge(runningChallenge3));
    await challengeRepository.save(convertToChallenge(runningChallenge4));

    await challengeRepository.save(convertToChallenge(readingChallenge1));
    await challengeRepository.save(convertToChallenge(readingChallenge2));
    await challengeRepository.save(convertToChallenge(readingChallenge3));
    await challengeRepository.save(convertToChallenge(readingChallenge4));
    await challengeRepository.save(convertToChallenge(readingChallenge5));

    await challengeRepository.save(convertToChallenge(yoMamaChallenge));

    console.log("ChallengeSeeder has run successfully!");
  },
};
