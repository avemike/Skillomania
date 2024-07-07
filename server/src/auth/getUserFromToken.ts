import jwt from "jsonwebtoken";
import { sessionsRepository } from "../modules/sessions/sessions.repository";
import { User } from "../database/entities/user.entity";
import { ServerContext } from "../types/custom";

interface GetUserFromTokenArgs {
  token: string;
  db: ServerContext["db"];
}

export async function getUserFromToken({
  token,
  db,
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
      db,
      userId: decoded.userId,
    });

    // Session doesn't exist or has expired
    if (!session || session.expires_at < new Date()) {
      return null;
    }

    return session.user;
  } catch (err) {
    return null;
  }
}
