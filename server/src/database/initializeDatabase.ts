import { DataSource } from "typeorm";
import { AppDataSource } from "./dataSource";

let db: DataSource;

export async function initializeDatabase() {
  if (db) {
    return db;
  }

  try {
    db = await AppDataSource.initialize();

    return db;
  } catch (error) {
    console.error("Error connecting to the database: ", error);

    throw new Error("Error connecting to the database");
  }
}
