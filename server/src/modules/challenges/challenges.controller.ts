import { Controller, Get, Route, Post, Body, Middlewares } from "tsoa";
import { ChallengesService } from "./challenges.service";
import { IChallenge } from "../../models/IChallenge";
import { IChallengeSeries } from "../../models/IChallengeSeries";
import {
  createChallengeSeriesValidator,
  createChallengeValidator,
} from "./challenges.validation";

@Route("challenges")
export class ChallengesController extends Controller {
  @Get()
  public async getChallenges(): Promise<IChallenge[]> {
    return new ChallengesService().getLooseChallenges();
  }

  @Get("series")
  public async getSeries(): Promise<IChallengeSeries[]> {
    return new ChallengesService().getSeries({});
  }

  @Post()
  @Middlewares(createChallengeValidator)
  public async createChallenge(
    @Body()
    body: {
      title: string;
      description: string;
      seriesId?: number | null;
    }
  ): Promise<IChallenge> {
    return new ChallengesService().createChallenge(body);
  }

  @Post("series")
  @Middlewares(createChallengeSeriesValidator)
  public async createChallengeSeries(
    @Body() body: { title: string; description: string }
  ): Promise<IChallengeSeries> {
    return new ChallengesService().createChallengeSeries(body);
  }
}
