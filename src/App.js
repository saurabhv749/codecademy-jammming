import { useState } from "react";
import "./App.css";
import Auth from "./components/Auth";
import Header from "./components/Header";
import Explore from "./components/Explore";

function App() {
  const [profile, setProfile] = useState(null);

  return (
    <main>
      <Header userProfile={profile} />
      <Auth profile={profile} setProfile={setProfile} />
      {profile?.email && <Explore />}
    </main>
  );
}

export default App;
