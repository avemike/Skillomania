/**
 * @file These type of errors are not meant to be exposed to the client.
 * They are meant to be used internally in the server to easier identify the source of the error.
 *
 * These are meant to be caught, logged and then re-thrown as a user-friendly error.
 */

export class InternalError extends Error {
  constructor(message: string) {
    super(message);
  }
}

export class RepositoryError extends InternalError {
  constructor(message: string) {
    super(message);
    this.name = "RepositoryError";
  }
}

export class ServiceError extends InternalError {
  constructor(message: string) {
    super(message);
    this.name = "ServiceError";
  }
}
