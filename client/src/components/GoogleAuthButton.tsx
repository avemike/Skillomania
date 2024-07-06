import { GoogleLogin, GoogleOAuthProvider } from "@react-oauth/google";
import { loginViaGoogle } from "../api/loginViaGoogle";

export function GoogleAuthButton() {
  return (
    <GoogleOAuthProvider clientId={import.meta.env.VITE_OAUTH_CLIENT_ID}>
      <GoogleLogin
        onSuccess={loginViaGoogle}
        onError={() => {
          // @todo: Handle error
          console.log("Error");
        }}
      />
    </GoogleOAuthProvider>
  );
}
