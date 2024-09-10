import { CLIENT_ID } from "../config";
import { redirectToAuthCodeFlow } from "../utils";

const AuthForm = () => {
  const authenticateUser = () => {
    redirectToAuthCodeFlow(CLIENT_ID);
  };

  return (
    <div className="login-container">
      <div className="container">
        <h2>Unlock a personalized music experience!</h2>
        <p>
          Sign in with Spotify to explore your favorite tracks, playlists, and
          more.
        </p>
        <button className="btn" onClick={authenticateUser}>
          Connect with Spotify
        </button>
      </div>
    </div>
  );
};
export default AuthForm;
