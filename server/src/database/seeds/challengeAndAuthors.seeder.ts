import { Seeder } from "typeorm-extension";
import { DataSource } from "typeorm";
import { Challenge } from "../entities/challenge.entity";
import { User } from "../entities/user.entity";
import { ChallengeSeries } from "../entities/challengeSeries.entity";

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
  description:
    "G major chord is a great chord to start with! Many songs use it!",
};

const playingGuitarChallenge2 = {
  title: "Play a C major chord",
  description:
    "C major chord is one of the most common chords in music! Learn it!",
};

const playingGuitarChallenge3 = {
  title: "Play a D major chord",
  description: "Time to learn the D major chord! It's a great chord to know!",
};

const playingGuitarChallenge4 = {
  title: "Learn the A minor pentatonic scale",
  description:
    "It's a big deal to learn the A minor pentatonic scale! It's a great scale and widely used!",
};

const playingGuitarChallenge5 = {
  title: "Learn how to play a Wonderwall by Oasis",
  description: "Wonderwall is a great song to learn! It's a classic!",
};

const runningChallenge1 = {
  title: "Run 1 mile",
  description: "It's time to run 1 mile! First step to a healthier you!",
};

const runningChallenge2 = {
  title: "Run 1.5 miles",
  description: "Running 1.5 miles is a great way to improve your stamina",
};

const runningChallenge3 = {
  title: "Run 2 miles",
  description: "Whoa! You're running 2 miles! Keep it up!",
};

const runningChallenge4 = {
  title: "Run 3 miles",
  description: "3 miles is a great distance to run! Keep it up!",
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
