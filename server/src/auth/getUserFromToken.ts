import jwt from "jsonwebtoken";
import { sessionsRepository } from "../modules/sessions/sessions.repository";
import { User } from "../database/entities/user.entity";
import { logger } from "../pino";

interface GetUserFromTokenArgs {
  token: string;
}

export async function getUserFromToken({
  token,
}: GetUserFromTokenArgs): Promise<User | null> {
  if (!token) {
    return null;
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET as string);

    // Token is invalid
    if (typeof decoded !== "object" || !("userId" in decoded)) {
      return null;
    }

    const session = await sessionsRepository.getSession({
      token,
      userId: decoded.userId,
    });

    // Session doesn't exist or has expired
    if (!session || session.expiresAt < new Date()) {
      return null;
    }

    return session.user;
  } catch (err) {
    logger.error(err, "Error getting user from token: ");

    return null;
  }
}
