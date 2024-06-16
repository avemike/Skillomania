import { getDatabase } from "./database/db";
import { ServerContext } from "./types/custom";

export async function setupContext(): Promise<ServerContext> {
  const db = await getDatabase();

  return {
    db,
  };
}
