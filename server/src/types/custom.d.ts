import type { DataSource } from "typeorm";
import { User } from "../database/entities/user.entity";

interface ServerContext {
  db: DataSource;
  user: User | null;
}

declare global {
  namespace Express {
    interface Request extends ServerContext {}
  }
}
