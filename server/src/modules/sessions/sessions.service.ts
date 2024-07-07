import { User } from "../../database/entities/user.entity";
import { ServerContext } from "../../types/custom";
import jwt from "jsonwebtoken";
import { sessionsRepository } from "./sessions.repository";

const ONE_HOUR_IN_MS = 60 * 60 * 1000;

interface CreateSessionArgs extends Pick<ServerContext, "db"> {
  user: User;
}

async function createSession({ db, user }: CreateSessionArgs) {
  const token = jwt.sign(
    { userId: user.id },
    process.env.JWT_SECRET as string,
    { expiresIn: "1h" }
  );

  const session = await sessionsRepository.createSession({
    db,
    user,
    token,
    expiresAt: new Date(Date.now() + ONE_HOUR_IN_MS),
  });

  return session;
}

export const sessionsService = {
  createSession,
};
