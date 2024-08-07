import { IChallenge } from "../../models/IChallenge";
import { IChallengeSeries } from "../../models/IChallengeSeries";
import { IUser } from "../../models/IUser";
import { Category } from "../entities/category.entity";
import { User } from "../entities/user.entity";

//#region Users

/** id is injected by seeder */
type SeedUser = Partial<IUser>;

export const userGuitarMaster: SeedUser = {
  email: "guitar_master123@gmail.com",
  firstName: "John",
  lastName: "Doe",
  authSource: "google",
};

export const userRunningGuru: SeedUser = {
  email: "running_guru_workout@example.com",
  firstName: "Jane",
  lastName: "Doe",
  authSource: "google",
};

export const userYourMama: SeedUser = {
  email: "yourMamaHehe@samplemail.com",
  firstName: "Your",
  lastName: "Mama",
  authSource: "google",
};

export const userReadingChamp: SeedUser = {
  email: "Readingchamp@readingiscool.com",
  firstName: "Reading",
  lastName: "Champ",
  authSource: "google",
};

//#endregion

//#region Categories

type SeedCategory = Partial<Category>;

export const musicCategory: SeedCategory = {
  name: "Music",
};

export const instrumentsCategory: SeedCategory = {
  name: "Instruments",
};

export const sportsCategory: SeedCategory = {
  name: "Sports",
};

export const readingCategory: SeedCategory = {
  name: "Reading",
};

export const cookingCategory: SeedCategory = {
  name: "Cooking",
};

export const othersCategory: SeedCategory = {
  name: "Others",
};

//#endregion

//#region Challenges and Series

function createChallengeSeriesSeed({
  user,
  category,
  title,
  description,
  effortLevel = 3,
  requiredExpertise = 0,
}: {
  user: Partial<IUser>;
  category: Partial<Category>;
  title: string;
  description: string;
  effortLevel?: IChallengeSeries["effortLevel"];
  requiredExpertise?: IChallengeSeries["requiredExpertise"];
}): Omit<IChallengeSeries, "id"> {
  return {
    title,
    description,
    category: category as Category,
    author: user as User,
    owners: [user as User],
    versionAuthor: user as User,
    effortLevel,
    requiredExpertise,
    challenges: [],
    difficultyExplanation: "",
    version: 1,
    versionCreatedAt: new Date(),
    createdAt: new Date(),
    updatedAt: new Date(),
  };
}

function createChallengeSeed({
  user,
  series,
  category,
  title,
  description,
}: {
  user: Partial<IUser>;
  category: Partial<Category>;
  title: string;
  description: string;
  series?: Omit<IChallengeSeries, "id"> | null;
}): Omit<IChallenge, "id"> {
  return {
    title,
    description,
    author: user as IUser,
    owners: [user as IUser],
    versionAuthor: user as IUser,
    series: [series as unknown as IChallengeSeries], //
    category: category as Category,
    effortLevel: 3,
    requiredExpertise: 1,
    difficultyExplanation: "",
    version: 1,
    versionCreatedAt: new Date(),
    createdAt: new Date(),
    updatedAt: new Date(),
  };
}

// type SeedChallengeSeries = Partial<ChallengeSeries>;

export const playingGuitarChallengeSeries = createChallengeSeriesSeed({
  title: "Playing Guitar",
  description: "This challenge series is all about playing guitar",
  category: instrumentsCategory,
  user: userGuitarMaster,
});

export const runningChallengeSeries = createChallengeSeriesSeed({
  title: "Running",
  description: "This challenge series is all about running",
  category: sportsCategory,
  user: userRunningGuru,
});

export const readingChallengeSeries = createChallengeSeriesSeed({
  title: "Reading",
  description: "This challenge series is all about reading",
  category: readingCategory,
  user: userReadingChamp,
});

export const cookingChallengeSeries = createChallengeSeriesSeed({
  title: "Cooking",
  description: "This challenge series is all about cooking",
  category: cookingCategory,
  user: userReadingChamp,
});

export const playingUkuleleChallengeSeries = createChallengeSeriesSeed({
  title: "Playing Ukulele",
  description: "This challenge series is all about playing ukulele",
  category: instrumentsCategory,
  user: userGuitarMaster,
});

export const playingUkuleleChallenge1 = createChallengeSeed({
  title: "Easy chords",
  description:
    "Search up online how to tune the ukulele and practice chords (you can also search for them online, video or image)",
  user: userGuitarMaster,
  series: playingUkuleleChallengeSeries,
  category: instrumentsCategory,
});

export const playingUkuleleChallenge2 = createChallengeSeed({
  title: "First song",
  description: "Try to play an easy song like - I'm yours - ",
  user: userGuitarMaster,
  series: playingUkuleleChallengeSeries,
  category: instrumentsCategory,
});

export const playingUkuleleChallenge3 = createChallengeSeed({
  title: "Your song",
  description: "Try to play a song that you like!",
  user: userGuitarMaster,
  series: playingUkuleleChallengeSeries,
  category: instrumentsCategory,
});

export const playingUkuleleChallenge4 = createChallengeSeed({
  title: "Remembering",
  description: "Try to learn how to play a song and play it from memory",
  user: userGuitarMaster,
  series: playingUkuleleChallengeSeries,
  category: instrumentsCategory,
});

export const playingUkuleleChallenge5 = createChallengeSeed({
  title: "Tricks",
  description: "Try to learn some tricks like slapping or tabs",
  user: userGuitarMaster,
  series: playingUkuleleChallengeSeries,
  category: instrumentsCategory,
});

export const cookingChallenge1 = createChallengeSeed({
  title: "Learning what to cook",
  description:
    "Find a cooking book or search internet for tasty ideas, watch them, observe, save them for later",
  user: userReadingChamp,
  series: cookingChallengeSeries,
  category: cookingCategory,
});

export const cookingChallenge2 = createChallengeSeed({
  title: "Let's start the cooking",
  description:
    "Using saved materials from before, try cooking something that seems easy, if it goes the wrong way, don't give up!",
  user: userReadingChamp,
  series: cookingChallengeSeries,
  category: cookingCategory,
});

export const cookingChallenge3 = createChallengeSeed({
  title: "Try something more complex",
  description: "Try something from a different country",
  user: userReadingChamp,
  series: cookingChallengeSeries,
  category: cookingCategory,
});

export const cookingChallenge4 = createChallengeSeed({
  title: "Lovely recipe",
  description: "Try to cook your favorite dish!",
  user: userReadingChamp,
  series: cookingChallengeSeries,
  category: cookingCategory,
});

export const cookingChallenge5 = createChallengeSeed({
  title: "Full table",
  description: "Try to cook your friend or family member's favorite dish!",
  user: userReadingChamp,
  series: cookingChallengeSeries,
  category: cookingCategory,
});

export const readingChallenge1 = createChallengeSeed({
  title: "Read a short story",
  description:
    "Reading books might be overwhelming, but a short story, might be just right!",
  user: userReadingChamp,
  series: readingChallengeSeries,
  category: readingCategory,
});

export const readingChallenge2 = createChallengeSeed({
  title: "Read an easy book",
  description:
    "Whoa! We're just getting started, read maybe a chapter a day, I would suggest romance or fantasy?",
  user: userReadingChamp,
  series: readingChallengeSeries,
  category: readingCategory,
});

export const readingChallenge3 = createChallengeSeed({
  title: "Read a book that makes you think",
  description:
    "I would suggest horror, thriller or maybe even something based on true events?",
  user: userReadingChamp,
  series: readingChallengeSeries,
  category: readingCategory,
});

export const readingChallenge4 = createChallengeSeed({
  title: "Read a scientific book!",
  description:
    "Not talking about a chemistry book, maybe you like fishes or urban legends, let it be niche",
  user: userReadingChamp,
  series: readingChallengeSeries,
  category: readingCategory,
});

export const readingChallenge5 = createChallengeSeed({
  title: "Read something that you never thought you would",
  description: "Get outside your comfort zone",
  user: userReadingChamp,
  series: readingChallengeSeries,
  category: readingCategory,
});

export const playingGuitarChallenge1 = createChallengeSeed({
  title: "Play a G major chord",
  description:
    "G major chord is a great chord to start with! Many songs use it!",
  user: userGuitarMaster,
  series: playingGuitarChallengeSeries,
  category: instrumentsCategory,
});

export const playingGuitarChallenge2 = createChallengeSeed({
  title: "Play a C major chord",
  description:
    "C major chord is one of the most common chords in music! Learn it!",
  user: userGuitarMaster,
  series: playingGuitarChallengeSeries,
  category: instrumentsCategory,
});

export const playingGuitarChallenge3 = createChallengeSeed({
  title: "Play a D major chord",
  description: "Time to learn the D major chord! It's a great chord to know!",
  user: userGuitarMaster,
  series: playingGuitarChallengeSeries,
  category: instrumentsCategory,
});

export const playingGuitarChallenge4 = createChallengeSeed({
  title: "Learn the A minor pentatonic scale",
  description:
    "It's a big deal to learn the A minor pentatonic scale! It's a great scale and widely used!",
  user: userGuitarMaster,
  series: playingGuitarChallengeSeries,
  category: instrumentsCategory,
});

export const playingGuitarChallenge5 = createChallengeSeed({
  title: "Learn how to play Wonderwall by Oasis",
  description: "Wonderwall is a great song to learn! It's a classic!",
  user: userGuitarMaster,
  series: playingGuitarChallengeSeries,
  category: instrumentsCategory,
});

export const runningChallenge1 = createChallengeSeed({
  title: "Run 1 mile",
  description: "It's time to run 1 mile! First step to a healthier you!",
  user: userRunningGuru,
  series: runningChallengeSeries,
  category: sportsCategory,
});

export const runningChallenge2 = createChallengeSeed({
  title: "Run 1.5 miles",
  description: "Running 1.5 miles is a great way to improve your stamina",
  user: userRunningGuru,
  series: runningChallengeSeries,
  category: sportsCategory,
});

export const runningChallenge3 = createChallengeSeed({
  title: "Run 2 miles",
  description: "Whoa! You're running 2 miles! Keep it up!",
  user: userRunningGuru,
  series: runningChallengeSeries,
  category: sportsCategory,
});

export const runningChallenge4 = createChallengeSeed({
  title: "Run 3 miles",
  description: "3 miles is a great distance to run! Keep it up!",
  user: userRunningGuru,
  series: runningChallengeSeries,
  category: sportsCategory,
});

export const yoMamaChallenge = createChallengeSeed({
  title: "Yo Mama",
  description: "Yo Mama",
  user: userYourMama,
  category: othersCategory,
  series: null,
});

//#endregion
