import { AppDataSource } from "./dataSource";

export async function initializeDatabase() {
  try {
    const db = await AppDataSource.initialize();

    return db;
  } catch (error) {
    console.error("Error connecting to the database: ", error);

    throw new Error("Error connecting to the database");
  }
}
