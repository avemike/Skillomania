import { setSeederFactory } from "typeorm-extension";
import { User } from "../entities/user.entity";

export default setSeederFactory(User, async (faker) => {
  const user = new User();
  user.email = faker.internet.email();

  return user;
});
