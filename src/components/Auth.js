import { useEffect } from "react";
import { fetchProfile, getAccessToken } from "../utils";
import { CLIENT_ID } from "../config";

const Auth = ({ profile, setProfile }) => {
  useEffect(() => {
    const saveTokenAndProfile = async (code) => {
      const accessToken = await getAccessToken(CLIENT_ID, code);
      const profile = await fetchProfile(accessToken);
      if (accessToken && profile) {
        window.history.pushState({}, "", window.location.origin);
        localStorage.setItem("access_token", accessToken);
        localStorage.setItem("user_id", profile.id);
        setProfile(profile);
      }
    };
    const params = new URLSearchParams(window.location.search);
    const code = params.get("code");

    if (!profile && code) {
      saveTokenAndProfile(code);
    }
  }, [profile, setProfile]);

  return null;
};
export default Auth;
