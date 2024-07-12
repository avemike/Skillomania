import express from "express";
import { extractContextFromRequest } from "../../helpers/extractContextFromRequest";

import { Controller, Get, Route, Request, Post, Body, Middlewares } from "tsoa";
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
  public async getChallenges(
    @Request() request: express.Request
  ): Promise<IChallenge[]> {
    return new ChallengesService().getLooseChallenges(
      extractContextFromRequest(request)
    );
  }

  @Get("series")
  public async getSeries(
    @Request() request: express.Request
  ): Promise<IChallengeSeries[]> {
    return new ChallengesService().getSeries(
      extractContextFromRequest(request)
    );
  }

  @Post()
  @Middlewares(createChallengeValidator)
  public async createChallenge(
    @Request() request: express.Request,
    @Body() body: { title: string; description: string }
  ): Promise<IChallenge> {
    return new ChallengesService().createChallenge({
      ...body,
      ...extractContextFromRequest(request),
    });
  }

  @Post("series")
  @Middlewares(createChallengeSeriesValidator)
  public async createChallengeSeries(
    @Request() request: express.Request,
    @Body() body: { title: string; description: string }
  ): Promise<IChallengeSeries> {
    return new ChallengesService().createChallengeSeries({
      ...body,
      ...extractContextFromRequest(request),
    });
  }
}
