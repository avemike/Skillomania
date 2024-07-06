import { User } from "../../database/entities/user.entity";
import { ServerContext } from "../../types/custom";

interface GetUserArgs extends ServerContext {
  email: string;
}

async function getUser({ db, email }: GetUserArgs) {
  const userRepository = db.getRepository(User);
  const user = await userRepository.findOne({
    where: { email },
  });

  return user;
}

interface InsertUserArgs extends ServerContext {
  email: string;
  firstName: string;
  lastName: string;
  authSource: "google";
}

async function insertUser({
  db,
  email,
  firstName,
  lastName,
  authSource,
}: InsertUserArgs) {
  const userRepository = db.getRepository(User);

  await userRepository.insert({
    email,
    firstName,
    lastName,
    authSource,
  });

  const user = await userRepository.findOne({
    where: { email },
  });

  return user;
}

export const usersRepository = {
  getUser,
  insertUser,
};
