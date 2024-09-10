const AudioPlayer = ({ audio }) => {
  return (
    <div className="audio-player">
      <div className="player-container">
        <img src={audio?.poster} alt="track poster" />
        <span className="track-title">{audio?.title}</span>
        <audio
          src={audio?.preview_url}
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
