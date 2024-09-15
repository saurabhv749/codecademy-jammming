import { authenticateUser } from "../utils";

const AuthForm = ({ loading }) => {
  return (
    <div className="login-container">
      <div className="container">
        {loading ? (
          <p>Loading...</p>
        ) : (
          <>
            <h2>Unlock a personalized music experience!</h2>
            <p>
              Sign in with Spotify to explore your favorite tracks, playlists,
              and more.
            </p>
            <button className="btn" onClick={authenticateUser}>
              Connect with Spotify
            </button>
          </>
        )}
      </div>
    </div>
  );
};
export default AuthForm;
