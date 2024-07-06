import { Request, Response } from "express";
import { usersRepository } from "../modules/users/users.repository";
import { OAuth2Client } from "google-auth-library";
import { sessionsService } from "../modules/sessions/sessions.service";

const googleOauthClient = new OAuth2Client(process.env.GOOGLE_OAUTH_CLIENT_ID);

export async function googleAuthHandler(req: Request, res: Response) {
  // @todo: add class validator
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

    if (!user) {
      // @todo: shouldn't happen, add logging
      throw new Error("Something went wrong");
    }

    const session = await sessionsService.createSession({ db: req.db, user });

    res.status(200).cookie("token", session.token).json({ payload });
  } catch (err) {
    res.status(400).json({ err });
  }
}
