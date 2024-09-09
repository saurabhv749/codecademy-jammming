import { useState } from "react";
import "./App.css";
import Auth from "./components/Auth";
import AuthForm from "./components/AuthForm";
import Header from "./components/Header";
import Explore from "./components/Explore";

function App() {
  const [profile, setProfile] = useState(null);

  return (
    <main>
      <Auth profile={profile} setProfile={setProfile} />
      <Header userProfile={profile} />
      {profile && profile.email ? <Explore /> : <AuthForm />}
    </main>
  );
}

export default App;
