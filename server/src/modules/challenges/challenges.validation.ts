import { IsInt, IsNotEmpty, IsOptional, Length } from "class-validator";
import { Request } from "express";
import { createPayloadValidator } from "../../helpers/createPayloadValidator";
import { IChallenge } from "../../models/IChallenge";
import { IChallengeSeries } from "../../models/IChallengeSeries";

export class CreateChallengeValidationSchema {
  @Length(5, 100)
  @IsNotEmpty()
  title!: string;

  @Length(5, 1000)
  @IsNotEmpty()
  description!: string;

  @IsInt()
  @IsOptional()
  seriesId?: number;

  @IsInt()
  @IsNotEmpty()
  categoryId!: number;

  @IsInt()
  @IsNotEmpty()
  effortLevel!: IChallenge["effortLevel"];

  @IsInt()
  @IsNotEmpty()
  requiredExpertise!: IChallenge["requiredExpertise"];

  @Length(5, 5000)
  @IsOptional()
  difficultyExplanation?: string;
}

export class CreateChallengeSeriesValidationSchema {
  @Length(5, 100)
  @IsNotEmpty()
  title!: string;

  @Length(5, 1000)
  @IsNotEmpty()
  description!: string;

  @IsInt()
  @IsNotEmpty()
  categoryId!: number;

  @IsInt()
  @IsNotEmpty()
  effortLevel!: IChallengeSeries["effortLevel"];

  @IsInt()
  @IsNotEmpty()
  requiredExpertise!: IChallengeSeries["requiredExpertise"];

  @Length(5, 5000)
  @IsOptional()
  difficultyExplanation?: string;
}

export const createChallengeValidator = createPayloadValidator(
  (req: Request) => {
    console.log("[createChallengeValidator]: ", req.body);
    const challenge = new CreateChallengeValidationSchema();

    challenge.title = req.body.title;
    challenge.description = req.body.description;
    challenge.seriesId = req.body.seriesId;
    challenge.categoryId = req.body.categoryId;
    challenge.effortLevel = req.body.effortLevel;
    challenge.requiredExpertise = req.body.requiredExpertise;
    challenge.difficultyExplanation = req.body.difficultyExplanation;

    return challenge;
  }
);

export const createChallengeSeriesValidator = createPayloadValidator(
  (req: Request) => {
    const series = new CreateChallengeSeriesValidationSchema();

    series.title = req.body.title;
    series.description = req.body.description;
    series.categoryId = req.body.categoryId;
    series.effortLevel = req.body.effortLevel;
    series.requiredExpertise = req.body.requiredExpertise;
    series.difficultyExplanation = req.body.difficultyExplanation;

    return series;
  }
);
