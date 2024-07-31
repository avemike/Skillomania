import { ICategory } from "./ICategory";
import { IChallenge } from "./IChallenge";
import { IUser } from "./IUser";

export interface IChallengeSeries {
  id: number;
  title: string;
  description: string;
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
