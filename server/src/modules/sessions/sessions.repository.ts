import { Session } from "../../database/entities/session.entity";
import { User } from "../../database/entities/user.entity";
import { db } from "../../database/initializeDatabase";

interface CreateSessionArgs {
  user: User;
  token: string;
  expiresAt: Date;
}

async function createSession({ user, token, expiresAt }: CreateSessionArgs) {
  const sessionRepository = db.getRepository(Session);
  await sessionRepository
    .insert({
      user,
      token,
      expires_at: expiresAt,
    })
    .catch((err) => {
      console.error(err);

      throw new Error("Failed to create session");
    });

  const session = await sessionRepository.findOneOrFail({
    where: { token, expires_at: expiresAt },
  });

  return session;
}

interface GetSessionArgs {
  token: string;
  userId: number;
}

async function getSession({ token, userId }: GetSessionArgs) {
  const sessionRepository = db.getRepository(Session);
  const session = await sessionRepository.findOne({
    where: { token, user: { id: userId } },
  });

  return session;
}

export const sessionsRepository = {
  createSession,
  getSession,
};
