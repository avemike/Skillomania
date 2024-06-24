import { validateOrReject } from "class-validator";
import { NextFunction, Request, Response } from "express";

export const createPayloadValidator = (
  getValidationSchema: (req: Request) => object
) => {
  return async (req: Request, res: Response, next: NextFunction) => {
    try {
      if (!req.body) {
        return res.status(400).send({ message: "Missing request body!" });
      }

      const schema = getValidationSchema(req);

      await validateOrReject(schema);

      next();
    } catch (e: any) {
      const message = Object.values(e[0].constraints)[0];

      res.status(400).send({ message });
    }
  };
};
