import { DataSource } from "typeorm";
import { Challenge } from "./models/Challenge.model";
import { ChallengeSeries } from "./models/ChallengeSeries.model";
import { User } from "./models/User.model";

export async function initializeDatabase() {
  const AppDataSource = new DataSource({
    type: "postgres",
    host: process.env.DB_HOST,
    port: Number(process.env.DB_PORT),
    username: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_DATABASE,
    entities: [Challenge, ChallengeSeries, User],
  });

  try {
    const db = await AppDataSource.initialize();

    return db;
  } catch (error) {
    console.error("Error connecting to the database: ", error);

    throw new Error("Error connecting to the database");
  }
}
