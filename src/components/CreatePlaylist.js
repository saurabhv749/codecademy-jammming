import { useState } from "react";
import { savePlaylistToSpotify } from "../utils";
import { useDispatch, useSelector } from "react-redux";
import { removeAllTracks } from "../store/playlistSlice";

const CreatePlaylist = () => {
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.profile);
  const { tracks } = useSelector((state) => state.playlist);

  const [name, setName] = useState("");
  const handleNameChange = (e) => setName(e.target.value);

  const handlePlaylistSubmit = (e) => {
    e.preventDefault();
    // upload playlist
    savePlaylistToSpotify({
      playlistName: name,
      trackIds: tracks.map((x) => x.uri),
      userID: user?.id,
    });

    setName("");
    dispatch(removeAllTracks());
  };

  return (
    <div>
      <h2>Save playlist to Spotify</h2>
      <form onSubmit={handlePlaylistSubmit}>
        <input type="text" value={name} onChange={handleNameChange} required />
        <input
          disabled={!tracks.length || !name}
          className="btn"
          type="submit"
          value="Save"
        />
      </form>
    </div>
  );
};
export default CreatePlaylist;
