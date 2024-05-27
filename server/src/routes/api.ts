import { Router } from "express";
import jetValidator from "jet-validator";

import adminMw from "./middleware/adminMw";
import Paths from "../constants/Paths";
import AuthRoutes from "./AuthRoutes";
import UserRoutes from "./UserRoutes";
import moment from "moment";

/**
 * See if the param meets criteria to be a user.
 */
function isUser(arg: unknown): boolean {
  return (
    !!arg &&
    typeof arg === "object" &&
    "id" in arg &&
    typeof arg.id === "number" &&
    "email" in arg &&
    typeof arg.email === "string" &&
    "name" in arg &&
    typeof arg.name === "string" &&
    "created" in arg &&
    moment(arg.created as string | Date).isValid()
  );
}

// **** Variables **** //

const apiRouter = Router(),
  validate = jetValidator();

// **** Setup AuthRouter **** //

const authRouter = Router();

// Login user
authRouter.post(
  Paths.Auth.Login,
  validate("email", "password"),
  AuthRoutes.login
);

// Logout user
authRouter.get(Paths.Auth.Logout, AuthRoutes.logout);

// Add AuthRouter
apiRouter.use(Paths.Auth.Base, authRouter);

// ** Add UserRouter ** //

const userRouter = Router();

// Get all users
userRouter.get(Paths.Users.Get, UserRoutes.getAll);

// Add one user
userRouter.post(Paths.Users.Add, validate(["user", isUser]), UserRoutes.add);

// Update one user
userRouter.put(
  Paths.Users.Update,
  validate(["user", isUser]),
  UserRoutes.update
);

// Delete one user
userRouter.delete(
  Paths.Users.Delete,
  validate(["id", "number", "params"]),
  UserRoutes.delete
);

// Add UserRouter
apiRouter.use(Paths.Users.Base, adminMw, userRouter);

// **** Export default **** //

export default apiRouter;
