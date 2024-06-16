import "dotenv/config";
import { DataSource } from "typeorm";

export const AppDataSource = new DataSource({
  type: "postgres",
  host: process.env.DB_HOST,
  port: Number(process.env.DB_PORT),
  username: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_DATABASE,
  migrations: [__dirname + "/migrations/*.ts"],
  migrationsTableName: "migration_typeorm",
  entities: [__dirname + "/models/*.model.ts"],
});
