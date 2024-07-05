import { GoogleLogin, GoogleOAuthProvider } from "@react-oauth/google";

export function GoogleAuthButton() {
  return (
    <GoogleOAuthProvider clientId={import.meta.env.VITE_OAUTH_CLIENT_ID}>
      <GoogleLogin
        onSuccess={(credentialResponse) => {
          console.log(credentialResponse);
        }}
        onError={() => {
          // @todo: Handle error
          console.log("Error");
        }}
      />
    </GoogleOAuthProvider>
  );
}
