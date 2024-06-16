import { runSeeders } from "typeorm-extension";
import { AppDataSource } from "./dataSource";

(async () => {
  await AppDataSource.initialize();
  await runSeeders(AppDataSource);
})();
