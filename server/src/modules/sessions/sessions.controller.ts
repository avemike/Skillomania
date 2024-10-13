import { Controller, Post, Route, Request } from "tsoa";
import { SessionsService } from "./sessions.service";
import { ServerContext } from "../../types/custom";
import { BadRequestError } from "../../errors/publicErrors";

@Route("sessions")
export class SessionsController extends Controller {
  sessionsService = new SessionsService();

  @Post("logout")
  public async logout(@Request() request: ServerContext) {
    if (!request.user?.id) {
      throw new BadRequestError("Authentication required");
    }

    await this.sessionsService.deleteSessions({
      userId: request.user.id,
    });
  }
}
