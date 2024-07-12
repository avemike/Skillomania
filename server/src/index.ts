import "reflect-metadata";
import "dotenv/config";

import { validateEnvs } from "./validateEnvs";
import { app } from "./app";

validateEnvs();

const port = process.env.SERVER_PORT;

app.listen(port, () => {
  console.log(`[server]: Server is running at http://localhost:${port}`);
});
