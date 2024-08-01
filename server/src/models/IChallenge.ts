import { ICategory } from "./ICategory";
import { IChallengeSeries } from "./IChallengeSeries";
import { IUser } from "./IUser";

export interface IChallenge {
  id: number;
  title: string;
  description: string;
  effortLevel: 1 | 2 | 3 | 4 | 5;
  requiredExpertise: 0 | 1 | 2 | 3;
  difficultyExplanation: string;
  author: IUser;
  owners: IUser[];
  series: IChallengeSeries[];
  category: ICategory;
  version: number;
  versionCreatedAt: Date;
  versionAuthor: IUser;
  createdAt: Date;
  updatedAt: Date;
}
