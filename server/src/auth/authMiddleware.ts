import { Request, Response, NextFunction } from "express";
import jwt from "jsonwebtoken";
import { sessionsRepository } from "../modules/sessions/sessions.repository";

export async function authMiddleware(
  req: Request,
  res: Response,
  next: NextFunction
) {
  const token = req.cookies.token;

  if (!token) {
    return res.status(401).json({ message: "Unauthorized" });
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET as string);

    if (typeof decoded === "string") {
      req.user = null;

      return next();
    }

    const session = await sessionsRepository.getSession({
      token,
      db: req.db,
      userId: decoded.userId,
    });

    if (!session || session.expires_at < new Date()) {
      return res.status(401).json({ message: "Session expired" });
    }

    req.user = session.user;

    next();
  } catch (err) {
    res.status(401).json({ message: "Unauthorized" });
  }
}
