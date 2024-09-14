import { Navigate } from "react-router-dom";
import { useSelector } from "react-redux";
import SearchBar from "../components/SearchBar";
import SearchResults from "../components/SearchResults";
import AudioPlayer from "../components/AudioPlayer";
import CreatePlaylist from "../components/CreatePlaylist";
import UserPlaylist from "../components/UserPlaylist";

const Library = () => {
  const { user } = useSelector((state) => state.profile);

  if (!user) return <Navigate to="/" />;

  return (
    <div className="explore">
      <div className="search-container">
        <SearchBar />
        <SearchResults />
        <AudioPlayer />
      </div>
      <div className="playlist-container">
        <CreatePlaylist />
        <UserPlaylist />
      </div>
    </div>
  );
};
export default Library;
