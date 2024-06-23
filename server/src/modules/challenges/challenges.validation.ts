import { IsInt, IsNotEmpty, IsOptional, Length } from "class-validator";
import { Request } from "express";
import { createPayloadValidator } from "../../helpers/createPayloadValidator";

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
}

export class CreateChallengeSeriesValidationSchema {
  @Length(5, 100)
  @IsNotEmpty()
  title!: string;

  @Length(5, 1000)
  @IsNotEmpty()
  description!: string;
}

export const createChallengeValidator = createPayloadValidator(
  (req: Request) => {
    const challenge = new CreateChallengeValidationSchema();

    challenge.title = req.body.title;
    challenge.description = req.body.description;
    challenge.seriesId = req.body.seriesId;

    return challenge;
  }
);

export const createChallengeSeriesValidator = createPayloadValidator(
  (req: Request) => {
    const series = new CreateChallengeSeriesValidationSchema();

    series.title = req.body.title;
    series.description = req.body.description;

    return series;
  }
);
