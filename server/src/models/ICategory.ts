import { IChallenge } from "./IChallenge";
import { IChallengeSeries } from "./IChallengeSeries";

export interface ICategory {
  id: number;
  name: string;
  parentCategory: ICategory | null;
  challenges: IChallenge[];
  challengeSeries: IChallengeSeries[];
  childrenCategories: ICategory[];
  createdAt: Date;
  updatedAt: Date;
}
