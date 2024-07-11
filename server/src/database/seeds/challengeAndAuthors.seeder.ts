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

const readingChallengeSeries = {
  title: "Reading",
  description: "This challenge series is all about reading",
};

const cookingChallengeSeries = {
  title: "Cooking",
  description: "This challenge series is all about cooking",
};

const playingUkuleleChallengeSeries = {
  title: "Playing Ukulele",
  description: "This challenge series is all about playing ukulele",
};

const playingUkuleleChallenge1 = {
  title: "Easy chords",
  description:
    "Search up online how to tune the ukulele and practice chords (you can also search for them online, video or image)",
};
const playingUkuleleChallenge2 = {
  title: "First song",
  description: "Try to play an easy song like - I'm yours - ",
};
const playingUkuleleChallenge3 = {
  title: "Your song",
  description: "Try to play a song that you like!",
};
const playingUkuleleChallenge4 = {
  title: "Remembering",
  description: "Try to learn how to play a song and play it from memory",
};
const playingUkuleleChallenge5 = {
  title: "Tricks",
  description: "Try to learn some tricks like slaping or tabs",
};

const cookingChallenge1 = {
  title: "Learning what to cook",
  description:
    "Find a cooking book or search internet for tasty ideas, watch them, observe, save them for later",
};

const cookingChallenge2 = {
  title: "Let's start the cooking",
  description:
    "Using saved materials from before, try cooking something that seems easy, if it goes the wrong way, don't give up!",
};

const cookingChallenge3 = {
  title: "Try someting more complex",
  description: "Try someting from different country",
};

const cookingChallenge4 = {
  title: "Lovely recipe",
  description: "Try to cook your favorite dish!",
};

const cookingChallenge5 = {
  title: "Full table",
  description: "Try to cook your friend or family member favorite dish!",
};

const readingChallenge1 = {
  title: "Read a short story",
  description:
    "Reading books might be overwhelming, but a short story, might be just right!",
};

const readingChallenge2 = {
  title: "Read an easy book",
  description:
    "Whoa! We're just getting started, read maybe a chapter a day, i would suggest romance or fantasy?",
};

const readingChallenge3 = {
  title: "Read a book that makes you think",
  description:
    "i would suggest horror, thriler or maybe even something based on true events?",
};

const readingChallenge4 = {
  title: "Read an scientific book!",
  description:
    "Not talking about chemistry book, maybe you like fishes or urban legends, let it be niche",
};

const readingChallenge5 = {
  title: "Read someting that you never thought you would",
  description: "Get outside your comfortzone",
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
  public async run(dataSource: DataSource): Promise<any> {
    console.log("yo mama");
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
      {
        email: "Readingchamp@readingiscool.com",
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

    const readingChallengeSeriesEntity = await challengeSeriesRepository.save({
      ...readingChallengeSeries,
      author: users[1],
      versionAuthor: users[1],
    });

    const cookingChallengeSeriesEntity = await challengeSeriesRepository.save({
      ...cookingChallengeSeries,
      author: users[2],
      versionAuthor: users[2],
    });

    const playingUkuleleChallengeSeriesEntity =
      await challengeSeriesRepository.save({
        ...playingUkuleleChallengeSeries,
        author: users[1],
        versionAuthor: users[1],
      });

    challengeRepository.save({
      ...playingUkuleleChallenge1,
      author: users[1],
      versionAuthor: users[1],
      series: [playingUkuleleChallengeSeriesEntity],
    });

    challengeRepository.save({
      ...playingUkuleleChallenge2,
      author: users[1],
      versionAuthor: users[1],
      series: [playingUkuleleChallengeSeriesEntity],
    });
    challengeRepository.save({
      ...playingUkuleleChallenge3,
      author: users[1],
      versionAuthor: users[1],
      series: [playingUkuleleChallengeSeriesEntity],
    });
    challengeRepository.save({
      ...playingUkuleleChallenge4,
      author: users[1],
      versionAuthor: users[1],
      series: [playingUkuleleChallengeSeriesEntity],
    });
    challengeRepository.save({
      ...playingUkuleleChallenge5,
      author: users[1],
      versionAuthor: users[1],
      series: [playingUkuleleChallengeSeriesEntity],
    });

    challengeRepository.save({
      ...cookingChallenge1,
      author: users[2],
      versionAuthor: users[2],
      series: [cookingChallengeSeriesEntity],
    });

    challengeRepository.save({
      ...cookingChallenge2,
      author: users[2],
      versionAuthor: users[2],
      series: [cookingChallengeSeriesEntity],
    });

    challengeRepository.save({
      ...cookingChallenge3,
      author: users[2],
      versionAuthor: users[2],
      series: [cookingChallengeSeriesEntity],
    });

    challengeRepository.save({
      ...cookingChallenge4,
      author: users[2],
      versionAuthor: users[2],
      series: [cookingChallengeSeriesEntity],
    });

    challengeRepository.save({
      ...cookingChallenge5,
      author: users[2],
      versionAuthor: users[2],
      series: [cookingChallengeSeriesEntity],
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
      ...readingChallenge1,
      author: users[1],
      versionAuthor: users[1],
      series: [readingChallengeSeriesEntity],
    });

    challengeRepository.save({
      ...readingChallenge2,
      author: users[1],
      versionAuthor: users[1],
      series: [readingChallengeSeriesEntity],
    });
    challengeRepository.save({
      ...readingChallenge3,
      author: users[1],
      versionAuthor: users[1],
      series: [readingChallengeSeriesEntity],
    });
    challengeRepository.save({
      ...readingChallenge4,
      author: users[1],
      versionAuthor: users[1],
      series: [readingChallengeSeriesEntity],
    });
    challengeRepository.save({
      ...readingChallenge5,
      author: users[1],
      versionAuthor: users[1],
      series: [readingChallengeSeriesEntity],
    });

    challengeRepository.save({
      ...yoMamaChallenge,
      author: users[2],
      versionAuthor: users[2],
    });
  }
}
