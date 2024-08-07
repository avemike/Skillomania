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
      expiresAt,
    })
    .catch((err) => {
      console.error(err);

      throw new Error("Failed to create session");
    });

  const session = await sessionRepository.findOneOrFail({
    where: { token, expiresAt },
  });

  return session;
}

interface GetSessionArgs {
  token: string;
  userId: number;
}

async function getSession({ token, userId }: GetSessionArgs) {
  const sessionRepository = db.getRepository(Session);
  const sessions = await sessionRepository.find({
    where: { token, user: { id: userId } },
    order: { created_at: "DESC" },
    skip: 0,
    take: 1,
    relations: ["user"],
  });

  return sessions[0];
}

export const sessionsRepository = {
  createSession,
  getSession,
};
