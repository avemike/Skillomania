import { RepositoryError, ServiceError } from "./internalErrors";

export function wrapInRepositoryError<T extends (...args: any[]) => any>(
  fn: T
): (...args: Parameters<T>) => Promise<ReturnType<T>> {
  return async (...args: Parameters<T>): Promise<ReturnType<T>> => {
    try {
      return await fn(...args);
    } catch (error) {
      throw new RepositoryError(
        `Repository error in "${fn.name}"`,
        error as Error
      );
    }
  };
}

export function wrapInServiceError<T extends (...args: any[]) => any>(
  fn: T
): (...args: Parameters<T>) => Promise<ReturnType<T>> {
  return async (...args: Parameters<T>): Promise<ReturnType<T>> => {
    try {
      return await fn(...args);
    } catch (error) {
      throw new ServiceError(`Service error in "${fn.name}"`, error as Error);
    }
  };
}

export function catchRepositoryHandler(error: unknown, fnName: string) {
  throw new RepositoryError(`Repository error in "${fnName}"`, error as Error);
}
