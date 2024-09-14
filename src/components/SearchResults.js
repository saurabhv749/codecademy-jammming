import { useDispatch, useSelector } from "react-redux";
import TrackList from "./TrackList";
import { setTrack } from "../store/audioPlayerSlice";
import { addTrack } from "../store/playlistSlice";

const SearchResults = () => {
  const dispatch = useDispatch();
  const { tracks: searchResultTracks } = useSelector(
    (state) => state.searchResults
  );
  const { tracks: playlistTracks } = useSelector((state) => state.playlist);
  const { track: currentTrack } = useSelector((state) => state.audioPlayer);

  const addToPlaylist = (itemId) => {
    const exists = playlistTracks.find((x) => x.id === itemId);
    if (exists) return;
    const track = searchResultTracks.find((x) => x.id === itemId);
    dispatch(addTrack(track));
  };

  const changeTrack = (newAudio) => {
    if (newAudio.title === currentTrack?.title) return;

    document.querySelector("audio")?.pause();
    dispatch(setTrack(newAudio));
  };

  return (
    <div className="search-results">
      <h2>Search Results</h2>
      <TrackList
        tracks={searchResultTracks}
        isResult={true}
        addToPlaylist={addToPlaylist}
        changeTrack={changeTrack}
      />
    </div>
  );
};
export default SearchResults;
