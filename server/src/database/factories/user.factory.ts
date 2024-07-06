import { setSeederFactory } from "typeorm-extension";
import { User } from "../entities/user.entity";

export default setSeederFactory(User, async (faker) => {
  const user = new User();
  user.email = faker.internet.email();
  user.firstName = faker.person.firstName();
  user.lastName = faker.person.lastName();
  user.authSource = "google";

  return user;
});
