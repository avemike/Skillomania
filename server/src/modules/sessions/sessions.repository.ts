import { Session } from "../../database/entities/session.entity";
import { User } from "../../database/entities/user.entity";
import { ServerContext } from "../../types/custom";

interface CreateSessionArgs extends Pick<ServerContext, "db"> {
  user: User;
  token: string;
  expiresAt: Date;
}

async function createSession({
  db,
  user,
  token,
  expiresAt,
}: CreateSessionArgs) {
  const sessionRepository = db.getRepository(Session);
  await sessionRepository.insert({
    user,
    token,
    expires_at: expiresAt,
  });

  const session = await sessionRepository.findOneOrFail({
    where: { token, expires_at: expiresAt },
  });

  return session;
}

export const sessionsRepository = {
  createSession,
};
