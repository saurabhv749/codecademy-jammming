import Track from "./Track";

const TrackList = ({
  tracks,
  isResult,
  changeAudioSrc,
  addToPlaylist,
  removeFromPlaylist,
}) => {
  return (
    <div>
      {tracks.map((track) => (
        <Track
          key={track.id}
          isResult={isResult}
          {...track}
          addToPlaylist={addToPlaylist}
          changeAudioSrc={changeAudioSrc}
          removeFromPlaylist={removeFromPlaylist}
        />
      ))}
    </div>
  );
};
export default TrackList;
