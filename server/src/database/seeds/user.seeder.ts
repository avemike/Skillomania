import { DataSource } from "typeorm";
import { User } from "../entities/user.entity";
import {
  userGuitarMaster,
  userReadingChamp,
  userRunningGuru,
  userYourMama,
} from "./seeds";

export const UserSeeder = {
  run: async (dataSource: DataSource) => {
    console.log("UserSeeder is running...");
    const userRepository = dataSource.getRepository(User);

    const [user1, user2, user3, user4] = await userRepository.save([
      userGuitarMaster,
      userRunningGuru,
      userYourMama,
      userReadingChamp,
    ]);

    userGuitarMaster.id = user1.id;
    userRunningGuru.id = user2.id;
    userYourMama.id = user3.id;
    userReadingChamp.id = user4.id;
  },
};
