import { useEffect, useState } from "react";
import AuthForm from "./AuthForm";
import { useNavigate, useSearchParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { setProfile } from "../store/profileSlice";
import { getTokenAndProfile } from "../utils";

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

    const code = searchParams.get("code");
    if (code) {
      setLoading(true);
      // save token and user profile
      const saveTokenAndProfile = async (authCode) => {
        const { user, accessToken } = await getTokenAndProfile(authCode);
        if (accessToken && user) {
          dispatch(setProfile({ user, accessToken }));
          localStorage.setItem("access_token", accessToken);
        }
      };
      saveTokenAndProfile(code);
    }
  }, [searchParams, navigate, user, dispatch]);

  return <AuthForm loading={loading} />;
};

export default Auth;
