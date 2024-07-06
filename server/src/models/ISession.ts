export interface ISession {
  id: number;
  userId: number;
  token: string;
  expiresAt: Date;
}
