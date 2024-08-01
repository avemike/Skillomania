import "dotenv/config";

import readlineSync from "readline-sync";
import { initializeDatabase } from "./initializeDatabase";

(async () => {
  const areYouSure = readlineSync.question(
    "Are you sure you want to purge the database? (yes/no) "
  );
  if (areYouSure.toLowerCase() !== "yes") {
    console.log("Aborted.");
    process.exit(0);
  }

  const whatsTheSquareRootOfNine = readlineSync.question(
    "What's the square root of nine? "
  );

  if (whatsTheSquareRootOfNine !== "3") {
    console.log("Incorrect.");
    process.exit(0);
  }

  console.log("Purging the database...");
  const connection = await initializeDatabase();

  await connection.query("TRUNCATE TABLE rel_user_challenge CASCADE");
  await connection.query("TRUNCATE TABLE rel_user_challenge_series CASCADE");
  await connection.query(
    "TRUNCATE TABLE rel_challenge_challenge_series CASCADE"
  );
  await connection.query("TRUNCATE TABLE app_user CASCADE");
  await connection.query("TRUNCATE TABLE challenge CASCADE");
  await connection.query("TRUNCATE TABLE challenge_series CASCADE");
  await connection.query("TRUNCATE TABLE category CASCADE");
  await connection.query("TRUNCATE TABLE session CASCADE");
  await connection.query("TRUNCATE TABLE seeds CASCADE");

  console.log("Database purged.");
})();
