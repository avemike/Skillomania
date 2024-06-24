import type { DataSource } from "typeorm";

interface ServerContext {
  db: DataSource;
}

declare global {
  namespace Express {
    interface Request extends ServerContext {}
  }
}
