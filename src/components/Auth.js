import { useEffect, useState } from "react";
import AuthForm from "./AuthForm";
import { useNavigate, useSearchParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { setProfile } from "../store/profileSlice";
import { CLIENT_ID } from "../config";
import { fetchProfile, getAccessToken } from "../utils";

const Auth = () => {
  const { user } = useSelector((state) => state.profile);
  const dispatch = useDispatch();

  const navigate = useNavigate();
  const [searchParams] = useSearchParams();

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (user) {
      navigate("/library");
    }
    setLoading(false); // no user, show login form

    const saveTokenAndProfile = async (code) => {
      const accessToken = await getAccessToken(CLIENT_ID, code);
      const user = await fetchProfile(accessToken);
      if (accessToken && user) {
        dispatch(setProfile({ user, accessToken }));
        localStorage.setItem("access_token", accessToken);
      }
    };

    const code = searchParams.get("code");
    if (code) {
      setLoading(true);
      saveTokenAndProfile(code);
    }
  }, [searchParams, navigate, user, dispatch]);

  return <AuthForm loading={loading} />;
};

export default Auth;
