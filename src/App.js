import { useState } from "react";
import "./App.css";
import Auth from "./components/Auth";
import AuthForm from "./components/AuthForm";
import Header from "./components/Header";
import Explore from "./components/Explore";

function App() {
  const [profile, setProfile] = useState(null);

  if (!profile?.email) {
    return (
      <main>
        <Auth profile={profile} setProfile={setProfile} />
        <Header userProfile={profile} />
        <AuthForm />
      </main>
    );
  }

  return (
    <main>
      <Auth profile={profile} setProfile={setProfile} />
      <Header userProfile={profile} />
      <Explore />
    </main>
  );
}

export default App;
