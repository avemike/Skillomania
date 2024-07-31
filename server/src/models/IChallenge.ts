import { ICategory } from "./ICategory";
import { IChallengeSeries } from "./IChallengeSeries";
import { IUser } from "./IUser";

export interface IChallenge {
  id: number;
  title: string;
  description: string;
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
