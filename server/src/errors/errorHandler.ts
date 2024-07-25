import {
  NextFunction,
  Request as ExRequest,
  Response as ExResponse,
} from "express";
import {
  BadRequestError,
  ForbiddenError,
  NotFoundError,
  PublicError,
  UnauthorizedError,
  ValidationError,
} from "./publicErrors";
import { InternalError, RepositoryError, ServiceError } from "./internalErrors";
import { logger } from "../pino";

export function errorHandler(
  err: unknown,
  _req: ExRequest,
  res: ExResponse,
  next: NextFunction
): ExResponse | void {
  // Internal errors shouldn't be exposed.
  if (err instanceof InternalError) {
    handleInternalErrors(err, res);
  }

  if (err instanceof PublicError) {
    handlePublicErrors(err, res);
  }

  if (err instanceof Error) {
    logger.error("Unhandled error: ", err.message);

    return res.status(500).json({
      message: "Internal Server Error",
    });
  }

  next();
}

function handleInternalErrors(err: InternalError, res: ExResponse) {
  if (err instanceof RepositoryError) {
    logger.error(err, `Caught Repository Error: ${err.message}`);
  }

  if (err instanceof ServiceError) {
    logger.error(`Caught Service Error:`, err.message);
  }

  logger.error(`Unhandled Internal Error:`, err.message, err);

  return res.status(500).json({
    message: "Internal Server Error",
  });
}

function handlePublicErrors(err: PublicError, res: ExResponse) {
  if (err instanceof ValidationError) {
    logger.warn(`Caught Validation Error:`, err.message);

    return res.status(422).json(err);
  }

  if (err instanceof NotFoundError) {
    logger.warn(`Caught Not Found Error:`, err.message);

    return res.status(404).json(err);
  }

  if (err instanceof UnauthorizedError) {
    logger.warn(`Caught Unauthorized Error:`, err.message);

    return res.status(401).json(err);
  }

  if (err instanceof ForbiddenError) {
    logger.warn(`Caught Forbidden Error:`, err.message);

    return res.status(403).json(err);
  }

  if (err instanceof BadRequestError) {
    logger.warn(`Caught Bad Request Error:`, err.message);

    return res.status(400).json(err);
  }

  logger.error(`Unhandled Public Error:`, err.message);

  return res.status(500).json({
    message: "Internal Server Error",
  });
}
