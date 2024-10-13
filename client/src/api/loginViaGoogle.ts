import { CredentialResponse } from "@react-oauth/google";
import { googleAuth } from "./openapi";

/**
 * Function that logs in a user via Google using '@react-oauth/google' library
 * Please use in the context of code/component from the mentioned library.
 */
export async function loginViaGoogle(credentialResponse: CredentialResponse) {
  if (!credentialResponse.credential || !credentialResponse.clientId) {
    return;
  }

  const response = await googleAuth({
    body: {
      credential: credentialResponse.credential,
      client_id: credentialResponse.clientId,
    },
  }).catch((error) => {
    console.error(error);
  });

  if (!response) {
    return;
  }

  const { user, token } = response.data ?? {};

  if (!user || !token) {
    throw new Error("Invalid response from server");
  }

  localStorage.setItem("token", `${token}`);
  localStorage.setItem("firstName", user.firstName);
  localStorage.setItem("lastName", user.lastName);
  localStorage.setItem("email", user.email);

  window.location.reload();
}
