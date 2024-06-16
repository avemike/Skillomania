import { Seeder, SeederFactoryManager } from "typeorm-extension";
import { DataSource } from "typeorm";
import { User } from "../entities/user.entity";

export default class UserSeeder implements Seeder {
  track = true;

  public async run(
    _dataSource: DataSource,
    factoryManager: SeederFactoryManager
  ): Promise<any> {
    console.log("UserSeeder is running...");

    const userFactory = await factoryManager.get(User);
    await userFactory.saveMany(100);

    console.log("UserSeeder has run successfully!");
  }
}
