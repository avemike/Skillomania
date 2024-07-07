/**
 * Standard fetch, but with pre-configured options like base url or authorization
 */
export function fetchBase(url: string, options: RequestInit = {}) {
  const token = localStorage.getItem("token");

  return fetch(`${import.meta.env.VITE_SERVER_BASE_URL}${url}`, {
    ...options,
    headers: {
      ...options.headers,
      ...(token && { Authorization: `Bearer ${token}` }),
    },
    credentials: "include",
  });
}
