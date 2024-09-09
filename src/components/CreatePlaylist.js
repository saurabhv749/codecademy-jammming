import { useState } from "react";

const CreatePlaylist = () => {
  const [name, setName] = useState("");
  const handleNameChange = (e) => setName(e.target.value);
  const handlePlaylistSubmit = (e) => {
    e.preventDefault();
    console.log(name);
    // upload playlist
  };
  return (
    <div>
      <form onSubmit={handlePlaylistSubmit}>
        <label htmlFor="playlistName">Playlist Name</label>
        <input type="text" value={name} onChange={handleNameChange} required />
        <input type="submit" value="Save Playlist" />
      </form>
      <h2>{name}</h2>
    </div>
  );
};
export default CreatePlaylist;
