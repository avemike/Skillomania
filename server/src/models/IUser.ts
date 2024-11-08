import { IChallenge } from "./IChallenge";
import { IChallengeSeries } from "./IChallengeSeries";

export type AuthSource = "google";
export interface IUser {
  id: number;
  email: string;
  firstName: string;
  lastName: string;
  authSource: AuthSource;
  challenges: IChallenge[];
  challengeSeries: IChallengeSeries[];
}
