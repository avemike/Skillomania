/**
 * Standard fetch, but with pre-configured host
 *
 * @example
 * fetchBase("/challenges/series") === fetch("http://localhost:3005/challenges/series")
 */
export function fetchBase(url: string, options: RequestInit = {}) {
  return fetch(`${import.meta.env.VITE_SERVER_BASE_URL}${url}`, options);
}
