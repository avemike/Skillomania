import { Request, Response } from "express";
import { initializeDatabase } from "./database/initializeDatabase";
import { ServerContext } from "./types/custom";
import { getUserFromToken } from "./auth/getUserFromToken";

export async function setupContext(
  req: Request,
  _res: Response
): Promise<ServerContext> {
  const db = await initializeDatabase();
  const user = await getUserFromToken({
    token: req.cookies.token,
    db,
  });

  return {
    db,
    user,
  };
}
