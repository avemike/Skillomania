import { OAuth2Client } from "google-auth-library";
import { Body, Post, Route, Controller } from "tsoa";
import { usersRepository } from "../users/users.repository";
import { BadRequestError } from "../../errors/publicErrors";
import { SessionsService } from "../sessions/sessions.service";

interface IGoogleAuthRequestBody {
  credential: string;
  client_id: string;
}

@Route("google-auth")
export class GoogleAuthController extends Controller {
  private sessionsService = new SessionsService();
  private googleOauthClient = new OAuth2Client(
    process.env.GOOGLE_OAUTH_CLIENT_ID,
    process.env.GOOGLE_OAUTH_CLIENT_SECRET
  );

  @Post()
  public async googleAuth(@Body() body: IGoogleAuthRequestBody) {
    const ticket = await this.googleOauthClient.verifyIdToken({
      idToken: body.credential,
      audience: body.client_id,
    });

    const payload = ticket.getPayload();
    const email = payload?.email;

    if (!email) {
      throw new BadRequestError("Email not found in payload");
    }

    if (!payload?.email_verified) {
      throw new BadRequestError("Email not verified");
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

    const { token } = await this.sessionsService.createSession({ user });

    return {
      user,
      token,
    };
  }
}
