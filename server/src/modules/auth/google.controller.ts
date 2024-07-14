import { OAuth2Client } from "google-auth-library";
import { Body, Post, Route, Controller } from "tsoa";
import { sessionsService } from "../sessions/sessions.service";
import { usersRepository } from "../users/users.repository";

const googleOauthClient = new OAuth2Client(process.env.GOOGLE_OAUTH_CLIENT_ID);

interface IGoogleAuthRequestBody {
  credential: string;
  client_id: string;
}

@Route("google-auth")
export class GoogleAuthController extends Controller {
  @Post()
  public async googleAuth(@Body() body: IGoogleAuthRequestBody) {
    const ticket = await googleOauthClient.verifyIdToken({
      idToken: body.credential,
      audience: body.client_id,
    });

    const payload = ticket.getPayload();
    const email = payload?.email;

    if (!email) {
      throw new Error("Email not found in payload");
    }

    if (!payload?.email_verified) {
      throw new Error("Email not verified");
    }

    let user = await usersRepository.getUser({ email });

    if (!user) {
      user = await usersRepository.insertUser({
        email,
        firstName: payload.given_name || "Unknown",
        lastName: payload.family_name || "Unknown",
        authSource: "google",
      });
    }

    if (!user) {
      throw new Error("Something went wrong");
    }

    const session = await sessionsService.createSession({ user });

    this.setHeader("Set-Cookie", `token=${session.token}`);

    return {
      payload,
      user,
    };
  }
}
