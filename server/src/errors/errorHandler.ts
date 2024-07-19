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
    console.error("Unhandled error: ", err.message);

    return res.status(500).json({
      message: "Internal Server Error",
    });
  }

  next();
}

function handleInternalErrors(err: InternalError, res: ExResponse) {
  if (err instanceof RepositoryError) {
    console.error(`Caught Repository Error:`, err.message);
  }

  if (err instanceof ServiceError) {
    console.error(`Caught Service Error:`, err.message);
  }

  console.error(`Unhandled Internal Error:`, err.message, err);

  return res.status(500).json({
    message: "Internal Server Error",
  });
}

function handlePublicErrors(err: PublicError, res: ExResponse) {
  if (err instanceof ValidationError) {
    console.warn(`Caught Validation Error:`, err.message);

    return res.status(422).json(err);
  }

  if (err instanceof NotFoundError) {
    console.warn(`Caught Not Found Error:`, err.message);

    return res.status(404).json(err);
  }

  if (err instanceof UnauthorizedError) {
    console.warn(`Caught Unauthorized Error:`, err.message);

    return res.status(401).json(err);
  }

  if (err instanceof ForbiddenError) {
    console.warn(`Caught Forbidden Error:`, err.message);

    return res.status(403).json(err);
  }

  if (err instanceof BadRequestError) {
    console.warn(`Caught Bad Request Error:`, err.message);

    return res.status(400).json(err);
  }

  console.error(`Unhandled Public Error:`, err.message);

  return res.status(500).json({
    message: "Internal Server Error",
  });
}
