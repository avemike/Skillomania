import { IChallenge } from "./IChallenge";
import { IUser } from "./IUser";

export interface IChallengeSeries {
  id: number;
  title: string;
  description: string;
  challenges: IChallenge[];
  author: IUser;
  version: number;
  versionCreatedAt: Date;
  versionAuthor: IUser;
  createdAt: Date;
  updatedAt: Date;
}
