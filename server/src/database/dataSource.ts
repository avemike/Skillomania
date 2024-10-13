import "dotenv/config";

import { DataSource, DataSourceOptions } from "typeorm";
import { SeederOptions } from "typeorm-extension";
import MainSeeder from "./seeds/main-seeder";

const config: DataSourceOptions & SeederOptions = {
  type: "postgres",
  host: process.env.DB_HOST,
  port: Number(process.env.DB_PORT),
  username: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_DATABASE,
  synchronize: true,
  logging: false,
  migrations: [__dirname + "/migrations/*.{js,ts}"],
  migrationsTableName: "migration_typeorm",
  entities: [__dirname + "/entities/*.entity.{js,ts}"],
  maxQueryExecutionTime: 1000,
  seeds: [MainSeeder],
};

export const AppDataSource = new DataSource(config);
