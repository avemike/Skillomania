import { Request, Response } from "express";
import { initializeDatabase } from "./database/initializeDatabase";
import { ServerContext } from "./types/custom";
import { getUserFromToken } from "./auth/getUserFromToken";

export async function setupContext(
  req: Request,
  _res: Response
): Promise<ServerContext> {
  const db = await initializeDatabase();

  const bearerToken = req.headers["authorization"] ?? "";
  const token = bearerToken.replace("Bearer ", "");

  const user = await getUserFromToken({ token });

  return {
    db,
    user,
  };
}
