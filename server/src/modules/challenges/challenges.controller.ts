import {
  Controller,
  Get,
  Route,
  Post,
  Body,
  Middlewares,
  SuccessResponse,
  Request,
} from "tsoa";
import { ChallengesService } from "./challenges.service";
import { IChallenge } from "../../models/IChallenge";
import { IChallengeSeries } from "../../models/IChallengeSeries";
import {
  CreateChallengeSeriesValidationSchema,
  createChallengeSeriesValidator,
  CreateChallengeValidationSchema,
  createChallengeValidator,
} from "./challenges.validation";
import { ServerContext } from "../../types/custom";
import { UnauthorizedError } from "../../errors/publicErrors";
import { ICategory } from "../../models/ICategory";

@Route("challenges")
export class ChallengesController extends Controller {
  challengesService: ChallengesService = new ChallengesService();

  @Get()
  public async getChallenges(): Promise<IChallenge[]> {
    return this.challengesService.getLooseChallenges();
  }

  @Get("series")
  public async getSeries(): Promise<IChallengeSeries[]> {
    return this.challengesService.getSeries({});
  }

  @Get("categories")
  public async getCategories(): Promise<ICategory[]> {
    return this.challengesService.getCategories();
  }

  @SuccessResponse("201", "Created")
  @Middlewares(createChallengeValidator)
  @Post()
  public async createChallenge(
    @Body()
    body: CreateChallengeValidationSchema,
    @Request() request: ServerContext
  ): Promise<IChallenge> {
    if (!request.user) {
      throw new UnauthorizedError(
        "You must be logged in to create a challenge"
      );
    }

    const response = await this.challengesService.createChallenge({
      title: body.title,
      description: body.description,
      categoryId: body.categoryId,
      effortLevel: body.effortLevel,
      requiredExpertise: body.requiredExpertise,
      difficultyExplanation: body.difficultyExplanation,
      seriesId: body.seriesId,
      authorId: request.user.id,
    });

    this.setStatus(201);
    return response;
  }

  @SuccessResponse("201", "Created")
  @Middlewares(createChallengeSeriesValidator)
  @Post("series")
  public async createChallengeSeries(
    @Body() body: CreateChallengeSeriesValidationSchema,
    @Request() request: ServerContext
  ): Promise<IChallengeSeries> {
    if (!request.user) {
      throw new UnauthorizedError("You must be logged in to create a series");
    }

    return this.challengesService.createChallengeSeries({
      title: body.title,
      description: body.description,
      categoryId: body.categoryId,
      effortLevel: body.effortLevel,
      requiredExpertise: body.requiredExpertise,
      difficultyExplanation: body.difficultyExplanation,
      authorId: request.user.id,
    });
  }
}
