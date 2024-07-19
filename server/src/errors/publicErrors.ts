import { ValidationError as ClassValidatorValidationError } from "class-validator";

export class PublicError extends Error {
  constructor(message: string) {
    super(message);
  }
}

export class ValidationError extends PublicError {
  errors: ClassValidatorValidationError[] = [];

  constructor(message: string, errors?: ClassValidatorValidationError[]) {
    super(message);

    if (errors) {
      this.errors = errors;
    }
  }
}

export class NotFoundError extends PublicError {
  constructor(message: string) {
    super(message);
  }
}

export class UnauthorizedError extends PublicError {
  constructor(message: string) {
    super(message);
  }
}

export class ForbiddenError extends PublicError {
  constructor(message: string) {
    super(message);
  }
}

export class BadRequestError extends PublicError {
  constructor(message: string) {
    super(message);
  }
}
