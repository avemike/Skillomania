/**
 * @fileoverview Tsoa error constants
 * For now they aren't used anywhere in the codebase. I've created them and added to the flow, but
 * realized that using them in controllers quickly makes the codebase less readable.
 *
 * I'm keeping them here for now, but I'm considering removing them in the future.
 */

import { ValidationError } from "class-validator";

export interface TsoaErrorBody {
  status: number;
  title: string;
  detail?: string;
  errors?: ValidationError[];
}

export const TSOA_VALIDATION_ERROR = {
  status: 422,
  title: "Validation Failed",
  errors: [],
};

export const TSOA_BAD_REQUEST_ERROR = {
  status: 400,
  title: "Bad Request",
  detail: "Bad Request",
};

export const TSOA_UNAUTHORIZED_ERROR = {
  status: 401,
  title: "Unauthorized",
  detail: "Unauthorized",
};

export const TSOA_FORBIDDEN_ERROR = {
  status: 403,
  title: "Forbidden",
  detail: "Forbidden",
};

export const TSOA_NOT_FOUND_ERROR = {
  status: 404,
  title: "Not Found",
  detail: "Not Found",
};

export const TSOA_INTERNAL_SERVER_ERROR = {
  status: 500,
  title: "Internal Server Error",
  detail: "Internal Server Error",
};
