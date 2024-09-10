import { useState } from "react";
import { savePlaylistToSpotify } from "../utils";

const CreatePlaylist = ({ playlist, setPlaylist }) => {
  const [name, setName] = useState("");
  const handleNameChange = (e) => setName(e.target.value);

  const handlePlaylistSubmit = (e) => {
    e.preventDefault();
    // upload playlist
    savePlaylistToSpotify({
      playlistName: name,
      trackIds: playlist.map((x) => x.uri),
    });

    setName("");
    setPlaylist([]);
  };

  return (
    <div>
      <h2>Save playlist to Spotify</h2>
      <form onSubmit={handlePlaylistSubmit}>
        <input type="text" value={name} onChange={handleNameChange} required />
        <input className="btn" type="submit" value="Save" />
      </form>
    </div>
  );
};
export default CreatePlaylist;
