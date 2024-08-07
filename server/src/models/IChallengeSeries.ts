import { ICategory } from "./ICategory";
import { IChallenge } from "./IChallenge";
import { IUser } from "./IUser";

export interface IChallengeSeries {
  id: number;
  title: string;
  description: string;
  effortLevel: 1 | 2 | 3 | 4 | 5;
  requiredExpertise: 0 | 1 | 2 | 3;
  difficultyExplanation: string;
  challenges: IChallenge[];
  category: ICategory;
  author: IUser;
  owners: IUser[];
  version: number;
  versionCreatedAt: Date;
  versionAuthor: IUser;
  createdAt: Date;
  updatedAt: Date;
}
