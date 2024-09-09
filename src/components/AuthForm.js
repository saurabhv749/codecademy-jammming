import { CLIENT_ID } from "../config";
import { redirectToAuthCodeFlow } from "../utils";

const AuthForm = () => {
  const authenticateUser = () => {
    redirectToAuthCodeFlow(CLIENT_ID);
  };

  return (
    <div>
      <h2>Try it now by authenticating using Spotify </h2>
      <button onClick={authenticateUser}>Sign In with Spotify</button>
    </div>
  );
};
export default AuthForm;
