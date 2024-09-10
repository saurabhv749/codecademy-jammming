import { useState } from "react";
import SearchBar from "./SearchBar";
import SearchResults from "./SearchResults";
import CreatePlaylist from "./CreatePlaylist";
import TrackList from "./TrackList";
import AudioPlayer from "./AudioPlayer";

const Explore = () => {
  const [results, setResults] = useState([]);
  const [audio, setAudio] = useState(null);
  const [playlist, setPlaylist] = useState([]);

  const addToPlaylist = (itemId) => {
    const exists = playlist.find((x) => x.id === itemId);
    if (exists) return;
    const track = results.find((x) => x.id === itemId);
    setPlaylist((prev) => [track, ...prev]);
  };
  const removeFromPlaylist = (trackIdToRemove) =>
    setPlaylist(playlist.filter((track) => track.id !== trackIdToRemove));

  const changeAudio = (newAudio) => {
    if (newAudio.title === audio?.title) return;

    document.querySelector("audio")?.pause();
    setAudio(newAudio);
  };

  return (
    <div className="explore">
      <div className="search-container">
        <SearchBar setResults={setResults} />
        <SearchResults
          results={results}
          addToPlaylist={addToPlaylist}
          changeAudioSrc={changeAudio}
        />
        {audio && <AudioPlayer audio={audio} />}
      </div>
      <div className="playlist-container">
        <CreatePlaylist playlist={playlist} setPlaylist={setPlaylist} />
        <TrackList
          removeFromPlaylist={removeFromPlaylist}
          isResult={false}
          tracks={playlist}
        />
      </div>
    </div>
  );
};
export default Explore;
