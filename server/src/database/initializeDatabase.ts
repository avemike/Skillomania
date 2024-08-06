import { DataSource } from "typeorm";
import { AppDataSource } from "./dataSource";

export let db: DataSource;

export async function initializeDatabase() {
  if (db) {
    return db;
  }

  try {
    if (AppDataSource.isInitialized) {
      db = AppDataSource;
    } else {
      db = await AppDataSource.initialize();
    }

    return db;
  } catch (error) {
    console.error("Error connecting to the database: ", error);

    throw new Error("Error connecting to the database");
  }
}
