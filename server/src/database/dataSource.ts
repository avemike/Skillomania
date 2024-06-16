import "dotenv/config";
import { DataSource, DataSourceOptions } from "typeorm";
import { SeederOptions } from "typeorm-extension";

const config: DataSourceOptions & SeederOptions = {
  type: "postgres",
  host: process.env.DB_HOST,
  port: Number(process.env.DB_PORT),
  username: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_DATABASE,
  migrations: [__dirname + "/migrations/*.ts"],
  migrationsTableName: "migration_typeorm",
  entities: [__dirname + "/models/*.model.ts"],
  maxQueryExecutionTime: 1000,
  seeds: [__dirname + "/seeds/*.ts"],
  factories: [__dirname + "/factories/*.ts"],
  seedTracking: true,
};

export const AppDataSource = new DataSource(config);
