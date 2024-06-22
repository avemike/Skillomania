import { Challenge } from "./challenge";

export interface ChallengeSeries {
  id: number;
  title: string;
  description: string;
  author: {
    id: number;
    email: string;
  };
  challenges: Challenge[];
}
