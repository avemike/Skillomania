import { setSeederFactory } from "typeorm-extension";
import { User } from "../models/user.model";

export default setSeederFactory(User, async (faker) => {
  const user = new User();
  user.email = faker.internet.email();

  return user;
});
