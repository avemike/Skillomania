import { User } from "../../database/entities/user.entity";
import jwt from "jsonwebtoken";
import { sessionsRepository } from "./sessions.repository";

const ONE_HOUR_IN_MS = 60 * 60 * 1000;

interface CreateSessionArgs {
  user: User;
}

async function createSession({ user }: CreateSessionArgs) {
  const token = jwt.sign(
    { userId: user.id },
    process.env.JWT_SECRET as string,
    { expiresIn: "1h" }
  );

  const session = await sessionsRepository.createSession({
    user,
    token,
    expiresAt: new Date(Date.now() + ONE_HOUR_IN_MS),
  });

  return { session, token };
}

export const sessionsService = {
  createSession,
};
