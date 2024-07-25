/**
 * @file These type of errors are not meant to be exposed to the client.
 * They are meant to be used internally in the server to easier identify the source of the error.
 *
 * These are meant to be caught, logged and then re-thrown as a user-friendly error.
 */

export class InternalError extends Error {
  error?: unknown;

  constructor(message: string, error?: unknown) {
    super(message);

    this.name = "InternalError";
    this.error = error;
  }
}

export class RepositoryError extends InternalError {
  constructor(message: string, error: unknown) {
    super(message);

    this.name = "RepositoryError";
    this.error = error;
  }
}

export class ServiceError extends InternalError {
  constructor(message: string, error: unknown) {
    super(message);

    this.name = "ServiceError";
    this.error = error;
  }
}
