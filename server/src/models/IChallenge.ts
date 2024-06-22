import { IChallengeSeries } from "./IChallengeSeries";
import { IUser } from "./IUser";

export interface IChallenge {
  id: number;
  title: string;
  description: string;
  author: IUser;
  series: IChallengeSeries[];
  version: number;
  versionCreatedAt: Date;
  versionAuthor: IUser;
  createdAt: Date;
  updatedAt: Date;
}
