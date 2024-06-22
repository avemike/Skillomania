export interface Challenge {
  id: number;
  title: string;
  description: string;
  author: {
    id: number;
    email: string;
  };
}
