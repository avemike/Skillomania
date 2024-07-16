import { validateOrReject } from "class-validator";
import { NextFunction, Request, Response } from "express";
import { BadRequestError, ValidationError } from "../errors/publicErrors";
import { ValidationError as ClassValidatorValidationError } from "class-validator";

export const createPayloadValidator = (
  getValidationSchema: (req: Request) => Record<string, any>
) => {
  return async (req: Request, _res: Response, next: NextFunction) => {
    if (!req.body) {
      next(new BadRequestError("Missing request body!"));
    }

    const schema = getValidationSchema(req);

    await validateOrReject(schema).catch(
      (errors: ClassValidatorValidationError[]) => {
        next(new ValidationError("Validation Error", errors));
      }
    );

    return next();
  };
};
