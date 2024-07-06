import { Request, Response } from "express";
import { usersRepository } from "./modules/users/users.repository";
import jwt from "jsonwebtoken";
import { OAuth2Client } from "google-auth-library";

const googleOauthClient = new OAuth2Client();

export async function googleAuthHandler(req: Request, res: Response) {
  const { credential, client_id } = req.body;

  try {
    const ticket = await googleOauthClient.verifyIdToken({
      idToken: credential,
      audience: client_id,
    });
    const payload = ticket.getPayload();
    const email = payload?.email;

    if (!email) {
      throw new Error("Email not found in payload");
    }

    if (!payload?.email_verified) {
      throw new Error("Email not verified");
    }

    let user = await usersRepository.getUser({ email, db: req.db });

    if (!user) {
      user = await usersRepository.insertUser({
        email,
        firstName: payload.given_name || "Unknown",
        lastName: payload.family_name || "Unknown",
        authSource: "google",
        db: req.db,
      });
    }

    const token = jwt.sign({ user }, process.env.JWT_SECRET as string);

    res.status(200).cookie("token", token).json({ payload });
  } catch (err) {
    res.status(400).json({ err });
  }
}
