import { Category } from "../entities/category.entity";
import { Challenge } from "../entities/challenge.entity";
import { ChallengeSeries } from "../entities/challengeSeries.entity";
import { User } from "../entities/user.entity";

//#region Challenges and Series
type SeedChallengeSeries = Partial<ChallengeSeries>;
type SeedChallenge = Partial<Challenge>;

export const playingGuitarChallengeSeries: SeedChallengeSeries = {
  title: "Playing Guitar",
  description: "This challenge series is all about playing guitar",
};

export const runningChallengeSeries: SeedChallengeSeries = {
  title: "Running",
  description: "This challenge series is all about running",
};

export const readingChallengeSeries: SeedChallengeSeries = {
  title: "Reading",
  description: "This challenge series is all about reading",
};

export const cookingChallengeSeries: SeedChallengeSeries = {
  title: "Cooking",
  description: "This challenge series is all about cooking",
};

export const playingUkuleleChallengeSeries: SeedChallengeSeries = {
  title: "Playing Ukulele",
  description: "This challenge series is all about playing ukulele",
};

export const playingUkuleleChallenge1: SeedChallenge = {
  title: "Easy chords",
  description:
    "Search up online how to tune the ukulele and practice chords (you can also search for them online, video or image)",
};

export const playingUkuleleChallenge2: SeedChallenge = {
  title: "First song",
  description: "Try to play an easy song like - I'm yours - ",
};

export const playingUkuleleChallenge3: SeedChallenge = {
  title: "Your song",
  description: "Try to play a song that you like!",
};

export const playingUkuleleChallenge4: SeedChallenge = {
  title: "Remembering",
  description: "Try to learn how to play a song and play it from memory",
};

export const playingUkuleleChallenge5: SeedChallenge = {
  title: "Tricks",
  description: "Try to learn some tricks like slaping or tabs",
};

export const cookingChallenge1: SeedChallenge = {
  title: "Learning what to cook",
  description:
    "Find a cooking book or search internet for tasty ideas, watch them, observe, save them for later",
};

export const cookingChallenge2: SeedChallenge = {
  title: "Let's start the cooking",
  description:
    "Using saved materials from before, try cooking something that seems easy, if it goes the wrong way, don't give up!",
};

export const cookingChallenge3: SeedChallenge = {
  title: "Try someting more complex",
  description: "Try someting from different country",
};

export const cookingChallenge4: SeedChallenge = {
  title: "Lovely recipe",
  description: "Try to cook your favorite dish!",
};

export const cookingChallenge5: SeedChallenge = {
  title: "Full table",
  description: "Try to cook your friend or family member favorite dish!",
};

export const readingChallenge1: SeedChallenge = {
  title: "Read a short story",
  description:
    "Reading books might be overwhelming, but a short story, might be just right!",
};

export const readingChallenge2: SeedChallenge = {
  title: "Read an easy book",
  description:
    "Whoa! We're just getting started, read maybe a chapter a day, i would suggest romance or fantasy?",
};

export const readingChallenge3: SeedChallenge = {
  title: "Read a book that makes you think",
  description:
    "i would suggest horror, thriler or maybe even something based on true events?",
};

export const readingChallenge4: SeedChallenge = {
  title: "Read an scientific book!",
  description:
    "Not talking about chemistry book, maybe you like fishes or urban legends, let it be niche",
};

export const readingChallenge5: SeedChallenge = {
  title: "Read someting that you never thought you would",
  description: "Get outside your comfortzone",
};

export const playingGuitarChallenge1: SeedChallenge = {
  title: "Play a G major chord",
  description:
    "G major chord is a great chord to start with! Many songs use it!",
};

export const playingGuitarChallenge2: SeedChallenge = {
  title: "Play a C major chord",
  description:
    "C major chord is one of the most common chords in music! Learn it!",
};

export const playingGuitarChallenge3: SeedChallenge = {
  title: "Play a D major chord",
  description: "Time to learn the D major chord! It's a great chord to know!",
};

export const playingGuitarChallenge4: SeedChallenge = {
  title: "Learn the A minor pentatonic scale",
  description:
    "It's a big deal to learn the A minor pentatonic scale! It's a great scale and widely used!",
};

export const playingGuitarChallenge5: SeedChallenge = {
  title: "Learn how to play a Wonderwall by Oasis",
  description: "Wonderwall is a great song to learn! It's a classic!",
};

export const runningChallenge1: SeedChallenge = {
  title: "Run 1 mile",
  description: "It's time to run 1 mile! First step to a healthier you!",
};

export const runningChallenge2: SeedChallenge = {
  title: "Run 1.5 miles",
  description: "Running 1.5 miles is a great way to improve your stamina",
};

export const runningChallenge3: SeedChallenge = {
  title: "Run 2 miles",
  description: "Whoa! You're running 2 miles! Keep it up!",
};

export const runningChallenge4: SeedChallenge = {
  title: "Run 3 miles",
  description: "3 miles is a great distance to run! Keep it up!",
};

export const yoMamaChallenge: SeedChallenge = {
  title: "Yo Mama",
  description: "Yo Mama",
};
//#endregion

//#region Users

/** id is injected by seeder */
type SeedUser = Partial<User>;

export const userGuitarMaster: SeedUser = {
  email: "guitar_master123@gmail.com",
};

export const userRunningGuru: SeedUser = {
  email: "running_guru_workout@example.com",
};

export const userYourMama: SeedUser = {
  email: "yourMamaHehe@samplemail.com",
};

export const userReadingChamp: SeedUser = {
  email: "Readingchamp@readingiscool.com",
};

//#endregion

//#region

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
