import { DataSource } from "typeorm";
import { Seeder } from "typeorm-extension";
import { UserSeeder } from "./user.seeder";
import { ChallengeSeeder } from "./challenges.seeder";
import { ChallengeSeriesSeeder } from "./challengeSeries.seeder";
import { CategorySeeder } from "./categories.seeder";

export default class MainSeeder implements Seeder {
  public async run(dataSource: DataSource): Promise<any> {
    console.log("MainSeeder is running...");

    await UserSeeder.run(dataSource);
    await CategorySeeder.run(dataSource);
    await ChallengeSeriesSeeder.run(dataSource);
    await ChallengeSeeder.run(dataSource);

    console.log("MainSeeder has run successfully!");

    dataSource.destroy();
  }
}
