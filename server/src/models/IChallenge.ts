import { ICategory } from "./ICategory";
import { IChallengeSeries } from "./IChallengeSeries";
import { IUser } from "./IUser";

export interface IChallenge {
  id: number;
  title: string;
  effortLevel: 1 | 2 | 3 | 4 | 5;
  requiredExpertise: 0 | 1 | 2 | 3;
  estimatedTime?: string | null;
  author: IUser;
  owners: IUser[];
  series: IChallengeSeries[];
  category: ICategory;
  version: number;
  versionCreatedAt: Date;
  versionAuthor: IUser;
  createdAt: Date;
  updatedAt: Date;
  deletedAt?: Date | null;
  description?: string | null;
  difficultyExplanation?: string | null;
}
