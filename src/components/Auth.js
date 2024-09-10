import { useEffect, useState } from "react";
import { fetchProfile, getAccessToken } from "../utils";
import { CLIENT_ID } from "../config";
import AuthForm from "./AuthForm";

const Auth = ({ profile, setProfile }) => {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const saveTokenAndProfile = async (code) => {
      const accessToken = await getAccessToken(CLIENT_ID, code);
      const profile = await fetchProfile(accessToken);
      if (accessToken && profile) {
        setLoading(null);
        setProfile(profile);
        window.history.pushState({}, "", window.location.origin + "/library");
        // required by spotify util functions
        localStorage.setItem("access_token", accessToken);
        localStorage.setItem("user_id", profile.id);
      }
    };
    const params = new URLSearchParams(window.location.search);
    const code = params.get("code");

    if (!profile && code) {
      setLoading(true);
      saveTokenAndProfile(code);
    }
  }, [profile, setProfile]);

  if (loading === null) {
    return null;
  }

  return !loading && <AuthForm />;
};
export default Auth;
