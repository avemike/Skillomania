import { initializeDatabase } from "./database/initializeDatabase";
import { ServerContext } from "./types/custom";

export async function setupContext(): Promise<ServerContext> {
  const db = await initializeDatabase();

  return {
    db,
  };
}
