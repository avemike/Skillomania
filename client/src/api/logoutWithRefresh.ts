import { logout } from "./openapi";

export async function logoutWithRefresh() {
  await logout();
  window.location.reload();
}
