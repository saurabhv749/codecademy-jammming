import { useSelector } from "react-redux";

const Track = ({
  track,
  //
  isResult,
  changeTrack,
  addToPlaylist,
  removeFromPlaylist,
}) => {
  const { track: currentTrack } = useSelector((state) => state.audioPlayer);

  const { id, title, album, poster, artists, duration, preview_url } = track;
  const playing = currentTrack?.id === id;

  const previewTrack = (e) => {
    const newAudio = { id, poster, title, preview_url };
    changeTrack(newAudio);
  };

  const handleAddToPlaylist = (e) => {
    addToPlaylist(id);
  };
  const handleRemoveFromPlaylist = (e) => {
    removeFromPlaylist(id);
  };

  return (
    <article className={playing ? "track playing" : "track"} id={"track-" + id}>
      {preview_url && isResult && (
        <span
          className="icon-play"
          title="preview track"
          onClick={previewTrack}
        >
          <svg
            className="icon "
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            fill="none"
            viewBox="0 0 24 24"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M8 18V6l8 6-8 6Z"
            />
          </svg>
        </span>
      )}
      <div className="media-info">
        <div className="poster">
          <img src={poster} alt={album + " poster"} />
        </div>
        <div className="info">
          <p className="album">{album}</p>
          <p className="artist">{artists}</p>
        </div>
      </div>
      <p className="title">{title}</p>
      <p className="duration">{duration}</p>
      <span>
        {isResult ? (
          <svg
            className="icon"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            onClick={handleAddToPlaylist}
          >
            <title>add to playlist</title>
            <path d="M19,13H13V19H11V13H5V11H11V5H13V11H19V13Z" />
          </svg>
        ) : (
          <svg
            className="icon"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            onClick={handleRemoveFromPlaylist}
          >
            <title>remove from playlist</title>
            <path d="M19,6.41L17.59,5L12,10.59L6.41,5L5,6.41L10.59,12L5,17.59L6.41,19L12,13.41L17.59,19L19,17.59L13.41,12L19,6.41Z" />
          </svg>
        )}
      </span>
    </article>
  );
};
export default Track;
