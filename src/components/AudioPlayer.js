import { useSelector } from "react-redux";

const AudioPlayer = () => {
  const { track } = useSelector((state) => state.audioPlayer);

  if (!track) {
    return null;
  }

  return (
    <div className="audio-player">
      <div className="player-container">
        <img src={track.poster} alt="track poster" />
        <span className="track-title">{track.title}</span>
        <audio
          src={track.preview_url}
          className="audioPlayer"
          autoPlay
          controls
          loop
        ></audio>
      </div>
    </div>
  );
};
export default AudioPlayer;
