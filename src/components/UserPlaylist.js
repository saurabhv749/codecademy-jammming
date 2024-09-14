import { useDispatch, useSelector } from "react-redux";
import TrackList from "./TrackList";
import { removeTrack } from "../store/playlistSlice";

const UserPlaylist = () => {
  const dispatch = useDispatch();
  const { tracks: playlistTracks } = useSelector((state) => state.playlist);

  const removeFromPlaylist = (trackId) => {
    dispatch(removeTrack(trackId));
  };

  return (
    <TrackList
      isResult={false}
      tracks={playlistTracks}
      removeFromPlaylist={removeFromPlaylist}
    />
  );
};
export default UserPlaylist;
