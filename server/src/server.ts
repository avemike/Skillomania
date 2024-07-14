import { app } from "./app";
import { validateEnvs } from "./validateEnvs";

validateEnvs();

const port = process.env.SERVER_PORT;

app.listen(port, () => {
  console.log(`[server]: Server is running at http://localhost:${port}`);
});
