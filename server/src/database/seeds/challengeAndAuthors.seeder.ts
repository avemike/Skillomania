import { Seeder } from "typeorm-extension";
import { DataSource } from "typeorm";
import { Challenge } from "../models/challenge.model";
import { User } from "../models/user.model";
import { ChallengeSeries } from "../models/challengeSeries.model";

const playingGuitarChallengeSeries = {
  title: "Playing Guitar",
  description: "This challenge series is all about playing guitar",
};

const runningChallengeSeries = {
  title: "Running",
  description: "This challenge series is all about running",
};

const playingGuitarChallenge1 = {
  title: "Play a G major chord",
  description: "Play a G major chord on the guitar",
};

const playingGuitarChallenge2 = {
  title: "Play a C major chord",
  description: "Play a C major chord on the guitar",
};

const playingGuitarChallenge3 = {
  title: "Play a D major chord",
  description: "Play a D major chord on the guitar",
};

const playingGuitarChallenge4 = {
  title: "Learn the A minor pentatonic scale",
  description: "Learn the A minor pentatonic scale on the guitar",
};

const playingGuitarChallenge5 = {
  title: "Learn how to play a Wonderwall by Oasis",
  description: "Learn how to play a Wonderwall by Oasis on the guitar",
};

const runningChallenge1 = {
  title: "Run 1 mile",
  description: "Run 1 mile",
};

const runningChallenge2 = {
  title: "Run 1.5 miles",
  description: "Run 1.5 miles",
};

const runningChallenge3 = {
  title: "Run 2 miles",
  description: "Run 2 miles",
};

const runningChallenge4 = {
  title: "Run 3 miles",
  description: "Run 3 miles",
};

const yoMamaChallenge = {
  title: "Yo Mama",
  description: "Yo Mama",
};

export default class ChallengeSeeder implements Seeder {
  track = true;

  public async run(dataSource: DataSource): Promise<any> {
    const userRepository = dataSource.getRepository(User);
    const challengeRepository = dataSource.getRepository(Challenge);
    const challengeSeriesRepository = dataSource.getRepository(ChallengeSeries);

    const users = await userRepository.save([
      {
        email: "guitar_master123@gmail.com",
      },
      {
        email: "running_guru_workout@example.com",
      },
      {
        email: "yourMamaHehe@samplemail.com",
      },
    ]);

    console.log(users);

    const playingGuitarChallengeSeriesEntity =
      await challengeSeriesRepository.save({
        ...playingGuitarChallengeSeries,
        author: users[0],
        versionAuthor: users[0],
      });

    const runningChallengeSeriesEntity = await challengeSeriesRepository.save({
      ...runningChallengeSeries,
      author: users[1],
      versionAuthor: users[1],
    });

    challengeRepository.save({
      ...playingGuitarChallenge1,
      author: users[0],
      versionAuthor: users[0],
      series: [playingGuitarChallengeSeriesEntity],
    });

    challengeRepository.save({
      ...playingGuitarChallenge2,
      author: users[0],
      versionAuthor: users[0],
      series: [playingGuitarChallengeSeriesEntity],
    });

    challengeRepository.save({
      ...playingGuitarChallenge3,
      author: users[0],
      versionAuthor: users[0],
      series: [playingGuitarChallengeSeriesEntity],
    });

    challengeRepository.save({
      ...playingGuitarChallenge4,
      author: users[0],
      versionAuthor: users[0],
      series: [playingGuitarChallengeSeriesEntity],
    });

    challengeRepository.save({
      ...playingGuitarChallenge5,
      author: users[0],
      versionAuthor: users[0],
      series: [playingGuitarChallengeSeriesEntity],
    });

    challengeRepository.save({
      ...runningChallenge1,
      author: users[1],
      versionAuthor: users[1],
      series: [runningChallengeSeriesEntity],
    });

    challengeRepository.save({
      ...runningChallenge2,
      author: users[1],
      versionAuthor: users[1],
      series: [runningChallengeSeriesEntity],
    });

    challengeRepository.save({
      ...runningChallenge3,
      author: users[1],
      versionAuthor: users[1],
      series: [runningChallengeSeriesEntity],
    });

    challengeRepository.save({
      ...runningChallenge4,
      author: users[1],
      versionAuthor: users[1],
      series: [runningChallengeSeriesEntity],
    });

    challengeRepository.save({
      ...yoMamaChallenge,
      author: users[2],
      versionAuthor: users[2],
    });
  }
}
