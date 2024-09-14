import Track from "./Track";

const TrackList = ({
  tracks,
  isResult,
  // optional methods
  changeTrack,
  addToPlaylist,
  removeFromPlaylist,
}) => {
  return (
    <>
      {tracks.map((track) => (
        <Track
          key={track.id}
          track={track}
          isResult={isResult}
          changeTrack={changeTrack}
          addToPlaylist={addToPlaylist}
          removeFromPlaylist={removeFromPlaylist}
        />
      ))}
    </>
  );
};
export default TrackList;
