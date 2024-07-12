import { User } from "../../database/entities/user.entity";
import { db } from "../../database/initializeDatabase";

interface GetUserArgs {
  email: string;
}

async function getUser({ email }: GetUserArgs) {
  const userRepository = db.getRepository(User);
  const user = await userRepository.findOne({
    where: { email },
  });

  return user;
}

interface InsertUserArgs {
  email: string;
  firstName: string;
  lastName: string;
  authSource: "google";
}

async function insertUser({
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
