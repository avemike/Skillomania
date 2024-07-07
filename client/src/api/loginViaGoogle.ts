import { CredentialResponse } from "@react-oauth/google";
import { fetchBase } from "./fetchBase";

/**
 * Function that logs in a user via Google using '@react-oauth/google' library
 * Please use in the context of code/component from the mentioned library.
 */
export async function loginViaGoogle(credentialResponse: CredentialResponse) {
  if (!credentialResponse.credential) {
    return;
  }

  const response = await fetchBase("/google-auth", {
    method: "POST",
    body: JSON.stringify({
      credential: credentialResponse.credential,
      client_id: credentialResponse.clientId,
    }),
    headers: {
      "Content-Type": "application/json",
    },
  }).catch((error) => {
    console.error(error);
  });

  if (!response) {
    return;
  }
  const data = await response.json();
  const user = data.user;

  localStorage.setItem("token", credentialResponse.credential);
  localStorage.setItem("firstName", user.firstName);
  localStorage.setItem("lastName", user.lastName);
  localStorage.setItem("email", user.email);

  window.location.reload();
}
