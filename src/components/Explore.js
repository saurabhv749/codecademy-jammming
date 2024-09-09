import { useState } from "react";
import SearchBar from "./SearchBar";
import SearchResults from "./SearchResults";
import CreatePlaylist from "./CreatePlaylist";
import TrackList from "./TrackList";

const Explore = () => {
  const [results, setResults] = useState([]);
  const [playlist, setPlaylist] = useState([]);

  const addToPlaylist = (item) => setPlaylist((prev) => [item, ...prev]);
  const removeFromPlaylist = (trackIdToRemove) =>
    setPlaylist(playlist.filter((track) => track.id !== trackIdToRemove));

  return (
    <div className="explore">
      <div className="search-container">
        <SearchBar setResults={setResults} />
        <SearchResults results={results} addToPlaylist={addToPlaylist} />
      </div>
      <div className="playlist-container">
        <CreatePlaylist />
        <TrackList removeFromPlaylist={removeFromPlaylist} />
      </div>
    </div>
  );
};
export default Explore;
